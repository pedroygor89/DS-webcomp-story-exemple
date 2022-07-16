'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsPageGenericLab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Define se o container é fluido (ocupa toda a tela) ou não (centralizado, seguindo o Grid definido)
     */
    this.fluid = false;
    /**
     * Define se o padrao de cores deve seguir um tema claro (light) ou escuro (dark)
     */
    this.bg = 'light';
  }
  render() {
    return (index.h(index.Host, { class: `c-page-generic-lab theme-${this.bg === 'dark' ? 'dark' : 'light'}`, ref: ref => this.hostElem = ref }, index.h("div", { class: `c-page-generic-lab-container ${this.fluid ? 'container-fluid' : 'container'}` }, index.h("div", { class: "c-page-generic-lab-header" }, index.h("slot", { name: "header" })), index.h("div", { class: "c-page-generic-lab-body" }, index.h("slot", { name: "body" })), index.h("div", { class: "c-page-generic-lab-footer" }, index.h("slot", { name: "footer" })))));
  }
};

exports.yduqs_page_generic_lab = YduqsPageGenericLab;
