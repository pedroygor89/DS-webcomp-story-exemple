import { r as registerInstance, h } from './index-906e7a1c.js';

const YduqsNotifications = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const positionClass = this.position ? `c-notifications--${this.position}` : '';
    return (h("div", { role: "presentation", class: `c-notifications ${positionClass}` }, h("slot", null)));
  }
};

export { YduqsNotifications as yduqs_notifications };
