import { Component, h, Prop } from '@stencil/core';
export class YduqsLabIntro {
  constructor() {
    /**
     * Título da página, se slot=header não for informado
     */
    this._title = 'Introdução';
    /**
     * Texto dos links do cabeçalho o rodapé.
     */
    this.btnText = 'Ir para o mapa';
    /**
     * Url do Href dos links do cabeçalho e rodapé
     */
    this.btnHref = '?page=fase-1:map';
    /**
     * Ícone do link do rodapé. Deve ser uma ícone Material.
     */
    this.btnIcon = 'chevron_right';
  }
  render() {
    return (h("yduqs-page-generic-lab", null,
      h("div", { slot: "header", class: "box-title d-flex justify-content-between align-items-center" },
        h("h1", { class: "px-0" }, this._title),
        h("a", { href: this.btnHref }, this.btnText)),
      h("div", { slot: "body", class: "box-body d-flex justify-content-between" },
        h("slot", null)),
      h("div", { slot: "footer", class: "d-flex justify-content-center" },
        h("a", { class: "c-button btn-intro my-5 d-flex align-items-center", href: this.btnHref },
          this.btnText,
          " ",
          h("span", { class: "c-button__icon material-icons px-1" }, this.btnIcon)))));
  }
  static get is() { return "yduqs-lab-intro"; }
  static get properties() { return {
    "_title": {
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
        "text": "T\u00EDtulo da p\u00E1gina, se slot=header n\u00E3o for informado"
      },
      "attribute": "title",
      "reflect": false,
      "defaultValue": "'Introdu\u00E7\u00E3o'"
    },
    "btnText": {
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
        "text": "Texto dos links do cabe\u00E7alho o rodap\u00E9."
      },
      "attribute": "btn-text",
      "reflect": false,
      "defaultValue": "'Ir para o mapa'"
    },
    "btnHref": {
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
        "text": "Url do Href dos links do cabe\u00E7alho e rodap\u00E9"
      },
      "attribute": "btn-href",
      "reflect": false,
      "defaultValue": "'?page=fase-1:map'"
    },
    "btnIcon": {
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
        "text": "\u00CDcone do link do rodap\u00E9. Deve ser uma \u00EDcone Material."
      },
      "attribute": "btn-icon",
      "reflect": false,
      "defaultValue": "'chevron_right'"
    }
  }; }
}
