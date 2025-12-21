// template.js
// Enables BuddyJS to use return { <p>...</p> }-like syntax without JSX or React.
// Usage: const view = () => template`<p>Hello</p>`;

import { h } from './elements.js';



// Robust parser for HTML string to DOM element(s)
function parseTag(str) {
  str = str.trim();
  // Remove leading/trailing newlines and excessive indentation
  const lines = str.split('\n');
  if (lines.length > 1) {
    const minIndent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^\s*/)[0].length));
    str = lines.map(l => l.slice(minIndent)).join('');
  }
  // Use DOMParser for robust parsing
  const parser = new window.DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  const body = doc.body;
  if (body.children.length === 1) {
    return body.firstElementChild;
  } else if (body.children.length > 1) {
    // Wrap multiple root elements in a fragment
    const frag = document.createDocumentFragment();
    Array.from(body.children).forEach(child => frag.appendChild(child));
    return frag;
  } else {
    // fallback: text node
    return document.createTextNode(str);
  }
}



// Usage: template`<p>Hello ${name}</p>`
export function template(strings, ...values) {
  // If called as a function, fallback to old behavior
  if (typeof strings === 'string') {
    return parseTag(strings);
  }
  // Called as a tagged template
  let html = '';
  for (let i = 0; i < strings.length; i++) {
    html += strings[i];
    if (i < values.length) html += values[i];
  }
  return parseTag(html);
}
