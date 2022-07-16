'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsQuote = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dark = false;
    this.size = '';
    this.template_doktor = false;
  }
  componentWillLoad() {
    if (this.size)
      this._getQuoteSize();
    let isDoktor = document.body.classList.contains('template-doktor');
    if (isDoktor) {
      this.template_doktor = true;
    }
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
    return (index.h("blockquote", { class: `c-quote ${darkMode} ${quoteSize} ${this.template_doktor && 'heigthQuote c-background'}` }, index.h("slot", null)));
  }
};

exports.yduqs_quote = YduqsQuote;
