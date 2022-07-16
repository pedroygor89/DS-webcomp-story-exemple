'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let Footer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", { class: "c-footer-bgColor" }, index.h("div", { class: "container" }, index.h("yduqs-title", { topic_title: this.english ? 'References' : this.spanish ? 'Referencias' : 'Referências' }), index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: "col-12 col-md-10 col-lg-8" }, index.h("slot", { name: "itens-referencia" }))), index.h("yduqs-title", { topic_title: this.english ? 'Go Further' : this.spanish ? 'Explora +' : 'Explore +' }), index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: "col-12 col-md-10 col-lg-8" }, index.h("slot", { name: "itens-exploremais" })))), index.h("div", { class: "c-footer-border mt-5 py-3" }, index.h("div", { class: "container" }, index.h("div", { class: "row" }, index.h("div", { class: "d-flex justify-content-center align-items-center" }, index.h("div", null, index.h("a", { href: `javascript:${this.hrefbtnprint}`, class: `btn btn-apostila ${!this.btnimprimir ? 'disableText' : ''}` }, index.h("i", { class: "material-icons" }, "picture_as_pdf"), " ", this.namebtnimprimir))))))));
  }
};

exports.yduqs_footer = Footer;
