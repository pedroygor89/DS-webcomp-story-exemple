import { h, Component } from '@stencil/core';
export class YduqsCardFooter {
  render() {
    return (h("footer", { class: "c-card__footer" },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-footer"; }
}
