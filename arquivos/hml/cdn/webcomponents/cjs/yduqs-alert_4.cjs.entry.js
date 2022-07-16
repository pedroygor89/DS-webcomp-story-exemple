'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');
const utils = require('./utils-d6d1bd9f.js');

const YduqsAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.alertClosed = index.createEvent(this, "alertClosed", 7);
    this.alertClick = index.createEvent(this, "alertClick", 7);
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
    return (index.h(index.Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, index.h("div", { class: "c-alert-overlay", onClick: () => this.handleClose() }), index.h("div", { class: "c-alert-container" }, index.h("header", { class: "c-alert-header" }, this.usematerial ? index.h("span", { class: "c-alert-icon material-icons" }, this.icon) : index.h("span", { class: "c-alert-icon", innerHTML: utils.generateSvgFromBase64Data(this.icon) }), index.h("h2", { class: "c-alert-title" }, this._title)), Boolean(this.subtitle) && index.h("span", { class: "c-alert-subtitle" }, this.subtitle), index.h("span", { class: "c-alert-message" }, this.message), index.h("button", { class: "c-button u-text--medium c-alert-button", onClick: () => this.handleClick() }, this.btntext))));
  }
};

const YduqsConfirm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.confirmClosed = index.createEvent(this, "confirmClosed", 7);
    this.confirmClick = index.createEvent(this, "confirmClick", 7);
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
    return (index.h(index.Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, index.h("div", { class: "c-confirm-overlay", onClick: () => this.handleClose() }), index.h("div", { class: "c-confirm-container" }, index.h("header", { class: "c-confirm-header" }, this.usematerial ? (index.h("span", { class: "c-confirm-icon material-icons" }, this.icon)) : (index.h("span", { class: "c-confirm-icon", innerHTML: utils.generateSvgFromBase64Data(this.icon) })), index.h("h2", { class: "c-confirm-title" }, this._title)), index.h("div", { class: "c-confirm-content" }, Boolean(this.subtitle) && index.h("span", { class: "c-confirm-subtitle" }, this.subtitle), index.h("span", { class: "c-confirm-message" }, this.message)), index.h("footer", { class: "c-confirm-footer" }, index.h("button", { class: "c-button c-button--ghost c-button__icon-container u-text--medium c-confirm-back", onClick: () => this.handleClick() }, index.h("span", { class: "c-button__icon material-icons" }, "arrow_back")), index.h("button", { class: "c-button u-text--medium c-confirm-button", onClick: () => this.handleClick() }, this.btntext, index.h("span", { class: "c-button__icon material-icons" }, "done"))))));
  }
};

const YduqsInfo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.infoClosed = index.createEvent(this, "infoClosed", 7);
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
    return (index.h(index.Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, index.h("div", { class: "c-info-container" }, index.h("button", { class: "c-info-button", onClick: () => this.handleClick() }, index.h("span", { class: "material-icons" }, "close")), index.h("header", { class: "c-info-header" }, this.usematerial ? index.h("span", { class: "c-info-icon material-icons" }, this.icon) : index.h("span", { class: "c-info-icon", innerHTML: utils.generateSvgFromBase64Data(this.icon) }), index.h("h2", { class: "c-info-title" }, this._title)), index.h("div", { class: "c-info-content" }, Boolean(this.subtitle) && index.h("span", { class: "c-info-subtitle" }, this.subtitle), index.h("span", { class: "c-info-message" }, this.message)), index.h("footer", { class: "c-info-footer" }, index.h("div", { class: "c-info-timer", style: this.getWidth() })))));
  }
  static get watchers() { return {
    "open": ["handleClose"]
  }; }
};

const YduqsToast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toastClosed = index.createEvent(this, "toastClosed", 7);
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
    return (index.h(index.Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, this.usematerial ? index.h("span", { class: "c-toast-icon material-icons" }, this.icon) : index.h("span", { class: "c-toast-icon", innerHTML: utils.generateSvgFromBase64Data(this.icon) }), index.h("span", { class: "c-toast-message" }, Boolean(this.tit) && index.h("span", { class: "c-toast-message-title" }, this.tit), this.message)));
  }
  static get watchers() { return {
    "open": ["handleClose"]
  }; }
};

exports.yduqs_alert = YduqsAlert;
exports.yduqs_confirm = YduqsConfirm;
exports.yduqs_info = YduqsInfo;
exports.yduqs_toast = YduqsToast;
