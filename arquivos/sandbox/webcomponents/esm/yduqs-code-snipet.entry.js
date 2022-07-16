import { r as registerInstance, h } from './index-c3ccce17.js';

let YduqsCodeSnipet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async copy(code) {
    navigator.clipboard.writeText(code);
  }
  componentWillRender() {
    this.isDark = this.dark;
  }
  render() {
    return [
      h("div", { class: `c-code-snipet ${this.isDark ? 'dark' : ''}` }, h("div", { class: "top d-flex align-items-center justify-content-between" }, h("span", { class: "title" }, this.language_code), h("span", { class: "material-icons icon", onClick: () => this.copy(this.code) }, "content_copy")), h("div", { class: "box" }, h("div", { class: "box-code" }, h("my-stace", { class: "content_code", mode: this.language_code, theme: `${this.isDark ? 'monokai' : 'chrome'}`, readOnly: true, autoUpdateContent: false, durationBeforeCallback: 1000 }, this.code))))
    ];
  }
};

export { YduqsCodeSnipet as yduqs_code_snipet };
