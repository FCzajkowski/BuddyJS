---
# BuddyJS Documentation

## Table of Contents
- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Core Concepts](#core-concepts)
- [Main Files Overview](#main-files-overview)
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
- `mount(view, root, state)`: Renders a view into a root element. Subscribes to state changes if provided.
- `renderList(items, renderItem)`: Utility for rendering lists.

### src/template.js
- `template`: Tagged template for HTML parsing. Allows writing HTML in JS without JSX.
- Uses DOMParser for robust parsing.

### src/component.js
- `defineComponent`: Wraps a function to support props and children.
- `ErrorBoundary`: Catches errors in child components.
- `withDevTools`: Logs render info for debugging.

### src/router.js
- `createRouter(routes, state)`: Hash-based SPA router. Updates state on navigation.

### src/reactive.js
- `reactive(initialState)`: Creates a reactive state object with subscribers.
- `useState(initialValue)`: Simple state hook for functional components.

### src/events.js
- `initEvents(root)`: Sets up event listeners for click, input, change.
- `addEvent`, `removeEvent`: Manage event handlers on elements.

### src/elements.js
- `h(tag, props, ...children)`: Creates DOM elements with props and children.
- `createElement`: Alias for `h`.

### src/http.js
- HTTP client with `get`, `post`, `put`, `del` methods.
- Supports interceptors for request modification.

### src/importStyle.js
- Dynamically loads CSS/SCSS files from the public directory.

### src/config.js
- Contains configuration constants (e.g., API_URL, ENV).

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

## Contribution Guidelines
- See `CONTRIBUTING.md` for details.
- Fork, clone, and read the README before contributing.
- Submit bug reports, feature requests, code, docs, or tests.
- Follow coding standards and run tests before submitting changes.

---

## Code of Conduct
- See `CODE_OF_CONDUCT.md` for the full code of conduct.
- Be respectful, inclusive, and constructive.
- No harassment, trolling, or inappropriate behavior.

---

## Future Plans
- Write more documentation
- Build a full website for BuddyJS
- Add more examples and tests
- Improve developer tooling

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
