import { r as registerInstance, h, a as Host, c as createEvent, g as getElement } from './index-b21d89aa.js';

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

const Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onChange = createEvent(this, "changed", 7);
    this.fixed_titles = false;
    this.gtm_category = [];
    this.gtm_action = [];
    this.gtm_label = [];
  }
  componentWillLoad() {
    this.tabs = Array.from(this.elem.querySelectorAll('yduqs-tab'));
  }
  async currentTab() {
    return this.tabs.findIndex((tab) => tab.open);
  }
  async openTab(tabIndex) {
    if (!this.tabs[tabIndex].disabled) {
      this.tabs = this.tabs.map((tab) => {
        tab.open = false;
        return tab;
      });
      this.tabs[tabIndex].open = true;
      this.onChange.emit({ idx: tabIndex });
    }
  }
  render() {
    const darkClass = this.darkmode ? 'c-tabs--dark' : '';
    const colorMode = this.outlined ? 'c-tabs--outlined' : '';
    return (h("div", { class: `c-tabs ${darkClass} ${colorMode}` }, h("div", { role: "tablist", class: "c-tabs" }, h("div", { class: "c-tabs__nav" }, h("div", { class: "c-tabs__headings" }, this.tabs.map((tab, i) => {
      const openClass = tab.open ? 'c-tab-heading--active' : '';
      var head = this.icons ? `<span class="c-button__icon-text-right material-icons">${this.icons[i]}</span> ${tab.header}` : `${tab.header}`;
      return (h("div", { class: `c-tab-heading ${openClass}`, onClick: () => this.openTab(i), innerHTML: head, role: "tab", "data-gtm-event-category": this.gtm_category[i], "data-gtm-event-action": this.gtm_action[i], "data-gtm-event-label": this.gtm_label[i] }));
    }))), this.fixed_titles != false ? h("div", { class: "c-tabpanel-scroll" }, h("slot", null)) : h("slot", null))));
  }
  get elem() { return getElement(this); }
};

export { Tab as yduqs_tab, Tabs as yduqs_tabs };
