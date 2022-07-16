import { h, Component, Element, Event, Listen, Prop } from '@stencil/core';
export class Progress {
  onChangeBar(ev) {
    const progress = this.element.children[0];
    const value = ev.detail;
    const bar = ev.target;
    const idx = [].indexOf.call(progress.children, bar);
    this.onChange.emit(Object.assign({ idx }, value));
  }
  render() {
    const roundedClass = this.rounded ? `c-progress--rounded` : '';
    const semiroundedClass = this.semirounded ? `c-progress--semirounded` : '';
    return (h("div", { class: `c-progress ${roundedClass} ${semiroundedClass}` },
      h("slot", null)));
  }
  static get is() { return "yduqs-progress"; }
  static get properties() { return {
    "rounded": {
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
        "text": ""
      },
      "attribute": "rounded",
      "reflect": false
    },
    "semirounded": {
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
        "text": ""
      },
      "attribute": "semirounded",
      "reflect": false
    }
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
