/* Собрано командой sborka/sobrat.js из файлов .jsx. Руками не править: правки затрутся. */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SmoothAccordion({
  items,
  defaultOpenIndex = 0
}) {
  const [open, setOpen] = React.useState(defaultOpenIndex);
  return /*#__PURE__*/React.createElement("div", {
    className: "smooth-acc"
  }, items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: 'smooth-acc__item' + (isOpen ? ' is-open' : '')
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "smooth-acc__head",
      "aria-expanded": isOpen,
      onClick: () => setOpen(isOpen ? -1 : i)
    }, item.title, /*#__PURE__*/React.createElement("span", {
      className: "smooth-acc__icon"
    }, "\u2304")), /*#__PURE__*/React.createElement("div", {
      className: "smooth-acc__panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "smooth-acc__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "smooth-acc__body"
    }, item.content))));
  }));
}
window.SmoothAccordion = SmoothAccordion;

/* Иконки нарисованы здесь же, как в макете отопителей: чужой скрипт iconify с сайта убран (02.10). */
function Messenger({
  type,
  href
}) {
  const labels = {
    telegram: 'Telegram',
    whatsapp: 'WhatsApp',
    max: 'MAX'
  };
  const external = href && href !== '#';
  return /*#__PURE__*/React.createElement("a", {
    className: 'messenger-btn messenger-btn--' + type,
    href: href || '#',
    "aria-label": labels[type],
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined
  }, type === 'max' ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.1 3.96C16.6 3.96 20.1 7.5 20.1 12.07C20.1 16.3 16.6 19.42 12.47 19.42C10.9 19.42 9.6 19.05 8.74 18.45C7.9 19.15 6.9 19.8 6.1 19.8C5.5 19.8 5.28 19.35 5.28 18.9C5.3 17.3 4.95 16.2 4.45 14.95C4.05 13.9 3.87 12.9 3.87 11.84C3.87 7.5 7.6 3.96 12.1 3.96ZM11.98 7.84C14.4 7.84 16.3 9.7 16.3 12C16.3 14.3 14.6 15.8 12.35 15.8C11.2 15.8 10.35 15.4 9.85 14.95L8.75 15.6C8.45 15.75 8.3 15.55 8.2 15.3C7.9 14.5 7.79 13.2 7.79 12.1C7.79 9.7 9.6 7.84 11.98 7.84Z"
  })) : type === 'telegram' ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32a8.17 8.17 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01"
  })));
}
window.Messenger = Messenger;
function SubmitMorph({
  ready,
  sent,
  onSubmit,
  label,
  size
}) {
  const h = size === 'lg' ? 56 : 48;
  return /*#__PURE__*/React.createElement("div", {
    className: 'submit-morph' + (sent ? ' is-sent' : ''),
    style: {
      '--h': h + 'px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'submit-morph__btn' + (ready && !sent ? ' is-ready' : ''),
    disabled: !ready || sent,
    onClick: onSubmit,
    "aria-label": sent ? 'Заявка отправлена' : label
  }, /*#__PURE__*/React.createElement("span", {
    className: "submit-morph__label"
  }, label), /*#__PURE__*/React.createElement("svg", {
    className: "submit-morph__check",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5l4.2 4.2L19 7",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "submit-morph__note",
    "aria-live": "polite"
  }, sent ? 'Заявка отправлена. Ожидайте ответа — свяжемся через 10–15 минут' : ''));
}
window.SubmitMorph = SubmitMorph;

/* Шапка той же геометрии, что у страницы отопителей: тёмная плашка, которая
   висит сверху, логотип слева, вкладки по центру, часы, телефон и кнопка
   справа. На телефоне логотип и телефон в строку, вкладки ниже (Eugene, 02.10). */
/* 11.10: шапка видна везде и при прокрутке не прячется - вкладки
   «ГБО / Отопители» должны быть под рукой на любом экране; нижняя липкая
   кнопка «Рассчитать стоимость» убрана по его же слову. */
function Header({
  onCta
}) {
  const {
    Button
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const open = window.isOpenNow();
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap header__in"
  }, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "/",
    "aria-label": "\u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/logo.webp?v=37",
    alt: "\u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437",
    width: "712",
    height: "192"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "tabs",
    "aria-label": "\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435"
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    className: "is-active",
    "aria-current": "page"
  }, "\u0413\u0411\u041E"), /*#__PURE__*/React.createElement("a", {
    href: "otopiteli/"
  }, "\u041E\u0442\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u0438\xA0\u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440\u044B")), /*#__PURE__*/React.createElement("div", {
    className: "header__right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hours"
  }, /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("span", {
    className: 'status-dot' + (open ? ' is-open' : '')
  }), open ? 'Сейчас работаем' : 'Сейчас закрыто'), window.HOURS_LINE), /*#__PURE__*/React.createElement("a", {
    className: "header__phone",
    href: 'tel:+' + C.PHONE_GBO.replace(/\D/g, '')
  }, C.PHONE_GBO), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onCta('первый экран')
  }, "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F"))));
}
window.Header = Header;

/* иконки хуков — рисуем здесь, внешних библиотек не тянем */
const IcoShield = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  className: "hook-ico"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3l7 3v5.5c0 4.3-2.9 7.7-7 9-4.1-1.3-7-4.7-7-9V6l7-3z",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.6 12.2l2.4 2.4 4.4-4.6",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const IcoWheel = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 34 26",
  "aria-hidden": "true",
  className: "hook-ico hook-ico--wide"
}, /*#__PURE__*/React.createElement("g", {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeWidth: "1.7"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "21.5",
  cy: "12",
  r: "9.2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "21.5",
  cy: "12",
  r: "5.6"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "21.5",
  cy: "12",
  r: "1.9"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21.5 6.4v1.9M26.8 10.2l-1.8 1.3M24.8 16.5l-1.7-1.3M18.2 16.5l1.7-1.3M16.2 10.2l1.8 1.3",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M2 23.2h26",
  opacity: ".5"
}), /*#__PURE__*/React.createElement("g", {
  opacity: ".55",
  strokeWidth: "1.6"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9.6 4.6H7.2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.2 8.3H4.2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6.6 12H1.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8.2 15.7H4.6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.6 19.4H7.4"
}))));
const IcoDoc = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  className: "hook-ico"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6.5 3.5h7L18.5 8v12.5h-12z",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.3 3.6V8.4h4.9",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9.2 14.4l1.9 1.9 3.6-3.8",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/* Слайдер первого экрана: кадры лежат друг на друге, меняется прозрачность
   и лёгкий зум — это тянет видеокарта, страница не дёргается.
   Кадры сменяются сами, полосок переключения нет (Eugene, 02.10). */
const HERO_PHOTOS = [['img/foto/h4.webp', 'Lada Vesta'], ['img/foto/h2.webp', 'Audi A6, мотор V6 2.4'], ['img/foto/h1.webp', 'Газовая рампа и форсунки под капотом'], ['img/foto/h3.webp', 'Haval'], ['img/foto/h5.webp', 'Kia Rio IV, 1.6'], ['img/foto/h6.webp', 'Nissan Murano Z50']];
function HeroPhotos() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setI(v => (v + 1) % HERO_PHOTOS.length), 6000);
    return () => clearTimeout(t);
  }, [i]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "hero-photos__frame"
  }, HERO_PHOTOS.map(([src, cap], k) => /*#__PURE__*/React.createElement("img", {
    key: src,
    className: 'hero-photos__shot' + (k === i ? ' is-active' : ''),
    src: k <= i + 1 ? src : undefined,
    alt: cap,
    fetchPriority: k === 0 ? 'high' : undefined,
    decoding: "async"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero__cap",
    "aria-live": "polite"
  }, HERO_PHOTOS[i][1]));
}

/* Первый экран собран по макету отопителей: та же карточка, сетка, отступы,
   плашка «30 лет опыта», строка рейтинга под фото, три плашки УТП и строка
   «ставим на» по центру. Меняется только наполнение (Eugene, 02.10). */
