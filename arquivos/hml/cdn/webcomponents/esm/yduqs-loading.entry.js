import { r as registerInstance, c as createEvent, h, a as Host } from './index-ab67dab6.js';

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

export { YduqsLoading as yduqs_loading };
