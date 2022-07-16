import { Host, h, Component, Prop } from '@stencil/core';
export class YduqsCard {
  constructor() {
    this.dark = false;
    this.outlined = false;
    this.equal_height = false;
    this.small = false;
  }
  render() {
    const darkMode = this.dark ? 'c-card--dark' : '';
    const colorMode = this.outlined ? 'c-card--outlined' : darkMode;
    const equalHeight = this.equal_height ? 'h-100' : '';
    const pSmall = this.small ? 'c-card-small-p' : '';
    return (h(Host, { class: `c-card ${colorMode} ${equalHeight} ${pSmall}` },
      h("slot", null)));
  }
  static get is() { return "yduqs-card"; }
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
      "reflect": false,
      "defaultValue": "false"
    },
    "outlined": {
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
      "attribute": "outlined",
      "reflect": false,
      "defaultValue": "false"
    },
    "equal_height": {
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
      "attribute": "equal_height",
      "reflect": false,
      "defaultValue": "false"
    },
    "small": {
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
      "attribute": "small",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
