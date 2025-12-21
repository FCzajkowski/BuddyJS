// HTTP client for buddyJS
// Usage:
// import http from './src/http.js';
// http.get('/api/data').then(data => ...)
// http.post('/api/data', {foo: 'bar'}).then(...)
// http.use((req) => { req.headers['X-Token'] = 'token'; return req; });

const interceptors = [];

function applyInterceptors(req) {
	return interceptors.reduce((r, fn) => fn(r) || r, req);
}

async function request(method, url, body, options = {}) {
	let req = { method, headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }, ...options };
	if (body !== undefined) req.body = JSON.stringify(body);
	req = applyInterceptors(req);
	const res = await fetch(url, req);
	const isJson = res.headers.get('content-type')?.includes('application/json');
	if (!res.ok) {
		const err = isJson ? await res.json() : await res.text();
		throw { status: res.status, error: err };
	}
	return isJson ? res.json() : res.text();
}

export const get = (url, options) => request('GET', url, undefined, options);
export const post = (url, body, options) => request('POST', url, body, options);
export const put = (url, body, options) => request('PUT', url, body, options);
export const del = (url, options) => request('DELETE', url, undefined, options);
export const use = fn => interceptors.push(fn);
