System.register(["./p-aa0e6d07.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var s=t("yduqs_range",function(){function t(t){e(this,t);this.value=0;this.max=10;this.min=-10;this.step=1}t.prototype.updateValue=function(t){this.value=t;this.output&&this.output(this.value)};t.prototype.increaseValue=function(){this.updateValue(this.value+this.step>this.max?this.max:this.value+this.step)};t.prototype.decreaseValue=function(){this.updateValue(this.value-this.step<this.min?this.min:this.value-this.step)};t.prototype.render=function(){var t=this;return n("yduqs-card",{dark:true,small:true,class:"c-range"},n("div",{class:"c-range-controls"},n("button",{type:"button",class:"c-button c-button__icon-container c-button__icon-small u-text--small",disabled:this.value<=this.min,onClick:function(){return t.decreaseValue()}},n("span",{class:"c-button__icon material-icons"},"remove")),n("div",{class:"c-range-input"},n("input",{type:"range",id:this.name,name:this.name,class:"c-range-input",min:this.min,max:this.max,step:this.step,value:this.value,onChange:function(e){return t.updateValue(parseInt(e.target.value))},ref:function(e){return t.elemRange=e}})),n("button",{type:"button",class:"c-button c-button__icon-container c-button__icon-small u-text--small",disabled:this.value>=this.max,onClick:function(){return t.increaseValue()}},n("span",{class:"c-button__icon material-icons"},"add"))))};return t}())}}}));