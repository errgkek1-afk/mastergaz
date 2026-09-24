/* иконки хуков — рисуем здесь, внешних библиотек не тянем */
const IcoShield=()=><svg viewBox="0 0 24 24" aria-hidden="true" className="hook-ico"><path d="M12 3l7 3v5.5c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M8.6 12.2l2.4 2.4 4.4-4.6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IcoWheel=()=><svg viewBox="0 0 34 26" aria-hidden="true" className="hook-ico hook-ico--wide"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7"><circle cx="21.5" cy="12" r="9.2"/><circle cx="21.5" cy="12" r="5.6"/><circle cx="21.5" cy="12" r="1.9"/><path d="M21.5 6.4v1.9M26.8 10.2l-1.8 1.3M24.8 16.5l-1.7-1.3M18.2 16.5l1.7-1.3M16.2 10.2l1.8 1.3" strokeWidth="1.5"/><path d="M2 23.2h26" opacity=".5"/><g opacity=".55" strokeWidth="1.6"><path d="M9.6 4.6H7.2"/><path d="M8.2 8.3H4.2"/><path d="M6.6 12H1.4"/><path d="M8.2 15.7H4.6"/><path d="M9.6 19.4H7.4"/></g></g></svg>;
const IcoDoc=()=><svg viewBox="0 0 24 24" aria-hidden="true" className="hook-ico"><path d="M6.5 3.5h7L18.5 8v12.5h-12z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M13.3 3.6V8.4h4.9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9.2 14.4l1.9 1.9 3.6-3.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;

/* Слайдер первого экрана: кадры лежат друг на друге, меняется прозрачность
   и лёгкий зум — это тянет видеокарта, страница не дёргается. */
const HERO_PHOTOS=[
  ['img/foto/h4.jpg','Lada Vesta'],
  ['img/foto/h2.jpg','Audi A6, мотор V6 2.4'],
  ['img/foto/h1.jpg','Газовая рампа и форсунки под капотом'],
  ['img/foto/h3.jpg','Haval'],
  ['img/foto/h5.jpg','Kia Rio IV, 1.6'],
  ['img/foto/h6.jpg','Nissan Murano Z50']
];
function HeroPhotos(){
  const [i,setI]=React.useState(0);
  /* отсчёт заново после каждой смены — иначе кадр, выбранный рукой,
     улетал бы через долю секунды */
  React.useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const t=setTimeout(()=>setI(v=>(v+1)%HERO_PHOTOS.length),6000);
    return ()=>clearTimeout(t);
  },[i]);
  return <div className="hero-photos">
    <div className="hero-photos__frame">
      {HERO_PHOTOS.map(([src,cap],k)=>
        <img key={src} className={'hero-photos__shot'+(k===i?' is-active':'')} src={src} alt={cap}/>)}
    </div>
    <div className="hero-photos__cap" aria-live="polite">{HERO_PHOTOS[i][1]}</div>
    <div className="hero-photos__dots">
      {HERO_PHOTOS.map(([src],k)=>
        <button key={src} type="button" className={k===i?'is-active':''}
          aria-label={'Фото '+(k+1)} onClick={()=>setI(k)}/>)}
    </div>
  </div>;
}

