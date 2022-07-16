'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCollapseContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onToggle = index.createEvent(this, "togglepane", 7);
    this._isOpen = false;
    this.open = false;
  }
  componentWillLoad() {
    this._isOpen = this.open;
  }
  async show() {
    this._isOpen = true;
  }
  async close() {
    this._isOpen = false;
  }
  toggle() {
    this._isOpen ? this.close() : this.show();
    this.onToggle.emit(this._isOpen);
  }
  async isOpen() {
    return this._isOpen;
  }
  animate() {
    this.content.className = this._isOpen ? 'c-collapse__content u-fade-in' : 'c-collapse__content';
  }
  render() {
    const sizeClass = this.size ? `u-text--${this.size}` : 'u-text--medium';
    const color = this.color_collapse ? this.color_collapse : '';
    const aling = this.aling_collapse ? 'collapseRight' : 'collapseLeft';
    return (index.h(index.Host, null, index.h("div", { class: "row" }, index.h("div", { class: "col" }, index.h("div", { class: `${aling}` }, index.h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-button ${sizeClass} btnCollapse`, onClick: () => this.toggle() }, index.h("span", { class: "c-collapse__title" }, this.header), index.h("span", { class: "c-collapse__icon material-icons" }, this._isOpen ? 'expand_less' : 'expand_more'))))), index.h("div", { ref: el => (this.content = el), "aria-hidden": !this._isOpen, class: `c-collapse__content ${color}` }, index.h("slot", null))));
  }
};

exports.yduqs_collapse_content = YduqsCollapseContent;
