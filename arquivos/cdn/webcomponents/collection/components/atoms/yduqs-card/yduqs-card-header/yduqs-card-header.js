import { h, Component } from '@stencil/core';
export class YduqsCardHeader {
  render() {
    return (h("header", { class: "c-card__header" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-header"; }
}
