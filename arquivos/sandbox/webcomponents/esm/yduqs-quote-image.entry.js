import { r as registerInstance, h, a as Host } from './index-c3ccce17.js';

let YduqsQuoteImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "c-quote__image", style: { 'background-image': `url(${this.path})` } }, h("slot", null)));
  }
};

export { YduqsQuoteImage as yduqs_quote_image };
