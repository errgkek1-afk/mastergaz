/* ---- _ds_bundle.js ---- */
/* @ds-bundle: {"format":4,"namespace":"DesignSystem_a63f4f","components":[{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CheckListItem","sourcePath":"components/display/CheckListItem.jsx"},{"name":"MessengerButton","sourcePath":"components/display/MessengerButton.jsx"},{"name":"Placeholder","sourcePath":"components/display/Placeholder.jsx"},{"name":"StatusDot","sourcePath":"components/display/StatusDot.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Chip","sourcePath":"components/forms/Chip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/display/Card.jsx":"58fffc65218c","components/display/CheckListItem.jsx":"7b58dcf3a217","components/display/MessengerButton.jsx":"e4911cf34d86","components/display/Placeholder.jsx":"137d3c0517c3","components/display/StatusDot.jsx":"9ab248a35498","components/forms/Button.jsx":"cd20df51b7c4","components/forms/Chip.jsx":"33e077f71e3d","components/forms/Input.jsx":"21123e7dc9c0","components/forms/Slider.jsx":"2c48e45c0b90","components/navigation/Accordion.jsx":"2e949c087145","components/navigation/Tabs.jsx":"4cb19bb8806d","ui_kits/landing/BookingForm.jsx":"e85362e6b34c","ui_kits/landing/Calculator.jsx":"2f53e6abf12b","ui_kits/landing/CertificatesReviews.jsx":"676e7feaed11","ui_kits/landing/ErrorsVsUs.jsx":"f43d0afb800d","ui_kits/landing/FAQ.jsx":"1b9ebb5e44dd","ui_kits/landing/Fleets.jsx":"342b390d3bbb","ui_kits/landing/Footer.jsx":"5c6c07844403","ui_kits/landing/Header.jsx":"0de800f008b6","ui_kits/landing/Hero.jsx":"763067dce495","ui_kits/landing/Location.jsx":"6107f6ba63ed","ui_kits/landing/Popup.jsx":"31ba488f18e1","ui_kits/landing/RepairBrands.jsx":"4c101cd540ac","ui_kits/landing/Team.jsx":"4e7615142dfb","ui_kits/landing/config.js":"fa9f8f4c55bf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_a63f4f = window.DesignSystem_a63f4f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Card.jsx
try { (() => {
function Card({
  children,
  dark = false,
  padding = '24px'
}) {
  return React.createElement('div', {
    className: 'lift',
    style: {
      background: dark ? 'var(--color-ink-soft)' : 'var(--color-canvas)',
      color: dark ? 'var(--color-on-ink)' : 'var(--text-body)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: dark ? 'none' : 'var(--shadow-soft)',
      padding
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/CheckListItem.jsx
try { (() => {
function CheckListItem({
  type = 'check',
  children
}) {
  const isCheck = type === 'check';
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start',
      padding: '12px 0'
    }
  }, React.createElement('span', {
    style: {
      color: isCheck ? 'var(--color-success)' : 'var(--color-danger)',
      fontWeight: 700,
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-lh)'
    }
  }, isCheck ? '✓' : '✕'), React.createElement('span', {
    style: {
      fontSize: 'var(--body-md-size)',
      color: isCheck ? 'var(--color-ink)' : 'var(--color-charcoal)',
      lineHeight: 'var(--body-md-lh)'
    }
  }, children));
}
Object.assign(__ds_scope, { CheckListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CheckListItem.jsx", error: String((e && e.message) || e) }); }

// components/display/MessengerButton.jsx
try { (() => {
const ICON = {
  telegram: 'mdi:telegram',
  whatsapp: 'mdi:whatsapp'
};
function MessengerButton({
  type = 'telegram',
  href = '#'
}) {
  const [press, setPress] = React.useState(false);
  return React.createElement('a', {
    href,
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false),
    style: {
      transform: press ? 'scale(0.94)' : 'scale(1)',
      transition: 'transform var(--dur-press) var(--ease-out)',
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: 'var(--color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, type === 'max' ? React.createElement('span', {
    style: {
      fontSize: '12px',
      fontWeight: 700,
      letterSpacing: '0.5px'
    }
  }, 'MAX') : React.createElement('span', {
    className: 'iconify',
    ['data-icon']: ICON[type],
    style: {
      fontSize: '22px'
    }
  }));
}
Object.assign(__ds_scope, { MessengerButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/MessengerButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Placeholder.jsx
try { (() => {
function Placeholder({
  label = 'Фото мастера',
  aspect = '4 / 5'
}) {
  return React.createElement('div', {
    style: {
      aspectRatio: aspect,
      background: 'var(--color-fog)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-graphite)',
      fontSize: 'var(--caption-md-size)',
      textAlign: 'center',
      padding: '8px'
    }
  }, label);
}
Object.assign(__ds_scope, { Placeholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Placeholder.jsx", error: String((e && e.message) || e) }); }

// components/display/StatusDot.jsx
try { (() => {
function StatusDot({
  status = 'open'
}) {
  const isOpen = status === 'open';
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, React.createElement('span', {
    style: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: isOpen ? 'var(--color-success)' : 'var(--color-danger)',
      display: 'inline-block'
    }
  }), React.createElement('span', {
    style: {
      fontSize: 'var(--caption-md-size)',
      color: 'var(--text-heading)'
    }
  }, isOpen ? 'Сейчас работаем' : 'Сейчас закрыто'));
}
Object.assign(__ds_scope, { StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatusDot.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  type = 'button'
}) {
  const [press, setPress] = React.useState(false);
  const isCta = variant === 'primary';
  const base = {
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--button-md-size)',
    fontWeight: 'var(--button-md-weight)',
    lineHeight: 'var(--button-md-lh)',
    letterSpacing: 'var(--button-md-spacing)',
    textTransform: 'var(--button-md-transform)',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: size === 'lg' ? '0 28px' : '0 22px',
    height: size === 'lg' ? '56px' : '48px',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.5 : 1,
    transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
    transition: 'transform var(--dur-press) var(--ease-out), background-color 150ms ease, box-shadow var(--dur-dropdown) var(--ease-out), opacity 150ms ease'
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-primary)',
      boxShadow: 'inset 0 0 0 1px var(--color-primary)'
    },
    dark: {
      background: 'transparent',
      color: '#fff',
      boxShadow: 'inset 0 0 0 1px #4a4a4a'
    },
    muted: {
      background: 'var(--color-steel)',
      color: 'var(--color-on-primary)'
    }
  };
  const cls = disabled ? '' : isCta ? 'btn-cta' : 'btn-quiet';
  return React.createElement('button', {
    type,
    className: cls,
    style: {
      ...base,
      ...variants[variant]
    },
    disabled,
    onClick,
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Chip.jsx
try { (() => {
function Chip({
  selected = false,
  children,
  onClick
}) {
  const [press, setPress] = React.useState(false);
  return React.createElement('button', {
    type: 'button',
    onClick,
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false),
    style: {
      transform: press ? 'scale(0.97)' : 'scale(1)',
      transition: 'transform var(--dur-press) var(--ease-out), background-color 150ms ease, border-color 150ms ease',
      borderRadius: 'var(--radius-md)',
      border: selected ? '1px solid var(--color-primary)' : '1px solid var(--border-input)',
      background: selected ? 'var(--color-primary-soft)' : 'var(--color-canvas)',
      color: selected ? 'var(--color-primary)' : 'var(--text-body)',
      padding: '10px 18px',
      fontFamily: 'var(--font-family)',
      fontSize: 'var(--body-md-size)',
      fontWeight: selected ? 600 : 400,
      cursor: 'pointer'
    }
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--caption-md-size)',
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    style: {
      height: '52px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--color-danger)' : 'var(--border-input)'}`,
      padding: '0 16px',
      fontSize: 'var(--body-md-size)',
      fontFamily: 'var(--font-family)',
      color: 'var(--text-heading)',
      outline: 'none',
      transition: 'border-color var(--dur-dropdown) var(--ease-out)'
    },
    onFocus: e => e.target.style.borderColor = 'var(--color-primary)',
    onBlur: e => e.target.style.borderColor = error ? 'var(--color-danger)' : 'var(--border-input)'
  }), error && React.createElement('span', {
    style: {
      fontSize: 'var(--caption-sm-size)',
      color: 'var(--color-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function Slider({
  label,
  min = 0,
  max = 100,
  value,
  onChange,
  unit = ''
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--caption-md-size)',
      color: 'var(--text-heading)',
      fontWeight: 600
    }
  }, React.createElement('span', null, label), React.createElement('span', {
    style: {
      color: 'var(--color-primary)'
    }
  }, `${value}${unit}`)), React.createElement('input', {
    type: 'range',
    min,
    max,
    value,
    onChange,
    style: {
      width: '100%',
      accentColor: 'var(--color-primary)',
      height: '4px'
    }
  }));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function Accordion({
  items,
  defaultOpenIndex = 0
}) {
  const [open, setOpen] = React.useState(defaultOpenIndex);
  return React.createElement('div', {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-default)'
    }
  }, items.map((item, i) => React.createElement('div', {
    key: i,
    style: {
      borderBottom: i < items.length - 1 ? '1px solid var(--border-default)' : 'none'
    }
  }, React.createElement('button', {
    type: 'button',
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--color-canvas)',
      border: 'none',
      cursor: 'pointer',
      padding: '18px 20px',
      fontFamily: 'var(--font-family)',
      fontSize: 'var(--body-emphasis-size)',
      fontWeight: 'var(--body-emphasis-weight)',
      color: 'var(--text-heading)',
      textAlign: 'left'
    }
  }, item.title, React.createElement('span', {
    style: {
      color: 'var(--color-primary)',
      display: 'inline-block',
      transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform var(--dur-dropdown) var(--ease-out)'
    }
  }, '⌄')), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateRows: open === i ? '1fr' : '0fr',
      transition: 'grid-template-rows var(--dur-dropdown) var(--ease-out)'
    }
  }, React.createElement('div', {
    style: {
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      padding: '0 20px 18px',
      fontSize: 'var(--body-md-size)',
      color: 'var(--text-body)',
      lineHeight: 'var(--body-md-lh)',
      opacity: open === i ? 1 : 0,
      transition: 'opacity var(--dur-dropdown) var(--ease-out)'
    }
  }, item.content))))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items,
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      background: 'var(--color-cloud)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px'
    }
  }, items.map((item, i) => React.createElement('button', {
    key: i,
    type: 'button',
    onClick: () => onChange && onChange(i),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 20px',
      background: active === i ? '#fff' : 'transparent',
      boxShadow: active === i ? 'var(--shadow-soft)' : 'none',
      color: active === i ? 'var(--color-charcoal)' : 'var(--color-steel)',
      fontFamily: 'var(--font-family)',
      fontSize: 'var(--body-md-size)',
      fontWeight: active === i ? 600 : 400,
      transition: 'background-color var(--dur-dropdown) var(--ease-out), color var(--dur-dropdown) ease'
    }
  }, item)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }















__ds_ns.Card = __ds_scope.Card;

__ds_ns.CheckListItem = __ds_scope.CheckListItem;

__ds_ns.MessengerButton = __ds_scope.MessengerButton;

__ds_ns.Placeholder = __ds_scope.Placeholder;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

/* ---- config.js ---- */
window.GBO_CONFIG={
K_RASHOD:1.15,
GAS_PRICE:40,
PETROL_PRICE_DEFAULT:75,
ENGINES:[
{id:'do_150',label:'до 150 л.с.',cost:80000},
{id:'6_cil',label:'6 цилиндров',cost:107500},
{id:'8_cil',label:'8 цилиндров',cost:135000}
],
PHONE_GBO:'+7 (938) 147-05-90',
PHONE_CLIMATE:'+7 (929) 818-19-99',
WHATSAPP:'https://wa.me/79381470590',
// WhatsApp на странице отопителей - на номер заказчика 929 818-19-99 (он сам назвал его 12.10)
WHATSAPP_CLIMATE:'https://wa.me/79298181999',
// У MAX нет ссылки на чат по номеру, поэтому здесь личная ссылка профиля
MAX_LINK:'https://max.ru/u/f9LHodD0cOKaE-NnTzCcVk45pTqTh-1dUU_XRrzmHH1Q89qxA5xYSuolrk',
ADDRESS:'Ростов-на-Дону, Минеральная улица, 16',
YANDEX:'https://yandex.com/maps/-/CThvaEZm',
// Вкладка «Отзывы» карточки на Яндекс Картах: сюда ведут карточки отзывов и «Все отзывы» (Eugene, 03.10)
YANDEX_REVIEWS:'https://yandex.ru/maps/org/mastergaz/1623032286/reviews/',
// Точка на карте от Eugene 02.10: маршрут и запасной снимок карты ведут сюда
MAP_LINK:'https://yandex.ru/maps/-/CXaWvX66',
// Магазины запчастей (Eugene, 02.10)
OZON:'https://am.ozon.com/s/mastergaz-2578914',
WB:'https://www.wildberries.ru/seller/673218',
// Карточка МастерГаза на Яндексе (с их меткой), по центру — дом Минеральная улица, 16
// Только карта с меткой: адрес без /org/ - иначе виджет сам открывает поверх карты
// карточку организации с кнопками (Eugene, 13.10: «оставить только карту»)
MAP_WIDGET:'https://yandex.ru/map-widget/v1/?ll=39.662102%2C47.289856&z=17&pt=39.662102,47.289856,pm2rdm',
// Приём заявок: адрес программы в Яндекс Облаке (папка yandex-cloud-leads, инструкция там же).
// ПОКА ПУСТО: заявка никуда не уходит, человек видит «Заявка отправлена». Отправляет zayavki.js.
LEADS_ENDPOINT:'https://mastergaz.ru/zayavka.php',
// Данные карточки на Яндекс Картах на 15.09.2026: имя, дата и оценка — как на Яндексе,
// текст — краткий пересказ, целиком отзыв открывается по ссылке.
REVIEWS:{
rating:'5,0',
ratingsLabel:'696 оценок',
reviewsLabel:'310 отзывов',
items:[
{name:'Ден.К.',date:'12 августа 2026',stars:5,text:'После другого сервиса вылезла ошибка по бедной смеси. Нашли причину, доработали форсунки и настроили газ на ходу вместе с мастером. Ford Mondeo 4.'},
{name:'Аркадий',date:'22 августа 2026',stars:5,text:'Ставил здесь ГБО. Отмечает, что ребята очень ответственно относятся к работе, и рекомендует сервис.'},
{name:'Александр В.',date:'10 сентября 2026',stars:5,text:'Быстро обслужили газовое оборудование BRC: поменяли фильтры и сделали диагностику. Называет мастеров грамотными.'},
{name:'А',date:'5 марта 2026',stars:5,text:'В марте поставил ГБО «под ключ» вместе с оформлением. Комплектующие оригинальные, сервис рекомендует.'},
{name:'Максим Александрович',date:'7 ноября 2024',stars:5,text:'Приехал из Шахт. Поставили ГБО на УАЗ Патриот и сразу настроили на оптимальный режим — остался доволен.'},
{name:'Наташа',date:'26 сентября 2025',stars:5,text:'Ставили здесь ГБО и потом ещё не раз обращались. Мастера — профессионалы, есть удобная комната отдыха.'},
{name:'karmillen',date:'2 апреля 2026',stars:5,text:'Устанавливал газ: всё сделали быстро, аккуратно и как надо. Рекомендует.'},
{name:'Дмитрий Зубков',date:'7 июня 2023',stars:5,text:'Газ поставил пару лет назад — оборудование ни разу не подвело. Регулярно приезжает сюда на плановое ТО.'},
{name:'Андрей Поддубный',date:'27 апреля 2025',stars:5,text:'Другая фирма несколько раз настраивала оборудование, а «чек» всё равно загорался. Здесь настроили как следует.'},
{name:'Игорь Власов',date:'5 августа 2022',stars:5,text:'С проблемой по ГБО не брались ни в одном сервисе — говорили, что с таким не работают. Здесь помогли разобраться.'},
{name:'Андрей Муртазаев',date:'29 апреля 2022',stars:5,text:'Веста с заводским газом: в других местах отказывались даже диагностировать. Здесь сделали — называет сервис лучшим в Ростове.'},
{name:'Дима Терех',date:'1 апреля 2026',stars:5,text:'Пока обслуживали газовое оборудование, отдыхал в зоне отдыха. По окончании показали, в чём была проблема.'},
{name:'иван Пипенко',date:'15 сентября 2025',stars:5,text:'Приехал с утечкой газа — приняли без записи. Отдельно благодарит за это, ставит сервису 10 из 10.'},
{name:'Демис Рамонов',date:'23 января 2026',stars:5,text:'Обслуживает здесь машину: хороший сервис по ремонту и установке ГБО, приятные скидки постоянным клиентам.'},
{name:'Иван Сиденко',date:'17 января 2023',stars:5,text:'Переоборудовал Гранту на метан. К работе мастеров нареканий нет.'},
{name:'Александр Чеботарев',date:'5 января 2023',stars:5,text:'Приехал за отопителями, а по дороге потёк ресивер ГБО. Заменили заодно, спокойно и дешевле, чем ожидал.'},
{name:'Алексей У.',date:'11 августа 2024',stars:5,text:'Пришлось подождать свободного мастера, но оно того стоило: после диагностики и двух настроек машина работает как надо.'},
{name:'Абакумов Николай',date:'20 февраля 2026',stars:5,text:'Постоянно обслуживает здесь всё, что связано с газовым оборудованием, — считает мастеров лучшими профи.'},
{name:'Черненко Виктор',date:'13 мая 2023',stars:5,text:'Неисправность, которую больше года не могли найти в других местах, здесь выяснили и устранили.'},
{name:'Елена Глушко',date:'28 июня 2025',stars:5,text:'Забились форсунки, постоянно горел «чек». Сделали диагностику, ремонт, настройку и обкатку — машина снова резво берёт с места.'}
]
},
MESSENGER_TEXTS:{
'первый экран':'Здравствуйте! Хочу установить ГБО. Машина — , год — . Подскажите, сколько будет стоить и сколько займёт по времени?',
'плавающая кнопка':'Здравствуйте! Хочу установить ГБО. Машина — , год — . Подскажите, сколько будет стоить и сколько займёт по времени?',
'калькулятор':'Здравствуйте! Посчитал на сайте экономию. Подскажите, сколько будет стоить установка ГБО на мою машину — , год — ?',
'ремонт ГБО':'Здравствуйте! У меня уже стоит газ, но работает плохо. Машина — , оборудование — . Можно приехать на диагностику?',
'автопарки':'Здравствуйте! Интересует обслуживание автопарка. Хочу обсудить условия.',
'форма записи':'Здравствуйте! Хочу записаться на установку ГБО. Машина — , год — .',
'отопители':'Здравствуйте! Хочу установить автономный отопитель. Техника — . Подскажите, сколько будет стоить и сколько займёт по времени?'
}
};
window.formatPhone=function(raw){
let d=String(raw).replace(/\D/g,'');
if(d.startsWith('7'))d=d.slice(1);
if(d.startsWith('8'))d=d.slice(1);
d=d.slice(0,10);
let out='+7';
if(d.length>0)out+=' ('+d.slice(0,3);
if(d.length>=3)out+=')';
if(d.length>3)out+=' '+d.slice(3,6);
if(d.length>6)out+='-'+d.slice(6,8);
if(d.length>8)out+='-'+d.slice(8,10);
return out;
};
window.phoneComplete=function(v){return String(v).replace(/\D/g,'').length>=11;};
/* Номер счётчика Яндекс Метрики. Пока пусто - счётчика нет и уведомления о cookie
   тоже нет: сайт не ставит ни одной cookie, спрашивать не о чем. Впишете номер -
   уведомление появится само, и счётчик запустится только после «Принять»
   (152-ФЗ ст. 9, soglasie.js). */
