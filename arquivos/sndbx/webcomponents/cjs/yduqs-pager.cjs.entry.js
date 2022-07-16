'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1862d779.js');

let YduqsPager = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hideCssClass = 'c-pager-hide';
    this.attrSelectorPage = 'data-page';
    this.attrSelectorModule = 'data-module';
    this.attrSelectorLabel = 'data-label';
    this.starterPageIndex = 1;
    this.moduleDictionary = {
      apresentacao: 'Apresentação',
      atividade: 'Atividade',
      conclusao: 'Conclusão',
    };
    this.labelDictionary = {
      conceito: 'Conceito',
      atividade: 'Atividade',
    };
    this.total = 0;
    this.current = 0;
  }
  _getModulePagination(module, page, label) {
    let indexes = [];
    const hasLabel = Boolean(label === null || label === void 0 ? void 0 : label.length);
    const selector = hasLabel ?
      `[${this.attrSelectorModule}="${module}"][${this.attrSelectorLabel}="${label}"]` :
      `[${this.attrSelectorModule}="${module}"]:not([${this.attrSelectorLabel}])`;
    const elements = document.querySelectorAll(selector);
    elements === null || elements === void 0 ? void 0 : elements.forEach(elem => {
      const elemPage = elem.getAttribute(this.attrSelectorPage);
      if (!indexes.includes(elemPage)) {
        indexes.push(Number(elemPage));
      }
    });
    indexes.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    // A capa dos modulos é page=0 e não deve ser considerada no total de Páginas.
    return {
      total: indexes.length - (hasLabel ? 0 : 1),
      atual: indexes.findIndex(item => item === page) + (hasLabel ? 1 : 0),
    };
  }
  _getLabel() {
    const pageElem = $(`[${this.attrSelectorPage}="${this.current}"]`);
    const module = pageElem.attr(this.attrSelectorModule);
    const label = pageElem.attr(this.attrSelectorLabel);
    let result;
    if (isNaN(Number(module))) {
      result = this.moduleDictionary[module] || '';
    }
    else {
      const config = this._getModulePagination(Number(module), this.current, label);
      if (pageElem.get(0).tagName === 'YDUQS-MODULE-COVER') { // POG para quando for a Capa do Módulo
        result = (index.h("div", null, "M\u00F3dulo ", index.h("span", null, module)));
      }
      else {
        result = (index.h("div", null, this.labelDictionary[label] || this.labelDictionary['conceito'], ` `, index.h("strong", null, config.atual), " / ", index.h("strong", null, config.total), " | M\u00F3dulo ", index.h("span", null, module)));
      }
    }
    return result;
  }
  _goToPage() {
    // Scrolla para o inicio da página
    window.scrollTo(0, 0);
    // Esconde as páginas
    $(`[${this.attrSelectorPage}]`).addClass(this.hideCssClass);
    // Mostra a página atual
    $(`[${this.attrSelectorPage}="${this._getCurrentPage()}"]`).removeClass(this.hideCssClass);
    // Valida Btn Prev
    if (this._getCurrentPage() <= this.starterPageIndex) {
      this.btnPrev.disabled = true;
    }
    else {
      this.btnPrev.removeAttribute('disabled');
    }
    // Valida Btn Next
    if (this._getCurrentPage() >= this.total) {
      this.btnNext.disabled = true;
    }
    else {
      this.btnNext.removeAttribute('disabled');
    }
  }
  _setCurrentPage(value) {
    this.current = value < this.starterPageIndex ? this.starterPageIndex : value > this.total ? this.total : value;
  }
  _getCurrentPage() {
    return this.current;
  }
  _init() {
    const elements = document.querySelectorAll(`[${this.attrSelectorPage}]`);
    let total = 0;
    elements === null || elements === void 0 ? void 0 : elements.forEach(page => {
      const pageNum = Number(page.getAttribute(this.attrSelectorPage));
      total = total < pageNum ? pageNum : total;
    });
    this.total = total;
    this._setCurrentPage(this.starterPageIndex);
  }
  /**
   * Vai para a página anterior
   */
  _goToPrev() {
    this._setCurrentPage(this._getCurrentPage() - 1);
  }
  /**
   * Vai para a próxima página
   */
  _goToNext() {
    this._setCurrentPage(this._getCurrentPage() + 1);
  }
  clickMenuTitleHandler(event) {
    var _a;
    const element = event.detail;
    this._setCurrentPage(parseInt((_a = element.closest(`[${this.attrSelectorPage}]`)) === null || _a === void 0 ? void 0 : _a.getAttribute(this.attrSelectorPage)));
  }
  componentDidLoad() {
    /**
     * Evento disparado pela busca, antes de direcionar para um dos resultados
     */
    window.addEventListener('yduqs-search-before-navigate', event => {
      var _a;
      this._setCurrentPage(Number(((_a = event.detail) === null || _a === void 0 ? void 0 : _a.page) || this.starterPageIndex));
    });
    /**
     * Evento disparado na mudança do Hash da url
     * Esse recurso foi utilizado em vários temas como ancoragem para pontos do conteudo
     */
    window.addEventListener('hashchange', () => {
      var _a, _b, _c, _d;
      const elem = $(window.location.hash);
      if (elem) {
        let pos;
        if (elem.attr(this.attrSelectorPage)) {
          pos = elem.attr(this.attrSelectorPage);
        }
        else if ((_a = elem.children(`[${this.attrSelectorPage}]`)) === null || _a === void 0 ? void 0 : _a.eq(0)) {
          pos = (_c = (_b = elem.children(`[${this.attrSelectorPage}]`)) === null || _b === void 0 ? void 0 : _b.eq(0)) === null || _c === void 0 ? void 0 : _c.attr(this.attrSelectorPage);
        }
        else if (elem.closest(`[${this.attrSelectorPage}]`)) {
          pos = (_d = elem.closest(`[${this.attrSelectorPage}]`)) === null || _d === void 0 ? void 0 : _d.attr(this.attrSelectorPage);
        }
        if (pos) {
          this._setCurrentPage(parseInt(pos));
        }
      }
    });
    this._init();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "c-pager", id: "btnPaginator" }, index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-prev", ref: el => (this.btnPrev = el), onClick: () => this._goToPrev() }, index.h("span", { class: "c-button__icon material-icons" }, "arrow_back")), index.h("div", null, this._getLabel()), index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-next", ref: el => (this.btnNext = el), onClick: () => this._goToNext() }, index.h("span", { class: "c-button__icon material-icons" }, "arrow_forward")))));
  }
  static get watchers() { return {
    "current": ["_goToPage"]
  }; }
};

exports.yduqs_pager = YduqsPager;
