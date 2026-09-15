function SmoothAccordion({items,defaultOpenIndex=0}){
const [open,setOpen]=React.useState(defaultOpenIndex);
return <div className="smooth-acc">
{items.map((item,i)=>{
const isOpen=open===i;
return <div key={i} className={'smooth-acc__item'+(isOpen?' is-open':'')}>
<button type="button" className="smooth-acc__head" aria-expanded={isOpen} onClick={()=>setOpen(isOpen?-1:i)}>
{item.title}<span className="smooth-acc__icon">⌄</span>
</button>
<div className="smooth-acc__panel"><div className="smooth-acc__inner"><div className="smooth-acc__body">{item.content}</div></div></div>
</div>;
})}
</div>;
}
window.SmoothAccordion=SmoothAccordion;
