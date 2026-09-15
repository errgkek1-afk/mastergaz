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
<h2 style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,textAlign:'center',color:'var(--color-ink)',margin:'0 0 12px',lineHeight:1.15,textWrap:'balance'}}>Не на словах, <span className="nowrap" style={{color:'var(--color-primary)'}}>а по документам</span></h2>
<p style={{fontSize:'clamp(15px,1.35vw,17px)',color:'var(--color-charcoal)',textAlign:'center',margin:'0 0 16px'}}>Сертификаты автосервиса и допуски мастеров</p>
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
return <span className="review-stars" aria-label={'Оценка '+s+' из 5'}>{'★★★★★'.slice(0,s)}<span className="off">{'★★★★★'.slice(s)}</span></span>;
}

function ReviewsBand(){
const C=window.GBO_CONFIG;
const R=C.REVIEWS;
const track=React.useRef(null);
const total=R.items.length;
const [pos,setPos]=React.useState({start:1,end:3,perView:3,ratio:0});
const measure=()=>{
const el=track.current;
if(!el||!el.children.length)return;
const step=el.children[0].offsetWidth+16;
const perView=Math.max(1,Math.floor((el.clientWidth+16)/step));
const first=Math.min(total-perView,Math.round(el.scrollLeft/step));
const max=el.scrollWidth-el.clientWidth;
setPos({start:first+1,end:Math.min(total,first+perView),perView,ratio:max>0?el.scrollLeft/max:0});
};
React.useEffect(()=>{
window.enableDragScroll(track.current,{align:'start'});
measure();
window.addEventListener('resize',measure);
return ()=>window.removeEventListener('resize',measure);
},[]);
const thumb=Math.max(8,pos.perView/total*100);
return <section className="reviews-band" style={{background:'var(--color-ink)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto'}}>
<div className="reviews-head">
<h2 style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,color:'#fff',margin:0,lineHeight:1.15,textWrap:'balance'}}>Слова тех, кто уже ездит на газе</h2>
<a className="rating-plate" href={C.YANDEX} target="_blank" rel="noopener noreferrer">
<span className="rating-plate__value">{R.rating}</span>
<span>
<span className="stars">★★★★★</span>
<span className="rating-plate__counts">{R.ratingsLabel} · {R.reviewsLabel}</span>
<span className="rating-plate__src">Яндекс Карты</span>
</span>
<span className="go">→</span>
</a>
</div>
<div ref={track} className="reviews-track snap-track" onScroll={measure}>
{R.items.map((r,i)=><a key={i} className="review-card" href={C.YANDEX} target="_blank" rel="noopener noreferrer" draggable={false}>
<span className="review-card__top">
<span className="review-card__ava">{r.name.charAt(0)}</span>
<span className="review-card__who"><b>{r.name}</b><span>{r.date}</span></span>
</span>
<Stars n={r.stars}/>
<span className="review-card__body">{r.text}</span>
<span className="review-card__foot">Отзыв на Яндекс Картах <span className="go">→</span></span>
</a>)}
</div>
<div className="reviews-foot">
<div className="reviews-progress" aria-hidden="true"><span style={{width:thumb+'%',transform:`translateX(${pos.ratio*(100/thumb-1)*100}%)`}}/></div>
<span className="reviews-count">{pos.start===pos.end?pos.start:pos.start+'–'+pos.end} из {total}</span>
<a className="reviews-all" href={C.YANDEX} target="_blank" rel="noopener noreferrer">Все {R.reviewsLabel} на Яндекс Картах <span className="go">→</span></a>
</div>
</div>
</section>;
}
window.CertificatesReviews=CertificatesReviews;
