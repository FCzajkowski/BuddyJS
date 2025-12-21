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

// Minimal list rendering utility
export function renderList(items, renderItem) {
  const frag = document.createDocumentFragment();
  items.forEach((item, i) => {
    const el = renderItem(item, i);
    if (el) frag.appendChild(el);
  });
  return frag;
}
