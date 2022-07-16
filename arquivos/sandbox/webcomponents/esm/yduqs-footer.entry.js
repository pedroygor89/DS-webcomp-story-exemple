import { r as registerInstance, h } from './index-c3ccce17.js';

let Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
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
  render() {
    return (h("div", { class: "c-footer-bgColor" }, h("div", { class: "container" }, h("yduqs-title", { topic_title: this.english ? 'References' : this.spanish ? 'Referencias' : 'Referências' }), h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: "col-12 col-md-10 col-lg-8" }, h("slot", { name: "itens-referencia" }))), h("yduqs-title", { topic_title: this.english ? 'Go Further' : this.spanish ? 'Explora +' : 'Explore +' }), h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: "col-12 col-md-10 col-lg-8" }, h("slot", { name: "itens-exploremais" })))), h("div", { class: "c-footer-border mt-5 py-3" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "d-flex justify-content-center align-items-center" }, h("div", null, h("a", { href: `javascript:${this.hrefbtnprint}`, class: `btn btn-apostila ${!this.btnimprimir ? 'disableText' : ''}` }, h("i", { class: "material-icons" }, "picture_as_pdf"), " ", this.namebtnimprimir))))))));
  }
};

export { Footer as yduqs_footer };
