import { h, Component, Prop } from '@stencil/core';
export class Textarea {
  render() {
    return (h("div", { class: "c-textarea" },
      h("label", null, this.cta),
      h("textarea", { placeholder: this.placeholder }),
      h("button", { type: "submit", class: "c-button" }, this.txt_button)));
  }
  static get is() { return "yduqs-textarea"; }
  static get properties() { return {
    "cta": {
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
      "attribute": "cta",
      "reflect": false
    },
    "txt_button": {
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
      "attribute": "txt_button",
      "reflect": false
    },
    "placeholder": {
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
      "attribute": "placeholder",
      "reflect": false
    }
  }; }
}
