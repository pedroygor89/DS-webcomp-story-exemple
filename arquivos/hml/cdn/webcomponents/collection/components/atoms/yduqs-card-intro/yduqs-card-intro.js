import { Host, h, Component, Prop } from '@stencil/core';
export class YduqsCardIntro {
  constructor() {
    this.text = '';
  }
  render() {
    return (h(Host, { class: `c-card-intro` },
      h("div", { class: "c-card-intro__title-container" },
        h("h3", { class: "c-heading u-title-small" }, this.text)),
      h("div", { class: `c-card-intro__container c-card-intro--outline` },
        h("div", { class: 'row align-items-center justify-content-center' },
          h("div", { class: 'col-12 col-md-10 col-lg-8' },
            h("slot", null))))));
  }
  static get is() { return "yduqs-card-intro"; }
  static get properties() { return {
    "text": {
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
      "attribute": "text",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
}
