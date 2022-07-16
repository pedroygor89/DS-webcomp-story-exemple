import { h, Component } from '@stencil/core';
export class YduqsMediaItem {
  render() {
    return (h("div", { class: "c-card__item o-media" },
      h("slot", null)));
  }
  static get is() { return "yduqs-media-item"; }
}
