/* Отправка заявок с сайта МастерГаз в приём заявок: программа в Яндекс Облаке
   (папка yandex-cloud-leads), она шлёт заявку в MAX, в Strive и в таблицу на
   Диске. Адрес программы - window.GBO_CONFIG.LEADS_ENDPOINT. Пока он пустой,
   заявка никуда не уходит: в консоли предупреждение, человек видит «отправлено».

   Приём взят с сайта АвтоРегион 161 (site-v2/app.js): человек оставил номер и
   ушёл, второго захода не будет, поэтому заявку ловим за этот один визит -
   до пяти попыток за 30 секунд, не дольше 8 секунд на попытку, а при уходе со
   страницы неподтверждённые заявки досылаются сразу. У каждой заявки свой
   номер (id): сервер по нему узнаёт повтор и второй раз её не заводит. */
(function(){
  var PAUSES=[1500,4000,10000,10000];   // пауза перед 2-й, 3-й, 4-й и 5-й попыткой
  var TRY_MS=8000, TOTAL_MS=30000;
  var jobs=[];                          // заявки, которые сервер ещё не подтвердил

  /* text/plain - «простой» запрос без предварительной проверки браузера;
     keepalive - долетает, даже если вкладку закрыли в ту же секунду */
  function request(job){
    return {method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:job.body,keepalive:true};
  }
  function confirmed(job){var i=jobs.indexOf(job);if(i>-1)jobs.splice(i,1);}
  function retry(job){
    var p=PAUSES[job.tries-1];
    if(p==null||Date.now()+p>=job.started+TOTAL_MS)return;
    setTimeout(function(){attempt(job);},p);
  }
  function attempt(job){
    job.tries++;
    var opts=request(job);
    var ms=Math.max(1000,Math.min(TRY_MS,job.started+TOTAL_MS-Date.now()));
    var timer=0;
    if(window.AbortSignal&&AbortSignal.timeout){opts.signal=AbortSignal.timeout(ms);}
    else if(window.AbortController){var ctl=new AbortController();opts.signal=ctl.signal;timer=setTimeout(function(){ctl.abort();},ms);}
    fetch(job.url,opts).then(function(r){clearTimeout(timer);if(r.ok)confirmed(job);else retry(job);},
                             function(){clearTimeout(timer);retry(job);});
  }
  function flush(){
    jobs.forEach(function(job){
      if(Date.now()-job.flushedAt<1000)return;   // pagehide и visibilitychange приходят подряд
      job.flushedAt=Date.now();
      if(navigator.sendBeacon&&navigator.sendBeacon(job.url,job.body))return;
      fetch(job.url,request(job)).catch(function(){});
    });
  }
  window.addEventListener('pagehide',flush);
  document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')flush();});

  /* lead: {name, phone, source, note, company}. Телефон - в любом виде, здесь
     приводится к 11 цифрам. company - невидимое поле-ловушка для роботов. */
  window.sendLead=function(lead){
    var C=window.GBO_CONFIG||{};
    var url=C.LEADS_ENDPOINT;
    var d=String(lead.phone||'').replace(/\D/g,'');
    if(d[0]==='8')d='7'+d.slice(1);
    if(d&&d[0]!=='7')d='7'+d;
    var full={
      id:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8),
      name:String(lead.name||'').trim().slice(0,60),
      phone:d.slice(0,11),
      source:String(lead.source||'').slice(0,60),
      note:String(lead.note||'').trim().slice(0,300),
      company:String(lead.company||''),
      page:location.href,
      time:new Date().toISOString(),
      pdConsent:true   // под кнопкой строка о согласии: нажал - согласился
    };
    if(!url){
      console.warn('[заявки] Не задан адрес приёма (config.js → LEADS_ENDPOINT) - заявка не отправлена.',full);
      return full;
    }
    var job={url:url,body:JSON.stringify(full),started:Date.now(),tries:0,flushedAt:0};
    jobs.push(job);
    attempt(job);
    return full;
  };
})();
