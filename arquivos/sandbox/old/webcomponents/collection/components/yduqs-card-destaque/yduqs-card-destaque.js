import { Host, h, Component, Prop } from '@stencil/core';
export class YduqsCardDestaque {
  constructor() {
    this.grade = 1;
    this.outline = false;
    this.icon = '';
  }
  render() {
    const gradeClass = `c-card-destaque--grade-${this.grade}`;
    const gradeIconClass = `c-card-destaque--grade-icon-${this.grade}`;
    const outlineClass = this.outline ? 'c-card-destaque--outline' : '';
    return (h(Host, { class: `c-card-destaque ${gradeIconClass}` },
      h("div", { class: "c-card-destaque__icon-container" },
        h("span", { class: "c-card-destaque__icon material-icons" }, this.icon)),
      h("div", { class: `c-card-destaque__container ${gradeClass} ${outlineClass}` },
        h("slot", null))));
  }
  static get is() { return "yduqs-card-destaque"; }
  static get properties() { return {
    "grade": {
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
      "attribute": "grade",
      "reflect": false,
      "defaultValue": "1"
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
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
}
