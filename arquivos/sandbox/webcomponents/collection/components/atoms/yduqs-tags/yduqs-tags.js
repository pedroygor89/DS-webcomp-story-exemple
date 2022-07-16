import { h, Component, Host } from '@stencil/core';
export class YduqsTags {
  render() {
    return (h(Host, { class: `c-tags` },
      h("slot", null)));
  }
  static get is() { return "yduqs-tags"; }
}
