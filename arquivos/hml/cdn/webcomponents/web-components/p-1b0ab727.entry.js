import{r as e,h as t,a as n,g as i}from"./p-3b8a929f.js";import{i as r}from"./p-dc634267.js";const o=class{constructor(t){e(this,t),this.module_number=0,this.videoItems={modules:[]},this.videoSelected="",this.english=!1,this.spanish=!1}async initialize(e){this.settings=e}async changeVideoGallery(e){document.querySelectorAll("yduqs-gallery-video").forEach((t=>{t.srcVideo=e.link_video,this.moduleId="apresentacao"==e.id.split("-")[1]?99:"conclusao"==e.id.split("-")[1]?100:e.id.split("-")[1],t.module_number_video=parseInt(this.moduleId),t.title_gallery=e.title_video})),this.videoSelected=e.id}renderPlaylistVideo(){const e=[];if(void 0!==this.settings)return this.settings.modules.forEach((n=>{n.playlist.forEach((i=>{let r="apresentacao"==n.module.replace("modulo_","")?99:"conclusao"==n.module.replace("modulo_","")?100:n.module.replace("modulo_","");0!=this.module_number&&this.module_number!=r||e.push(t("yduqs-card-video",{"data-gtm-event-category":":[[instituicao]]:[[tipo-usuario]]","data-gtm-event-action":"galeria-video:conteudo-clique-item","data-gtm-event-label":"selecionar-video",id_video:i.id,title_video:i.title_video,subtitle_video:i.subtitle_video,thumb_video:i.thumb_video,link_video:i.link_video,paragraph:i.paragraph,time:i.time,border_bottom:i.border_bottom,active:i.id==this.videoSelected,module_video:n.module.replace("modulo_",""),type_video:i.type,onClick:()=>{this.changeVideoGallery(i)}}))}))})),t("div",{class:"c-playlist-video__items"},...e)}async videosLoad(){document.querySelectorAll("module").forEach((e=>{let t=e.id.replace("modulo",""),n="modulo_"+t,i=[];e.querySelectorAll("yduqs-video-player").forEach(((e,n)=>{let r=e.closest("yduqs-module-video"),o=e.closest("yduqs-gallery-video"),u=e.closest("yduqs-gallery-video"),a=e.closest("yduqs-teoria");if(a||r||o||u)a&&i.push({id:`mod-${t}-vid-${n}`,title_video:this.english?"Theory in Practice":this.spanish?"Teoría en la Práctica":"Teoria na Prática",subtitle_video:"",thumb_video:"https://stensineme.blob.core.windows.net/designsystem/test/vid1.png",link_video:e.src,paragraph:"",time:"",border_bottom:!1,type:"Video"});else{let r=e.closest(".container").querySelector("yduqs-title");i.push({id:`mod-${t}-vid-${n}`,title_video:null==r?void 0:r.topic_title,subtitle_video:"",thumb_video:"https://stensineme.blob.core.windows.net/designsystem/test/vid1.png",link_video:e.src,paragraph:"",time:"",border_bottom:!1,type:"Video"})}})),this.videoItems.modules.push({module:n,playlist:i})}))}async jsonLoad(){if(document.querySelector("yduqs-module-video")){if(document.body.classList.contains("template_recursos"))var e="https://stensineme.blob.core.windows.net/designsystem/test/playlist_teste.json";else e="./json/videos.json";fetch(e).then((e=>e.json())).then((e=>{e.modules.forEach((e=>{this.videoItems.modules.forEach(((t,n)=>{e.module==t.module&&(this.videoItems.modules[n].playlist=this.videoItems.modules[n].playlist.concat(e.playlist))})),this.videoItems.modules.forEach(((e,t)=>{let n=0;void 0!==e.playlist&&e.playlist.forEach(((i,o)=>{let u=e.module.replace("modulo_","");"Video"===i.type?(this.videoItems.modules[t].playlist[o].id=`mod-${u}-vid-${o}`,this.videoItems.modules[t].playlist[o].type="Video",this.videoItems.modules[t].playlist[o].module_video="apresentacao"==u?"Introduçao":"conclusao"==u?"Conclusão":"Módulo "+u):(this.videoItems.modules[t].playlist[o].id=`mod-${u}-pl-${n}`,this.videoItems.modules[t].playlist[o].type=r("pager.teexplico"),this.videoItems.modules[t].playlist[o].module_video="Módulo "+u,n++)}))}))}))}))}}async componentWillLoad(){await this.videosLoad(),await this.jsonLoad()}componentDidRender(){this.initialize(this.videoItems)}render(){return t(n,null,t("div",{class:"c-playlist-video"},this.renderPlaylistVideo()))}get el(){return i(this)}};
/*! @vimeo/player v2.17.1 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s="undefined"!=typeof global&&"[object global]"==={}.toString.call(global);function c(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function l(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function f(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function d(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function v(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,i=t||n;if(!i)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(f(i))return"https://vimeo.com/".concat(i);if(d(i))return i.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(i,"” is not a vimeo.com url."))}var y="undefined"!=typeof window&&void 0!==window.postMessage;if(!(s||void 0!==Array.prototype.indexOf&&y))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),i=function(e,t,i){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:i}):e[t]=i};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(i(this,"_id",o("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function o(e){return e+"_"+u()+"."+u()}function u(){return Math.random().toString().substring(2)}return i(e.prototype,"delete",(function(e){if(n(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e||(delete e[this._id],0))})),i(e.prototype,"get",(function(e){if(n(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),i(e.prototype,"has",(function(e){if(n(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),i(e.prototype,"set",(function(e,t){if(n(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var o=e[this._id];return o&&o[0]===e?(o[1]=t,this):(i(e,this._id,[e,t]),this)})),i(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:m);var p,w=(function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var t,n,i;i=function(){var e,t,n,i=Object.prototype.toString,r="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,i){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==i})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function o(e,i){n.add(e,i),t||(t=r(n.drain))}function u(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function a(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var i,r;try{!1===t?n.reject(e.msg):(i=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(r=u(i))?r.call(i,n.resolve,n.reject):n.resolve(i)}catch(e){n.reject(e)}}function c(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=u(e))?o((function(){var i=new d(n);try{t.call(e,(function(){c.apply(i,arguments)}),(function(){l.apply(i,arguments)}))}catch(e){l.call(i,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&o(a,n))}catch(e){l.call(new d(n),e)}}}function l(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&o(a,t))}function f(e,t,n,i){for(var r=0;r<t.length;r++)!function(r){e.resolve(t[r]).then((function(e){n(r,e)}),i)}(r)}function d(e){this.def=e,this.triggered=!1}function v(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function h(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new v(this);this.then=function(e,n){var i={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return i.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");i.resolve=e,i.reject=t})),t.chain.push(i),0!==t.state&&o(a,t),i.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){c.call(t,e)}),(function(e){l.call(t,e)}))}catch(e){l.call(t,e)}}n=function(){var e,n,i;function r(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,o){i=new r(t,o),n?n.next=i:e=i,n=i,i=void 0},drain:function(){var i=e;for(e=n=t=void 0;i;)i.fn.call(i.self),i=i.next}}}();var y=e({},"constructor",h,!1);return h.prototype=y,e(y,"__NPO__",0,!1),e(h,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(h,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(h,"all",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,i){if("function"!=typeof n||"function"!=typeof i)throw TypeError("Not a function");var r=e.length,o=Array(r),u=0;f(t,e,(function(e,t){o[e]=t,++u===r&&n(o)}),i)}))})),e(h,"race",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):new t((function(n,i){if("function"!=typeof n||"function"!=typeof i)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),i)}))})),h},(n=m)[t="Promise"]=n[t]||i(),e.exports&&(e.exports=n[t])}(p={exports:{}}),p.exports),b=new WeakMap;function g(e,t,n){var i=b.get(e.element)||{};t in i||(i[t]=[]),i[t].push(n),b.set(e.element,i)}function k(e,t){return(b.get(e.element)||{})[t]||[]}function E(e,t,n){var i=b.get(e.element)||{};if(!i[t])return!0;if(!n)return i[t]=[],b.set(e.element,i),!0;var r=i[t].indexOf(n);return-1!==r&&i[t].splice(r,1),b.set(e.element,i),i[t]&&0===i[t].length}function T(e,t){var n=b.get(e);b.set(t,n),b.delete(e)}function _(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function C(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var i={method:t};void 0!==n&&(i.value=n);var r=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));r>=8&&r<10&&(i=JSON.stringify(i)),e.element.contentWindow.postMessage(i,e.origin)}}function P(e,t){var n,i=[];if((t=_(t)).event)"error"===t.event&&k(e,t.data.method).forEach((function(n){var i=new Error(t.data.message);i.name=t.data.name,n.reject(i),E(e,t.data.method,n)})),i=k(e,"event:".concat(t.event)),n=t.data;else if(t.method){var r=function(e,t){var n=k(e,t);if(n.length<1)return!1;var i=n.shift();return E(e,t,i),i}(e,t.method);r&&(i.push(r),n=t.value)}i.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var F=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return F.reduce((function(t,n){var i=e.getAttribute("data-vimeo-".concat(n));return(i||""===i)&&(t[n]=""===i?1:i),t}),t)}function q(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var i=document.createElement("div");return i.innerHTML=n,t.appendChild(i.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(i,r){if(!d(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var o="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var u in t)t.hasOwnProperty(u)&&(o+="&".concat(u,"=").concat(encodeURIComponent(t[u])));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",o,!0),a.onload=function(){if(404!==a.status)if(403!==a.status)try{var t=JSON.parse(a.responseText);if(403===t.domain_status_code)return q(t,n),void r(new Error("“".concat(e,"” is not embeddable.")));i(t)}catch(e){r(e)}else r(new Error("“".concat(e,"” is not embeddable.")));else r(new Error("“".concat(e,"” was not found.")))},a.onerror=function(){var e=a.status?" (".concat(a.status,")"):"";r(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},a.send()}))}var M=new WeakMap,I=new WeakMap,V={},R=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(u(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!l(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var r=t.querySelector("iframe");r&&(t=r)}if("IFRAME"===t.nodeName&&!d(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(M.has(t))return M.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var o=new w((function(e,r){if(n._onMessage=function(t){if(d(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var i=_(t.data);if(i&&"error"===i.event&&i.data&&"ready"===i.data.method){var o=new Error(i.data.message);return o.name=i.data.name,void r(o)}if(i&&"ready"===i.event||i&&"ping"===i.method)return n.element.setAttribute("data-ready","true"),void e();P(n,i)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var o=j(t,i);x(h(o),o,t).then((function(e){var i=q(e,t);return n.element=i,n._originalElement=t,T(t,i),M.set(n.element,n),e})).catch(r)}}));if(I.set(this,o),M.set(this.element,this),"IFRAME"===this.element.nodeName&&C(this,"ping"),V.isEnabled){var a=function(){return V.exit()};this.fullscreenchangeHandler=function(){V.isFullscreen?g(n,"event:exitFullscreen",a):E(n,"event:exitFullscreen",a),n.ready().then((function(){C(n,"fullscreenchange",V.isFullscreen)}))},V.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new w((function(i,r){return t.ready().then((function(){g(t,e,{resolve:i,reject:r}),C(t,e,n)})).catch(r)}))}},{key:"get",value:function(e){var t=this;return new w((function(n,i){return e=c(e,"get"),t.ready().then((function(){g(t,e,{resolve:n,reject:i}),C(t,e)})).catch(i)}))}},{key:"set",value:function(e,t){var n=this;return new w((function(i,r){if(e=c(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){g(n,e,{resolve:i,reject:r}),C(n,e,t)})).catch(r)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===k(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),g(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");E(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=I.get(this)||new w((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return w.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return V.isEnabled?V.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return V.isEnabled?V.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return V.isEnabled?w.resolve(V.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new w((function(t){if(I.delete(e),M.delete(e.element),e._originalElement&&(M.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),V.isEnabled&&V.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&a(t.prototype,n),e}();s||(V=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,i=t.length,r={};n<i;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)r[t[0][n]]=e[n];return r}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(i,r){var o=function e(){n.off("fullscreenchange",e),i()};n.on("fullscreenchange",o);var u=(t=t||document.documentElement)[e.requestFullscreen]();u instanceof Promise&&u.then(o).catch(r)}))},exit:function(){return new Promise((function(t,i){if(n.isFullscreen){var r=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",r);var o=document[e.exitFullscreen]();o instanceof Promise&&o.then(r).catch(i)}else t()}))},on:function(e,n){var i=t[e];i&&document.addEventListener(i,n)},off:function(e,n){var i=t[e];i&&document.removeEventListener(i,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=j(e);x(h(t),t,e).then((function(t){return q(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;window.VimeoPlayerResizeEmbeds_||(window.VimeoPlayerResizeEmbeds_=!0,window.addEventListener("message",(function(t){if(d(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),i=0;i<n.length;i++)if(n[i].contentWindow===t.source){n[i].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}})))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;window.VimeoSeoMetadataAppended||(window.VimeoSeoMetadataAppended=!0,window.addEventListener("message",(function(t){if(d(t.origin)){var n=_(t.data);if(n&&"ready"===n.event)for(var i=e.querySelectorAll("iframe"),r=0;r<i.length;r++){var o=i[r],u=o.contentWindow===t.source;v(o.src)&&u&&new R(o).callMethod("appendVideoMetadata",window.location.href)}}})))}());const L=class{constructor(t){e(this,t),this.src="",this.transparent=void 0}componentWilLoad(){this.playerId=this.playerId?`c_video_player_${this.playerId}`:"c_video_player",this.playerObj=new R(this.playerId)}coverRemove(){this.covered=!1}render(){return t("div",{class:{"c-video-player":!0,covered:this.covered}},t("div",{onClick:()=>this.coverRemove(),class:{"c-video-player__cover":!0},style:{"background-color":`${this.bgcolor}`}},t("svg",{class:"c-video-player__cover-icon",width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M27 14.625C33.21 14.625 38.25 19.665 38.25 25.875C38.25 27.0225 38.025 28.125 37.71 29.16L44.595 36.045C47.7225 33.2775 50.1975 29.8125 51.75 25.8525C47.8575 15.9975 38.25 9.00003 27 9.00003C24.1425 9.00003 21.3975 9.45003 18.81 10.2825L23.6925 15.165C24.75 14.85 25.8525 14.625 27 14.625ZM6.0975 7.11003C5.22 7.98753 5.22 9.40503 6.0975 10.2825L10.53 14.715C6.885 17.6175 3.9825 21.4425 2.25 25.875C6.1425 35.7525 15.75 42.75 27 42.75C30.42 42.75 33.6825 42.075 36.6975 40.905L42.8175 47.025C43.695 47.9025 45.1125 47.9025 45.99 47.025C46.8675 46.1475 46.8675 44.73 45.99 43.8525L9.2925 7.11003C8.415 6.23253 6.975 6.23253 6.0975 7.11003ZM27 37.125C20.79 37.125 15.75 32.085 15.75 25.875C15.75 24.1425 16.155 22.5 16.8525 21.06L20.385 24.5925C20.3175 24.9975 20.25 25.425 20.25 25.875C20.25 29.61 23.265 32.625 27 32.625C27.45 32.625 27.855 32.5575 28.2825 32.4675L31.815 36C30.3525 36.72 28.7325 37.125 27 37.125ZM33.6825 25.1325C33.345 21.9825 30.87 19.53 27.7425 19.1925L33.6825 25.1325Z",fill:"white"})),t("p",{class:"c-video-player__text"},t("span",{class:"c-video-player__cover-title"},"Conteúdo sensível "),t("br",null),"Esse conteúdo pode conter material sensível.")),t("iframe",{allowtransparency:this.transparent,id:this.playerId,src:this.src,width:this.width,height:this.height,allowFullScreen:!0}))}};export{o as yduqs_playlist_video,L as yduqs_video_player}