'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let Listas = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: `box-listas-${this.tipo} ${this.tamanho}` }, index.h("slot", null)));
  }
};

exports.yduqs_listas = Listas;
