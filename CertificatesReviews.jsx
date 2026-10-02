function CertificatesReviews(){
return <>
<Certificates/>
<ReviewsBand/>
</>;
}

function Certificates(){
const {Placeholder}=window.DesignSystem_a63f4f;
const certs=[1,2,3,4,5,6];
const track=React.useRef(null);
const [active,setActive]=React.useState(1);
const centerOf=i=>{const el=track.current,ch=el.children[i];return ch.offsetLeft+ch.offsetWidth/2-el.clientWidth/2;};
const nearest=()=>{
const el=track.current;
let best=0,bd=Infinity;
[...el.children].forEach((_,i)=>{const d=Math.abs(centerOf(i)-el.scrollLeft);if(d<bd){bd=d;best=i;}});
return best;
};
React.useEffect(()=>{
track.current.scrollLeft=centerOf(1);
window.enableDragScroll(track.current,{align:'center'});
},[]);
return <section style={{background:'#fff',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto'}}>
<h2 data-reveal="" style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,textAlign:'center',color:'var(--color-ink)',margin:'0 0 12px',lineHeight:1.15,textWrap:'balance'}}>Не на словах, <span className="nowrap" style={{color:'var(--color-primary)'}}>а по документам</span></h2>
<p style={{fontSize:'clamp(15px,1.35vw,17px)',color:'var(--color-charcoal)',textAlign:'center',margin:'0 0 16px'}}>Сертификаты автосервиса и допуски мастеров по установке ГБО</p>
<div ref={track} className="certs-track snap-track" onScroll={()=>setActive(nearest())}>
{certs.map((n,i)=><div key={n} className={'cert-item'+(active===i?' is-active':'')} onClick={()=>{if(active!==i)track.current.scrollTo({left:centerOf(i),behavior:'smooth'});}}>
<div className="cert-card"><Placeholder label={'Сертификат '+n} aspect="3 / 4"/></div>
</div>)}
</div>
</div>
</section>;
}

function Stars({n}){
const s=Math.max(0,Math.min(5,n||0));
return <span className="rev__s" aria-label={'Оценка '+s+' из 5'}>{'★★★★★'.slice(0,s)}<span className="off">{'★★★★★'.slice(s)}</span></span>;
}

/* Отзывы собраны как на странице отопителей: плашка рейтинга, лента карточек,
   ссылка «Все отзывы». Лента тянется мышью (swipe.js), полоски прогресса и
   счётчика нет (Eugene, 02.10). Карточки ведут на Яндекс Карты. */
function ReviewsBand(){
const C=window.GBO_CONFIG;
const R=C.REVIEWS;
const track=React.useRef(null);
React.useEffect(()=>{window.enableDragScroll(track.current,{align:'start'});},[]);
return <section className="reviews-band" style={{background:'var(--color-ink)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto'}}>
<div className="rev-head">
<h2 data-reveal="" style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,color:'#fff',margin:0,lineHeight:1.15,textWrap:'balance'}}>Отзывы об установке ГБО <span style={{color:'var(--color-primary-bright)'}}>в Ростове-на-Дону</span></h2>
<a className="rate" data-count="" href={C.YANDEX} target="_blank" rel="noopener noreferrer">
<b data-count-num="">{R.rating}</b>
<span><span className="stars">★★★★★</span><small>{R.ratingsLabel} · {R.reviewsLabel}<br/>Яндекс Карты</small></span>
</a>
</div>
<div ref={track} className="rev-grid snap-track">
{R.items.map((r,i)=><a key={i} className="rev" href={C.YANDEX} target="_blank" rel="noopener noreferrer" draggable={false}>
<span className="rev__top">
<span className="rev__av">{r.name.charAt(0)}</span>
<span><span className="rev__n">{r.name}</span><span className="rev__d">{r.date}</span></span>
</span>
<Stars n={r.stars}/>
<p>{r.text}</p>
</a>)}
</div>
<div className="rev-foot"><a href={C.YANDEX} target="_blank" rel="noopener noreferrer">Все {R.reviewsLabel} на Яндекс Картах →</a></div>
</div>
</section>;
}
window.CertificatesReviews=CertificatesReviews;
window.Certificates=Certificates;
window.ReviewsBand=ReviewsBand;
