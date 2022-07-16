'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCardModulo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onChange = index.createEvent(this, "changed", 7);
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
    return (index.h(index.Host, { class: `c-card-modulo` }, index.h("slot", null), index.h("div", { class: "c-card-modulo__progress" }, index.h("yduqs-progress-bar", { value: this.progress, semirounded: true }))));
  }
  get element() { return index.getElement(this); }
};

exports.yduqs_card_modulo = YduqsCardModulo;
