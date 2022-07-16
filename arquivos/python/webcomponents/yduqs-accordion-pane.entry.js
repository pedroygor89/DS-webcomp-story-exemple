import { r as registerInstance, f as createEvent, h, e as Host } from './index-6ca065bd.js';

const YduqsAccordionPane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickCollapse = createEvent(this, "clickCollapse", 7);
    this.onToggle = createEvent(this, "togglepane", 7);
    this._isOpen = false;
    this.open = false;
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
    this.animate();
  }
  async isOpen() {
    return this._isOpen;
  }
  animate() {
    this.content.className = this._isOpen ? 'c-accordion__item c-accordion__item--pane u-fade-in' : 'c-accordion__item c-accordion__item--pane';
  }
  render() {
    const isOpenClass = this._isOpen ? 'c-accordion__control--active' : '';
    return (h(Host, { class: "c-accordion-pane" }, h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-accordion__control ${isOpenClass}`, onClick: ev => {
        this.clickCollapse.emit(ev);
        this.toggle();
      } }, h("div", { class: "c-accordion__title" }, h("slot", { name: "c-accordion-header" })), h("span", { class: "c-accordion__icon material-icons" }, "expand_more")), h("div", { ref: (el) => (this.content = el), "aria-hidden": !this._isOpen, class: "c-accordion__item c-accordion__item--pane" }, h("slot", { name: "c-accordion-content" }))));
  }
};

export { YduqsAccordionPane as yduqs_accordion_pane };
