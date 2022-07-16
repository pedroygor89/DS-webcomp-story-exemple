import { Component, Host, h, Prop, Event } from '@stencil/core';
import { generateSvgFromBase64Data } from '../../../utils/utils';
export class YduqsConfirm {
  constructor() {
    this.open = false;
    this.usematerial = true;
    this.btntext = 'Ok';
  }
  handleClose() {
    this.confirmClosed.emit(true);
  }
  handleClick() {
    this.confirmClick.emit(true);
  }
  render() {
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' },
      h("div", { class: "c-confirm-overlay", onClick: () => this.handleClose() }),
      h("div", { class: "c-confirm-container" },
        h("header", { class: "c-confirm-header" },
          this.usematerial ? (h("span", { class: "c-confirm-icon material-icons" }, this.icon)) : (h("span", { class: "c-confirm-icon", innerHTML: generateSvgFromBase64Data(this.icon) })),
          h("h2", { class: "c-confirm-title" }, this._title)),
        h("div", { class: "c-confirm-content" },
          Boolean(this.subtitle) && h("span", { class: "c-confirm-subtitle" }, this.subtitle),
          h("span", { class: "c-confirm-message" }, this.message)),
        h("footer", { class: "c-confirm-footer" },
          h("button", { class: "c-button c-button--ghost c-button__icon-container u-text--medium c-confirm-back", onClick: () => this.handleClick() },
            h("span", { class: "c-button__icon material-icons" }, "arrow_back")),
          h("button", { class: "c-button u-text--medium c-confirm-button", onClick: () => this.handleClick() },
            this.btntext,
            h("span", { class: "c-button__icon material-icons" }, "done"))))));
  }
  static get is() { return "yduqs-confirm"; }
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
      "method": "confirmClosed",
      "name": "confirmClosed",
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
      "method": "confirmClick",
      "name": "confirmClick",
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
