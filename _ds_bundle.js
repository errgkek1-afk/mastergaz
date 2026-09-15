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
      borderRadius: 'var(--radius-xl)',
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
    borderRadius: isCta ? 'var(--radius-xl)' : 'var(--radius-md)',
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
      borderRadius: 'var(--radius-pill)',
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

// ui_kits/landing/BookingForm.jsx
try { (() => {
function BookingForm() {
  const {
    Input,
    Button,
    MessengerButton
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('+7');
  const [car, setCar] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const ready = window.phoneComplete(phone);
  const msg = encodeURIComponent(C.MESSENGER_TEXTS['форма записи']);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-primary-mist)',
      padding: '96px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -60,
      top: 0,
      bottom: 0,
      width: 32,
      background: 'var(--color-primary-soft)',
      transform: 'skewX(-20deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -32,
      top: 0,
      bottom: 0,
      width: 22,
      background: 'var(--color-primary-bright)',
      transform: 'skewX(-20deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: -8,
      top: 0,
      bottom: 0,
      width: 14,
      background: 'var(--color-primary)',
      transform: 'skewX(-20deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 16,
      boxShadow: 'var(--shadow-modal)',
      padding: 40,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 32px',
      textAlign: 'center',
      lineHeight: 1.12
    }
  }, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u0430\u0440\u043A\u0443 \u043C\u0430\u0448\u0438\u043D\u044B", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "\u043D\u0430\u0437\u043E\u0432\u0451\u043C \u0446\u0435\u043D\u0443 \u0438 \u0441\u0440\u043E\u043A")), /*#__PURE__*/React.createElement("div", {
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
    label: "\u041C\u0430\u0440\u043A\u0430 \u0438 \u0433\u043E\u0434 \u0430\u0432\u0442\u043E (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
    placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, Toyota Camry, 2015",
    value: car,
    onChange: e => setCar(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: ready ? 'primary' : 'muted',
    size: "lg",
    fullWidth: true,
    disabled: !ready,
    onClick: () => setSent(true)
  }, sent ? 'Заявка отправлена' : 'Записаться на установку'), /*#__PURE__*/React.createElement("div", {
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
  }, "\u041D\u0435 \u0433\u043E\u0442\u043E\u0432\u044B \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C\u0441\u044F?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      lineHeight: 1.5
    }
  }, "\u041F\u0440\u043E\u0441\u0442\u043E \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u0430\u0440\u043A\u0443 \u0438 \u0433\u043E\u0434. \u0421\u043A\u0430\u0436\u0435\u043C, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0431\u0443\u0434\u0435\u0442 \u0441\u0442\u043E\u0438\u0442\u044C \u0438 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0437\u0430\u0439\u043C\u0451\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438. \u0411\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(MessengerButton, {
    type: "telegram",
    href: 'https://t.me/share/url?url=&text=' + msg
  }), /*#__PURE__*/React.createElement(MessengerButton, {
    type: "whatsapp",
    href: 'https://wa.me/79381470590?text=' + msg
  }), /*#__PURE__*/React.createElement(MessengerButton, {
    type: "max",
    href: "#"
  })))));
}
window.BookingForm = BookingForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/BookingForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Calculator.jsx
try { (() => {
function Calculator({
  onCta
}) {
  const {
    Slider,
    Chip,
    Button,
    Accordion
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const [mileage, setMileage] = React.useState(1500);
  const [consumption, setConsumption] = React.useState(10);
  const [petrolPrice, setPetrolPrice] = React.useState(C.PETROL_PRICE_DEFAULT);
  const [engine, setEngine] = React.useState(0);
  const petrolMonth = Math.round(mileage * consumption / 100 * petrolPrice);
  const gasMonth = Math.round(mileage * consumption * C.K_RASHOD / 100 * C.GAS_PRICE);
  const saveMonth = petrolMonth - gasMonth;
  const payback = saveMonth > 0 ? Math.round(C.ENGINES[engine].cost / saveMonth) : 0;
  const rub = n => n.toLocaleString('ru-RU') + ' ₽';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-primary-mist)',
      padding: '96px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 40px',
      lineHeight: 1.1
    }
  }, "\u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435, \u0441\u043A\u043E\u043B\u044C\u043A\u043E ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "\u0432\u0435\u0440\u043D\u0451\u0442 \u0432\u0430\u043C \u0433\u0430\u0437")), /*#__PURE__*/React.createElement("div", {
    className: "calc-card",
    style: {
      background: '#fff',
      borderRadius: 16,
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
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "\u041F\u0440\u043E\u0431\u0435\u0433 \u0432 \u043C\u0435\u0441\u044F\u0446, \u043A\u043C",
    min: 100,
    max: 6000,
    value: mileage,
    unit: " \u043A\u043C",
    onChange: e => setMileage(+e.target.value)
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "\u0420\u0430\u0441\u0445\u043E\u0434 \u043D\u0430 100 \u043A\u043C, \u043B",
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
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-ink)',
      marginBottom: 10
    }
  }, "\u0422\u0438\u043F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, C.ENGINES.map((e, i) => /*#__PURE__*/React.createElement(Chip, {
    key: e.id,
    selected: engine === i,
    onClick: () => setEngine(i)
  }, e.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: '10px 24px',
      fontSize: 17,
      alignItems: 'baseline',
      paddingBottom: 20,
      borderBottom: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-graphite)'
    }
  }, "\u0432 \u043C\u0435\u0441\u044F\u0446"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--color-graphite)'
    }
  }, "\u0437\u0430 \u0433\u043E\u0434"), /*#__PURE__*/React.createElement("span", null, "\u041D\u0430 \u0431\u0435\u043D\u0437\u0438\u043D\u0435"), /*#__PURE__*/React.createElement("b", null, rub(petrolMonth)), /*#__PURE__*/React.createElement("b", null, rub(petrolMonth * 12)), /*#__PURE__*/React.createElement("span", null, "\u041D\u0430 \u0433\u0430\u0437\u0435"), /*#__PURE__*/React.createElement("b", null, rub(gasMonth)), /*#__PURE__*/React.createElement("b", null, rub(gasMonth * 12))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-success-soft)',
      borderRadius: 16,
      padding: '24px 28px',
      margin: '20px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-charcoal)',
      marginBottom: 4
    }
  }, "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 52,
      fontWeight: 700,
      color: 'var(--color-success)',
      lineHeight: 1.05
    }
  }, rub(saveMonth)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--color-charcoal)',
      marginTop: 6
    }
  }, "\u0432 \u043C\u0435\u0441\u044F\u0446 \xB7 ", rub(saveMonth * 12), " \u0437\u0430 \u0433\u043E\u0434")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--color-ink)',
      textWrap: 'balance'
    }
  }, "\u041E\u043A\u0443\u043F\u0438\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E \u0437\u0430 ", payback, " \u043C\u0435\u0441."))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onCta('калькулятор')
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0413\u0411\u041E")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpenIndex: -1,
    items: [{
      title: 'Что входит в установку',
      content: /*#__PURE__*/React.createElement("ol", {
        style: {
          margin: 0,
          paddingLeft: 20,
          lineHeight: 1.8,
          columns: 2,
          columnGap: 40
        }
      }, /*#__PURE__*/React.createElement("li", null, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u0438\u043A\u0438 \u043F\u043E\u0434\u043A\u0430\u043F\u043E\u0442\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438"), /*#__PURE__*/React.createElement("li", null, "\u0413\u0430\u0437\u043E\u0432\u044B\u0439 \u0431\u0430\u043B\u043B\u043E\u043D \u2014 \u0442\u043E\u0440\u043E\u0438\u0434\u0430\u043B\u044C\u043D\u044B\u0439"), /*#__PURE__*/React.createElement("li", null, "\u041C\u0443\u043B\u044C\u0442\u0438\u043A\u043B\u0430\u043F\u0430\u043D \u043A\u043B\u0430\u0441\u0441\u0430 \u0410, \u0418\u0442\u0430\u043B\u0438\u044F"), /*#__PURE__*/React.createElement("li", null, "\u0422\u0435\u0440\u043C\u043E\u043F\u043B\u0430\u0441\u0442\u0438\u043A\u043E\u0432\u044B\u0435 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438"), /*#__PURE__*/React.createElement("li", null, "\u0420\u0435\u0434\u0443\u043A\u0442\u043E\u0440"), /*#__PURE__*/React.createElement("li", null, "\u0424\u043E\u0440\u0441\u0443\u043D\u043A\u0438"), /*#__PURE__*/React.createElement("li", null, "\u0417\u0430\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u043E\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E"), /*#__PURE__*/React.createElement("li", null, "\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436"))
    }, {
      title: 'Что входит в ТО каждые 10 000 км',
      content: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
        style: {
          margin: '0 0 12px',
          paddingLeft: 20,
          lineHeight: 1.8
        }
      }, /*#__PURE__*/React.createElement("li", null, "\u0417\u0430\u043C\u0435\u043D\u0430 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432 \u0436\u0438\u0434\u043A\u043E\u0439 \u0438 \u043F\u0430\u0440\u043E\u0432\u043E\u0439 \u0444\u0430\u0437\u044B"), /*#__PURE__*/React.createElement("li", null, "\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0433\u0435\u0440\u043C\u0435\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u044B"), /*#__PURE__*/React.createElement("li", null, "\u041F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u2014 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043D\u0430\u044F \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 13,
          color: 'var(--color-graphite)'
        }
      }, "\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u043D\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0443 \u2014 \u0434\u043E 1 \u0433\u043E\u0434\u0430 \u043F\u0440\u0438 \u0441\u043E\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0438 \u0440\u0435\u0433\u043B\u0430\u043C\u0435\u043D\u0442\u0430 \u0422\u041E \u0440\u0430\u0437 \u0432 10 000 \u043A\u043C."))
    }]
  })))));
}
window.Calculator = Calculator;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Calculator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/CertificatesReviews.jsx
try { (() => {
function CertificatesReviews() {
  const {
    Button,
    Placeholder
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const [hover, setHover] = React.useState(1);
  const certs = [['Сертификат №1', 'Свидетельство о квалификации'], ['Сертификат №2', 'Сертификат соответствия автосервиса'], ['Сертификат №3', 'Дилерский сертификат производителя']];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px,3vw,40px)',
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 12px',
      lineHeight: 1.15
    }
  }, "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      textAlign: 'center',
      margin: '0 0 40px'
    }
  }, "\u0421\u043A\u0430\u043D\u044B \u0436\u0434\u0451\u043C \u043E\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u2014 \u0441\u0442\u043E\u044F\u0442 \u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0438. \u041D\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443"), /*#__PURE__*/React.createElement("div", {
    className: "certs-row",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 32
    }
  }, certs.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cert-item",
    onMouseEnter: () => setHover(i),
    style: {
      width: 260,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: hover === i ? 1 : 0.45,
      transform: hover === i ? 'translateY(-12px) scale(1)' : 'scale(0.9)',
      transition: 'opacity var(--dur-dropdown) var(--ease-out), transform var(--dur-dropdown) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442",
    aspect: "3 / 4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      marginTop: 8,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      textAlign: 'center',
      opacity: hover === i ? 1 : 0,
      transition: 'opacity var(--dur-dropdown) var(--ease-out)'
    }
  }, c[1]))))))), /*#__PURE__*/React.createElement(ReviewsBand, null));
}
function ReviewsBand() {
  const {
    Button
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const reviews = [['Алексей М.', 'Поставили ГБО за день, настройку делали в движении — расход как обещали.'], ['Ирина С.', 'Обратилась после неудачной установки в другом сервисе. Нашли причину и настроили нормально.'], ['Дмитрий К.', 'Сначала диагностика, потом цена. Помогли и с регистрацией в ГИБДД.'], ['Сергей В.', 'Две недели катался и приезжал на корректировку — ни разу не отказали.'], ['Марина Л.', 'Приехала с чужой установкой, троил двигатель. Переделали форсунки, машина поехала ровно.'], ['Олег Т.', 'Ставил на служебные машины, всё по договору и с документами. Работают быстро.'], ['Виктор П.', 'Сказали честно, что пятое поколение мне не нужно, и объяснили почему. Редкость.'], ['Анна Ж.', 'Пока ждала, сидела в зоне отдыха с кофе. Управились за полдня.'], ['Роман Д.', 'Помогли зарегистрировать ГБО в ГИБДД, сам бы я там утонул в бумагах.'], ['Павел С.', 'Баллон поставили аккуратно, крепления нормальные. Видно, что делают не наспех.'], ['Игорь В.', 'Была проблема с прошивкой, решали с заводом. Не отфутболили, как в других местах.'], ['Николай Р.', 'Обслуживаю здесь ТО каждые 10 000 км уже третий год. Нареканий нет.']];
  const CARD = 340,
    GAP = 16,
    STEP = CARD + GAP;
  const [index, setIndex] = React.useState(0);
  const [drag, setDrag] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const start = React.useRef(null);
  const viewport = React.useRef(null);
  const [track, setTrack] = React.useState(0);
  React.useEffect(() => {
    const measure = () => {
      if (viewport.current) setTrack(viewport.current.clientWidth - 64);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  const fullWidth = reviews.length * STEP - GAP;
  const maxShift = Math.max(0, fullWidth - track);
  const maxIndex = Math.max(0, Math.ceil(maxShift / STEP));
  const clamped = Math.min(index, maxIndex);
  const go = d => setIndex(i => Math.max(0, Math.min(maxIndex, i + d)));
  const onDown = e => {
    if (dragging) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = {
      x: e.clientX,
      t: Date.now()
    };
    setDragging(true);
  };
  const onMove = e => {
    if (!dragging || !start.current) return;
    let dx = e.clientX - start.current.x;
    const atStart = clamped === 0 && dx > 0,
      atEnd = clamped === maxIndex && dx < 0;
    if (atStart || atEnd) dx *= 0.35;
    setDrag(dx);
  };
  const onUp = () => {
    if (!dragging) return;
    const dt = Date.now() - start.current.t,
      v = Math.abs(drag) / Math.max(dt, 1);
    const steps = Math.round(Math.abs(drag) / STEP);
    const move = v > 0.35 ? Math.max(1, steps) : steps;
    if (drag < 0) go(move);else if (drag > 0) go(-move);
    setDrag(0);
    setDragging(false);
    start.current = null;
  };
  const offset = -Math.min(clamped * STEP, maxShift) + drag;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-ink)',
      padding: '96px 0',
      fontFamily: 'var(--font-family)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      fontFeatureSettings: '"tnum"'
    }
  }, "4,9"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#f5b400',
      fontSize: 20,
      letterSpacing: 2,
      margin: '8px 0 6px'
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-steel)',
      fontSize: 14
    }
  }, "696 \xB7 \u043E\u0442\u0437\u044B\u0432\u043E\u0432 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041A\u0430\u0440\u0442\u0430\u0445")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(CarouselArrow, {
    dir: "prev",
    disabled: clamped === 0,
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(CarouselArrow, {
    dir: "next",
    disabled: clamped === maxIndex,
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("a", {
    href: C.YANDEX,
    target: "_blank",
    rel: "noreferrer",
    style: {
      marginLeft: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark"
  }, "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435 \u043E\u0442\u0437\u044B\u0432\u044B")))), /*#__PURE__*/React.createElement("div", {
    ref: viewport,
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 32px',
      overflow: 'hidden',
      cursor: dragging ? 'grabbing' : 'grab',
      touchAction: 'pan-y'
    },
    onPointerDown: onDown,
    onPointerMove: onMove,
    onPointerUp: onUp,
    onPointerCancel: onUp
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: GAP,
      transform: `translate3d(${offset}px,0,0)`,
      transition: dragging ? 'none' : 'transform 620ms var(--ease-drawer)',
      willChange: 'transform'
    }
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement(ReviewCard, {
    key: i,
    review: r,
    href: C.YANDEX,
    width: CARD,
    dragging: dragging
  })))));
}
function ReviewCard({
  review,
  href,
  width,
  dragging
}) {
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    draggable: false,
    onClick: e => {
      if (dragging) e.preventDefault();
    },
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false),
    style: {
      flex: `0 0 ${width}px`,
      minHeight: 200,
      boxSizing: 'border-box',
      background: 'var(--color-ink-soft)',
      borderRadius: 16,
      padding: 24,
      color: '#fff',
      textDecoration: 'none',
      display: 'flex',
      flexDirection: 'column',
      transform: press && !dragging ? 'scale(0.985)' : 'scale(1)',
      transition: 'transform var(--dur-press) var(--ease-out)',
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#f5b400',
      marginBottom: 10,
      letterSpacing: 1
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      marginBottom: 16
    }
  }, review[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-steel)',
      marginTop: 'auto'
    }
  }, review[0]));
}
function CarouselArrow({
  dir,
  onClick,
  disabled
}) {
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    "aria-label": dir === 'prev' ? 'Предыдущие отзывы' : 'Следующие отзывы',
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    onPointerLeave: () => setPress(false),
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1px solid #4a4a4a',
      background: 'transparent',
      color: '#fff',
      cursor: disabled ? 'default' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      opacity: disabled ? 0.35 : 1,
      transform: press && !disabled ? 'scale(0.94)' : 'scale(1)',
      transition: 'transform var(--dur-press) var(--ease-out), opacity var(--dur-dropdown) ease'
    }
  }, dir === 'prev' ? '‹' : '›');
}
window.CertificatesReviews = CertificatesReviews;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/CertificatesReviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/ErrorsVsUs.jsx
try { (() => {
function ErrorsVsUs() {
  const {
    CheckListItem
  } = window.DesignSystem_a63f4f;
  const rows = [['Берут комплект ГБО на 100 л.с. и ставят на мотор в 250 л.с. — быстрый путь обратно в автосервис', 'Подбираем оборудование по реальной мощности и параметрам конкретного автомобиля'], ['Редуктор ставят туда, куда влез: он трётся, а дальше — протечка и поломка', 'Редуктор — строго по регламенту производителя: место, врезка, магистрали'], ['Форсунки прикручивают как получится — отсюда троение и провалы', 'Форсунки и длина трубок одинаковые на каждый цилиндр'], ['Газовую карту «настраивают» на холостых за десять минут в боксе', 'Настраиваем в движении, под нагрузкой, мастер едет вместе с вами'], ['Баллон крепят на пару болтов', 'Крепим по нормам безопасности: полный комплект креплений и страховочных лент'], ['Ставят дешёвый китайский мультиклапан', 'Мультиклапан класса А, Италия, с тремя системами защиты — входит в базовый комплект'], ['«На вашу машину прошивки нет, ничего не сделаем»', 'Нет прошивки — делаем вместе с техподдержкой завода: Италия, Польша'], ['Установили — и до свидания', 'Две недели после установки приезжайте на корректировку хоть каждый день, бесплатно'], ['«С документами разбирайтесь сами»', 'Проводим по всей процедуре регистрации в ГИБДД — отдельной услугой'], ['Гарантия «на месяц, если что — приезжайте»', 'До 1 года или 100 000 км на оборудование и работы']];
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
      padding: '96px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px,3vw,40px)',
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 48px',
      lineHeight: 1.15,
      textWrap: 'balance'
    }
  }, "\u041D\u0430 \u0440\u044B\u043D\u043A\u0435 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "30 \u043B\u0435\u0442"), ". \u0417\u043D\u0430\u0435\u043C \u0446\u0435\u043D\u0443 \u043C\u0435\u043B\u043E\u0447\u0430\u043C"), /*#__PURE__*/React.createElement("div", {
    className: "errors-outer",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 260px',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: `repeat(${rows.length + 1},auto)`,
      columnGap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: 2,
      gridRow: '1 / -1',
      background: '#fff',
      borderRadius: 16,
      boxShadow: 'var(--shadow-soft)',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
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
    style: {
      ...cell,
      gridColumn: 1,
      gridRow: i + 2,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement(CheckListItem, {
    type: "cross"
  }, r[0])), /*#__PURE__*/React.createElement("div", {
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
    className: "errors-photo",
    style: {
      position: 'sticky',
      top: 96,
      aspectRatio: '3 / 4',
      borderRadius: 16,
      background: 'var(--color-fog)',
      border: '1px dashed var(--color-steel)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      color: 'var(--color-graphite)',
      textAlign: 'center',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, "\u041C\u0435\u0441\u0442\u043E \u043F\u043E\u0434 \u0444\u043E\u0442\u043E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\u0440\u0430\u0431\u043E\u0442\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u0430 \u0432 \u0431\u043E\u043A\u0441\u0435"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      marginTop: 48
    }
  }, "\u041C\u044B \u0441\u0442\u0430\u0432\u0438\u043C \u0433\u0430\u0437 \u0442\u0430\u043A, \u043A\u0430\u043A \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B\u0438 \u0431\u044B \u0441\u0435\u0431\u0435.")));
}
window.ErrorsVsUs = ErrorsVsUs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/ErrorsVsUs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/FAQ.jsx
try { (() => {
function FAQ() {
  const {
    Accordion
  } = window.DesignSystem_a63f4f;
  const items = [{
    title: 'Правда, что газ убивает мотор?',
    content: 'Нет. Крупные автопроизводители сами выпускают заводские битопливные версии. Мотор убивает не газ, а неправильно подобранное оборудование и ненастроенная газовая карта.'
  }, {
    title: 'Машина потеряет мощность?',
    content: 'При корректной настройке разница в обычной езде не чувствуется. Если после установки машина «не едет» — это не свойство газа, а признак того, что комплект подобрали не под этот мотор или карту не откалибровали. Именно этим мы и отличаемся от других сервисов.'
  }, {
    title: 'Страшно ездить с баллоном. Он может взорваться?',
    content: 'Баллон испытывается давлением, многократно превышающим рабочее, и по безопасности не уступает бензобаку. Мы ставим мультиклапаны класса А итальянского производства с тремя системами защиты и крепим баллон по нормам — с полным комплектом креплений и страховочных лент.'
  }, {
    title: 'Как часто нужно обслуживать ГБО и что входит в ТО?',
    content: 'Каждые 10 000 км. Меняем комплект фильтров жидкой и паровой фазы, проверяем герметичность системы, при необходимости делаем компьютерную диагностику. Соблюдение регламента — условие сохранения гарантии.'
  }, {
    title: 'Что с документами?',
    content: 'ГБО подлежит регистрации, самому это минимум три визита в МРЭО. Мы проводим по всей процедуре — от техэкспертизы и фотофиксации до подачи документов. Это отдельная услуга, в стоимость установки она не входит.'
  }, {
    title: 'Сколько занимает установка?',
    content: 'От 4 часов до 3 дней — зависит от марки и модели. На распространённых машинах управляемся за день, на сложных и на непосредственном впрыске дольше. Точный срок назовём, когда узнаем машину.'
  }, {
    title: 'Что покрывает гарантия?',
    content: 'Оборудование и работы: до 1 года или 100 000 км, что наступит раньше, при плановом ТО каждые 10 000 км. Плюс первые две недели после установки — бесплатные корректировки хоть каждый день.'
  }, {
    title: 'У меня прямой впрыск или китайский автомобиль. Поставите?',
    content: 'Ставим и прямой, и распределённый впрыск, работаем практически со всеми марками. Нет готовой прошивки — сделаем вместе с техподдержкой завода.'
  }, {
    title: 'У меня уже стоит газ, но работает плохо. Возьмётесь?',
    content: 'Возьмёмся. Работаем с оборудованием любой марки: находим причину, подбираем и заказываем запчасти, ремонтируем в короткие сроки.'
  }, {
    title: 'Хочу 5-е поколение. Поставите?',
    content: 'Не поставим и объясним почему: неоправданно дорого, а завод, который выпускал это оборудование в Голландии, закрылся — обслуживать систему будет нечем. Предложим то, что реально будет работать.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 40px',
      lineHeight: 1.1
    }
  }, "\u0427\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement(Accordion, {
    items: items
  })));
}
window.FAQ = FAQ;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/FAQ.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Fleets.jsx
try { (() => {
function Fleets({
  onCta
}) {
  const {
    Button,
    Placeholder
  } = window.DesignSystem_a63f4f;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-primary-mist)',
      padding: '96px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px,3vw,40px)',
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 16px',
      lineHeight: 1.15,
      textWrap: 'balance'
    }
  }, "\u041E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u0435\u043C ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "\u0430\u0432\u0442\u043E\u043F\u0430\u0440\u043A\u0438 \u0438 \u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0439"), " \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.35vw,17px)',
      color: 'var(--color-charcoal)',
      margin: '0 0 40px',
      lineHeight: 1.45,
      textWrap: 'balance'
    }
  }, "\u0414\u043E\u0433\u043E\u0432\u043E\u0440, \u0441\u0447\u0435\u0442\u0430, \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F\u043C\u0438 \u043F\u043E \u0432\u0441\u0435\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438."), /*#__PURE__*/React.createElement("div", {
    className: "fleets-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 16,
      marginBottom: 16
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(Placeholder, {
    key: i,
    label: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
    aspect: "16 / 9"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-graphite)',
      marginBottom: 32
    }
  }, "\u0411\u043B\u043E\u043A-\u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0430: \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432 \u043E\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430 \u043D\u0435 \u043F\u0440\u0438\u0448\u0451\u043B, \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u044B \u043F\u043E\u0434\u0441\u0442\u0430\u0432\u0438\u043C \u043F\u043E\u0437\u0436\u0435"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onCta('автопарки')
  }, "\u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u0440\u043A\u0430")));
}
window.Fleets = Fleets;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Fleets.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Footer.jsx
try { (() => {
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
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 20,
      marginBottom: 10
    }
  }, "\u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-steel)',
      lineHeight: 1.5
    }
  }, "\u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437. \u0413\u0430\u0437\u043E\u0431\u0430\u043B\u043B\u043E\u043D\u043D\u043E\u0435 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435, \u043A\u043B\u0438\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B, \u0430\u0432\u0442\u043E\u043D\u043E\u043C\u043D\u044B\u0435 \u043E\u0442\u043E\u043F\u0438\u0442\u0435\u043B\u0438. \u0421 1996 \u0433\u043E\u0434\u0430")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-steel)',
      marginBottom: 10
    }
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      marginBottom: 6
    }
  }, "\u0413\u0411\u041E \u2014 ", C.PHONE_GBO), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16
    }
  }, "\u041A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440\u044B \u2014 ", C.PHONE_CLIMATE)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-steel)',
      marginBottom: 10
    }
  }, "\u0410\u0434\u0440\u0435\u0441 \u0438 \u0433\u0440\u0430\u0444\u0438\u043A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.6
    }
  }, C.ADDRESS, /*#__PURE__*/React.createElement("br", null), "\u041F\u043D\u2013\u041F\u0442, 09:00\u201318:00")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
    href: "#",
    style: {
      color: 'var(--color-primary-bright)'
    }
  }, "\u0413\u0411\u041E")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      marginBottom: 14
    }
  }, "\u041E\u0442\u043E\u043F\u0438\u0442\u0435\u043B\u0438 \u0438 \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043E\u043D\u0435\u0440\u044B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MessengerButton, {
    type: "telegram"
  }), /*#__PURE__*/React.createElement(MessengerButton, {
    type: "whatsapp"
  }), /*#__PURE__*/React.createElement(MessengerButton, {
    type: "max"
  })))), /*#__PURE__*/React.createElement("div", {
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
    href: "#",
    style: {
      color: 'var(--color-steel)'
    }
  }, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"), /*#__PURE__*/React.createElement("span", null, "\xA9 1996\u20132026 \u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Header.jsx
try { (() => {
function Header({
  onCta
}) {
  const {
    Button,
    Tabs
  } = window.DesignSystem_a63f4f;
  const open = window.isOpenNow();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: '#fff',
      borderBottom: '1px solid var(--color-hairline)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-family)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--color-ink)'
    }
  }, "\u041C\u0430\u0441\u0442\u0435\u0440\u0413\u0430\u0437"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-graphite)'
    }
  }, "\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 1996 \u0433\u043E\u0434\u0430")), /*#__PURE__*/React.createElement("div", {
    className: "header-tabs"
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ['ГБО', 'Отопители и кондиционеры'],
    active: 0,
    onChange: () => {}
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: open ? 'var(--color-success)' : 'var(--color-danger)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-ink)'
    }
  }, open ? 'Сейчас работаем' : 'Сейчас закрыто'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-graphite)'
    }
  }, "\u041F\u043D\u2013\u041F\u0442, 09:00\u201318:00"))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => onCta('первый экран')
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0413\u0411\u041E")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
function Hero({
  onCta
}) {
  const {
    Button,
    Card
  } = window.DesignSystem_a63f4f;
  const hooks = [['Гарантия 100 000 км', 'До 1 года или 100 000 км, что наступит раньше. На оборудование и работы'], ['Настраиваем в движении', 'Мастер едет с вами и калибрует под реальной нагрузкой'], ['Сопровождение в ГИБДД', 'Ведём по всей процедуре регистрации — от техэкспертизы до МРЭО']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 32px 0',
      fontFamily: 'var(--font-family)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1280,
      margin: '0 auto',
      borderRadius: 16,
      overflow: 'hidden',
      background: '#1f1f1f'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 40,
      top: 0,
      bottom: 0,
      width: 60,
      background: 'var(--color-primary)',
      transform: 'skewX(-20deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 10,
      top: 0,
      bottom: 0,
      width: 36,
      background: 'var(--color-primary-bright)',
      transform: 'skewX(-20deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -10,
      top: 0,
      bottom: 0,
      width: 22,
      background: 'var(--color-primary-soft)',
      transform: 'skewX(-20deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-grid",
    style: {
      position: 'relative',
      zIndex: 2,
      display: 'grid',
      gridTemplateColumns: 'minmax(420px,1.6fr) minmax(180px,300px)',
      gap: 32,
      alignItems: 'center',
      padding: 40,
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'clamp(26px,3.2vw,52px)',
      fontWeight: 600,
      lineHeight: 1.1,
      margin: '0 0 14px'
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0413\u0411\u041E ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary-bright)'
    }
  }, "\u043E\u0442 4 \u0447\u0430\u0441\u043E\u0432"), /*#__PURE__*/React.createElement("br", null), "\u0432 \u0420\u043E\u0441\u0442\u043E\u0432\u0435-\u043D\u0430-\u0414\u043E\u043D\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.45,
      margin: '0 0 32px',
      color: '#c2c2c2'
    }
  }, "\u043F\u0440\u044F\u043C\u043E\u0439 \u0438 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u0432\u043F\u0440\u044B\u0441\u043A."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta",
    style: {
      display: 'flex',
      gap: 40,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onCta('первый экран')
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#9a9a9a'
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0413\u0411\u041E:"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'clamp(32px,3vw,48px)',
      fontWeight: 700,
      lineHeight: 1.05
    }
  }, "20 321"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#9a9a9a'
    }
  }, "\u043C\u0430\u0448\u0438\u043D \u0443\u0435\u0445\u0430\u043B\u0438 \u043E\u0442 \u043D\u0430\u0441 \u043D\u0430 \u0433\u0430\u0437\u0443")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-photo",
    style: {
      aspectRatio: '4 / 3',
      borderRadius: 16,
      background: '#2e2e2e',
      border: '1px dashed #575757',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 6,
      color: '#8a8a8a',
      textAlign: 'center',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, "\u041C\u0435\u0441\u0442\u043E \u043F\u043E\u0434 \u0444\u043E\u0442\u043E"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\u0431\u043E\u043A\u0441 / \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438")))), /*#__PURE__*/React.createElement("div", {
    className: "hooks-grid",
    style: {
      maxWidth: 1280,
      margin: '-48px auto 0',
      position: 'relative',
      zIndex: 3,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      padding: '0 8px'
    }
  }, hooks.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      opacity: 0,
      transform: 'translateY(10px)',
      animation: `gboHookIn 320ms var(--ease-out) ${i * 60}ms forwards`
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--color-ink)',
      marginBottom: 6
    }
  }, h[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      lineHeight: 1.5
    }
  }, h[1]))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Location.jsx
