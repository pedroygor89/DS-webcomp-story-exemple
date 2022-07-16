import { r as registerInstance, i as createEvent, h, e as Host } from './index-5acc1e77.js';
import { a as generateSvgFromBase64Data } from './utils-f2ca3a61.js';

const YduqsAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.alertClosed = createEvent(this, "alertClosed", 7);
    this.alertClick = createEvent(this, "alertClick", 7);
    this.open = false;
    this.usematerial = true;
    this.btntext = 'Ok';
  }
  handleClose() {
    this.alertClosed.emit(true);
  }
  handleClick() {
    this.alertClick.emit(true);
  }
  render() {
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, h("div", { class: "c-alert-overlay", onClick: () => this.handleClose() }), h("div", { class: "c-alert-container" }, h("header", { class: "c-alert-header" }, this.usematerial ? h("span", { class: "c-alert-icon material-icons" }, this.icon) : h("span", { class: "c-alert-icon", innerHTML: generateSvgFromBase64Data(this.icon) }), h("h2", { class: "c-alert-title" }, this.title)), Boolean(this.subtitle) && h("span", { class: "c-alert-subtitle" }, this.subtitle), h("span", { class: "c-alert-message" }, this.message), h("button", { class: "c-button u-text--medium c-alert-button", onClick: () => this.handleClick() }, this.btntext))));
  }
};

export { YduqsAlert as yduqs_alert };
