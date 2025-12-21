
# BuddyJS - component

## Overview

The `component` module in BuddyJS provides utilities for defining and enhancing UI components. It includes helpers for error boundaries, development tools, and a simple way to define components with props support.

### Key Functions
- `ErrorBoundary({ fallback }, childFn)`: Catches errors in child components and renders a fallback UI.
- `withDevTools(component, name)`: Wraps a component to log its renders for debugging.
- `defineComponent(componentFn)`: Creates a component function that supports props and children.

## Examples

### ErrorBoundary
```js
import { ErrorBoundary } from './src/component.js';

const fallback = (err) => document.createTextNode('Error: ' + err.message);
const view = () => ErrorBoundary({ fallback }, () => {
	// risky code
	throw new Error('Oops!');
});
```

### withDevTools
```js
import { withDevTools } from './src/component.js';

function MyComponent(props) {
	// ...
}
const DebugComponent = withDevTools(MyComponent, 'MyComponent');
```

### defineComponent
```js
import { defineComponent } from './src/component.js';

const Button = defineComponent((props, ...children) => {
	const btn = document.createElement('button');
	btn.textContent = props.label;
	return btn;
});
```
