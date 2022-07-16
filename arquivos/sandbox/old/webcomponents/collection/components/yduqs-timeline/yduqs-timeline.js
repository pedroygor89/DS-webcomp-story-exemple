import { h, Component, Prop } from '@stencil/core';
export class Timeline {
  render() {
    const typeClass = this.horizontal ? `o-timeline--horizontal` : '';
    const isdarkmode = this.dark ? `o-timeline--dark` : '';
    return (h("ol", { class: `o-timeline ${typeClass} ${isdarkmode}` },
      h("slot", null)));
  }
  static get is() { return "yduqs-timeline"; }
  static get properties() { return {
    "horizontal": {
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
      "attribute": "horizontal",
      "reflect": false
    },
    "dark": {
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
      "attribute": "dark",
      "reflect": false
    }
  }; }
}
