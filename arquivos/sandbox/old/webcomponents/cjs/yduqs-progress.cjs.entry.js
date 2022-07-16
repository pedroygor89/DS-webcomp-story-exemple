'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f761ffe9.js');

const Progress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onChange = index.createEvent(this, "changed", 7);
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
    return (index.h("div", { class: `c-progress ${roundedClass} ${semiroundedClass}` }, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
};

exports.yduqs_progress = Progress;
