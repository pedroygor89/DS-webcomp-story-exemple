'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCardIntro = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = '';
  }
  render() {
    return (index.h(index.Host, { class: `c-card-intro` }, index.h("div", { class: "c-card-intro__title-container" }, index.h("h3", { class: "c-heading u-title-small" }, this.text)), index.h("div", { class: `c-card-intro__container c-card-intro--outline` }, index.h("div", { class: 'row align-items-center justify-content-center' }, index.h("div", { class: 'col-12 col-md-10 col-lg-8' }, index.h("slot", null))))));
  }
};

exports.yduqs_card_intro = YduqsCardIntro;
