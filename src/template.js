export function template(s,...v){
 let h='';
 if(typeof s=="string")h=s;else for(let i=0;i<s.length;i++)h+=s[i]+(v[i]||"");
 h=h.trim();
 const p=new window.DOMParser().parseFromString(h,'text/html').body;
 if(p.children.length==1)return p.firstElementChild;
 if(p.children.length>1){const f=document.createDocumentFragment();for(const c of p.children)f.appendChild(c);return f;}
 return document.createTextNode(h);
}
