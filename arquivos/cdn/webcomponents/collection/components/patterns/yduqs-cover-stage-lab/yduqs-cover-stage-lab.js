import { h, Host, Component, Prop, State, Event } from '@stencil/core';
export class YduqsCoverStageLab {
  constructor() {
    this.parsedActions = [];
  }
  componentWillLoad() {
    const ac = [];
    this.actions.split(';').forEach(item => {
      const it = item.split(':');
      ac.push({ label: it[1], action: it[0] });
    });
    this.parsedActions = ac;
  }
  handleBtnClick(action) {
    this.btnClick.emit({ phase: this.phaseNumber, action });
  }
  render() {
    var _a;
    return (h(Host, { class: "c-cover-stage", ref: ref => this.hostElem = ref, style: this.background ? { backgroundImage: `url('${this.background}')` } : {} },
      h("div", { class: "c-cover-stage-aside" }),
      h("span", { class: `c-cover-stage-phase ${String(this.phaseNumber).length > 1 ? 'a-left' : ''}` }, this.phaseNumber),
      h("div", { class: "c-cover-stage-content" },
        h("h6", { class: "c-cover-stage-content-overtitle" }, this.overtitle || `Fase ${this.phaseNumber}`),
        h("h3", { class: "c-cover-stage-content-title" }, this._title),
        h("p", { class: "c-cover-stage-content-desc" }, this.description),
        h("div", { class: "c-cover-stage-content-btn" }, (_a = this.parsedActions) === null || _a === void 0 ? void 0 : _a.map(item => (h("button", { type: "button", class: "c-button", style: { marginRight: '10px' }, onClick: () => this.handleBtnClick(item.action) }, item.label)))))));
  }
  static get is() { return "yduqs-cover-stage-lab"; }
  static get properties() { return {
    "background": {
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
        "text": "Imagem de Fundo da Capa"
      },
      "attribute": "background",
      "reflect": false
    },
    "phaseNumber": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Numero da Fase"
      },
      "attribute": "phase-number",
      "reflect": false
    },
    "overtitle": {
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
        "text": "Que aparece Sobre o Titulo. Se omitido, ser\u00E1 mostrado o texto 'Fase %phaseNumber%'"
      },
      "attribute": "overtitle",
      "reflect": false
    },
    "_title": {
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
        "text": "Texto de T\u00EDtulo da Capa"
      },
      "attribute": "title",
      "reflect": false
    },
    "description": {
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
        "text": "Texto de Descr\u00ED\u00E7\u00E3o"
      },
      "attribute": "description",
      "reflect": false
    },
    "actions": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Lista de a\u00E7\u00F5es (bot\u00F5es) vis\u00EDveis na Capa"
      },
      "attribute": "actions",
      "reflect": false
    }
  }; }
  static get states() { return {
    "parsedActions": {}
  }; }
  static get events() { return [{
      "method": "btnClick",
      "name": "btnClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento disparado no click dos bot\u00F5es de A\u00E7\u00E3o"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
