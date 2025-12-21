# BuddyJS - importStyle

## Overview

The `importStyle` module allows you to dynamically load CSS or SCSS files into your BuddyJS application. This is useful for modularizing styles and loading them only when needed.

### Key Function
- `importStyle(file)`: Loads a CSS or SCSS file from the public directory and injects it as a stylesheet.

## Examples

### Importing a CSS File
```js
import importStyle from './src/importStyle.js';

importStyle('main.css'); // Loads /public/main.css
```

### Importing a SCSS File
```js
importStyle('theme.scss'); // Loads /public/theme.scss
```
