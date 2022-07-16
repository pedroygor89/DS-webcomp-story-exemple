import { h, Component, Prop, Element, Host } from '@stencil/core';
export class audioCard {
  constructor() {
    this.title_formula = '';
    this.formula = '';
  }
  calcula_space(el) {
    setTimeout(function () {
      var total = 0;
      var current_formula = el.querySelector('.c-caixa-formula mjx-container mjx-math');
      console.log('CAIXA DE FORMULA');
      var caixa_width = document.querySelector('body').getBoundingClientRect().width;
      console.log(caixa_width);
      current_formula.querySelectorAll(":scope > *").forEach(item => {
        console.log(item);
        total = total + item.getBoundingClientRect().width;
        if ((caixa_width - 200) < total) {
          total = 0;
          if (current_formula.tagName == 'MJX-MO') {
            item.insertAdjacentHTML('afterend', '<p/><p/>');
          }
          else {
            item.insertAdjacentHTML('beforebegin', '<p/><p/>');
          }
        }
      });
    }, 3000);
  }
  componentDidLoad() {
    var el = this.element;
    this.calcula_space(el);
  }
  render() {
    const background_caixa_formula = this.dark ? 'dark' : this.outlined ? 'outline' : 'light';
    return (h(Host, null,
      h("div", { class: 'c-caixa-formula' },
        h("div", { class: `${background_caixa_formula}` },
          h("div", { class: "d-flex align-items-center justify-content-center" },
            h("yduqs-tag", { color: "${colorType}" }, "Equa\u00E7\u00E3o 1.0 ")),
          h("yduqs-card", { dark: this.dark, outlined: this.outlined, class: "c-table" },
            h("p", null, this.formula),
            h("div", { class: "d-flex align-items-center justify-content-center" },
              h("slot", null))),
          h("div", { class: "c-legenda mt-2 pb-2" },
            h("p", { class: "c-paragraph u-text" }, "Legenda da Caixa de f\u00F3rmula.")))),
      h("script", { id: "MathJax-script", async: true, src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" })));
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
  static get elementRef() { return "element"; }
}
