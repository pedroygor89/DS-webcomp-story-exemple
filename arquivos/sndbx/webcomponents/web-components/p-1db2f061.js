let t,e,n=!1,l=!1,s=!1,o=!1,r=!1;const c="undefined"!=typeof window?window:{},i=c.document||{head:{}},a=c.HTMLElement||class{},f={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},u=t=>Promise.resolve(t),d=(t,e,n)=>{n&&n.map((([n,l,s])=>{const o=m(t,n),r=$(e,s),c=h(n);f.ael(o,l,r,c),(e.o=e.o||[]).push((()=>f.rel(o,l,r,c)))}))},$=(t,e)=>n=>{try{256&t.t?t.i[e](n):(t.u=t.u||[]).push([e,n])}catch(t){ct(t)}},m=(t,e)=>8&e?c:16&e?i.body:t,h=t=>0!=(2&t),b={},p=t=>"object"==(t=typeof t)||"function"===t,y=(t,e,...n)=>{let l=null,s=null,o=!1,r=!1;const c=[],i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!p(l))&&(l+=""),o&&r?c[c.length-1].$+=l:c.push(o?w(null,l):l),r=o)};if(i(n),e){e.name&&(s=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter((e=>t[e])).join(" "))}}const a=w(t,null);return a.m=e,c.length>0&&(a.h=c),a.p=s,a},w=(t,e)=>({t:0,g:t,$:e,v:null,h:null,m:null,p:null}),g={},v=(t,e,n,l,s,o)=>{if(n!==l){let r=rt(t,e),i=e.toLowerCase();if("class"===e){const e=t.classList,s=O(n),o=O(l);e.remove(...s.filter((t=>t&&!o.includes(t)))),e.add(...o.filter((t=>t&&!s.includes(t))))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("ref"===e)l&&l(t);else if(r||"o"!==e[0]||"n"!==e[1]){const c=p(l);if((r||c&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{const s=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(t){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!r||4&o||s)&&!c&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):rt(c,i)?i.slice(2):i[2]+e.slice(3),n&&f.rel(t,e,n,!1),l&&f.ael(t,e,l,!1)}},j=/\s/,O=t=>t?t.split(j):[],R=(t,e,n,l)=>{const s=11===e.v.nodeType&&e.v.host?e.v.host:e.v,o=t&&t.m||b,r=e.m||b;for(l in o)l in r||v(s,l,o[l],void 0,n,e.t);for(l in r)v(s,l,o[l],r[l],n,e.t)},k=(l,r,c)=>{const a=r.h[c];let f,u,d,$=0;if(n||(s=!0,"slot"===a.g&&(a.t|=a.h?2:1)),null!==a.$)f=a.v=i.createTextNode(a.$);else if(1&a.t)f=a.v=i.createTextNode("");else{if(o||(o="svg"===a.g),f=a.v=i.createElementNS(o?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&a.t?"slot-fb":a.g),o&&"foreignObject"===a.g&&(o=!1),R(null,a,o),a.h)for($=0;$<a.h.length;++$)u=k(l,a,$),u&&f.appendChild(u);"svg"===a.g?o=!1:"foreignObject"===f.tagName&&(o=!0)}return f["s-hn"]=e,3&a.t&&(f["s-sr"]=!0,f["s-cr"]=t,f["s-sn"]=a.p||"",d=l&&l.h&&l.h[c],d&&d.g===a.g&&l.v&&M(l.v,!1)),f},M=(t,n)=>{f.t|=1;const l=t.childNodes;for(let t=l.length-1;t>=0;t--){const o=l[t];o["s-hn"]!==e&&o["s-ol"]&&(N(o).insertBefore(o,x(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),n&&M(o,n)}f.t&=-2},L=(t,e,n,l,s,o)=>{let r,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(;s<=o;++s)l[s]&&(r=k(null,n,s),r&&(l[s].v=r,c.insertBefore(r,x(e))))},P=(t,e,n,s,o)=>{for(;e<=n;++e)(s=t[e])&&(o=s.v,D(s),l=!0,o["s-ol"]?o["s-ol"].remove():M(o,!0),o.remove())},T=(t,e)=>t.g===e.g&&("slot"!==t.g||t.p===e.p),x=t=>t&&t["s-ol"]||t,N=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,C=(t,e)=>{const n=e.v=t.v,l=t.h,s=e.h,r=e.g,c=e.$;let i;null===c?(o="svg"===r||"foreignObject"!==r&&o,"slot"===r||R(t,e,o),null!==l&&null!==s?((t,e,n,l)=>{let s,o=0,r=0,c=e.length-1,i=e[0],a=e[c],f=l.length-1,u=l[0],d=l[f];for(;o<=c&&r<=f;)null==i?i=e[++o]:null==a?a=e[--c]:null==u?u=l[++r]:null==d?d=l[--f]:T(i,u)?(C(i,u),i=e[++o],u=l[++r]):T(a,d)?(C(a,d),a=e[--c],d=l[--f]):T(i,d)?("slot"!==i.g&&"slot"!==d.g||M(i.v.parentNode,!1),C(i,d),t.insertBefore(i.v,a.v.nextSibling),i=e[++o],d=l[--f]):T(a,u)?("slot"!==i.g&&"slot"!==d.g||M(a.v.parentNode,!1),C(a,u),t.insertBefore(a.v,i.v),a=e[--c],u=l[++r]):(s=k(e&&e[r],n,r),u=l[++r],s&&N(i.v).insertBefore(s,x(i.v)));o>c?L(t,null==l[f+1]?null:l[f+1].v,n,l,r,f):r>f&&P(e,o,c)})(n,l,e,s):null!==s?(null!==t.$&&(n.textContent=""),L(n,null,e,s,0,s.length-1)):null!==l&&P(l,0,l.length-1),o&&"svg"===r&&(o=!1)):(i=n["s-cr"])?i.parentNode.textContent=c:t.$!==c&&(n.data=c)},E=t=>{const e=t.childNodes;let n,l,s,o,r,c;for(l=0,s=e.length;l<s;l++)if(n=e[l],1===n.nodeType){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,o=0;o<s;o++)if(c=e[o].nodeType,e[o]["s-hn"]!==n["s-hn"]||""!==r){if(1===c&&r===e[o].getAttribute("slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==e[o].textContent.trim()){n.hidden=!0;break}E(n)}},U=[],W=t=>{let e,n,s,o,r,c,i=0;const a=t.childNodes,f=a.length;for(;i<f;i++){if(e=a[i],e["s-sr"]&&(n=e["s-cr"])&&n.parentNode)for(s=n.parentNode.childNodes,o=e["s-sn"],c=s.length-1;c>=0;c--)n=s[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(A(n,o)?(r=U.find((t=>t.j===n)),l=!0,n["s-sn"]=n["s-sn"]||o,r?r.O=e:U.push({O:e,j:n}),n["s-sr"]&&U.map((t=>{A(t.j,n["s-sn"])&&(r=U.find((t=>t.j===n)),r&&!t.O&&(t.O=r.O))}))):U.some((t=>t.j===n))||U.push({j:n}));1===e.nodeType&&W(e)}},A=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,D=t=>{t.m&&t.m.ref&&t.m.ref(null),t.h&&t.h.map(D)},F=t=>lt(t).R,q=(t,e,n)=>{const l=F(t);return{emit:t=>H(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},H=(t,e,n)=>{const l=f.ce(e,n);return t.dispatchEvent(l),l},V=(t,e)=>{e&&!t.k&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.k=e)))},_=(t,e)=>{if(t.t|=16,!(4&t.t))return V(t,t.M),bt((()=>z(t,e)));t.t|=512},z=(t,e)=>{const n=t.i;let l;return e&&(t.t|=256,t.u&&(t.u.map((([t,e])=>K(n,t,e))),t.u=null),l=K(n,"componentWillLoad")),l=Q(l,(()=>K(n,"componentWillRender"))),Q(l,(()=>B(t,n)))},B=async(t,e)=>{const n=t.R,l=n["s-rc"];G(t,e),l&&(l.map((t=>t())),n["s-rc"]=void 0);{const e=n["s-p"],l=()=>I(t);0===e.length?l():(Promise.all(e).then(l),t.t|=4,e.length=0)}},G=(o,r)=>{try{r=r.render&&r.render(),o.t&=-17,o.t|=2,((o,r)=>{const c=o.R,a=o.L,u=o.P||w(null,null),d=(t=>t&&t.g===g)(r)?r:y(null,null,r);if(e=c.tagName,a.T&&(d.m=d.m||{},a.T.map((([t,e])=>d.m[e]=c[t]))),d.g=null,d.t|=4,o.P=d,d.v=u.v=c,t=c["s-cr"],n=0!=(1&a.t),l=!1,C(u,d),f.t|=1,s){let t,e,n,l,s,o;W(d.v);let r=0;for(;r<U.length;r++)t=U[r],e=t.j,e["s-ol"]||(n=i.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(r=0;r<U.length;r++)if(t=U[r],e=t.j,t.O){for(l=t.O.parentNode,s=t.O.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(o=n["s-nr"],o&&o["s-sn"]===e["s-sn"]&&l===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&l!==e.parentNode||e.nextSibling!==s)&&e!==s&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,s))}else 1===e.nodeType&&(e.hidden=!0)}l&&E(d.v),f.t&=-2,U.length=0})(o,r)}catch(t){ct(t,o.R)}return null},I=t=>{const e=t.R,n=t.i,l=t.M;K(n,"componentDidRender"),64&t.t||(t.t|=64,S(e),K(n,"componentDidLoad"),t.N(e),l||J()),t.C(e),t.k&&(t.k(),t.k=void 0),512&t.t&&ht((()=>_(t,!1))),t.t&=-517},J=()=>{S(i.documentElement),ht((()=>H(c,"appload",{detail:{namespace:"web-components"}})))},K=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){ct(t)}},Q=(t,e)=>t&&t.then?t.then(e):e(),S=t=>t.classList.add("hydrated"),X=(t,e,n)=>{if(e.U){t.watchers&&(e.W=t.watchers);const l=Object.entries(e.U),s=t.prototype;if(l.map((([t,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,t,{get(){return((t,e)=>lt(this).A.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=lt(t),o=s.R,r=s.A.get(e),c=s.t,i=s.i;if(n=((t,e)=>null==t||p(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?t+"":t)(n,l.U[e][0]),(!(8&c)||void 0===r)&&n!==r&&(!Number.isNaN(r)||!Number.isNaN(n))&&(s.A.set(e,n),i)){if(l.W&&128&c){const t=l.W[e];t&&t.map((t=>{try{i[t](n,r,e)}catch(t){ct(t,o)}}))}2==(18&c)&&_(s,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,t,{value(...e){const n=lt(this);return n.D.then((()=>n.i[t](...e)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,l){f.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e))l=this[e],delete this[e];else if(s.hasOwnProperty(e)&&"number"==typeof this[e]&&this[e]==l)return;this[e]=(null!==l||"boolean"!=typeof this[e])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,l])=>{const s=l[1]||t;return n.set(s,t),512&l[0]&&e.T.push([t,s]),s}))}}return t},Y=t=>{const e=t["s-cr"]=i.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)},Z=t=>{const e=t.cloneNode;t.cloneNode=function(t){const n=this,l=e.call(n,!1);if(t){let t,e,s=0;const o=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;s<n.childNodes.length;s++)t=n.childNodes[s]["s-nr"],e=o.every((t=>!n.childNodes[s][t])),t&&l.appendChild(t.cloneNode(!0)),e&&l.appendChild(n.childNodes[s].cloneNode(!0))}return l}},tt=(t,e={})=>{const n=[],l=e.exclude||[],s=c.customElements,o=i.head,r=o.querySelector("meta[charset]"),a=i.createElement("style"),u=[];let $,m=!0;Object.assign(f,e),f.l=new URL(e.resourcesUrl||"./",i.baseURI).href,t.map((t=>{t[1].map((e=>{const o={t:e[0],F:e[1],U:e[2],q:e[3]};o.U=e[2],o.q=e[3],o.T=[],o.W={};const r=o.F,c=class extends HTMLElement{constructor(t){super(t),ot(t=this,o)}connectedCallback(){$&&(clearTimeout($),$=null),m?u.push(this):f.jmp((()=>(t=>{if(0==(1&f.t)){const e=lt(t),n=e.L,l=()=>{};if(1&e.t)d(t,e,n.q);else{e.t|=1,12&n.t&&Y(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){V(e,e.M=n);break}}n.U&&Object.entries(n.U).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),(async(t,e,n,l,s)=>{if(0==(32&e.t)){if(e.t|=32,(s=at(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.W=s.watchers,X(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(t){ct(t)}e.t&=-9,e.t|=128,t()}const o=e.M,r=()=>_(e,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,e,n)}l()}})(this)))}disconnectedCallback(){f.jmp((()=>(()=>{if(0==(1&f.t)){const t=lt(this);t.o&&(t.o.map((t=>t())),t.o=void 0)}})()))}componentOnReady(){return lt(this).H}};Z(c.prototype),o.V=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,X(c,o,1)))}))})),a.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",a.setAttribute("data-styles",""),o.insertBefore(a,r?r.nextSibling:o.firstChild),m=!1,u.length?u.map((t=>t.connectedCallback())):f.jmp((()=>$=setTimeout(J,30)))},et=t=>{const e=new URL(t,f.l);return e.origin!==c.location.origin?e.href:e.pathname},nt=new WeakMap,lt=t=>nt.get(t),st=(t,e)=>nt.set(e.i=t,e),ot=(t,e)=>{const n={t:0,R:t,L:e,A:new Map};return n.D=new Promise((t=>n.C=t)),n.H=new Promise((t=>n.N=t)),t["s-p"]=[],t["s-rc"]=[],d(t,n,e.q),nt.set(t,n)},rt=(t,e)=>e in t,ct=(t,e)=>(0,console.error)(t,e),it=new Map,at=t=>{const e=t.F.replace(/-/g,"_"),n=t.V,l=it.get(n);return l?l[e]:import(`./${n}.entry.js`).then((t=>(it.set(n,t),t[e])),ct)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},ft=[],ut=[],dt=(t,e)=>n=>{t.push(n),r||(r=!0,e&&4&f.t?ht(mt):f.raf(mt))},$t=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){ct(t)}t.length=0},mt=()=>{$t(ft),$t(ut),(r=ft.length>0)&&f.raf(mt)},ht=t=>u().then(t),bt=dt(ut,!0);export{a as H,g as a,tt as b,q as c,et as d,F as g,y as h,u as p,st as r}