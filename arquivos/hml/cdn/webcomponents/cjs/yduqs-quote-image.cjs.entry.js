'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsQuoteImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-quote__image", style: { 'background-image': `url(${this.path})` } }, index.h("slot", null)));
  }
};

exports.yduqs_quote_image = YduqsQuoteImage;
