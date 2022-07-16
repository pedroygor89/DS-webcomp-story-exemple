import { h, Component, Prop } from '@stencil/core';
export class YduqsNotifications {
  render() {
    const positionClass = this.position ? `c-notifications--${this.position}` : '';
    return (h("div", { role: "presentation", class: `c-notifications ${positionClass}` },
      h("slot", null)));
  }
  static get is() { return "yduqs-notifications"; }
  static get properties() { return {
    "position": {
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
      "attribute": "position",
      "reflect": false
    }
  }; }
}
