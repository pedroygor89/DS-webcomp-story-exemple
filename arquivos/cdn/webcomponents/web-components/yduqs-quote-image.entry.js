import { r as registerInstance, h, e as Host } from './index-5acc1e77.js';

const YduqsQuoteImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "c-quote__image", style: { 'background-image': `url(${this.path})` } }, h("slot", null)));
  }
};

export { YduqsQuoteImage as yduqs_quote_image };
