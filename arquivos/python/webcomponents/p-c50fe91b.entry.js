import{r as t,h as i,a as s}from"./p-c4393f38.js";const e=class{constructor(i){t(this,i),this.project_python=!1,this.hideCssClass="c-pager-hide",this.attrSelectorPage="data-page",this.attrSelectorModule="data-module",this.attrSelectorLabel="data-label",this.starterPageIndex=1,this.moduleDictionary={introducao:"Introdução",atividade:"Atividade",conclusao:"Conclusão"},this.labelDictionary={conceito:"Conceito",atividade:"Atividade",teexplico:"Vem que eu te explico!"},this.total=0,this.current=0}_getModulePagination(t,i,s){let e=[];const o=Boolean(null==s?void 0:s.length),a=document.querySelectorAll(o?`[${this.attrSelectorModule}="${t}"][${this.attrSelectorLabel}="${s}"]`:`[${this.attrSelectorModule}="${t}"]:not([${this.attrSelectorLabel}])`);return null==a||a.forEach((t=>{const i=t.getAttribute(this.attrSelectorPage);e.includes(i)||e.push(Number(i))})),e.sort(((t,i)=>t>i?1:t<i?-1:0)),{total:e.length-(o?0:1),atual:e.findIndex((t=>t===i))+(o?1:0)}}_getLabelModule(t,s){return i("div",{class:"c-pager-label-module"},i("span",{class:"c-pager-label-module-text"},t),Boolean(null==s?void 0:s.length)&&i("span",{class:"c-pager-label-module-count"},s))}_getLabel(){const t=$(`[${this.attrSelectorPage}="${this.current}"]`),s=t.attr(this.attrSelectorModule),e=t.attr(this.attrSelectorLabel);let o;if(isNaN(Number(s)))o=i("div",{class:"c-pager-label-container"},this._getLabelModule(this.moduleDictionary[s]||""));else{const a=this._getModulePagination(Number(s),this.current,e);o="YDUQS-MODULE-COVER"===t.get(0).tagName?i("div",{class:"c-pager-label-container"},this._getLabelModule("Módulo",s)):i("div",{class:"c-pager-label-container"},i("div",{class:"c-pager-label-page"},i("span",{class:"c-pager-label-page-text"},this.labelDictionary[e]||this.labelDictionary.conceito),i("span",{class:"c-pager-label-page-count"},i("strong",null,a.atual)," / ",i("strong",null,a.total))),i("div",{class:"c-pager-label-separator"},"|"),this._getLabelModule("Módulo",s))}return o}_goToPage(){window.scrollTo(0,0),this._resetHash(),$(`[${this.attrSelectorPage}]`).addClass(this.hideCssClass),$(`[${this.attrSelectorPage}="${this._getCurrentPage()}"]`).removeClass(this.hideCssClass),this._getCurrentPage()<=this.starterPageIndex?(this.btnPrev.disabled=!0,document.body.classList.contains("project_python")&&(document.querySelector("yduqs-pager").classList.add("d-none"),document.body.classList.add("pager_first_page"))):(this.btnPrev.removeAttribute("disabled"),document.body.classList.contains("project_python")&&(document.querySelector("yduqs-pager").classList.remove("d-none"),document.body.classList.remove("pager_first_page"))),this._getCurrentPage()>=this.total?(this.btnNext.disabled=!0,document.querySelector("yduqs-pager").classList.add("pager_last_page")):(this.btnNext.removeAttribute("disabled"),document.querySelector("yduqs-pager").classList.remove("pager_last_page"))}_setCurrentPage(t){this.current=t<this.starterPageIndex?this.starterPageIndex:t>this.total?this.total:t,document.querySelector("yduqs-pager").setAttribute("current-page",`${this.current}`),document.body.setAttribute("current-page",`${this.current}`)}_getCurrentPage(){return this.current}_init(){const t=document.querySelectorAll(`[${this.attrSelectorPage}]`);let i=0;null==t||t.forEach((t=>{const s=Number(t.getAttribute(this.attrSelectorPage));i=i<s?s:i})),this.total=i,this._setCurrentPage(this.starterPageIndex)}_goToPrev(){this._setCurrentPage(this._getCurrentPage()-1)}_goToNext(){this._setCurrentPage(this._getCurrentPage()+1)}_getPageFromElement(t){var i,s,e,o;const a=(null==t?void 0:t.length)>1&&$(t);let n;return a.attr(this.attrSelectorPage)?n=a.attr(this.attrSelectorPage):(null===(i=a.children(`[${this.attrSelectorPage}]`))||void 0===i?void 0:i.length)>0&&a.children(`[${this.attrSelectorPage}]`).eq(0)?n=null===(e=null===(s=a.children(`[${this.attrSelectorPage}]`))||void 0===s?void 0:s.eq(0))||void 0===e?void 0:e.attr(this.attrSelectorPage):a.closest(`[${this.attrSelectorPage}]`)&&(n=null===(o=a.closest(`[${this.attrSelectorPage}]`))||void 0===o?void 0:o.attr(this.attrSelectorPage)),n}_resetHash(){const t=window.location.hash;if((null==t?void 0:t.length)>1){const i=this._getPageFromElement(t),s=this._getCurrentPage()+1;Number(i)!==s&&(window.location.hash="")}}clickMenuTitleHandler(t){var i;this._setCurrentPage(parseInt(null===(i=t.detail.closest(`[${this.attrSelectorPage}]`))||void 0===i?void 0:i.getAttribute(this.attrSelectorPage)))}componentWillLoad(){document.body.classList.contains("project_python")&&(this.project_python=!0,document.querySelector("#start_class").addEventListener("click",(()=>{this._goToNext()})))}componentDidLoad(){window.addEventListener("yduqs-search-before-navigate",(t=>{var i;this._setCurrentPage(Number((null===(i=t.detail)||void 0===i?void 0:i.page)||this.starterPageIndex))})),window.addEventListener("hashchange",(()=>{var t;const i=(null===(t=window.location.hash)||void 0===t?void 0:t.length)>1&&window.location.hash;if(i){let t=this._getPageFromElement(i);t&&this._setCurrentPage(parseInt(t))}})),$("body").on("click",'a[href^="#"]',(t=>{var i;t.preventDefault();const s=null===(i=t.currentTarget.href)||void 0===i?void 0:i.substring(t.currentTarget.href.indexOf("#"),t.currentTarget.href.length);if(s){let t=this._getPageFromElement(s);t&&this._setCurrentPage(parseInt(t))}window.location.hash==s?window.scrollTo(0,$(window.location.hash).offset().top):window.location.hash=s})),this._init()}render(){return i(s,null,i("div",{class:`c-pager ${this.total<=1?"c-pager-none":""} ${this.project_python&&"python_pager"} `,id:"btnPaginator"},i("div",{class:"container"},i("div",{class:"row align-items-center justify-content-center"},i("div",{class:"col-12 col-md-10 col-lg-8 d-flex"},i("button",{disabled:!0,type:"button",class:"c-button c-button__icon-container c-button__icon-square pager-switch","data-cy":"btn-prev",ref:t=>this.btnPrev=t,onClick:()=>this._goToPrev()},i("span",{class:"c-button__icon material-icons"},"arrow_back")),this._getLabel(),i("button",{type:"button",class:"c-button c-button__icon-container c-button__icon-square pager-switch","data-cy":"btn-next",ref:t=>this.btnNext=t,onClick:()=>this._goToNext()},i("span",{class:"c-button__icon material-icons"},"arrow_forward")))))))}static get watchers(){return{current:["_goToPage"]}}};export{e as yduqs_pager}