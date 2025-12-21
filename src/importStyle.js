// importStyle.js
// Loads a CSS or SCSS file from the public directory and injects it as a stylesheet
function importStyle(file) {
  if (!/\.(css|scss)$/.test(file)) throw new Error('Only .css/.scss supported');
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/public/' + file.replace(/^.*[\\\/]/, '');
  document.head.appendChild(link);
}

export default importStyle;
