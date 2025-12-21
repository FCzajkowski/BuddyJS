export function initEvents(root) {
  const events = ['click', 'input', 'change'];
  for (const event of events) {
    root.addEventListener(event, (e) => {
      let target = e.target;
      while (target && target !== root) {
        if (target._handlers && target._handlers[e.type]) {
          target._handlers[e.type](e);
          break;
        }
        target = target.parentElement;
      }
    });
  }
}

// Minimal API to add/remove event handlers to elements
export function addEvent(el, type, handler) {
  el._handlers = el._handlers || {};
  el._handlers[type] = handler;
}

export function removeEvent(el, type) {
  if (el._handlers) {
    delete el._handlers[type];
  }
}
