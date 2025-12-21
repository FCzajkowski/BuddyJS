
export function createRouter(r,s){const p=()=>{const h=window.location.hash.replace(/^#/,'')||'/';s.path=r[h]?h:'/404'};window.addEventListener('hashchange',p);p();return{navigate:x=>window.location.hash=x}}
