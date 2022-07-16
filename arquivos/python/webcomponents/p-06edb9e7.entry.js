import{r as t,h as s,g as i,c as a,a as e}from"./p-c4393f38.js";const c=class{constructor(s){t(this,s)}animate(){this.content.style.maxHeight=`${this._contentMaxHeight}px`}render(){return s("div",{ref:t=>this.content=t,class:`c-accordion c-accordion--collapse ${this.outline?"c-accordion--outline":""} ${this._active?"c-accordion--active":""}`},s("slot",null))}get element(){return i(this)}},n=class{constructor(s){t(this,s),this.clickCollapse=a(this,"clickCollapse",7),this.onToggle=a(this,"togglepane",7),this._isOpen=!1,this.open=!1}async show(){this._isOpen=!0}async close(){this._isOpen=!1}toggle(){this._isOpen?this.close():this.show(),this.onToggle.emit(this._isOpen),this.animate()}async isOpen(){return this._isOpen}animate(){this.content.className=this._isOpen?"c-accordion__item c-accordion__item--pane u-fade-in":"c-accordion__item c-accordion__item--pane"}render(){const t=this._isOpen?"c-accordion__control--active":"";return s(e,{class:"c-accordion-pane"},s("button",{role:"heading","aria-expanded":this._isOpen.toString(),class:`c-accordion__control ${t}`,onClick:t=>{this.clickCollapse.emit(t),this.toggle()}},s("div",{class:"c-accordion__title"},s("slot",{name:"c-accordion-header"})),s("span",{class:"c-accordion__icon material-icons"},"expand_more")),s("div",{ref:t=>this.content=t,"aria-hidden":!this._isOpen,class:"c-accordion__item c-accordion__item--pane"},s("slot",{name:"c-accordion-content"})))}},o=(t,s)=>{window.dispatchEvent(new CustomEvent(t,s?{detail:s}:null))},r=t=>{if(!t)return t;let s=t;return s=s.replace(/[\n]/giu," "),s=s.replace(/[\r]/giu," "),s=s.replace(/  +/g," "),s},h=t=>{if(!t)return t;let s=t.toLowerCase();return s=s.replace(/[áàãâä]/giu,"a"),s=s.replace(/[éèêë]/giu,"e"),s=s.replace(/[íìîï]/giu,"i"),s=s.replace(/[óòõôö]/giu,"o"),s=s.replace(/[úùûü]/giu,"u"),s=s.replace(/[ç]/giu,"c"),s=s.replace(/[ñ]/giu,"n"),r(s)},l={apresentacao:"Apresentação",atividade:"Atividade",conclusao:"Conclusão",introducao:"Introdução"},d=["#comment","#text","SCRIPT","STYLE","IFRAME","HR","svg","path","g","math","mi","mo","mrow","mfrac","msqrt","msup","mn"],u=class{constructor(s){t(this,s),this.open=!1,this.term="",this.hasSearch=!1,this.actualFoundItemPosition=-1,this.cacheDbId="data-cache-id",this.termFoundClass="c-search-found-item",this.termFoundResultClass="c-search-found-result-item"}reset(){var t,s;(null===(t=this.term)||void 0===t?void 0:t.length)?(null===(s=this.term)||void 0===s?void 0:s.length)>2&&this.handleSubmit({}):(this.hasSearch=!1,this.clearResults())}createCachedDb(){const t=$('p, span:not(.material-icons,.c-video-player__cover-title), strong, i:not(.material-icons), em, h1, h2, h3, h4, h5, h6, li, dt, dd, a:not(.c-button), [slot="card-heading"], [slot="card-subheading"], td, th');for(let s=0;s<t.length;s++)d.includes(t[s].nodeName)||"MJX-"==t[s].nodeName.substring(0,4)||Boolean($(t[s]).parents("yduqs-menu, yduqs-rating, yduqs-modal").length)||$(t[s]).attr(this.cacheDbId,(Math.random()+1).toString(36).substring(2));const s=$(`body *[${this.cacheDbId}]`),i=[];for(let t=0;t<s.length;t++){$(s[t]).html(r($(s[t]).html()));const a=$(s[t]),e=a.clone().contents(),c=e.map((t=>{var s;return"#text"===e[t].nodeName?h(e[t].textContent):(null===(s=e[t].dataset)||void 0===s?void 0:s.cacheId)?Array.from(Array(e[t].outerHTML.length),(()=>"*")).join(""):void 0}));if(c.length>0){const t={cachedId:a.attr(this.cacheDbId),original:a.html(),parsed:Array.from(c).join("")};i.push(t)}}return i}findInDocument(){this.actualFoundItemPosition=-1;let t=h(this.term);if(this.clearResults(),this.hasSearch=!0,""===t)return;const s=this.cachedDb.map((s=>({cachedId:s.cachedId,index:s.parsed.indexOf(t),length:t.length}))).filter((t=>t.index>=0));let i=[];s.forEach(((t,s)=>{var a,e,c,n,o;const r=$(`body *[${this.cacheDbId}="${t.cachedId}"]`),h=null===(a=r.html())||void 0===a?void 0:a.substr(t.index,t.length),d=null===(e=r.closest("[data-page]"))||void 0===e?void 0:e.attr("data-page"),u=null===(c=r.closest("[data-module]"))||void 0===c?void 0:c.attr("data-module"),m=u?isNaN(Number(u))?l[u]||"":`Módulo ${u}`:"",v=null===(n=r.html())||void 0===n?void 0:n.substr(0,t.index),p=t=>`<span class="${t}">${h}</span>`,g=null===(o=r.html())||void 0===o?void 0:o.substr(t.index+h.length);r.html(v+p(this.termFoundClass)+g),i.push({index:s,page:d||"0",locator:m,html:v+p(this.termFoundResultClass)+g})})),this.setResult(i),o("yduqs-search-called",{term:t})}setOpen(t){this.open=t}setTerm(t){this.term=t}handleOpen(){this.setOpen(!0),this.elemInput.focus()}handleClose(){this.setOpen(!1)}clearResults(){var t;this.result=[],this.hasSearch=!1;const s=$(`.${this.termFoundClass}`);for(let a=0;a<s.length;a++)if($(s[a]).is("span")){const e=$(s[a]).parent();var i=null===(t=this.cachedDb.find((t=>t.cachedId===e.attr(this.cacheDbId))))||void 0===t?void 0:t.original;i&&$(e).html(i)}o("yduqs-search-cleaned")}handleClear(){this.setTerm(""),this.clearResults()}handleReset(){this.handleClear(),this.handleClose()}handleInputChange(t){this.setTerm(t.target.value)}setResult(t){this.result=t}navigateOnResults(t){var s=$(`body span.${this.termFoundClass}`);if(this.actualFoundItemPosition=t<0?s.length-1:t>=s.length?0:t,s.eq(this.actualFoundItemPosition)){let t=s.eq(this.actualFoundItemPosition).offset().top;$(window).scrollTop(t-120)}this.handleClose(),o("yduqs-search-navigate",{position:this.actualFoundItemPosition})}handleResultItemClick(t,s){o("yduqs-search-before-navigate",{position:t,page:s}),setTimeout((()=>{this.navigateOnResults(t)}),400)}handleSubmit(t){"submit"===t.type&&t.preventDefault(),this.open?(this.cachedDb||(this.cachedDb=this.createCachedDb()),this.findInDocument()):this.handleOpen()}render(){var t;return s(e,{class:"c-search-bar"},s("form",{class:"c-search-bar-trigger "+(this.open?"opened":""),onSubmit:t=>this.handleSubmit(t)},s("button",{type:"button",class:"c-button c-button__icon-container u-text--small c-search-bar-trigger-back",onClick:()=>this.handleReset()},s("span",{class:"c-button__icon material-icons"},"arrow_back")),s("div",{class:"c-search-bar-trigger-input-container"},s("input",{type:"search",class:"c-search-bar-trigger-input",onInput:t=>this.handleInputChange(t),value:this.term,ref:t=>this.elemInput=t,placeholder:"Pesquisar no tema"}),this.hasSearch&&s("span",{class:"c-button__icon material-icons",onClick:()=>this.handleClear()},"close")),s("button",{type:"submit",class:"c-button c-button__icon-container u-text--small c-search-bar-trigger-btn"},s("span",{class:"c-button__icon material-icons"},"search"))),s("div",{class:"c-search-bar-result "+(this.open?"opened":"")},s("div",{class:"c-search-bar-result-overlay",onClick:()=>this.handleClose()}),s("div",{class:"c-search-bar-result-container"},(null===(t=this.result)||void 0===t?void 0:t.length)>0?s("div",{class:"c-search-bar-result-list"},this.result.map((t=>s("div",{class:"c-search-bar-result-list-item",onClick:()=>this.handleResultItemClick(t.index,t.page)},s("div",{class:"item-breadcrumb"},t.locator),s("div",{innerHTML:t.html}))))):this.hasSearch?s("div",{class:"c-search-bar-result-list-empty"},"Não encontramos nenhum resultado"):s("div",null))))}static get watchers(){return{term:["reset"]}}};export{c as yduqs_accordion,n as yduqs_accordion_pane,u as yduqs_search_bar}