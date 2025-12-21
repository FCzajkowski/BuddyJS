# BuddyJS - config

## Overview

The `config` module in BuddyJS provides global configuration constants for your application, such as API endpoints and environment settings. These values can be imported and used throughout your project to keep configuration centralized and maintainable.

### Key Exports
- `API_URL`: The base URL for API requests.
- `ENV`: The current environment (e.g., 'development', 'production').

## Examples

### Using API_URL and ENV
```js
import { API_URL, ENV } from './src/config.js';

console.log('API endpoint:', API_URL);
if (ENV === 'development') {
	console.log('Running in development mode');
}
```
