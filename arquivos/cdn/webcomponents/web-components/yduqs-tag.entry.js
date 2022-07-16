import { r as registerInstance, h, e as Host } from './index-5acc1e77.js';

const YduqsTag = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const colorClass = this.color ? `c-tag--${this.color}` : '';
    return (h(Host, { role: "tag", class: `c-tag ${colorClass}` }, h("slot", null)));
  }
};

export { YduqsTag as yduqs_tag };
