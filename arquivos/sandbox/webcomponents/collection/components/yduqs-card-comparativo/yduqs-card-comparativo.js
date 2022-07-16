import { Host, h, Component, Prop } from '@stencil/core';
export class YduqsCardComparativo {
  constructor() {
    this.dark = false;
    this.outline = false;
  }
  render() {
    const colorMode = this.dark ? 'c-card-comparativo--dark' : '';
    const outlineClass = this.outline ? 'c-card-destaque--outline' : '';
    return (h(Host, { class: `c-card-comparativo ${colorMode} ${outlineClass}` },
      h("slot", { name: "item-a" }),
      h("div", { class: "c-card-comparativo__divider" },
        h("div", { class: "c-card-comparativo__bar" }),
        h("div", { class: "c-card-comparativo__icon-container" },
          h("span", { class: "c-card-comparativo__icon material-icons" }, "close"))),
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
    }
  }; }
}
