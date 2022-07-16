import { r as registerInstance, h } from './index-6ca065bd.js';

const TimelineItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const lastClass = this.last ? `c-timeline-item--last` : '';
    return (h("li", { class: `c-timeline-item ${lastClass}` }, h("div", { class: "c-timeline-item__icon-container" }, h("span", { class: "c-timeline-item__icon material-icons" }, this.icon)), h("div", { class: "c-timeline-item__body" }, h("slot", null))));
  }
};

export { TimelineItem as yduqs_timeline_item };
