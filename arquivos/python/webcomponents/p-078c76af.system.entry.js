var __awaiter=this&&this.__awaiter||function(t,e,n,i){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i["throw"](t))}catch(t){r(t)}}function c(t){t.done?n(t.value):o(t.value).then(s,a)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,o,r,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,o&&(r=s[0]&2?o["return"]:s[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,s[1])).done)return r;if(o=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;o=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){n.label=s[1];break}if(s[0]===6&&n.label<r[1]){n.label=r[1];r=s;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(s);break}if(r[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t];o=0}finally{i=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-aa0e6d07.system.js"],(function(t){"use strict";var e,n,i,o;return{setters:[function(t){e=t.r;n=t.c;i=t.h;o=t.a}],execute:function(){var r=t("yduqs_collapse_content",function(){function t(t){e(this,t);this.onToggle=n(this,"togglepane",7);this._isOpen=false;this.open=false}t.prototype.componentWillLoad=function(){this._isOpen=this.open};t.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._isOpen=true;return[2]}))}))};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._isOpen=false;return[2]}))}))};t.prototype.toggle=function(){this._isOpen?this.close():this.show();this.onToggle.emit(this._isOpen)};t.prototype.isOpen=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this._isOpen]}))}))};t.prototype.animate=function(){this.content.className=this._isOpen?"c-collapse__content u-fade-in":"c-collapse__content"};t.prototype.render=function(){var t=this;var e=this._isOpen?"c-collapse__control--active":"";var n=this.size?"u-text--".concat(this.size):"u-text--medium";return i(o,null,i("button",{role:"heading","aria-expanded":this._isOpen.toString(),class:"c-collapse__control ".concat(e," ").concat(n),onClick:function(){return t.toggle()}},i("span",{class:"c-collapse__title"},this.header),i("span",{class:"c-collapse__icon material-icons"},"expand_more")),i("div",{ref:function(e){return t.content=e},"aria-hidden":!this._isOpen,class:"c-collapse__content"},i("slot",null)))};return t}())}}}));