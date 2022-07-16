'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let YduqsCollapseTeoriaContent = class {
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
    this.content.className = this._isOpen ? 'C-collapse__content u-fade-in' : 'C-collapse__content';
  }
  render() {
    const isOpenClass = this._isOpen ? 'C-collapse__control--active' : '';
    const sizeClass = this.size ? `u-text--${this.size}` : 'u-text--medium';
    const darkBg = this.teoria ? 'bgTeoriaDark' : 'bgTeoriaDefault';
    const txtBtn = this._isOpen ? 'Fechar solução' : this.header;
    return (index.h(index.Host, null, index.h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `C-collapse__control ${isOpenClass} ${sizeClass}`, onClick: () => this.toggle() }, index.h("div", { class: "c-button container-btn" }, index.h("span", { class: "C-collapse__title" }, txtBtn), index.h("span", { class: "C-collapse__icon material-icons" }, "expand_more"))), index.h("div", { ref: (el) => (this.content = el), "aria-hidden": !this._isOpen, class: `C-collapse__content ${darkBg}` }, index.h("slot", null))));
  }
};

exports.yduqs_collapse_teoria_content = YduqsCollapseTeoriaContent;
