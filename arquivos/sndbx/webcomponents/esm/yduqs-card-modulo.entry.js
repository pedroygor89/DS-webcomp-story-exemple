import { r as registerInstance, c as createEvent, h, a as Host, g as getElement } from './index-b21d89aa.js';

const YduqsCardModulo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onChange = createEvent(this, "changed", 7);
    this.progress = 100;
  }
  onChangeBar(ev) {
    // const progress = this.element.children[3];
    const progress = this.element.querySelector('yduqs-progress-bar');
    const value = ev.detail;
    const bar = ev.target;
    const idx = [].indexOf.call(progress.children, bar);
    this.onChange.emit(Object.assign({ idx }, value));
    this.completed = (value.val === 100) ? true : false;
    this.updateCardStatus();
  }
  updateCardStatus() {
    const button = this.element.children[2].children[0];
    if (this.completed) {
      button.className = 'c-button c-button--ghost u-text--small';
    }
    else {
      button.className = 'c-button c-button--primary u-text--small';
    }
  }
  render() {
    return (h(Host, { class: `c-card-modulo` }, h("slot", null), h("div", { class: "c-card-modulo__progress" }, h("yduqs-progress-bar", { value: this.progress, semirounded: true }))));
  }
  get element() { return getElement(this); }
};

export { YduqsCardModulo as yduqs_card_modulo };
