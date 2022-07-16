import { h, Component, Prop } from '@stencil/core';
export class Title {
  render() {
    return (h("div", { class: `c-topic-title ${this.dark ? 'c-topic-title--dark' : ''}` },
      h("div", { class: 'row align-items-center justify-content-start' },
        h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }, this.topic_icon ? h("span", { class: "material-icons" }, this.topic_icon) : h("span", { class: "title-bar" })),
        h("div", { class: 'col-12 col-md-10 col-lg-8' },
          h("h1", { class: "c-heading u-title-small", innerHTML: this.topic_title })))));
  }
  static get is() { return "yduqs-title"; }
  static get properties() { return {
    "topic_icon": {
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
      "attribute": "topic_icon",
      "reflect": false
    },
    "topic_title": {
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
      "attribute": "topic_title",
      "reflect": false
    },
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
      "reflect": false
    }
  }; }
}
