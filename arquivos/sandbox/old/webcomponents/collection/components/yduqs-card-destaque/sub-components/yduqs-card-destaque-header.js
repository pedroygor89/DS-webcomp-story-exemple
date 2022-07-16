import { h, Component } from '@stencil/core';
export class YduqsCardDestaqueHeader {
  render() {
    return (h("header", { class: "c-card-destaque__header" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-destaque-header"; }
}
