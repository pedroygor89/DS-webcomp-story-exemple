import { h, Component, Prop } from '@stencil/core';
export class YduqsCodeSnipet {
  render() {
    const imgCapa = {
      backgroundImage: 'url(' + this.img_cover + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return [
      h("div", { class: 'c-module-cover' },
        h("div", { class: 'row g-0 m-0' },
          h("div", { class: "col-12 col-lg-2 col-xxl-3 d-flex justify-content-center align-items-center box-column d-lg-block" },
            h("span", null),
            h("p", { class: "u-title-medium" }, this.number_module),
            h("span", null)),
          h("div", { class: "col-12 col-lg-10 col-xxl-9 d-flex flex-column flex-lg-row" },
            h("div", { class: "container-box-title col-12 col-lg-8 col-xxl-7 d-flex" },
              h("div", { class: "box-title" },
                h("div", { class: "titles" },
                  h("h2", { class: "c-heading u-title-medium", innerHTML: this.title_module }),
                  h("p", { class: "u-text", innerHTML: this.objective })),
                this.read_time || this.midia_time ?
                  h("div", { class: "times" },
                    this.read_time && this.title_read_time ?
                      h("div", { class: "time-read" },
                        h("span", { class: "material-icons" }, "access_time"),
                        h("div", { class: "itens-read" },
                          h("span", { class: "text-read" }, this.title_read_time),
                          h("span", { class: "text-time-read" }, this.read_time)))
                      : '',
                    this.midia_time && this.title_midia_time ?
                      h("div", { class: "time-video" },
                        h("span", { class: "material-icons" }, "ondemand_video"),
                        h("div", { class: "itens-video" },
                          h("span", { class: "text-video" }, this.title_midia_time),
                          h("span", { class: "text-time-video" }, this.midia_time)))
                      : '')
                  : '')),
            h("div", { class: "box-image" },
              h("div", { class: "img-capa", style: imgCapa },
                h("div", { class: "shadow-image" }))))))
    ];
  }
  static get is() { return "yduqs-module-cover"; }
  static get properties() { return {
    "number_module": {
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
      "attribute": "number_module",
      "reflect": false
    },
    "title_module": {
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
      "attribute": "title_module",
      "reflect": false
    },
    "objective": {
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
      "attribute": "objective",
      "reflect": false
    },
    "title_read_time": {
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
      "attribute": "title_read_time",
      "reflect": false
    },
    "read_time": {
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
      "attribute": "read_time",
      "reflect": false
    },
    "title_midia_time": {
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
      "attribute": "title_midia_time",
      "reflect": false
    },
    "midia_time": {
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
      "attribute": "midia_time",
      "reflect": false
    },
    "img_cover": {
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
      "attribute": "img_cover",
      "reflect": false
    }
  }; }
}
