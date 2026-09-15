function SubmitMorph({ready,sent,onSubmit,label,size}){
const h=size==='lg'?56:48;
return <div className={'submit-morph'+(sent?' is-sent':'')} style={{'--h':h+'px'}}>
<button type="button" className={'submit-morph__btn'+(ready&&!sent?' is-ready':'')} disabled={!ready||sent} onClick={onSubmit} aria-label={sent?'Заявка отправлена':label}>
<span className="submit-morph__label">{label}</span>
<svg className="submit-morph__check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
</button>
<div className="submit-morph__note" aria-live="polite">{sent?'Заявка отправлена. Ожидайте ответа — свяжемся через 10–15 минут':''}</div>
</div>;
}
window.SubmitMorph=SubmitMorph;
