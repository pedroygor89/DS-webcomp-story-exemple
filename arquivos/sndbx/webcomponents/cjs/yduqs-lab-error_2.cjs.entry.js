'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsLabError = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.message = 'Carregando...';
  }
  render() {
    var _a;
    return (index.h(index.Host, { class: "c-lab-error" }, ((_a = this.errors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (index.h("dl", null, index.h("dt", null, "Errors:"), this.errors.map(error => (index.h("dd", null, error))))) : (index.h("yduqs-loading", { open: true, message: this.message }))));
  }
};

const YduqsLoading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onClose = index.createEvent(this, "close", 7);
    this.message = '';
    this.open = false;
    this._isOpen = false;
  }
  async hide() {
    this._isOpen = false;
    this.onClose.emit();
  }
  async show() {
    this._isOpen = true;
  }
  async isOpen() {
    return this._isOpen;
  }
  componentWillLoad() {
    this._isOpen = this.open;
  }
  renderMessage() {
    return (index.h("span", { class: "c-loading__message c-paragraph" }, this.message));
  }
  render() {
    const displayClass = this._isOpen ? '' : 'c-loading--hidden';
    return (index.h(index.Host, { class: `c-loading ${displayClass}` }, index.h("div", { class: "c-loading__animation" }, index.h("div", { class: "c-loading__dot" }), index.h("div", { class: "c-loading__dot" }), index.h("div", { class: "c-loading__dot" })), this.message !== '' ? this.renderMessage() : null));
  }
};

exports.yduqs_lab_error = YduqsLabError;
exports.yduqs_loading = YduqsLoading;
