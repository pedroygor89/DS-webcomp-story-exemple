System.register(["./p-aa0e6d07.system.js"],(function(t){"use strict";var e,a,r;return{setters:[function(t){e=t.r;a=t.h;r=t.a}],execute:function(){var o=t("yduqs_pager",function(){function t(t){e(this,t);this.project_python=false;this.hideCssClass="c-pager-hide";this.attrSelectorPage="data-page";this.attrSelectorModule="data-module";this.attrSelectorLabel="data-label";this.starterPageIndex=1;this.moduleDictionary={introducao:"Introdução",atividade:"Atividade",conclusao:"Conclusão"};this.labelDictionary={conceito:"Conceito",atividade:"Atividade",teexplico:"Vem que eu te explico!"};this.total=0;this.current=0}t.prototype._getModulePagination=function(t,e,a){var r=this;var o=[];var n=Boolean(a===null||a===void 0?void 0:a.length);var i=n?"[".concat(this.attrSelectorModule,'="').concat(t,'"][').concat(this.attrSelectorLabel,'="').concat(a,'"]'):"[".concat(this.attrSelectorModule,'="').concat(t,'"]:not([').concat(this.attrSelectorLabel,"])");var c=document.querySelectorAll(i);c===null||c===void 0?void 0:c.forEach((function(t){var e=t.getAttribute(r.attrSelectorPage);if(!o.includes(e)){o.push(Number(e))}}));o.sort((function(t,e){if(t>e){return 1}if(t<e){return-1}return 0}));return{total:o.length-(n?0:1),atual:o.findIndex((function(t){return t===e}))+(n?1:0)}};t.prototype._getLabelModule=function(t,e){return a("div",{class:"c-pager-label-module"},a("span",{class:"c-pager-label-module-text"},t),Boolean(e===null||e===void 0?void 0:e.length)&&a("span",{class:"c-pager-label-module-count"},e))};t.prototype._getLabel=function(){var t=$("[".concat(this.attrSelectorPage,'="').concat(this.current,'"]'));var e=t.attr(this.attrSelectorModule);var r=t.attr(this.attrSelectorLabel);var o;if(isNaN(Number(e))){o=a("div",{class:"c-pager-label-container"},this._getLabelModule(this.moduleDictionary[e]||""))}else{var n=this._getModulePagination(Number(e),this.current,r);if(t.get(0).tagName==="YDUQS-MODULE-COVER"){o=a("div",{class:"c-pager-label-container"},this._getLabelModule("Módulo",e))}else{o=a("div",{class:"c-pager-label-container"},a("div",{class:"c-pager-label-page"},a("span",{class:"c-pager-label-page-text"},this.labelDictionary[r]||this.labelDictionary["conceito"]),a("span",{class:"c-pager-label-page-count"},a("strong",null,n.atual)," / ",a("strong",null,n.total))),a("div",{class:"c-pager-label-separator"},"|"),this._getLabelModule("Módulo",e))}}return o};t.prototype._goToPage=function(){window.scrollTo(0,0);this._resetHash();$("[".concat(this.attrSelectorPage,"]")).addClass(this.hideCssClass);$("[".concat(this.attrSelectorPage,'="').concat(this._getCurrentPage(),'"]')).removeClass(this.hideCssClass);if(this._getCurrentPage()<=this.starterPageIndex){this.btnPrev.disabled=true;if(document.body.classList.contains("project_python")){document.querySelector("yduqs-pager").classList.add("d-none");document.body.classList.add("pager_first_page")}}else{this.btnPrev.removeAttribute("disabled");if(document.body.classList.contains("project_python")){document.querySelector("yduqs-pager").classList.remove("d-none");document.body.classList.remove("pager_first_page")}}if(this._getCurrentPage()>=this.total){document.body.classList.add("pager_last_page");this.btnNext.disabled=true}else{document.body.classList.remove("pager_last_page");this.btnNext.removeAttribute("disabled")}};t.prototype._setCurrentPage=function(t){this.current=t<this.starterPageIndex?this.starterPageIndex:t>this.total?this.total:t;document.querySelector("yduqs-pager").setAttribute("current-page","".concat(this.current));document.body.setAttribute("current-page","".concat(this.current))};t.prototype._getCurrentPage=function(){return this.current};t.prototype._init=function(){var t=this;var e=document.querySelectorAll("[".concat(this.attrSelectorPage,"]"));var a=0;e===null||e===void 0?void 0:e.forEach((function(e){var r=Number(e.getAttribute(t.attrSelectorPage));a=a<r?r:a}));this.total=a;this._setCurrentPage(this.starterPageIndex)};t.prototype._goToPrev=function(){this._setCurrentPage(this._getCurrentPage()-1)};t.prototype._goToNext=function(){this._setCurrentPage(this._getCurrentPage()+1)};t.prototype._getPageFromElement=function(t){var e,a,r,o;var n=(t===null||t===void 0?void 0:t.length)>1&&$(t);var i;if(n.attr(this.attrSelectorPage)){i=n.attr(this.attrSelectorPage)}else if(((e=n.children("[".concat(this.attrSelectorPage,"]")))===null||e===void 0?void 0:e.length)>0&&n.children("[".concat(this.attrSelectorPage,"]")).eq(0)){i=(r=(a=n.children("[".concat(this.attrSelectorPage,"]")))===null||a===void 0?void 0:a.eq(0))===null||r===void 0?void 0:r.attr(this.attrSelectorPage)}else if(n.closest("[".concat(this.attrSelectorPage,"]"))){i=(o=n.closest("[".concat(this.attrSelectorPage,"]")))===null||o===void 0?void 0:o.attr(this.attrSelectorPage)}return i};t.prototype._resetHash=function(){var t=window.location.hash;if((t===null||t===void 0?void 0:t.length)>1){var e=this._getPageFromElement(t);var a=this._getCurrentPage()+1;if(Number(e)!==a){window.location.hash=""}}};t.prototype.clickMenuTitleHandler=function(t){var e;var a=t.detail;this._setCurrentPage(parseInt((e=a.closest("[".concat(this.attrSelectorPage,"]")))===null||e===void 0?void 0:e.getAttribute(this.attrSelectorPage)))};t.prototype.componentWillLoad=function(){var t=this;if(document.body.classList.contains("project_python")){this.project_python=true;var e=document.querySelector("#start_class");e.addEventListener("click",(function(){t._goToNext()}))}document.querySelector('a.menu-button[href="#conclusao"]').setAttribute("id","pager_menu_conclusao")};t.prototype.componentDidLoad=function(){var t=this;window.addEventListener("yduqs-search-before-navigate",(function(e){var a;t._setCurrentPage(Number(((a=e.detail)===null||a===void 0?void 0:a.page)||t.starterPageIndex))}));window.addEventListener("hashchange",(function(){var e;var a=((e=window.location.hash)===null||e===void 0?void 0:e.length)>1?window.location.hash:false;if(a){var r=t._getPageFromElement(a);if(r){t._setCurrentPage(parseInt(r))}}}));$("body").on("click",'a[href^="#"]',(function(e){var a;e.preventDefault();var r=(a=e.currentTarget.href)===null||a===void 0?void 0:a.substring(e.currentTarget.href.indexOf("#"),e.currentTarget.href.length);if(r){var o=t._getPageFromElement(r);if(o){t._setCurrentPage(parseInt(o))}}if(window.location.hash==r){window.scrollTo(0,$(window.location.hash).offset().top)}else{window.location.hash=r}}));this._init()};t.prototype.render=function(){var t=this;return a(r,null,a("div",{class:"c-pager ".concat(this.total<=1?"c-pager-none":""," ").concat(this.project_python&&"python_pager"," "),id:"btnPaginator"},a("div",{class:"container"},a("div",{class:"row align-items-center justify-content-center"},a("div",{class:"col-12 col-md-10 col-lg-8 d-flex"},a("button",{disabled:true,type:"button",class:"c-button c-button__icon-container c-button__icon-square pager-switch","data-cy":"btn-prev",ref:function(e){return t.btnPrev=e},onClick:function(){return t._goToPrev()}},a("span",{class:"c-button__icon material-icons"},"arrow_back")),this._getLabel(),a("button",{type:"button",class:"c-button c-button__icon-container c-button__icon-square pager-switch","data-cy":"btn-next",ref:function(e){return t.btnNext=e},onClick:function(){return t._goToNext()}},a("span",{class:"c-button__icon material-icons"},"arrow_forward")))))))};Object.defineProperty(t,"watchers",{get:function(){return{current:["_goToPage"]}},enumerable:false,configurable:true});return t}())}}}));