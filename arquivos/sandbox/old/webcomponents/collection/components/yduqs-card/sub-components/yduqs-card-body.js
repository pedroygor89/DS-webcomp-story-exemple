import { h, Component } from '@stencil/core';
export class YduqsCardBody {
  render() {
    return (h("div", { class: "c-card__body" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-body"; }
}