window.GBO_CONFIG.METRIKA_ID='';
window.HOURS_LINE='Пн–Пт 09:00–18:00 · Сб 09:00–17:00';
window.isOpenNow=function(){
const now=new Date();
const msk=new Date(now.getTime()+(now.getTimezoneOffset()+180)*60000);
const day=msk.getDay(),h=msk.getHours();
if(day>=1&&day<=5)return h>=9&&h<18;   // Пн–Пт 09:00–18:00
if(day===6)return h>=9&&h<17;          // суббота — рабочая, до 17:00
return false;
};

/* Счётчик машин на первом экране ГБО. Заказчик считает 0,7 машины в день
   (слово Eugene, 12.10.2026): число растёт само от базы, а подпись
   согласуется с ним по падежу - 20 321 машина уехала, 20 322 машины уехали,
   20 325 машин уехали. Часы московские, как в isOpenNow. */
window.MASHIN={baza:20321,data:'2026-10-12',vDen:0.7};
window.mashinSeychas=function(){
const m=window.MASHIN;
const now=new Date();
const msk=new Date(now.getTime()+(now.getTimezoneOffset()+180)*60000);
const segodnya=Date.UTC(msk.getFullYear(),msk.getMonth(),msk.getDate());
const ch=m.data.split('-');
const bazaDen=Date.UTC(+ch[0],+ch[1]-1,+ch[2]);
const dney=Math.max(0,Math.round((segodnya-bazaDen)/86400000));
return m.baza+Math.floor(dney*m.vDen);
};
window.mashinPodpis=function(n){
const d=n%10,s=n%100;
if(d===1&&s!==11)return 'машина уехала';
if(d>=2&&d<=4&&(s<12||s>14))return 'машины уехали';
return 'машин уехали';
};
/* 20321 -> «20 321», пробел неразрывный: число не должно рваться по строкам */
window.chisloSProbelami=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'\u00a0');};

