var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,c){function o(e){try{l(i.next(e))}catch(e){c(e)}}function s(e){try{l(i["throw"](e))}catch(e){c(e)}}function l(e){e.done?n(e.value):r(e.value).then(o,s)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},i,r,c,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return l([e,t])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(c=o[0]&2?r["return"]:o[0]?r["throw"]||((c=r["return"])&&c.call(r),0):r.next)&&!(c=c.call(r,o[1])).done)return c;if(r=0,c)o=[o[0]&2,c.value];switch(o[0]){case 0:case 1:c=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(c=n.trys,c=c.length>0&&c[c.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!c||o[1]>c[0]&&o[1]<c[3])){n.label=o[1];break}if(o[0]===6&&n.label<c[1]){n.label=c[1];c=o;break}if(c&&n.label<c[2]){n.label=c[2];n.ops.push(o);break}if(c[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(e){o=[6,e];r=0}finally{i=c=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-aa0e6d07.system.js"],(function(e){"use strict";var t,n,i,r,c;return{setters:[function(e){t=e.r;n=e.c;i=e.h;r=e.a;c=e.g}],execute:function(){var o=e("yduqs_card_selecionavel",function(){function e(e){t(this,e);this.onSelect=n(this,"selected",7)}e.prototype.onSelectItem=function(e){var t=this.element.children[0];var n=e.detail;var i=e.target;var r=[].indexOf.call(t.children,i);this.onSelect.emit({idx:r,clicked:n})};e.prototype.render=function(){return i(r,{class:"c-card-selecionavel"},i("slot",null))};Object.defineProperty(e.prototype,"element",{get:function(){return c(this)},enumerable:false,configurable:true});return e}());var s=e("yduqs_card_selecionavel_item",function(){function e(e){t(this,e);this.onSelectItem=n(this,"onselect",7);this._isSelected=false;this.selected=false;this.optionid="";this.disabled=false}e.prototype.componentWillLoad=function(){this._isSelected=this.selected};e.prototype.selectItem=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this._isSelected=true;return[2]}))}))};e.prototype.unselectItem=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this._isSelected=false;return[2]}))}))};e.prototype.select=function(){this._isSelected?this.unselectItem():this.selectItem();this.onSelectItem.emit({optionId:this.optionid,isSelected:this._isSelected})};e.prototype.isSelected=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this._isSelected]}))}))};e.prototype.render=function(){var e=this;var t=this._isSelected?"c-card-selecionavel__control--active":"";var n="card-selecionavel-".concat(this.optionid);return i(r,{class:"c-card-selecionavel__item",id:"".concat(n)},i("button",{disabled:this.disabled,role:"heading",class:"c-card-selecionavel__control ".concat(t),onClick:function(){return e.select()}},i("span",{class:"c-card-selecionavel__label"},this.optionid),i("div",{class:"c-card-selecionavel__content"},i("slot",null),i("div",{class:"c-card-selecionavel__icon-container"},i("span",{class:"c-card-selecionavel__icon material-icons"},this._isSelected?"done":"")))))};return e}())}}}));