# BuddyJS - router

## Overview

The `router` module in BuddyJS provides a simple hash-based routing system. It allows you to define routes and navigate between views by updating the URL hash. The router updates the application state based on the current route.

### Key Function
- `createRouter(routes, state)`: Initializes the router with a route map and a state object.

## Examples

### Defining Routes and Using the Router
```js
import { createRouter } from './src/router.js';
import { reactive } from './src/reactive.js';

const state = reactive({ path: '/' });
const routes = {
	'/': 'Home',
	'/about': 'About',
	'/404': 'Not Found'
};
const router = createRouter(routes, state);

// To navigate programmatically:
router.navigate('/about');

// Listen for route changes:
state.subscribe(() => {
	console.log('Current route:', state.path);
});
```
