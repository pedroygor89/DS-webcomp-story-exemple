import { h, Component, Prop } from '@stencil/core';
export class DestaqueTexto {
  constructor() {
    this.size = 'medium';
  }
  componentWillLoad() {
    this._getTextSize();
  }
  _getTextSize() {
    if (this.size === 'small')
      return 'small';
    if (this.size === 'medium')
      return 'medium';
    return 'big';
  }
  render() {
    return (h("div", { class: "c-texto-destaque" },
      h("div", { class: "c-texto-destaque__border" }),
      h("div", { class: `c-texto-destaque__content c-texto-destaque__content--${this._getTextSize()}` },
        h("slot", null))));
  }
  static get is() { return "yduqs-destaque-texto"; }
  static get properties() { return {
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
      "defaultValue": "'medium'"
    }
  }; }
}
