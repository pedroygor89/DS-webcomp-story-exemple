import { h, Component, Element, Event, Listen, Prop, State } from '@stencil/core';
export class YduqsAccordion {
  constructor() {
    this._isFirstRender = true;
  }
  onTogglePane(ev) {
    const accordion = this.element.children[0];
    const open = ev.detail;
    const pane = ev.target;
    const idx = [].indexOf.call(accordion.children, pane);
    this.onToggle.emit({ idx, open });
    this._active = open;
    this.animate();
  }
  componentDidRender() {
    if (this.content && this.content.offsetHeight && this._isFirstRender) {
      this._contentMaxHeight = `${this.content.offsetHeight.toString()}px`;
      this._isFirstRender = false;
      const itemPane = this.content.children[0];
      itemPane.close();
    }
  }
  animate() {
    this.content.style.maxHeight = `${this._contentMaxHeight}px`;
  }
  render() {
    const outlineClass = this.outline ? 'c-accordion--outline' : '';
    const activeClass = this._active ? 'c-accordion--active' : '';
    return (h("div", { ref: (el) => (this.content = el), class: `c-accordion c-accordion--collapse ${outlineClass} ${activeClass}` },
      h("slot", null)));
  }
  static get is() { return "yduqs-accordion"; }
  static get properties() { return {
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
      "reflect": false
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
