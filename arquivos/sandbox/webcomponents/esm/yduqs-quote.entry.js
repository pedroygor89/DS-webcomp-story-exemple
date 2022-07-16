import { r as registerInstance, h } from './index-c3ccce17.js';

let YduqsQuote = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dark = false;
    this.size = '';
  }
  componentWillLoad() {
    if (this.size)
      this._getQuoteSize();
  }
  _getQuoteSize() {
    if (this.size === 'small')
      return 'small';
    if (this.size === 'medium')
      return 'medium';
    return 'big';
  }
  render() {
    const darkMode = this.dark ? 'c-quote--dark' : '';
    const quoteSize = `c-quote--${this._getQuoteSize()}`;
    return (h("blockquote", { class: `c-quote ${darkMode} ${quoteSize}` }, h("slot", null)));
  }
};

export { YduqsQuote as yduqs_quote };
