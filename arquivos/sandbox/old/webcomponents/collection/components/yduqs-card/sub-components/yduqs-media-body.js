import { h, Component } from '@stencil/core';
export class YduqsMediaBody {
  render() {
    return (h("div", { class: "o-media__body" },
      h("slot", null)));
  }
  static get is() { return "yduqs-media-body"; }
}
