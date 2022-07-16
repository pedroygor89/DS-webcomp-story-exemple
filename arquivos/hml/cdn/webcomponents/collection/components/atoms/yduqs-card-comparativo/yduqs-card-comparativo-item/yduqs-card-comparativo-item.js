import { Host, h, Component } from '@stencil/core';
export class YduqsCardComparativoBody {
  render() {
    return (h(Host, { class: "c-card-comparativo__body" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-comparativo-body"; }
}
