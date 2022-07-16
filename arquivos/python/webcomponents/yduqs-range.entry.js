import { r as registerInstance, h } from './index-6ca065bd.js';

const YduqsRange = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("yduqs-card", { dark: true, small: true, class: "c-range" }, h("div", { class: "c-range-controls" }, h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small", disabled: this.value <= this.min, onClick: () => this.decreaseValue() }, h("span", { class: "c-button__icon material-icons" }, "remove")), h("div", { class: "c-range-input" }, h("input", { type: "range", id: this.name, name: this.name, class: "c-range-input", min: this.min, max: this.max, step: this.step, value: this.value, onChange: event => this.updateValue(parseInt(event.target.value)), ref: el => (this.elemRange = el) })), h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small", disabled: this.value >= this.max, onClick: () => this.increaseValue() }, h("span", { class: "c-button__icon material-icons" }, "add")))));
  }
};

export { YduqsRange as yduqs_range };
