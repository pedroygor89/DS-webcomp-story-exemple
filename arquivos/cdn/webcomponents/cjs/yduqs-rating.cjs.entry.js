'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const Rating = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "c-rating" }, index.h("h3", null, this.cta), index.h("div", { class: "star-rating" }, index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)))));
  }
};

exports.yduqs_rating = Rating;
