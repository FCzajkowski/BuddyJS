export function createRouter(routes, state) {
  const navigate = (path) => {
    state.path = path;
    history.pushState(null, '', path);
  };
  window.addEventListener('popstate', () => {
    state.path = location.pathname;
  });
  return { navigate };
}