function Hero({
  onCta
}) {
  const {
    Button
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const hooks = [[/*#__PURE__*/React.createElement(IcoShield, null), 'Гарантия 100 000 км', 'До 1 года или 100 000 км. Блок управления, редуктор, форсунки — замена бесплатно: и работа, и деталь'], [/*#__PURE__*/React.createElement(IcoWheel, null), 'Настраиваем в движении', 'Мастер едет с вами и настраивает под реальной нагрузкой: машина едет как на бензине'], [/*#__PURE__*/React.createElement(IcoDoc, null), 'Поможем оформить в ГИБДД', 'Лаборатория готовит документы, мы ведём вас по всем шагам до регистрации: техосмотр, госпошлины, ГИБДД']];
  const cars = ['Lada Granta', 'Lada Vesta', 'Lada Largus', 'Hyundai Solaris', 'Hyundai Creta', 'Hyundai Sonata', 'Kia Rio', 'Kia Sportage', 'Renault Logan', 'Renault Sandero'];
  const mashin = window.mashinSeychas();
  const [flash, setFlash] = React.useState(false);
  const carsRef = React.useRef(null);
  const showCars = () => {
    if (carsRef.current) carsRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    setFlash(true);
    setTimeout(() => setFlash(false), 1600);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    id: "hero",
    className: "hero__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "hero-h1",
    "data-reveal": "",
    onClick: e => {
      if (e.target.closest('.hero-star')) showCars();
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0413\u0411\u041E ", /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "hero-star"
  }, /*#__PURE__*/React.createElement("em", null, "\u043E\u0442\xA04\xA0\u0447\u0430\u0441\u043E\u0432"), /*#__PURE__*/React.createElement("span", {
    className: "hero-star__mark"
  }, "*")), /*#__PURE__*/React.createElement("br", null), "\u0432\xA0\u0420\u043E\u0441\u0442\u043E\u0432\u0435-\u043D\u0430-\u0414\u043E\u043D\u0443"), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub"
  }, "\u0413\u0430\u0437\u043E\u0432\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 4\xA0\u043F\u043E\u043A\u043E\u043B\u0435\u043D\u0438\u044F \u043D\u0430\xA0\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C: \u043F\u0440\u043E\u043F\u0430\u043D \u0438\xA0\u043C\u0435\u0442\u0430\u043D, \u043F\u0440\u044F\u043C\u043E\u0439 \u0438\xA0\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u0432\u043F\u0440\u044B\u0441\u043A."), /*#__PURE__*/React.createElement("div", {
    className: "hero__row"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onCta('первый экран')
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0446\u0435\u043D\u0443"), /*#__PURE__*/React.createElement("div", {
    className: "counter",
    "data-count": ""
  }, /*#__PURE__*/React.createElement("b", {
    "data-count-num": ""
  }, window.chisloSProbelami(mashin)), /*#__PURE__*/React.createElement("i", {
    "data-count-text": ""
  }, window.mashinPodpis(mashin), " \u043E\u0442\xA0\u043D\u0430\u0441 \u043D\u0430\xA0\u0433\u0430\u0437\u0443")))), /*#__PURE__*/React.createElement("div", {
    className: "hero__photo"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sticker",
    "data-count": ""
  }, /*#__PURE__*/React.createElement("b", {
    "data-count-num": ""
  }, "30\xA0\u043B\u0435\u0442"), /*#__PURE__*/React.createElement("span", {
    "data-count-text": ""
  }, "\u043E\u043F\u044B\u0442\u0430")), /*#__PURE__*/React.createElement(HeroPhotos, null), /*#__PURE__*/React.createElement("p", {
    className: "hero__rate"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), C.REVIEWS.rating, " \u043D\u0430\xA0\u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u0430\u0445 \xB7 ", C.REVIEWS.reviewsLabel)))), /*#__PURE__*/React.createElement("div", {
    className: "hooks",
    "data-stagger": ""
  }, hooks.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hook"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hook__t"
  }, h[0], /*#__PURE__*/React.createElement("span", null, h[1])), /*#__PURE__*/React.createElement("p", null, h[2])))), /*#__PURE__*/React.createElement("div", {
    className: 'fit cars-line' + (flash ? ' is-flash' : ''),
    ref: carsRef
  }, /*#__PURE__*/React.createElement("b", null, "\u0417\u0430\xA04\xA0\u0447\u0430\u0441\u0430 \u0441\u0442\u0430\u0432\u0438\u043C \u0413\u0411\u041E \u043D\u0430:"), " ", cars.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: c,
    className: i > 4 ? 'cars-extra' : ''
  }, i > 0 && '\u00a0· ', /*#__PURE__*/React.createElement("span", {
    className: "nowrap"
  }, c)))), /*#__PURE__*/React.createElement("p", {
    className: "cars-line__note"
  }, "\u041D\u0430\xA0\u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0445 \u043C\u0430\u0448\u0438\u043D\u0430\u0445 \u2014 \u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u0430\u0440\u043A\u0443 \u0438\xA0\u043C\u043E\u0434\u0435\u043B\u044C, \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u043C \u0446\u0435\u043D\u0443 \u0438\xA0\u0441\u0440\u043E\u043A \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0413\u0411\u041E.")));
}
window.Hero = Hero;
function ErrorsVsUs() {
  const {
    CheckListItem
  } = window.DesignSystem_a63f4f;
  const rows = [['Берут комплект ГБО на 100 л.с. и ставят на мотор в 250 л.с. — быстрый путь обратно в автосервис', 'Подбираем оборудование по реальной мощности и параметрам конкретного автомобиля'], ['Редуктор ставят туда, куда влез: он трётся, а дальше — протечка и поломка', 'Редуктор — строго по регламенту производителя: место, врезка, магистрали'], ['Форсунки прикручивают как получится — отсюда троение и провалы', 'Форсунки и длина трубок одинаковые на каждый цилиндр'], ['Газовую карту «настраивают» на холостых за десять минут в боксе', 'Настраиваем в движении, под нагрузкой, мастер едет вместе с вами'], ['Установили — и до свидания', 'Две недели после установки приезжайте на корректировку хоть каждый день, бесплатно'], ['Выдали бумаги из лаборатории — и дальше разбирайтесь сами', 'Сопровождаем по всему пути: подскажем каждый шаг, пока ГБО не вписано в документы']];
  const cell = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    borderBottom: '1px solid var(--color-hairline)'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-cloud)',
      padding: '76px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    "data-reveal": "",
    style: {
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 48px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "30\xA0\u043B\u0435\u0442"), " \u0441\u0442\u0430\u0432\u0438\u043C \u0433\u0430\u0437\u043E\u0432\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\xA0\u0420\u043E\u0441\u0442\u043E\u0432\u0435. \u0417\u043D\u0430\u0435\u043C \u0446\u0435\u043D\u0443 \u043C\u0435\u043B\u043E\u0447\u0430\u043C"), /*#__PURE__*/React.createElement("div", {
    className: "errors-outer",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 420px',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "errors-table",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: `repeat(${rows.length + 1},auto)`,
      columnGap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "errors-bg",
    style: {
      gridColumn: 2,
      gridRow: '1 / -1',
      background: '#fff',
      borderRadius: 14,
      boxShadow: 'var(--shadow-soft)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "errow-error",
    style: {
      gridColumn: 1,
      gridRow: 1,
      padding: '0 0 12px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--color-charcoal)',
      margin: 0
    }
  }, "\u0427\u0430\u0441\u0442\u044B\u0435 \u043E\u0448\u0438\u0431\u043A\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "errow-solution",
    style: {
      gridColumn: 2,
      gridRow: 1,
      padding: '24px 24px 12px',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: 0
    }
  }, "\u041A\u0430\u043A \u0434\u0435\u043B\u0430\u0435\u043C \u043C\u044B")), rows.map((r, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "errow-error",
    style: {
      ...cell,
      gridColumn: 1,
      gridRow: i + 2,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement(CheckListItem, {
    type: "cross"
  }, r[0])), /*#__PURE__*/React.createElement("div", {
    className: "errow-solution",
    style: {
      ...cell,
      gridColumn: 2,
      gridRow: i + 2,
      padding: '0 24px',
      borderBottomColor: i === rows.length - 1 ? 'transparent' : 'var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement(CheckListItem, {
    type: "check"
  }, r[1]))))), /*#__PURE__*/React.createElement("div", {
    className: "errors-photos"
  }, [['img/foto/r2.webp', 'Настройка газовой карты'], ['img/foto/r1.webp', 'Редуктор и газовый фильтр']].map(([src, alt]) => /*#__PURE__*/React.createElement("figure", {
    key: src,
    className: "errors-shot"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "errors-final",
    style: {
      fontSize: 24,
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      marginTop: 48
    }
  }, "\u041C\u044B \u0441\u0442\u0430\u0432\u0438\u043C \u0433\u0430\u0437 \u0442\u0430\u043A, \u043A\u0430\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0431\u044B\xA0\u0441\u0435\u0431\u0435.")));
}
window.ErrorsVsUs = ErrorsVsUs;
function Calculator({
  onCta
}) {
  const {
    Slider,
    Button
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const [mileage, setMileage] = React.useState(1500);
  const [consumption, setConsumption] = React.useState(10);
  const [petrolPrice, setPetrolPrice] = React.useState(C.PETROL_PRICE_DEFAULT);
  const petrolMonth = Math.round(mileage * consumption / 100 * petrolPrice);
  const gasMonth = Math.round(mileage * consumption * C.K_RASHOD / 100 * C.GAS_PRICE);
  const saveMonth = petrolMonth - gasMonth;
  const rub = n => n.toLocaleString('ru-RU') + ' ₽';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-primary-mist)',
      padding: '76px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc-card",
    style: {
      background: '#fff',
      borderRadius: 14,
      boxShadow: 'var(--shadow-soft)',
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "calc-title",
    "data-reveal": "",
    style: {
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: 0
    }
  }, "\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435, \u0441\u043A\u043E\u043B\u044C\u043A\u043E ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "\u0432\u0435\u0440\u043D\u0451\u0442 \u0432\u0430\u043C \u0433\u0430\u0437")), /*#__PURE__*/React.createElement(Slider, {
    label: "\u041F\u0440\u043E\u0431\u0435\u0433 \u0432\xA0\u043C\u0435\u0441\u044F\u0446, \u043A\u043C",
    min: 100,
    max: 6000,
    value: mileage,
    unit: " \u043A\u043C",
    onChange: e => setMileage(+e.target.value)
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "\u0420\u0430\u0441\u0445\u043E\u0434 \u043D\u0430\xA0100\xA0\u043A\u043C, \u043B",
    min: 5,
    max: 25,
    value: consumption,
    unit: " \u043B",
    onChange: e => setConsumption(+e.target.value)
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "\u0426\u0435\u043D\u0430 \u0431\u0435\u043D\u0437\u0438\u043D\u0430, \u20BD/\u043B",
    min: 50,
    max: 110,
    value: petrolPrice,
    unit: " \u20BD",
    onChange: e => setPetrolPrice(+e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "calc-table",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: '10px 24px',
      fontSize: 19,
      alignItems: 'baseline',
      paddingBottom: 20,
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)'
    }
  }, "\u0432\xA0\u043C\u0435\u0441\u044F\u0446"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)'
    }
  }, "\u0437\u0430\xA0\u0433\u043E\u0434"), /*#__PURE__*/React.createElement("span", null, "\u041D\u0430\xA0\u0431\u0435\u043D\u0437\u0438\u043D\u0435"), /*#__PURE__*/React.createElement("b", null, rub(petrolMonth)), /*#__PURE__*/React.createElement("b", null, rub(petrolMonth * 12)), /*#__PURE__*/React.createElement("span", null, "\u041D\u0430\xA0\u0433\u0430\u0437\u0435"), /*#__PURE__*/React.createElement("b", null, rub(gasMonth)), /*#__PURE__*/React.createElement("b", null, rub(gasMonth * 12))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-success-soft)',
      borderRadius: 10,
      padding: '24px 28px',
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--color-charcoal)',
      marginBottom: 4
    }
  }, "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0437\u0430\xA0\u0433\u043E\u0434"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 52,
      fontWeight: 700,
      color: 'var(--color-success)',
      lineHeight: 1.05
    }
  }, rub(saveMonth * 12)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: 'var(--color-charcoal)',
      marginTop: 6
    }
  }, rub(saveMonth), " \u0432\xA0\u043C\u0435\u0441\u044F\u0446")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onCta('калькулятор')
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0446\u0435\u043D\u0443 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0413\u0411\u041E")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(SmoothAccordion, {
    defaultOpenIndex: -1,
    items: [{
      title: /*#__PURE__*/React.createElement("span", null, "\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432\xA0\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443", /*#__PURE__*/React.createElement("br", null), "\u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F"),
      content: /*#__PURE__*/React.createElement("ol", {
        style: {
          margin: 0,
          paddingLeft: 20,
          lineHeight: 1.8
        }
      }, /*#__PURE__*/React.createElement("li", null, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 \u043F\u043E\u0434\u043A\u0430\u043F\u043E\u0442\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("li", null, "\u0413\u0430\u0437\u043E\u0432\u044B\u0439 \u0431\u0430\u043B\u043B\u043E\u043D \u2014 \u0442\u043E\u0440\u043E\u0438\u0434\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u043B\u0438 \u0446\u0438\u043B\u0438\u043D\u0434\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439"), /*#__PURE__*/React.createElement("li", null, "\u041C\u0443\u043B\u044C\u0442\u0438\u043A\u043B\u0430\u043F\u0430\u043D \u043A\u043B\u0430\u0441\u0441\u0430 \u0410, \u0418\u0442\u0430\u043B\u0438\u044F"), /*#__PURE__*/React.createElement("li", null, "\u0422\u0435\u0440\u043C\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0435 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438"), /*#__PURE__*/React.createElement("li", null, "\u0420\u0435\u0434\u0443\u043A\u0442\u043E\u0440"), /*#__PURE__*/React.createElement("li", null, "\u0424\u043E\u0440\u0441\u0443\u043D\u043A\u0438"), /*#__PURE__*/React.createElement("li", null, "\u0417\u0430\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E"), /*#__PURE__*/React.createElement("li", null, "\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 \u0438\xA0\u043A\u0440\u0435\u043F\u0451\u0436"))
    }, {
      title: /*#__PURE__*/React.createElement("span", null, "\u041E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F:", /*#__PURE__*/React.createElement("br", null), "\u0422\u041E \u043A\u0430\u0436\u0434\u044B\u0435 ", /*#__PURE__*/React.createElement("span", {
        className: "nowrap"
      }, "10\xA0000\xA0\u043A\u043C")),
      content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "price-row",
        style: {
          borderBottom: 'none'
        }
      }, /*#__PURE__*/React.createElement("span", null, "\u0422\u041E \u043A\u0430\u0436\u0434\u044B\u0435 10\xA0000\xA0\u043A\u043C \u2014 \u0437\u0430\u043C\u0435\u043D\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432 \u0436\u0438\u0434\u043A\u043E\u0439 \u0438\xA0\u043F\u0430\u0440\u043E\u0432\u043E\u0439 \u0444\u0430\u0437\u044B, \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0433\u0435\u0440\u043C\u0435\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u0438, \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430"), /*#__PURE__*/React.createElement("b", null, "1\xA0400 \u2013 2\xA0000\xA0\u20BD")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 15,
          color: 'var(--color-ink)',
          marginTop: 14,
          fontWeight: 600
        }
      }, "\u041F\u043E\u043C\u043D\u0438\u043C \u0432\u0430\u0448\u0443 \u043C\u0430\u0448\u0438\u043D\u0443. \u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u2014 \u0441\u043A\u0430\u0436\u0435\u043C, \u043A\u043E\u0433\u0434\u0430 \u0432\u044B \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0440\u0430\u0437 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043B\u0438\u0441\u044C."))
    }, {
      title: /*#__PURE__*/React.createElement("span", null, "\u041D\u0430\u0448\u0430 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F", /*#__PURE__*/React.createElement("br", null), "\u0434\u043E\xA01\xA0\u0433\u043E\u0434\u0430 \u0438\u043B\u0438 ", /*#__PURE__*/React.createElement("span", {
        className: "nowrap"
      }, "100\xA0000\xA0\u043A\u043C")),
      content: /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 16,
          color: 'var(--color-charcoal)',
          lineHeight: 1.6
        }
      }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0431\u043B\u043E\u043A \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F, \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440, \u0444\u043E\u0440\u0441\u0443\u043D\u043A\u0438.", /*#__PURE__*/React.createElement("br", null), "\u0415\u0441\u043B\u0438 \u0434\u0435\u0442\u0430\u043B\u044C \u0432\u044B\u0448\u043B\u0430 \u0438\u0437\xA0\u0441\u0442\u0440\u043E\u044F \u0432\xA0\u0441\u0440\u043E\u043A \u0438\xA0\u0432\u044B \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B\u0438 \u0422\u041E \u0443\xA0\u043D\u0430\u0441 \u2014 \u0440\u0430\u0431\u043E\u0442\u044B \u0438\xA0\u0434\u0435\u0442\u0430\u043B\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E.")
    }]
  })))));
}
window.Calculator = Calculator;
function Team() {
  /* Семь мастеров: фото от заказчика 12.10, имена, роли и стаж - его подписи к файлам.
     Кадры нарезаны под лицо и лежат в img/team/ (исходники - папка `мастера/`).
     Сертификатов в углу фото нет: решение Eugene 13.10 - из семи человек документ
     нашёлся только у Ольхового, у одного из семи плашка смотрится случайной.
     Сканы лежат в `img/sert/`, вернуть - добавить шестой и седьмой столбец, как
     было в версии 41. */
  const RAZM = {
    "getmanskiy": [700, 875],
    "zarbaliev": [700, 875],
    "olkhovoy": [700, 875],
    "ionkin": [672, 840],
    "aleshkin": [656, 820],
    "kuznetsov": [700, 875],
    "buslaev": [656, 820]
  };
  const masters = [['getmanskiy', 'Павел Гетманский', 'Мастер-универсал', '10 лет'], ['zarbaliev', 'Заур Зарбалиев', 'Мастер по установке газовых баллонов', '5 лет'], ['olkhovoy', 'Евгений Ольховой', 'Мастер по установке ГБО с непосредственным впрыском', '5 лет'], ['ionkin', 'Ярослав Ионкин', 'Мастер по нестандартным работам, установщик ГБО и климатики', '10 лет'], ['aleshkin', 'Артём Алёшкин', 'Слесарь по ремонту ГБО и автоклиматики', '5 лет'], ['kuznetsov', 'Иван Кузнецов', 'Слесарь по ремонту ГБО', '2 года'], ['buslaev', 'Роман Буслаев', 'Администратор', '10 лет']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '76px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    "data-reveal": "",
    style: {
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "14 \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432 \u043F\u043E \u0413\u0411\u041E"), ". \u0420\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0443 \u043D\u0430\u0441 \u0433\u043E\u0434\u0430\u043C\u0438"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.35vw,17px)',
      color: 'var(--color-charcoal)',
      textAlign: 'center',
      margin: '0 0 48px',
      lineHeight: 1.45,
      textWrap: 'balance'
    }
  }, "\u041A\u0430\u0436\u0434\u044B\u0439 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0441\u044F \u0441\u0432\u043E\u0438\u043C \u0434\u0435\u043B\u043E\u043C: \u043E\u0434\u043D\u0438 \u0441\u0442\u0430\u0432\u044F\u0442, \u0434\u0440\u0443\u0433\u0438\u0435 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044E\u0442, \u0442\u0440\u0435\u0442\u044C\u0438 \u0432\u0435\u0434\u0443\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B."), /*#__PURE__*/React.createElement("div", {
    className: "team-grid",
    "data-stagger": ""
  }, masters.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "team-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "team-photo"
  }, /*#__PURE__*/React.createElement("img", {
    className: "team-face",
    src: 'img/team/' + m[0] + '.webp?v=46',
    alt: m[1] + ' — ' + m[2] + ', МастерГаз',
    width: RAZM[m[0]][0],
    height: RAZM[m[0]][1],
    loading: "lazy",
    decoding: "async"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '16px 0 4px'
    }
  }, m[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      lineHeight: 1.5,
      marginBottom: 16
    }
  }, m[2]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      fontSize: 13,
      color: 'var(--color-graphite)',
      background: 'var(--color-cloud)',
      borderRadius: 8,
      padding: '10px 14px'
    }
  }, "\u0421\u0442\u0430\u0436 ", m[3]))))));
}
window.Team = Team;

