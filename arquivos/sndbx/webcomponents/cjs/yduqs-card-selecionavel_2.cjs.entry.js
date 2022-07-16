'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCardSelecionavel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onSelect = index.createEvent(this, "selected", 7);
  }
  onSelectItem(ev) {
    const cardSelecionavel = this.element.children[0];
    const clicked = ev.detail;
    const item = ev.target;
    const idx = [].indexOf.call(cardSelecionavel.children, item);
    this.onSelect.emit({ idx, clicked });
  }
  render() {
    return (index.h(index.Host, { class: `c-card-selecionavel` }, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
};

const YduqsCardSelecionavelItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onSelectItem = index.createEvent(this, "onselect", 7);
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
    return (index.h(index.Host, { class: "c-card-selecionavel__item", id: `${opId}` }, index.h("button", { disabled: this.disabled, role: "heading", class: `c-card-selecionavel__control ${isSelectedClass}`, onClick: () => this.select() }, index.h("span", { class: "c-card-selecionavel__label" }, this.optionid), index.h("div", { class: "c-card-selecionavel__content" }, index.h("slot", null), index.h("div", { class: "c-card-selecionavel__icon-container" }, index.h("span", { class: `c-card-selecionavel__icon material-icons` }, this._isSelected ? 'done' : ''))))));
  }
};

exports.yduqs_card_selecionavel = YduqsCardSelecionavel;
exports.yduqs_card_selecionavel_item = YduqsCardSelecionavelItem;
