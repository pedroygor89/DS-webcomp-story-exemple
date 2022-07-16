import { h, Host, Component, Prop } from '@stencil/core';
export class YduqsPageGenericLab {
  constructor() {
    /**
     * Define se o container é fluido (ocupa toda a tela) ou não (centralizado, seguindo o Grid definido)
     */
    this.fluid = false;
    /**
     * Define se o padrao de cores deve seguir um tema claro (light) ou escuro (dark)
     */
    this.bg = 'light';
  }
  render() {
    return (h(Host, { class: `c-page-generic-lab theme-${this.bg === 'dark' ? 'dark' : 'light'}`, ref: ref => this.hostElem = ref },
      h("div", { class: `c-page-generic-lab-container ${this.fluid ? 'container-fluid' : 'container'}` },
        h("div", { class: "c-page-generic-lab-header" },
          h("slot", { name: "header" })),
        h("div", { class: "c-page-generic-lab-body" },
          h("slot", { name: "body" })),
        h("div", { class: "c-page-generic-lab-footer" },
          h("slot", { name: "footer" })))));
  }
  static get is() { return "yduqs-page-generic-lab"; }
  static get properties() { return {
    "fluid": {
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
        "text": "Define se o container \u00E9 fluido (ocupa toda a tela) ou n\u00E3o (centralizado, seguindo o Grid definido)"
      },
      "attribute": "fluid",
      "reflect": false,
      "defaultValue": "false"
    },
    "bg": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'dark' | 'light'",
        "resolved": "\"dark\" | \"light\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Define se o padrao de cores deve seguir um tema claro (light) ou escuro (dark)"
      },
      "attribute": "bg",
      "reflect": false,
      "defaultValue": "'light'"
    }
  }; }
}
