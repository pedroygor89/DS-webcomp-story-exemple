import{r as t,h as s}from"./p-c4393f38.js";const n=class{constructor(s){t(this,s),this.english=!1,this.spanish=!1}componentWillLoad(){const t=document.querySelector("html").getAttribute("lang");"en-us"===t?this.english=!0:"es"===t&&(this.spanish=!0)}render(){return s("div",{class:"c-module-rating col-12"},s("yduqs-rating",{cta:this.cta,icon:this.icon,tamanho:this.tamanho,module:this.module}),s("div",{class:"c-module-rating__button-container"},s("button",{type:"button",class:"c-button u-text--small c-button--dark",tabindex:"1",disabled:!0},this.english?"Send":"Enviar")))}};export{n as yduqs_module_rating}