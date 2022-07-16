import { r as registerInstance, c as createEvent, h, a as Host } from './index-b21d89aa.js';

const YduqsCollapseContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onToggle = createEvent(this, "togglepane", 7);
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
    return (h(Host, null, h("div", { class: "row" }, h("div", { class: "col" }, h("div", { class: `${aling}` }, h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-button ${sizeClass} btnCollapse`, onClick: () => this.toggle() }, h("span", { class: "c-collapse__title" }, this.header), h("span", { class: "c-collapse__icon material-icons" }, this._isOpen ? 'expand_less' : 'expand_more'))))), h("div", { ref: el => (this.content = el), "aria-hidden": !this._isOpen, class: `c-collapse__content ${color}` }, h("slot", null))));
  }
};

export { YduqsCollapseContent as yduqs_collapse_content };
