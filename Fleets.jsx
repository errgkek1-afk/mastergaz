function Fleets({onCta}){
const {Button,Placeholder}=window.DesignSystem_a63f4f;
return <section style={{background:'var(--color-primary-mist)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto',textAlign:'center'}}>
<h2 style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,color:'var(--color-ink)',margin:'0 0 16px',lineHeight:1.15,textWrap:'balance'}}>Обслуживаем <span style={{color:'var(--color-primary)'}}>автопарки и коммерческий</span> транспорт</h2>
<p style={{fontSize:'clamp(15px,1.35vw,17px)',color:'var(--color-charcoal)',margin:'0 0 40px',lineHeight:1.45,textWrap:'balance'}}>Договор, счета, закрывающие документы. Работаем с организациями по всей области.</p>
<div className="fleets-grid" style={{display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:16,marginBottom:16}}>
{[1,2,3,4,5,6].map(i=><Placeholder key={i} label="Логотип компании" aspect="16 / 9"/>)}
</div>
<div style={{fontSize:12,color:'var(--color-graphite)',marginBottom:32}}>Блок-заглушка: список контрагентов от заказчика не пришёл, логотипы подставим позже</div>
<div className="btn-sharp"><Button variant="primary" onClick={()=>onCta('автопарки')}>Обсудить обслуживание парка</Button></div>
</div>
</section>;
}
window.Fleets=Fleets;
