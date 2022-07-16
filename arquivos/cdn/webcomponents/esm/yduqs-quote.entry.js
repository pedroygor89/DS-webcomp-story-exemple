import { r as registerInstance, h } from './index-b21d89aa.js';

const YduqsQuote = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("blockquote", { class: `c-quote ${darkMode} ${quoteSize} ${this.template_doktor && 'heigthQuote c-background'}` }, h("slot", null)));
  }
};

export { YduqsQuote as yduqs_quote };
