'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const Footer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
    this.template_anitta = false;
    this.hide_pagination = false;
    this.hide_motivational_messages = false;
  }
  componentWillLoad() {
    const htmlTagFooter = document.querySelector('html');
    const htmlLanguageFooter = htmlTagFooter.getAttribute('lang');
    if (htmlLanguageFooter === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageFooter === 'es') {
      this.spanish = true;
    }
  }
  componentDidRender() {
    let hasLoader = document.querySelector('yduqs-loader');
    if (hasLoader) {
      let showScroolBody = document.querySelector('body');
      let showHeader = document.querySelector('header');
      let showMain = document.querySelector('main');
      let showFooter = document.querySelector('footer');
      let removeLoader = document.querySelector('yduqs-loader');
      setTimeout(() => {
        showScroolBody.style.overflowY = 'initial';
        showHeader.style.overflow = 'initial';
        showMain.style.overflow = 'initial';
        showFooter.style.overflow = 'initial';
        showHeader.style.opacity = '1';
        showMain.style.opacity = '1';
        showFooter.style.opacity = '1';
        removeLoader.style.opacity = '0';
        removeLoader.remove();
      }, 8000);
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "c-footer-bgColor" }, index.h("div", { class: "container" }, this.template_anitta ? (index.h("yduqs-title", { topic_title: "Backstage" })) : (index.h("yduqs-title", { topic_title: this.english ? 'References' : this.spanish ? 'Referencias' : 'Referências' })), index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: "col-12 col-md-10 col-lg-8" }, index.h("slot", { name: "itens-referencia" }))), this.template_anitta ? (index.h("yduqs-title", { topic_title: "Explore +" })) : (index.h("yduqs-title", { topic_title: this.english ? 'Go Further' : this.spanish ? 'Explora +' : 'Explore +' })), index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: "col-12 col-md-10 col-lg-8" }, index.h("slot", { name: "itens-exploremais" })))), index.h("div", { class: "c-footer-border mt-5 py-3" }, index.h("div", { class: "container" }, index.h("div", { class: "row" }, index.h("div", { class: "d-flex justify-content-center align-items-center" }, index.h("div", null, index.h("a", { href: `javascript:${this.hrefbtnprint}`, class: `c-button ${!this.btnimprimir ? 'disableText' : ''}` }, ' ', index.h("i", { class: "material-icons" }, "picture_as_pdf"), ' ', index.h("span", { class: "txt-btnFooter" }, this.english ? 'Download material' : this.spanish ? 'Descargar el contenido' : 'Baixar conteúdo'), ' '))))))), !this.hide_pagination && index.h("yduqs-pager", { id: "pager" }), !this.hide_motivational_messages && index.h("yduqs-motivational-messages", { id: "global-messages" })));
  }
};

exports.yduqs_footer = Footer;
