var __awaiter=this&&this.__awaiter||function(t,e,n,i){function l(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function r(t){try{u(i.next(t))}catch(t){o(t)}}function s(t){try{u(i["throw"](t))}catch(t){o(t)}}function u(t){t.done?n(t.value):l(t.value).then(r,s)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,l,o,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return u([t,e])}}function u(r){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,l&&(o=r[0]&2?l["return"]:r[0]?l["throw"]||((o=l["return"])&&o.call(l),0):l.next)&&!(o=o.call(l,r[1])).done)return o;if(l=0,o)r=[r[0]&2,o.value];switch(r[0]){case 0:case 1:o=r;break;case 4:n.label++;return{value:r[1],done:false};case 5:n.label++;l=r[1];r=[0];continue;case 7:r=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(r[0]===6||r[0]===2)){n=0;continue}if(r[0]===3&&(!o||r[1]>o[0]&&r[1]<o[3])){n.label=r[1];break}if(r[0]===6&&n.label<o[1]){n.label=o[1];o=r;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(r);break}if(o[2])n.ops.pop();n.trys.pop();continue}r=e.call(t,n)}catch(t){r=[6,t];l=0}finally{i=o=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:true}}};System.register(["./p-aa0e6d07.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var i=t("yduqs_module_video",function(){function t(t){e(this,t);this.module_number=1;this.module_icon="playlist_play"}t.prototype.initialize=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.settings=t;return[2]}))}))};t.prototype.render=function(){return n("div",{class:"c-module-video"},n("div",{class:"c-module-video__titles"},n("div",{class:"row align-items-center justify-content-start"},n("yduqs-title",{topic_icon:this.module_icon,topic_title:this.title_gallery})),n("div",{class:"c-module-video__titles_subtitles row align-items-center justify-content-center"},n("div",{class:"c-module-video__titles_subtitles_content col-12 col-md-10 col-lg-8"},n("p",null,this.subtitle_gallery)))),n("div",{class:"c-module-video__box row align-items-center justify-content-center"},n("div",{class:"c-module-video__box_playlist col-12 col-md-10 col-lg-8"},n("yduqs-playlist-video",{id:"playlist",module_number:this.module_number}))),n("yduqs-modal",{id:"modal-gallery-".concat(this.module_number)},n("div",{class:"container"},n("yduqs-gallery-video",{id:"gallery",module_number:this.module_number,title_gallery:"".concat(this.title_gallery),subtitle_gallery:"".concat(this.subtitle_gallery)}))))};return t}())}}}));