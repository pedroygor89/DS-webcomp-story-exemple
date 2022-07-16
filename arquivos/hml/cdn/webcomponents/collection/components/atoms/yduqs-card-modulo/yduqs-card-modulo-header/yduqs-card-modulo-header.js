import { Host, h, Component } from '@stencil/core';
export class YduqsCardModuloHeader {
  render() {
    return (h(Host, { class: "c-card-modulo__header" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-modulo-header"; }
}
