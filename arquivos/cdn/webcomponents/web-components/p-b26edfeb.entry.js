import{r as o,h as t,g as e,a as i}from"./p-3b8a929f.js";import{i as s}from"./p-dc634267.js";const a=class{constructor(t){o(this,t),this.module_number=0,this.module_number_video=0,this.type_video="",this.english=!1,this.spanish=!1,this.scrollModules=void 0,this.template_doktor=!1}async changeVideo(o){this.srcVideo=o}async changeModule(o){this.moduleId="apresentacao"==o?99:"conclusao"==o?100:o,this.el.querySelector("yduqs-playlist-video").module_number=parseInt(this.moduleId),this.el.querySelectorAll(".activated").forEach((o=>{o.classList.remove("activated")})),this.el.querySelectorAll(".bt-mod-"+o).forEach((o=>{o.classList.add("activated")}))}async changeVideoExternal(o){var t=o.id.split("-")[1];this.changeModule(t),this.moduleId="apresentacao"==t?99:"conclusao"==t?100:t,this.module_number=parseInt(this.moduleId),this.module_number_video=parseInt(this.moduleId),this.title_gallery=o.title_video,this.type_video=o.type,this.el.querySelector("yduqs-playlist-video").changeVideoGallery(o)}handleWindowResize(){this.verifyIsMobile()}renderNameModule(o){return(null==o?void 0:o.includes("modulo"))?(this.english?"Section ":"Módulo ")+o.slice(6):"apresentacao"==o||"Módulo apresentacao"==o?this.english?"Warm Up":this.spanish?"Introducción":"Introdução":"conclusao"==o?this.english?"Conclusion":this.spanish?"Conclusión":"Conclusão":(null==o?void 0:o.charAt(0).toUpperCase())+(null==o?void 0:o.slice(1))}verifyIsMobile(){window.innerWidth>991?this.getSizeScrollButtonsMenu():this.getSizeScrollButtonsMenuMobile()}mouseMoveButtonsModule(){document.querySelectorAll(".modules-wrapper").forEach((o=>{o.scrollTop=0,o.scrollLeft=0;let t={top:0,left:0,x:0,y:0};const e=function(e){const i=e.clientX-t.x;o.scrollTop=t.top-(e.clientY-t.y),o.scrollLeft=t.left-i},i=function(){document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",i)};o.addEventListener("mousedown",(function(s){t={left:o.scrollLeft,top:o.scrollTop,x:s.clientX,y:s.clientY},document.addEventListener("mousemove",e),document.addEventListener("mouseup",i)}))}))}touchMoveButtonsModules(){document.querySelectorAll(".modules-wrapper").forEach((o=>{o.scrollTop=0,o.scrollLeft=0;let t={top:0,left:0,x:0,y:0};const e=function(e){o.scrollLeft=t.left-(e.touches[0].clientX-t.x)},i=function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",i)},s=function(s){t={left:o.scrollLeft,top:o.scrollTop,x:s.touches[0].clientX,y:s.touches[0].clientY},document.addEventListener("touchmove",e),document.addEventListener("touchend",i)};o.addEventListener("touchstart",s)}))}renderButtonsMenu(){const o=[];return o.push(t("div",{class:"module-button bt-mod-0 activated",id:"all","data-gtm-event-category":":[[instituicao]]:[[tipo-usuario]]","data-gtm-event-action":"galeria-video:conteudo-clique-botao","data-gtm-event-label":"trocar-modulo",onClick:o=>{this.changeModule(0),o.stopPropagation()}},t("p",null,s("pager.todos")))),document.querySelectorAll("module").forEach((e=>{let i=document.getElementById("apresentacao").querySelectorAll("yduqs-video-player"),s=document.getElementById("conclusao"),a=s.querySelectorAll("yduqs-video-player"),l=s.querySelectorAll("yduqs-module-video");0!==i.length&&"conclusao"!==e.id?o.push(t("div",{class:`module-button bt-mod-${e.id.replace("modulo","")}`,"data-gtm-event-category":":[[instituicao]]:[[tipo-usuario]]","data-gtm-event-action":"galeria-video:conteudo-clique-botao","data-gtm-event-label":"trocar-modulo",onClick:o=>{this.changeModule(e.id.replace("modulo","")),o.stopPropagation()}},t("p",null,this.renderNameModule(e.id)))):0===l.length&&0===a.length||"apresentacao"===e.id?"apresentacao"!==e.id&&"conclusao"!==e.id&&o.push(t("div",{class:`module-button bt-mod-${e.id.replace("modulo","")}`,"data-gtm-event-category":":[[instituicao]]:[[tipo-usuario]]","data-gtm-event-action":"galeria-video:conteudo-clique-botao","data-gtm-event-label":"trocar-modulo",onClick:o=>{this.changeModule(e.id.replace("modulo","")),o.stopPropagation()}},t("p",null,this.renderNameModule(e.id)))):o.push(t("div",{class:`issomesmo module-button bt-mod-${e.id.replace("modulo","")}`,"data-gtm-event-category":":[[instituicao]]:[[tipo-usuario]]","data-gtm-event-action":"galeria-video:conteudo-clique-botao","data-gtm-event-label":"trocar-modulo",onClick:o=>{this.changeModule(e.id.replace("modulo","")),o.stopPropagation()}},t("p",null,this.renderNameModule(e.id))))})),t("div",{id:"box-modules-buttons",class:"modules-wrapper"},...o)}closeModalGallery(){let o=document.querySelector("yduqs-menu yduqs-modal");document.querySelector("yduqs-video-player iframe").removeAttribute("src"),o.setAttribute("isOpen","false")}getSizeScrollButtonsMenu(){this.el.querySelectorAll(".module-navigation .modules-wrapper").forEach((o=>{var t=this.el.querySelector(".before"),e=this.el.querySelector(".after");let i=o.getBoundingClientRect().right,s=o.getBoundingClientRect().x,a=o.scrollLeft,l=o.scrollWidth,n=o.getBoundingClientRect().width,d=i-s+a;var c=d.toFixed();const u=parseInt(c);0==a?t.classList.add("d-none"):t.classList.remove("d-none"),l-50<=n||u===l&&0!=a?e.classList.add("d-none"):e.classList.remove("d-none"),o.addEventListener("scroll",(function(){i=o.getBoundingClientRect().right,s=o.getBoundingClientRect().x,a=o.scrollLeft,l=o.scrollWidth,n=o.getBoundingClientRect().width,d=i-s+a;var c=d.toFixed();const u=parseInt(c);0==a?t.classList.add("d-none"):t.classList.remove("d-none"),l<=n||u==l&&0!=a?e.classList.add("d-none"):e.classList.remove("d-none")}))}))}getSizeScrollButtonsMenuMobile(){this.el.querySelectorAll(".module-navigation-mob .modules-wrapper").forEach((o=>{var t=this.el.querySelector(".before-mob"),e=this.el.querySelector(".after-mob");let i=o.getBoundingClientRect().right,s=o.getBoundingClientRect().x,a=o.scrollLeft,l=o.scrollWidth,n=o.getBoundingClientRect().width,d=i-s+a;var c=d.toFixed();const u=parseInt(c);0==a?t.classList.add("d-none"):t.classList.remove("d-none"),l-50<=n||u===l&&0!=a?e.classList.add("d-none"):e.classList.remove("d-none"),o.addEventListener("scroll",(function(){i=o.getBoundingClientRect().right,s=o.getBoundingClientRect().x,a=o.scrollLeft,l=o.scrollWidth,n=o.getBoundingClientRect().width,d=i-s+a;var c=d.toFixed();const u=parseInt(c);0==a?t.classList.add("d-none"):t.classList.remove("d-none"),l<=n||u==l&&0!=a?e.classList.add("d-none"):e.classList.remove("d-none")}))}))}nextScroll(){this.el.querySelectorAll(".modules-wrapper").forEach((o=>{o.scroll(o.scrollLeft+50,0)}))}prevScroll(){this.el.querySelectorAll(".modules-wrapper").forEach((o=>{o.scroll(o.scrollLeft-50,0)}))}async componentWillLoad(){const o=document.querySelector("html").getAttribute("lang");"en-us"===o?this.english=!0:"es"===o&&(this.spanish=!0),document.body.classList.contains("template-doktor")&&(this.template_doktor=!0),this.verifyIsMobile(),this.mouseMoveButtonsModule(),this.touchMoveButtonsModules()}componentWillRender(){this.verifyIsMobile(),this.mouseMoveButtonsModule(),this.touchMoveButtonsModules()}render(){return t("div",{class:"c-gallery-video"},t("div",{class:"c-gallery-video__header d-none d-lg-inline"},t("h5",null,0==this.module_number_video?s("pager.todos"):99==this.module_number_video?s("pager.apresentacao"):100==this.module_number_video?s("pager.conclusao"):s("pager.modulo")+" "+this.module_number_video),t("div",{class:"box-modules d-flex"},t("h1",{class:"col-12 col-lg-8 col-xxl-9",innerHTML:this.title_gallery}),t("div",{class:"module-navigation d-flex col-lg-4 col-xxl-3"},t("div",{class:"module-button-navigation before",id:"before",onClick:()=>{this.prevScroll()}},t("span",{class:"material-icons"},"keyboard_arrow_left")),this.renderButtonsMenu(),t("div",{class:"module-button-navigation after",id:"after",onClick:()=>{this.nextScroll()}},t("span",{class:"material-icons"},"keyboard_arrow_right"))))),t("div",{class:"c-gallery-video__content"},t("div",{class:"c-gallery-video__content_videos col-12 col-lg-8 col-xxl-9"},t("div",{class:"close-modal d-lg-none d-xl-none d-sxl-none",onClick:()=>{this.closeModalGallery()}},t("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",{d:"M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z",fill:"#fff"}))),t("div",{class:"c-gallery-video__content_videos_video"},t("yduqs-video-player",{"skip-menu":"true",src:this.srcVideo,videoId:"",width:"",height:""})),t("div",{class:"c-gallery-video__header d-inline d-lg-none"},t("h5",null,0==this.module_number_video?s("pager.todos"):99==this.module_number_video?s("pager.apresentacao"):100==this.module_number_video?s("pager.conclusao"):s("pager.modulo")+" "+this.module_number_video),t("div",{class:"box-modules d-flex flex-column"},t("h1",{class:"col-lg-8 col-xxl-9",innerHTML:this.title_gallery}),t("div",{class:"d-flex module-navigation-mob"},t("div",{class:"module-button-navigation before-mob",id:"before",onClick:()=>{this.prevScroll()}},t("span",{class:"material-icons"},"keyboard_arrow_left")),this.renderButtonsMenu(),t("div",{class:"module-button-navigation after-mob",id:"after",onClick:()=>{this.nextScroll()}},t("span",{class:"material-icons"},"keyboard_arrow_right")))))),t("div",{class:"c-gallery-video__content_playlist col-12 col-lg-4 col-xxl-3"},t("yduqs-playlist-video",{id:"playlist",module_number:this.module_number}))))}get el(){return e(this)}},l=class{constructor(t){o(this,t),this.module_number=0,this.videoItems={modules:[]},this.videoSelected="",this.english=!1,this.spanish=!1}async initialize(o){this.settings=o}async changeVideoGallery(o){document.querySelectorAll("yduqs-gallery-video").forEach((t=>{t.srcVideo=o.link_video,this.moduleId="apresentacao"==o.id.split("-")[1]?99:"conclusao"==o.id.split("-")[1]?100:o.id.split("-")[1],t.module_number_video=parseInt(this.moduleId),t.title_gallery=o.title_video})),this.videoSelected=o.id}renderPlaylistVideo(){const o=[];if(void 0!==this.settings)return this.settings.modules.forEach((e=>{e.playlist.forEach((i=>{let s="apresentacao"==e.module.replace("modulo_","")?99:"conclusao"==e.module.replace("modulo_","")?100:e.module.replace("modulo_","");0!=this.module_number&&this.module_number!=s||o.push(t("yduqs-card-video",{"data-gtm-event-category":":[[instituicao]]:[[tipo-usuario]]","data-gtm-event-action":"galeria-video:conteudo-clique-item","data-gtm-event-label":"selecionar-video",id_video:i.id,title_video:i.title_video,subtitle_video:i.subtitle_video,thumb_video:i.thumb_video,link_video:i.link_video,paragraph:i.paragraph,time:i.time,border_bottom:i.border_bottom,active:i.id==this.videoSelected,module_video:e.module.replace("modulo_",""),type_video:i.type,onClick:()=>{this.changeVideoGallery(i)}}))}))})),t("div",{class:"c-playlist-video__items"},...o)}async videosLoad(){document.querySelectorAll("module").forEach((o=>{let t=o.id.replace("modulo",""),e="modulo_"+t,i=[];o.querySelectorAll("yduqs-video-player").forEach(((o,e)=>{let s=o.closest("yduqs-module-video"),a=o.closest("yduqs-gallery-video"),l=o.closest("yduqs-gallery-video"),n=o.closest("yduqs-teoria");if(n||s||a||l)n&&i.push({id:`mod-${t}-vid-${e}`,title_video:this.english?"Theory in Practice":this.spanish?"Teoría en la Práctica":"Teoria na Prática",subtitle_video:"",thumb_video:"https://stensineme.blob.core.windows.net/designsystem/test/vid1.png",link_video:o.src,paragraph:"",time:"",border_bottom:!1,type:"Video"});else{let s=o.closest(".container").querySelector("yduqs-title");i.push({id:`mod-${t}-vid-${e}`,title_video:null==s?void 0:s.topic_title,subtitle_video:"",thumb_video:"https://stensineme.blob.core.windows.net/designsystem/test/vid1.png",link_video:o.src,paragraph:"",time:"",border_bottom:!1,type:"Video"})}})),this.videoItems.modules.push({module:e,playlist:i})}))}async jsonLoad(){if(document.querySelector("yduqs-module-video")){if(document.body.classList.contains("template_recursos"))var o="https://stensineme.blob.core.windows.net/designsystem/test/playlist_teste.json";else o="./json/videos.json";fetch(o).then((o=>o.json())).then((o=>{o.modules.forEach((o=>{this.videoItems.modules.forEach(((t,e)=>{o.module==t.module&&(this.videoItems.modules[e].playlist=this.videoItems.modules[e].playlist.concat(o.playlist))})),this.videoItems.modules.forEach(((o,t)=>{let e=0;void 0!==o.playlist&&o.playlist.forEach(((i,a)=>{let l=o.module.replace("modulo_","");"Video"===i.type?(this.videoItems.modules[t].playlist[a].id=`mod-${l}-vid-${a}`,this.videoItems.modules[t].playlist[a].type="Video",this.videoItems.modules[t].playlist[a].module_video="apresentacao"==l?"Introduçao":"conclusao"==l?"Conclusão":"Módulo "+l):(this.videoItems.modules[t].playlist[a].id=`mod-${l}-pl-${e}`,this.videoItems.modules[t].playlist[a].type=s("pager.teexplico"),this.videoItems.modules[t].playlist[a].module_video="Módulo "+l,e++)}))}))}))}))}}async componentWillLoad(){await this.videosLoad(),await this.jsonLoad()}componentDidRender(){this.initialize(this.videoItems)}render(){return t(i,null,t("div",{class:"c-playlist-video"},this.renderPlaylistVideo()))}get el(){return e(this)}};export{a as yduqs_gallery_video,l as yduqs_playlist_video}