function Hero({onCta}){
const {Button}=window.DesignSystem_a63f4f;
const hooks=[
['Гарантия 100 000 км','До 1 года или 100 000 км, что наступит раньше. На оборудование и работы'],
['Настраиваем в движении','Мастер едет с вами и калибрует под реальной нагрузкой'],
['Сопровождение в ГИБДД','Ведём по всей процедуре регистрации — от техэкспертизы до МРЭО']
];
return <section style={{padding:'40px 32px 0',fontFamily:'var(--font-family)',background:'#fff'}}>
<div id="hero" style={{position:'relative',maxWidth:1280,margin:'0 auto',borderRadius:16,overflow:'hidden',background:'#1f1f1f'}}>
<div className="hero-stripe hero-stripe-1" style={{position:'absolute',right:-20,top:0,bottom:0,width:60,background:'var(--color-primary)',transform:'skewX(-20deg)'}}/>
<div className="hero-stripe hero-stripe-2" style={{position:'absolute',right:-50,top:0,bottom:0,width:36,background:'var(--color-primary-bright)',transform:'skewX(-20deg)'}}/>
<div className="hero-stripe hero-stripe-3" style={{position:'absolute',right:-70,top:0,bottom:0,width:22,background:'var(--color-primary-soft)',transform:'skewX(-20deg)'}}/>
<div className="hero-grid" style={{position:'relative',zIndex:2,display:'grid',gridTemplateColumns:'minmax(380px,1.2fr) minmax(260px,460px)',gap:40,alignItems:'center',padding:'40px 80px 80px 40px',minHeight:560}}>
<div style={{color:'#fff'}}>
<h1 className="hero-h1" style={{fontSize:'clamp(26px,3.2vw,52px)',fontWeight:600,lineHeight:1.1,margin:'0 0 14px'}}><span className="nowrap">Установка ГБО <span style={{color:'var(--color-primary-bright)'}}>от 4 часов</span></span><br/>в Ростове-на-Дону</h1>
<p className="hero-sub" style={{fontSize:18,lineHeight:1.45,margin:'0 0 32px',color:'#c2c2c2'}}>прямой и распределённый впрыск.</p>
<div className="hero-cta" style={{display:'flex',gap:40,alignItems:'center',flexWrap:'wrap'}}>
<Button variant="primary" size="lg" onClick={()=>onCta('первый экран')}>Рассчитать стоимость</Button>
<div>
<div style={{fontSize:13,color:'#9a9a9a'}}>Установлено ГБО:</div>
<div style={{fontSize:'clamp(32px,3vw,48px)',fontWeight:700,lineHeight:1.05}}>20 321</div>
<div style={{fontSize:13,color:'#9a9a9a'}}>машин уехали от нас на газу</div>
</div>
</div>
</div>
<div className="hero-photo" style={{aspectRatio:'4 / 3',borderRadius:16,background:'#2e2e2e',border:'1px dashed #575757',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:6,color:'#8a8a8a',textAlign:'center',padding:16}}>
<span style={{fontSize:15,fontWeight:600}}>Место под фото</span>
<span style={{fontSize:13}}>бокс / процесс установки</span>
</div>
</div>
</div>
<div className="hooks-grid" style={{maxWidth:1280,margin:'-48px auto 0',position:'relative',zIndex:3,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,padding:'0 8px'}}>
{hooks.map((h,i)=><div key={i} className="hook-wrap" style={{opacity:0,transform:'translateY(10px)',animation:`gboHookIn 320ms var(--ease-out) ${i*60}ms forwards`}}>
<div className="hook-card">
<div className="hook-card__title">{h[0]}</div>
<div className="hook-card__text">{h[1]}</div>
</div>
</div>)}
</div>
</section>;
}
window.Hero=Hero;
