# BuddyJS - reactive

## Overview

The `reactive` module provides a simple reactivity system for BuddyJS. It allows you to create reactive state objects and subscribe to changes, enabling automatic UI updates when state changes. It also includes a `useState` hook for functional components.

### Key Functions
- `reactive(initialState)`: Creates a reactive state object. Subscribers are notified on changes.
- `useState(initialValue)`: Returns a getter, setter, and subscribe function for managing local state in components.

## Examples

### Using reactive
```js
import { reactive } from './src/reactive.js';

const state = reactive({ count: 0 });
state.subscribe(() => {
	console.log('State changed:', state.count);
});
state.count++;
```

### Using useState
```js
import { useState } from './src/reactive.js';

const [getCount, setCount, subscribe] = useState(0);
subscribe((val) => console.log('Count is now', val));
setCount(5);
```
