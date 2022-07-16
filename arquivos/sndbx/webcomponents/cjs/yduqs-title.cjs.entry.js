'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const Title = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: `c-topic-title ${this.dark ? 'c-topic-title--dark' : ''}` }, index.h("div", { class: 'row align-items-center justify-content-start' }, index.h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }, this.topic_icon ? index.h("span", { class: "material-icons" }, this.topic_icon) : index.h("span", { class: "title-bar" })), index.h("div", { class: 'col-12 col-md-10 col-lg-8' }, index.h("h1", { class: "c-heading u-title-small", innerHTML: this === null || this === void 0 ? void 0 : this.topic_title })))));
  }
};

exports.yduqs_title = Title;