/* Наши работы по ГБО - лента после калькулятора, механика АвтоРегиона 161
   (swipe.js, initDock): активная карточка по центру, соседи приглушены. Фото -
   img/raboty-gbo/, из папки заказчика «Фото монтажей/ГБО/ai-gotovye»; два кадра
   (09, 10) повторяют первый экран с теми же подписями - так решил Eugene 10.10.
   Подписи на согласовании. */
const WORKS_GBO = [['01', 'Газель: установка ГБО, монтаж под капотом', 750, 1000], ['02', 'Тороидальный баллон вместо запаски', 1000, 515], ['06', 'Заправочное устройство в бампере', 1000, 563], ['07', 'Баллон под рамой внедорожника', 1000, 563], ['09', 'Газовая рампа и форсунки под капотом', 1000, 563], ['10', 'Lada Vesta', 1000, 563]];
function Works() {
  const track = React.useRef(null);
  React.useEffect(() => {
    window.initDock(track.current);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '76px 0',
      overflowX: 'clip',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "works-head"
  }, /*#__PURE__*/React.createElement("h2", {
    "data-reveal": "",
    "data-fit": "2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "l1"
  }, "\u041D\u0430\u0448\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E\xA0\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435"), /*#__PURE__*/React.createElement("em", null, "\u0413\u0411\u041E \u0432\xA0\u0420\u043E\u0441\u0442\u043E\u0432\u0435"))), /*#__PURE__*/React.createElement("div", {
    ref: track,
    className: "dock"
  }, WORKS_GBO.map(([n, cap, w, h]) => /*#__PURE__*/React.createElement("figure", {
    key: n,
    className: "dock__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dock__card"
  }, /*#__PURE__*/React.createElement("img", {
    src: 'img/raboty-gbo/' + n + '.webp?v=37',
    alt: cap,
    width: w,
    height: h,
    loading: "lazy",
    draggable: false
  })), /*#__PURE__*/React.createElement("figcaption", {
    className: "dock__cap"
  }, cap)))));
}
window.Works = Works;
const IcoGift = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  className: "gift-ico"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 10.5h16V20H4z",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3.2 7h17.6v3.5H3.2zM12 7v13",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 7S10.8 3.6 8.8 3.9C7.4 4.1 7 6.3 9 7zM12 7s1.2-3.4 3.2-3.1C16.6 4.1 17 6.3 15 7z",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.7",
  strokeLinejoin: "round"
}));
function RepairBrands({
  onCta
}) {
  const {
    Button
  } = window.DesignSystem_a63f4f;
  const brands = ['STAG', 'Digitronic', 'OMVL', 'Lovato', 'Europegas', 'AEB', 'Landi Renzo', 'BRC', 'GT-Gas', 'Zenit', 'Alpha', 'King', 'Bigas', 'KME'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-cloud)',
      padding: '76px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    "data-reveal": "",
    "data-fit": "3",
    style: {
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 28px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l1"
  }, "\u0420\u0435\u043C\u043E\u043D\u0442 \u0438\xA0\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0413\u0411\u041E \u0432\xA0\u0420\u043E\u0441\u0442\u043E\u0432\u0435"), /*#__PURE__*/React.createElement("em", null, "\u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u043D\u0435\xA0\u0443\xA0\u043D\u0430\u0441")), /*#__PURE__*/React.createElement("div", {
    className: "case-grid",
    "data-stagger": ""
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-card__head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "avatar avatar--photo",
    loading: "lazy",
    decoding: "async",
    src: "img/face1.webp",
    alt: "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u0421\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u043B\u0438 \u043C\u043D\u0435 \u0434\u0435\u043D\u044C\u0433\u0438"), /*#__PURE__*/React.createElement("i", null, "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440, \u0420\u043E\u0441\u0442\u043E\u0432-\u043D\u0430-\u0414\u043E\u043D\u0443"))), /*#__PURE__*/React.createElement("span", null, "\xAB\u0423\xA0\u043C\u0435\u043D\u044F \u0432\u0441\u0435\u0433\u043E \u043B\u0438\u0448\u044C \u0432\u044B\u0448\u0435\u043B \u0438\u0437\xA0\u0441\u0442\u0440\u043E\u044F \u043A\u043B\u0430\u043F\u0430\u043D. \u0412\xA0\u0434\u0440\u0443\u0433\u043E\u043C \u0430\u0432\u0442\u043E\u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u0437\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u043B\u0438 \u043C\u0435\u043D\u044F\u0442\u044C \u0432\u0435\u0441\u044C \u0440\u0435\u0434\u0443\u043A\u0442\u043E\u0440 \u0437\u0430\xA06\xA0000\xA0\u20BD. \u0417\u0434\u0435\u0441\u044C \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B\u0438 \u0438\xA0\u0441\u043A\u0430\u0437\u0430\u043B\u0438: \u0443\xA0\u0442\u0435\u0431\u044F \u043D\u0435\xA0\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043A\u043B\u0430\u043F\u0430\u043D. \u041F\u043E\u043C\u0435\u043D\u044F\u043B\u0438 \u2014 \u0438\xA0\u044F \u043F\u043E\u0435\u0445\u0430\u043B\xBB.")), /*#__PURE__*/React.createElement("div", {
    className: "case-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "case-card__head"
  }, /*#__PURE__*/React.createElement("img", {
    className: "avatar avatar--photo",
    loading: "lazy",
    decoding: "async",
    src: "img/face2.webp",
    alt: "\u0421\u0435\u0440\u0433\u0435\u0439"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u041D\u0435\xA0\u043D\u0430\u0432\u044F\u0437\u0430\u043B\u0438 \u043B\u0438\u0448\u043D\u0435\u0433\u043E"), /*#__PURE__*/React.createElement("i", null, "\u0421\u0435\u0440\u0433\u0435\u0439, \u0411\u0430\u0442\u0430\u0439\u0441\u043A"))), /*#__PURE__*/React.createElement("span", null, "\xAB\u041C\u043D\u0435 \u0432\xA0\u0434\u0440\u0443\u0433\u043E\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u0441\u043A\u0430\u0437\u0430\u043B\u0438 \u043C\u0435\u043D\u044F\u0442\u044C \u0432\u0441\u044E \u043F\u0440\u043E\u0432\u043E\u0434\u043A\u0443 \u0437\u0430\xA011\xA0000\xA0\u20BD. \u041F\u0440\u0438\u0435\u0445\u0430\u043B \u0441\u044E\u0434\u0430 \u2014 \u0441\u043A\u0430\u0437\u0430\u043B\u0438, \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u0432\xA0\u043E\u0434\u043D\u043E\u043C \u043E\u0442\u043E\u0440\u0432\u0430\u043D\u043D\u043E\u043C \u043F\u0440\u043E\u0432\u043E\u0434\u0435. \u0417\u0434\u0435\u0441\u044C \u0435\u0433\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u043B\u0438 \u0437\u0430\xA0500\xA0\u20BD, \u0438\xA0\u0432\u0441\u0451 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u043B\u043E\xBB."))), /*#__PURE__*/React.createElement("div", {
    className: "brands-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brands-line__label"
  }, "\u0420\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0413\u0411\u041E \u043B\u044E\u0431\u044B\u0445 \u043C\u0430\u0440\u043E\u043A:"), /*#__PURE__*/React.createElement("span", {
    className: "brands-line__list"
  }, brands.join(' · '))), /*#__PURE__*/React.createElement("div", {
    className: "free-diag"
  }, /*#__PURE__*/React.createElement(IcoGift, null), /*#__PURE__*/React.createElement("span", null, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430, \u0435\u0441\u043B\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u0442\u0435\u0441\u044C \u0443\xA0\u043D\u0430\u0441")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onCta('ремонт ГБО')
  }, "\u041F\u0440\u0438\u0435\u0445\u0430\u0442\u044C \u043D\u0430\xA0\u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443")));
}
window.RepairBrands = RepairBrands;

