# BuddyJS - http

## Overview

The `http` module in BuddyJS provides a lightweight HTTP client for making API requests. It supports GET, POST, PUT, DELETE methods and allows you to add request interceptors for custom logic (e.g., authentication headers).

### Key Functions
- `get(url, options)`: Sends a GET request.
- `post(url, body, options)`: Sends a POST request with a JSON body.
- `put(url, body, options)`: Sends a PUT request with a JSON body.
- `del(url, options)`: Sends a DELETE request.
- `use(fn)`: Adds a request interceptor function.

## Examples

### Basic GET Request
```js
import { get } from './src/http.js';

get('/api/data').then(data => {
	console.log(data);
});
```

### POST Request with Body
```js
import { post } from './src/http.js';

post('/api/data', { foo: 'bar' }).then(response => {
	console.log(response);
});
```

### Using Interceptors
```js
import { use } from './src/http.js';

use(req => {
	req.headers['Authorization'] = 'Bearer token';
	return req;
});
```
