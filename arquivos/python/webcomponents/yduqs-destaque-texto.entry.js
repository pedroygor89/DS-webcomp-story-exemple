import { r as registerInstance, h } from './index-6ca065bd.js';

const DestaqueTexto = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "c-texto-destaque" }, h("div", { class: "c-texto-destaque__border" }), h("div", { class: `c-texto-destaque__content c-texto-destaque__content--${this._getTextSize()}` }, h("slot", null))));
  }
};

export { DestaqueTexto as yduqs_destaque_texto };
