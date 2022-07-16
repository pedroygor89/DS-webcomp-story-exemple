'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let TimelineItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const lastClass = this.last ? `c-timeline-item--last` : '';
    return (index.h("li", { class: `c-timeline-item ${lastClass}` }, index.h("div", { class: "c-timeline-item__icon-container" }, index.h("span", { class: "c-timeline-item__icon material-icons" }, this.icon)), index.h("div", { class: "c-timeline-item__body" }, index.h("slot", null))));
  }
};

exports.yduqs_timeline_item = TimelineItem;
