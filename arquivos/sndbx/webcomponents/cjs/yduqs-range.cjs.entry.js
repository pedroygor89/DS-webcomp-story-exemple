'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsRange = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("yduqs-card", { dark: true, small: true, class: "c-range" }, index.h("div", { class: "c-range-controls" }, index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small", disabled: this.value <= this.min, onClick: () => this.decreaseValue() }, index.h("span", { class: "c-button__icon material-icons" }, "remove")), index.h("div", { class: "c-range-input" }, index.h("input", { type: "range", id: this.name, name: this.name, class: "c-range-input", min: this.min, max: this.max, step: this.step, value: this.value, onChange: event => this.updateValue(parseInt(event.target.value)), ref: el => (this.elemRange = el) })), index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small", disabled: this.value >= this.max, onClick: () => this.increaseValue() }, index.h("span", { class: "c-button__icon material-icons" }, "add")))));
  }
};

exports.yduqs_range = YduqsRange;
