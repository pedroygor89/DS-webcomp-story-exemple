import { r as registerInstance, h, e as Host } from './index-5acc1e77.js';

const YduqsCardComparativo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dark = false;
    this.outline = false;
    this.icon = '';
    this.rotate_mobile = false;
  }
  render() {
    const colorMode = this.dark ? 'c-card-comparativo--dark' : '';
    const outlineClass = this.outline ? 'c-card-destaque--outline' : '';
    const rotate = this.rotate_mobile ? 'rotate' : '';
    return (h(Host, { class: `c-card-comparativo ${colorMode} ${outlineClass}` }, h("slot", { name: "item-a" }), h("div", { class: "c-card-comparativo__divider" }, h("div", { class: "c-card-comparativo__bar" }), h("div", { class: "c-card-comparativo__icon-container" }, h("span", { class: `c-card-comparativo__icon ${rotate} material-icons` }, this.icon ? this.icon : 'close'))), h("slot", { name: "item-b" })));
  }
};

export { YduqsCardComparativo as yduqs_card_comparativo };
