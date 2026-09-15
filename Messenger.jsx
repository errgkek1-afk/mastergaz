function Messenger({type,href}){
const labels={telegram:'Telegram',whatsapp:'WhatsApp',max:'MAX'};
const external=href&&href!=='#';
return <a className={'messenger-btn messenger-btn--'+type} href={href||'#'} aria-label={labels[type]} target={external?'_blank':undefined} rel={external?'noopener noreferrer':undefined}>
{type==='max'
?<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M12.1 3.96C16.6 3.96 20.1 7.5 20.1 12.07C20.1 16.3 16.6 19.42 12.47 19.42C10.9 19.42 9.6 19.05 8.74 18.45C7.9 19.15 6.9 19.8 6.1 19.8C5.5 19.8 5.28 19.35 5.28 18.9C5.3 17.3 4.95 16.2 4.45 14.95C4.05 13.9 3.87 12.9 3.87 11.84C3.87 7.5 7.6 3.96 12.1 3.96ZM11.98 7.84C14.4 7.84 16.3 9.7 16.3 12C16.3 14.3 14.6 15.8 12.35 15.8C11.2 15.8 10.35 15.4 9.85 14.95L8.75 15.6C8.45 15.75 8.3 15.55 8.2 15.3C7.9 14.5 7.79 13.2 7.79 12.1C7.79 9.7 9.6 7.84 11.98 7.84Z"/></svg>
:<span className="iconify" data-icon={type==='telegram'?'mdi:telegram':'mdi:whatsapp'} style={{fontSize:22}}/>}
</a>;
}
window.Messenger=Messenger;
