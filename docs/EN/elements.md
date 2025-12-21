# BuddyJS - elements

## Overview

The `elements` module provides functions to create and manage DOM elements in BuddyJS. It offers a simple API for creating elements, setting properties, and handling children and events, similar to JSX but without a build step.

### Key Functions
- `h(tag, props, ...children)`: Creates a DOM element with given tag, properties, and children.
- `createElement(tag, props, ...children)`: Alias for `h`.

## Examples

### Creating an Element
```js
import { h } from './src/elements.js';

const button = h('button', { id: 'myBtn', onClick: () => alert('Clicked!') }, 'Click Me');
document.body.appendChild(button);
```

### Using createElement
```js
import { createElement } from './src/elements.js';

const div = createElement('div', { class: 'container' }, 'Hello, World!');
```
