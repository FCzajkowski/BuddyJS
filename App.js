import { h } from './src/h.js';
import { reactive } from './src/reactive.js';
import { mount } from './src/render.js';
import { initEvents } from './src/events.js';
import { createRouter } from './src/router.js';
import * as http from './src/http.js'; // Lightweight HTTP client

// Allow importing .css/.scss from public folder in JS
function importStyle(file) {
  if (!/\.(css|scss)$/.test(file)) throw new Error('Only .css/.scss supported');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/public/' + file.replace(/^.*[\\\/]/, '');
  document.head.appendChild(link);
}


// Import styles (uncomment as needed)
importStyle('style.css');
// importStyle('style.scss');

function getHashPath() {
  return window.location.hash.replace(/^#/, '') || '/';
}

const state = reactive({ count: 0, text: '', path: getHashPath(), apiData: null, loading: false, error: null });

const Counter = () => h('div', { class: 'counter-page' },
  h('h1', { class: 'counter-title' }, 'Counter'),
  h('div', { class: 'counter-controls' },
    h('button', { onClick: () => state.count--, class: 'counter-btn' }, '-'),
    h('span', { class: 'counter-value' }, state.count.toString()),
    h('button', { onClick: () => state.count++, class: 'counter-btn' }, '+')
  ),
  state.loading && h('div', { class: 'loading' }, 'Loading...'),
  state.error && h('div', { class: 'error' }, 'Error: ' + state.error)
);

const fetchData = async () => {
  state.loading = true;
  state.error = null;
  try {
    // Example API call (replace URL with your API endpoint)
    state.apiData = await http.get('https://jsonplaceholder.typicode.com/todos/1');
  } catch (e) {
    state.error = e.error || e.status || 'Unknown error';
  } finally {
    state.loading = false;
  }
};

const Home = () => h('div', { class: 'buddyjs-home' },
  h('h1', { class: 'buddyjs-title' },
    h('span', { style: 'color: #fff' }, 'Buddy'),
    h('span', { style: 'color: #FFD600' }, 'JS')
  ),
  state.loading && h('div', { class: 'loading' }, 'Loading...'),
  state.error && h('div', { class: 'error' }, 'Error: ' + state.error)
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