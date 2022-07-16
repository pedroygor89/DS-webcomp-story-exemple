import { h, Component, Host, Prop } from '@stencil/core';
export class YduqsQuoteImage {
  constructor() {
    this.template_doktor = false;
  }
  componentWillLoad() {
    let isDoktor = document.body.classList.contains('template-doktor');
    if (isDoktor) {
      this.template_doktor = true;
    }
  }
  render() {
    return (h(Host, { class: `c-quote__image ${this.template_doktor && 'hideImg'}`, style: { 'background-image': `url(${this.path})` } },
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
    },
    "background_img": {
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
      "attribute": "background_img",
      "reflect": false
    },
    "template_doktor": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "template_doktor",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
