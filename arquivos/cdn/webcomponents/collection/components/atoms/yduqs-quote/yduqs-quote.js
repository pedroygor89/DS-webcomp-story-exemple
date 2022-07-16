import { h, Component, Prop } from '@stencil/core';
export class YduqsQuote {
  constructor() {
    this.dark = false;
    this.size = '';
    this.template_doktor = false;
  }
  componentWillLoad() {
    if (this.size)
      this._getQuoteSize();
    let isDoktor = document.body.classList.contains('template-doktor');
    if (isDoktor) {
      this.template_doktor = true;
    }
  }
  _getQuoteSize() {
    if (this.size === 'small')
      return 'small';
    if (this.size === 'medium')
      return 'medium';
    return 'big';
  }
  render() {
    const darkMode = this.dark ? 'c-quote--dark' : '';
    const quoteSize = `c-quote--${this._getQuoteSize()}`;
    return (h("blockquote", { class: `c-quote ${darkMode} ${quoteSize} ${this.template_doktor && 'heigthQuote c-background'}` },
      h("slot", null)));
  }
  static get is() { return "yduqs-quote"; }
  static get properties() { return {
    "dark": {
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
      "attribute": "dark",
      "reflect": false,
      "defaultValue": "false"
    },
    "size": {
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
      "attribute": "size",
      "reflect": false,
      "defaultValue": "''"
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
