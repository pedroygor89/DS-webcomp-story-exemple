import { h, Component, Prop, Method } from '@stencil/core';
export class Rating {
  async avaliar() {
    console.log('teste');
    // var starY = '<i class="active fas fa-star" aria-hidden="true"></i>~{"\n"}';
    // var starN = '<i class="active far fa-star" aria-hidden="true"></i>~{"\n"}';
    // var nota1 = starN + starN + starN + starN + starY;
    // var nota2 = starN + starN + starN + starY + starY;
    // var nota3 = starN + starN + starY + starY + starY;
    // var nota4 = starN + starY + starY + starY + starY;
    // var nota5 = starY + starY + starY + starY + starY;
    // if (nota == 1) {
    //     console.log(nota1);
    // } else if (nota == 2) {
    //     console.log(nota2);
    // } else if (nota == 3) {
    //     console.log(nota3);
    // } else if (nota == 4) {
    //     console.log(nota4);
    // } else if (nota == 5) {
    //     console.log(nota5);
    // }
  }
  render() {
    return (h("div", { class: "c-rating" },
      h("h3", null, this.cta),
      h("div", { class: "star-rating" },
        h("label", null,
          h("i", { class: "active fa fa-star", "aria-hidden": "true" })),
        h("label", null,
          h("i", { class: "active fa fa-star", "aria-hidden": "true" })),
        h("label", null,
          h("i", { class: "active fa fa-star", "aria-hidden": "true" })),
        h("label", null,
          h("i", { class: "active fa fa-star", "aria-hidden": "true" })),
        h("label", null,
          h("i", { class: "active fa fa-star", "aria-hidden": "true" })),
        h("div", { class: "resposta" }))));
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
    }
  }; }
  static get methods() { return {
    "avaliar": {
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
    }
  }; }
}
