import { h, Component, Prop, Listen, State } from '@stencil/core';
export class YduqsCodeSnipet {
  meuToggle(ev) {
    this.isDark = ev.detail;
  }
  componentDidLoad() {
    this.isDark = this.dark;
  }
  render() {
    return [
      h("div", { class: `c-code-snipet row ${this.isDark ? 'dark' : ''}` },
        h("div", { class: "row align-items-center" },
          h("div", { class: "col-12 codigo-top py-2" },
            h("yduqs-toggle", { open: this.dark, disable: this.disable }))),
        h("div", { class: "row align-items-center " },
          h("div", { class: "col-12 codigo-body text-light p-3" },
            h("div", { class: "c-code-snipet-content" },
              h("div", { class: "content" },
                h("pre", null,
                  h("slot", null)))))))
    ];
  }
  static get is() { return "yduqs-code-snipet"; }
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
      "reflect": false
    },
    "disable": {
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
      "attribute": "disable",
      "reflect": false
    }
  }; }
  static get states() { return {
    "isDark": {}
  }; }
  static get listeners() { return [{
      "name": "myToggleEmit",
      "method": "meuToggle",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
