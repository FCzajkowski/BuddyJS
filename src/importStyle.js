
function importStyle(f){if(!/\.(css|scss)$/.test(f))throw Error('Only .css/.scss supported');const l=document.createElement('link');l.rel='stylesheet';l.href='/public/'+f.replace(/^.*[\\\/]/,'');document.head.appendChild(l)}
export default importStyle;
