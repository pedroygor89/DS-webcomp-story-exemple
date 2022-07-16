import { r as registerInstance, h, a as Host } from './index-b21d89aa.js';

const YduqsPageGenericLab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { class: `c-page-generic-lab theme-${this.bg === 'dark' ? 'dark' : 'light'}`, ref: ref => this.hostElem = ref }, h("div", { class: `c-page-generic-lab-container ${this.fluid ? 'container-fluid' : 'container'}` }, h("div", { class: "c-page-generic-lab-header" }, h("slot", { name: "header" })), h("div", { class: "c-page-generic-lab-body" }, h("slot", { name: "body" })), h("div", { class: "c-page-generic-lab-footer" }, h("slot", { name: "footer" })))));
  }
};

export { YduqsPageGenericLab as yduqs_page_generic_lab };
