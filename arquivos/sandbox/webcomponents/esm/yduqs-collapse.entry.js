import { r as registerInstance, c as createEvent, h, g as getElement } from './index-c3ccce17.js';

let YduqsCollapse = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onToggle = createEvent(this, "toggle", 7);
    this.border = false;
    this.outline = false;
  }
  onTogglePane(ev) {
    const collapse = this.element.children[0];
    const open = ev.detail;
    const pane = ev.target;
    const idx = [].indexOf.call(collapse.children, pane);
    this.onToggle.emit({ idx, open });
    this._active = open;
    this.animate();
  }
  componentDidRender() {
    if (this.content && this.content.offsetHeight) {
      this._contentMaxHeight = `${this.content.offsetHeight.toString()}px`;
    }
  }
  animate() {
    this.content.style.maxHeight = `${this._contentMaxHeight}px`;
  }
  render() {
    const borderClass = this.border ? 'c-collapse--border' : '';
    const outlineClass = this.border ? 'c-collapse--border' : '';
    const activeClass = this._active ? 'c-collapse--active' : '';
    return (h("div", { ref: (el) => (this.content = el), class: `c-collapse ${borderClass} ${outlineClass} ${activeClass}` }, h("slot", null)));
  }
  get element() { return getElement(this); }
};

export { YduqsCollapse as yduqs_collapse };
