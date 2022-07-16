import { h, Component } from '@stencil/core';
export class YduqsCardDestaqueBody {
  render() {
    return (h("div", { class: "c-card-destaque__body" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-destaque-body"; }
}
