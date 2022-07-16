import { r as registerInstance, h } from './index-6ca065bd.js';

const YduqsCodeSnipet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const imgCapa = {
      backgroundImage: 'url(' + this.img_cover + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return [
      h("div", { class: 'c-module-cover' }, h("div", { class: 'row g-0 m-0' }, h("div", { class: "col-12 col-lg-2 col-xxl-3 d-flex justify-content-center align-items-center box-column d-lg-block" }, h("span", null), h("p", { class: "u-title-medium" }, this.number_module), h("span", null)), h("div", { class: "col-12 col-lg-10 col-xxl-9 d-flex flex-column flex-lg-row" }, h("div", { class: "container-box-title col-12 col-lg-8 col-xxl-7 d-flex" }, h("div", { class: "box-title" }, h("div", { class: "titles" }, h("h2", { class: "c-heading u-title-medium", innerHTML: this.title_module }), h("p", { class: "u-text", innerHTML: this.objective })), this.read_time || this.midia_time ?
        h("div", { class: "times" }, this.read_time && this.title_read_time ?
          h("div", { class: "time-read" }, h("span", { class: "material-icons" }, "access_time"), h("div", { class: "itens-read" }, h("span", { class: "text-read" }, this.title_read_time), h("span", { class: "text-time-read" }, this.read_time)))
          : '', this.midia_time && this.title_midia_time ?
          h("div", { class: "time-video" }, h("span", { class: "material-icons" }, "ondemand_video"), h("div", { class: "itens-video" }, h("span", { class: "text-video" }, this.title_midia_time), h("span", { class: "text-time-video" }, this.midia_time)))
          : '')
        : '')), h("div", { class: "box-image" }, h("div", { class: "img-capa", style: imgCapa }, h("div", { class: "shadow-image" }))))))
    ];
  }
};

export { YduqsCodeSnipet as yduqs_module_cover };
