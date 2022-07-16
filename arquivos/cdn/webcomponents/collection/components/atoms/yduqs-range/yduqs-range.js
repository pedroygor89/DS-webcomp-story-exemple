import { Component, Prop, h } from '@stencil/core';
export class YduqsRange {
  constructor() {
    this.value = 0;
    this.max = 10;
    this.min = -10;
    this.step = 1;
  }
  updateValue(val) {
    this.value = val;
    this.output && this.output(this.value);
  }
  increaseValue() {
    this.updateValue(this.value + this.step > this.max ? this.max : this.value + this.step);
  }
  decreaseValue() {
    this.updateValue(this.value - this.step < this.min ? this.min : this.value - this.step);
  }
  render() {
    return (h("yduqs-card", { dark: true, small: true, class: "c-range" },
      h("div", { class: "c-range-controls" },
        h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small", disabled: this.value <= this.min, onClick: () => this.decreaseValue() },
          h("span", { class: "c-button__icon material-icons" }, "remove")),
        h("div", { class: "c-range-input" },
          h("input", { type: "range", id: this.name, name: this.name, class: "c-range-input", min: this.min, max: this.max, step: this.step, value: this.value, onChange: event => this.updateValue(parseInt(event.target.value)), ref: el => (this.elemRange = el) })),
        h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small", disabled: this.value >= this.max, onClick: () => this.increaseValue() },
          h("span", { class: "c-button__icon material-icons" }, "add")))));
  }
  static get is() { return "yduqs-range"; }
  static get properties() { return {
    "value": {
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
      "attribute": "value",
      "reflect": false,
      "defaultValue": "0"
    },
    "max": {
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
      "attribute": "max",
      "reflect": false,
      "defaultValue": "10"
    },
    "min": {
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
      "attribute": "min",
      "reflect": false,
      "defaultValue": "-10"
    },
    "step": {
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
      "attribute": "step",
      "reflect": false,
      "defaultValue": "1"
    },
    "name": {
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
      "attribute": "name",
      "reflect": false
    },
    "output": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(value: number) => void",
        "resolved": "(value: number) => void",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
}
