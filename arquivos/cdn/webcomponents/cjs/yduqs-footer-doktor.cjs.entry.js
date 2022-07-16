'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const Footer = class {
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
    return (index.h(index.Host, null, index.h("div", { class: "c-footer-bgColor" }, index.h("div", { class: "container" }, index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: "col-12 text-center" }, index.h("img", { class: "mt-3", width: "120", src: "./img/logo_idomed.png" }), index.h("p", { class: "c-paragraph u-text--medium text-center mt-0" }, "Todos os direitos reservados.", index.h("br", null), "Veja a nossa pol\u00EDtica de privacidade e os termos de uso.")))))));
  }
};

exports.yduqs_footer_doktor = Footer;
