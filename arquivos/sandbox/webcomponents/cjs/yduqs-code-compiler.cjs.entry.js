'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let YduqsCodeSnipet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text_console = "";
  }
  async copy(code) {
    navigator.clipboard.writeText(code);
  }
  async GET(protocol, url) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.withCredentials = false;
    Httpreq.open(protocol, url, false);
    Httpreq.setRequestHeader("x-rapidapi-key", "5c5fc15161msh1ed684ed727dacdp1856e4jsn507d3fc3d8ce");
    Httpreq.setRequestHeader("x-rapidapi-host", "paiza-io.p.rapidapi.com");
    Httpreq.send(null);
    return Httpreq.responseText;
  }
  async runCompilerDesktop() {
    this.text_console = '<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>';
    setTimeout(() => {
      this.runCompilerAPI();
    }, 100);
  }
  runCompilerMobile() {
    this.text_console = '<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>';
    var myTabs = this.el.querySelector("yduqs-tabs");
    myTabs.openTab(1);
    setTimeout(() => {
      this.runCompilerAPI();
    }, 100);
  }
  async runCompilerAPI() {
    var textCode = encodeURIComponent(this.current_code);
    var textKeyboard = encodeURIComponent(this.el.querySelector('.content_input pre').innerHTML.replace(/<br ?\/?>/g, "\n"));
    var language = this.language_code;
    var protocol = "POST";
    var url = "https://paiza-io.p.rapidapi.com/runners/create?source_code=" + textCode + "&input=" + textKeyboard + "&language=" + language + "&longpoll=true&api_key=guest";
    var component = JSON.parse(await this.GET(protocol, url));
    var idComponent = component.id;
    var protocolStatus = "GET";
    var urlStatus = "https://paiza-io.p.rapidapi.com/runners/get_status?id=" + idComponent + "&api_key=guest";
    var componentGetStatus = JSON.parse(await this.GET(protocolStatus, urlStatus));
    if (componentGetStatus.status == "completed") {
      var protocolCompile = "GET";
      var urlCompile = "https://paiza-io.p.rapidapi.com/runners/get_details?id=" + componentGetStatus.id + "&api_key=guest";
      var componentGetCompile = JSON.parse(await this.GET(protocolCompile, urlCompile));
      if (componentGetCompile.result == "success") {
        this.text_console = '<span>' + componentGetCompile.stdout + '</span>';
      }
      else {
        this.text_console = '<span class="error-compiler">' + componentGetCompile.stderr + '</span>';
      }
    }
  }
  textChangeHandler(event) {
    this.current_code = event.detail;
  }
  setInput() {
    var content_input = this.el.querySelector('.content_input pre');
    content_input.innerHTML = decodeURIComponent(this.input_keyboard);
    var content_input_tab = this.el.querySelector('.content_input-tab pre');
    content_input_tab.innerHTML = decodeURIComponent(this.input_keyboard);
  }
  updateInput() {
    this.el.querySelector('.content_input pre').innerHTML = this.el.querySelector('.content_input-tab pre').innerHTML;
  }
  updateInputTab() {
    this.el.querySelector('.content_input-tab pre').innerHTML = this.el.querySelector('.content_input pre').innerHTML;
  }
  componentWillRender() {
    this.isDark = this.dark;
  }
  componentDidLoad() {
    if (this.current_code == null) {
      this.current_code = decodeURIComponent(this.code);
    }
    if (this.language_code === "python" || this.language_code === "python2" || this.language_code === "python3") {
      this.language_code = "python3";
    }
    this.setInput();
  }
  render() {
    return [
      index.h("div", { class: `c-code-compiler ${this.isDark ? 'dark' : ''}` }, index.h("div", { class: "top d-flex align-items-center justify-content-between" }, index.h("span", { class: "title" }, this.exercise_title), index.h("span", { class: "material-icons icon", onClick: () => this.copy(this.current_code) }, "content_copy")), index.h("div", { class: "box" }, index.h("div", { class: "box-code" }, index.h("span", { class: "title_code" }, this.language_code), index.h("stace-editor", { class: "content_code", mode: this.language_code, theme: `${this.isDark ? 'monokai' : 'chrome'}`, readOnly: false, autoUpdateContent: true, durationBeforeCallback: 1000 }, decodeURIComponent(this.code))), index.h("div", { class: "box-input-console" }, index.h("div", { class: "box-input" }, index.h("span", { class: "title_input" }, "Input"), index.h("div", { class: "content_input", onInput: () => this.updateInputTab() }, index.h("pre", { autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "true" }))), index.h("div", { class: "box-console" }, index.h("span", { class: "title_console" }, "Console"), index.h("div", { class: "button_console" }, index.h("button", { class: `c-button c-button__icon-container ${this.isDark ? `c-button--dark` : ``}`, type: "button", onClick: () => this.runCompilerDesktop() }, index.h("span", { class: "c-button__icon-text-right material-icons" }, "play_arrow"), "Executar")), index.h("div", { class: "content_console", autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "false", innerHTML: this.text_console })), index.h("div", { class: "box-mobile" }, index.h("yduqs-tabs", { darkmode: false }, index.h("yduqs-tab", { header: "Input", open: true }, index.h("div", { class: "box-input-tab" }, index.h("div", { class: "content_input-tab", onInput: () => this.updateInput() }, index.h("pre", { autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "true" })))), index.h("yduqs-tab", { header: "Console" }, index.h("div", { class: "box-console-tab" }, index.h("div", { class: "content_console-tab", autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "false", innerHTML: this.text_console })))), index.h("div", { class: "button_console-mobile" }, index.h("button", { class: `c-button c-button__icon-container u-text--small ${this.isDark ? `c-button--dark` : ``}`, type: "button", onClick: () => this.runCompilerMobile() }, index.h("span", { class: "c-button__icon-text-right material-icons" }, "play_arrow")))))))
    ];
  }
  get el() { return index.getElement(this); }
};

exports.yduqs_code_compiler = YduqsCodeSnipet;
