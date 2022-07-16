import { Host, h, Component, Element, Event, Listen, State, Prop } from '@stencil/core';
export class YduqsCardModulo {
  constructor() {
    this.progress = 100;
  }
  onChangeBar(ev) {
    // const progress = this.element.children[3];
    const progress = this.element.querySelector('yduqs-progress-bar');
    const value = ev.detail;
    const bar = ev.target;
    const idx = [].indexOf.call(progress.children, bar);
    this.onChange.emit(Object.assign({ idx }, value));
    this.completed = (value.val === 100) ? true : false;
    this.updateCardStatus();
  }
  updateCardStatus() {
    const button = this.element.children[2].children[0];
    if (this.completed) {
      button.className = 'c-button c-button--ghost u-text--small';
    }
    else {
      button.className = 'c-button c-button--primary u-text--small';
    }
  }
  render() {
    return (h(Host, { class: `c-card-modulo` },
      h("slot", null),
      h("div", { class: "c-card-modulo__progress" },
        h("yduqs-progress-bar", { value: this.progress, semirounded: true }))));
  }
  static get is() { return "yduqs-card-modulo"; }
  static get properties() { return {
    "progress": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "progress",
      "reflect": false,
      "defaultValue": "100"
    }
  }; }
  static get states() { return {
    "completed": {}
  }; }
  static get events() { return [{
      "method": "onChange",
      "name": "changed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
  static get listeners() { return [{
      "name": "changebar",
      "method": "onChangeBar",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
