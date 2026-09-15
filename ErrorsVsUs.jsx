function ErrorsVsUs(){
const {CheckListItem}=window.DesignSystem_a63f4f;
const rows=[
['Берут комплект ГБО на 100 л.с. и ставят на мотор в 250 л.с. — быстрый путь обратно в автосервис','Подбираем оборудование по реальной мощности и параметрам конкретного автомобиля'],
['Редуктор ставят туда, куда влез: он трётся, а дальше — протечка и поломка','Редуктор — строго по регламенту производителя: место, врезка, магистрали'],
['Форсунки прикручивают как получится — отсюда троение и провалы','Форсунки и длина трубок одинаковые на каждый цилиндр'],
['Газовую карту «настраивают» на холостых за десять минут в боксе','Настраиваем в движении, под нагрузкой, мастер едет вместе с вами'],
['Баллон крепят на пару болтов','Крепим по нормам безопасности: полный комплект креплений и страховочных лент'],
['Ставят дешёвый китайский мультиклапан','Мультиклапан класса А, Италия, с тремя системами защиты — входит в базовый комплект'],
['«На вашу машину прошивки нет, ничего не сделаем»','Нет прошивки — делаем вместе с техподдержкой завода: Италия, Польша'],
['Установили — и до свидания','Две недели после установки приезжайте на корректировку хоть каждый день, бесплатно'],
['«С документами разбирайтесь сами»','Проводим по всей процедуре регистрации в ГИБДД — отдельной услугой'],
['Гарантия «на месяц, если что — приезжайте»','До 1 года или 100 000 км на оборудование и работы']
];
const cell={display:'flex',alignItems:'center',position:'relative',zIndex:1,borderBottom:'1px solid var(--color-hairline)'};
return <section style={{background:'var(--color-cloud)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto'}}>
<h2 style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,textAlign:'center',color:'var(--color-ink)',margin:'0 0 48px',lineHeight:1.15,textWrap:'balance'}}>На рынке <span style={{color:'var(--color-primary)'}}>30 лет</span>. Знаем цену мелочам</h2>
<div className="errors-outer" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) 420px',gap:32,alignItems:'start'}}>
<div className="errors-table" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gridTemplateRows:`repeat(${rows.length+1},auto)`,columnGap:24}}>
<div className="errors-bg" style={{gridColumn:2,gridRow:'1 / -1',background:'#fff',borderRadius:16,boxShadow:'var(--shadow-soft)',zIndex:0}}/>
<div className="errow-error" style={{gridColumn:1,gridRow:1,padding:'0 0 12px'}}><h3 style={{fontSize:20,fontWeight:600,color:'var(--color-charcoal)',margin:0}}>Частые ошибки</h3></div>
<div className="errow-solution" style={{gridColumn:2,gridRow:1,padding:'24px 24px 12px',position:'relative',zIndex:1}}><h3 style={{fontSize:20,fontWeight:600,color:'var(--color-ink)',margin:0}}>Как делаем мы</h3></div>
{rows.map((r,i)=><React.Fragment key={i}>
<div className="errow-error" style={{...cell,gridColumn:1,gridRow:i+2,paddingRight:8}}><CheckListItem type="cross">{r[0]}</CheckListItem></div>
<div className="errow-solution" style={{...cell,gridColumn:2,gridRow:i+2,padding:'0 24px',borderBottomColor:i===rows.length-1?'transparent':'var(--color-hairline)'}}><CheckListItem type="check">{r[1]}</CheckListItem></div>
</React.Fragment>)}
</div>
<div className="errors-photos">
<div className="photo-ph"><b>Место под фото</b><span>работа мастера в боксе</span></div>
<div className="photo-ph"><b>Место под фото</b><span>деталь установки</span></div>
</div>
</div>
<div style={{fontSize:24,fontWeight:600,textAlign:'center',color:'var(--color-ink)',marginTop:48}}>Мы ставим газ так, как поставили бы себе.</div>
</div>
</section>;
}
window.ErrorsVsUs=ErrorsVsUs;
