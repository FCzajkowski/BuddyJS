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
