import { r as registerInstance, h } from './index-5acc1e77.js';

const Listas = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: `box-listas-${this.tipo} ${this.tamanho}` }, h("slot", null)));
  }
};

export { Listas as yduqs_listas };
