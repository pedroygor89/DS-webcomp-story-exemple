import { Host, h, Component } from '@stencil/core';
export class YduqsCardModuloFooter {
  render() {
    return (h(Host, { class: "c-card-modulo__footer" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-modulo-footer"; }
}
