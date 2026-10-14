/* Уведомление о cookie и запуск счётчика посещаемости.
 *
 * Правило 152-ФЗ ст. 9: счётчик не должен работать, пока человек не нажал
 * «Принять». Молчаливое согласие («продолжая пользоваться сайтом...») не
 * считается - за это штрафуют. Поэтому порядок один: согласие → счётчик.
 *
 * Пока в config.js не задан номер счётчика (METRIKA_ID), уведомления нет
 * вообще: сайт не ставит ни одной cookie, спрашивать не о чем. Появится
 * номер - появится и уведомление, само.
 *
 * Один файл на обе страницы: ГБО (её рисует React) и отопители.
 */
(function () {
  var C = window.GBO_CONFIG || {};
  var NOMER = String(C.METRIKA_ID || '').replace(/\D/g, '');
  if (!NOMER) return;

  /* Уведомление одно на обе страницы, а отопители лежат в подпапке:
     оттуда ссылки на документы идут через ../ */
  var KORENЬ = /\/otopiteli\//.test(location.pathname) ? '../' : '';
  var KLYUCH = 'mg-cookie';
  var vzyat = function () { try { return localStorage.getItem(KLYUCH); } catch (e) { return null; } };
  var zapisat = function (v) { try { localStorage.setItem(KLYUCH, v); } catch (e) {} };

  function zapustitSchetchik() {
    if (window.ym && window.ym.a) return;
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * new Date();
      k = e.createElement(t); a = e.getElementsByTagName(t)[0];
      k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
    window.ym(NOMER, 'init', { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: false });
  }

  function steretOtkazom() {
    /* Метрика ставит cookie на домен целиком - стираем на всех его уровнях */
    var chasti = location.hostname.split('.');
    var domeny = [''];
    for (var i = 0; i < chasti.length - 1; i++) domeny.push('; domain=.' + chasti.slice(i).join('.'));
    document.cookie.split(';').forEach(function (c) {
      var imya = c.split('=')[0].trim();
      if (!/^_ym/.test(imya)) return;
      domeny.forEach(function (d) { document.cookie = imya + '=; Max-Age=0; path=/' + d; });
    });
  }

  var stili = '\
.soglasie{position:fixed;left:16px;right:16px;bottom:16px;z-index:60;max-width:760px;margin:0 auto;\
 background:var(--soglasie-fon,#fff);color:var(--soglasie-text,#1a1a1a);border-radius:14px;\
 box-shadow:0 10px 40px rgba(0,0,0,.28);padding:18px 20px;font-family:var(--font-family,Onest,sans-serif);\
 font-size:15px;line-height:1.5}\
.soglasie p{margin:0 0 14px}\
.soglasie a{color:var(--soglasie-knopka,#024ad8)}\
.soglasie__ryad{display:flex;flex-wrap:wrap;gap:10px;align-items:center}\
.soglasie button{font:inherit;font-weight:600;border-radius:9px;padding:11px 20px;border:1px solid transparent;cursor:pointer}\
.soglasie__da{background:var(--soglasie-knopka,#024ad8);color:#fff}\
.soglasie__net{background:transparent;color:inherit;border-color:var(--soglasie-ramka,rgba(0,0,0,.2))}\
.soglasie__eshchyo{background:none;border:none;padding:11px 6px;color:var(--soglasie-knopka,#024ad8);text-decoration:underline;font-weight:500}\
.soglasie__nastroyki{display:none;margin:14px 0 0;border-top:1px solid var(--soglasie-ramka,rgba(0,0,0,.14));padding-top:14px}\
.soglasie.is-otkryto .soglasie__nastroyki{display:block}\
.soglasie__galka{display:flex;gap:10px;align-items:flex-start;margin-bottom:10px;font-size:14px}\
.soglasie__galka input{margin-top:3px;width:18px;height:18px;flex:0 0 auto}\
.soglasie__galka b{display:block;font-weight:600}\
@media (max-width:520px){.soglasie{padding:16px;font-size:14px}.soglasie button{flex:1 1 auto}}';

  function pokazat() {
    var s = document.createElement('style'); s.textContent = stili; document.head.appendChild(s);
    var box = document.createElement('div');
    box.className = 'soglasie';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Согласие на использование cookie');
    box.innerHTML =
      '<p>Сайт хочет считать посещения через Яндекс Метрику - для этого она сохранит в браузере свои cookie. ' +
      'Без вашего согласия счётчик не включится. <a href="' + KORENЬ + 'cookie.html' + '">Какие cookie и зачем</a> · <a href="' + KORENЬ + 'consent.html' + '">текст согласия</a></p>' +
      '<div class="soglasie__ryad">' +
        '<button type="button" class="soglasie__da" data-act="da">Принять</button>' +
        '<button type="button" class="soglasie__net" data-act="net">Отклонить</button>' +
        '<button type="button" class="soglasie__eshchyo" data-act="nastroit">Настроить</button>' +
      '</div>' +
      '<div class="soglasie__nastroyki">' +
        '<label class="soglasie__galka"><input type="checkbox" checked disabled>' +
          '<span><b>Необходимые</b>Запоминают ваш ответ в этом окне. Всегда включены</span></label>' +
        '<label class="soglasie__galka"><input type="checkbox" data-opt="analitika">' +
          '<span><b>Статистика - Яндекс Метрика</b>Сколько людей заходит и что читают. Галочка не стоит заранее: согласие - ваше действие</span></label>' +
        '<div class="soglasie__ryad">' +
          '<button type="button" class="soglasie__da" data-act="sohranit">Сохранить</button>' +
          '<button type="button" class="soglasie__net" data-act="da">Принять всё</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(box);

    function reshili(soglasen) {
      zapisat(soglasen ? 'yes' : 'no');
      box.remove();
      if (soglasen) zapustitSchetchik(); else steretOtkazom();
    }
    box.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-act]');
      if (!b) return;
      var act = b.getAttribute('data-act');
      if (act === 'nastroit') { box.classList.add('is-otkryto'); return; }
      if (act === 'da') reshili(true);
      else if (act === 'net') reshili(false);
      else if (act === 'sohranit') reshili(!!box.querySelector('[data-opt="analitika"]').checked);
    });
  }

  var otvet = vzyat();
  if (otvet === 'yes') zapustitSchetchik();
  else if (otvet !== 'no') {
    if (document.body) pokazat();
    else document.addEventListener('DOMContentLoaded', pokazat);
  }
})();
