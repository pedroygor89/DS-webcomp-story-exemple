import { r as registerInstance, h, a as Host } from './index-b21d89aa.js';

const YduqsQuoteImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.template_doktor = false;
  }
  componentWillLoad() {
    let isDoktor = document.body.classList.contains('template-doktor');
    if (isDoktor) {
      this.template_doktor = true;
    }
  }
  render() {
    return (h(Host, { class: `c-quote__image ${this.template_doktor && 'hideImg'}`, style: { 'background-image': `url(${this.path})` } }, h("slot", null)));
  }
};

export { YduqsQuoteImage as yduqs_quote_image };
