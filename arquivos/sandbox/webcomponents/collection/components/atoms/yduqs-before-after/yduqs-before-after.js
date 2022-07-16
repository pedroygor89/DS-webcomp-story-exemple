import { Component, h, Prop, State, Listen } from '@stencil/core';
export class YduqsBeforeAfter {
  mouseHandler() {
    this.titleChange = "Primeira imagem: " + this.before_img_title;
    setTimeout(() => {
      this.titleChange = "Segunda imagem: " + this.after_img_title;
    }, 1000);
  }
  render() {
    return (h("div", { class: "c-before-after" },
      h("div", { class: "row-ba pb-1" },
        h("div", { class: "container-ba" },
          h("div", { class: "wrapper" },
            h("div", { class: "images" },
              h("img", { class: "img1", src: this.after_img, alt: this.after_img_alt, title: this.after_img_title }),
              h("img", { class: "img2", src: this.before_img, alt: this.before_img_alt, title: this.before_img_title, style: { "clip": `rect(0px 0px auto 0px)` } })),
            h("div", { class: "slider", title: this.titleChange },
              h("div", { class: "drag-line", title: this.titleChange },
                h("span", null)),
              h("input", { type: "range", min: "0", max: "100", value: "50" }))),
          h("div", { class: "c-legenda mt-3" },
            h("p", { class: "c-paragraph u-text", innerHTML: this.caption }))))));
  }
  static get is() { return "yduqs-before-after"; }
  static get properties() { return {
    "before_img": {
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
      "attribute": "before_img",
      "reflect": false
    },
    "before_img_alt": {
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
      "attribute": "before_img_alt",
      "reflect": false
    },
    "before_img_title": {
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
      "attribute": "before_img_title",
      "reflect": false
    },
    "after_img": {
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
      "attribute": "after_img",
      "reflect": false
    },
    "after_img_alt": {
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
      "attribute": "after_img_alt",
      "reflect": false
    },
    "after_img_title": {
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
      "attribute": "after_img_title",
      "reflect": false
    },
    "caption": {
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
      "attribute": "caption",
      "reflect": false
    }
  }; }
  static get states() { return {
    "titleChange": {}
  }; }
  static get listeners() { return [{
      "name": "mouseover",
      "method": "mouseHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
