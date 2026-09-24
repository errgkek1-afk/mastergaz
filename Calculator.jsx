function Calculator({onCta}){
const {Slider,Chip,Button}=window.DesignSystem_a63f4f;
const C=window.GBO_CONFIG;
const [mileage,setMileage]=React.useState(1500);
const [consumption,setConsumption]=React.useState(10);
const [petrolPrice,setPetrolPrice]=React.useState(C.PETROL_PRICE_DEFAULT);
const [engine,setEngine]=React.useState(0);
const petrolMonth=Math.round(mileage*consumption/100*petrolPrice);
const gasMonth=Math.round(mileage*consumption*C.K_RASHOD/100*C.GAS_PRICE);
const saveMonth=petrolMonth-gasMonth;
const payback=saveMonth>0?Math.round(C.ENGINES[engine].cost/saveMonth):0;
const rub=n=>n.toLocaleString('ru-RU')+' ₽';
return <section style={{background:'var(--color-primary-mist)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1080,margin:'0 auto'}}>
<h2 className="calc-title" style={{fontWeight:600,textAlign:'center',color:'var(--color-ink)',margin:'0 0 40px',lineHeight:1.15}}>Посчитайте, сколько вы <span style={{color:'var(--color-primary)'}}>отдаёте бензину</span> каждый месяц</h2>
<div className="calc-card" style={{background:'#fff',borderRadius:16,boxShadow:'var(--shadow-soft)',padding:40}}>
<div className="calc-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'start'}}>
<div style={{display:'flex',flexDirection:'column',gap:28}}>
<Slider label="Пробег в месяц, км" min={100} max={6000} value={mileage} unit=" км" onChange={e=>setMileage(+e.target.value)}/>
<Slider label="Расход на 100 км, л" min={5} max={25} value={consumption} unit=" л" onChange={e=>setConsumption(+e.target.value)}/>
<Slider label="Цена бензина, ₽/л" min={50} max={110} value={petrolPrice} unit=" ₽" onChange={e=>setPetrolPrice(+e.target.value)}/>
<div>
<div style={{fontSize:14,fontWeight:600,color:'var(--color-ink)',marginBottom:10}}>Тип двигателя</div>
<div className="engine-chips" style={{display:'flex',gap:10,flexWrap:'wrap'}}>
{C.ENGINES.map((e,i)=><Chip key={e.id} selected={engine===i} onClick={()=>setEngine(i)}>{e.label}</Chip>)}
</div>
</div>
</div>
<div>
<div style={{display:'grid',gridTemplateColumns:'1fr auto auto',gap:'10px 24px',fontSize:17,alignItems:'baseline',paddingBottom:20,borderBottom:'1px solid var(--color-hairline)'}}>
<span/><span style={{fontSize:13,color:'var(--color-graphite)'}}>в месяц</span><span style={{fontSize:13,color:'var(--color-graphite)'}}>за год</span>
<span>На бензине</span><b>{rub(petrolMonth)}</b><b>{rub(petrolMonth*12)}</b>
<span>На газе</span><b>{rub(gasMonth)}</b><b>{rub(gasMonth*12)}</b>
</div>
<div style={{background:'var(--color-success-soft)',borderRadius:16,padding:'24px 28px',margin:'20px 0 16px'}}>
<div style={{fontSize:14,color:'var(--color-charcoal)',marginBottom:4}}>Экономия</div>
<div style={{fontSize:52,fontWeight:700,color:'var(--color-success)',lineHeight:1.05}}>{rub(saveMonth)}</div>
<div style={{fontSize:16,color:'var(--color-charcoal)',marginTop:6}}>в месяц · {rub(saveMonth*12)} за год</div>
</div>
<div style={{fontSize:20,fontWeight:600,color:'var(--color-ink)',textWrap:'balance'}}>Окупится примерно за {payback} мес.</div>
</div>
</div>
<div style={{marginTop:32}}><Button variant="primary" size="lg" fullWidth onClick={()=>onCta('калькулятор')}>Рассчитать стоимость</Button></div>
<div style={{marginTop:24}}>
<SmoothAccordion defaultOpenIndex={-1} items={[
{title:'Что входит в установку',content:<ol style={{margin:0,paddingLeft:20,lineHeight:1.8}}>
<li>Комплект электроники подкапотной части</li><li>Газовый баллон — тороидальный или цилиндрический</li><li>Мультиклапан класса А, Италия</li><li>Термопластиковые магистрали</li><li>Редуктор</li><li>Форсунки</li><li>Заправочное устройство</li><li>Фурнитура и крепёж</li></ol>},
{title:'Обслуживание',content:<div>
<div className="price-row" style={{borderBottom:'none'}}><span>ТО каждые 10 000 км — замена фильтров жидкой и паровой фазы, проверка герметичности, при необходимости компьютерная диагностика</span><b>1 400 – 2 000 ₽</b></div>
<div style={{fontSize:15,color:'var(--color-ink)',marginTop:14,fontWeight:600}}>Помним вашу машину. Позвоните — скажем, когда вы последний раз обслуживались.</div>
</div>},
{title:'Наша гарантия — до 1 года или 100 000 км',content:<div style={{fontSize:16,color:'var(--color-charcoal)',lineHeight:1.6}}>
Электронный блок управления, редуктор, форсунки.<br/>
Если деталь вышла из строя в срок и вы проходили ТО у нас — работы и деталь бесплатно.
</div>}
]}/>
</div>
</div>
</div>
</section>;
}
window.Calculator=Calculator;
