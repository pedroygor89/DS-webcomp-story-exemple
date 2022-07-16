import { r as registerInstance, i as createEvent, h, e as Host } from './index-5acc1e77.js';
import { a as generateSvgFromBase64Data } from './utils-f2ca3a61.js';

const YduqsInfo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.infoClosed = createEvent(this, "infoClosed", 7);
    this.open = false;
    this.usematerial = true;
    this.delay = 10000; // Tempo de espera da msg em milesegundos
  }
  handleClose() {
    if (this.open) {
      window.setTimeout(() => {
        this.infoClosed.emit(true);
      }, this.delay);
    }
  }
  handleClick() {
    this.infoClosed.emit(true);
  }
  getWidth() {
    return { width: `${this.open ? 100 : 0}%`, transition: `width ${this.delay / 1000}s linear` };
  }
  render() {
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, h("div", { class: "c-info-container" }, h("button", { class: "c-info-button", onClick: () => this.handleClick() }, h("span", { class: "material-icons" }, "close")), h("header", { class: "c-info-header" }, this.usematerial ? h("span", { class: "c-info-icon material-icons" }, this.icon) : h("span", { class: "c-info-icon", innerHTML: generateSvgFromBase64Data(this.icon) }), h("h2", { class: "c-info-title" }, this.title)), h("div", { class: "c-info-content" }, Boolean(this.subtitle) && h("span", { class: "c-info-subtitle" }, this.subtitle), h("span", { class: "c-info-message" }, this.message)), h("footer", { class: "c-info-footer" }, h("div", { class: "c-info-timer", style: this.getWidth() })))));
  }
  static get watchers() { return {
    "open": ["handleClose"]
  }; }
};

export { YduqsInfo as yduqs_info };
