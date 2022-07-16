import { h, Component, Prop, Element } from '@stencil/core';
export class audioCard {
  constructor() {
    this.title_formula = '';
    this.formula = '';
  }
  calcula_space() {
    var total = 0;
    var br = document.createElement('br');
    var caixa_width = this.el.getBoundingClientRect().width;
    var current_formula = this.el.querySelector('mjx-container mjx-math');
    for (var i = 0; i < current_formula.children.length; i++) {
      total = total + current_formula.children[i].getBoundingClientRect().width;
      if (caixa_width < total) {
        total = 0;
        var j = i - 1;
        do {
          if (current_formula.children[j].tagName !== 'MJX-MO') {
            j--;
          }
          else {
            current_formula.children[j].insertAdjacentElement('afterend', br);
          }
        } while (current_formula.children[j].tagName !== 'MJX-MO');
        console.log('ADICIONAR PULO DE LINHA!');
      }
    }
  }
  componentDidLoad() {
    this.calcula_space();
  }
  render() {
    const background_caixa_formula = this.dark ? 'dark' : this.outlined ? 'outline' : 'light';
    return [
      h("div", { class: 'c-caixa-formula' },
        h("div", { class: `${background_caixa_formula}` },
          h("div", { class: "d-flex align-items-center justify-content-center" },
            h("yduqs-tag", { color: "${colorType}" }, "Equa\u00E7\u00E3o 1.0 ")),
          h("yduqs-card", { dark: this.dark, outlined: this.outlined },
            h("p", null, this.formula),
            h("div", { class: "d-flex align-items-center justify-content-center" },
              h("slot", null))),
          h("div", { class: "c-legenda mt-2 pb-2" },
            h("p", { class: "c-paragraph u-text" }, "Legenda da Caixa de f\u00F3rmula."))))
    ];
  }
  static get is() { return "yduqs-caixa-formula"; }
  static get properties() { return {
    "title_formula": {
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
      "attribute": "title_formula",
      "reflect": false,
      "defaultValue": "''"
    },
    "formula": {
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
      "attribute": "formula",
      "reflect": false,
      "defaultValue": "''"
    },
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
      "reflect": false
    },
    "outlined": {
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
      "attribute": "outlined",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
