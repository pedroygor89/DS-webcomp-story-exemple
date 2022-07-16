import { h, Component } from '@stencil/core';
export class Footer {
  render() {
    return (h("div", { class: "c-footer-bgColor" },
      h("div", { class: "container" },
        h("yduqs-title", { topic_title: "Refer\u00EAncias" }),
        h("div", { class: "row align-items-center justify-content-center" },
          h("div", { class: "col-12 col-md-10 col-lg-8 my-2" },
            h("slot", { name: "itens-referencia" }))),
        h("yduqs-title", { topic_title: "Explore +" }),
        h("div", { class: "row align-items-center justify-content-center" },
          h("div", { class: "col-12 col-md-10 col-lg-8 my-2" },
            h("slot", { name: "itens-exploremais" }))))));
  }
  static get is() { return "yduqs-footer"; }
}
