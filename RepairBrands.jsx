function RepairBrands({onCta}){
const {Button}=window.DesignSystem_a63f4f;
const brands=['STAG','Digitronic','OMVL','Lovato','Europegas','AEB','Landi Renzo','BRC','GT-Gas','Zenit','Alpha','King','Bigas','KME'];
return <section style={{background:'var(--color-cloud)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1080,margin:'0 auto'}}>
<h2 style={{fontSize:40,fontWeight:600,color:'var(--color-ink)',margin:'0 0 20px',lineHeight:1.1,textAlign:'center'}}>Ставили ГБО не у нас?<br/><span style={{color:'var(--color-primary)',whiteSpace:'nowrap'}}>Все равно разберёмся.</span></h2>
<p style={{fontSize:17,fontWeight:600,color:'var(--color-ink)',margin:'0 0 32px',textAlign:'center'}}>Бесплатная диагностика, если ремонтируетесь у нас.</p>
<div style={{fontSize:14,color:'var(--color-graphite)',marginBottom:12,textAlign:'center'}}>Работаем с оборудованием:</div>
<div style={{display:'flex',flexWrap:'wrap',gap:10,justifyContent:'center',marginBottom:12}}>
{brands.map(b=><div key={b} style={{background:'#fff',borderRadius:9999,border:'1px solid var(--color-hairline)',padding:'12px 22px',fontSize:15,fontWeight:600,color:'var(--color-charcoal)'}}>{b}</div>)}
</div>
<div style={{fontSize:12,color:'var(--color-graphite)',textAlign:'center',marginBottom:32}}>Логотипов брендов нет в материалах — стоят текстовые плашки</div>
<Button variant="primary" size="lg" fullWidth onClick={()=>onCta('ремонт ГБО')}>Приехать на диагностику</Button>
</div>
</section>;
}
window.RepairBrands=RepairBrands;
