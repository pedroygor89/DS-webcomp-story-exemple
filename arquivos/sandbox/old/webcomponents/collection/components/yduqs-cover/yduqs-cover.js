import { h, Component, Prop } from '@stencil/core';
export class Textarea {
  constructor() {
    this.theme_teacher_avatar = 'img/avatar.png';
  }
  render() {
    return (h("div", { class: `c-cover` },
      h("div", { class: "c-cover-bg c-cover-height", style: { "background-image": "url('" + this.theme_background + "')" } },
        h("div", { class: "container c-cover-height" },
          h("div", { class: 'row align-items-end align-items-sm-center align-items-md-center align-items-lg-center justify-content-start c-cover-height' },
            h("div", { class: 'col-12 col-sm-12 col-md-8 col-lg-5' },
              h("div", { class: "theme-details" },
                h("h1", null,
                  h("span", { class: `${this.theme_title_bg ? 'theme_text_bg' : ''}` }, this.theme_title)),
                h("div", { class: "avatar-professor" },
                  h("div", { class: "avatar-professor-img", style: { "background-image": "url('" + this.theme_teacher_avatar + "')" } }),
                  h("h4", null,
                    h("span", { class: `avatar-professor ${this.theme_teacher_bg ? 'theme_text_bg' : ''}` }, this.theme_teacher)))))))),
      h("div", { class: "container theme-definition-wrapper" },
        h("div", { class: 'row align-items-center justify-content-center' },
          h("div", { class: 'col-12' },
            h("div", { class: "theme-definition" },
              h("div", { class: 'row align-items-baseline justify-content-center' },
                h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' },
                  h("h3", null, "Defini\u00E7\u00E3o")),
                h("div", { class: 'col-12 col-sm-12 col-md-9 col-lg-9' },
                  h("slot", { name: "yduqs-cover-definition" }))),
              h("div", { class: 'row align-items-baseline justify-content-center' },
                h("div", { class: 'col-sm-12 col-md-3 col-lg-3' },
                  h("h3", null, "Prop\u00F3sito")),
                h("div", { class: 'col-sm-12 col-md-9 col-lg-9' },
                  h("slot", { name: "yduqs-cover-purpose" }))),
              this.theme_cover_preparation ?
                h("div", { class: 'row align-items-baseline justify-content-center' },
                  h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' },
                    h("h3", null, "Prepara\u00E7\u00E3o")),
                  h("div", { class: 'col-sm-12 col-md-9 col-lg-9' },
                    h("slot", { name: 'yduqs-cover-preparation-text' })))
                : ''))))));
  }
  static get is() { return "yduqs-cover"; }
  static get properties() { return {
    "theme_background": {
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
      "attribute": "theme_background",
      "reflect": false
    },
    "theme_title": {
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
      "attribute": "theme_title",
      "reflect": false
    },
    "theme_teacher": {
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
      "attribute": "theme_teacher",
      "reflect": false
    },
    "theme_teacher_avatar": {
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
      "attribute": "theme_teacher_avatar",
      "reflect": false,
      "defaultValue": "'img/avatar.png'"
    },
    "theme_title_bg": {
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
      "attribute": "theme_title_bg",
      "reflect": false
    },
    "theme_teacher_bg": {
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
      "attribute": "theme_teacher_bg",
      "reflect": false
    },
    "theme_cover_preparation": {
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
      "attribute": "theme_cover_preparation",
      "reflect": false
    }
  }; }
}
