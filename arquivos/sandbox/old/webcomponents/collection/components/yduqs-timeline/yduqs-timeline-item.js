import { h, Component, Prop } from '@stencil/core';
export class TimelineItem {
  render() {
    const lastClass = this.last ? `c-timeline-item--last` : '';
    return (h("li", { class: `c-timeline-item ${lastClass}` },
      h("div", { class: "c-timeline-item__icon-container" },
        h("span", { class: "c-timeline-item__icon material-icons" }, this.icon)),
      h("div", { class: "c-timeline-item__body" },
        h("slot", null))));
  }
  static get is() { return "yduqs-timeline-item"; }
  static get properties() { return {
    "last": {
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
      "attribute": "last",
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
        "text": ""
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
}
