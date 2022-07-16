import { Host, h, Component, Prop } from '@stencil/core';
export class YduqsCardComparativo {
  constructor() {
    this.dark = false;
    this.outline = false;
    this.icon = '';
    this.rotate_mobile = false;
  }
  render() {
    const colorMode = this.dark ? 'c-card-comparativo--dark' : '';
    const outlineClass = this.outline ? 'c-card-destaque--outline' : '';
    const rotate = this.rotate_mobile ? 'rotate' : '';
    return (h(Host, { class: `c-card-comparativo ${colorMode} ${outlineClass}` },
      h("slot", { name: "item-a" }),
      h("div", { class: "c-card-comparativo__divider" },
        h("div", { class: "c-card-comparativo__bar" }),
        h("div", { class: "c-card-comparativo__icon-container" },
          h("span", { class: `c-card-comparativo__icon ${rotate} material-icons` }, this.icon ? this.icon : 'close'))),
      h("slot", { name: "item-b" })));
  }
  static get is() { return "yduqs-card-comparativo"; }
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
    "outline": {
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
      "attribute": "outline",
      "reflect": false,
      "defaultValue": "false"
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
      "reflect": false,
      "defaultValue": "''"
    },
    "rotate_mobile": {
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
      "attribute": "rotate_mobile",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
