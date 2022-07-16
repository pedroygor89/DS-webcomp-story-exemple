import { r as registerInstance, h, g as getElement } from './index-6ca065bd.js';

const YduqsCodeSnipet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.project_python = false;
    this.text_console = '';
    this.text_response = '';
    this.response_active = false;
  }
  async copy(code) {
    navigator.clipboard.writeText(code);
  }
  async GET(protocol, url) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.withCredentials = false;
    Httpreq.open(protocol, url, false);
    Httpreq.setRequestHeader('x-rapidapi-key', '5c5fc15161msh1ed684ed727dacdp1856e4jsn507d3fc3d8ce');
    Httpreq.setRequestHeader('x-rapidapi-host', 'paiza-io.p.rapidapi.com');
    Httpreq.send(null);
    return Httpreq.responseText;
  }
  async runCompilerDesktop() {
    this.text_console = '<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>';
    this.response_active = false;
    setTimeout(() => {
      this.runCompilerAPI();
    }, 100);
  }
  runCompilerMobile() {
    this.text_console = '<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>';
    this.response_active = false;
    var myTabs = this.el.querySelector('yduqs-tabs');
    myTabs.openTab(1);
    setTimeout(() => {
      this.runCompilerAPI();
    }, 100);
  }
  async runCompilerAPI() {
    var textCode = encodeURIComponent(this.current_code);
    var textKeyboard = encodeURIComponent(this.el.querySelector('.content_input pre').innerHTML.replace(/<br ?\/?>/g, '\n'));
    var language = this.language_code;
    var protocol = 'POST';
    var url = 'https://paiza-io.p.rapidapi.com/runners/create?source_code=' + textCode + '&input=' + textKeyboard + '&language=' + language + '&longpoll=true&api_key=guest';
    var component = JSON.parse(await this.GET(protocol, url));
    var idComponent = component.id;
    var protocolStatus = 'GET';
    var urlStatus = 'https://paiza-io.p.rapidapi.com/runners/get_status?id=' + idComponent + '&api_key=guest';
    var componentGetStatus = JSON.parse(await this.GET(protocolStatus, urlStatus));
    if (componentGetStatus.status == 'completed') {
      var protocolCompile = 'GET';
      var urlCompile = 'https://paiza-io.p.rapidapi.com/runners/get_details?id=' + componentGetStatus.id + '&api_key=guest';
      var componentGetCompile = JSON.parse(await this.GET(protocolCompile, urlCompile));
      if (componentGetCompile.result == 'success') {
        this.response_active = true;
        this.text_response = componentGetCompile.stdout;
      }
      else {
        this.response_active = false;
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
    if (this.language_code === 'python' || this.language_code === 'python2' || this.language_code === 'python3') {
      this.language_code = 'python3';
    }
    this.setInput();
  }
  openModal(getModal) {
    var modal = document.getElementById(getModal);
    modal.setAttribute('isopen', 'true');
  }
  render() {
    return [
      h("div", { class: `c-code-compiler ${this.isDark ? 'dark' : ''}` }, !this.project_python && (h("div", { class: "top d-flex align-items-center justify-content-between" }, h("span", { class: "title" }, this.exercise_title), h("span", { class: "material-icons icon", onClick: () => this.copy(this.current_code) }, "content_copy"))), h("div", { class: "box" }, h("div", { class: "box-code" }, !this.project_python ? (h("div", null, h("span", { class: "title_code" }, this.language_code), h("stace-editor", { class: "content_code", mode: this.language_code, theme: `${this.isDark ? 'monokai' : 'chrome'}`, readOnly: false, autoUpdateContent: true, durationBeforeCallback: 1000 }, decodeURIComponent(this.code)))) : (h("div", { class: "box-code-float-padd" }, h("stace-editor", { class: "content_code", mode: this.language_code, theme: `${this.isDark ? 'monokai' : 'chrome'}`, readOnly: false, autoUpdateContent: true, durationBeforeCallback: 1000 }, decodeURIComponent(this.code)))), this.project_python && (h("div", { class: "top d-flex align-items-center justify-content-start" }, h("div", { class: "button_console" }, h("button", { class: `me-4 c-button c-button__icon-container ${this.isDark ? `c-button--dark` : ``}`, type: "button", onClick: () => this.runCompilerDesktop() }, h("span", { class: "c-button__icon-text-right material-icons" }, "play_arrow"), "Executar")), h("span", { title: "Copiar c\u00F3digo", class: "float-icon me-4 material-icons icon", onClick: () => this.copy(this.current_code) }, "content_copy"), h("span", { title: "Orienta\u00E7\u00F5es", class: "modal float-icon me-4 material-icons icon", onClick: () => this.openModal('float-compiler-obs') }, "help_outline")))), h("div", { class: "box-input-console" }, h("div", { class: "box-input" }, h("span", { class: "title_input" }, "Input"), h("div", { class: "content_input", onInput: () => this.updateInputTab() }, h("pre", { autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "true" }))), h("div", { class: "box-console" }, h("span", { class: "title_console" }, "Console"), !this.project_python && (h("div", { class: "button_console" }, h("button", { class: `c-button c-button__icon-container ${this.isDark ? `c-button--dark` : ``}`, type: "button", onClick: () => this.runCompilerDesktop() }, h("span", { class: "c-button__icon-text-right material-icons" }, "play_arrow"), "Executar"))), this.response_active ? (h("textarea", { class: "content_response", autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "false", disabled: true, innerHTML: this.text_response })) : (h("div", { class: "content_console", autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "false", innerHTML: this.text_console }))), h("div", { class: "box-mobile" }, h("yduqs-tabs", { darkmode: false }, h("yduqs-tab", { header: "Input", open: true }, h("div", { class: "box-input-tab" }, h("div", { class: "content_input-tab", onInput: () => this.updateInput() }, h("pre", { autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "true" })))), h("yduqs-tab", { header: "Console" }, h("div", { class: "box-console-tab" }, this.response_active ? (h("textarea", { class: "content_response-tab", autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "false", disabled: true, innerHTML: this.text_response })) : (h("div", { class: "content_console-tab", autocorrect: "off", autocapitalize: "off", spellcheck: "false", contenteditable: "false", innerHTML: this.text_console }))))), h("div", { class: "button_console-mobile" }, h("button", { class: `c-button c-button__icon-container u-text--small ${this.isDark ? `c-button--dark` : ``}`, type: "button", onClick: () => this.runCompilerMobile() }, h("span", { class: "c-button__icon-text-right material-icons" }, "play_arrow"))))))),
    ];
  }
  get el() { return getElement(this); }
};

export { YduqsCodeSnipet as yduqs_code_compiler };
