# BuddyJS - events

## Overview

The `events` module in BuddyJS provides a minimal and efficient way to handle DOM events. It allows you to initialize event delegation, and add or remove event handlers on elements, making event management simple and scalable.

### Key Functions
- `initEvents(root)`: Sets up event delegation for click, input, and change events on a root element.
- `addEvent(el, type, handler)`: Adds an event handler to an element.
- `removeEvent(el, type)`: Removes an event handler from an element.

## Examples

### Initializing Event Delegation
```js
import { initEvents } from './src/events.js';

initEvents(document.body); // Delegates events for the whole page
```

### Adding and Removing Events
```js
import { addEvent, removeEvent } from './src/events.js';

const btn = document.createElement('button');
addEvent(btn, 'click', () => alert('Button clicked!'));
// ... later
removeEvent(btn, 'click');
```
