import { Host, h, Component, Element, Event, Listen } from '@stencil/core';
export class YduqsCardSelecionavel {
  onSelectItem(ev) {
    const cardSelecionavel = this.element.children[0];
    const clicked = ev.detail;
    const item = ev.target;
    const idx = [].indexOf.call(cardSelecionavel.children, item);
    this.onSelect.emit({ idx, clicked });
  }
  render() {
    return (h(Host, { class: `c-card-selecionavel` },
      h("slot", null)));
  }
  static get is() { return "yduqs-card-selecionavel"; }
  static get events() { return [{
      "method": "onSelect",
      "name": "selected",
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
      "name": "onselect",
      "method": "onSelectItem",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
