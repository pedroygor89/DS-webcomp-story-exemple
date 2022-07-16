import { r as registerInstance, c as createEvent, h, a as Host } from './index-c3ccce17.js';

let YduqsCollapseTeoriaContent = class {
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
    this.content.className = this._isOpen ? 'C-collapse__content u-fade-in' : 'C-collapse__content';
  }
  render() {
    const isOpenClass = this._isOpen ? 'C-collapse__control--active' : '';
    const sizeClass = this.size ? `u-text--${this.size}` : 'u-text--medium';
    const darkBg = this.teoria ? 'bgTeoriaDark' : 'bgTeoriaDefault';
    const txtBtn = this._isOpen ? 'Fechar solução' : this.header;
    return (h(Host, null, h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `C-collapse__control ${isOpenClass} ${sizeClass}`, onClick: () => this.toggle() }, h("div", { class: "c-button container-btn" }, h("span", { class: "C-collapse__title" }, txtBtn), h("span", { class: "C-collapse__icon material-icons" }, "expand_more"))), h("div", { ref: (el) => (this.content = el), "aria-hidden": !this._isOpen, class: `C-collapse__content ${darkBg}` }, h("slot", null))));
  }
};

export { YduqsCollapseTeoriaContent as yduqs_collapse_teoria_content };
