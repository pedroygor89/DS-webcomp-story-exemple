import { h, Component } from '@stencil/core';
export class Teoria {
  render() {
    return (h("div", { class: "box-teoria" },
      h("slot", null)));
  }
  static get is() { return "yduqs-teoria"; }
}
