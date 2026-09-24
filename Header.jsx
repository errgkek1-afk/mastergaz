function Header({onCta}){
const {Button,Tabs}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
const open=window.isOpenNow();
const [hidden,setHidden]=React.useState(false);
const [onDark,setOnDark]=React.useState(false);
const [direction,setDirection]=React.useState(0);
React.useEffect(()=>{
if(!('IntersectionObserver' in window))return;
const hero=document.getElementById('hero');
const footer=document.querySelector('footer');
const heroIo=new IntersectionObserver(([e])=>setHidden(!e.isIntersecting),{rootMargin:'-64px 0px 0px 0px'});
// нижняя кнопка темнеет, когда заезжает на тёмный подвал
const footerIo=new IntersectionObserver(([e])=>setOnDark(e.isIntersecting),{rootMargin:'0px 0px -48px 0px'});
if(hero)heroIo.observe(hero);
if(footer)footerIo.observe(footer);
return ()=>{heroIo.disconnect();footerIo.disconnect();};
},[]);
return <>
<header className={'site-header'+(hidden?' is-hidden':'')} style={{position:'sticky',top:0,zIndex:20,background:'#fff',borderBottom:'1px solid var(--color-hairline)',height:72,display:'flex',alignItems:'center',padding:'0 32px',justifyContent:'space-between',fontFamily:'var(--font-family)',gap:24}}>
<div style={{display:'flex',flexDirection:'column',lineHeight:1.15}}>
<span style={{fontWeight:700,fontSize:20,color:'var(--color-ink)'}}>МастерГаз</span>
<span style={{fontSize:12,color:'var(--color-graphite)'}}>работаем с 1996 года</span>
</div>
<div className="header-tabs dir-tabs" role="tablist" aria-label="Направление">
{['ГБО','Отопители и кондиционеры'].map((t,i)=><button key={t} type="button" role="tab" aria-selected={direction===i} className={direction===i?'is-active':''} onClick={()=>setDirection(i)}>{t}</button>)}
</div>
<div style={{display:'flex',alignItems:'center',gap:24}}>
<div className="header-status" style={{display:'flex',alignItems:'center',gap:10}}>
<span className={'status-dot'+(open?' is-open':'')}/>
<div style={{display:'flex',flexDirection:'column',lineHeight:1.15}}>
<span style={{fontSize:14,color:'var(--color-ink)'}}>{open?'Сейчас работаем':'Сейчас закрыто'}</span>
<span style={{fontSize:12,color:'var(--color-graphite)'}}>{window.HOURS_LINE}</span>
</div>
</div>
<a className="header-phone" href={'tel:+'+C.PHONE_GBO.replace(/\D/g,'')}>{C.PHONE_GBO}</a>
<div className="header-cta"><Button variant="primary" onClick={()=>onCta('первый экран')}>Связаться</Button></div>
<div className="mobile-switch" role="tablist" aria-label="Направление">
<span className="mobile-switch__thumb" style={{transform:`translateX(${direction*100}%)`}}/>
{['ГБО','Отопители'].map((t,i)=><button key={t} type="button" role="tab" aria-selected={direction===i} className={direction===i?'is-active':''} onClick={()=>setDirection(i)}>{t}</button>)}
</div>
</div>
</header>
<div className={'mobile-float-cta'+(onDark?' on-dark':'')}><Button variant="primary" fullWidth onClick={()=>onCta('плавающая кнопка')}>Рассчитать стоимость</Button></div>
</>;
}
window.Header=Header;
