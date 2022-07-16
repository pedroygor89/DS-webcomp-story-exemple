import { h, Component, Host, Prop } from '@stencil/core';
export class YduqsQuoteImage {
  render() {
    return (h(Host, { class: "c-quote__image", style: { 'background-image': `url(${this.path})` } },
      h("slot", null)));
  }
  static get is() { return "yduqs-quote-image"; }
  static get properties() { return {
    "path": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "path",
      "reflect": false
    }
  }; }
}
