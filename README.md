<div align="center">
  <h1>BuddyJS</h1>
  <p>Buddy JS is an ultra-optimized JavaScript framework designed for building fast, and modern web applications.</p>
  <code style="padding:10px;">git clone https://github.com/FCzajkowski/BuddyJS.git</code>
  <br>
  <br>
  
</div>

## 🚀 Quick Start

1. Clone or download this repo  
2. Run `node server.js` (requires Node.js)  
3. Open [http://localhost:8080/#/counter](http://localhost:8080/) in your browser


>[!IMPORTANT] 
> BuddyJS is in an early development stage and may contain bugs.  
> Contributions and feedback are welcome!

>[!TIP]
> You can safely delete markdown files & LICENSE

## 🖥️ Example App

Here’s a minimal example of an `App.js` file:

````javascript
import { mount } from './src/render.js';
import { createElement, h } from './src/elements.js';

importStyle('style.css');

const Home = () => createElement('div', { class: 'buddyjs-home' },
  createElement('p', {}, 'Hello from BuddyJS!'),
);

const root = document.getElementById('app');
mount(Home, root);
````


## 📚 Documentation

- Documentation is available in the `DOCS/<LANG>.md` files.
- If your language is missing, you can submit a translation (preferably based on the English docs).


## 🤝 Code of Conduct

Please review the `CODE_OF_CONDUCT.md` before contributing to ensure a welcoming and respectful community.


## 🧪 Tests

- Automated tests are included in the `tests/` directory.
- Run tests with:  
  ```
  npm test
  ```

---
