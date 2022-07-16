import { r as registerInstance, c as createEvent, h, a as Host } from './index-b21d89aa.js';
import { b as generateSvgFromBase64Data } from './utils-42b62acd.js';

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
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, h("div", { class: "c-alert-overlay", onClick: () => this.handleClose() }), h("div", { class: "c-alert-container" }, h("header", { class: "c-alert-header" }, this.usematerial ? h("span", { class: "c-alert-icon material-icons" }, this.icon) : h("span", { class: "c-alert-icon", innerHTML: generateSvgFromBase64Data(this.icon) }), h("h2", { class: "c-alert-title" }, this._title)), Boolean(this.subtitle) && h("span", { class: "c-alert-subtitle" }, this.subtitle), h("span", { class: "c-alert-message" }, this.message), h("button", { class: "c-button u-text--medium c-alert-button", onClick: () => this.handleClick() }, this.btntext))));
  }
};

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
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, h("div", { class: "c-confirm-overlay", onClick: () => this.handleClose() }), h("div", { class: "c-confirm-container" }, h("header", { class: "c-confirm-header" }, this.usematerial ? (h("span", { class: "c-confirm-icon material-icons" }, this.icon)) : (h("span", { class: "c-confirm-icon", innerHTML: generateSvgFromBase64Data(this.icon) })), h("h2", { class: "c-confirm-title" }, this._title)), h("div", { class: "c-confirm-content" }, Boolean(this.subtitle) && h("span", { class: "c-confirm-subtitle" }, this.subtitle), h("span", { class: "c-confirm-message" }, this.message)), h("footer", { class: "c-confirm-footer" }, h("button", { class: "c-button c-button--ghost c-button__icon-container u-text--medium c-confirm-back", onClick: () => this.handleClick() }, h("span", { class: "c-button__icon material-icons" }, "arrow_back")), h("button", { class: "c-button u-text--medium c-confirm-button", onClick: () => this.handleClick() }, this.btntext, h("span", { class: "c-button__icon material-icons" }, "done"))))));
  }
};

const YduqsInfo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.infoClosed = createEvent(this, "infoClosed", 7);
    /**
     * Mostra/esconde o componente
     */
    this.open = false;
    /**
     * Informa se o ícone é Material Design ou Base64
     */
    this.usematerial = true;
    /**
     * Tempo em milessegundos que a mensagem permanece visível
     */
    this.delay = 10000;
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
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, h("div", { class: "c-info-container" }, h("button", { class: "c-info-button", onClick: () => this.handleClick() }, h("span", { class: "material-icons" }, "close")), h("header", { class: "c-info-header" }, this.usematerial ? h("span", { class: "c-info-icon material-icons" }, this.icon) : h("span", { class: "c-info-icon", innerHTML: generateSvgFromBase64Data(this.icon) }), h("h2", { class: "c-info-title" }, this._title)), h("div", { class: "c-info-content" }, Boolean(this.subtitle) && h("span", { class: "c-info-subtitle" }, this.subtitle), h("span", { class: "c-info-message" }, this.message)), h("footer", { class: "c-info-footer" }, h("div", { class: "c-info-timer", style: this.getWidth() })))));
  }
  static get watchers() { return {
    "open": ["handleClose"]
  }; }
};

const YduqsToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toastClosed = createEvent(this, "toastClosed", 7);
    this.open = false;
    this.usematerial = true;
    this.delay = 17000;
  }
  handleClose() {
    if (this.open) {
      window.setTimeout(() => {
        this.toastClosed.emit(true);
      }, this.delay);
    }
  }
  render() {
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, this.usematerial ? h("span", { class: "c-toast-icon material-icons" }, this.icon) : h("span", { class: "c-toast-icon", innerHTML: generateSvgFromBase64Data(this.icon) }), h("span", { class: "c-toast-message" }, Boolean(this.tit) && h("span", { class: "c-toast-message-title" }, this.tit), this.message)));
  }
  static get watchers() { return {
    "open": ["handleClose"]
  }; }
};

export { YduqsAlert as yduqs_alert, YduqsConfirm as yduqs_confirm, YduqsInfo as yduqs_info, YduqsToast as yduqs_toast };
