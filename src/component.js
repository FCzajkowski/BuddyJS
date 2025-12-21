//  ErrorBoundary component
  export function ErrorBoundary({ fallback }, childFn) {
    try {
      return childFn();
    } catch (err) {
      if (typeof fallback === 'function') return fallback(err);
      return fallback || null;
    }
  }

  // Dev Tool
  export function withDevTools(component, name = 'Component') {
    return function(props, ...children) {
      console.debug(`[DevTools] Render: ${name}`, props);
      return component(props, ...children);
    };
  }
//

// Component definition with props support
export function defineComponent(componentFn) {
  return function(props = {}, ...children) {
    return componentFn(props, ...children);
  };
}
