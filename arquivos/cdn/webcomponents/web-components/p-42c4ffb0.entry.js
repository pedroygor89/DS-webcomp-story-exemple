import{r as t,c as a,h as s,F as n,a as e}from"./p-3b8a929f.js";const i=class{constructor(s){t(this,s),this.btnClick=a(this,"yduqs-lab-action",7),this.hiddenFullScreen=!1,this.inFullScreen=!1}listennerFullScreenChange(){this.inFullScreen=Boolean(document.fullscreenElement)}handleFullScreen(){const t=document.querySelector("body");document.fullscreenElement?document.exitFullscreen():t.requestFullscreen().catch((t=>{alert(`Error attempting to enable full-screen mode: ${t.message} (${t.name})`)}))}render(){var t;return s(e,{class:"c-header-lab"},s("div",{class:"c-header-lab-title"},"Laboratório Virtual"),s("div",{class:"c-header-lab-actions"},null===(t="string"==typeof this.items?JSON.parse(this.items):this.items)||void 0===t?void 0:t.map((t=>s("div",{"aria-role":"button",class:"item",onClick:()=>this.btnClick.emit({action:t.action})},s("button",{title:t.label||t.icon,type:"button",class:"c-button c-button__icon-container c-button__icon-small"},s("span",{class:"p-btn c-button__icon material-icons"},t.icon)),t.label&&s(n,null,s("span",{class:"material-icons single-icon"},t.icon),s("span",{class:"text"},t.label))))),s("div",{"aria-role":"button",class:"item",onClick:()=>this.handleFullScreen()},s("button",{title:this.inFullScreen?"Sair da Tela Cheia":"Tela Cheia",type:"button",class:"c-button c-button__icon-container c-button__icon-small"},s("span",{class:"p-btn c-button__icon material-icons"},this.inFullScreen?"fullscreen_exit":"fullscreen")),s("span",{class:"material-icons single-icon"},this.inFullScreen?"fullscreen_exit":"fullscreen"),s("span",{class:"text"},this.inFullScreen?"Sair da Tela Cheia":"Tela Cheia"))))}};export{i as yduqs_header_lab}