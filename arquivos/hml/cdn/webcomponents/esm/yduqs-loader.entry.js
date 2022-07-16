import { r as registerInstance, h } from './index-b21d89aa.js';

const Loader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "c-loader-wrap", id: "teste" }, h("div", { class: "c-loader" }, h("div", { class: "loader_animation" }, h("div", { class: "loader_content" }, h("div", { class: "block1" }, h("div", { class: "loader_icon" }, h("hr", null), h("hr", null), h("hr", null), h("hr", null))), h("div", { class: "block2" }, h("svg", { width: "20", height: "22", viewBox: "0 0 20 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M18.4953 11.8465L2.54593 20.8608C1.83054 21.2652 0.999999 20.7387 0.999999 20.0144L1 1.98561C1 1.26134 1.83054 0.734824 2.54594 1.13916L18.4953 10.1535C19.1682 10.5339 19.1682 11.4661 18.4953 11.8465Z", stroke: "var(--primary-70)", "stroke-width": "2", "stroke-linejoin": "round" }))), h("div", { class: "block3" }, h("div", { class: "loader_icon" }, h("hr", null), h("hr", null), h("hr", null), h("hr", null))))), h("div", { class: "loader_info" }, h("p", null, "Aguarde enquanto preparamos tudo por aqui."), h("p", null, "Isso pode levar alguns instantes.")))));
  }
};

export { Loader as yduqs_loader };
