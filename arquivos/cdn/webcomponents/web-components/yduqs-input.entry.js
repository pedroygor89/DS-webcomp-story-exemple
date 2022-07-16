import { r as registerInstance, h } from './index-5acc1e77.js';

const Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "container-input" }, h("h2", null, this.titulo), h("input", { id: "inputId", class: `${this.color} inputC ${this.bgColor}`, type: "text", placeholder: this.icon + ' ' + this.placeh, value: this.input, onInput: (ev) => this.alteraInput(ev) }), h("span", { class: "times-buttom", onClick: () => { this.apagarValor(); } }, h("i", { class: `fa fa-times ${this.iconColor}` })), h("p", { class: `${this.color} message-value ${this.visible}` }, this.messageTitle ? 'Username available!' : 'Username Token!')));
  }
  static get watchers() { return {
    "input": ["mensagem"]
  }; }
};

export { Input as yduqs_input };
