(function(){
  // Перетаскивание лент мышью. Палец и трекпад листают штатной прокруткой браузера.
  // Движение слушаем на всём окне, чтобы лента не отставала, когда курсор уходит с неё.
  window.enableDragScroll=function(el,opts){
    if(!el||el.__dragScroll)return;
    el.__dragScroll=true;
    var align=(opts&&opts.align)||'start';
    // лента со снапом: пока тянем мышью, притягивание выключено классом is-dragging,
    // после отпускания кадр доводится один раз - второй доводки нет (Eugene, 11.10)
    var s=null,suppressClick=false,settleTimer=null;

    function itemPos(ch){
      if(align==='center')return ch.offsetLeft+ch.offsetWidth/2-el.clientWidth/2;
      return ch.offsetLeft-(parseFloat(getComputedStyle(el).scrollPaddingLeft)||0);
    }
    function settleNear(target){
      var max=el.scrollWidth-el.clientWidth,best=el.scrollLeft,bd=Infinity;
      Array.prototype.forEach.call(el.children,function(ch){
        var p=Math.max(0,Math.min(max,itemPos(ch))),d=Math.abs(p-target);
        if(d<bd){bd=d;best=p;}
      });
      el.scrollTo({left:best,behavior:'smooth'});
      clearTimeout(settleTimer);
      // притягивание включаем обратно только после доводки, иначе лента дёргается назад
      settleTimer=setTimeout(function(){el.classList.remove('is-dragging');},450);
    }
    function onMove(e){
      if(!s||e.pointerId!==s.id)return;
      var dx=e.clientX-s.x;
      if(!s.moved){
        if(Math.abs(dx)<3)return;
        s.moved=true;
        el.classList.add('is-dragging');
      }
      e.preventDefault();
      var now=performance.now(),dt=now-s.lt;
      if(dt>0)s.v=0.7*((e.clientX-s.lx)/dt)+0.3*s.v;
      s.lx=e.clientX;s.lt=now;
      el.scrollLeft=s.left-dx;
    }
    function onUp(e){
      if(!s||e.pointerId!==s.id)return;
      window.removeEventListener('pointermove',onMove);
      window.removeEventListener('pointerup',onUp);
      window.removeEventListener('pointercancel',onUp);
      var st=s;s=null;
      if(!st.moved){el.classList.remove('is-dragging');return;}
      suppressClick=true;
      setTimeout(function(){suppressClick=false;},80);
      if(performance.now()-st.lt>100)st.v=0;
      settleNear(el.scrollLeft-st.v*180);
    }
    el.addEventListener('pointerdown',function(e){
      if(e.pointerType!=='mouse'||e.button!==0)return;
      clearTimeout(settleTimer);
      el.classList.add('is-dragging');
      el.scrollTo({left:el.scrollLeft,behavior:'auto'});
      s={id:e.pointerId,x:e.clientX,left:el.scrollLeft,lx:e.clientX,lt:performance.now(),v:0,moved:false};
      window.addEventListener('pointermove',onMove);
      window.addEventListener('pointerup',onUp);
      window.addEventListener('pointercancel',onUp);
    });
    el.addEventListener('click',function(e){if(suppressClick){e.preventDefault();e.stopPropagation();}},true);
    el.addEventListener('dragstart',function(e){e.preventDefault();});
  };

  // Заголовок, который должен лечь ровно в заданное число строк. Размер подбираем
  // по факту, а не формулой из vw: ширина букв зависит от того, успел ли загрузиться
  // Onest, и расчёт «на глаз» промахивался на пару процентов - заголовок уезжал на
  // лишнюю строку (Eugene, 11.10). Каждая часть заголовка - свой блок (.l1 и em),
  // каждая должна поместиться в одну строку.
  // Сколько строк разрешено - в самой разметке: data-fit="2" или "3".
  window.fitHeading=function(el,maxLines,minPx){
    if(!el)return;
    el.style.fontSize='';
    var size=parseFloat(getComputedStyle(el).fontSize),min=minPx||16,guard=0;
    function lines(){
      var lh=parseFloat(getComputedStyle(el).lineHeight)||size*1.2;
      return Math.round(el.offsetHeight/lh);
    }
    while(lines()>maxLines&&size>min&&guard++<40){size-=1;el.style.fontSize=size+'px';}
  };
  function fitAll(){
    var hs=document.querySelectorAll('[data-fit]');
    for(var i=0;i<hs.length;i++){
      var n=parseInt(hs[i].getAttribute('data-fit'),10);
      window.fitHeading(hs[i],n>0?n:2,16);
    }
  }
  window.fitHeadings=fitAll;
  var fitTimer=null;
  function fitSoon(){clearTimeout(fitTimer);fitTimer=setTimeout(fitAll,120);}
  window.addEventListener('resize',fitSoon);
  window.addEventListener('load',fitAll);
  if(document.readyState!=='loading')setTimeout(fitAll,0);
  else document.addEventListener('DOMContentLoaded',fitAll);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitAll);
  // страницу ГБО рисует React, а заголовки потом переразбирает dvizhenie.js на слова -
  // к моменту load заголовков ещё нет, поэтому пересчитываем и на изменения разметки
  if(window.MutationObserver){
    new MutationObserver(fitSoon).observe(document.documentElement,{childList:true,subtree:true});
  }

  // Лента работ, как на АвтоРегионе 161: активная карточка по центру, соседи приглушены
  // и уменьшены, нажатие на соседа подвозит его в центр. Тянется мышью через enableDragScroll.
  window.initDock=function(el){
    if(!el||el.__dock)return;
    el.__dock=true;
    var items=Array.prototype.slice.call(el.children),active=-1;
    function centerOf(i){var ch=items[i];return ch.offsetLeft+ch.offsetWidth/2-el.clientWidth/2;}
    function nearest(){var best=0,bd=Infinity;items.forEach(function(_,i){var d=Math.abs(centerOf(i)-el.scrollLeft);if(d<bd){bd=d;best=i;}});return best;}
    function mark(){var i=nearest();if(i===active)return;if(items[active])items[active].classList.remove('is-active');items[i].classList.add('is-active');active=i;markNav();}
    // стрелки и счётчик под лентой: на телефоне кадр занимает почти весь экран,
    // край следующего не виден - и непонятно, что лента листается (Eugene, 10.10)
    var nav=null,navPrev=null,navNext=null,navNum=null;
    function buildNav(){
      if(items.length<2)return;
      var strelka='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5 8 12l7 7"/></svg>';
      nav=document.createElement('div');
      nav.className='dock-nav';
      nav.innerHTML='<button class="dock-nav__b" type="button" aria-label="Предыдущее фото">'+strelka+'</button>'+
        '<span class="dock-nav__n"></span>'+
        '<button class="dock-nav__b dock-nav__b--next" type="button" aria-label="Следующее фото">'+strelka+'</button>';
      navPrev=nav.children[0];navNum=nav.children[1];navNext=nav.children[2];
      navPrev.addEventListener('click',function(){if(active>0)goTo(active-1);});
      navNext.addEventListener('click',function(){if(active<items.length-1)goTo(active+1);});
      el.parentNode.insertBefore(nav,el.nextSibling);
    }
    function markNav(){
      if(!nav)return;
      navNum.textContent=(active+1)+' / '+items.length;
      navPrev.disabled=active<=0;
      navNext.disabled=active>=items.length-1;
    }
    // Листание одно на всех: ближайший кадр по центру ставит CSS-притягивание
    // (scroll-snap), на мыши, трекпаде и пальце одинаково. Своей доводки у скрипта
    // больше нет: раньше их было две - его и браузерная, и кадр после пролистывания
    // заметно доворачивался (Eugene, 11.10). Скрипт только помечает активный кадр
    // и возит ленту по нажатию стрелки или соседней карточки.
    function goTo(i){
      // ширина места изменилась, а события мы не поймали - пересчитать поля перед ходом
      if(el.clientWidth!==lastCw)fitPads();
      var from=el.scrollLeft,to=centerOf(i);
      el.scrollTo({left:to,behavior:'smooth'});
      // браузер не стал анимировать (вкладка в фоне) - переставляем сразу
      setTimeout(function(){if(Math.abs(el.scrollLeft-from)<1)el.scrollTo({left:to,behavior:'auto'});},700);
    }
    el.addEventListener('scroll',mark,{passive:true});
    el.addEventListener('click',function(e){
      var it=e.target.closest('.dock__item');if(!it)return;
      var i=items.indexOf(it);if(i!==active)goTo(i);
    });
    // Поля ленты - ровно столько, чтобы первый и последний кадр встали по центру,
    // и ни пикселем больше. Раньше поля считались из --dock-w (самая узкая карточка),
    // и у широкого последнего кадра оставалось до 300 px пустоты: лента уезжала в неё,
    // а скрипт потом тащил её обратно - это и есть «недокрученность» (Eugene, 11.10).
    var lastCw=-1;
    function fitPads(){
      // поля сначала обнуляем: clientWidth считается вместе с ними, и после
      // перестройки экрана лента мерила бы себя по старым полям и раздувалась
      el.style.paddingLeft='0px';el.style.paddingRight='0px';
      var cw=el.clientWidth;lastCw=cw;
      el.style.paddingLeft=Math.max(0,Math.round((cw-items[0].offsetWidth)/2))+'px';
      el.style.paddingRight=Math.max(0,Math.round((cw-items[items.length-1].offsetWidth)/2))+'px';
    }
    function refit(){fitPads();if(active>-1)el.scrollTo({left:centerOf(active),behavior:'auto'});}
    var rsz=null;
    function refitSoon(){clearTimeout(rsz);rsz=setTimeout(refit,200);}
    window.addEventListener('resize',refitSoon);
    // следим за шириной места, где стоит лента: поворот телефона, смена ширины
    // окна и перестройка раскладки события resize дают не всегда
    if(window.ResizeObserver&&el.parentNode)new ResizeObserver(refitSoon).observe(el.parentNode);
    // шрифты и картинки догрузились - ширина подписи и кадра могла измениться
    window.addEventListener('load',refit);

    el.addEventListener('pointerdown',function(){if(el.clientWidth!==lastCw)refit();});
    window.enableDragScroll(el,{align:'center',snap:true});
    buildNav();
    fitPads();
    el.scrollLeft=centerOf(0);mark();
  };
})();
