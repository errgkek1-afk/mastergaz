function Team(){
const {Placeholder}=window.DesignSystem_a63f4f;
const roles=[
/* третий элемент - скан сертификата в углу фото (img/sert/), четвёртый - скан альбомный,
   пятый - подпись. Карточки без сертификата убраны (Eugene, 09.10): три мастера, у каждого скан. */
['Мастер по подкапотной части','Электроника, редуктор, форсунки, магистрали','korsunov',false,'Сертификат Italgas и OMVL, 2020'],
['Мастер по баллонам и заправочным устройствам','Монтаж баллона по нормам безопасности, установка ВЗУ','pukhov',true,'Сертификат Italgas и OMVL, 2020'],
['Диагност-настройщик','Настройка газовой карты в движении, диагностика неисправностей','drobotov',false,'Свидетельство Газпарт, 2018'],
];
return <section style={{background:'#fff',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto'}}>
<h2 data-reveal="" style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,textAlign:'center',color:'var(--color-ink)',margin:'0 0 12px',lineHeight:1.15,textWrap:'balance'}}><span style={{color:'var(--color-primary)'}}>14 мастеров по ГБО</span>. Средний стаж больше десяти лет</h2>
<p style={{fontSize:'clamp(15px,1.35vw,17px)',color:'var(--color-charcoal)',textAlign:'center',margin:'0 0 48px',lineHeight:1.45,textWrap:'balance'}}>Каждый занимается своим делом: одни ставят, другие настраивают, третьи ведут документы.</p>
<div className="team-grid" data-stagger="" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,alignItems:'stretch'}}>
{roles.map((r,i)=><div key={i} style={{display:'flex',flexDirection:'column',height:'100%'}}>
<div className="team-photo"><Placeholder label="Фото мастера" aspect="4 / 5"/>{r[2]&&<img className={'team-cert'+(r[3]?' team-cert--wide':'')} src={'img/sert/'+r[2]+'.jpg?v=24'} alt={r[4]} loading="lazy"/>}</div>
<div style={{fontSize:20,fontWeight:600,color:'var(--color-ink)',margin:'16px 0 4px'}}>{r[0]}</div>
<div style={{fontSize:14,color:'var(--color-graphite)',lineHeight:1.5,marginBottom:16}}>{r[1]}</div>
<div style={{marginTop:'auto',fontSize:13,color:'var(--color-graphite)',background:'var(--color-cloud)',borderRadius:8,padding:'10px 14px'}}>Имя и стаж — ждём от заказчика</div>
</div>)}
</div>
</div>
</section>;
}
window.Team=Team;
