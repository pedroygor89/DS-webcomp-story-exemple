'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let DestaqueTexto = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.size = 'medium';
  }
  componentWillLoad() {
    this._getTextSize();
  }
  _getTextSize() {
    if (this.size === 'small')
      return 'small';
    if (this.size === 'medium')
      return 'medium';
    return 'big';
  }
  render() {
    return (index.h("div", { class: "c-texto-destaque" }, index.h("div", { class: "c-texto-destaque__border" }), index.h("div", { class: `c-texto-destaque__content c-texto-destaque__content--${this._getTextSize()}` }, index.h("slot", null))));
  }
};

exports.yduqs_destaque_texto = DestaqueTexto;
