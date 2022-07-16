import{r as i,c as t,h as s,F as l,a as n}from"./p-3b8a929f.js";const a=class{constructor(s){i(this,s),this.virtualMapPointClick=t(this,"virtualMapPointClick",7),this.error=[],this.step="loading",this.showLines=!0}handlePointsPosition(){var i;this.items.forEach(((i,t)=>{var l,n,a,d;(i.left<0||i.left>(null===(l=this.bgDimensions)||void 0===l?void 0:l.width)||i.top<0||i.top>(null===(n=this.bgDimensions)||void 0===n?void 0:n.height))&&this.setError(s("span",null,"yduqs-virtual-map error: ",s("strong",null,"Item number ",t+1," is outside image area"),". It demands left ",s("strong",null,"0 - ",null===(a=this.bgDimensions)||void 0===a?void 0:a.width)," and top ",s("strong",null,"0 - ",null===(d=this.bgDimensions)||void 0===d?void 0:d.height)," pixels."))})),(null===(i=this.error)||void 0===i?void 0:i.length)||(this.step="loaded")}buildLines(){var i;"loaded"===this.step&&this.showLines&&(null===(i=this.items)||void 0===i||i.forEach(((i,t)=>{var s,l,n,a;if(t>0&&this.bgDimensions){const d=document.createElementNS("http://www.w3.org/2000/svg","line");d.setAttribute("x1",100/(null===(s=this.bgDimensions)||void 0===s?void 0:s.width)*this.items[t-1].left+"%"),d.setAttribute("y1",100/(null===(l=this.bgDimensions)||void 0===l?void 0:l.height)*this.items[t-1].top+"%"),d.setAttribute("x2",100/(null===(n=this.bgDimensions)||void 0===n?void 0:n.width)*i.left+"%"),d.setAttribute("y2",100/(null===(a=this.bgDimensions)||void 0===a?void 0:a.height)*i.top+"%"),d.setAttribute("class",i.active?"active":"disabled"),this.linesElem.appendChild(d)}})))}handlePointClick(i){this.virtualMapPointClick.emit(i)}setError(i){const t=[...this.error,i];this.error=t}calculatePointPosition(i,t){var s,l;return{left:100/(null===(s=this.bgDimensions)||void 0===s?void 0:s.width)*i+"%",top:100/(null===(l=this.bgDimensions)||void 0===l?void 0:l.height)*t+"%"}}async buildBgImage(i){var t;if((null===(t=this.error)||void 0===t?void 0:t.length)>0)return;const l=document.createElement("img");l.classList.add("image"),l.src=i,this.bgElem.appendChild(l),l.onload=()=>{this.bgDimensions={height:l.naturalHeight,width:l.naturalWidth}},l.onerror=()=>{this.setError(s("span",null,"yduqs-virtual-map needs a ",s("strong",null,"valid `background url`"),".")),this.step="loading"}}validateFetchedData(i){i?(i.background||this.setError(s("span",null,"yduqs-virtual-map needs a ",s("strong",null,"valid `background url`"),".")),i.items&&i.items.length||this.setError(s("span",null,"yduqs-virtual-map needs a ",s("strong",null,"valid `items`"),"."))):this.setError(s("span",null,"yduqs-virtual-map needs a ",s("strong",null,"valid `config response`"),"."))}async init(){return await fetch(this.config).then((i=>i.json())).then((i=>{var t;this.validateFetchedData(i),this.items=null===(t=i.items)||void 0===t?void 0:t.map((i=>i)),i.hideLines&&(this.showLines=!1),(null==i?void 0:i.background)&&this.buildBgImage(i.background)})).catch((i=>{this.setError(s("span",null,"Fetched response is invalid:",null==i?void 0:i.toString()))}))}componentWillLoad(){this._id&&this.config?this.init():(this._id||this.setError(s("span",null,"yduqs-virtual-map needs a ",s("strong",null,"valid attribute `id`"),".")),this.config||this.setError(s("span",null,"yduqs-virtual-map needs a ",s("strong",null,"valid attribute `config`"),".")))}async centralize(){const i=document.querySelector(".c-virtual-map-item.actual");return i&&this.hostElem.scroll(i.offsetLeft-this.hostElem.clientWidth/2,0),Promise.resolve()}render(){var i,t,a,d;return s(n,{class:`c-virtual-map ${(null===(i=this.bgElem)||void 0===i?void 0:i.clientWidth)<(null===(t=this.hostElem)||void 0===t?void 0:t.clientWidth)?"centered":""} ${"loading"===this.step?"loading":""}`,ref:i=>this.hostElem=i},s("div",{class:"c-virtual-map-bg",ref:i=>this.bgElem=i},s("svg",{class:"lines",ref:i=>this.linesElem=i}),"loading"!==this.step?s(l,null,this.buildLines(),null===(a=this.items)||void 0===a?void 0:a.map(((i,t)=>s(l,null,s("button",{class:"c-virtual-map-item "+(t+1===this.selected?"actual":""),style:this.calculatePointPosition(i.left,i.top),onClick:()=>this.handlePointClick(i)},t+1))))):s(l,null,"Loading...",(null===(d=this.error)||void 0===d?void 0:d.length)>0&&s("dl",null,s("dt",null,"Errors"),this.error.map((i=>s("dd",null,i)))))))}static get watchers(){return{bgDimensions:["handlePointsPosition"],step:["buildLines"]}}};export{a as yduqs_virtual_map}