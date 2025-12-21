export function reactive(s){const b=[];const p=new Proxy(s,{set(t,k,v){t[k]=v;if(k!=='text')b.forEach(f=>f());return!0}});p.subscribe=f=>b.push(f);return p}
export function useState(v){let a=v,l=[];return[()=>a,n=>{a=n;l.forEach(f=>f(a))},f=>l.push(f)]}
