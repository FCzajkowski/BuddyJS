export function mount(view, root, state) {
  const render = () => {
    root.innerHTML = '';
    root.appendChild(view());
  };
  if (state) {
    state.subscribe(render);
  }
  render();
}