/* Лента сертификатов убрана (Eugene, 09.10): сертификаты мастеров теперь в углу
   карточек блока «14 мастеров» (Team.jsx). Здесь остались отзывы. */
function Stars({
  n
}) {
  const s = Math.max(0, Math.min(5, n || 0));
  return /*#__PURE__*/React.createElement("span", {
    className: "rev__s",
    "aria-label": 'Оценка ' + s + ' из 5'
  }, '★★★★★'.slice(0, s), /*#__PURE__*/React.createElement("span", {
    className: "off"
  }, '★★★★★'.slice(s)));
}

/* Отзывы собраны как на странице отопителей: плашка рейтинга, лента карточек,
   ссылка «Все отзывы». Лента тянется мышью (swipe.js), полоски прогресса и
   счётчика нет (Eugene, 02.10). Карточки и «Все отзывы» ведут на вкладку
   отзывов карточки на Яндекс Картах, плашка рейтинга - на саму карточку (Eugene, 03.10). */
function ReviewsBand() {
  const C = window.GBO_CONFIG;
  const R = C.REVIEWS;
  const track = React.useRef(null);
  React.useEffect(() => {
    window.enableDragScroll(track.current, {
      align: 'start',
      settle: false
    });
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "reviews-band",
    style: {
      background: 'var(--color-ink)',
      padding: '76px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rev-head"
  }, /*#__PURE__*/React.createElement("h2", {
    "data-reveal": "",
    style: {
      fontWeight: 600,
      color: '#fff',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "l1"
  }, "\u041E\u0442\u0437\u044B\u0432\u044B \u043E\u0431\xA0\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 \u0413\u0411\u041E"), " ", /*#__PURE__*/React.createElement("span", {
    className: "l1",
    style: {
      color: 'var(--color-primary-bright)'
    }
  }, "\u0432\xA0\u0420\u043E\u0441\u0442\u043E\u0432\u0435-\u043D\u0430-\u0414\u043E\u043D\u0443")), /*#__PURE__*/React.createElement("a", {
    className: "rate",
    "data-count": "",
    href: C.YANDEX,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("b", {
    "data-count-num": ""
  }, R.rating), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("small", null, R.ratingsLabel, " \xB7 ", R.reviewsLabel, /*#__PURE__*/React.createElement("br", null), "\u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u044B")))), /*#__PURE__*/React.createElement("div", {
    ref: track,
    className: "rev-grid snap-track"
  }, R.items.map((r, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    className: "rev",
    href: C.YANDEX_REVIEWS,
    target: "_blank",
    rel: "noopener noreferrer",
    draggable: false
  }, /*#__PURE__*/React.createElement("span", {
    className: "rev__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rev__av"
  }, r.name.charAt(0)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "rev__n"
  }, r.name), /*#__PURE__*/React.createElement("span", {
    className: "rev__d"
  }, r.date))), /*#__PURE__*/React.createElement(Stars, {
    n: r.stars
  }), /*#__PURE__*/React.createElement("p", null, r.text)))), /*#__PURE__*/React.createElement("div", {
    className: "rev-foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: C.YANDEX_REVIEWS,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "\u0412\u0441\u0435 ", R.reviewsLabel, " \u043D\u0430\xA0\u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u0430\u0445 \u2192"))));
}
window.ReviewsBand = ReviewsBand;

/* Бегущая строка: лента из двух одинаковых половин, сдвиг на -50% —
   поэтому идёт по кругу без разрыва. Приём взят с сайта АвтоРегион 161. */
function Fleets() {
  const names = ['Чистая Вода', 'Военторг', 'Аквамаркет', 'Авто-ПЭК', 'ГАЗЛИДЕР', 'Вошингер', 'Комбинат Дубки', 'ЮПК — Южная пассажирская компания', 'Теплокоммунэнерго', 'Пассажиргортранс', 'ООО Ю-МЕТ', 'ТК Веста', 'Автопитер'];
  const group = /*#__PURE__*/React.createElement("div", {
    className: "fleet-group"
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    className: "fleet-item",
    key: n
  }, n)));
  return /*#__PURE__*/React.createElement("section", {
    className: "fleets-section",
    style: {
      background: 'var(--color-primary-mist)',
      padding: '44px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    "data-reveal": "",
    style: {
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 18px'
    }
  }, "\u041D\u0430\u043C \u0434\u043E\u0432\u0435\u0440\u044F\u044E\u0442 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "\u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u0438 \u0438\xA0\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"), " \u0420\u043E\u0441\u0442\u043E\u0432\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "fleet-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fleet-track"
  }, group, group)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      color: 'var(--color-ink)',
      marginTop: 18,
      fontWeight: 600,
      lineHeight: 1.5
    }
  }, "\u0413\u0411\u041E \u043D\u0430\xA0\u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A: \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u043F\u043E\xA0\u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443, \u0435\u0441\u0442\u044C \u042D\u0414\u041E. \u0414\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u043E\u0432 \u2014 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F.")));
}
window.Fleets = Fleets;
function FAQ() {
  const items = [{
    title: 'Сколько стоит установка ГБО в Ростове?',
    content: 'Пропан: 4 цилиндра — 80 000 ₽, 6 цилиндров — 100 000 ₽, 8 цилиндров — 140 000 ₽. Прямой впрыск — 175 000 ₽. Напишите марку и год машины — назовём точную цену и срок установки за 10–15 минут. Две недели после установки корректировка бесплатно.'
  }, {
    title: 'Правда, что газ убивает мотор?',
    content: 'Нет, это миф. Мотор «сушит» не газ, а плохая настройка: слишком бедная смесь перегревает цилиндры. У пропана октановое число 105, выше, чем у бензина, — нет детонации, топливо сгорает чисто, без нагара на свечах, клапанах и поршнях. Крупные автопроизводители сами выпускают заводские битопливные версии.'
  }, {
    title: 'Машина потеряет мощность?',
    content: 'На пропане просадки нет — машина едет один в один как на бензине: октановое число выше обычного бензина, топливо сгорает лучше. Для турбомоторов это отдельный плюс, уходит детонация. Если после установки машина «не едет» — это признак того, что комплект подобрали не под этот мотор или карту не откалибровали.'
  }, {
    title: 'ГБО 4 поколения: это какое?',
    content: 'Распределённый впрыск газа: своя форсунка на каждый цилиндр и свой блок управления. Проверено временем, запчасти есть в любом городе. Для прямого впрыска ставим комплекты под него.'
  }, {
    title: 'Займёт весь багажник?',
    content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, "\u0412\xA0\u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0441\u043B\u0443\u0447\u0430\u0435\u0432 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F \u0442\u043E\u0440\u043E\u0438\u0434\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0430\u043B\u043B\u043E\u043D \u0432\u043C\u0435\u0441\u0442\u043E \u0437\u0430\u043F\u0430\u0441\u043D\u043E\u0433\u043E \u043A\u043E\u043B\u0435\u0441\u0430 \u2014 \u0431\u0430\u0433\u0430\u0436\u043D\u0438\u043A \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u043C. \u0426\u0438\u043B\u0438\u043D\u0434\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0442\u0430\u0432\u0438\u043C \u043D\u0430\xA0\u0440\u0430\u043C\u0443 \u0438\u043B\u0438 \u0437\u0430\xA0\u0441\u043F\u0438\u043D\u043A\u0443 \u0437\u0430\u0434\u043D\u0435\u0433\u043E \u0440\u044F\u0434\u0430, \u043A\u043E\u0433\u0434\u0430 \u0442\u043E\u0440\u043E\u0438\u0434\u0430\u043B\u044C\u043D\u044B\u0439 \u043D\u0435\xA0\u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442."), /*#__PURE__*/React.createElement("div", {
      className: "faq-photos"
    }, [['img/foto/b1.webp', 'Тороидальный баллон в нише запасного колеса'], ['img/foto/b2.webp', 'Багажник остаётся свободным']].map(([src, alt]) => /*#__PURE__*/React.createElement("img", {
      key: src,
      className: "faq-shot",
      src: src,
      alt: alt,
      loading: "lazy"
    }))))
  }, {
    title: 'Есть кредит или рассрочка?',
    content: 'Да. Оформляем прямо у нас: заявка уходит в 30 банков, ответ приходит за несколько минут.'
  }, {
    title: 'Страшно ездить с баллоном. Он может взорваться?',
    content: 'Баллон испытывается давлением, многократно превышающим рабочее, и по безопасности не уступает бензобаку. Мы ставим мультиклапаны класса А итальянского производства с тремя системами защиты и крепим баллон по нормам — с полным комплектом креплений и страховочных лент.'
  }, {
    title: 'Как часто нужно обслуживать ГБО и что входит в ТО?',
    content: 'Каждые 10 000 км, 1 400–2 000 ₽. Меняем комплект фильтров жидкой и паровой фазы, проверяем герметичность системы, при необходимости делаем компьютерную диагностику. Соблюдение регламента — условие сохранения гарантии.'
  }, {
    title: 'Что делать после установки ГБО?',
    content: 'Две недели приезжайте на корректировку хоть каждый день, бесплатно. Дальше ТО каждые 10 000 км. Позвоните: скажем, когда вы последний раз обслуживались.'
  }, {
    title: 'Нужно ли регистрировать ГБО?',
    content: 'Да, ГБО подлежит регистрации. Документы готовит лаборатория, а мы сопровождаем вас на каждом шаге: техосмотр, госпошлины, ГИБДД — скажем, что и куда подать. Подача по доверенности сейчас не разрешена, поэтому в ГИБДД подаёте вы сами, мы рядом.'
  }, {
    title: 'У меня прямой впрыск или китайская машина. Поставите?',
    content: 'Ставим и прямой, и распределённый впрыск, работаем практически со всеми марками. По китайским — только распределённый впрыск: Haval Jolion, Haval M6, Geely Atlas, Москвич 3. Напишите модель и год — скажем точно, возможно ли.'
  }, {
    title: 'У меня уже стоит газ, но работает плохо. Возьмётесь?',
    content: 'Возьмёмся. Работаем с оборудованием любой марки: находим причину, подбираем и заказываем запчасти, ремонтируем в короткие сроки.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '76px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    "data-reveal": "",
    style: {
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 40px'
    }
  }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u0440\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u0413\u0411\u041E"), /*#__PURE__*/React.createElement(SmoothAccordion, {
    items: items
  })));
}
window.FAQ = FAQ;
function Location() {
  const {
    Button
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const open = window.isOpenNow();
  const photos = ['Фасад с баннером'];
  const [sound, setSound] = React.useState(null);
  const drives = [{
    src: 'video/zaezd-osobennaya.mp4',
    poster: 'video/zaezd-osobennaya.webp',
    caption: 'Заезд с ул. Особенная'
  }, {
    src: 'video/zaezd-oganova.mp4',
    poster: 'video/zaezd-oganova.webp',
    caption: 'Заезд со шлагбаумом, ул. Оганова'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "loc-section",
    style: {
      background: 'var(--color-cloud)',
      padding: '56px 32px 76px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "loc-title",
    "data-reveal": "",
    style: {
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 32px'
    }
  }, "\u041A\u0430\u043A \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement("div", {
    className: "loc-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(MapBlock, null), /*#__PURE__*/React.createElement("div", {
    "data-stagger": "",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)'
    }
  }, "\u0410\u0434\u0440\u0435\u0441"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--color-ink)'
    }
  }, C.ADDRESS)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)'
    }
  }, "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043D\u044B\u0439 \u0437\u0430\u0435\u0437\u0434"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--color-ink)'
    }
  }, "\u0441\xA0\u0443\u043B\u0438\u0446\u044B \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u0430\u044F")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)'
    }
  }, "\u0412\u0442\u043E\u0440\u043E\u0439 \u0437\u0430\u0435\u0437\u0434"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--color-ink)'
    }
  }, "\u0441\u043E\xA0\u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0448\u043B\u0430\u0433\u0431\u0430\u0443\u043C\u0430, \u0441\xA0\u0443\u043B\u0438\u0446\u044B \u041E\u0433\u0430\u043D\u043E\u0432\u0430")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: 'status-dot' + (open ? ' is-open' : '')
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--color-ink)'
    }
  }, window.HOURS_LINE)), /*#__PURE__*/React.createElement("a", {
    href: C.MAP_LINK,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, "\u041F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 10,
      padding: '14px 16px',
      fontSize: 15,
      color: 'var(--color-ink)',
      lineHeight: 1.5
    }
  }, "\u0415\u0441\u043B\u0438 \u0440\u0430\u0431\u043E\u0442\u0430 \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u0434\u043D\u044F \u2014 \u043C\u0430\u0448\u0438\u043D\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430\xA0\u043D\u043E\u0447\u044C. \u0422\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F, \u0432\u0441\u0451 \u043F\u043E\u0434 \u043A\u0430\u043C\u0435\u0440\u0430\u043C\u0438."))), /*#__PURE__*/React.createElement("div", {
    className: "loc-photos",
    "data-stagger": "",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "loc-shot",
    src: "img/foto/fasad.webp",
    alt: "\u0424\u0430\u0441\u0430\u0434 \u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437\u0430 \u0441\xA0\u0431\u0430\u043D\u043D\u0435\u0440\u043E\u043C",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "loc-photos__cap"
  }, photos[0])), drives.map(d => /*#__PURE__*/React.createElement("div", {
    key: d.src
  }, /*#__PURE__*/React.createElement(DriveVideo, _extends({}, d, {
    soundOn: sound === d.src,
    onSound: on => setSound(on ? d.src : null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "loc-photos__cap"
  }, d.caption)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "loc-lounge",
    style: {
      background: '#fff',
      borderRadius: 14,
      boxShadow: 'var(--shadow-soft)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(LoungeSlider, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("h3", {
    "data-reveal": "",
    style: {
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 16px'
    }
  }, "\u0417\u043E\u043D\u0430 \u043E\u0442\u0434\u044B\u0445\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--color-charcoal)',
      margin: 0,
      lineHeight: 1.45
    }
  }, "\u041D\u0430\xA0\u0432\u0442\u043E\u0440\u043E\u043C \u044D\u0442\u0430\u0436\u0435 \u2014 \u0441\u0432\u043E\u044F \u0437\u043E\u043D\u0430 \u043E\u0442\u0434\u044B\u0445\u0430: \u0434\u0438\u0432\u0430\u043D\u044B, \u043D\u0430\u0440\u0434\u044B, \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440, \u043A\u0443\u043B\u0435\u0440, \u043A\u043E\u0444\u0435 \u0438 ", /*#__PURE__*/React.createElement("span", {
    className: "nowrap"
  }, "Wi-Fi"), ". \u0422\u0438\u0445\u043E \u0438\xA0\u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E: \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0438\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0436\u0434\u0430\u0442\u044C.")))));
}
function LoungeSlider() {
  const slides = [['img/foto/lounge1.webp', 'Зона отдыха: диваны, телевизор, кулер'], ['img/foto/lounge2.webp', 'Зона отдыха на втором этаже']];
  const n = slides.length;
  const [index, setIndex] = React.useState(0);
  const startX = React.useRef(null);
  const go = d => setIndex(i => (i + d + n) % n);
  return /*#__PURE__*/React.createElement("div", {
    className: "lounge-slider",
    onPointerDown: e => {
      startX.current = e.clientX;
    },
    onPointerUp: e => {
      if (startX.current === null) return;
      const dx = e.clientX - startX.current;
      startX.current = null;
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lounge-slider__track",
    style: {
      transform: `translateX(${-index * 100}%)`
    }
  }, slides.map(([src, alt], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "lounge-slide"
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy"
  })))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lounge-arrow lounge-arrow--prev",
    "aria-label": "\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435 \u0444\u043E\u0442\u043E",
    onClick: () => go(-1)
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lounge-arrow lounge-arrow--next",
    "aria-label": "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 \u0444\u043E\u0442\u043E",
    onClick: () => go(1)
  }, "\u203A"), /*#__PURE__*/React.createElement("div", {
    className: "lounge-dots"
  }, slides.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: 'lounge-dot' + (i === index ? ' is-active' : ''),
    "aria-label": 'Фото ' + (i + 1),
    onClick: () => setIndex(i)
  }))));
}
/* Карта: живой виджет Яндекса. Если он не отозвался за 8 секунд (у части
   посетителей iframe не грузится) — молча подставляем снимок карты со ссылкой. */
