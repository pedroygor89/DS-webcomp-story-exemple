import { Component, Host, h, Prop, Event } from '@stencil/core';
import { generateSvgFromBase64Data } from '../../../utils/utils';
export class YduqsAlert {
  constructor() {
    this.open = false;
    this.usematerial = true;
    this.btntext = 'Ok';
  }
  handleClose() {
    this.alertClosed.emit(true);
  }
  handleClick() {
    this.alertClick.emit(true);
  }
  render() {
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' },
      h("div", { class: "c-alert-overlay", onClick: () => this.handleClose() }),
      h("div", { class: "c-alert-container" },
        h("header", { class: "c-alert-header" },
          this.usematerial ? h("span", { class: "c-alert-icon material-icons" }, this.icon) : h("span", { class: "c-alert-icon", innerHTML: generateSvgFromBase64Data(this.icon) }),
          h("h2", { class: "c-alert-title" }, this._title)),
        Boolean(this.subtitle) && h("span", { class: "c-alert-subtitle" }, this.subtitle),
        h("span", { class: "c-alert-message" }, this.message),
        h("button", { class: "c-button u-text--medium c-alert-button", onClick: () => this.handleClick() }, this.btntext))));
  }
  static get is() { return "yduqs-alert"; }
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
    "_title": {
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
      "attribute": "title",
      "reflect": false
    },
    "subtitle": {
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
      "attribute": "subtitle",
      "reflect": false
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
    "btntext": {
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
      "attribute": "btntext",
      "reflect": false,
      "defaultValue": "'Ok'"
    }
  }; }
  static get events() { return [{
      "method": "alertClosed",
      "name": "alertClosed",
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
    }, {
      "method": "alertClick",
      "name": "alertClick",
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
}
