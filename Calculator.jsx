function Calculator({onCta}){
const {Slider,Button}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
const [mileage,setMileage]=React.useState(1500);
const [consumption,setConsumption]=React.useState(10);
const [petrolPrice,setPetrolPrice]=React.useState(C.PETROL_PRICE_DEFAULT);
const petrolMonth=Math.round(mileage*consumption/100*petrolPrice);
const gasMonth=Math.round(mileage*consumption*C.K_RASHOD/100*C.GAS_PRICE);
const saveMonth=petrolMonth-gasMonth;
const rub=n=>n.toLocaleString('ru-RU')+' ₽';
return <section style={{background:'var(--color-primary-mist)',padding:'76px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1080,margin:'0 auto'}}>
<div className="calc-card" style={{background:'#fff',borderRadius:14,boxShadow:'var(--shadow-soft)',padding:40}}>
<div className="calc-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start'}}>
<div style={{display:'flex',flexDirection:'column',gap:28}}>
<h2 className="calc-title" data-reveal="" style={{fontWeight:600,color:'var(--color-ink)',margin:0}}>Посчитайте, сколько <span style={{color:'var(--color-primary)'}}>вернёт вам газ</span></h2>
<Slider label="Пробег в месяц, км" min={100} max={6000} value={mileage} unit=" км" onChange={e=>setMileage(+e.target.value)}/>
<Slider label="Расход на 100 км, л" min={5} max={25} value={consumption} unit=" л" onChange={e=>setConsumption(+e.target.value)}/>
<Slider label="Цена бензина, ₽/л" min={50} max={110} value={petrolPrice} unit=" ₽" onChange={e=>setPetrolPrice(+e.target.value)}/>
</div>
<div>
<div className="calc-table" style={{display:'grid',gridTemplateColumns:'1fr auto auto',gap:'10px 24px',fontSize:19,alignItems:'baseline',paddingBottom:20,borderBottom:'1px solid var(--color-hairline)'}}>
<span/><span style={{fontSize:14,color:'var(--color-graphite)'}}>в месяц</span><span style={{fontSize:14,color:'var(--color-graphite)'}}>за год</span>
<span>На бензине</span><b>{rub(petrolMonth)}</b><b>{rub(petrolMonth*12)}</b>
<span>На газе</span><b>{rub(gasMonth)}</b><b>{rub(gasMonth*12)}</b>
</div>
{/* крупно - экономия за год: человек сразу видит большую сумму (Eugene, 11.10) */}
<div style={{background:'var(--color-success-soft)',borderRadius:10,padding:'24px 28px',marginTop:20}}>
<div style={{fontSize:15,color:'var(--color-charcoal)',marginBottom:4}}>Экономия за год</div>
<div style={{fontSize:52,fontWeight:700,color:'var(--color-success)',lineHeight:1.05}}>{rub(saveMonth*12)}</div>
<div style={{fontSize:18,color:'var(--color-charcoal)',marginTop:6}}>{rub(saveMonth)} в месяц</div>
</div>
</div>
</div>
<div style={{marginTop:32}}><Button variant="primary" size="lg" fullWidth onClick={()=>onCta('калькулятор')}>Узнать цену установки ГБО</Button></div>
<div style={{marginTop:24}}>
<SmoothAccordion defaultOpenIndex={-1} items={[
{title:<span>Что входит в установку<br/>газового оборудования</span>,content:<ol style={{margin:0,paddingLeft:20,lineHeight:1.8}}>
<li>Комплект электроники подкапотной части</li><li>Газовый баллон — тороидальный или цилиндрический</li><li>Мультиклапан класса А, Италия</li><li>Термопластиковые магистрали</li><li>Редуктор</li><li>Форсунки</li><li>Заправочное устройство</li><li>Фурнитура и крепёж</li></ol>},
{title:<span>Обслуживание газового оборудования:<br/>ТО каждые <span className="nowrap">10 000 км</span></span>,content:<div>
<div className="price-row" style={{borderBottom:'none'}}><span>ТО каждые 10 000 км — замена фильтров жидкой и паровой фазы, проверка герметичности, при необходимости компьютерная диагностика</span><b>1 400 – 2 000 ₽</b></div>
<div style={{fontSize:15,color:'var(--color-ink)',marginTop:14,fontWeight:600}}>Помним вашу машину. Позвоните — скажем, когда вы последний раз обслуживались.</div>
</div>},
{title:<span>Наша гарантия<br/>до 1 года или <span className="nowrap">100 000 км</span></span>,content:<div style={{fontSize:16,color:'var(--color-charcoal)',lineHeight:1.6}}>
Электронный блок управления, редуктор, форсунки.<br/>
Если деталь вышла из строя в срок и вы проходили ТО у нас — работы и деталь бесплатно.
</div>}
]}/>
</div>
</div>
</div>
</section>;
}
window.Calculator=Calculator;
