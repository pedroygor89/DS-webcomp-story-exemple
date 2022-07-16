'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f761ffe9.js');

const Demo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "c-demo " + this.cor }, " ", this.texto));
  }
};

exports.yduqs_demo = Demo;
