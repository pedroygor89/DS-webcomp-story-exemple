const r=(r,e)=>{window.dispatchEvent(new CustomEvent(r,e?{detail:e}:null))},e=r=>{if(!r)return r;let e=r;return e=e.replace(/[\n]/giu," "),e=e.replace(/[\r]/giu," "),e=e.replace(/  +/g," "),e},t=r=>{if(!r)return r;let t=r.toLowerCase();return t=t.replace(/[áàãâä]/giu,"a"),t=t.replace(/[éèêë]/giu,"e"),t=t.replace(/[íìîï]/giu,"i"),t=t.replace(/[óòõôö]/giu,"o"),t=t.replace(/[úùûü]/giu,"u"),t=t.replace(/[ç]/giu,"c"),t=t.replace(/[ñ]/giu,"n"),e(t)},n=(r,e)=>Math.floor(Math.random()*(e-r)+r),u=r=>{try{return window.atob(r.replace("data:image/svg+xml;base64,",""))}catch(r){return console.error("SVG Convert Error",r),""}},a=(r,e)=>{var t=r;for(var n in e)t=t.replace(new RegExp("{"+n+"}","g"),e[n]);return t};export{e as a,u as b,t as c,r as d,n as g,a as r}