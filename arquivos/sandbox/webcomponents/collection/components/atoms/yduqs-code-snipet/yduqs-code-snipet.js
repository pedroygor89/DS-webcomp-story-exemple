import { h, Component, Prop, State, Method } from '@stencil/core';
export class YduqsCodeSnipet {
  constructor() {
    this.size = 'medium';
  }
  async copy(code) {
    navigator.clipboard.writeText(code);
  }
  componentWillRender() {
    this.isDark = this.dark;
  }
  render() {
    return [
      h("div", { class: `c-code-snipet ${this.isDark ? 'dark' : ''}` },
        h("div", { class: "top d-flex align-items-center justify-content-between" },
          h("span", { class: "title" }, this.language_code),
          h("span", { class: "material-icons icon", onClick: () => this.copy(this.code) }, "content_copy")),
        h("div", { class: `box box-${this.size}` },
          h("div", { class: "box-code" },
            h("my-stace", { class: "content_code", mode: this.language_code, theme: `${this.isDark ? 'monokai' : 'chrome'}`, readOnly: true, autoUpdateContent: false, durationBeforeCallback: 1000 }, this.code))))
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
    "language_code": {
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
      "attribute": "language_code",
      "reflect": false
    },
    "code": {
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
      "attribute": "code",
      "reflect": false
    },
    "input_keyboard": {
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
      "attribute": "input_keyboard",
      "reflect": false
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
      "defaultValue": "'medium'"
    }
  }; }
  static get states() { return {
    "isDark": {}
  }; }
  static get methods() { return {
    "copy": {
      "complexType": {
        "signature": "(code: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
