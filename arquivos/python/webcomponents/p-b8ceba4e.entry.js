import{r as t,h as e,a as s}from"./p-c4393f38.js";const i=class{constructor(e){t(this,e),this.project_python=!1,this.english=!1,this.spanish=!1,this.template_anitta=!1,this.hide_pagination=!1}componentWillLoad(){const t=document.querySelector("html").getAttribute("lang");"en-us"===t?this.english=!0:"es"===t&&(this.spanish=!0)}componentDidRender(){if(document.body.classList.contains("project_python")&&(this.project_python=!0,document.querySelector("yduqs-footer").classList.add("python_footer")),document.querySelector("yduqs-loader")){let t=document.querySelector("body"),e=document.querySelector("header"),s=document.querySelector("main"),i=document.querySelector("footer"),o=document.querySelector("yduqs-loader");setTimeout((()=>{t.style.overflowY="initial",e.style.overflow="initial",s.style.overflow="initial",i.style.overflow="initial",e.style.opacity="1",s.style.opacity="1",i.style.opacity="1",o.style.opacity="0",o.remove()}),8e3)}}openModal(t){document.getElementById(t).setAttribute("isopen","true")}render(){return e(s,null,e("div",{class:"c-footer-bgColor"},!this.project_python&&e("div",{class:"container"},e("yduqs-title",this.template_anitta?{topic_title:"Backstage"}:{topic_title:this.english?"References":this.spanish?"Referencias":"Referências"}),e("div",{class:"row align-items-center justify-content-center"},e("div",{class:"col-12 col-md-10 col-lg-8"},e("slot",{name:"itens-referencia"}))),e("yduqs-title",this.template_anitta?{topic_title:"Explore +"}:{topic_title:this.english?"Go Further":this.spanish?"Explora +":"Explore +"}),e("div",{class:"row align-items-center justify-content-center"},e("div",{class:"col-12 col-md-10 col-lg-8"},e("slot",{name:"itens-exploremais"})))),e("div",{class:"c-footer-border mt-5 py-3"},e("div",{class:"container"},e("div",{class:"row"},e("div",{class:"d-flex justify-content-center align-items-center"},this.project_python?e("div",{class:"w-100 text-center"},e("button",{class:"modal c-button c-footer-button u-text--medium d-inline-block me-3 mb-3",onClick:()=>this.openModal("modal-referencias")},e("span",{class:"material-icons d-inline-block"},"library_books"),e("span",null,this.english?"References":this.spanish?"Referencias":"Referências")),e("a",{href:`javascript:${this.hrefbtnprint}`,class:this.btnimprimir?"":"disableText"},e("button",{class:"c-button c-footer-button u-text--medium d-inline-block me-3 mb-3"},e("span",{class:"material-icons d-inline-block"},"picture_as_pdf"),e("span",null,this.english?"Download material":this.spanish?"Descargar el contenido":"Baixar conteúdo")))):e("div",null,e("a",{href:`javascript:${this.hrefbtnprint}`,class:"c-button "+(this.btnimprimir?"":"disableText")}," ",e("i",{class:"material-icons"},"picture_as_pdf")," ",e("span",{class:"txt-btnFooter"},this.english?"Download material":this.spanish?"Descargar el contenido":"Baixar conteúdo")," "))))))),!this.hide_pagination&&e("yduqs-pager",{id:"pager",project_python:this.project_python}),e("yduqs-modal",{id:"modal-referencias"},e("div",{class:"row"},e("div",{class:"col"},e("span",{class:"c-modal__title"},"Referências"))),e("div",{class:"row"},e("div",{class:"col"},e("slot",{name:"itens-referencia"})))))}};export{i as yduqs_footer}