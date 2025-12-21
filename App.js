// ##############################################
// THIS IS BASIC EXAMPLE OF BUDDYJS USAGE
// FOR MORE COMPLEX EXAMPLES CHECK THE GITHUB REPO
// ##############################################

import { mount } from './src/render.js';
import { createElement, h } from './src/elements.js';

importStyle('style.css');

const Home = () => createElement('div', { class: 'buddyjs-home' },
  createElement('p', {}, 'Hello from BuddyJS!'),
);

const root = document.getElementById('app');
mount(Home, root);
