import { r as registerInstance, h, e as Host } from './index-5acc1e77.js';

const Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("div", { class: "c-footer-bgColor" }, h("div", { class: "container" }, this.template_anitta ? (h("yduqs-title", { topic_title: "Backstage" })) : (h("yduqs-title", { topic_title: this.english ? 'References' : this.spanish ? 'Referencias' : 'Referências' })), h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: "col-12 col-md-10 col-lg-8" }, h("slot", { name: "itens-referencia" }))), this.template_anitta ? (h("yduqs-title", { topic_title: "Explore +" })) : (h("yduqs-title", { topic_title: this.english ? 'Go Further' : this.spanish ? 'Explora +' : 'Explore +' })), h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: "col-12 col-md-10 col-lg-8" }, h("slot", { name: "itens-exploremais" })))), h("div", { class: "c-footer-border mt-5 py-3" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "d-flex justify-content-center align-items-center" }, h("div", null, h("a", { href: `javascript:${this.hrefbtnprint}`, class: `c-button ${!this.btnimprimir ? 'disableText' : ''}` }, ' ', h("i", { class: "material-icons" }, "picture_as_pdf"), ' ', h("span", { class: "txt-btnFooter" }, this.english ? 'Download material' : this.spanish ? 'Descargar el contenido' : 'Baixar conteúdo'), ' '))))))), !this.hide_pagination && h("yduqs-pager", { id: "pager" }), !this.hide_motivational_messages && h("yduqs-motivational-messages", { id: "global-messages" })));
  }
};

export { Footer as yduqs_footer };
