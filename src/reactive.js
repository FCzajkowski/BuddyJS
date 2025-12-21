export function reactive(initialState) {
  const subscribers = [];
  const proxy = new Proxy(initialState, {
    set(target, prop, value) {
      target[prop] = value;
      if (prop !== 'text') {
        subscribers.forEach(fn => fn());
      }
      return true;
    }
  });
  proxy.subscribe = (fn) => subscribers.push(fn);
  return proxy;
}

// useState for functional components
export function useState(initialValue) {
  let value = initialValue;
  const listeners = [];
  function setState(newValue) {
    value = newValue;
    listeners.forEach(fn => fn(value));
  }
  function subscribe(fn) {
    listeners.push(fn);
  }
  return [() => value, setState, subscribe];
}
