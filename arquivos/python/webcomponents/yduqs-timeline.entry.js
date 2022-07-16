import { r as registerInstance, h } from './index-6ca065bd.js';

const Timeline = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.horizontal = false;
  }
  render() {
    const typeClass = this.horizontal ? `o-timeline--horizontal` : '';
    const isdarkmode = this.dark ? `o-timeline--dark` : '';
    return (h("ol", { class: `o-timeline ${typeClass} ${isdarkmode}` }, h("slot", null)));
  }
};

export { Timeline as yduqs_timeline };
