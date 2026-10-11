/* Наши работы по ГБО - лента после калькулятора, механика АвтоРегиона 161
   (swipe.js, initDock): активная карточка по центру, соседи приглушены. Фото -
   img/raboty-gbo/, из папки заказчика «Фото монтажей/ГБО/ai-gotovye»; два кадра
   (09, 10) повторяют первый экран с теми же подписями - так решил Eugene 10.10.
   Подписи на согласовании. */
const WORKS_GBO=[
['01','Газель: установка ГБО, монтаж под капотом',750,1000],
['02','Тороидальный баллон вместо запаски',1000,515],
['06','Заправочное устройство в бампере',1000,563],
['07','Баллон под рамой внедорожника',1000,563],
['09','Газовая рампа и форсунки под капотом',1000,563],
['10','Lada Vesta',1000,563]
];
function Works(){
const track=React.useRef(null);
React.useEffect(()=>{window.initDock(track.current);},[]);
return <section style={{background:'#fff',padding:'76px 0',overflowX:'clip',fontFamily:'var(--font-family)'}}>
<div className="works-head">
<h2 data-reveal="" data-fit="2"><span className="l1">Наши работы по&nbsp;установке</span><em>ГБО в&nbsp;Ростове</em></h2>
</div>
<div ref={track} className="dock">
{WORKS_GBO.map(([n,cap,w,h])=><figure key={n} className="dock__item">
<div className="dock__card"><img src={'img/raboty-gbo/'+n+'.jpg?v=36'} alt={cap} width={w} height={h} loading="lazy" draggable={false}/></div>
<figcaption className="dock__cap">{cap}</figcaption>
</figure>)}
</div>
</section>;
}
window.Works=Works;
