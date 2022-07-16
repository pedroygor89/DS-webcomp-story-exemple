import { Component, Host, h, Prop, Event, Watch } from '@stencil/core';
import { generateSvgFromBase64Data } from '../../../utils/utils';
export class YduqsToast {
  constructor() {
    this.open = false;
    this.usematerial = true;
    this.delay = 17000;
  }
  handleClose() {
    if (this.open) {
      window.setTimeout(() => {
        this.toastClosed.emit(true);
      }, this.delay);
    }
  }
  render() {
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' },
      this.usematerial ? h("span", { class: "c-toast-icon material-icons" }, this.icon) : h("span", { class: "c-toast-icon", innerHTML: generateSvgFromBase64Data(this.icon) }),
      h("span", { class: "c-toast-message" },
        Boolean(this.tit) && h("span", { class: "c-toast-message-title" }, this.tit),
        this.message)));
  }
  static get is() { return "yduqs-toast"; }
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
    "message": {
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
      "attribute": "message",
      "reflect": false
    },
    "tit": {
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
        "text": ""
      },
      "attribute": "tit",
      "reflect": false
    },
    "icon": {
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
      "attribute": "icon",
      "reflect": false
    },
    "usematerial": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "usematerial",
      "reflect": false,
      "defaultValue": "true"
    },
    "delay": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "delay",
      "reflect": false,
      "defaultValue": "17000"
    }
  }; }
  static get events() { return [{
      "method": "toastClosed",
      "name": "toastClosed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "open",
      "methodName": "handleClose"
    }]; }
}
