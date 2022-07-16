import { r as registerInstance, c as createEvent, h, a as Host } from './index-c3ccce17.js';

let YduqsCollapseContent = class {
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
    const isOpenClass = this._isOpen ? 'c-collapse__control--active' : '';
    const sizeClass = this.size ? `u-text--${this.size}` : 'u-text--medium';
    return (h(Host, null, h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-collapse__control ${isOpenClass} ${sizeClass}`, onClick: () => this.toggle() }, h("span", { class: "c-collapse__title" }, this.header), h("span", { class: "c-collapse__icon material-icons" }, "expand_more")), h("div", { ref: (el) => (this.content = el), "aria-hidden": !this._isOpen, class: "c-collapse__content" }, h("slot", null))));
  }
};

export { YduqsCollapseContent as yduqs_collapse_content };
