/* Шапка той же геометрии, что у страницы отопителей: тёмная плашка, которая
   висит сверху, логотип слева, вкладки по центру, часы, телефон и кнопка
   справа. На телефоне логотип и телефон в строку, вкладки ниже (Eugene, 02.10). */
function Header({onCta}){
const {Button}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
const open=window.isOpenNow();
const [hidden,setHidden]=React.useState(false);
const [onDark,setOnDark]=React.useState(false);
React.useEffect(()=>{
if(!('IntersectionObserver' in window))return;
const hero=document.getElementById('hero');
const footer=document.querySelector('footer');
const heroIo=new IntersectionObserver(([e])=>setHidden(!e.isIntersecting),{rootMargin:'-64px 0px 0px 0px'});
// нижняя кнопка темнеет, когда заезжает на тёмный подвал
const footerIo=new IntersectionObserver(([e])=>setOnDark(e.isIntersecting),{rootMargin:'0px 0px -48px 0px'});
if(hero)heroIo.observe(hero);
if(footer)footerIo.observe(footer);
return ()=>{heroIo.disconnect();footerIo.disconnect();};
},[]);
return <>
<header className={'header'+(hidden?' is-hidden':'')}>
<div className="wrap header__in">
<a className="logo" href="#" aria-label="МастерГаз"><img src="img/logo.png?v=24" alt="МастерГаз" width="712" height="192"/></a>
<nav className="tabs" aria-label="Направление">
<a href="#" className="is-active" aria-current="page">ГБО</a>
<a href="otopiteli/">Отопители и кондиционеры</a>
</nav>
<div className="header__right">
<div className="hours"><b><span className={'status-dot'+(open?' is-open':'')}/>{open?'Сейчас работаем':'Сейчас закрыто'}</b>{window.HOURS_LINE}</div>
<a className="header__phone" href={'tel:+'+C.PHONE_GBO.replace(/\D/g,'')}>{C.PHONE_GBO}</a>
<Button variant="primary" onClick={()=>onCta('первый экран')}>Связаться</Button>
</div>
</div>
</header>
<div className={'mobile-float-cta'+(onDark?' on-dark':'')}><Button variant="primary" fullWidth onClick={()=>onCta('плавающая кнопка')}>Рассчитать стоимость</Button></div>
</>;
}
window.Header=Header;
