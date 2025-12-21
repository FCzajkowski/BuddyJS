# BuddyJS - template

## Overview

The `template` module enables BuddyJS to use HTML-like template literals for defining UI views, similar to JSX but without a build step. It parses HTML strings into DOM elements, supporting dynamic values and multiple root elements.

### Key Function
- `template...`: Tagged template function for creating DOM elements from HTML strings and dynamic values.

## Examples

### Basic Usage
```js
import { template } from './src/template.js';

const name = 'BuddyJS';
const view = () => template`<h1>Hello, ${name}!</h1>`;
document.body.appendChild(view());
```

### Multiple Root Elements
```js
const list = template`
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
	</ul>
	<p>Footer</p>
`;
document.body.appendChild(list);
```
