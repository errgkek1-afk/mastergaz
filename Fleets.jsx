/* Бегущая строка: лента из двух одинаковых половин, сдвиг на -50% —
   поэтому идёт по кругу без разрыва. Приём взят с сайта АвтоРегион 161. */
function Fleets(){
const names=['Чистая Вода','Военторг','Аквамаркет','Авто-ПЭК','ГАЗЛИДЕР','Вошингер','Комбинат Дубки','ЮПК — Южная пассажирская компания','Теплокоммунэнерго','Пассажиргортранс','ООО Ю-МЕТ','ТК Веста','Автопитер'];
const group=<div className="fleet-group">{names.map(n=><span className="fleet-item" key={n}>{n}</span>)}</div>;
return <section style={{background:'var(--color-primary-mist)',padding:'96px 32px',fontFamily:'var(--font-family)'}}>
<div style={{maxWidth:1280,margin:'0 auto',textAlign:'center'}}>
<h2 style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:600,color:'var(--color-ink)',margin:'0 0 24px',lineHeight:1.15,textWrap:'balance'}}>Нам доверяют <span style={{color:'var(--color-primary)'}}>автопарки и организации</span> Ростова</h2>
<div className="fleet-strip"><div className="fleet-track">{group}{group}</div></div>
<div style={{fontSize:17,color:'var(--color-ink)',marginTop:24,fontWeight:600,lineHeight:1.5}}>Официально по договору, есть ЭДО. Для больших автопарков — индивидуальные условия.</div>
</div>
</section>;
}
window.Fleets=Fleets;
