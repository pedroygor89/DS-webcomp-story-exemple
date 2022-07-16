import { r as registerInstance, h, a as Host } from './index-b21d89aa.js';

const YduqsCardIntro = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = '';
  }
  render() {
    return (h(Host, { class: `c-card-intro` }, h("div", { class: "c-card-intro__title-container" }, h("h3", { class: "c-heading u-title-small" }, this.text)), h("div", { class: `c-card-intro__container c-card-intro--outline` }, h("div", { class: 'row align-items-center justify-content-center' }, h("div", { class: 'col-12 col-md-10 col-lg-8' }, h("slot", null))))));
  }
};

export { YduqsCardIntro as yduqs_card_intro };
