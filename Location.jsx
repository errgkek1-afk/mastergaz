function Location(){
const {Button}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
const open=window.isOpenNow();
const photos=['Фасад с баннером'];
const [sound,setSound]=React.useState(null);
const drives=[
{src:'video/zaezd-osobennaya.mp4',poster:'video/zaezd-osobennaya.jpg',caption:'Заезд с ул. Особенная'},
{src:'video/zaezd-oganova.mp4',poster:'video/zaezd-oganova.jpg',caption:'Заезд со шлагбаумом, ул. Оганова'}
];
return <section className="loc-section" style={{background:'var(--color-cloud)',padding:'64px 32px 96px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto'}}>
<h2 className="loc-title" style={{fontSize:'clamp(30px,3.4vw,46px)',fontWeight:600,textAlign:'center',color:'var(--color-ink)',margin:'0 0 32px',lineHeight:1.1}}>Как добраться</h2>
<div className="loc-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,marginBottom:40}}>
<MapBlock/>
<div style={{display:'flex',flexDirection:'column',gap:20}}>
<div><div style={{fontSize:14,color:'var(--color-graphite)'}}>Адрес</div><div style={{fontSize:24,fontWeight:600,color:'var(--color-ink)'}}>{C.ADDRESS}</div></div>
<div><div style={{fontSize:14,color:'var(--color-graphite)'}}>Приоритетный заезд</div><div style={{fontSize:16,color:'var(--color-ink)'}}>с улицы Особенная</div></div>
<div><div style={{fontSize:14,color:'var(--color-graphite)'}}>Второй заезд</div><div style={{fontSize:16,color:'var(--color-ink)'}}>со стороны шлагбаума, с улицы Оганова</div></div>
<div style={{display:'flex',alignItems:'center',gap:10}}>
<span className={'status-dot'+(open?' is-open':'')}/>
<span style={{fontSize:16,color:'var(--color-ink)'}}>{window.HOURS_LINE}</span>
</div>
<a href={C.YANDEX} target="_blank" rel="noreferrer" style={{display:'block'}}><Button variant="primary" fullWidth>Построить маршрут</Button></a>
<div style={{background:'#fff',borderRadius:12,padding:'14px 16px',fontSize:15,color:'var(--color-ink)',lineHeight:1.5}}>
Если работа занимает больше дня — машину можно оставить на ночь. Территория охраняется, всё под камерами.
</div>
</div>
</div>
<div className="loc-photos" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginBottom:10}}>
<div>
<img className="loc-shot" src="img/foto/fasad.jpg" alt="Фасад МастерГаза с баннером" loading="lazy"/>
<div className="loc-photos__cap">{photos[0]}</div>
</div>
{drives.map(d=><div key={d.src}>
<DriveVideo {...d} soundOn={sound===d.src} onSound={on=>setSound(on?d.src:null)}/>
<div className="loc-photos__cap">{d.caption}</div>
</div>)}
</div>
<div style={{height:56}}/>
<div className="loc-lounge" style={{background:'#fff',borderRadius:16,boxShadow:'var(--shadow-soft)',display:'grid',gridTemplateColumns:'1fr 1fr',overflow:'hidden'}}>
<LoungeSlider/>
<div style={{padding:40}}>
<h3 style={{fontSize:32,fontWeight:600,color:'var(--color-ink)',margin:'0 0 16px'}}>Пока машина в работе — есть зона отдыха</h3>
<p style={{fontSize:18,color:'var(--color-charcoal)',margin:0,lineHeight:1.45}}>На втором этаже — своя зона отдыха: диваны, нарды, телевизор, кулер, кофе и Wi-Fi. Тихо и спокойно: можно поработать или просто переждать.</p>
</div>
</div>
</div>
</section>;
}

function LoungeSlider(){
const slides=[
['img/foto/lounge1.jpg','Зона отдыха: диваны, телевизор, кулер'],
['img/foto/lounge2.jpg','Зона отдыха на втором этаже']
];
const n=slides.length;
const [index,setIndex]=React.useState(0);
const startX=React.useRef(null);
const go=d=>setIndex(i=>(i+d+n)%n);
return <div className="lounge-slider"
onPointerDown={e=>{startX.current=e.clientX;}}
onPointerUp={e=>{if(startX.current===null)return;const dx=e.clientX-startX.current;startX.current=null;if(Math.abs(dx)>40)go(dx<0?1:-1);}}>
<div className="lounge-slider__track" style={{transform:`translateX(${-index*100}%)`}}>
{slides.map(([src,alt],i)=><div key={i} className="lounge-slide"><img src={src} alt={alt} loading="lazy"/></div>)}
</div>
<button type="button" className="lounge-arrow lounge-arrow--prev" aria-label="Предыдущее фото" onClick={()=>go(-1)}>‹</button>
<button type="button" className="lounge-arrow lounge-arrow--next" aria-label="Следующее фото" onClick={()=>go(1)}>›</button>
<div className="lounge-dots">
{slides.map((_,i)=><button key={i} type="button" className={'lounge-dot'+(i===index?' is-active':'')} aria-label={'Фото '+(i+1)} onClick={()=>setIndex(i)}/>)}
</div>
</div>;
}
/* Карта: живой виджет Яндекса. Если он не отозвался за 8 секунд (у части
   посетителей iframe не грузится) — молча подставляем снимок карты со ссылкой. */
