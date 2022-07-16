import { h, Component, Prop, Host } from '@stencil/core';
export class YduqsTag {
  render() {
    const colorClass = this.color ? `c-tag--${this.color}` : '';
    return (h(Host, { role: "tag", class: `c-tag ${colorClass}` },
      h("slot", null)));
  }
  static get is() { return "yduqs-tag"; }
  static get properties() { return {
    "color": {
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
      "attribute": "color",
      "reflect": false
    }
  }; }
}
