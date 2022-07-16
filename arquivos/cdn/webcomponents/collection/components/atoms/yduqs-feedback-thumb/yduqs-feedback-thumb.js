import { Component, Host, h, Prop } from '@stencil/core';
export class YduqsFeedbackThumb {
  render() {
    return (h(Host, { class: `c-feedback-thumb ${this._class} ${this.feedback ? 'success' : 'error'}` },
      h("img", { src: this.image, alt: "" }),
      h("i", { class: `material-icons icon ${this.feedback ? 'success' : 'error'}` }, this.feedback ? 'check_circle' : 'cancel')));
  }
  static get is() { return "yduqs-feedback-thumb"; }
  static get properties() { return {
    "image": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "URL da imagem"
      },
      "attribute": "image",
      "reflect": false
    },
    "_class": {
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
        "text": "Classe CSS adicional"
      },
      "attribute": "class",
      "reflect": false
    },
    "feedback": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Informa se a imagem \u00E9 positiva ou negativa"
      },
      "attribute": "feedback",
      "reflect": false
    }
  }; }
}
