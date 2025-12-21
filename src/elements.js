export function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  if (props) {
    for (const [key, value] of Object.entries(props)) {
      if (key.startsWith('on')) {
        el._handlers = el._handlers || {};
        el._handlers[key.slice(2).toLowerCase()] = value;
      } else {
        el.setAttribute(key, value);
      }
    }
  }
  for (const child of children) {
    if (child === false || child === null || child === undefined) continue;
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  }
  return el;
}

export function createElement(tag, props = {}, ...children) {
  return h(tag, props, ...children);
}