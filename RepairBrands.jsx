const IcoGift=()=><svg viewBox="0 0 24 24" aria-hidden="true" className="gift-ico"><path d="M4 10.5h16V20H4z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M3.2 7h17.6v3.5H3.2zM12 7v13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M12 7S10.8 3.6 8.8 3.9C7.4 4.1 7 6.3 9 7zM12 7s1.2-3.4 3.2-3.1C16.6 4.1 17 6.3 15 7z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>;

function RepairBrands({onCta}){
const {Button}=window.DesignSystem_a63f4f;
const brands=['STAG','Digitronic','OMVL','Lovato','Europegas','AEB','Landi Renzo','BRC','GT-Gas','Zenit','Alpha','King','Bigas','KME'];
return <section style={{background:'var(--color-cloud)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1080,margin:'0 auto'}}>
<h2 style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,color:'var(--color-ink)',margin:'0 0 28px',lineHeight:1.15,textAlign:'center'}}>Поставили не у нас — <span style={{color:'var(--color-primary)'}}>всё равно разберёмся</span></h2>

<div className="cases-lead">Реальные случаи наших клиентов</div>
<div className="case-grid">
<div className="case-card">
<div className="case-card__head"><img className="avatar avatar--photo" src="img/face1.png" alt="Владимир"/><div><b>Сэкономили мне деньги</b><i>Владимир, Ростов-на-Дону</i></div></div>
<span>«У меня всего лишь вышел из строя клапан. В другом автосервисе заставляли менять весь редуктор за 6 000 ₽. Здесь посмотрели и сказали: у тебя не работает только клапан. Поменяли — и я поехал».</span>
</div>
<div className="case-card">
<div className="case-card__head"><img className="avatar avatar--photo" src="img/face2.png" alt="Сергей"/><div><b>Не навязали лишнего</b><i>Сергей, Батайск</i></div></div>
<span>«Мне в другом сервисе сказали менять всю проводку за 11 000 ₽. Приехал сюда — сказали, причина в одном оторванном проводе. Здесь его заменили за 500 ₽, и всё заработало».</span>
</div>
</div>

<div className="brands-line">
<span className="brands-line__label">Работаем с оборудованием:</span>
<span className="brands-line__list">{brands.join(' · ')}</span>
</div>
<Button variant="primary" size="lg" fullWidth onClick={()=>onCta('ремонт ГБО')}>Приехать на диагностику</Button>
<div className="free-diag"><IcoGift/><span>Бесплатная диагностика, если ремонтируетесь у нас</span></div>
</div>
</section>;
}
window.RepairBrands=RepairBrands;
