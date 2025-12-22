// ##############################################
// THIS IS BASIC EXAMPLE OF BUDDY.JS USAGE
// ##############################################

import { mount } from './src/render.js';
import { template } from './src/template.js';
import importStyle from './src/importStyle.js';
importStyle('../style.css');

function Home() {
  return template(`
    <main>
      <h1>
        Buddy<span class="js-yellow">JS</span>
      </h1>
      <p>thank you for choosing BuddyJS :)</p>
      <div class="button-row">
        <button class="main-btn" id="github-btn">Github</button>
        <button class="main-btn" id="socials-btn">Socials</button>
      </div>
    </main>
  `);
}

const root = document.getElementById('app');
mount(Home, root);

const openLink = (url) => {
  window.open(url, '_blank', 'noopener');
}
document.addEventListener('click', (e) => {
  if (e.target.id === 'github-btn') openLink('https://github.com/FCzajkowski/BuddyJS');
  if (e.target.id === 'socials-btn') openLink('https://x.com/f_czajkowski');
});

