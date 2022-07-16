import { h, Component, Element, Prop, State } from '@stencil/core';
export class YduqsAccordion {
  // @Event({ eventName: 'toggle' })
  // onToggle: EventEmitter;
  // @Listen('togglepane')
  // onTogglePane(ev) {
  //   const accordion = this.element.children[0];
  //   const open = ev.detail;
  //   const pane = ev.target;
  //   const idx = [].indexOf.call(accordion.children, pane);
  //   this.onToggle.emit({ idx, open });
  //   this._active = open;
  //   this.animate();
  // }
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
  static get elementRef() { return "element"; }
}
