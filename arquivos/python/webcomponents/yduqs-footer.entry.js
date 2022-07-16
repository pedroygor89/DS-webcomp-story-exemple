import { r as registerInstance, h, e as Host } from './index-6ca065bd.js';

const Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.project_python = false;
    this.english = false;
    this.spanish = false;
    this.template_anitta = false;
    this.hide_pagination = false;
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
    if (document.body.classList.contains('project_python')) {
      this.project_python = true;
      document.querySelector('yduqs-footer').classList.add('python_footer');
    }
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
  openModal(getModal) {
    var modal = document.getElementById(getModal);
    modal.setAttribute('isopen', 'true');
  }
  render() {
    return (h(Host, null, h("div", { class: `c-footer-bgColor` }, !this.project_python && (h("div", { class: "container" }, this.template_anitta ? (h("yduqs-title", { topic_title: "Backstage" })) : (h("yduqs-title", { topic_title: this.english ? 'References' : this.spanish ? 'Referencias' : 'Referências' })), h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: "col-12 col-md-10 col-lg-8" }, h("slot", { name: "itens-referencia" }))), this.template_anitta ? (h("yduqs-title", { topic_title: "Explore +" })) : (h("yduqs-title", { topic_title: this.english ? 'Go Further' : this.spanish ? 'Explora +' : 'Explore +' })), h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: "col-12 col-md-10 col-lg-8" }, h("slot", { name: "itens-exploremais" }))))), h("div", { class: "c-footer-border mt-5 py-3" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "d-flex justify-content-center align-items-center" }, !this.project_python ? (h("div", null, h("a", { href: `javascript:${this.hrefbtnprint}`, class: `c-button ${!this.btnimprimir ? 'disableText' : ''}` }, ' ', h("i", { class: "material-icons" }, "picture_as_pdf"), ' ', h("span", { class: "txt-btnFooter" }, this.english ? 'Download material' : this.spanish ? 'Descargar el contenido' : 'Baixar conteúdo'), ' '))) : (h("div", { class: "w-100 text-center" }, h("button", { class: "modal c-button c-footer-button u-text--medium d-inline-block me-3 mb-3", onClick: () => this.openModal('modal-referencias') }, h("span", { class: "material-icons d-inline-block" }, "library_books"), h("span", null, this.english ? 'References' : this.spanish ? 'Referencias' : 'Referências')), h("a", { href: `javascript:${this.hrefbtnprint}`, class: `${!this.btnimprimir ? 'disableText' : ''}` }, h("button", { class: "c-button c-footer-button u-text--medium d-inline-block mb-3" }, h("span", { class: "material-icons d-inline-block" }, "picture_as_pdf"), h("span", null, this.english ? 'Download material' : this.spanish ? 'Descargar el contenido' : 'Baixar conteúdo')))))))))), !this.hide_pagination && h("yduqs-pager", { id: "pager", project_python: this.project_python }), h("yduqs-modal", { id: "modal-referencias" }, h("div", { class: "row" }, h("div", { class: "col" }, h("span", { class: "c-modal__title" }, "Refer\u00EAncias"))), h("div", { class: "row" }, h("div", { class: "col" }, h("slot", { name: "itens-referencia" }))))));
  }
};

export { Footer as yduqs_footer };
