import { h, Host, Component, Event, Method, Prop, State } from '@stencil/core';
export class YduqsCollapseContent {
  constructor() {
    this._isOpen = false;
    this.open = false;
  }
  componentWillLoad() {
    this._isOpen = this.open;
  }
  async show() {
    this._isOpen = true;
  }
  async close() {
    this._isOpen = false;
  }
  toggle() {
    this._isOpen ? this.close() : this.show();
    this.onToggle.emit(this._isOpen);
  }
  async isOpen() {
    return this._isOpen;
  }
  animate() {
    this.content.className = this._isOpen ? 'c-collapse__content u-fade-in' : 'c-collapse__content';
  }
  render() {
    const sizeClass = this.size ? `u-text--${this.size}` : 'u-text--medium';
    const color = this.color_collapse ? this.color_collapse : '';
    const aling = this.aling_collapse ? 'collapseRight' : 'collapseLeft';
    return (h(Host, null,
      h("div", { class: "row" },
        h("div", { class: "col" },
          h("div", { class: `${aling}` },
            h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-button ${sizeClass} btnCollapse`, onClick: () => this.toggle() },
              h("span", { class: "c-collapse__title" }, this.header),
              h("span", { class: "c-collapse__icon material-icons" }, this._isOpen ? 'expand_less' : 'expand_more'))))),
      h("div", { ref: el => (this.content = el), "aria-hidden": !this._isOpen, class: `c-collapse__content ${color}` },
        h("slot", null))));
  }
  static get is() { return "yduqs-collapse-content"; }
  static get properties() { return {
    "open": {
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
      "attribute": "open",
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
      "reflect": false
    },
    "color_collapse": {
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
      "attribute": "color_collapse",
      "reflect": false
    },
    "aling_collapse": {
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
      "attribute": "aling_collapse",
      "reflect": false
    },
    "header": {
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
      "attribute": "header",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_isOpen": {}
  }; }
  static get events() { return [{
      "method": "onToggle",
      "name": "togglepane",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "show": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
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
    },
    "close": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
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
    },
    "isOpen": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
