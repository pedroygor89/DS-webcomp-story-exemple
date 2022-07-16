import { r as registerInstance, i as createEvent, h, e as Host } from './index-5acc1e77.js';
import { a as generateSvgFromBase64Data } from './utils-f2ca3a61.js';

const YduqsConfirm = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.confirmClosed = createEvent(this, "confirmClosed", 7);
    this.confirmClick = createEvent(this, "confirmClick", 7);
    this.open = false;
    this.usematerial = true;
    this.btntext = 'Ok';
  }
  handleClose() {
    this.confirmClosed.emit(true);
  }
  handleClick() {
    this.confirmClick.emit(true);
  }
  render() {
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, h("div", { class: "c-confirm-overlay", onClick: () => this.handleClose() }), h("div", { class: "c-confirm-container" }, h("header", { class: "c-confirm-header" }, this.usematerial ? (h("span", { class: "c-confirm-icon material-icons" }, this.icon)) : (h("span", { class: "c-confirm-icon", innerHTML: generateSvgFromBase64Data(this.icon) })), h("h2", { class: "c-confirm-title" }, this.title)), h("div", { class: "c-confirm-content" }, Boolean(this.subtitle) && h("span", { class: "c-confirm-subtitle" }, this.subtitle), h("span", { class: "c-confirm-message" }, this.message)), h("footer", { class: "c-confirm-footer" }, h("button", { class: "c-button c-button--ghost c-button__icon-container u-text--medium c-confirm-back", onClick: () => this.handleClick() }, h("span", { class: "c-button__icon material-icons" }, "arrow_back")), h("button", { class: "c-button u-text--medium c-confirm-button", onClick: () => this.handleClick() }, this.btntext, h("span", { class: "c-button__icon material-icons" }, "done"))))));
  }
};

export { YduqsConfirm as yduqs_confirm };
