'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let YduqsNotifications = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const positionClass = this.position ? `c-notifications--${this.position}` : '';
    return (index.h("div", { role: "presentation", class: `c-notifications ${positionClass}` }, index.h("slot", null)));
  }
};

exports.yduqs_notifications = YduqsNotifications;
