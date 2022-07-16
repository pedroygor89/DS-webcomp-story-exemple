import { r as registerInstance, c as createEvent, h, g as getElement } from './index-906e7a1c.js';

const Progress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onChange = createEvent(this, "changed", 7);
  }
  onChangeBar(ev) {
    const progress = this.element.children[0];
    const value = ev.detail;
    const bar = ev.target;
    const idx = [].indexOf.call(progress.children, bar);
    this.onChange.emit(Object.assign({ idx }, value));
  }
  render() {
    const roundedClass = this.rounded ? `c-progress--rounded` : '';
    const semiroundedClass = this.semirounded ? `c-progress--semirounded` : '';
    return (h("div", { class: `c-progress ${roundedClass} ${semiroundedClass}` }, h("slot", null)));
  }
  get element() { return getElement(this); }
};

export { Progress as yduqs_progress };
