import { Host, h, Component } from '@stencil/core';
export class YduqsCardComparativoItem {
  render() {
    return (h(Host, { class: "c-card-comparativo__item" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-comparativo-item"; }
}
