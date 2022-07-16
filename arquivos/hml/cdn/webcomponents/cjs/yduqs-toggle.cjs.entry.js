'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.myToggleEmit = index.createEvent(this, "myToggleEmit", 7);
    this.teste = 'teseeee';
    this.isOpen = false;
    this.isDisable = false;
    this.handleClick = () => {
      this.isOpen = !this.isOpen;
      this.myToggleEmit.emit(this.isOpen);
    };
  }
  componentDidLoad() {
    this.isOpen = this.open;
    this.isDisable = this.disable;
  }
  render() {
    return [
      index.h("div", { class: "c-toggle" }, index.h("label", { class: "switch" }, index.h("input", { id: "tog", type: "checkbox", checked: this.isOpen, disabled: this.isDisable, onClick: this.handleClick }), index.h("span", { class: "slider round" })))
    ];
  }
};

exports.yduqs_toggle = YduqsToggle;
