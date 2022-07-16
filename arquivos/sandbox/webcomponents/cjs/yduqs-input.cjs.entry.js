'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.visible = 'invisible';
    this.color = '';
    this.iconColor = 'times-buttom-color-default';
    this.bgColor = '';
  }
  async alteraInput(ev) {
    this.input = ev.target.value;
  }
  async apagarValor() {
    this.input = "";
    this.visible = 'invisible';
    this.color = 'color-default';
  }
  mensagem(novoValor) {
    if (novoValor != "" && novoValor.length > 4) {
      this.visible = '';
      this.color = 'success';
      this.iconColor = 'times-buttom-color-success';
      this.messageTitle = true;
      this.bgColor = 'bg-success';
    }
    else if (novoValor == "") {
      this.color = 'color-default';
      this.visible = 'invisible';
      this.iconColor = 'times-buttom-color-default';
      this.bgColor = "";
    }
    else {
      this.visible = ' ';
      this.color = 'danger';
      this.iconColor = 'times-buttom-color-danger';
      this.messageTitle = false;
      this.bgColor = 'bg-danger';
    }
  }
  render() {
    return (index.h("div", { class: "container-input" }, index.h("h2", null, this.titulo), index.h("input", { id: "inputId", class: `${this.color} inputC ${this.bgColor}`, type: "text", placeholder: this.icon + ' ' + this.placeh, value: this.input, onInput: (ev) => this.alteraInput(ev) }), index.h("span", { class: "times-buttom", onClick: () => { this.apagarValor(); } }, index.h("i", { class: `fa fa-times ${this.iconColor}` })), index.h("p", { class: `${this.color} message-value ${this.visible}` }, this.messageTitle ? 'Username available!' : 'Username Token!')));
  }
  static get watchers() { return {
    "input": ["mensagem"]
  }; }
};

exports.yduqs_input = Input;