/* ---- swipe.js ---- */
(function(){
  // Перетаскивание лент мышью. Палец и трекпад листают штатной прокруткой браузера.
  // Движение слушаем на всём окне, чтобы лента не отставала, когда курсор уходит с неё.
  window.enableDragScroll=function(el,opts){
    if(!el||el.__dragScroll)return;
    el.__dragScroll=true;
    var align=(opts&&opts.align)||'start';
    // лента со снапом: пока тянем мышью, притягивание выключено классом is-dragging,
    // после отпускания кадр доводится один раз - второй доводки нет (Eugene, 11.10)
    var s=null,suppressClick=false,settleTimer=null;

    function itemPos(ch){
      if(align==='center')return ch.offsetLeft+ch.offsetWidth/2-el.clientWidth/2;
      return ch.offsetLeft-(parseFloat(getComputedStyle(el).scrollPaddingLeft)||0);
    }
    function settleNear(target){
      var max=el.scrollWidth-el.clientWidth,best=el.scrollLeft,bd=Infinity;
      Array.prototype.forEach.call(el.children,function(ch){
        var p=Math.max(0,Math.min(max,itemPos(ch))),d=Math.abs(p-target);
        if(d<bd){bd=d;best=p;}
      });
      el.scrollTo({left:best,behavior:'smooth'});
      clearTimeout(settleTimer);
      // притягивание включаем обратно только после доводки, иначе лента дёргается назад
      settleTimer=setTimeout(function(){el.classList.remove('is-dragging');},450);
    }
    function onMove(e){
      if(!s||e.pointerId!==s.id)return;
      var dx=e.clientX-s.x;
      if(!s.moved){
        if(Math.abs(dx)<3)return;
        s.moved=true;
        el.classList.add('is-dragging');
      }
      e.preventDefault();
      var now=performance.now(),dt=now-s.lt;
      if(dt>0)s.v=0.7*((e.clientX-s.lx)/dt)+0.3*s.v;
      s.lx=e.clientX;s.lt=now;
      el.scrollLeft=s.left-dx;
    }
    function onUp(e){
      if(!s||e.pointerId!==s.id)return;
      window.removeEventListener('pointermove',onMove);
      window.removeEventListener('pointerup',onUp);
      window.removeEventListener('pointercancel',onUp);
      var st=s;s=null;
      if(!st.moved){el.classList.remove('is-dragging');return;}
      suppressClick=true;
      setTimeout(function(){suppressClick=false;},80);
      if(performance.now()-st.lt>100)st.v=0;
      // settle:false - лента не доезжает до карточки, а гасит бросок там, где отпустили
      // (Eugene, 13.10: доводка читалась как дёрганье на половине отзыва)
      if(opts&&opts.settle===false){
        var max=el.scrollWidth-el.clientWidth;
        var cel=Math.max(0,Math.min(max,el.scrollLeft-st.v*180));
        el.classList.remove('is-dragging');
        el.scrollTo({left:cel,behavior:'smooth'});
        return;
      }
      settleNear(el.scrollLeft-st.v*180);
    }
    el.addEventListener('pointerdown',function(e){
      if(e.pointerType!=='mouse'||e.button!==0)return;
      clearTimeout(settleTimer);
      el.classList.add('is-dragging');
      el.scrollTo({left:el.scrollLeft,behavior:'auto'});
      s={id:e.pointerId,x:e.clientX,left:el.scrollLeft,lx:e.clientX,lt:performance.now(),v:0,moved:false};
      window.addEventListener('pointermove',onMove);
      window.addEventListener('pointerup',onUp);
      window.addEventListener('pointercancel',onUp);
    });
    el.addEventListener('click',function(e){if(suppressClick){e.preventDefault();e.stopPropagation();}},true);
    el.addEventListener('dragstart',function(e){e.preventDefault();});
  };

  // Заголовок, который должен лечь ровно в заданное число строк. Размер подбираем
  // по факту, а не формулой из vw: ширина букв зависит от того, успел ли загрузиться
  // Onest, и расчёт «на глаз» промахивался на пару процентов - заголовок уезжал на
  // лишнюю строку (Eugene, 11.10). Каждая часть заголовка - свой блок (.l1 и em),
  // каждая должна поместиться в одну строку.
  // Сколько строк разрешено - в самой разметке: data-fit="2" или "3".
  window.fitHeading=function(el,maxLines,minPx){
    if(!el)return;
    el.style.fontSize='';
    var size=parseFloat(getComputedStyle(el).fontSize),min=minPx||16,guard=0;
    function lines(){
      var lh=parseFloat(getComputedStyle(el).lineHeight)||size*1.2;
      return Math.round(el.offsetHeight/lh);
    }
    while(lines()>maxLines&&size>min&&guard++<40){size-=1;el.style.fontSize=size+'px';}
  };
  function fitAll(){
    var hs=document.querySelectorAll('[data-fit]');
    for(var i=0;i<hs.length;i++){
      var n=parseInt(hs[i].getAttribute('data-fit'),10);
      window.fitHeading(hs[i],n>0?n:2,16);
    }
  }
  window.fitHeadings=fitAll;
  var fitTimer=null;
  function fitSoon(){clearTimeout(fitTimer);fitTimer=setTimeout(fitAll,120);}
  window.addEventListener('resize',fitSoon);
  window.addEventListener('load',fitAll);
  if(document.readyState!=='loading')setTimeout(fitAll,0);
  else document.addEventListener('DOMContentLoaded',fitAll);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitAll);
  // страницу ГБО рисует React, а заголовки потом переразбирает dvizhenie.js на слова -
  // к моменту load заголовков ещё нет, поэтому пересчитываем и на изменения разметки
  if(window.MutationObserver){
    new MutationObserver(fitSoon).observe(document.documentElement,{childList:true,subtree:true});
  }

  // Лента работ, как на АвтоРегионе 161: активная карточка по центру, соседи приглушены
  // и уменьшены, нажатие на соседа подвозит его в центр. Тянется мышью через enableDragScroll.
  window.initDock=function(el){
    if(!el||el.__dock)return;
    el.__dock=true;
    var items=Array.prototype.slice.call(el.children),active=-1;
    function centerOf(i){var ch=items[i];return ch.offsetLeft+ch.offsetWidth/2-el.clientWidth/2;}
    function nearest(){var best=0,bd=Infinity;items.forEach(function(_,i){var d=Math.abs(centerOf(i)-el.scrollLeft);if(d<bd){bd=d;best=i;}});return best;}
    function mark(){var i=nearest();if(i===active)return;if(items[active])items[active].classList.remove('is-active');items[i].classList.add('is-active');active=i;markNav();}
    // стрелки и счётчик под лентой: на телефоне кадр занимает почти весь экран,
    // край следующего не виден - и непонятно, что лента листается (Eugene, 10.10)
    var nav=null,navPrev=null,navNext=null,navNum=null;
    function buildNav(){
      if(items.length<2)return;
      var strelka='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5 8 12l7 7"/></svg>';
      nav=document.createElement('div');
      nav.className='dock-nav';
      nav.innerHTML='<button class="dock-nav__b" type="button" aria-label="Предыдущее фото">'+strelka+'</button>'+
        '<span class="dock-nav__n"></span>'+
        '<button class="dock-nav__b dock-nav__b--next" type="button" aria-label="Следующее фото">'+strelka+'</button>';
      navPrev=nav.children[0];navNum=nav.children[1];navNext=nav.children[2];
      navPrev.addEventListener('click',function(){if(active>0)goTo(active-1);});
      navNext.addEventListener('click',function(){if(active<items.length-1)goTo(active+1);});
      el.parentNode.insertBefore(nav,el.nextSibling);
    }
    function markNav(){
      if(!nav)return;
      navNum.textContent=(active+1)+' / '+items.length;
      navPrev.disabled=active<=0;
      navNext.disabled=active>=items.length-1;
    }
    // Листание одно на всех: ближайший кадр по центру ставит CSS-притягивание
    // (scroll-snap), на мыши, трекпаде и пальце одинаково. Своей доводки у скрипта
    // больше нет: раньше их было две - его и браузерная, и кадр после пролистывания
    // заметно доворачивался (Eugene, 11.10). Скрипт только помечает активный кадр
    // и возит ленту по нажатию стрелки или соседней карточки.
    function goTo(i){
      // ширина места изменилась, а события мы не поймали - пересчитать поля перед ходом
      if(el.clientWidth!==lastCw)fitPads();
      var from=el.scrollLeft,to=centerOf(i);
      el.scrollTo({left:to,behavior:'smooth'});
      // браузер не стал анимировать (вкладка в фоне) - переставляем сразу
      setTimeout(function(){if(Math.abs(el.scrollLeft-from)<1)el.scrollTo({left:to,behavior:'auto'});},700);
    }
    el.addEventListener('scroll',mark,{passive:true});
    el.addEventListener('click',function(e){
      var it=e.target.closest('.dock__item');if(!it)return;
      var i=items.indexOf(it);if(i!==active)goTo(i);
    });
    // Поля ленты - ровно столько, чтобы первый и последний кадр встали по центру,
    // и ни пикселем больше. Раньше поля считались из --dock-w (самая узкая карточка),
    // и у широкого последнего кадра оставалось до 300 px пустоты: лента уезжала в неё,
    // а скрипт потом тащил её обратно - это и есть «недокрученность» (Eugene, 11.10).
    var lastCw=-1;
    function fitPads(){
      // поля сначала обнуляем: clientWidth считается вместе с ними, и после
      // перестройки экрана лента мерила бы себя по старым полям и раздувалась
      el.style.paddingLeft='0px';el.style.paddingRight='0px';
      var cw=el.clientWidth;lastCw=cw;
      el.style.paddingLeft=Math.max(0,Math.round((cw-items[0].offsetWidth)/2))+'px';
      el.style.paddingRight=Math.max(0,Math.round((cw-items[items.length-1].offsetWidth)/2))+'px';
    }
    function refit(){fitPads();if(active>-1)el.scrollTo({left:centerOf(active),behavior:'auto'});}
    var rsz=null;
    function refitSoon(){clearTimeout(rsz);rsz=setTimeout(refit,200);}
    window.addEventListener('resize',refitSoon);
    // следим за шириной места, где стоит лента: поворот телефона, смена ширины
    // окна и перестройка раскладки события resize дают не всегда
    if(window.ResizeObserver&&el.parentNode)new ResizeObserver(refitSoon).observe(el.parentNode);
    // шрифты и картинки догрузились - ширина подписи и кадра могла измениться
    window.addEventListener('load',refit);

    el.addEventListener('pointerdown',function(){if(el.clientWidth!==lastCw)refit();});
    window.enableDragScroll(el,{align:'center',snap:true});
    buildNav();
    fitPads();
    el.scrollLeft=centerOf(0);mark();
  };
})();

/* ---- zayavki.js ---- */
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
      pdConsent:lead.pdConsent===true   // галочка согласия в форме (Eugene, 13.10)
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
