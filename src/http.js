
const i=[];
function a(r){return i.reduce((x,f)=>f(x)||x,r)}
async function q(m,u,b,o={}){let r={method:m,headers:{'Content-Type':'application/json',...(o.headers||{})},...o};if(b!==void 0)r.body=JSON.stringify(b);r=a(r);const s=await fetch(u,r),j=s.headers.get('content-type')?.includes('application/json');if(!s.ok){const e=j?await s.json():await s.text();throw{status:s.status,error:e}}return j?s.json():s.text()}
export const get=(u,o)=>q('GET',u,void 0,o),post=(u,b,o)=>q('POST',u,b,o),put=(u,b,o)=>q('PUT',u,b,o),del=(u,o)=>q('DELETE',u,void 0,o),use=f=>i.push(f);
