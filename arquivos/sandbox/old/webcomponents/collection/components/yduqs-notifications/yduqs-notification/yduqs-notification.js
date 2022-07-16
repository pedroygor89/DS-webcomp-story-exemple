import { h, Component, Event, Method, Prop, State } from '@stencil/core';
export class YduqsNotification {
  constructor() {
    this.type = '';
    this.dismissible = false;
    this.open = false;
    this._isOpen = false;
    this._isDynamic = false;
  }
  async close() {
    this._isOpen = false;
    this._isDynamic = false;
    this.onClose.emit();
  }
  async show() {
    this._isOpen = true;
    this._isDynamic = true;
  }
  async isOpen() {
    return this._isOpen;
  }
  componentWillLoad() {
    this._isOpen = this.open;
  }
  _getIconName() {
    if (this.type === 'info') {
      return 'info';
    }
    else if (this.type === 'success') {
      return 'check_circle';
    }
    else if (this.type === 'warning') {
      return 'report_problem';
    }
    else if (this.type === 'error') {
      return 'cancel';
    }
    else {
      return '';
    }
  }
  render() {
    const isOpenClass = !this._isOpen ? 'u-fade-out' : '';
    const typeClass = this.type ? `c-notification--${this.type}` : '';
    const iconClass = this._getIconName();
    const isDynamicClass = this._isDynamic ? 'c-notification--dynamic u-fade-in' : '';
    return (h("div", { role: "notification", hidden: !this._isOpen, class: `c-notification ${typeClass} ${isOpenClass} ${isDynamicClass}` },
      h("div", { class: "c-notification__container" },
        h("div", { class: "c-notification__content" },
          h("span", { class: "c-notification__icon material-icons" }, iconClass),
          h("slot", null)),
        this.dismissible && (h("button", { class: "c-notification__control", onClick: () => this.close() },
          h("span", { class: "c-notification__icon material-icons" }, "close"))))));
  }
  static get is() { return "yduqs-notification"; }
  static get properties() { return {
    "type": {
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
      "attribute": "type",
      "reflect": false,
      "defaultValue": "''"
    },
    "dismissible": {
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
      "attribute": "dismissible",
      "reflect": false,
      "defaultValue": "false"
    },
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
    }
  }; }
  static get states() { return {
    "_isOpen": {},
    "_isDynamic": {}
  }; }
  static get events() { return [{
      "method": "onClose",
      "name": "close",
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
