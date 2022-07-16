import { h, Component, Prop } from '@stencil/core';
export class SectionCover {
  render() {
    return (h("div", { class: "c-section-cover " },
      h("header", null,
        h("div", { class: "section-icon" },
          h("span", { class: "material-icons" }, this.section_icon)),
        h("div", { class: 'row align-items-center justify-content-center' },
          h("div", { class: 'col-sm-12 col-md-5 col-lg-5' },
            h("div", { class: "section-image", style: { "--section-image": "url('" + this.section_image + "')" } },
              h("img", { src: "http://placeimg.com/720/480/tech" }))),
          h("div", { class: 'col-sm-12 col-md-7 col-lg-7' },
            h("div", { class: "section-header-text" },
              h("h1", { class: "c-heading" },
                h("slot", { name: "section-heading" })),
              h("h2", { class: "c-heading" },
                h("slot", { name: "section-subheading" }))))))));
  }
  static get is() { return "yduqs-section-cover"; }
  static get properties() { return {
    "section_image": {
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
      "attribute": "section_image",
      "reflect": false
    },
    "section_icon": {
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
      "attribute": "section_icon",
      "reflect": false
    }
  }; }
}
