'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCardComparativo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dark = false;
    this.outline = false;
    this.icon = '';
    this.rotate_mobile = false;
  }
  render() {
    const colorMode = this.dark ? 'c-card-comparativo--dark' : '';
    const outlineClass = this.outline ? 'c-card-destaque--outline' : '';
    const rotate = this.rotate_mobile ? 'rotate' : '';
    return (index.h(index.Host, { class: `c-card-comparativo ${colorMode} ${outlineClass}` }, index.h("slot", { name: "item-a" }), index.h("div", { class: "c-card-comparativo__divider" }, index.h("div", { class: "c-card-comparativo__bar" }), index.h("div", { class: "c-card-comparativo__icon-container" }, index.h("span", { class: `c-card-comparativo__icon ${rotate} material-icons` }, this.icon ? this.icon : 'close'))), index.h("slot", { name: "item-b" })));
  }
};

exports.yduqs_card_comparativo = YduqsCardComparativo;