function Hero({onCta}){
const {Button}=window.DesignSystem_a63f4f;
const hooks=[
[<IcoShield/>,'Гарантия 100 000 км','До 1 года или 100 000 км. Блок управления, редуктор, форсунки — замена бесплатно: и работа, и деталь'],
[<IcoWheel/>,'Настраиваем в движении','Мастер едет с вами и калибрует под реальной нагрузкой'],
[<IcoDoc/>,'Оформим в ГИБДД под ключ','За месяц, со всеми инстанциями']
];
const cars=['Lada Granta','Lada Vesta','Lada Largus','Hyundai Solaris','Hyundai Creta','Hyundai Sonata','Kia Rio','Kia Sportage','Renault Logan','Renault Sandero'];
const [flash,setFlash]=React.useState(false);
const carsRef=React.useRef(null);
const showCars=()=>{
  if(carsRef.current)carsRef.current.scrollIntoView({behavior:'smooth',block:'center'});
  setFlash(true);setTimeout(()=>setFlash(false),1600);
};
return <section style={{padding:'40px 32px 0',fontFamily:'var(--font-family)',background:'#fff'}}>
<div id="hero" style={{position:'relative',maxWidth:1280,margin:'0 auto',borderRadius:16,overflow:'hidden',background:'#1f1f1f'}}>
<div className="hero-stripe hero-stripe-1" style={{position:'absolute',right:-20,top:0,bottom:0,width:60,background:'var(--color-primary)',transform:'skewX(-20deg)'}}/>
<div className="hero-stripe hero-stripe-2" style={{position:'absolute',right:-50,top:0,bottom:0,width:36,background:'var(--color-primary-bright)',transform:'skewX(-20deg)'}}/>
<div className="hero-stripe hero-stripe-3" style={{position:'absolute',right:-70,top:0,bottom:0,width:22,background:'var(--color-primary-soft)',transform:'skewX(-20deg)'}}/>
<div className="hero-grid" style={{position:'relative',zIndex:2,display:'grid',gridTemplateColumns:'minmax(380px,1.2fr) minmax(260px,460px)',gap:40,alignItems:'center',padding:'40px 80px 80px 40px',minHeight:560}}>
<div style={{color:'#fff'}}>
<h1 className="hero-h1" style={{fontSize:'clamp(26px,3.2vw,52px)',fontWeight:600,lineHeight:1.1,margin:'0 0 14px'}}><span className="nowrap">Установка ГБО <button type="button" className="hero-star" onClick={showCars}><span style={{color:'var(--color-primary-bright)'}}>от 4 часов</span><span className="hero-star__mark">*</span></button></span><br/>в Ростове-на-Дону</h1>
<p className="hero-sub" style={{fontSize:18,lineHeight:1.45,margin:'0 0 32px',color:'#c2c2c2'}}>прямой и распределённый впрыск.</p>
<div className="hero-cta" style={{display:'flex',gap:40,alignItems:'center',flexWrap:'wrap'}}>
<Button variant="primary" size="lg" onClick={()=>onCta('первый экран')}>Рассчитать стоимость</Button>
<div>
<div style={{fontSize:13,color:'#9a9a9a'}}>Установлено ГБО:</div>
<div style={{fontSize:'clamp(32px,3vw,48px)',fontWeight:700,lineHeight:1.05}}>20 321</div>
<div style={{fontSize:13,color:'#9a9a9a'}}>машин уехали от нас на газу</div>
</div>
</div>
</div>
<HeroPhotos/>
</div>
</div>
<div className="hooks-grid" style={{maxWidth:1280,margin:'-48px auto 0',position:'relative',zIndex:3,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,padding:'0 8px'}}>
{hooks.map((h,i)=><div key={i} className="hook-wrap" style={{opacity:0,transform:'translateY(10px)',animation:`gboHookIn 320ms var(--ease-out) ${i*60}ms forwards`}}>
<div className="hook-card">
<div className="hook-card__title hook-card__title--ico">{h[0]}<span>{h[1]}</span></div>
<div className="hook-card__text">{h[2]}</div>
</div>
</div>)}
</div>
<div className={'cars-line'+(flash?' is-flash':'')} ref={carsRef}>
<div className="cars-line__row"><b>За 4 часа ставим на:</b> {cars.map((c,i)=>
  <span key={c} className={i>4?'cars-extra':''}>{i>0&&' · '}{c}</span>)}</div>
<div className="cars-line__note">На остальных машинах — пишите марку и модель, подскажем цену и срок.</div>
</div>
<div style={{height:40}}/>
</section>;
}
window.Hero=Hero;
