import { r as registerInstance, h } from './index-b21d89aa.js';

const Rating = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "c-rating" }, h("h3", null, this.cta), h("div", { class: "star-rating" }, h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)))));
  }
};

export { Rating as yduqs_rating };
