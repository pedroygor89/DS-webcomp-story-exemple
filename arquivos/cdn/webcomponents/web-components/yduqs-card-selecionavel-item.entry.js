import { r as registerInstance, i as createEvent, h, e as Host } from './index-5acc1e77.js';

const YduqsCardSelecionavelItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onSelectItem = createEvent(this, "onselect", 7);
    this._isSelected = false;
    this.selected = false;
    this.optionid = '';
    this.disabled = false;
  }
  componentWillLoad() {
    this._isSelected = this.selected;
  }
  async selectItem() {
    this._isSelected = true;
  }
  async unselectItem() {
    this._isSelected = false;
  }
  select() {
    this._isSelected ? this.unselectItem() : this.selectItem();
    this.onSelectItem.emit({ optionId: this.optionid, isSelected: this._isSelected });
  }
  async isSelected() {
    return this._isSelected;
  }
  render() {
    const isSelectedClass = this._isSelected ? 'c-card-selecionavel__control--active' : '';
    const opId = `card-selecionavel-${this.optionid}`;
    return (h(Host, { class: "c-card-selecionavel__item", id: `${opId}` }, h("button", { disabled: this.disabled, role: "heading", class: `c-card-selecionavel__control ${isSelectedClass}`, onClick: () => this.select() }, h("span", { class: "c-card-selecionavel__label" }, this.optionid), h("div", { class: "c-card-selecionavel__content" }, h("slot", null), h("div", { class: "c-card-selecionavel__icon-container" }, h("span", { class: `c-card-selecionavel__icon material-icons` }, this._isSelected ? 'done' : ''))))));
  }
};

export { YduqsCardSelecionavelItem as yduqs_card_selecionavel_item };
