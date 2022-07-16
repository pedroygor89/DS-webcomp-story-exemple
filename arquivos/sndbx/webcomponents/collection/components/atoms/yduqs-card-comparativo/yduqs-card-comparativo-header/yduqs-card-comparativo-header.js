import { Host, h, Component } from '@stencil/core';
export class YduqsCardComparativoHeader {
  render() {
    return (h(Host, { class: "c-card-comparativo__header" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-comparativo-header"; }
}
