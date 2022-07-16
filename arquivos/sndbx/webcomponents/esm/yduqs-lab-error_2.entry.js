import { r as registerInstance, h, a as Host, c as createEvent } from './index-b21d89aa.js';

const YduqsLabError = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.message = 'Carregando...';
  }
  render() {
    var _a;
    return (h(Host, { class: "c-lab-error" }, ((_a = this.errors) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (h("dl", null, h("dt", null, "Errors:"), this.errors.map(error => (h("dd", null, error))))) : (h("yduqs-loading", { open: true, message: this.message }))));
  }
};

const YduqsLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClose = createEvent(this, "close", 7);
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
    return (h("span", { class: "c-loading__message c-paragraph" }, this.message));
  }
  render() {
    const displayClass = this._isOpen ? '' : 'c-loading--hidden';
    return (h(Host, { class: `c-loading ${displayClass}` }, h("div", { class: "c-loading__animation" }, h("div", { class: "c-loading__dot" }), h("div", { class: "c-loading__dot" }), h("div", { class: "c-loading__dot" })), this.message !== '' ? this.renderMessage() : null));
  }
};

export { YduqsLabError as yduqs_lab_error, YduqsLoading as yduqs_loading };
