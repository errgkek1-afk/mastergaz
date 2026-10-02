/* иконки хуков — рисуем здесь, внешних библиотек не тянем */
const IcoShield=()=><svg viewBox="0 0 24 24" aria-hidden="true" className="hook-ico"><path d="M12 3l7 3v5.5c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6l7-3z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M8.6 12.2l2.4 2.4 4.4-4.6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const IcoWheel=()=><svg viewBox="0 0 34 26" aria-hidden="true" className="hook-ico hook-ico--wide"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7"><circle cx="21.5" cy="12" r="9.2"/><circle cx="21.5" cy="12" r="5.6"/><circle cx="21.5" cy="12" r="1.9"/><path d="M21.5 6.4v1.9M26.8 10.2l-1.8 1.3M24.8 16.5l-1.7-1.3M18.2 16.5l1.7-1.3M16.2 10.2l1.8 1.3" strokeWidth="1.5"/><path d="M2 23.2h26" opacity=".5"/><g opacity=".55" strokeWidth="1.6"><path d="M9.6 4.6H7.2"/><path d="M8.2 8.3H4.2"/><path d="M6.6 12H1.4"/><path d="M8.2 15.7H4.6"/><path d="M9.6 19.4H7.4"/></g></g></svg>;
const IcoDoc=()=><svg viewBox="0 0 24 24" aria-hidden="true" className="hook-ico"><path d="M6.5 3.5h7L18.5 8v12.5h-12z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M13.3 3.6V8.4h4.9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9.2 14.4l1.9 1.9 3.6-3.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;

/* Слайдер первого экрана: кадры лежат друг на друге, меняется прозрачность
   и лёгкий зум — это тянет видеокарта, страница не дёргается.
   Кадры сменяются сами, полосок переключения нет (Eugene, 02.10). */
const HERO_PHOTOS=[
  ['img/foto/h4.jpg','Lada Vesta'],
  ['img/foto/h2.jpg','Audi A6, мотор V6 2.4'],
  ['img/foto/h1.jpg','Газовая рампа и форсунки под капотом'],
  ['img/foto/h3.jpg','Haval'],
  ['img/foto/h5.jpg','Kia Rio IV, 1.6'],
  ['img/foto/h6.jpg','Nissan Murano Z50']
];
function HeroPhotos(){
  const [i,setI]=React.useState(0);
  React.useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    const t=setTimeout(()=>setI(v=>(v+1)%HERO_PHOTOS.length),6000);
    return ()=>clearTimeout(t);
  },[i]);
  return <>
    <div className="hero-photos__frame">
      {HERO_PHOTOS.map(([src,cap],k)=>
        <img key={src} className={'hero-photos__shot'+(k===i?' is-active':'')} src={src} alt={cap}/>)}
    </div>
    <div className="hero__cap" aria-live="polite">{HERO_PHOTOS[i][1]}</div>
  </>;
}

/* Первый экран собран по макету отопителей: та же карточка, сетка, отступы,
   плашка «30 лет опыта», строка рейтинга под фото, три плашки УТП и строка
   «ставим на» по центру. Меняется только наполнение (Eugene, 02.10). */
function Hero({onCta}){
const {Button}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
const hooks=[
[<IcoShield/>,'Гарантия 100 000 км','До 1 года или 100 000 км. Блок управления, редуктор, форсунки — замена бесплатно: и работа, и деталь'],
[<IcoWheel/>,'Настраиваем в движении','Мастер едет с вами и настраивает под реальной нагрузкой: машина едет как на бензине'],
[<IcoDoc/>,'Оформим в ГИБДД под ключ','Лаборатория, госпошлины, техосмотр, ГИБДД — проходим сами. От вас только документы на машину']
];
const cars=['Lada Granta','Lada Vesta','Lada Largus','Hyundai Solaris','Hyundai Creta','Hyundai Sonata','Kia Rio','Kia Sportage','Renault Logan','Renault Sandero'];
const [flash,setFlash]=React.useState(false);
const carsRef=React.useRef(null);
const showCars=()=>{
  if(carsRef.current)carsRef.current.scrollIntoView({behavior:'smooth',block:'center'});
  setFlash(true);setTimeout(()=>setFlash(false),1600);
};
return <section className="hero">
<div className="wrap">
<div id="hero" className="hero__card">
<div className="hero__grid">
<div>
<h1 className="hero-h1" data-reveal="" onClick={e=>{if(e.target.closest('.hero-star'))showCars();}}>Установка ГБО <button type="button" className="hero-star"><em>от 4 часов</em><span className="hero-star__mark">*</span></button><br/>в Ростове-на-Дону</h1>
<p className="hero__sub">Газовое оборудование 4 поколения на автомобиль: пропан и метан, прямой и распределённый впрыск.</p>
<div className="hero__row">
<Button variant="primary" size="lg" onClick={()=>onCta('первый экран')}>Рассчитать стоимость</Button>
<div className="counter" data-count=""><b data-count-num="">20 321</b><i data-count-text="">машин уехали от нас на газу</i></div>
</div>
</div>
<div className="hero__photo">
<div className="sticker" data-count=""><b data-count-num="">30 лет</b><span data-count-text="">опыта</span></div>
<HeroPhotos/>
<p className="hero__rate"><span className="hero__stars">★★★★★</span>{C.REVIEWS.rating} на Яндекс Картах · {C.REVIEWS.reviewsLabel}</p>
</div>
</div>
</div>
<div className="hooks" data-stagger="">
{hooks.map((h,i)=><div key={i} className="hook">
<div className="hook__t">{h[0]}<span>{h[1]}</span></div>
<p>{h[2]}</p>
</div>)}
</div>
<div className={'fit cars-line'+(flash?' is-flash':'')} ref={carsRef}>
<b>За 4 часа ставим ГБО на:</b> {cars.map((c,i)=><span key={c} className={i>4?'cars-extra':''}>{i>0&&'\u00a0· '}<span className="nowrap">{c}</span></span>)}
</div>
<p className="cars-line__note">На остальных машинах — пишите марку и модель, подскажем цену и срок установки ГБО.</p>
</div>
</section>;
}
window.Hero=Hero;