function MapBlock() {
  const C = window.GBO_CONFIG;
  const [failed, setFailed] = React.useState(false);
  const [active, setActive] = React.useState(false);
  /* На телефоне карта перехватывает движение пальцем и страница перестаёт
     прокручиваться. Поэтому до первого нажатия карта закрыта прозрачной плашкой. */
  const touch = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover:none)').matches;
  const loaded = React.useRef(false);
  React.useEffect(() => {
    const t = setTimeout(() => {
      if (!loaded.current) setFailed(true);
    }, 8000);
    return () => clearTimeout(t);
  }, []);
  if (failed) return /*#__PURE__*/React.createElement("a", {
    className: "loc-map loc-map--static",
    href: C.MAP_LINK,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437 \u043D\u0430\xA0\u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u0430\u0445"
  }, /*#__PURE__*/React.createElement("img", {
    src: "img/foto/map.webp",
    alt: "\u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437 \u043D\u0430\xA0\u043A\u0430\u0440\u0442\u0435: \u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0443\u043B\u0438\u0446\u0430, 16",
    loading: "lazy",
    decoding: "async"
  }), /*#__PURE__*/React.createElement("span", {
    className: "loc-map__open"
  }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\xA0\u042F\u043D\u0434\u0435\u043A\u0441 \u041A\u0430\u0440\u0442\u0430\u0445 \u2192"));
  return /*#__PURE__*/React.createElement("div", {
    className: "loc-map"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: C.MAP_WIDGET,
    loading: "lazy",
    title: "\u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437 \u043D\u0430\xA0\u043A\u0430\u0440\u0442\u0435: \u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0443\u043B\u0438\u0446\u0430, 16",
    allowFullScreen: true,
    onLoad: () => {
      loaded.current = true;
    }
  }), touch && !active && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "loc-map__lock",
    onClick: () => setActive(true)
  }, /*#__PURE__*/React.createElement("span", null, "\u041D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u0432\u0438\u0433\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u0443")));
}

