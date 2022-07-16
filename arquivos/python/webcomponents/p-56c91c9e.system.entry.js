var __awaiter=this&&this.__awaiter||function(e,t,i,a){function s(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function o(e){try{l(a.next(e))}catch(e){r(e)}}function n(e){try{l(a["throw"](e))}catch(e){r(e)}}function l(e){e.done?i(e.value):s(e.value).then(o,n)}l((a=a.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,s,r,o;return o={next:n(0),throw:n(1),return:n(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function n(e){return function(t){return l([e,t])}}function l(o){if(a)throw new TypeError("Generator is already executing.");while(i)try{if(a=1,s&&(r=o[0]&2?s["return"]:o[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,o[1])).done)return r;if(s=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;s=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e];s=0}finally{a=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-aa0e6d07.system.js","./p-0c2d74cf.system.js"],(function(e){"use strict";var t,i,a,s;return{setters:[function(e){t=e.r;i=e.c;a=e.h},function(e){s=e.g}],execute:function(){var r=function(){function e(t,i){this.audioPlayer=typeof t==="string"?document.querySelector(t):t;var a=i||{};var s=this.audioPlayer.innerHTML;this.audioPlayer.classList.add("green-audio-player");this.audioPlayer.innerHTML=e.getTemplate()+s;this.isDevice=/ipad|iphone|ipod|android/i.test(window.navigator.userAgent.toLowerCase())&&!window.MSStream;this.playPauseBtn=this.audioPlayer.querySelector(".play-pause-btn");this.loading=this.audioPlayer.querySelector(".loading");this.sliders=this.audioPlayer.querySelectorAll(".slider");this.progress=this.audioPlayer.querySelector(".controls__progress");this.volumeBtn=this.audioPlayer.querySelector(".volume__button");this.volumeControls=this.audioPlayer.querySelector(".volume__controls");this.volumeProgress=this.volumeControls.querySelector(".volume__progress");this.player=this.audioPlayer.querySelector("audio");this.currentTime=this.audioPlayer.querySelector(".controls__current-time");this.totalTime=this.audioPlayer.querySelector(".controls__total-time");this.speaker=this.audioPlayer.querySelector(".volume__speaker");this.download=this.audioPlayer.querySelector(".download");this.downloadLink=this.audioPlayer.querySelector(".download__link");this.span=this.audioPlayer.querySelectorAll(".message__offscreen");this.svg=this.audioPlayer.getElementsByTagName("svg");this.img=this.audioPlayer.getElementsByTagName("img");this.draggableClasses=["pin"];this.currentlyDragged=null;this.stopOthersOnPlay=a.stopOthersOnPlay||false;this.enableKeystrokes=a.enableKeystrokes||false;this.showTooltips=a.showTooltips||false;var r=this;this.labels={volume:{open:"Open Volume Controls",close:"Close Volume Controls"},pause:"Pause",play:"Play",download:"Download"};if(!this.enableKeystrokes){for(var o=0;o<this.span.length;o++){this.span[o].outerHTML=""}}else{window.addEventListener("keydown",this.pressKb.bind(r),false);window.addEventListener("keyup",this.unPressKb.bind(r),false);this.sliders[0].setAttribute("tabindex",0);this.sliders[1].setAttribute("tabindex",0);this.download.setAttribute("tabindex",-1);this.downloadLink.setAttribute("tabindex",-1);for(var n=0;n<this.svg.length;n++){this.svg[n].setAttribute("tabindex",0);this.svg[n].setAttribute("focusable",true)}for(var l=0;l<this.img.length;l++){this.img[l].setAttribute("tabindex",0)}}if(this.showTooltips){this.playPauseBtn.setAttribute("title",this.labels.play);this.volumeBtn.setAttribute("title",this.labels.volume.open);this.downloadLink.setAttribute("title",this.labels.download)}if(a.outlineControls||false){this.audioPlayer.classList.add("player-accessible")}if(a.showDownloadButton||false){this.showDownload()}this.initEvents();this.directionAware();this.overcomeIosLimitations();if("autoplay"in this.player.attributes){var d=this.player.play();if(d!==undefined){d.then((function(){var e=r.player.parentElement.querySelector(".play-pause-btn__icon");e.attributes.d.value="M0 0h6v24H0zM12 0h6v24h-6z";r.playPauseBtn.setAttribute("aria-label",r.labels.pause);r.hasSetAttribute(r.playPauseBtn,"title",r.labels.pause)})).catch((function(){console.error("Green Audio Player Error: Autoplay has been prevented, because it is not allowed by this browser.")}))}}if("preload"in this.player.attributes&&this.player.attributes.preload.value==="none"){this.playPauseBtn.style.visibility="visible";this.loading.style.visibility="hidden"}}e.init=function(t){var i=document.querySelectorAll(t.selector);i.forEach((function(i){new e(i,t)}))};e.getTemplate=function(){return'\n            <div class="holder">\n                <div class="loading">\n                    <div class="loading__spinner"></div>\n                </div>\n\n                <div class="play-pause-btn" aria-label="Play" role="button">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">\n                        <path fill="#566574" fill-rule="evenodd" d="M18 12L0 24V0" class="play-pause-btn__icon"/>\n                    </svg>\n                </div>\n            </div>\n\n            <div class="controls">\n                <span class="controls__current-time" aria-live="off" role="timer">00:00</span>\n                <div class="controls__slider slider" data-direction="horizontal">\n                    <div class="controls__progress gap-progress" aria-label="Time Slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="slider">\n                        <div class="pin progress__pin" data-method="rewind"></div>\n                    </div>\n                </div>\n                <span class="controls__total-time">00:00</span>\n            </div>\n\n            <div class="volume">\n                <div class="volume__button" aria-label="Open Volume Controls" role="button">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n                        <path class="volume__speaker" fill="#566574" fill-rule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"/>\n                    </svg>\n                    <span class="message__offscreen">Press Enter or Space to show volume slider.</span>\n                </div>\n                <div class="volume__controls hidden">\n                    <div class="volume__slider slider" data-direction="vertical">\n                        <div class="volume__progress gap-progress" aria-label="Volume Slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="81" role="slider">\n                            <div class="pin volume__pin" data-method="changeVolume"></div>\n                        </div>\n                        <span class="message__offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class="download">\n                <a class="download__link" href="" download="" aria-label="Download" role="button">\n                    <svg width="24" height="24" fill="#566574" enable-background="new 0 0 29.978 29.978" version="1.1" viewBox="0 0 29.978 29.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n                        <path d="m25.462 19.105v6.848h-20.947v-6.848h-4.026v8.861c0 1.111 0.9 2.012 2.016 2.012h24.967c1.115 0 2.016-0.9 2.016-2.012v-8.861h-4.026z"/>\n                        <path d="m14.62 18.426l-5.764-6.965s-0.877-0.828 0.074-0.828 3.248 0 3.248 0 0-0.557 0-1.416v-8.723s-0.129-0.494 0.615-0.494h4.572c0.536 0 0.524 0.416 0.524 0.416v8.742 1.266s1.842 0 2.998 0c1.154 0 0.285 0.867 0.285 0.867s-4.904 6.51-5.588 7.193c-0.492 0.495-0.964-0.058-0.964-0.058z"/>\n                    </svg>\n                </a>\n            </div>\n        '};e.prototype.initEvents=function(){var t=this;t.audioPlayer.addEventListener("mousedown",(function(e){if(t.isDraggable(e.target)){t.currentlyDragged=e.target;var i=t.currentlyDragged.dataset.method;var a=t[i].bind(t);window.addEventListener("mousemove",a,false);if(t.currentlyDragged.parentElement.parentElement===t.sliders[0]){t.paused=t.player.paused;if(t.paused===false)t.togglePlay()}window.addEventListener("mouseup",(function(){if(t.currentlyDragged!==false&&t.currentlyDragged.parentElement.parentElement===t.sliders[0]&&t.paused!==t.player.paused){t.togglePlay()}t.currentlyDragged=false;window.removeEventListener("mousemove",a,false)}),false)}}));t.audioPlayer.addEventListener("touchstart",(function(e){if(t.isDraggable(e.target)){t.currentlyDragged=e.targetTouches[0];var i=t.currentlyDragged.target.dataset.method;var a=t[i].bind(t);window.addEventListener("touchmove",a,false);if(t.currentlyDragged.parentElement.parentElement===t.sliders[0]){t.paused=t.player.paused;if(t.paused===false)t.togglePlay()}window.addEventListener("touchend",(function(){if(t.currentlyDragged!==false&&t.currentlyDragged.parentElement.parentElement===t.sliders[0]&&t.paused!==t.player.paused){t.togglePlay()}t.currentlyDragged=false;window.removeEventListener("touchmove",a,false)}),false);e.preventDefault()}}));this.playPauseBtn.addEventListener("click",this.togglePlay.bind(t));this.player.addEventListener("timeupdate",this.updateProgress.bind(t));this.player.addEventListener("volumechange",this.updateVolume.bind(t));this.player.volume=.81;this.player.addEventListener("loadedmetadata",(function(){t.totalTime.textContent=e.formatTime(t.player.duration)}));this.player.addEventListener("seeking",this.showLoadingIndicator.bind(t));this.player.addEventListener("seeked",this.hideLoadingIndicator.bind(t));this.player.addEventListener("canplay",this.hideLoadingIndicator.bind(t));this.player.addEventListener("ended",(function(){e.pausePlayer(t.player,"ended");t.player.currentTime=0;t.playPauseBtn.setAttribute("aria-label",t.labels.play);t.hasSetAttribute(t.playPauseBtn,"title",t.labels.play)}));this.volumeBtn.addEventListener("click",this.showHideVolume.bind(t));window.addEventListener("resize",t.directionAware.bind(t));window.addEventListener("scroll",t.directionAware.bind(t));for(var i=0;i<this.sliders.length;i++){var a=this.sliders[i].querySelector(".pin");this.sliders[i].addEventListener("click",t[a.dataset.method].bind(t))}this.downloadLink.addEventListener("click",this.downloadAudio.bind(t))};e.prototype.overcomeIosLimitations=function(){var e=this;if(this.isDevice){this.player.addEventListener("loadedmetadata",this.hideLoadingIndicator.bind(e));this.audioPlayer.querySelector(".volume").style.display="none";this.audioPlayer.querySelector(".controls").style.marginRight="0"}};e.prototype.isDraggable=function(e){var t=false;if(typeof e.classList==="undefined")return false;for(var i=0;i<this.draggableClasses.length;i++){if(e.classList.contains(this.draggableClasses[i])){t=true}}return t};e.prototype.inRange=function(e){var t="touches"in e;var i=this.getRangeBox(e);var a=i.getBoundingClientRect();var s=i.dataset.direction;var r=null;var o=null;if(s==="horizontal"){r=a.x;o=r+a.width;var n=t?e.touches[0].clientX:e.clientX;if(n<r||n>o)return false}else{r=a.top;o=r+a.height;var l=t?e.touches[0].clientY:e.clientY;if(l<r||l>o)return false}return true};e.prototype.updateProgress=function(){var t=this.player.currentTime;var i=t/this.player.duration*100;this.progress.setAttribute("aria-valuenow",i);this.progress.style.width="".concat(i,"%");this.currentTime.textContent=e.formatTime(t)};e.prototype.updateVolume=function(){this.volumeProgress.setAttribute("aria-valuenow",this.player.volume*100);this.volumeProgress.style.height="".concat(this.player.volume*100,"%");if(this.player.volume>=.5){this.speaker.attributes.d.value="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"}else if(this.player.volume<.5&&this.player.volume>.05){this.speaker.attributes.d.value="M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z"}else if(this.player.volume<=.05){this.speaker.attributes.d.value="M0 7.667v8h5.333L12 22.333V1L5.333 7.667"}};e.prototype.getRangeBox=function(e){var t=e.target;var i=this.currentlyDragged;if(e.type==="click"&&this.isDraggable(e.target)){t=e.target.parentElement.parentElement}if(e.type==="mousemove"){t=i.parentElement.parentElement}if(e.type==="touchmove"){t=i.target.parentElement.parentElement}return t};e.prototype.getCoefficient=function(e){var t="touches"in e;var i=this.getRangeBox(e);var a=i.getBoundingClientRect();var s=0;if(i.dataset.direction==="horizontal"){var r=t?e.touches[0].clientX:e.clientX;var o=r-a.left;var n=a.width;s=o/n}else if(i.dataset.direction==="vertical"){var l=a.height;var d=t?e.touches[0].clientY:e.clientY;var u=d-a.top;s=1-u/l}return s};e.prototype.rewind=function(e){if(this.player.seekable&&this.player.seekable.length){if(this.inRange(e)){this.player.currentTime=this.player.duration*this.getCoefficient(e)}}};e.prototype.showVolume=function(){if(this.volumeBtn.getAttribute("aria-attribute")===this.labels.volume.open){this.volumeControls.classList.remove("hidden");this.volumeBtn.classList.add("open");this.volumeBtn.setAttribute("aria-label",this.labels.volume.close);this.hasSetAttribute(this.volumeBtn,"title",this.labels.volume.close)}};e.prototype.showHideVolume=function(){this.volumeControls.classList.toggle("hidden");if(this.volumeBtn.getAttribute("aria-label")===this.labels.volume.open){this.volumeBtn.setAttribute("aria-label",this.labels.volume.close);this.hasSetAttribute(this.volumeBtn,"title",this.labels.volume.close);this.volumeBtn.classList.add("open")}else{this.volumeBtn.setAttribute("aria-label",this.labels.volume.open);this.hasSetAttribute(this.volumeBtn,"title",this.labels.volume.open);this.volumeBtn.classList.remove("open")}};e.prototype.changeVolume=function(e){if(this.inRange(e)){this.player.volume=Math.round(this.getCoefficient(e)*50)/50}};e.formatTime=function(e){var t=Math.floor(e/60);var i=Math.floor(e%60);return"".concat(t<10?"0".concat(t):t,":").concat(i<10?"0".concat(i):i)};e.prototype.preloadNone=function(){var e=this;if(!this.player.duration){e.playPauseBtn.style.visibility="hidden";e.loading.style.visibility="visible"}};e.prototype.togglePlay=function(){this.preloadNone();if(this.player.paused){if(this.stopOthersOnPlay){e.stopOtherPlayers()}e.playPlayer(this.player);this.playPauseBtn.setAttribute("aria-label",this.labels.pause);this.hasSetAttribute(this.playPauseBtn,"title",this.labels.pause)}else{e.pausePlayer(this.player,"toggle");this.playPauseBtn.setAttribute("aria-label",this.labels.play);this.hasSetAttribute(this.playPauseBtn,"title",this.labels.play)}};e.prototype.hasSetAttribute=function(e,t,i){if(this.showTooltips){if(e.hasAttribute(t)){e.setAttribute(t,i)}}};e.prototype.setCurrentTime=function(e){var t=this.player.currentTime;var i=Math.floor(this.player.duration);if(t+e<0&&t===0){this.player.currentTime=this.player.currentTime}else if(t+e<0){this.player.currentTime=0}else if(t+e>i){this.player.currentTime=i}else{this.player.currentTime+=e}};e.prototype.setVolume=function(e){if(this.isDevice)return;var t=this.player.volume;if(t+e>=0&&t+e<1){this.player.volume+=e}else if(t+e<=0){this.player.volume=0}else{this.player.volume=1}};e.prototype.unPressKb=function(e){var t=e||window.event;if(this.seeking&&(t.keyCode===37||t.keyCode===39)){this.togglePlay();this.seeking=false}};e.prototype.pressKb=function(e){var t=e||window.event;switch(t.keyCode){case 13:case 32:if(document.activeElement.parentNode===this.playPauseBtn){this.togglePlay()}else if(document.activeElement.parentNode===this.volumeBtn||document.activeElement===this.sliders[1]){if(document.activeElement===this.sliders[1]){try{this.volumeBtn.children[0].focus()}catch(e){this.volumeBtn.focus()}}this.showHideVolume()}if(t.keyCode===13&&this.showDownload&&document.activeElement.parentNode===this.downloadLink){this.downloadLink.focus()}break;case 37:case 39:if(document.activeElement===this.sliders[0]){if(t.keyCode===37){this.setCurrentTime(-5)}else{this.setCurrentTime(+5)}if(!this.player.paused&&this.player.seeking){this.togglePlay();this.seeking=true}}break;case 38:case 40:if(document.activeElement.parentNode===this.volumeBtn||document.activeElement===this.sliders[1]){if(t.keyCode===38){this.setVolume(.05)}else{this.setVolume(-.05)}}if(document.activeElement.parentNode===this.volumeBtn){this.showVolume()}break}};e.pausePlayer=function(e){var t=e.parentElement.querySelector(".play-pause-btn__icon");t.attributes.d.value="M18 12L0 24V0";e.pause()};e.playPlayer=function(e){var t=e.parentElement.querySelector(".play-pause-btn__icon");t.attributes.d.value="M0 0h6v24H0zM12 0h6v24h-6z";e.play()};e.stopOtherPlayers=function(){var t=document.querySelectorAll(".green-audio-player audio");for(var i=0;i<t.length;i++){e.pausePlayer(t[i])}};e.prototype.showLoadingIndicator=function(){this.playPauseBtn.style.visibility="hidden";this.loading.style.visibility="visible"};e.prototype.hideLoadingIndicator=function(){this.playPauseBtn.style.visibility="visible";this.loading.style.visibility="hidden"};e.prototype.showDownload=function(){this.download.style.display="block"};e.prototype.downloadAudio=function(){var e=this.player.currentSrc;var t=e.split("/").reverse()[0];this.downloadLink.setAttribute("href",e);this.downloadLink.setAttribute("download",t)};e.prototype.directionAware=function(){this.volumeControls.classList.remove("top","middle","bottom");if(window.innerHeight<250){this.volumeControls.classList.add("middle")}else if(this.audioPlayer.getBoundingClientRect().top<180){this.volumeControls.classList.add("bottom")}else{this.volumeControls.classList.add("top")}};return e}();var o=Object.freeze({__proto__:null,default:r});var n=s(o);var l=n.default;var d=e("yduqs_audio_player",function(){function e(e){t(this,e);this.updateRate=i(this,"updateRate",7);this.src="";this.audio_id="";this._rate=1;this.rate=1;this.settings={speedList:[.5,1,1.5]};this._speedPosition=1}e.prototype.initialize=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.settings=e;this._speedPosition=this.settings.speedList.findIndex((function(e){return e===1}));this._rate=this.settings.speedList[this._speedPosition];return[2]}))}))};e.prototype.playbackRateHandler=function(e){this._rate=e;this._audioObj.playbackRate=this._rate};e.prototype.componentDidLoad=function(){var e={selector:"div#audioPlayer".concat(this.audio_id),showTooltips:true,showDownloadButton:true,stopOthersOnPlay:true,enableKeystrokes:true};l.init(e);if(this.dark){this._audioObj=document.querySelector("#audioPlayer".concat(this.audio_id,".c-audio-player-dark .c-audio__object"));this.createSpeedControl()}else{this._audioObj=document.querySelector("#audioPlayer".concat(this.audio_id,".c-audio-player .c-audio__object"));this.createSpeedControl()}};e.prototype.componentWillLoad=function(){if(this.dark){this.coloraudio="c-audio-player-dark"}else{this.coloraudio="c-audio-player"}};e.prototype.updatePlaybackRate=function(){if(!this.settings||!this.settings.speedList){return}this._speedPosition<this.settings.speedList.length-1?this._speedPosition++:this._speedPosition=0;this._rate=this.settings.speedList[this._speedPosition];if(this.dark){this._audioObj=document.querySelector("#audioPlayer".concat(this.audio_id,".c-audio-player-dark .c-audio__object"));this._audioObj.playbackRate=this._rate;var e=document.querySelector("#audioPlayer".concat(this.audio_id,".c-audio-player-dark .speed .speed__display"));e.innerHTML="".concat(this._rate,"x")}else{this._audioObj=document.querySelector("#audioPlayer".concat(this.audio_id,".c-audio-player .c-audio__object"));this._audioObj.playbackRate=this._rate;var e=document.querySelector("#audioPlayer".concat(this.audio_id,".c-audio-player .speed .speed__display"));e.innerHTML="".concat(this._rate,"x")}};e.prototype.createSpeedControl=function(){var e=this;if(this.dark){var t=document.querySelector("#audioPlayer".concat(this.audio_id,".c-audio-player-dark"));var i=document.createElement("div");var a=document.createElement("a");var s=document.createElement("span");i.className="speed";a.className="speed__controls material-icons";a.innerHTML="speed";a.setAttribute("role","button");s.className="speed__display";s.id="speed__display";s.innerHTML="".concat(this._rate,"x");t.insertBefore(i,t.children[3]);i.append(a);i.append(s);a.addEventListener("click",(function(){return e.updatePlaybackRate()}))}else{var t=document.querySelector("#audioPlayer".concat(this.audio_id,".c-audio-player"));var i=document.createElement("div");var a=document.createElement("a");var s=document.createElement("span");i.className="speed";a.className="speed__controls material-icons";a.innerHTML="speed";a.setAttribute("role","button");s.className="speed__display";s.id="speed__display";s.innerHTML="".concat(this._rate,"x");t.insertBefore(i,t.children[3]);i.append(a);i.append(s);a.addEventListener("click",(function(){return e.updatePlaybackRate()}))}};e.prototype.render=function(){var e=this.shortdisplay?"c-audio-player-short":"";var t="\n            window.addEventListener('DOMContentLoaded', function () {\n                var audioPlayer".concat(this.audio_id," = document.querySelector('#audioPlayer").concat(this.audio_id,"');\n                audioPlayer").concat(this.audio_id,'.initialize({ "speedList": [0.5, 0.6, 0.7, 1, 1.5, 2] });\n            });\n        ');return a("div",{id:"audioPlayer"+this.audio_id,class:"".concat(this.coloraudio," ").concat(e)},a("audio",{class:"c-audio__object",preload:"metadata"},a("source",{src:this.src,type:"audio/mpeg"},"O seu navegador não suporta o elemento ",a("code",null,"audio"),".")),a("script",null,t))};Object.defineProperty(e,"watchers",{get:function(){return{rate:["playbackRateHandler"]}},enumerable:false,configurable:true});return e}())}}}));