function MapBlock(){
const C=window.GBO_CONFIG;
const [failed,setFailed]=React.useState(false);
const [active,setActive]=React.useState(false);
/* На телефоне карта перехватывает движение пальцем и страница перестаёт
   прокручиваться. Поэтому до первого нажатия карта закрыта прозрачной плашкой. */
const touch=typeof window!=='undefined'&&window.matchMedia&&window.matchMedia('(hover:none)').matches;
const loaded=React.useRef(false);
React.useEffect(()=>{
  const t=setTimeout(()=>{if(!loaded.current)setFailed(true);},8000);
  return()=>clearTimeout(t);
},[]);
if(failed) return <a className="loc-map loc-map--static" href={C.YANDEX} target="_blank" rel="noopener noreferrer" aria-label="Открыть МастерГаз на Яндекс Картах">
<img src="img/foto/map.jpg" alt="МастерГаз на карте: Минеральная улица, 16"/>
<span className="loc-map__open">Открыть в Яндекс Картах →</span>
</a>;
return <div className="loc-map">
<iframe src={C.MAP_WIDGET} title="МастерГаз на карте: Минеральная улица, 16" allowFullScreen onLoad={()=>{loaded.current=true;}}/>
{touch&&!active&&<button type="button" className="loc-map__lock" onClick={()=>setActive(true)}>
<span>Нажмите, чтобы двигать карту</span>
</button>}
</div>;
}

/* Ролики с заездами. Сами не запускаются: человек видит кадр и кнопку,
   и ролик идёт только после нажатия — со звуком, как в обычном плеере.
   Ушли с экрана или свернули вкладку — встаёт на паузу. */
function DriveVideo({src,poster,caption,soundOn,onSound}){
const ref=React.useRef(null);
const box=React.useRef(null);
const [started,setStarted]=React.useState(false);
const [playing,setPlaying]=React.useState(false);
React.useEffect(()=>{
  const v=ref.current,el=box.current;
  if(!v||!el||!started)return;
  let inView=true;
  const sync=()=>{
    if(inView&&!document.hidden){const p=v.play();if(p&&p.catch)p.catch(()=>{});}
    else v.pause();
  };
  let io;
  if(window.IntersectionObserver){
    io=new IntersectionObserver(e=>{inView=e[0].isIntersecting;sync();},{threshold:.35});
    io.observe(el);
  }
  document.addEventListener('visibilitychange',sync);
  return()=>{if(io)io.disconnect();document.removeEventListener('visibilitychange',sync);};
},[started]);
React.useEffect(()=>{
  const v=ref.current;
  if(!v||!started)return;
  v.muted=!soundOn;
  if(v.paused){const p=v.play();if(p&&p.catch)p.catch(()=>{});}
},[soundOn,started]);
/* Запускаем тихо: со звуком браузер ролик просто не пустит, пока человек
   не разрешит его отдельно — для этого рядом кнопка звука. */
const start=()=>{
  const v=ref.current;
  if(!v)return;
  /* два ролика одновременно не идут: соседний встаёт на паузу */
  document.querySelectorAll('.loc-video__media').forEach(o=>{if(o!==v)o.pause();});
  setStarted(true);
  v.muted=true;
  const p=v.play();
  if(p&&p.catch)p.catch(()=>{});
};
const toggle=()=>{
  const v=ref.current;
  if(!v)return;
  if(v.paused){const p=v.play();if(p&&p.catch)p.catch(()=>{});}
  else v.pause();
};
return <div className={'loc-video'+(started?' is-started':'')} ref={box}>
<video ref={ref} className="loc-video__media" poster={poster} muted loop playsInline preload="metadata"
  aria-label={caption} onClick={()=>{if(started)toggle();}}
  onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)}>
<source src={src} type="video/mp4"/>
</video>
{(!started||!playing)&&<button type="button" className="loc-video__play" onClick={()=>started?toggle():start()} aria-label={'Смотреть: '+caption}>
<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M8 5.2v13.6c0 .62.68 1 1.21.68l10.9-6.8a.8.8 0 0 0 0-1.36L9.21 4.52A.8.8 0 0 0 8 5.2"/></svg>
</button>}
{started&&<button type="button" className={'loc-video__sound'+(soundOn?' is-on':'')} onClick={()=>onSound(!soundOn)} aria-label={soundOn?'Выключить звук':'Включить звук'}>
{soundOn
?<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M11.2 4.3 6.4 8.3H3.2a.8.8 0 0 0-.8.8v5.8c0 .44.36.8.8.8h3.2l4.8 4a.6.6 0 0 0 1-.46V4.76a.6.6 0 0 0-1-.46"/><path d="M15.5 8.6a.9.9 0 0 1 1.27 0 4.8 4.8 0 0 1 0 6.8.9.9 0 1 1-1.27-1.27 3 3 0 0 0 0-4.26.9.9 0 0 1 0-1.27"/><path d="M18.3 5.8a.9.9 0 0 1 1.27 0 8.8 8.8 0 0 1 0 12.4.9.9 0 0 1-1.27-1.27 7 7 0 0 0 0-9.86.9.9 0 0 1 0-1.27"/></svg>
:<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M11.2 4.3 6.4 8.3H3.2a.8.8 0 0 0-.8.8v5.8c0 .44.36.8.8.8h3.2l4.8 4a.6.6 0 0 0 1-.46V4.76a.6.6 0 0 0-1-.46"/><path d="M21.3 9.5a.9.9 0 0 0-1.27-1.27L18 10.26l-2.03-2.03a.9.9 0 1 0-1.27 1.27l2.03 2.03-2.03 2.03a.9.9 0 1 0 1.27 1.27L18 12.8l2.03 2.03a.9.9 0 0 0 1.27-1.27l-2.03-2.03z"/></svg>}
</button>}
</div>;
}

window.Location=Location;