/* Ролики с заездами. Сами не запускаются: человек видит кадр и кнопку,
   и ролик идёт только после нажатия — со звуком, как в обычном плеере.
   Ушли с экрана или свернули вкладку — встаёт на паузу. */
function DriveVideo({
  src,
  poster,
  caption,
  soundOn,
  onSound
}) {
  const ref = React.useRef(null);
  const box = React.useRef(null);
  const [started, setStarted] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  React.useEffect(() => {
    const v = ref.current,
      el = box.current;
    if (!v || !el || !started) return;
    let inView = true;
    const sync = () => {
      if (inView && !document.hidden) {
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      } else v.pause();
    };
    let io;
    if (window.IntersectionObserver) {
      io = new IntersectionObserver(e => {
        inView = e[0].isIntersecting;
        sync();
      }, {
        threshold: .35
      });
      io.observe(el);
    }
    document.addEventListener('visibilitychange', sync);
    return () => {
      if (io) io.disconnect();
      document.removeEventListener('visibilitychange', sync);
    };
  }, [started]);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || !started) return;
    v.muted = !soundOn;
    if (v.paused) {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [soundOn, started]);
  /* Запускаем тихо: со звуком браузер ролик просто не пустит, пока человек
     не разрешит его отдельно — для этого рядом кнопка звука. */
  const start = () => {
    const v = ref.current;
    if (!v) return;
    /* два ролика одновременно не идут: соседний встаёт на паузу */
    document.querySelectorAll('.loc-video__media').forEach(o => {
      if (o !== v) o.pause();
    });
    setStarted(true);
    v.muted = true;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  };
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    } else v.pause();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'loc-video' + (started ? ' is-started' : ''),
    ref: box
  }, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    className: "loc-video__media",
    poster: poster,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "metadata",
    "aria-label": caption,
    onClick: () => {
      if (started) toggle();
    },
    onPlay: () => setPlaying(true),
    onPause: () => setPlaying(false)
  }, /*#__PURE__*/React.createElement("source", {
    src: src,
    type: "video/mp4"
  })), (!started || !playing) && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "loc-video__play",
    onClick: () => started ? toggle() : start(),
    "aria-label": 'Смотреть: ' + caption
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "26",
    height: "26",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5.2v13.6c0 .62.68 1 1.21.68l10.9-6.8a.8.8 0 0 0 0-1.36L9.21 4.52A.8.8 0 0 0 8 5.2"
  }))), started && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: 'loc-video__sound' + (soundOn ? ' is-on' : ''),
    onClick: () => onSound(!soundOn),
    "aria-label": soundOn ? 'Выключить звук' : 'Включить звук'
  }, soundOn ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.2 4.3 6.4 8.3H3.2a.8.8 0 0 0-.8.8v5.8c0 .44.36.8.8.8h3.2l4.8 4a.6.6 0 0 0 1-.46V4.76a.6.6 0 0 0-1-.46"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.5 8.6a.9.9 0 0 1 1.27 0 4.8 4.8 0 0 1 0 6.8.9.9 0 1 1-1.27-1.27 3 3 0 0 0 0-4.26.9.9 0 0 1 0-1.27"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.3 5.8a.9.9 0 0 1 1.27 0 8.8 8.8 0 0 1 0 12.4.9.9 0 0 1-1.27-1.27 7 7 0 0 0 0-9.86.9.9 0 0 1 0-1.27"
  })) : /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11.2 4.3 6.4 8.3H3.2a.8.8 0 0 0-.8.8v5.8c0 .44.36.8.8.8h3.2l4.8 4a.6.6 0 0 0 1-.46V4.76a.6.6 0 0 0-1-.46"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.3 9.5a.9.9 0 0 0-1.27-1.27L18 10.26l-2.03-2.03a.9.9 0 1 0-1.27 1.27l2.03 2.03-2.03 2.03a.9.9 0 1 0 1.27 1.27L18 12.8l2.03 2.03a.9.9 0 0 0 1.27-1.27l-2.03-2.03z"
  }))));
}
window.Location = Location;
function BookingForm({
  onCta
}) {
  const {
    Input,
    Button
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('+7');
  const [car, setCar] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [trap, setTrap] = React.useState('');
  const ready = window.phoneComplete(phone);
  const msg = encodeURIComponent(C.MESSENGER_TEXTS['форма записи']);
  return /*#__PURE__*/React.createElement("section", {
    className: "booking-section",
    style: {
      background: 'var(--color-primary-mist)',
      padding: '76px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking-stripes",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "booking-stripe booking-stripe--3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "booking-stripe booking-stripe--2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "booking-stripe booking-stripe--1"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 14,
      boxShadow: 'var(--shadow-modal)',
      padding: 40,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    "data-reveal": "",
    style: {
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 32px',
      textAlign: 'center'
    }
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0446\u0435\u043D\u0443 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0413\u0411\u041E", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "\u043D\u0430\xA0\u0432\u0430\u0448\u0443 \u043C\u0430\u0448\u0438\u043D\u0443")), /*#__PURE__*/React.createElement("p", {
    className: "booking-sub"
  }, "\u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0432\xA0\u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\xA010\u201315\xA0\u043C\u0438\u043D\u0443\u0442 \u0438\xA0\u043D\u0430\u0437\u043E\u0432\u0451\u043C \u0446\u0435\u043D\u0443 \u0438\xA0\u0441\u0440\u043E\u043A."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
    placeholder: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "+7 (___) ___-__-__",
    value: phone,
    onChange: e => setPhone(window.formatPhone(e.target.value))
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u041C\u0430\u0440\u043A\u0430 \u0438\xA0\u0433\u043E\u0434 \u0430\u0432\u0442\u043E (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, Toyota Camry, 2015",
    value: car,
    onChange: e => setCar(e.target.value)
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-trap",
    type: "text",
    name: "company",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    value: trap,
    onChange: e => setTrap(e.target.value)
  }), /*#__PURE__*/React.createElement(SubmitMorph, {
    ready: ready,
    sent: sent,
    size: "lg",
    label: "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
    onSubmit: () => {
      setSent(true);
      window.sendLead({
        name,
        phone,
        note: car,
        source: 'форма записи',
        company: trap
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    fullWidth: true,
    onClick: () => onCta && onCta('ближайшее свободное время')
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430\xA0\u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"), /*#__PURE__*/React.createElement("p", {
    className: "lead-consent"
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 ", /*#__PURE__*/React.createElement("a", {
    href: "policy.html",
    target: "_blank",
    rel: "noopener"
  }, "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      margin: '28px 0 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-ink)',
      marginBottom: 6
    }
  }, "\u041D\u0435\xA0\u0433\u043E\u0442\u043E\u0432\u044B \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C\u0441\u044F?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      lineHeight: 1.5
    }
  }, "\u041F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u0430\u0440\u043A\u0443 \u0438\xA0\u0433\u043E\u0434. \u0421\u043A\u0430\u0436\u0435\u043C, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u043E\u0438\u0442\u044C \u0438\xA0\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0439\u043C\u0451\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u0411\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Messenger, {
    type: "telegram",
    href: 'https://t.me/share/url?url=&text=' + msg
  }), /*#__PURE__*/React.createElement(Messenger, {
    type: "whatsapp",
    href: C.WHATSAPP + '?text=' + msg
  }), /*#__PURE__*/React.createElement(Messenger, {
    type: "max",
    href: C.MAX_LINK
  })))));
}
window.BookingForm = BookingForm;
function Footer() {
  const {
    MessengerButton
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-ink)',
      color: '#fff',
      padding: '64px 32px 24px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid",
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1.3fr 1fr 1fr',
      gap: 32,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "img/logo.webp?v=37",
    alt: "\u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437",
    width: "712",
    height: "192",
    style: {
      height: 56,
      width: "auto",
      display: "block",
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-steel)',
      lineHeight: 1.5
    }
  }, "\u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437. \u0413\u0430\u0437\u043E\u0431\u0430\u043B\u043B\u043E\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435, \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0435 \u043E\u0442\u043E\u043F\u0438\u0442\u0435\u043B\u0438. \u0421\xA01996\xA0\u0433\u043E\u0434\u0430")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-steel)',
      marginBottom: 10
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B"), /*#__PURE__*/React.createElement("div", {
    className: "nowrap",
    style: {
      fontSize: 16,
      marginBottom: 6
    }
  }, "\u0413\u0411\u041E \u2014 ", C.PHONE_GBO), /*#__PURE__*/React.createElement("div", {
    className: "nowrap",
    style: {
      fontSize: 16
    }
  }, "\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440\u044B \u2014 ", C.PHONE_CLIMATE)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-steel)',
      marginBottom: 10
    }
  }, "\u0410\u0434\u0440\u0435\u0441 \u0438\xA0\u0433\u0440\u0430\u0444\u0438\u043A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6
    }
  }, C.ADDRESS, /*#__PURE__*/React.createElement("br", null), window.HOURS_LINE)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-steel)',
      marginBottom: 10
    }
  }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      color: 'var(--color-primary-bright)'
    }
  }, "\u0413\u0411\u041E")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "otopiteli/",
    style: {
      color: 'var(--color-steel)'
    }
  }, "\u041E\u0442\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u0438\xA0\u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440\u044B")), /*#__PURE__*/React.createElement("div", {
    className: "footer-contacts"
  }, /*#__PURE__*/React.createElement(Messenger, {
    type: "telegram",
    href: "https://t.me/share/url?url=&text="
  }), /*#__PURE__*/React.createElement(Messenger, {
    type: "whatsapp",
    href: C.WHATSAPP
  }), /*#__PURE__*/React.createElement(Messenger, {
    type: "max",
    href: C.MAX_LINK
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-steel)',
      margin: '16px 0 8px',
      lineHeight: 1.4
    }
  }, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D \u0433\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F: \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438 \u043D\u0430 Ozon \u0438 Wildberries"), /*#__PURE__*/React.createElement("div", {
    className: "footer-contacts"
  }, [['Ozon', 'img/ozon.webp', C.OZON], ['Wildberries', 'img/wb.webp', C.WB]].map(([label, src, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    className: "shop-btn",
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": label,
    title: label
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label,
    loading: "lazy",
    decoding: "async"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      borderTop: '1px solid #3d3d3d',
      paddingTop: 16,
      fontSize: 12,
      color: 'var(--color-steel)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u0418\u041F \u041A\u043E\u0440\u0441\u0443\u043D\u043E\u0432 \u0410\u043D\u0442\u043E\u043D \u0418\u0433\u043E\u0440\u0435\u0432\u0438\u0447 \xB7 \u0418\u041D\u041D 890414959136 \xB7 \u041E\u0413\u0420\u041D\u0418\u041F 324619600106274"), /*#__PURE__*/React.createElement("a", {
    href: "policy.html",
    style: {
      color: 'var(--color-steel)'
    }
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), /*#__PURE__*/React.createElement("span", null, "\xA9 1996\u20132026 \u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437")));
}
window.Footer = Footer;
function Popup({
  source,
  onClose
}) {
  const {
    Input
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('+7');
  const [sent, setSent] = React.useState(false);
  const [trap, setTrap] = React.useState('');
  const ready = window.phoneComplete(phone);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const r = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(r);
  }, []);
  const msg = encodeURIComponent(C.MESSENGER_TEXTS[source] || C.MESSENGER_TEXTS['первый экран']);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(26,26,26,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      padding: 16,
      fontFamily: 'var(--font-family)',
      opacity: shown ? 1 : 0,
      transition: 'opacity var(--dur-modal) var(--ease-out)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      maxWidth: '100%',
      background: '#fff',
      borderRadius: 14,
      boxShadow: 'var(--shadow-modal)',
      padding: 32,
      transformOrigin: 'center',
      transform: shown ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(8px)',
      opacity: shown ? 1 : 0,
      transition: 'transform var(--dur-modal) var(--ease-out), opacity var(--dur-modal) var(--ease-out)'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 8px'
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--color-charcoal)',
      margin: '0 0 20px',
      lineHeight: 1.45
    }
  }, "\u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0432\xA0\u0440\u0430\u0431\u043E\u0447\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\xA010\u201315\xA0\u043C\u0438\u043D\u0443\u0442 \u0438\xA0\u043D\u0430\u0437\u043E\u0432\u0451\u043C \u0446\u0435\u043D\u0443 \u0438\xA0\u0441\u0440\u043E\u043A."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
    placeholder: "\u041A\u0430\u043A \u0432\u0430\u0441 \u0437\u043E\u0432\u0443\u0442",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    placeholder: "+7 (___) ___-__-__",
    value: phone,
    onChange: e => setPhone(window.formatPhone(e.target.value))
  })), /*#__PURE__*/React.createElement("input", {
    className: "lead-trap",
    type: "text",
    name: "company",
    tabIndex: -1,
    autoComplete: "off",
    "aria-hidden": "true",
    value: trap,
    onChange: e => setTrap(e.target.value)
  }), /*#__PURE__*/React.createElement(SubmitMorph, {
    ready: ready,
    sent: sent,
    label: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",
    onSubmit: () => {
      setSent(true);
      window.sendLead({
        name,
        phone,
        source,
        company: trap
      });
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "lead-consent"
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 ", /*#__PURE__*/React.createElement("a", {
    href: "policy.html",
    target: "_blank",
    rel: "noopener"
  }, "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '24px 0 12px'
    }
  }, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Messenger, {
    type: "telegram",
    href: 'https://t.me/share/url?url=&text=' + msg
  }), /*#__PURE__*/React.createElement(Messenger, {
    type: "whatsapp",
    href: C.WHATSAPP + '?text=' + msg
  }), /*#__PURE__*/React.createElement(Messenger, {
    type: "max",
    href: C.MAX_LINK
  }))));
}
window.Popup = Popup;

