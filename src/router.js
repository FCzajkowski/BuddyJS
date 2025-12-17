
export function createRouter(routes, state) {
  const setPath = () => {
    const hash = window.location.hash.replace(/^#/, '') || '/';
    state.path = routes[hash] ? hash : '/404';
  };
  const navigate = (path) => {
    window.location.hash = path;
  };
  window.addEventListener('hashchange', setPath);
  setPath();
  return { navigate };
}
