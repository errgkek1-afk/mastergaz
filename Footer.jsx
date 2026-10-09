function Footer(){
const {MessengerButton}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
return <footer style={{background:'var(--color-ink)',color:'#fff',padding:'64px 32px 24px',fontFamily:'var(--font-family)'}}>
<div className="footer-grid" style={{maxWidth:1280,margin:'0 auto',display:'grid',gridTemplateColumns:'1.3fr 1.3fr 1fr 1fr',gap:32,marginBottom:40}}>
<div>
<img src="img/logo.png?v=24" alt="МастерГаз" width="712" height="192" style={{height:56,width:"auto",display:"block",marginBottom:14}}/>
<div style={{fontSize:14,color:'var(--color-steel)',lineHeight:1.5}}>МастерГаз. Газобаллонное оборудование, климатические системы, автономные отопители. С 1996 года</div>
</div>
<div>
<div style={{fontSize:14,color:'var(--color-steel)',marginBottom:10}}>Телефоны</div>
<div className="nowrap" style={{fontSize:16,marginBottom:6}}>ГБО — {C.PHONE_GBO}</div>
<div className="nowrap" style={{fontSize:16}}>Кондиционеры — {C.PHONE_CLIMATE}</div>
</div>
<div>
<div style={{fontSize:14,color:'var(--color-steel)',marginBottom:10}}>Адрес и график</div>
<div style={{fontSize:14,lineHeight:1.6}}>{C.ADDRESS}<br/>{window.HOURS_LINE}</div>
</div>
<div>
<div style={{fontSize:14,color:'var(--color-steel)',marginBottom:10}}>Разделы</div>
<div style={{fontSize:14,marginBottom:6}}><a href="#" style={{color:'var(--color-primary-bright)'}}>ГБО</a></div>
<div style={{fontSize:14,marginBottom:14}}><a href="otopiteli/" style={{color:'var(--color-steel)'}}>Отопители и кондиционеры</a></div>
<div className="footer-contacts"><Messenger type="telegram" href="https://t.me/share/url?url=&text="/><Messenger type="whatsapp" href={C.WHATSAPP}/><Messenger type="max" href={C.MAX_LINK}/></div>
<div style={{fontSize:13,color:'var(--color-steel)',margin:'16px 0 8px',lineHeight:1.4}}>Магазин газового оборудования: запчасти на Ozon и Wildberries</div>
<div className="footer-contacts">{[['Ozon','img/ozon.png',C.OZON],['Wildberries','img/wb.png',C.WB]].map(([label,src,href])=>
<a key={label} className="shop-btn" href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><img src={src} alt={label}/></a>)}</div>
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