/* Страница ГБО целиком: порядок блоков и окно заявки.
   Раньше этот код лежал прямо в index.html и переводился Бабелем в браузере
   посетителя. Теперь перевод идёт заранее, командой sborka/sobrat.js. */
/* Разделитель между блоками: линия с двумя квадратиками из dvizhenie.js */
function Divider() {
  return /*#__PURE__*/React.createElement("div", {
    className: "dv-row"
  }, /*#__PURE__*/React.createElement("div", {
    "data-divider": ""
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)));
}
function App() {
  const [popup, setPopup] = React.useState(null);
  const onCta = src => setPopup(src);
  /* dvizhenie.js вешает наблюдатели один раз при запуске, а страницу рисует React -
     поэтому файл подключаем после отрисовки. Не ожил за 3 секунды - показываем всё без движения. */
  React.useEffect(() => {
    const pokazatVsyo = () => document.documentElement.classList.remove('dv');
    const storozh = setTimeout(pokazatVsyo, 3000);
    const s = document.createElement('script');
    s.src = 'dvizhenie.js?v=38';
    s.onload = () => clearTimeout(storozh);
    s.onerror = () => {
      clearTimeout(storozh);
      pokazatVsyo();
    };
    document.body.appendChild(s);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    onCta: onCta
  }), /*#__PURE__*/React.createElement(Hero, {
    onCta: onCta
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(ErrorsVsUs, null), /*#__PURE__*/React.createElement(Calculator, {
    onCta: onCta
  }), /*#__PURE__*/React.createElement(Works, null), /*#__PURE__*/React.createElement(RepairBrands, {
    onCta: onCta
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Fleets, null), /*#__PURE__*/React.createElement(Team, null), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Location, null), /*#__PURE__*/React.createElement(ReviewsBand, null), /*#__PURE__*/React.createElement(BookingForm, {
    onCta: onCta
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(Footer, null), popup && /*#__PURE__*/React.createElement(Popup, {
    source: popup,
    onClose: () => setPopup(null)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));