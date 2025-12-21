export function initEvents(r){for(const e of['click','input','change'])r.addEventListener(e,t=>{let a=t.target;while(a&&a!==r){if(a._handlers&&a._handlers[t.type]){a._handlers[t.type](t);break}a=a.parentElement}})}
export function addEvent(e,t,h){(e._handlers=e._handlers||{})[t]=h}
export function removeEvent(e,t){if(e._handlers)delete e._handlers[t]}
