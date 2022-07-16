import { r as registerInstance, h, g as getElement } from './index-6ca065bd.js';

const YduqsAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  // @Event({ eventName: 'toggle' })
  // onToggle: EventEmitter;
  // @Listen('togglepane')
  // onTogglePane(ev) {
  //   const accordion = this.element.children[0];
  //   const open = ev.detail;
  //   const pane = ev.target;
  //   const idx = [].indexOf.call(accordion.children, pane);
  //   this.onToggle.emit({ idx, open });
  //   this._active = open;
  //   this.animate();
  // }
  animate() {
    this.content.style.maxHeight = `${this._contentMaxHeight}px`;
  }
  render() {
    const outlineClass = this.outline ? 'c-accordion--outline' : '';
    const activeClass = this._active ? 'c-accordion--active' : '';
    return (h("div", { ref: (el) => (this.content = el), class: `c-accordion c-accordion--collapse ${outlineClass} ${activeClass}` }, h("slot", null)));
  }
  get element() { return getElement(this); }
};

export { YduqsAccordion as yduqs_accordion };
