'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let YduqsTag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const colorClass = this.color ? `c-tag--${this.color}` : '';
    return (index.h(index.Host, { role: "tag", class: `c-tag ${colorClass}` }, index.h("slot", null)));
  }
};

exports.yduqs_tag = YduqsTag;
