# BuddyJS

> A lightweight, reactive, hash-based JavaScript SPA micro-framework.

---

## Features
- ⚡ Minimal, fast, and dependency-free
- 🔗 Hash-based routing for static hosting
- 🔄 Reactive state management
- 🌐 Lightweight HTTP client (fetch wrapper)
- 🎨 CSS/SCSS import support
- 🚦 404 fallback
- 🛠️ Simple config
- 🛡️ Security headers (Node.js server)
- 🧪 Unit testable

---

## Quick Start
1. Clone or download this repo
2. Run `node server.js` (requires Node.js)
3. Open [http://localhost:8080/#/counter](http://localhost:8080/#/counter) in your browser

---

## Usage Example

### HTTP Client
```js
import * as http from './src/http.js';
http.get('/api/data').then(data => console.log(data));
http.post('/api/data', {foo: 'bar'}).then(...);
http.use(req => { req.headers['X-Token'] = 'token'; return req; });
```

### Reactive State
```js
import { reactive } from './src/reactive.js';
const state = reactive({ count: 0 });
state.count++;
```

### Component Example
```js
import { h } from './src/h.js';
const Counter = () => h('div', {},
	h('button', { onClick: () => state.count-- }, '-'),
	h('span', {}, state.count),
	h('button', { onClick: () => state.count++ }, '+')
);
```

---

## API Reference

### Routing
- Hash-based: URLs like `/#/counter`
- Define routes in `App.js`:
	```js
	const routes = {
		'/': Home,
		'/counter': Counter,
		'/404': NotFound
	};
	```
- Navigate: `router.navigate('/counter')`
- 404 fallback: unknown routes go to `/404`

### HTTP Client
- `get(url, options)`
- `post(url, body, options)`
- `put(url, body, options)`
- `del(url, options)`
- `use(interceptorFn)`

### State
- `reactive(obj)` returns a reactive proxy
- `state.subscribe(fn)` to rerender on change

### CSS/SCSS Import
- Use `importStyle('style.css')` in JS to load from `public/`

---

## Config
Edit `src/config.js` for API URLs and environment flags:
```js
export const API_URL = 'https://api.example.com';
export const ENV = 'production';
```

---

## Testing
- Add tests in the `tests/` folder
- Example (see `tests/router.test.js`):
```js
import { createRouter } from '../src/router.js';
// ...
```

---

## Security
- Node.js server sets basic security headers (CSP, X-Frame-Options, etc.)

---

## Project Structure
```
App.js
index.html
public/
	style.css
src/
	h.js
	reactive.js
	render.js
	events.js
	router.js
	http.js
	config.js
```

---

## License
MIT
