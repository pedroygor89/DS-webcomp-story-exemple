'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const RatingModule = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", { class: "c-module-rating col-12" }, index.h("yduqs-rating", { cta: this.cta, icon: this.icon, tamanho: this.tamanho, module: this.module }), index.h("div", { class: "c-module-rating__button-container" }, index.h("button", { type: "button", class: "c-button u-text--small c-button--dark", tabindex: "1", disabled: true }, this.english ? 'Send' : this.spanish ? 'Enviar' : 'Enviar'))));
  }
};

exports.yduqs_module_rating = RatingModule;
