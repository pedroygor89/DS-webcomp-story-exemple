import{r as t,c as i,h as s}from"./p-3b8a929f.js";import{g as e}from"./p-d23b9255.js";class o{constructor(t,i){this.audioPlayer="string"==typeof t?document.querySelector(t):t;const s=i||{},e=this.audioPlayer.innerHTML;this.audioPlayer.classList.add("green-audio-player"),this.audioPlayer.innerHTML=o.getTemplate()+e,this.isDevice=/ipad|iphone|ipod|android/i.test(window.navigator.userAgent.toLowerCase())&&!window.MSStream,this.playPauseBtn=this.audioPlayer.querySelector(".play-pause-btn"),this.loading=this.audioPlayer.querySelector(".loading"),this.sliders=this.audioPlayer.querySelectorAll(".slider"),this.progress=this.audioPlayer.querySelector(".controls__progress"),this.volumeBtn=this.audioPlayer.querySelector(".volume__button"),this.volumeControls=this.audioPlayer.querySelector(".volume__controls"),this.volumeProgress=this.volumeControls.querySelector(".volume__progress"),this.player=this.audioPlayer.querySelector("audio"),this.currentTime=this.audioPlayer.querySelector(".controls__current-time"),this.totalTime=this.audioPlayer.querySelector(".controls__total-time"),this.speaker=this.audioPlayer.querySelector(".volume__speaker"),this.download=this.audioPlayer.querySelector(".download"),this.downloadLink=this.audioPlayer.querySelector(".download__link"),this.span=this.audioPlayer.querySelectorAll(".message__offscreen"),this.svg=this.audioPlayer.getElementsByTagName("svg"),this.img=this.audioPlayer.getElementsByTagName("img"),this.draggableClasses=["pin"],this.currentlyDragged=null,this.stopOthersOnPlay=s.stopOthersOnPlay||!1,this.enableKeystrokes=s.enableKeystrokes||!1,this.showTooltips=s.showTooltips||!1;const h=this;if(this.labels={volume:{open:"Open Volume Controls",close:"Close Volume Controls"},pause:"Pause",play:"Play",download:"Download"},this.enableKeystrokes){window.addEventListener("keydown",this.pressKb.bind(h),!1),window.addEventListener("keyup",this.unPressKb.bind(h),!1),this.sliders[0].setAttribute("tabindex",0),this.sliders[1].setAttribute("tabindex",0),this.download.setAttribute("tabindex",-1),this.downloadLink.setAttribute("tabindex",-1);for(let t=0;t<this.svg.length;t++)this.svg[t].setAttribute("tabindex",0),this.svg[t].setAttribute("focusable",!0);for(let t=0;t<this.img.length;t++)this.img[t].setAttribute("tabindex",0)}else for(let t=0;t<this.span.length;t++)this.span[t].outerHTML="";if(this.showTooltips&&(this.playPauseBtn.setAttribute("title",this.labels.play),this.volumeBtn.setAttribute("title",this.labels.volume.open),this.downloadLink.setAttribute("title",this.labels.download)),s.outlineControls&&this.audioPlayer.classList.add("player-accessible"),s.showDownloadButton&&this.showDownload(),this.initEvents(),this.directionAware(),this.overcomeIosLimitations(),"autoplay"in this.player.attributes){const t=this.player.play();void 0!==t&&t.then((()=>{h.player.parentElement.querySelector(".play-pause-btn__icon").attributes.d.value="M0 0h6v24H0zM12 0h6v24h-6z",h.playPauseBtn.setAttribute("aria-label",h.labels.pause),h.hasSetAttribute(h.playPauseBtn,"title",h.labels.pause)})).catch((()=>{console.error("Green Audio Player Error: Autoplay has been prevented, because it is not allowed by this browser.")}))}"preload"in this.player.attributes&&"none"===this.player.attributes.preload.value&&(this.playPauseBtn.style.visibility="visible",this.loading.style.visibility="hidden")}static init(t){document.querySelectorAll(t.selector).forEach((i=>{new o(i,t)}))}static getTemplate(){return'\n            <div class="holder">\n                <div class="loading">\n                    <div class="loading__spinner"></div>\n                </div>\n\n                <div class="play-pause-btn" aria-label="Play" role="button">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">\n                        <path fill="#566574" fill-rule="evenodd" d="M18 12L0 24V0" class="play-pause-btn__icon"/>\n                    </svg>\n                </div>\n            </div>\n\n            <div class="controls">\n                <span class="controls__current-time" aria-live="off" role="timer">00:00</span>\n                <div class="controls__slider slider" data-direction="horizontal">\n                    <div class="controls__progress gap-progress" aria-label="Time Slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="slider">\n                        <div class="pin progress__pin" data-method="rewind"></div>\n                    </div>\n                </div>\n                <span class="controls__total-time">00:00</span>\n            </div>\n\n            <div class="volume">\n                <div class="volume__button" aria-label="Open Volume Controls" role="button">\n                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n                        <path class="volume__speaker" fill="#566574" fill-rule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"/>\n                    </svg>\n                    <span class="message__offscreen">Press Enter or Space to show volume slider.</span>\n                </div>\n                <div class="volume__controls hidden">\n                    <div class="volume__slider slider" data-direction="vertical">\n                        <div class="volume__progress gap-progress" aria-label="Volume Slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="81" role="slider">\n                            <div class="pin volume__pin" data-method="changeVolume"></div>\n                        </div>\n                        <span class="message__offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span>\n                    </div>\n                </div>\n            </div>\n\n            <div class="download">\n                <a class="download__link" href="" download="" aria-label="Download" role="button">\n                    <svg width="24" height="24" fill="#566574" enable-background="new 0 0 29.978 29.978" version="1.1" viewBox="0 0 29.978 29.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">\n                        <path d="m25.462 19.105v6.848h-20.947v-6.848h-4.026v8.861c0 1.111 0.9 2.012 2.016 2.012h24.967c1.115 0 2.016-0.9 2.016-2.012v-8.861h-4.026z"/>\n                        <path d="m14.62 18.426l-5.764-6.965s-0.877-0.828 0.074-0.828 3.248 0 3.248 0 0-0.557 0-1.416v-8.723s-0.129-0.494 0.615-0.494h4.572c0.536 0 0.524 0.416 0.524 0.416v8.742 1.266s1.842 0 2.998 0c1.154 0 0.285 0.867 0.285 0.867s-4.904 6.51-5.588 7.193c-0.492 0.495-0.964-0.058-0.964-0.058z"/>\n                    </svg>\n                </a>\n            </div>\n        '}initEvents(){const t=this;t.audioPlayer.addEventListener("mousedown",(i=>{if(t.isDraggable(i.target)){t.currentlyDragged=i.target;const s=t[t.currentlyDragged.dataset.method].bind(t);window.addEventListener("mousemove",s,!1),t.currentlyDragged.parentElement.parentElement===t.sliders[0]&&(t.paused=t.player.paused,!1===t.paused&&t.togglePlay()),window.addEventListener("mouseup",(()=>{!1!==t.currentlyDragged&&t.currentlyDragged.parentElement.parentElement===t.sliders[0]&&t.paused!==t.player.paused&&t.togglePlay(),t.currentlyDragged=!1,window.removeEventListener("mousemove",s,!1)}),!1)}})),t.audioPlayer.addEventListener("touchstart",(i=>{if(t.isDraggable(i.target)){[t.currentlyDragged]=i.targetTouches;const s=t[t.currentlyDragged.target.dataset.method].bind(t);window.addEventListener("touchmove",s,!1),t.currentlyDragged.parentElement.parentElement===t.sliders[0]&&(t.paused=t.player.paused,!1===t.paused&&t.togglePlay()),window.addEventListener("touchend",(()=>{!1!==t.currentlyDragged&&t.currentlyDragged.parentElement.parentElement===t.sliders[0]&&t.paused!==t.player.paused&&t.togglePlay(),t.currentlyDragged=!1,window.removeEventListener("touchmove",s,!1)}),!1),i.preventDefault()}})),this.playPauseBtn.addEventListener("click",this.togglePlay.bind(t)),this.player.addEventListener("timeupdate",this.updateProgress.bind(t)),this.player.addEventListener("volumechange",this.updateVolume.bind(t)),this.player.volume=.81,this.player.addEventListener("loadedmetadata",(()=>{t.totalTime.textContent=o.formatTime(t.player.duration)})),this.player.addEventListener("seeking",this.showLoadingIndicator.bind(t)),this.player.addEventListener("seeked",this.hideLoadingIndicator.bind(t)),this.player.addEventListener("canplay",this.hideLoadingIndicator.bind(t)),this.player.addEventListener("ended",(()=>{o.pausePlayer(t.player,"ended"),t.player.currentTime=0,t.playPauseBtn.setAttribute("aria-label",t.labels.play),t.hasSetAttribute(t.playPauseBtn,"title",t.labels.play)})),this.volumeBtn.addEventListener("click",this.showHideVolume.bind(t)),window.addEventListener("resize",t.directionAware.bind(t)),window.addEventListener("scroll",t.directionAware.bind(t));for(let i=0;i<this.sliders.length;i++){const s=this.sliders[i].querySelector(".pin");this.sliders[i].addEventListener("click",t[s.dataset.method].bind(t))}this.downloadLink.addEventListener("click",this.downloadAudio.bind(t))}overcomeIosLimitations(){this.isDevice&&(this.player.addEventListener("loadedmetadata",this.hideLoadingIndicator.bind(this)),this.audioPlayer.querySelector(".volume").style.display="none",this.audioPlayer.querySelector(".controls").style.marginRight="0")}isDraggable(t){let i=!1;if(void 0===t.classList)return!1;for(let s=0;s<this.draggableClasses.length;s++)t.classList.contains(this.draggableClasses[s])&&(i=!0);return i}inRange(t){const i="touches"in t,s=this.getRangeBox(t),e=s.getBoundingClientRect(),{dataset:{direction:o}}=s;let h=null,a=null;if("horizontal"===o){h=e.x,a=h+e.width;const s=i?t.touches[0].clientX:t.clientX;if(s<h||s>a)return!1}else{h=e.top,a=h+e.height;const s=i?t.touches[0].clientY:t.clientY;if(s<h||s>a)return!1}return!0}updateProgress(){const t=this.player.currentTime,i=t/this.player.duration*100;this.progress.setAttribute("aria-valuenow",i),this.progress.style.width=`${i}%`,this.currentTime.textContent=o.formatTime(t)}updateVolume(){this.volumeProgress.setAttribute("aria-valuenow",100*this.player.volume),this.volumeProgress.style.height=100*this.player.volume+"%",this.player.volume>=.5?this.speaker.attributes.d.value="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z":this.player.volume<.5&&this.player.volume>.05?this.speaker.attributes.d.value="M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z":this.player.volume<=.05&&(this.speaker.attributes.d.value="M0 7.667v8h5.333L12 22.333V1L5.333 7.667")}getRangeBox(t){let i=t.target;const s=this.currentlyDragged;return"click"===t.type&&this.isDraggable(t.target)&&(i=t.target.parentElement.parentElement),"mousemove"===t.type&&(i=s.parentElement.parentElement),"touchmove"===t.type&&(i=s.target.parentElement.parentElement),i}getCoefficient(t){const i="touches"in t,s=this.getRangeBox(t),e=s.getBoundingClientRect();let o=0;if("horizontal"===s.dataset.direction){const s=(i?t.touches[0].clientX:t.clientX)-e.left,{width:h}=e;o=s/h}else if("vertical"===s.dataset.direction){const{height:s}=e;o=1-((i?t.touches[0].clientY:t.clientY)-e.top)/s}return o}rewind(t){this.player.seekable&&this.player.seekable.length&&this.inRange(t)&&(this.player.currentTime=this.player.duration*this.getCoefficient(t))}showVolume(){this.volumeBtn.getAttribute("aria-attribute")===this.labels.volume.open&&(this.volumeControls.classList.remove("hidden"),this.volumeBtn.classList.add("open"),this.volumeBtn.setAttribute("aria-label",this.labels.volume.close),this.hasSetAttribute(this.volumeBtn,"title",this.labels.volume.close))}showHideVolume(){this.volumeControls.classList.toggle("hidden"),this.volumeBtn.getAttribute("aria-label")===this.labels.volume.open?(this.volumeBtn.setAttribute("aria-label",this.labels.volume.close),this.hasSetAttribute(this.volumeBtn,"title",this.labels.volume.close),this.volumeBtn.classList.add("open")):(this.volumeBtn.setAttribute("aria-label",this.labels.volume.open),this.hasSetAttribute(this.volumeBtn,"title",this.labels.volume.open),this.volumeBtn.classList.remove("open"))}changeVolume(t){this.inRange(t)&&(this.player.volume=Math.round(50*this.getCoefficient(t))/50)}static formatTime(t){const i=Math.floor(t/60),s=Math.floor(t%60);return`${i<10?`0${i}`:i}:${s<10?`0${s}`:s}`}preloadNone(){this.player.duration||(this.playPauseBtn.style.visibility="hidden",this.loading.style.visibility="visible")}togglePlay(){this.preloadNone(),this.player.paused?(this.stopOthersOnPlay&&o.stopOtherPlayers(),o.playPlayer(this.player),this.playPauseBtn.setAttribute("aria-label",this.labels.pause),this.hasSetAttribute(this.playPauseBtn,"title",this.labels.pause)):(o.pausePlayer(this.player,"toggle"),this.playPauseBtn.setAttribute("aria-label",this.labels.play),this.hasSetAttribute(this.playPauseBtn,"title",this.labels.play))}hasSetAttribute(t,i,s){this.showTooltips&&t.hasAttribute(i)&&t.setAttribute(i,s)}setCurrentTime(t){const i=this.player.currentTime,s=Math.floor(this.player.duration);i+t<0&&0===i?this.player.currentTime=this.player.currentTime:i+t<0?this.player.currentTime=0:i+t>s?this.player.currentTime=s:this.player.currentTime+=t}setVolume(t){if(this.isDevice)return;const i=this.player.volume;i+t>=0&&i+t<1?this.player.volume+=t:this.player.volume=i+t<=0?0:1}unPressKb(t){const i=t||window.event;!this.seeking||37!==i.keyCode&&39!==i.keyCode||(this.togglePlay(),this.seeking=!1)}pressKb(t){const i=t||window.event;switch(i.keyCode){case 13:case 32:if(document.activeElement.parentNode===this.playPauseBtn)this.togglePlay();else if(document.activeElement.parentNode===this.volumeBtn||document.activeElement===this.sliders[1]){if(document.activeElement===this.sliders[1])try{this.volumeBtn.children[0].focus()}catch(t){this.volumeBtn.focus()}this.showHideVolume()}13===i.keyCode&&this.showDownload&&document.activeElement.parentNode===this.downloadLink&&this.downloadLink.focus();break;case 37:case 39:document.activeElement===this.sliders[0]&&(this.setCurrentTime(37===i.keyCode?-5:5),!this.player.paused&&this.player.seeking&&(this.togglePlay(),this.seeking=!0));break;case 38:case 40:document.activeElement.parentNode!==this.volumeBtn&&document.activeElement!==this.sliders[1]||this.setVolume(38===i.keyCode?.05:-.05),document.activeElement.parentNode===this.volumeBtn&&this.showVolume()}}static pausePlayer(t){t.parentElement.querySelector(".play-pause-btn__icon").attributes.d.value="M18 12L0 24V0",t.pause()}static playPlayer(t){t.parentElement.querySelector(".play-pause-btn__icon").attributes.d.value="M0 0h6v24H0zM12 0h6v24h-6z",t.play()}static stopOtherPlayers(){const t=document.querySelectorAll(".green-audio-player audio");for(let i=0;i<t.length;i++)o.pausePlayer(t[i])}showLoadingIndicator(){this.playPauseBtn.style.visibility="hidden",this.loading.style.visibility="visible"}hideLoadingIndicator(){this.playPauseBtn.style.visibility="visible",this.loading.style.visibility="hidden"}showDownload(){this.download.style.display="block"}downloadAudio(){const t=this.player.currentSrc,i=t.split("/").reverse()[0];this.downloadLink.setAttribute("href",t),this.downloadLink.setAttribute("download",i)}directionAware(){this.volumeControls.classList.remove("top","middle","bottom"),window.innerHeight<250?this.volumeControls.classList.add("middle"):this.audioPlayer.getBoundingClientRect().top<180?this.volumeControls.classList.add("bottom"):this.volumeControls.classList.add("top")}}var h=e(Object.freeze({__proto__:null,default:o})).default;const a=class{constructor(s){t(this,s),this.updateRate=i(this,"updateRate",7),this.src="",this.audio_id="",this._rate=1,this.rate=1,this.settings={speedList:[.5,1,1.5]},this._speedPosition=1}async initialize(t){this.settings=t,this._speedPosition=this.settings.speedList.findIndex((t=>1===t)),this._rate=this.settings.speedList[this._speedPosition]}playbackRateHandler(t){this._rate=t,this._audioObj.playbackRate=this._rate}componentDidLoad(){h.init({selector:`div#audioPlayer${this.audio_id}`,showTooltips:!0,showDownloadButton:!0,stopOthersOnPlay:!0,enableKeystrokes:!0}),this.dark?(this._audioObj=document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark .c-audio__object`),this.createSpeedControl()):(this._audioObj=document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player .c-audio__object`),this.createSpeedControl())}componentWillLoad(){this.coloraudio=this.dark?"c-audio-player-dark":"c-audio-player"}updatePlaybackRate(){this.settings&&this.settings.speedList&&(this._speedPosition<this.settings.speedList.length-1?this._speedPosition++:this._speedPosition=0,this._rate=this.settings.speedList[this._speedPosition],this.dark?(this._audioObj=document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark .c-audio__object`),this._audioObj.playbackRate=this._rate,document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark .speed .speed__display`).innerHTML=`${this._rate}x`):(this._audioObj=document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player .c-audio__object`),this._audioObj.playbackRate=this._rate,document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player .speed .speed__display`).innerHTML=`${this._rate}x`))}createSpeedControl(){if(this.dark){let t=document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark`);const i=document.createElement("div"),s=document.createElement("a"),e=document.createElement("span");i.className="speed",s.className="speed__controls material-icons",s.innerHTML="speed",s.setAttribute("role","button"),e.className="speed__display",e.id="speed__display",e.innerHTML=`${this._rate}x`,t.insertBefore(i,t.children[3]),i.append(s),i.append(e),s.addEventListener("click",(()=>this.updatePlaybackRate()))}else{let t=document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player`);const i=document.createElement("div"),s=document.createElement("a"),e=document.createElement("span");i.className="speed",s.className="speed__controls material-icons",s.innerHTML="speed",s.setAttribute("role","button"),e.className="speed__display",e.id="speed__display",e.innerHTML=`${this._rate}x`,t.insertBefore(i,t.children[3]),i.append(s),i.append(e),s.addEventListener("click",(()=>this.updatePlaybackRate()))}}render(){let t=`\n            window.addEventListener('DOMContentLoaded', function () {\n                var audioPlayer${this.audio_id} = document.querySelector('#audioPlayer${this.audio_id}');\n                audioPlayer${this.audio_id}.initialize({ "speedList": [0.5, 0.6, 0.7, 1, 1.5, 2] });\n            });\n        `;return s("div",{id:"audioPlayer"+this.audio_id,class:`${this.coloraudio} ${this.shortdisplay?"c-audio-player-short":""}`},s("audio",{class:"c-audio__object",preload:"metadata"},s("source",{src:this.src,type:"audio/mpeg"},"O seu navegador não suporta o elemento ",s("code",null,"audio"),".")),s("script",null,t))}static get watchers(){return{rate:["playbackRateHandler"]}}};export{a as yduqs_audio_player}