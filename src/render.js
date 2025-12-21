export function mount(v,r,s){const f=()=>{r.innerHTML='';r.appendChild(v())};if(s)s.subscribe(f);f()}
export function renderList(i,f){const g=document.createDocumentFragment();i.forEach((a,b)=>{const e=f(a,b);if(e)g.appendChild(e)});return g}
