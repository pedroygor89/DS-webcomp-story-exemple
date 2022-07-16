'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCodeSnipet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.size = 'medium';
  }
  async copy(code) {
    navigator.clipboard.writeText(code);
  }
  componentWillRender() {
    this.isDark = this.dark;
  }
  render() {
    return [
      index.h("div", { class: `c-code-snipet ${this.isDark ? 'dark' : ''}` }, index.h("div", { class: "top d-flex align-items-center justify-content-between" }, index.h("span", { class: "title" }, this.language_code), index.h("span", { class: "material-icons icon", onClick: () => this.copy(decodeURIComponent(this.code)) }, "content_copy")), index.h("div", { class: `box box-${this.size}` }, index.h("div", { class: "box-code" }, index.h("my-stace", { class: "content_code", mode: this.language_code, theme: `${this.isDark ? 'monokai' : 'chrome'}`, readOnly: true, autoUpdateContent: false, durationBeforeCallback: 1000 }, decodeURIComponent(this.code)))))
    ];
  }
};

exports.yduqs_code_snipet = YduqsCodeSnipet;
