// ##############################################
// THIS IS BASIC EXAMPLE OF BUDDYJS USAGE
// FOR MORE COMPLEX EXAMPLES CHECK THE GITHUB REPO
// ##############################################


import { mount } from './src/render.js';
import importStyle from './src/importStyle.js';
import { template } from './src/template.js';
importStyle('style.css');

let name = 'BuddyJS User';

function Home() {
  return template`
    <div class="buddyjs-home">
      <h1>Hello ${name}</h1>
    </div>
  `;
}

const root = document.getElementById('app');
mount(Home, root);
