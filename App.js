import { h } from './src/h.js';
import { reactive } from './src/reactive.js';
import { mount } from './src/render.js';
import { initEvents } from './src/events.js';
import { createRouter } from './src/router.js';

const state = reactive({ count: 0, text: '', path: '/' });

const Counter = () => h('div', {},
  h('button', { onClick: () => state.count-- }, '-'),
  h('span', {}, state.count.toString()),
  h('button', { onClick: () => state.count++ }, '+')
);

const Home = () => h('div', {},
  h('h1', {}, 'Home'),
  Counter(),
  h('input', { onInput: (e) => state.text = e.target.value, value: state.text }),
  h('p', {}, state.text)
);

const routes = {
  '/': Home,
  '/counter': Counter,
  '/404': () => h('div', {}, '404')
};

const router = createRouter(routes, state);

const view = () => {
  const page = routes[state.path] || routes['/404'];
  return h('div', {},
    h('nav', {},
      h('button', { onClick: () => router.navigate('/') }, 'Home'),
      h('button', { onClick: () => router.navigate('/counter') }, 'Counter')
    ),
    page()
  );
};

const root = document.getElementById('app');
initEvents(root);
mount(view, root, state);