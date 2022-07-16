import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-6ca065bd.js';

const YduqsCardSelecionavel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onSelect = createEvent(this, "selected", 7);
  }
  onSelectItem(ev) {
    const cardSelecionavel = this.element.children[0];
    const clicked = ev.detail;
    const item = ev.target;
    const idx = [].indexOf.call(cardSelecionavel.children, item);
    this.onSelect.emit({ idx, clicked });
  }
  render() {
    return (h(Host, { class: `c-card-selecionavel` }, h("slot", null)));
  }
  get element() { return getElement(this); }
};

export { YduqsCardSelecionavel as yduqs_card_selecionavel };
