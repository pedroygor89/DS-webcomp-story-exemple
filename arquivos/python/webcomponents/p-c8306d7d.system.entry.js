System.register(["./p-aa0e6d07.system.js"],(function(t){"use strict";var e,s;return{setters:[function(t){e=t.r;s=t.h}],execute:function(){var i=t("yduqs_destaque_texto",function(){function t(t){e(this,t);this.size="medium"}t.prototype.componentWillLoad=function(){this._getTextSize()};t.prototype._getTextSize=function(){if(this.size==="small")return"small";if(this.size==="medium")return"medium";return"big"};t.prototype.render=function(){return s("div",{class:"c-texto-destaque"},s("div",{class:"c-texto-destaque__border"}),s("div",{class:"c-texto-destaque__content c-texto-destaque__content--".concat(this._getTextSize())},s("slot",null)))};return t}())}}}));