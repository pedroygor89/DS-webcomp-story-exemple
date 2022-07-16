'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const Tab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const typeClass = this.type ? `c-tabs__tab--${this.type}` : '';
    return (index.h(index.Host, null, this.outline ?
      index.h("div", { class: 'c-round-border' }, index.h("div", { role: "tabpanel", hidden: !this.open, class: "c-tabs__tab {typeClass}" }, index.h("slot", null)))
      :
        index.h("div", { role: "tabpanel", hidden: !this.open, class: `c-tabs__tab ${typeClass}` }, index.h("slot", null))));
  }
};

const Tabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onChange = index.createEvent(this, "changed", 7);
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
    return (index.h("div", { class: `c-tabs ${darkClass} ${colorMode}` }, index.h("div", { role: "tablist", class: "c-tabs" }, index.h("div", { class: "c-tabs__nav" }, index.h("div", { class: "c-tabs__headings" }, this.tabs.map((tab, i) => {
      const openClass = tab.open ? 'c-tab-heading--active' : '';
      var head = this.icons ? `<span class="c-button__icon-text-right material-icons">${this.icons[i]}</span> ${tab.header}` : `${tab.header}`;
      return (index.h("div", { class: `c-tab-heading ${openClass}`, onClick: () => this.openTab(i), innerHTML: head, role: "tab", "data-gtm-event-category": this.gtm_category[i], "data-gtm-event-action": this.gtm_action[i], "data-gtm-event-label": this.gtm_label[i] }));
    }))), this.fixed_titles != false ? index.h("div", { class: "c-tabpanel-scroll" }, index.h("slot", null)) : index.h("slot", null))));
  }
  get elem() { return index.getElement(this); }
};

exports.yduqs_tab = Tab;
exports.yduqs_tabs = Tabs;
