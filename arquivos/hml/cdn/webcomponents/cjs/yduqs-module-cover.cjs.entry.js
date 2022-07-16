'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCodeSnipet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const imgCapa = {
      backgroundImage: 'url(' + this.img_cover + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return [
      index.h("div", { class: 'c-module-cover' }, index.h("div", { class: 'd-flex flex-column flex-lg-row' }, index.h("div", { class: "d-flex justify-content-center align-items-center box-column d-lg-block" }, index.h("span", null), index.h("p", { class: "u-title-medium" }, this.number_module), index.h("span", null)), index.h("div", { class: "container-fluid d-flex flex-column flex-lg-row g-0" }, index.h("div", { class: "container-box-title col-12 col-lg-8 col-xxl-7 d-flex" }, index.h("div", { class: "box-title" }, index.h("div", { class: "titles" }, index.h("h2", { class: "c-heading u-title-medium", innerHTML: this.title_module }), index.h("p", { class: "u-text", innerHTML: this.objective })), this.read_time || this.midia_time ?
        index.h("div", { class: "times" }, this.read_time && this.title_read_time ?
          index.h("div", { class: "time-read" }, index.h("span", { class: "material-icons" }, "access_time"), index.h("div", { class: "itens-read" }, index.h("span", { class: "text-read" }, this.title_read_time), index.h("span", { class: "text-time-read" }, this.read_time)))
          : '', this.midia_time && this.title_midia_time ?
          index.h("div", { class: "time-video" }, index.h("span", { class: "material-icons" }, "ondemand_video"), index.h("div", { class: "itens-video" }, index.h("span", { class: "text-video" }, this.title_midia_time), index.h("span", { class: "text-time-video" }, this.midia_time)))
          : '')
        : '')), index.h("div", { class: "box-image" }, index.h("div", { class: "img-capa", style: imgCapa }, index.h("div", { class: "shadow-image" }))))))
    ];
  }
};

exports.yduqs_module_cover = YduqsCodeSnipet;
