import { r as registerInstance, h } from './index-b21d89aa.js';

const RatingModule = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
  }
  componentWillLoad() {
    const htmlTagGallery = document.querySelector('html');
    const htmlLanguageGallery = htmlTagGallery.getAttribute('lang');
    if (htmlLanguageGallery === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageGallery === 'es') {
      this.spanish = true;
    }
  }
  render() {
    return (h("div", { class: "c-module-rating col-12" }, h("yduqs-rating", { cta: this.cta, icon: this.icon, tamanho: this.tamanho, module: this.module }), h("div", { class: "c-module-rating__button-container" }, h("button", { type: "button", class: "c-button u-text--small c-button--dark", tabindex: "1", disabled: true }, this.english ? 'Send' : this.spanish ? 'Enviar' : 'Enviar'))));
  }
};

export { RatingModule as yduqs_module_rating };
