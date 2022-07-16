import { h, Component, Prop, State, Method, Watch } from '@stencil/core';
export class Input {
  constructor() {
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
    return (h("div", { class: "container-input" },
      h("h2", null, this.titulo),
      h("input", { id: "inputId", class: `${this.color} inputC ${this.bgColor}`, type: "text", placeholder: this.icon + ' ' + this.placeh, value: this.input, onInput: (ev) => this.alteraInput(ev) }),
      h("span", { class: "times-buttom", onClick: () => { this.apagarValor(); } },
        h("i", { class: `fa fa-times ${this.iconColor}` })),
      h("p", { class: `${this.color} message-value ${this.visible}` }, this.messageTitle ? 'Username available!' : 'Username Token!')));
  }
  static get is() { return "yduqs-input"; }
  static get properties() { return {
    "placeh": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "placeh",
      "reflect": false
    },
    "titulo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "titulo",
      "reflect": false
    },
    "icon": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
  static get states() { return {
    "input": {},
    "visible": {},
    "color": {},
    "iconColor": {},
    "messageTitle": {},
    "bgColor": {}
  }; }
  static get methods() { return {
    "alteraInput": {
      "complexType": {
        "signature": "(ev: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "apagarValor": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get watchers() { return [{
      "propName": "input",
      "methodName": "mensagem"
    }]; }
}
