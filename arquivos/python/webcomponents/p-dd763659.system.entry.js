var __awaiter=this&&this.__awaiter||function(t,e,n,a){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function o(t){try{c(a.next(t))}catch(t){i(t)}}function s(t){try{c(a["throw"](t))}catch(t){i(t)}}function c(t){t.done?n(t.value):r(t.value).then(o,s)}c((a=a.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},a,r,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return c([t,e])}}function c(o){if(a)throw new TypeError("Generator is already executing.");while(n)try{if(a=1,r&&(i=o[0]&2?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;if(r=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];r=0}finally{a=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-aa0e6d07.system.js","./p-1a62ada4.system.js"],(function(t){"use strict";var e,n,a,r,i,o,s,c,l;return{setters:[function(t){e=t.r;n=t.h;a=t.g;r=t.c;i=t.a},function(t){o=t.r;s=t.c;c=t.d;l=t.m}],execute:function(){var u=t("yduqs_accordion",function(){function t(t){e(this,t)}t.prototype.animate=function(){this.content.style.maxHeight="".concat(this._contentMaxHeight,"px")};t.prototype.render=function(){var t=this;var e=this.outline?"c-accordion--outline":"";var a=this._active?"c-accordion--active":"";return n("div",{ref:function(e){return t.content=e},class:"c-accordion c-accordion--collapse ".concat(e," ").concat(a)},n("slot",null))};Object.defineProperty(t.prototype,"element",{get:function(){return a(this)},enumerable:false,configurable:true});return t}());var h=t("yduqs_accordion_pane",function(){function t(t){e(this,t);this.clickCollapse=r(this,"clickCollapse",7);this.onToggle=r(this,"togglepane",7);this._isOpen=false;this.open=false}t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._isOpen=true;return[2]}))}))};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._isOpen=false;return[2]}))}))};t.prototype.toggle=function(){this._isOpen?this.close():this.show();this.onToggle.emit(this._isOpen);this.animate()};t.prototype.isOpen=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this._isOpen]}))}))};t.prototype.animate=function(){this.content.className=this._isOpen?"c-accordion__item c-accordion__item--pane u-fade-in":"c-accordion__item c-accordion__item--pane"};t.prototype.render=function(){var t=this;var e=this._isOpen?"c-accordion__control--active":"";return n(i,{class:"c-accordion-pane"},n("button",{role:"heading","aria-expanded":this._isOpen.toString(),class:"c-accordion__control ".concat(e),onClick:function(e){t.clickCollapse.emit(e);t.toggle()}},n("div",{class:"c-accordion__title"},n("slot",{name:"c-accordion-header"})),n("span",{class:"c-accordion__icon material-icons"},"expand_more")),n("div",{ref:function(e){return t.content=e},"aria-hidden":!this._isOpen,class:"c-accordion__item c-accordion__item--pane"},n("slot",{name:"c-accordion-content"})))};return t}());var d=["#comment","#text","SCRIPT","STYLE","IFRAME","HR","svg","path","g","math","mi","mo","mrow","mfrac","msqrt","msup","mn"];var p=t("yduqs_search_bar",function(){function t(t){e(this,t);this.open=false;this.term="";this.hasSearch=false;this.actualFoundItemPosition=-1;this.cacheDbId="data-cache-id";this.termFoundClass="c-search-found-item";this.termFoundResultClass="c-search-found-result-item"}t.prototype.reset=function(){var t,e;if(!((t=this.term)===null||t===void 0?void 0:t.length)){this.hasSearch=false;this.clearResults()}else if(((e=this.term)===null||e===void 0?void 0:e.length)>2){this.handleSubmit({})}};t.prototype.createCachedDb=function(){var t=$('p, span:not(.material-icons,.c-video-player__cover-title), strong, i:not(.material-icons), em, h1, h2, h3, h4, h5, h6, li, dt, dd, a:not(.c-button), [slot="card-heading"], [slot="card-subheading"], td, th');for(var e=0;e<t.length;e++){if(!d.includes(t[e].nodeName)&&t[e].nodeName.substring(0,4)!="MJX-"&&!Boolean($(t[e]).parents("yduqs-menu, yduqs-rating, yduqs-modal").length)){$(t[e]).attr(this.cacheDbId,(Math.random()+1).toString(36).substring(2))}}var n=$("body *[".concat(this.cacheDbId,"]"));var a=[];var r=function(t){$(n[t]).html(o($(n[t]).html()));var e=$(n[t]);var r=e.clone();var c=r.contents();var l=c.map((function(t){var e;if(c[t].nodeName==="#text"){return s(c[t].textContent)}else if((e=c[t].dataset)===null||e===void 0?void 0:e.cacheId){return Array.from(Array(c[t].outerHTML.length),(function(){return"*"})).join("")}}));if(l.length>0){var u={cachedId:e.attr(i.cacheDbId),original:e.html(),parsed:Array.from(l).join("")};a.push(u)}};var i=this;for(var e=0;e<n.length;e++){r(e)}return a};t.prototype.findInDocument=function(){var t=this;this.actualFoundItemPosition=-1;var e=s(this.term);this.clearResults();this.hasSearch=true;if(e===""){return}var n=this.cachedDb.map((function(t){return{cachedId:t.cachedId,index:t.parsed.indexOf(e),length:e.length}})).filter((function(t){return t.index>=0}));var a=[];n.forEach((function(e,n){var r,i,o,s,c;var u=$("body *[".concat(t.cacheDbId,'="').concat(e.cachedId,'"]'));var h=(r=u.html())===null||r===void 0?void 0:r.substr(e.index,e.length);var d=(i=u.closest("[data-page]"))===null||i===void 0?void 0:i.attr("data-page");var p=(o=u.closest("[data-module]"))===null||o===void 0?void 0:o.attr("data-module");var f=!p?"":!isNaN(Number(p))?"Módulo ".concat(p):l[p]||"";var m={start:(s=u.html())===null||s===void 0?void 0:s.substr(0,e.index),new:function(t){return'<span class="'.concat(t,'">').concat(h,"</span>")},end:(c=u.html())===null||c===void 0?void 0:c.substr(e.index+h.length)};u.html(m.start+m.new(t.termFoundClass)+m.end);a.push({index:n,page:d||"0",locator:f,html:m.start+m.new(t.termFoundResultClass)+m.end})}));this.setResult(a);c("yduqs-search-called",{term:e})};t.prototype.setOpen=function(t){this.open=t};t.prototype.setTerm=function(t){this.term=t};t.prototype.handleOpen=function(){this.setOpen(true);this.elemInput.focus()};t.prototype.handleClose=function(){this.setOpen(false)};t.prototype.clearResults=function(){var t=this;var e;this.result=[];this.hasSearch=false;var n=$(".".concat(this.termFoundClass));var a=function(a){if($(n[a]).is("span")){var o=$(n[a]).parent();i=(e=r.cachedDb.find((function(e){return e.cachedId===o.attr(t.cacheDbId)})))===null||e===void 0?void 0:e.original;if(i){$(o).html(i)}}};var r=this,i;for(var o=0;o<n.length;o++){a(o)}c("yduqs-search-cleaned")};t.prototype.handleClear=function(){this.setTerm("");this.clearResults()};t.prototype.handleReset=function(){this.handleClear();this.handleClose()};t.prototype.handleInputChange=function(t){this.setTerm(t.target.value)};t.prototype.setResult=function(t){this.result=t};t.prototype.navigateOnResults=function(t){var e=$("body span.".concat(this.termFoundClass));this.actualFoundItemPosition=t<0?e.length-1:t>=e.length?0:t;if(e.eq(this.actualFoundItemPosition)){var n=e.eq(this.actualFoundItemPosition).offset().top;$(window).scrollTop(n-120)}this.handleClose();c("yduqs-search-navigate",{position:this.actualFoundItemPosition})};t.prototype.handleResultItemClick=function(t,e){var n=this;c("yduqs-search-before-navigate",{position:t,page:e});setTimeout((function(){n.navigateOnResults(t)}),400)};t.prototype.handleSubmit=function(t){if(t.type==="submit"){t.preventDefault()}if(this.open){if(!this.cachedDb){this.cachedDb=this.createCachedDb()}this.findInDocument()}else{this.handleOpen()}};t.prototype.render=function(){var t=this;var e;return n(i,{class:"c-search-bar"},n("form",{class:"c-search-bar-trigger ".concat(this.open?"opened":""),onSubmit:function(e){return t.handleSubmit(e)}},n("button",{type:"button",class:"c-button c-button__icon-container u-text--small c-search-bar-trigger-back",onClick:function(){return t.handleReset()}},n("span",{class:"c-button__icon material-icons"},"arrow_back")),n("div",{class:"c-search-bar-trigger-input-container"},n("input",{type:"search",class:"c-search-bar-trigger-input",onInput:function(e){return t.handleInputChange(e)},value:this.term,ref:function(e){return t.elemInput=e},placeholder:"Pesquisar no tema"}),this.hasSearch&&n("span",{class:"c-button__icon material-icons",onClick:function(){return t.handleClear()}},"close")),n("button",{type:"submit",class:"c-button c-button__icon-container u-text--small c-search-bar-trigger-btn"},n("span",{class:"c-button__icon material-icons"},"search"))),n("div",{class:"c-search-bar-result ".concat(this.open?"opened":"")},n("div",{class:"c-search-bar-result-overlay",onClick:function(){return t.handleClose()}}),n("div",{class:"c-search-bar-result-container"},((e=this.result)===null||e===void 0?void 0:e.length)>0?n("div",{class:"c-search-bar-result-list"},this.result.map((function(e){return n("div",{class:"c-search-bar-result-list-item",onClick:function(){return t.handleResultItemClick(e.index,e.page)}},n("div",{class:"item-breadcrumb"},e.locator),n("div",{innerHTML:e.html}))}))):this.hasSearch?n("div",{class:"c-search-bar-result-list-empty"},"Não encontramos nenhum resultado"):n("div",null))))};Object.defineProperty(t,"watchers",{get:function(){return{term:["reset"]}},enumerable:false,configurable:true});return t}())}}}));