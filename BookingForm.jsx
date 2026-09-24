function BookingForm({onCta}){
const {Input,Button}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
const [name,setName]=React.useState('');
const [phone,setPhone]=React.useState('+7');
const [car,setCar]=React.useState('');
const [sent,setSent]=React.useState(false);
const ready=window.phoneComplete(phone);
const msg=encodeURIComponent(C.MESSENGER_TEXTS['форма записи']);
return <section className="booking-section" style={{background:'var(--color-primary-mist)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div className="booking-stripes" aria-hidden="true">
<div className="booking-stripe booking-stripe--3"/>
<div className="booking-stripe booking-stripe--2"/>
<div className="booking-stripe booking-stripe--1"/>
</div>
<div style={{maxWidth:640,margin:'0 auto',position:'relative'}}>
<div style={{position:'relative',background:'#fff',borderRadius:16,boxShadow:'var(--shadow-modal)',padding:40,zIndex:1}}>
<h2 style={{fontSize:36,fontWeight:600,color:'var(--color-ink)',margin:'0 0 32px',textAlign:'center',lineHeight:1.12}}>Напишите марку машины<br/><span style={{color:'var(--color-primary)'}}>назовём цену и срок</span></h2>
<div style={{display:'flex',flexDirection:'column',gap:16,marginBottom:24}}>
<Input label="Имя (необязательно)" placeholder="Как вас зовут" value={name} onChange={e=>setName(e.target.value)}/>
<Input label="Телефон" placeholder="+7 (___) ___-__-__" value={phone} onChange={e=>setPhone(window.formatPhone(e.target.value))}/>
<Input label="Марка и год авто (необязательно)" placeholder="Например, Toyota Camry, 2015" value={car} onChange={e=>setCar(e.target.value)}/>
</div>
<SubmitMorph ready={ready} sent={sent} size="lg" label="Рассчитать стоимость" onSubmit={()=>setSent(true)}/>
<div style={{marginTop:12}}>
<Button variant="ghost" fullWidth onClick={()=>onCta&&onCta('ближайшее свободное время')}>Записаться на ближайшее свободное время</Button>
</div>
<div style={{textAlign:'center',margin:'28px 0 8px'}}>
<div style={{fontSize:16,fontWeight:600,color:'var(--color-ink)',marginBottom:6}}>Не готовы записываться?</div>
<div style={{fontSize:14,color:'var(--color-graphite)',lineHeight:1.5}}>Просто напишите марку и год. Скажем, сколько будет стоить и сколько займёт времени. Без обязательств.</div>
</div>
<div style={{display:'flex',justifyContent:'center',gap:12,marginTop:16}}>
<Messenger type="telegram" href={'https://t.me/share/url?url=&text='+msg}/>
<Messenger type="whatsapp" href={C.WHATSAPP+'?text='+msg}/>
<Messenger type="max" href={C.MAX_LINK}/>
</div>
</div>
</div>
</section>;
}
window.BookingForm=BookingForm;
