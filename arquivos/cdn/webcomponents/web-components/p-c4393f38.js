let e,t,n=!1,l=!1,s=!1,o=!1,r=!1;const i="undefined"!=typeof window?window:{},c=i.document||{head:{}},f=i.HTMLElement||class{},a={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},u=e=>Promise.resolve(e),$=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=m(e,n),r=d(t,s),i=h(n);a.ael(o,l,r,i),(t.o=t.o||[]).push((()=>a.rel(o,l,r,i)))}))},d=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){re(e)}},m=(e,t)=>8&t?i:16&t?c.body:e,h=e=>0!=(2&e),b={},p=e=>"object"==(e=typeof e)||"function"===e,y=(e,t,...n)=>{let l=null,s=null,o=!1,r=!1,i=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!p(l))&&(l+=""),o&&r?i[i.length-1].$+=l:i.push(o?w(null,l):l),r=o)};if(c(n),t){t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const f=w(e,null);return f.m=t,i.length>0&&(f.h=i),f.p=s,f},w=(e,t)=>({t:0,g:e,$:t,v:null,h:null,m:null,p:null}),g={},v=(e,t,n,l,s,o)=>{if(n!==l){let r=oe(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,s=O(n),o=O(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const i=p(l);if((r||i&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&o||s)&&!i&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):oe(i,c)?c.slice(2):c[2]+t.slice(3),n&&a.rel(e,t,n,!1),l&&a.ael(e,t,l,!1)}},j=/\s/,O=e=>e?e.split(j):[],k=(e,t,n,l)=>{const s=11===t.v.nodeType&&t.v.host?t.v.host:t.v,o=e&&e.m||b,r=t.m||b;for(l in o)l in r||v(s,l,o[l],void 0,n,t.t);for(l in r)v(s,l,o[l],r[l],n,t.t)},R=(l,r,i)=>{let f,a,u,$=r.h[i],d=0;if(n||(s=!0,"slot"===$.g&&($.t|=$.h?2:1)),null!==$.$)f=$.v=c.createTextNode($.$);else if(1&$.t)f=$.v=c.createTextNode("");else{if(o||(o="svg"===$.g),f=$.v=c.createElementNS(o?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&$.t?"slot-fb":$.g),o&&"foreignObject"===$.g&&(o=!1),k(null,$,o),$.h)for(d=0;d<$.h.length;++d)a=R(l,$,d),a&&f.appendChild(a);"svg"===$.g?o=!1:"foreignObject"===f.tagName&&(o=!0)}return f["s-hn"]=t,3&$.t&&(f["s-sr"]=!0,f["s-cr"]=e,f["s-sn"]=$.p||"",u=l&&l.h&&l.h[i],u&&u.g===$.g&&l.v&&M(l.v,!1)),f},M=(e,n)=>{a.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==t&&o["s-ol"]&&(N(o).insertBefore(o,L(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),n&&M(o,n)}a.t&=-2},P=(e,t,n,l,s,o)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(;s<=o;++s)l[s]&&(r=R(null,n,s),r&&(l[s].v=r,i.insertBefore(r,L(t))))},T=(e,t,n,s,o)=>{for(;t<=n;++t)(s=e[t])&&(o=s.v,F(s),l=!0,o["s-ol"]?o["s-ol"].remove():M(o,!0),o.remove())},x=(e,t)=>e.g===t.g&&("slot"!==e.g||e.p===t.p),L=e=>e&&e["s-ol"]||e,N=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,C=(e,t)=>{const n=t.v=e.v,l=e.h,s=t.h,r=t.g,i=t.$;let c;null===i?(o="svg"===r||"foreignObject"!==r&&o,"slot"===r||k(e,t,o),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,i=t.length-1,c=t[0],f=t[i],a=l.length-1,u=l[0],$=l[a];for(;o<=i&&r<=a;)null==c?c=t[++o]:null==f?f=t[--i]:null==u?u=l[++r]:null==$?$=l[--a]:x(c,u)?(C(c,u),c=t[++o],u=l[++r]):x(f,$)?(C(f,$),f=t[--i],$=l[--a]):x(c,$)?("slot"!==c.g&&"slot"!==$.g||M(c.v.parentNode,!1),C(c,$),e.insertBefore(c.v,f.v.nextSibling),c=t[++o],$=l[--a]):x(f,u)?("slot"!==c.g&&"slot"!==$.g||M(f.v.parentNode,!1),C(f,u),e.insertBefore(f.v,c.v),f=t[--i],u=l[++r]):(s=R(t&&t[r],n,r),u=l[++r],s&&N(c.v).insertBefore(s,L(c.v)));o>i?P(e,null==l[a+1]?null:l[a+1].v,n,l,r,a):r>a&&T(t,o,i)})(n,l,t,s):null!==s?(null!==e.$&&(n.textContent=""),P(n,null,t,s,0,s.length-1)):null!==l&&T(l,0,l.length-1),o&&"svg"===r&&(o=!1)):(c=n["s-cr"])?c.parentNode.textContent=i:e.$!==i&&(n.data=i)},E=e=>{let t,n,l,s,o,r,i=e.childNodes;for(n=0,l=i.length;n<l;n++)if(t=i[n],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<l;s++)if(r=i[s].nodeType,i[s]["s-hn"]!==t["s-hn"]||""!==o){if(1===r&&o===i[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===r||3===r&&""!==i[s].textContent.trim()){t.hidden=!0;break}E(t)}},W=[],A=e=>{let t,n,s,o,r,i,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(s=n.parentNode.childNodes,o=t["s-sn"],i=s.length-1;i>=0;i--)n=s[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(D(n,o)?(r=W.find((e=>e.j===n)),l=!0,n["s-sn"]=n["s-sn"]||o,r?r.O=t:W.push({O:t,j:n}),n["s-sr"]&&W.map((e=>{D(e.j,n["s-sn"])&&(r=W.find((e=>e.j===n)),r&&!e.O&&(e.O=r.O))}))):W.some((e=>e.j===n))||W.push({j:n}));1===t.nodeType&&A(t)}},D=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,F=e=>{e.m&&e.m.ref&&e.m.ref(null),e.h&&e.h.map(F)},U=e=>ne(e).k,q=(e,t,n)=>{const l=U(e);return{emit:e=>H(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},H=(e,t,n)=>{const l=a.ce(t,n);return e.dispatchEvent(l),l},V=(e,t)=>{t&&!e.R&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.R=t)))},_=(e,t)=>{if(e.t|=16,!(4&e.t))return V(e,e.M),he((()=>z(e,t)));e.t|=512},z=(e,t)=>{const n=e.i;let l;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>K(n,e,t))),e.u=null),l=K(n,"componentWillLoad")),l=Q(l,(()=>K(n,"componentWillRender"))),Q(l,(()=>B(e,n)))},B=async(e,t)=>{const n=e.k,l=n["s-rc"];G(e,t),l&&(l.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>I(e);0===t.length?l():(Promise.all(t).then(l),e.t|=4,t.length=0)}},G=(o,r)=>{try{r=r.render&&r.render(),o.t&=-17,o.t|=2,((o,r)=>{const i=o.k,f=o.P,u=o.T||w(null,null),$=(e=>e&&e.g===g)(r)?r:y(null,null,r);if(t=i.tagName,f.L&&($.m=$.m||{},f.L.map((([e,t])=>$.m[t]=i[e]))),$.g=null,$.t|=4,o.T=$,$.v=u.v=i,e=i["s-cr"],n=0!=(1&f.t),l=!1,C(u,$),a.t|=1,s){let e,t,n,l,s,o;A($.v);let r=0;for(;r<W.length;r++)e=W[r],t=e.j,t["s-ol"]||(n=c.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(r=0;r<W.length;r++)if(e=W[r],t=e.j,e.O){for(l=e.O.parentNode,s=e.O.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===t["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}l&&E($.v),a.t&=-2,W.length=0})(o,r)}catch(e){re(e,o.k)}return null},I=e=>{const t=e.k,n=e.i,l=e.M;K(n,"componentDidRender"),64&e.t||(e.t|=64,S(t),K(n,"componentDidLoad"),e.N(t),l||J()),e.C(t),e.R&&(e.R(),e.R=void 0),512&e.t&&me((()=>_(e,!1))),e.t&=-517},J=()=>{S(c.documentElement),me((()=>H(i,"appload",{detail:{namespace:"web-components"}})))},K=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){re(e)}},Q=(e,t)=>e&&e.then?e.then(t):t(),S=e=>e.classList.add("hydrated"),X=(e,t,n)=>{if(t.W){e.watchers&&(t.A=e.watchers);const l=Object.entries(t.W),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>ne(this).D.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=ne(e),o=s.k,r=s.D.get(t),i=s.t,c=s.i;if(n=((e,t)=>null==e||p(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),(!(8&i)||void 0===r)&&n!==r&&(!Number.isNaN(r)||!Number.isNaN(n))&&(s.D.set(t,n),c)){if(l.A&&128&i){const e=l.A[t];e&&e.map((e=>{try{c[e](n,r,t)}catch(e){re(e,o)}}))}2==(18&i)&&_(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=ne(this);return n.F.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){a.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.L.push([e,s]),s}))}}return e},Y=e=>{const t=e["s-cr"]=c.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},Z=e=>{const t=e.cloneNode;e.cloneNode=function(e){const n=this,l=t.call(n,!1);if(e){let e,t,s=0,o=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;s<n.childNodes.length;s++)e=n.childNodes[s]["s-nr"],t=o.every((e=>!n.childNodes[s][e])),e&&l.appendChild(e.cloneNode(!0)),t&&l.appendChild(n.childNodes[s].cloneNode(!0))}return l}},ee=(e,t={})=>{const n=[],l=t.exclude||[],s=i.customElements,o=c.head,r=o.querySelector("meta[charset]"),f=c.createElement("style"),u=[];let d,m=!0;Object.assign(a,t),a.l=new URL(t.resourcesUrl||"./",c.baseURI).href,e.map((e=>{e[1].map((t=>{const o={t:t[0],U:t[1],W:t[2],q:t[3]};o.W=t[2],o.q=t[3],o.L=[],o.A={};const r=o.U,i=class extends HTMLElement{constructor(e){super(e),se(e=this,o)}connectedCallback(){d&&(clearTimeout(d),d=null),m?u.push(this):a.jmp((()=>(e=>{if(0==(1&a.t)){const t=ne(e),n=t.P,l=()=>{};if(1&t.t)$(e,t,n.q);else{t.t|=1,12&n.t&&Y(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){V(t,t.M=n);break}}n.W&&Object.entries(n.W).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){if(t.t|=32,(s=ce(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.A=s.watchers,X(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){re(e)}t.t&=-9,t.t|=128,e()}const o=t.M,r=()=>_(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){a.jmp((()=>(()=>{if(0==(1&a.t)){const e=ne(this);e.o&&(e.o.map((e=>e())),e.o=void 0)}})()))}componentOnReady(){return ne(this).H}};Z(i.prototype),o.V=e[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,X(i,o,1)))}))})),f.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",f.setAttribute("data-styles",""),o.insertBefore(f,r?r.nextSibling:o.firstChild),m=!1,u.length?u.map((e=>e.connectedCallback())):a.jmp((()=>d=setTimeout(J,30)))},te=new WeakMap,ne=e=>te.get(e),le=(e,t)=>te.set(t.i=e,t),se=(e,t)=>{const n={t:0,k:e,P:t,D:new Map};return n.F=new Promise((e=>n.C=e)),n.H=new Promise((e=>n.N=e)),e["s-p"]=[],e["s-rc"]=[],$(e,n,t.q),te.set(e,n)},oe=(e,t)=>t in e,re=(e,t)=>(0,console.error)(e,t),ie=new Map,ce=e=>{const t=e.U.replace(/-/g,"_"),n=e.V,l=ie.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(ie.set(n,e),e[t])),re)},fe=[],ae=[],ue=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&a.t?me(de):a.raf(de))},$e=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){re(e)}e.length=0},de=()=>{$e(fe),$e(ae),(r=fe.length>0)&&a.raf(de)},me=e=>u().then(e),he=ue(ae,!0);export{f as H,g as a,ee as b,q as c,U as g,y as h,u as p,le as r}