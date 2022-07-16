'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsNotification = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onClose = index.createEvent(this, "close", 7);
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
    return (index.h("div", { role: "notification", hidden: !this._isOpen, class: `c-notification ${typeClass} ${isOpenClass} ${isDynamicClass}` }, index.h("div", { class: "c-notification__container" }, index.h("div", { class: "c-notification__content" }, index.h("span", { class: "c-notification__icon material-icons" }, iconClass), index.h("slot", null)), this.dismissible && (index.h("button", { class: "c-notification__control", onClick: () => this.close() }, index.h("span", { class: "c-notification__icon material-icons" }, "close"))))));
  }
};

exports.yduqs_notification = YduqsNotification;
