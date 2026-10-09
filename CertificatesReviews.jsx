/* Лента сертификатов убрана (Eugene, 09.10): сертификаты мастеров теперь в углу
   карточек блока «14 мастеров» (Team.jsx). Здесь остались отзывы. */
function Stars({n}){
const s=Math.max(0,Math.min(5,n||0));
return <span className="rev__s" aria-label={'Оценка '+s+' из 5'}>{'★★★★★'.slice(0,s)}<span className="off">{'★★★★★'.slice(s)}</span></span>;
}

/* Отзывы собраны как на странице отопителей: плашка рейтинга, лента карточек,
   ссылка «Все отзывы». Лента тянется мышью (swipe.js), полоски прогресса и
   счётчика нет (Eugene, 02.10). Карточки и «Все отзывы» ведут на вкладку
   отзывов карточки на Яндекс Картах, плашка рейтинга - на саму карточку (Eugene, 03.10). */
function ReviewsBand(){
const C=window.GBO_CONFIG;
const R=C.REVIEWS;
const track=React.useRef(null);
React.useEffect(()=>{window.enableDragScroll(track.current,{align:'start'});},[]);
return <section className="reviews-band" style={{background:'var(--color-ink)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto'}}>
<div className="rev-head">
<h2 data-reveal="" style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,color:'#fff',margin:0,lineHeight:1.15,textWrap:'balance'}}>Отзывы об установке ГБО <span style={{color:'var(--color-primary-bright)'}}>в Ростове-на-Дону</span></h2>
<a className="rate" data-count="" href={C.YANDEX} target="_blank" rel="noopener noreferrer">
<b data-count-num="">{R.rating}</b>
<span><span className="stars">★★★★★</span><small>{R.ratingsLabel} · {R.reviewsLabel}<br/>Яндекс Карты</small></span>
</a>
</div>
<div ref={track} className="rev-grid snap-track">
{R.items.map((r,i)=><a key={i} className="rev" href={C.YANDEX_REVIEWS} target="_blank" rel="noopener noreferrer" draggable={false}>
<span className="rev__top">
<span className="rev__av">{r.name.charAt(0)}</span>
<span><span className="rev__n">{r.name}</span><span className="rev__d">{r.date}</span></span>
</span>
<Stars n={r.stars}/>
<p>{r.text}</p>
</a>)}
</div>
<div className="rev-foot"><a href={C.YANDEX_REVIEWS} target="_blank" rel="noopener noreferrer">Все {R.reviewsLabel} на Яндекс Картах →</a></div>
</div>
</section>;
}
window.ReviewsBand=ReviewsBand;
