import { h, Component, Prop, State, Event } from '@stencil/core';
export class YduqsToggle {
  constructor() {
    this.teste = 'teseeee';
    this.isOpen = false;
    this.isDisable = false;
    this.handleClick = () => {
      this.isOpen = !this.isOpen;
      this.myToggleEmit.emit(this.isOpen);
    };
  }
  componentDidLoad() {
    this.isOpen = this.open;
    this.isDisable = this.disable;
  }
  render() {
    return [
      h("div", { class: "c-toggle" },
        h("label", { class: "switch" },
          h("input", { id: "tog", type: "checkbox", checked: this.isOpen, disabled: this.isDisable, onClick: this.handleClick }),
          h("span", { class: "slider round" })))
    ];
  }
  static get is() { return "yduqs-toggle"; }
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
    },
    "teste": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "String",
        "resolved": "String",
        "references": {
          "String": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "'teseeee'"
    }
  }; }
  static get states() { return {
    "isOpen": {},
    "isDisable": {}
  }; }
  static get events() { return [{
      "method": "myToggleEmit",
      "name": "myToggleEmit",
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
}
