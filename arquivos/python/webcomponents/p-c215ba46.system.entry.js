System.register(["./p-aa0e6d07.system.js","./p-56cdc539.system.js"],(function(e){"use strict";var t,i,s;return{setters:[function(e){t=e.r;i=e.h},function(e){s=e.i}],execute:function(){var o=e("yduqs_card_video",function(){function e(e){t(this,e);this.id_video="";this.type_video="Vem que eu te explico!";this.active=false}e.prototype.render=function(){var e=this.border_bottom?"border-bottom":"";var t=this.active?"active":"";return i("div",{id:this.id_video,class:"c-card-video "+e},i("div",{class:"c-card-video__thumb "+t},i("yduqs-image",{src:this.thumb_video,alt:""}),i("div",{class:"c-card-video__description_time"},this.time)),i("div",{class:"c-card-video__description"},i("p",{class:"c-paragraph"},parseInt(this.module_video)==0||this.module_video=="todos"?s("pager.todos"):parseInt(this.module_video)==99||this.module_video=="apresentacao"?s("pager.apresentacao"):parseInt(this.module_video)==100||this.module_video=="conclusao"?s("pager.conclusao"):s("pager.modulo")+" "+this.module_video," ","- ",this.type_video),i("h2",{class:"c-heading",innerHTML:this.title_video}),i("p",{class:"c-paragraph",innerHTML:this.paragraph})))};return e}());var r=e("yduqs_image",function(){function e(e){t(this,e);this.covered=false;this._iscovered=false}e.prototype.handleCover=function(){this.coverChange()};e.prototype.componentWillLoad=function(){this._iscovered=this.covered};e.prototype.coverChange=function(){this.covered?this._iscovered=!this._iscovered:this._iscovered=false};e.prototype.render=function(){var e=this;return i("div",{style:{width:"".concat(this.width),height:"".concat(this.height)},class:{"c-image":true,covered:this._iscovered},onClick:function(){return e.coverChange()}},this.covered?i("div",{class:{"c-image__capa":true}},i("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M27 14.625C33.21 14.625 38.25 19.665 38.25 25.875C38.25 27.0225 38.025 28.125 37.71 29.16L44.595 36.045C47.7225 33.2775 50.1975 29.8125 51.75 25.8525C47.8575 15.9975 38.25 9.00003 27 9.00003C24.1425 9.00003 21.3975 9.45003 18.81 10.2825L23.6925 15.165C24.75 14.85 25.8525 14.625 27 14.625ZM6.0975 7.11003C5.22 7.98753 5.22 9.40503 6.0975 10.2825L10.53 14.715C6.885 17.6175 3.9825 21.4425 2.25 25.875C6.1425 35.7525 15.75 42.75 27 42.75C30.42 42.75 33.6825 42.075 36.6975 40.905L42.8175 47.025C43.695 47.9025 45.1125 47.9025 45.99 47.025C46.8675 46.1475 46.8675 44.73 45.99 43.8525L9.2925 7.11003C8.415 6.23253 6.975 6.23253 6.0975 7.11003ZM27 37.125C20.79 37.125 15.75 32.085 15.75 25.875C15.75 24.1425 16.155 22.5 16.8525 21.06L20.385 24.5925C20.3175 24.9975 20.25 25.425 20.25 25.875C20.25 29.61 23.265 32.625 27 32.625C27.45 32.625 27.855 32.5575 28.2825 32.4675L31.815 36C30.3525 36.72 28.7325 37.125 27 37.125ZM33.6825 25.1325C33.345 21.9825 30.87 19.53 27.7425 19.1925L33.6825 25.1325Z",fill:"white"})),i("p",{class:"c-image__text"},"Conteúdo sensível ",i("br",null),"Clique na imagem para visualizá-la")):"",i("img",{class:"o-image",alt:this.alt,title:this.img_title,src:this.src,loading:"lazy"}))};Object.defineProperty(e,"watchers",{get:function(){return{covered:["handleCover"]}},enumerable:false,configurable:true});return e}())}}}));