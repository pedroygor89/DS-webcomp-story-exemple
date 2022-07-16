import { h, Component, Prop } from '@stencil/core';
export class Rating {
  render() {
    return (h("div", { class: "c-rating" },
      h("h3", null, this.cta),
      h("div", { class: "star-rating" },
        h("label", null,
          h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)),
        h("label", null,
          h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)),
        h("label", null,
          h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)),
        h("label", null,
          h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)),
        h("label", null,
          h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)))));
  }
  static get is() { return "yduqs-rating"; }
  static get properties() { return {
    "cta": {
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
      "attribute": "cta",
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
    "tamanho": {
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
      "attribute": "tamanho",
      "reflect": false
    },
    "module": {
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
      "attribute": "module",
      "reflect": false
    }
  }; }
}
