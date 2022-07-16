'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsBeforeAfter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.before_img_title = '';
    this.titleChange = '';
  }
  ;
  mouseHandler() {
    this.titleChange = this.before_img_title;
    setTimeout(() => {
      this.titleChange = this.after_img_title;
    }, 1000);
  }
  render() {
    return (index.h("div", { class: "c-before-after" }, index.h("div", { class: "row-ba pb-1" }, index.h("div", { class: "container-ba" }, index.h("div", { class: "wrapper" }, index.h("div", { class: "images" }, index.h("img", { class: "img1", src: this.after_img, alt: this.after_img_alt, title: this.after_img_title }), index.h("img", { class: "img2", src: this.before_img, alt: this.before_img_alt, title: this.before_img_title, style: { "clip": `rect(0px 0px auto 0px)` } })), index.h("div", { class: "slider", title: this.titleChange }, index.h("div", { class: "drag-line", title: this.titleChange }, index.h("span", null)), index.h("input", { type: "range", min: "0", max: "100", value: "50" }))), index.h("div", { class: "c-legenda mt-3" }, index.h("p", { class: "c-paragraph u-text", innerHTML: this.caption }))))));
  }
};

exports.yduqs_before_after = YduqsBeforeAfter;
