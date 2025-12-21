# BuddyJS - render

## Overview

The `render` module in BuddyJS provides utilities for mounting views to the DOM and rendering lists efficiently. It supports reactive updates by subscribing to state changes.

### Key Functions
- `mount(view, root, state)`: Mounts a view function to a root element and re-renders on state changes.
- `renderList(items, renderItem)`: Renders a list of items using a provided render function.

## Examples

### Mounting a View
```js
import { mount } from './src/render.js';
import { reactive } from './src/reactive.js';

const state = reactive({ count: 0 });
const view = () => {
	const div = document.createElement('div');
	div.textContent = 'Count: ' + state.count;
	return div;
};
mount(view, document.body, state);
state.count++;
```

### Rendering a List
```js
import { renderList } from './src/render.js';

const items = [1, 2, 3];
const ul = document.createElement('ul');
ul.appendChild(renderList(items, (item) => {
	const li = document.createElement('li');
	li.textContent = 'Item ' + item;
	return li;
}));
document.body.appendChild(ul);
```
