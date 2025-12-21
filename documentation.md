# BuddyJS Documentation

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Core Concepts](#core-concepts)
---
- [Source Modules](#source-modules)
- [Styling](#styling)
- [Testing](#testing)
- [Server](#server)
- [Contribution Guidelines](#contribution-guidelines)
- [Code of Conduct](#code-of-conduct)
- [Future Plans](#future-plans)
- [Example Website](#example-website)

---

## Introduction
BuddyJS is an ultra-optimized JavaScript framework for building fast, modern web applications. It is designed to be lightweight, modular, and easy to use, with a focus on simplicity and performance. BuddyJS supports SPA (Single Page Application) development, reactive state, custom components, and more.

---

## Project Structure
```
BuddyJS/
  App.js                # Main application entry point
  CODE_OF_CONDUCT.md    # Contributor Covenant
  CONTRIBUTING.md       # Contribution guidelines
  documentation.md      # Full project documentation
  index.html            # Main HTML entry point
  LICENSE               # Project license
  README.md             # Quick start and overview
  server.js             # Node.js static server
  TODO.md               # Project plans
  public/
    style.css           # Main stylesheet
  src/
    component.js        # Component utilities
    config.js           # Configuration constants
    elements.js         # Element creation utilities
    events.js           # Event handling
    http.js             # HTTP client
    importStyle.js      # Style loader
    reactive.js         # Reactive state
    render.js           # Rendering utilities
    router.js           # SPA router
    template.js         # HTML template parser
  tests/
    router.test.js      # Router unit tests
```

---

## Quick Start
1. Clone the repository:
   ```bash
git clone https://github.com/FCzajkowski/BuddyJS.git
```
2. Run the server:
   ```bash
node server.js
```
3. Open your browser at [http://localhost:8080/](http://localhost:8080/)

---

## Core Concepts
- **Component-based UI**: Build UIs using reusable functions and templates.
- **Reactive State**: Automatic UI updates when state changes.
- **SPA Routing**: Hash-based navigation for single-page apps.
- **Minimal API**: No build step, no JSX, just JavaScript.
- **Style Injection**: Load CSS/SCSS dynamically.
- **Event Handling**: Simple, declarative event system.
- **HTTP Client**: Built-in fetch wrapper with interceptors.

---

## Main Files Overview
### App.js
- Entry point for the app.
- Imports core modules and mounts the main view.
- Example:
  ```js
  import { mount } from './src/render.js';
  import importStyle from './src/importStyle.js';
  import { template } from './src/template.js';
  importStyle('style.css');
  let name = 'BuddyJS User';
  function Home() {
    return template`
      <div class="buddyjs-home">
        <h1>Hello ${name}</h1>
      </div>
    `;
  }
  const root = document.getElementById('app');
  mount(Home, root);
  ```

### index.html
- Main HTML file.
- Contains `<div id="app"></div>` for mounting the app.
- Loads `App.js` as a module.

### server.js
- Node.js static server for development.
- Serves files and applies security headers.
- SPA fallback to `index.html` for unknown routes.

---


## Source Modules

### src/render.js
```javascript
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
```

### src/template.js
```javascript
import { h } from './elements.js';

// Robust parser for HTML string to DOM element(s)
function parseTag(str) {
  str = str.trim();
  const lines = str.split('\n');
  if (lines.length > 1) {
    const minIndent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^\s*/)[0].length));
    str = lines.map(l => l.slice(minIndent)).join('');
  }
  const parser = new window.DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  const body = doc.body;
  if (body.children.length === 1) {
    return body.firstElementChild;
  } else if (body.children.length > 1) {
    const frag = document.createDocumentFragment();
    Array.from(body.children).forEach(child => frag.appendChild(child));
    return frag;
  } else {
    return document.createTextNode(str);
  }
}

export function template(strings, ...values) {
  if (typeof strings === 'string') {
    return parseTag(strings);
  }
  let html = '';
  for (let i = 0; i < strings.length; i++) {
    html += strings[i];
    if (i < values.length) html += values[i];
  }
  return parseTag(html);
}
```

### src/component.js
```javascript
export function ErrorBoundary({ fallback }, childFn) {
  try {
    return childFn();
  } catch (err) {
    if (typeof fallback === 'function') return fallback(err);
    return fallback || null;
  }
}

export function withDevTools(component, name = 'Component') {
  return function(props, ...children) {
    console.debug(`[DevTools] Render: ${name}`, props);
    return component(props, ...children);
  };
}

export function defineComponent(componentFn) {
  return function(props = {}, ...children) {
    return componentFn(props, ...children);
  };
}
```

### src/router.js
```javascript
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
```

### src/reactive.js
```javascript
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
```

### src/events.js
```javascript
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

export function addEvent(el, type, handler) {
  el._handlers = el._handlers || {};
  el._handlers[type] = handler;
}

export function removeEvent(el, type) {
  if (el._handlers) {
    delete el._handlers[type];
  }
}
```

### src/http.js
```javascript
const interceptors = [];

function applyInterceptors(req) {
	return interceptors.reduce((r, fn) => fn(r) || r, req);
}

async function request(method, url, body, options = {}) {
	let req = { method, headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options };
	if (body !== undefined) req.body = JSON.stringify(body);
	req = applyInterceptors(req);
	const res = await fetch(url, req);
	const isJson = res.headers.get('content-type')?.includes('application/json');
	if (!res.ok) {
		const err = isJson ? await res.json() : await res.text();
		throw { status: res.status, error: err };
	}
	return isJson ? res.json() : res.text();
}

export const get = (url, options) => request('GET', url, undefined, options);
export const post = (url, body, options) => request('POST', url, body, options);
export const put = (url, body, options) => request('PUT', url, body, options);
export const del = (url, options) => request('DELETE', url, undefined, options);
export const use = fn => interceptors.push(fn);
```

### src/importStyle.js
```javascript
function importStyle(file) {
  if (!/\.(css|scss)$/.test(file)) throw new Error('Only .css/.scss supported');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/public/' + file.replace(/^.*[\\\/]/, '');
  document.head.appendChild(link);
}

export default importStyle;
```

### src/config.js
```javascript
export const API_URL = 'https://jsonplaceholder.typicode.com';
export const ENV = 'development';
```

---

## Styling
- All styles are in `public/style.css`.
- Uses monospace fonts, dark background, and BuddyJS-specific classes.
- Example:
  ```css
  body {
    background: #111;
    font-family: monospace;
  }
  .buddyjs-home {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  ```

---

## Testing
- Tests are located in `tests/`.
- Example: `router.test.js` tests SPA routing logic.
- Uses simple test functions and state mocks.

---

## Server
- `server.js` is a Node.js static server.
- Serves files with correct MIME types and security headers.
- SPA fallback: unknown routes serve `index.html`.
- Configurable port (default 8080).

---


## Example Website

### index.html
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BuddyJS Example</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="App.js"></script>
</body>
</html>
```

### App.js
```js
import { mount } from './src/render.js';
import importStyle from './src/importStyle.js';
import { template } from './src/template.js';
importStyle('style.css');

let name = 'BuddyJS User';

function Home() {
  return template`
    <div class="buddyjs-home">
      <h1>Hello ${name}</h1>
      <p>Welcome to your BuddyJS-powered website!</p>
    </div>
  `;
}

const root = document.getElementById('app');
mount(Home, root);
```

### style.css
```css
body {
  background: #111;
  font-family: monospace;
  color: #fff;
}
.buddyjs-home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
```

---

For more advanced examples, see the GitHub repository.
