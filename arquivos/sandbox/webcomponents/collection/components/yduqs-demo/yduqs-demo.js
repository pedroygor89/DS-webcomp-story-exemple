import { h, Component, Prop } from '@stencil/core';
export class Demo {
  render() {
    return (h("div", { class: "c-demo " + this.cor },
      " ",
      this.texto));
  }
  static get is() { return "yduqs-demo"; }
  static get properties() { return {
    "cor": {
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
      "attribute": "cor",
      "reflect": false
    },
    "texto": {
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
      "attribute": "texto",
      "reflect": false
    }
  }; }
}
