/* Шапка той же геометрии, что у страницы отопителей: тёмная плашка, которая
   висит сверху, логотип слева, вкладки по центру, часы, телефон и кнопка
   справа. На телефоне логотип и телефон в строку, вкладки ниже (Eugene, 02.10). */
/* 11.10: шапка видна везде и при прокрутке не прячется - вкладки
   «ГБО / Отопители» должны быть под рукой на любом экране; нижняя липкая
   кнопка «Рассчитать стоимость» убрана по его же слову. */
function Header({onCta}){
const {Button}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
const open=window.isOpenNow();
return <header className="header">
<div className="wrap header__in">
<a className="logo" href="#" aria-label="МастерГаз"><img src="img/logo.png?v=36" alt="МастерГаз" width="712" height="192"/></a>
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
</header>;
}
window.Header=Header;
