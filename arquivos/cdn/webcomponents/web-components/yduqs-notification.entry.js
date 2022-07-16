import { r as registerInstance, i as createEvent, h } from './index-5acc1e77.js';

const YduqsNotification = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClose = createEvent(this, "close", 7);
    this.type = '';
    this.dismissible = false;
    this.open = false;
    this._isOpen = false;
    this._isDynamic = false;
  }
  async close() {
    this._isOpen = false;
    this._isDynamic = false;
    this.onClose.emit();
  }
  async show() {
    this._isOpen = true;
    this._isDynamic = true;
  }
  async isOpen() {
    return this._isOpen;
  }
  componentWillLoad() {
    this._isOpen = this.open;
  }
  _getIconName() {
    if (this.type === 'info') {
      return 'info';
    }
    else if (this.type === 'success') {
      return 'check_circle';
    }
    else if (this.type === 'warning') {
      return 'report_problem';
    }
    else if (this.type === 'error') {
      return 'cancel';
    }
    else {
      return '';
    }
  }
  render() {
    const isOpenClass = !this._isOpen ? 'u-fade-out' : '';
    const typeClass = this.type ? `c-notification--${this.type}` : '';
    const iconClass = this._getIconName();
    const isDynamicClass = this._isDynamic ? 'c-notification--dynamic u-fade-in' : '';
    return (h("div", { role: "notification", hidden: !this._isOpen, class: `c-notification ${typeClass} ${isOpenClass} ${isDynamicClass}` }, h("div", { class: "c-notification__container" }, h("div", { class: "c-notification__content" }, h("span", { class: "c-notification__icon material-icons" }, iconClass), h("slot", null)), this.dismissible && (h("button", { class: "c-notification__control", onClick: () => this.close() }, h("span", { class: "c-notification__icon material-icons" }, "close"))))));
  }
};

export { YduqsNotification as yduqs_notification };
