function Popup({source,onClose}){
const {Input}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
const [name,setName]=React.useState('');
const [phone,setPhone]=React.useState('+7');
const [sent,setSent]=React.useState(false);
const ready=window.phoneComplete(phone);
const [shown,setShown]=React.useState(false);
React.useEffect(()=>{const r=requestAnimationFrame(()=>setShown(true));return ()=>cancelAnimationFrame(r);},[]);
const msg=encodeURIComponent(C.MESSENGER_TEXTS[source]||C.MESSENGER_TEXTS['первый экран']);
return <div style={{position:'fixed',inset:0,background:'rgba(26,26,26,0.5)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:50,padding:16,fontFamily:'var(--font-family)',opacity:shown?1:0,transition:'opacity var(--dur-modal) var(--ease-out)'}} onClick={onClose}>
<div style={{width:420,maxWidth:'100%',background:'#fff',borderRadius:16,boxShadow:'var(--shadow-modal)',padding:32,transformOrigin:'center',transform:shown?'scale(1) translateY(0)':'scale(0.96) translateY(8px)',opacity:shown?1:0,transition:'transform var(--dur-modal) var(--ease-out), opacity var(--dur-modal) var(--ease-out)'}} onClick={e=>e.stopPropagation()}>
<h3 style={{fontSize:24,fontWeight:600,color:'var(--color-ink)',margin:'0 0 8px'}}>Оставить заявку</h3>
<p style={{fontSize:16,color:'var(--color-charcoal)',margin:'0 0 4px'}}>Мы с вами свяжемся</p>
<p style={{fontSize:14,color:'var(--color-graphite)',margin:'0 0 20px'}}>Ответим через 10–15 минут</p>
<div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:20}}>
<Input label="Имя (необязательно)" placeholder="Как вас зовут" value={name} onChange={e=>setName(e.target.value)}/>
<Input label="Телефон" placeholder="+7 (___) ___-__-__" value={phone} onChange={e=>setPhone(window.formatPhone(e.target.value))}/>
</div>
<SubmitMorph ready={ready} sent={sent} label="Оставить заявку" onSubmit={()=>setSent(true)}/>
<div style={{textAlign:'center',fontSize:16,fontWeight:600,color:'var(--color-ink)',margin:'24px 0 12px'}}>Напишите нам прямо сейчас</div>
<div style={{display:'flex',justifyContent:'center',gap:12}}>
<Messenger type="telegram" href={'https://t.me/share/url?url=&text='+msg}/>
<Messenger type="whatsapp" href={C.WHATSAPP+'?text='+msg}/>
<Messenger type="max" href={C.MAX_LINK}/>
</div>
</div>
</div>;
}
window.Popup=Popup;
