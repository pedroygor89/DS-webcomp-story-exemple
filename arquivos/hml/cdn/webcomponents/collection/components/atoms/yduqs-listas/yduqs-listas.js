import { h, Component, Prop } from '@stencil/core';
export class Listas {
  render() {
    return (h("div", { class: `box-listas-${this.tipo} ${this.tamanho}` },
      h("slot", null)));
  }
  static get is() { return "yduqs-listas"; }
  static get properties() { return {
    "tamanho": {
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
      "attribute": "tamanho",
      "reflect": false
    },
    "tipo": {
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
      "attribute": "tipo",
      "reflect": false
    }
  }; }
}
