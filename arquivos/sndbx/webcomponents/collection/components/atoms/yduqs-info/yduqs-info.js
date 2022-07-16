import { Component, Host, h, Prop, Event, Watch } from '@stencil/core';
import { generateSvgFromBase64Data } from '../../../utils/utils';
export class YduqsInfo {
  constructor() {
    /**
     * Mostra/esconde o componente
     */
    this.open = false;
    /**
     * Informa se o ícone é Material Design ou Base64
     */
    this.usematerial = true;
    /**
     * Tempo em milessegundos que a mensagem permanece visível
     */
    this.delay = 10000;
  }
  handleClose() {
    if (this.open) {
      window.setTimeout(() => {
        this.infoClosed.emit(true);
      }, this.delay);
    }
  }
  handleClick() {
    this.infoClosed.emit(true);
  }
  getWidth() {
    return { width: `${this.open ? 100 : 0}%`, transition: `width ${this.delay / 1000}s linear` };
  }
  render() {
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' },
      h("div", { class: "c-info-container" },
        h("button", { class: "c-info-button", onClick: () => this.handleClick() },
          h("span", { class: "material-icons" }, "close")),
        h("header", { class: "c-info-header" },
          this.usematerial ? h("span", { class: "c-info-icon material-icons" }, this.icon) : h("span", { class: "c-info-icon", innerHTML: generateSvgFromBase64Data(this.icon) }),
          h("h2", { class: "c-info-title" }, this._title)),
        h("div", { class: "c-info-content" },
          Boolean(this.subtitle) && h("span", { class: "c-info-subtitle" }, this.subtitle),
          h("span", { class: "c-info-message" }, this.message)),
        h("footer", { class: "c-info-footer" },
          h("div", { class: "c-info-timer", style: this.getWidth() })))));
  }
  static get is() { return "yduqs-info"; }
  static get properties() { return {
    "open": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Mostra/esconde o componente"
      },
      "attribute": "open",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "T\u00EDtulo da mensagem"
      },
      "attribute": "title",
      "reflect": false
    },
    "subtitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Subt\u00EDtulo da mensagem"
      },
      "attribute": "subtitle",
      "reflect": false
    },
    "message": {
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
        "text": "Texto da mensagem"
      },
      "attribute": "message",
      "reflect": false
    },
    "icon": {
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
        "text": "Identificador do \u00EDcone ou base64 do SVG"
      },
      "attribute": "icon",
      "reflect": false
    },
    "usematerial": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Informa se o \u00EDcone \u00E9 Material Design ou Base64"
      },
      "attribute": "usematerial",
      "reflect": false,
      "defaultValue": "true"
    },
    "delay": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Tempo em milessegundos que a mensagem permanece vis\u00EDvel"
      },
      "attribute": "delay",
      "reflect": false,
      "defaultValue": "10000"
    }
  }; }
  static get events() { return [{
      "method": "infoClosed",
      "name": "infoClosed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento disparado no onClick do icone de fechar ou quando o tempo vis\u00EDvel termina"
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "open",
      "methodName": "handleClose"
    }]; }
}