try { (() => {
function Location() {
  const {
    Button
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const open = window.isOpenNow();
  const photos = ['Фасад с баннером', 'Заезд с ул. Особенная', 'Заезд со шлагбаумом, ул. Оганова'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-cloud)',
      padding: '96px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 40px',
      lineHeight: 1.1
    }
  }, "\u041A\u0430\u043A \u0434\u043E\u0431\u0440\u0430\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement("div", {
    className: "loc-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: 'hidden',
      background: 'var(--color-fog)',
      minHeight: 320,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-graphite)',
      fontSize: 14
    }
  }, "\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043A\u0430\u0440\u0442\u0430 \u0441 \u043C\u0435\u0442\u043A\u043E\u0439"), /*#__PURE__*/React.createElement("div", {
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
  }, "\u0441 \u0443\u043B\u0438\u0446\u044B \u041E\u0441\u043E\u0431\u0435\u043D\u043D\u0430\u044F")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)'
    }
  }, "\u0412\u0442\u043E\u0440\u043E\u0439 \u0437\u0430\u0435\u0437\u0434"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--color-ink)'
    }
  }, "\u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0448\u043B\u0430\u0433\u0431\u0430\u0443\u043C\u0430, \u0441 \u0443\u043B\u0438\u0446\u044B \u041E\u0433\u0430\u043D\u043E\u0432\u0430")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: open ? 'var(--color-success)' : 'var(--color-danger)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--color-ink)'
    }
  }, "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A \u2013 \u041F\u044F\u0442\u043D\u0438\u0446\u0430, 09:00 \u2013 18:00")), /*#__PURE__*/React.createElement("a", {
    href: C.YANDEX,
    target: "_blank",
    rel: "noreferrer",
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "\u041F\u043E\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442")))), /*#__PURE__*/React.createElement("div", {
    className: "loc-photos",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginBottom: 10
    }
  }, photos.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: 'var(--color-fog)',
      borderRadius: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-graphite)',
      fontSize: 13
    }
  }, "\u0424\u043E\u0442\u043E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-ink)',
      marginTop: 8,
      textAlign: 'center'
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "loc-lounge",
    style: {
      background: '#fff',
      borderRadius: 16,
      boxShadow: 'var(--shadow-soft)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-fog)',
      minHeight: 280,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-graphite)',
      fontSize: 13
    }
  }, "\u0424\u043E\u0442\u043E \u0437\u043E\u043D\u044B \u043E\u0442\u0434\u044B\u0445\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 16px'
    }
  }, "\u041F\u043E\u043A\u0430 \u043C\u0430\u0448\u0438\u043D\u0430 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u2014 \u0435\u0441\u0442\u044C \u0437\u043E\u043D\u0430 \u043E\u0442\u0434\u044B\u0445\u0430"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: 'var(--color-charcoal)',
      margin: 0,
      lineHeight: 1.45
    }
  }, "\u041D\u0430 \u0432\u0442\u043E\u0440\u043E\u043C \u044D\u0442\u0430\u0436\u0435 \u2014 \u0441\u0432\u043E\u044F \u0437\u043E\u043D\u0430 \u043E\u0442\u0434\u044B\u0445\u0430: \u0434\u0438\u0432\u0430\u043D\u044B, \u043D\u0430\u0440\u0434\u044B, \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440, \u043A\u0443\u043B\u0435\u0440, \u043A\u043E\u0444\u0435 \u0438 Wi-Fi. \u0422\u0438\u0445\u043E \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E: \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0438\u043B\u0438 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0436\u0434\u0430\u0442\u044C.")))));
}
window.Location = Location;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Location.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Popup.jsx
try { (() => {
function Popup({
  source,
  onClose
}) {
  const {
    Input,
    Button,
    MessengerButton
  } = window.DesignSystem_a63f4f;
  const C = window.GBO_CONFIG;
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('+7');
  const [sent, setSent] = React.useState(false);
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
      fontFamily: 'var(--font-family)',
      opacity: shown ? 1 : 0,
      transition: 'opacity var(--dur-modal) var(--ease-out)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 420,
      background: '#fff',
      borderRadius: 16,
      boxShadow: 'var(--shadow-modal)',
      padding: 32,
      transformOrigin: 'center',
      transform: shown ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(8px)',
      opacity: shown ? 1 : 0,
      transition: 'transform var(--dur-modal) var(--ease-out), opacity var(--dur-modal) var(--ease-out)'
    },
    onClick: e => e.stopPropagation()
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--color-ink)',
      marginBottom: 8
    }
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)'
    }
  }, "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A: ", source)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 8px'
    }
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--color-charcoal)',
      margin: '0 0 4px'
    }
  }, "\u041C\u044B \u0441 \u0432\u0430\u043C\u0438 \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      margin: '0 0 20px'
    }
  }, "\u041E\u0442\u0432\u0435\u0442\u0438\u043C \u0447\u0435\u0440\u0435\u0437 10\u201315 \u043C\u0438\u043D\u0443\u0442"), /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement(Button, {
    variant: ready ? 'primary' : 'muted',
    fullWidth: true,
    disabled: !ready,
    onClick: () => setSent(true)
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443")), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(MessengerButton, {
    type: "telegram",
    href: 'https://t.me/share/url?url=&text=' + msg
  }), /*#__PURE__*/React.createElement(MessengerButton, {
    type: "whatsapp",
    href: 'https://wa.me/79381470590?text=' + msg
  }), /*#__PURE__*/React.createElement(MessengerButton, {
    type: "max",
    href: "#"
  }))));
}
window.Popup = Popup;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Popup.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/RepairBrands.jsx
try { (() => {
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
      padding: '96px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 20px',
      lineHeight: 1.1,
      textAlign: 'center'
    }
  }, "\u0421\u0442\u0430\u0432\u0438\u043B\u0438 \u0413\u0411\u041E \u043D\u0435 \u0443 \u043D\u0430\u0441?", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)',
      whiteSpace: 'nowrap'
    }
  }, "\u0412\u0441\u0435 \u0440\u0430\u0432\u043D\u043E \u0440\u0430\u0437\u0431\u0435\u0440\u0451\u043C\u0441\u044F.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.45,
      color: 'var(--color-charcoal)',
      margin: '0 auto 12px',
      textAlign: 'center',
      maxWidth: 760
    }
  }, "\u0420\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C\u0441\u044F \u0432 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u0440\u043A\u0438 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F: \u043D\u0430\u0445\u043E\u0434\u0438\u043C \u043F\u0440\u0438\u0447\u0438\u043D\u0443, \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u043C \u0438 \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C \u043D\u0443\u0436\u043D\u044B\u0435 \u0437\u0430\u043F\u0447\u0430\u0441\u0442\u0438, \u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C \u0432 \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 32px',
      textAlign: 'center'
    }
  }, "\u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F, \u0435\u0441\u043B\u0438 \u0440\u0435\u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u0442\u0435\u0441\u044C \u0443 \u043D\u0430\u0441."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      marginBottom: 12,
      textAlign: 'center'
    }
  }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'center',
      marginBottom: 12
    }
  }, brands.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      background: '#fff',
      borderRadius: 9999,
      border: '1px solid var(--color-hairline)',
      padding: '12px 22px',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--color-charcoal)'
    }
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-graphite)',
      textAlign: 'center',
      marginBottom: 32
    }
  }, "\u041B\u043E\u0433\u043E\u0442\u0438\u043F\u043E\u0432 \u0431\u0440\u0435\u043D\u0434\u043E\u0432 \u043D\u0435\u0442 \u0432 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430\u0445 \u2014 \u0441\u0442\u043E\u044F\u0442 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0435 \u043F\u043B\u0430\u0448\u043A\u0438"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    fullWidth: true,
    onClick: () => onCta('ремонт ГБО')
  }, "\u041F\u0440\u0438\u0435\u0445\u0430\u0442\u044C \u043D\u0430 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443")));
}
window.RepairBrands = RepairBrands;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/RepairBrands.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Team.jsx
try { (() => {
function Team() {
  const {
    Placeholder
  } = window.DesignSystem_a63f4f;
  const roles = [['Мастер по подкапотной части', 'Электроника, редуктор, форсунки, магистрали'], ['Мастер по баллонам и заправочным устройствам', 'Монтаж баллона по нормам безопасности, установка ВЗУ'], ['Диагност-настройщик', 'Настройка газовой карты в движении, диагностика неисправностей'], ['Мастер по нестандартным установкам', 'Машины, под которые нет готовых решений'], ['Мастер по распространённым машинам', 'Массовые модели — отработанный поток, отсюда и 4 часа'], ['Слесарь', 'Сопутствующие слесарные работы']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '96px 32px',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(26px,3vw,40px)',
      fontWeight: 600,
      textAlign: 'center',
      color: 'var(--color-ink)',
      margin: '0 0 12px',
      lineHeight: 1.15,
      textWrap: 'balance'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "14 \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432"), ". \u0421\u0440\u0435\u0434\u043D\u0438\u0439 \u0441\u0442\u0430\u0436 \u0431\u043E\u043B\u044C\u0448\u0435 \u0434\u0435\u0441\u044F\u0442\u0438 \u043B\u0435\u0442"), /*#__PURE__*/React.createElement("p", {
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
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, roles.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(Placeholder, {
    label: "\u0424\u043E\u0442\u043E \u043C\u0430\u0441\u0442\u0435\u0440\u0430",
    aspect: "4 / 5"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '16px 0 4px'
    }
  }, r[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-graphite)',
      lineHeight: 1.5,
      marginBottom: 12
    }
  }, r[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--color-graphite)',
      background: 'var(--color-cloud)',
      borderRadius: 8,
      padding: '8px 12px'
    }
  }, "\u0418\u043C\u044F, \u043F\u043E\u0440\u0442\u0440\u0435\u0442 \u0438 \u0441\u0442\u0430\u0436 \u2014 \u0437\u0430\u0433\u043B\u0443\u0448\u043A\u0430, \u0436\u0434\u0451\u043C \u043E\u0442 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430. \u041B\u0438\u0447\u043D\u044B\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u043C\u0430\u0441\u0442\u0435\u0440\u0430 \u2014 \u0441\u044E\u0434\u0430 \u0436\u0435"))))));
}
window.Team = Team;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Team.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/config.js
try { (() => {
window.GBO_CONFIG = {
  K_RASHOD: 1.15,
  GAS_PRICE: 31,
  PETROL_PRICE_DEFAULT: 80,
  ENGINES: [{
    id: 'do_150',
    label: 'до 150 л.с.',
    cost: 80000
  }, {
    id: '6_cil',
    label: '6 цилиндров',
    cost: 107500
  }, {
    id: '8_cil',
    label: '8 цилиндров',
    cost: 135000
  }],
  PHONE_GBO: '+7 (938) 147-05-90',
  PHONE_CLIMATE: '+7 (929) 818-19-99',
  ADDRESS: 'Ростов-на-Дону, Минеральная улица, 16',
  YANDEX: 'https://yandex.com/maps/-/CThvaEZm',
  MESSENGER_TEXTS: {
    'первый экран': 'Здравствуйте! Хочу установить ГБО. Машина — , год — . Подскажите, сколько будет стоить и сколько займёт по времени?',
    'калькулятор': 'Здравствуйте! Посчитал на сайте экономию. Подскажите, сколько будет стоить установка ГБО на мою машину — , год — ?',
    'ремонт ГБО': 'Здравствуйте! У меня уже стоит газ, но работает плохо. Машина — , оборудование — . Можно приехать на диагностику?',
    'автопарки': 'Здравствуйте! Интересует обслуживание автопарка. Хочу обсудить условия.',
    'форма записи': 'Здравствуйте! Хочу записаться на установку ГБО. Машина — , год — .'
  }
};
window.formatPhone = function (raw) {
  let d = String(raw).replace(/\D/g, '');
  if (d.startsWith('7')) d = d.slice(1);
  if (d.startsWith('8')) d = d.slice(1);
  d = d.slice(0, 10);
  let out = '+7';
  if (d.length > 0) out += ' (' + d.slice(0, 3);
  if (d.length >= 3) out += ')';
  if (d.length > 3) out += ' ' + d.slice(3, 6);
  if (d.length > 6) out += '-' + d.slice(6, 8);
  if (d.length > 8) out += '-' + d.slice(8, 10);
  return out;
};
window.phoneComplete = function (v) {
  return String(v).replace(/\D/g, '').length >= 11;
};
window.isOpenNow = function () {
  const now = new Date();
  const msk = new Date(now.getTime() + (now.getTimezoneOffset() + 180) * 60000);
  const day = msk.getDay(),
    h = msk.getHours();
  return day >= 1 && day <= 5 && h >= 9 && h < 18;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/config.js", error: String((e && e.message) || e) }); }

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
