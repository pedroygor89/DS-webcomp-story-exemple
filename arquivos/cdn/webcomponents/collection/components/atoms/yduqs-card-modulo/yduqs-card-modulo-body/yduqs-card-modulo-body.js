import { Host, h, Component } from '@stencil/core';
export class YduqsCardModuloBody {
  render() {
    return (h(Host, { class: "c-card-modulo__body" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-modulo-body"; }
}
