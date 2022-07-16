import { r as registerInstance, h, e as Host } from './index-6ca065bd.js';

const Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const typeClass = this.type ? `c-tabs__tab--${this.type}` : '';
    return (h(Host, null, this.outline ?
      h("div", { class: 'c-round-border' }, h("div", { role: "tabpanel", hidden: !this.open, class: "c-tabs__tab {typeClass}" }, h("slot", null)))
      :
        h("div", { role: "tabpanel", hidden: !this.open, class: `c-tabs__tab ${typeClass}` }, h("slot", null))));
  }
};

export { Tab as yduqs_tab };
