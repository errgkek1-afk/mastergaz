(function(){
  // Перетаскивание лент мышью. Палец и трекпад листают штатной прокруткой браузера.
  // Движение слушаем на всём окне, чтобы лента не отставала, когда курсор уходит с неё.
  window.enableDragScroll=function(el,opts){
    if(!el||el.__dragScroll)return;
    el.__dragScroll=true;
    var align=(opts&&opts.align)||'start';
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
})();
