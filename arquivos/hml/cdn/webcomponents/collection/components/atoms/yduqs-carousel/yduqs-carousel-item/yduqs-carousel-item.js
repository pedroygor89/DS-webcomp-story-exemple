import { Component, h, Host } from '@stencil/core';
export class YduqsCarouselItem {
  render() {
    return (h(Host, { class: "c-carousel-item" },
      h("slot", null)));
  }
  static get is() { return "yduqs-carousel-item"; }
}
