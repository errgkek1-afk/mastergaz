function Team(){
const {Placeholder}=window.DesignSystem_a63f4f;
const roles=[
['Мастер по подкапотной части','Электроника, редуктор, форсунки, магистрали'],
['Мастер по баллонам и заправочным устройствам','Монтаж баллона по нормам безопасности, установка ВЗУ'],
['Диагност-настройщик','Настройка газовой карты в движении, диагностика неисправностей'],
['Мастер по нестандартным установкам','Машины, под которые нет готовых решений'],
['Мастер по распространённым машинам','Массовые модели — отработанный поток, отсюда и 4 часа'],
['Слесарь','Сопутствующие слесарные работы']
];
return <section style={{background:'#fff',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto'}}>
<h2 style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,textAlign:'center',color:'var(--color-ink)',margin:'0 0 12px',lineHeight:1.15,textWrap:'balance'}}><span style={{color:'var(--color-primary)'}}>14 мастеров</span>. Средний стаж больше десяти лет</h2>
<p style={{fontSize:'clamp(15px,1.35vw,17px)',color:'var(--color-charcoal)',textAlign:'center',margin:'0 0 48px',lineHeight:1.45,textWrap:'balance'}}>Каждый занимается своим делом: одни ставят, другие настраивают, третьи ведут документы.</p>
<div className="team-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,alignItems:'stretch'}}>
{roles.map((r,i)=><div key={i} style={{display:'flex',flexDirection:'column',height:'100%'}}>
<Placeholder label="Фото мастера" aspect="4 / 5"/>
<div style={{fontSize:20,fontWeight:600,color:'var(--color-ink)',margin:'16px 0 4px'}}>{r[0]}</div>
<div style={{fontSize:14,color:'var(--color-graphite)',lineHeight:1.5,marginBottom:16}}>{r[1]}</div>
<div style={{marginTop:'auto',fontSize:13,color:'var(--color-graphite)',background:'var(--color-cloud)',borderRadius:8,padding:'10px 14px'}}>Имя и стаж — ждём от заказчика</div>
</div>)}
</div>
</div>
</section>;
}
window.Team=Team;
