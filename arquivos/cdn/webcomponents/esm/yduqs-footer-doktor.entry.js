import { r as registerInstance, h, a as Host } from './index-b21d89aa.js';

const Footer = class {
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
    return (h(Host, null, h("div", { class: "c-footer-bgColor" }, h("div", { class: "container" }, h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: "col-12 text-center" }, h("img", { class: "mt-3", width: "120", src: "./img/logo_idomed.png" }), h("p", { class: "c-paragraph u-text--medium text-center mt-0" }, "Todos os direitos reservados.", h("br", null), "Veja a nossa pol\u00EDtica de privacidade e os termos de uso.")))))));
  }
};

export { Footer as yduqs_footer_doktor };
