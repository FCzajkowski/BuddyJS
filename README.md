<div align="center">
  <h1>Buddy.js</h1>
  <p>Buddy JS is an ultra-optimized JavaScript framework designed for building fast, and modern web applications.</p>
  <code style="padding:10px;">git clone https://github.com/FCzajkowski/BuddyJS.git</code>
  <br>
  <br>
  

</div>

| Framework | Minified + Gzipped Size | Initial Load Time |
|-----------|------------------------|-------------------|
| **Buddy.js** | **~5.3 KB** | **~0.3s** |
| Alpine.js | ~15 KB | ~0.5s |
| Vue 3 | ~34 KB | ~0.8s |
| React 18 + ReactDOM | ~44 KB | ~1.0s |
| Angular 17 | ~70-100 KB | ~1.5s |
| AngularJS (1.x) | ~60 KB | ~1.2s |


## 🚀 Quick Start

1. Clone or download this repo  
2. Run `node server.js` (requires Node.js)  
3. Open [http://localhost:8080/](http://localhost:8080/) in your browser


>[!IMPORTANT] 
> Buddy.js is in an early development stage and may contain bugs.  
> Contributions and feedback are welcome!

>[!TIP]
> You can safely delete markdown files & LICENSE

## 🖥️ Example App

Here’s a minimal example of an `App.js` file:

````javascript
import { mount } from './src/render.js';
import { template } from './src/template.js';

let $name = 'BuddyJS';
function Home() {
  return template(`
    <div class="buddyjs-home">
      <h1>${name}</h1>
    </div>
  `);
}

const root = document.getElementById('app');
mount(Home, root);

````


## 📚 Documentation

- Documentation is available in the `documentation.md` file.
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
