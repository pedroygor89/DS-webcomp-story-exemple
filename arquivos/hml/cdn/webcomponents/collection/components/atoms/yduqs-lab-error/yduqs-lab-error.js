import { Component, Host, h, Prop } from '@stencil/core';
export class YduqsLabError {
  constructor() {
    this.message = 'Carregando...';
  }
  render() {
    var _a;
    return (h(Host, { class: "c-lab-error" }, ((_a = this.errors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (h("dl", null,
      h("dt", null, "Errors:"),
      this.errors.map(error => (h("dd", null, error))))) : (h("yduqs-loading", { open: true, message: this.message }))));
  }
  static get is() { return "yduqs-lab-error"; }
  static get properties() { return {
    "errors": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "message": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "message",
      "reflect": false,
      "defaultValue": "'Carregando...'"
    }
  }; }
}
