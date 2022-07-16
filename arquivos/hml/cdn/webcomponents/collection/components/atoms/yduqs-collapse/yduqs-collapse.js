import { Component, h, Listen, Element, Event, Prop, State } from '@stencil/core';
export class YduqsCollapse {
  constructor() {
    this.border = false;
    this.outline = false;
  }
  onTogglePane(ev) {
    const collapse = this.element.children[0];
    const open = ev.detail;
    const pane = ev.target;
    const idx = [].indexOf.call(collapse.children, pane);
    this.onToggle.emit({ idx, open });
    this._active = open;
    this.animate();
  }
  componentDidRender() {
    if (this.content && this.content.offsetHeight) {
      this._contentMaxHeight = `${this.content.offsetHeight.toString()}px`;
    }
  }
  animate() {
    this.content.style.maxHeight = `${this._contentMaxHeight}px`;
  }
  render() {
    const activeClass = this._active ? 'c-collapse--active' : '';
    return (h("div", { ref: el => (this.content = el), class: `c-collapse ${activeClass}` },
      h("slot", null)));
  }
  static get is() { return "yduqs-collapse"; }
  static get properties() { return {
    "border": {
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
      "attribute": "border",
      "reflect": false,
      "defaultValue": "false"
    },
    "outline": {
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
      "attribute": "outline",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "_active": {}
  }; }
  static get events() { return [{
      "method": "onToggle",
      "name": "toggle",
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
      "name": "togglepane",
      "method": "onTogglePane",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
