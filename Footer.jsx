function Footer(){
const {MessengerButton}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
return <footer style={{background:'var(--color-ink)',color:'#fff',padding:'64px 32px 24px',fontFamily:'var(--font-family)'}}>
<div className="footer-grid" style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'1.3fr 1.3fr 1fr 1fr',gap:32,marginBottom:40}}>
<div>
<div style={{fontWeight:700,fontSize:20,marginBottom:10}}>МастерГаз</div>
<div style={{fontSize:14,color:'var(--color-steel)',lineHeight:1.5}}>МастерГаз. Газобаллонное оборудование, климатические системы, автономные отопители. С 1996 года</div>
</div>
<div>
<div style={{fontSize:14,color:'var(--color-steel)',marginBottom:10}}>Телефоны</div>
<div className="nowrap" style={{fontSize:16,marginBottom:6}}>ГБО — {C.PHONE_GBO}</div>
<div className="nowrap" style={{fontSize:16}}>Кондиционеры — {C.PHONE_CLIMATE}</div>
</div>
<div>
<div style={{fontSize:14,color:'var(--color-steel)',marginBottom:10}}>Адрес и график</div>
<div style={{fontSize:14,lineHeight:1.6}}>{C.ADDRESS}<br/>{window.HOURS_LINE}</div>
</div>
<div>
<div style={{fontSize:14,color:'var(--color-steel)',marginBottom:10}}>Разделы</div>
<div style={{fontSize:14,marginBottom:6}}><a href="#" style={{color:'var(--color-primary-bright)'}}>ГБО</a></div>
<div style={{fontSize:14,color:'var(--color-graphite)',marginBottom:14}}>Отопители и кондиционеры</div>
<div className="footer-contacts"><Messenger type="telegram" href="https://t.me/share/url?url=&text="/><Messenger type="whatsapp" href={C.WHATSAPP}/><Messenger type="max" href={C.MAX_LINK}/>
{[['Ozon','img/ozon.png'],['Wildberries','img/wb.png'],['Авито','img/avito.png']].map(([label,src])=>
<a key={label} className="shop-btn" href="#" aria-label={label} title={label} onClick={e=>e.preventDefault()}><img src={src} alt={label}/></a>)}</div>
</div>
</div>
<div style={{maxWidth:1280,margin:'0 auto',borderTop:'1px solid #3d3d3d',paddingTop:16,fontSize:12,color:'var(--color-steel)',display:'flex',justifyContent:'space-between',gap:16,flexWrap:'wrap'}}>
<span>ИП Корсунов Антон Игоревич · ИНН 890414959136 · ОГРНИП 324619600106274</span>
<a href="#" style={{color:'var(--color-steel)'}}>Политика обработки персональных данных</a>
<span>© 1996–2026 МастерГаз</span>
</div>
</footer>;
}
window.Footer=Footer;
