import { h, Component } from '@stencil/core';
export class atividadeDiscursiva {
  render() {
    return (h("section", { class: "w-100" },
      h("slot", null)));
  }
  static get is() { return "yduqs-atividade-discursiva"; }
}
