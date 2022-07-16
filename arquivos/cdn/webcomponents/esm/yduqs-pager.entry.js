import { r as registerInstance, h, a as Host } from './index-6029b732.js';

const YduqsPager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hideCssClass = 'c-pager-hide';
    this.attrSelectorPage = 'data-page';
    this.attrSelectorModule = 'data-module';
    this.attrSelectorLabel = 'data-label';
    this.starterPageIndex = 1;
    this.moduleDictionary = {
      introducao: 'Introdução',
      atividade: 'Atividade',
      conclusao: 'Conclusão',
    };
    this.labelDictionary = {
      conceito: 'Conceito',
      atividade: 'Atividade',
      teexplico: 'Vem que eu te explico!',
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
  _getLabelModule(module, count) {
    return (h("div", { class: "c-pager-label-module" }, h("span", { class: "c-pager-label-module-text" }, module), Boolean(count === null || count === void 0 ? void 0 : count.length) && h("span", { class: "c-pager-label-module-count" }, count)));
  }
  _getLabel() {
    const pageElem = $(`[${this.attrSelectorPage}="${this.current}"]`);
    const moduleCount = pageElem.attr(this.attrSelectorModule);
    const label = pageElem.attr(this.attrSelectorLabel);
    let result;
    if (isNaN(Number(moduleCount))) {
      result = (h("div", { class: "c-pager-label-container" }, this._getLabelModule(this.moduleDictionary[moduleCount] || '')));
    }
    else {
      const config = this._getModulePagination(Number(moduleCount), this.current, label);
      if (pageElem.get(0).tagName === 'YDUQS-MODULE-COVER') { // POG para quando for a Capa do Módulo
        result = (h("div", { class: "c-pager-label-container" }, this._getLabelModule('Módulo', moduleCount)));
      }
      else {
        result = (h("div", { class: "c-pager-label-container" }, h("div", { class: "c-pager-label-page" }, h("span", { class: "c-pager-label-page-text" }, this.labelDictionary[label] || this.labelDictionary['conceito']), h("span", { class: "c-pager-label-page-count" }, h("strong", null, config.atual), " / ", h("strong", null, config.total))), h("div", { class: "c-pager-label-separator" }, "|"), this._getLabelModule('Módulo', moduleCount)));
      }
    }
    return result;
  }
  _goToPage() {
    // Scrolla para o inicio da página
    window.scrollTo(0, 0);
    // reseta o Hash da url
    this._resetHash();
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
  /**
   * Retorna a pagina onde está o elemento informado
   * @param elem jQuery Element
   */
  _getPageFromElement(selector) {
    var _a, _b, _c, _d;
    const elem = (selector === null || selector === void 0 ? void 0 : selector.length) > 1 && $(selector);
    let pos;
    if (elem.attr(this.attrSelectorPage)) {
      pos = elem.attr(this.attrSelectorPage);
    }
    else if (((_a = elem.children(`[${this.attrSelectorPage}]`)) === null || _a === void 0 ? void 0 : _a.length) > 0 && elem.children(`[${this.attrSelectorPage}]`).eq(0)) {
      pos = (_c = (_b = elem.children(`[${this.attrSelectorPage}]`)) === null || _b === void 0 ? void 0 : _b.eq(0)) === null || _c === void 0 ? void 0 : _c.attr(this.attrSelectorPage);
    }
    else if (elem.closest(`[${this.attrSelectorPage}]`)) {
      pos = (_d = elem.closest(`[${this.attrSelectorPage}]`)) === null || _d === void 0 ? void 0 : _d.attr(this.attrSelectorPage);
    }
    return pos;
  }
  /**
   * Reseta o hash, se houver necessidade
   */
  _resetHash() {
    const hash = window.location.hash;
    if ((hash === null || hash === void 0 ? void 0 : hash.length) > 1) {
      const page = this._getPageFromElement(hash);
      const atual = this._getCurrentPage();
      if (Number(page) !== atual) {
        window.location.hash = '';
      }
    }
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
      var _a;
      const hash = ((_a = window.location.hash) === null || _a === void 0 ? void 0 : _a.length) > 1 ? window.location.hash : false;
      if (hash) {
        let pos = this._getPageFromElement(hash);
        if (pos) {
          this._setCurrentPage(parseInt(pos));
        }
      }
    });
    this._init();
  }
  render() {
    return (h(Host, null, h("div", { class: `c-pager ${this.total <= 1 ? 'c-pager-none' : ''}`, id: "btnPaginator" }, h("button", { "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'paginacao:conteudo-clique-botao', "data-gtm-event-label": 'voltar', disabled: true, type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-prev", ref: el => (this.btnPrev = el), onClick: () => this._goToPrev() }, h("span", { class: "c-button__icon material-icons" }, "arrow_back")), this._getLabel(), h("button", { "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'paginacao:conteudo-clique-botao', "data-gtm-event-label": 'avancar', type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-next", ref: el => (this.btnNext = el), onClick: () => this._goToNext() }, h("span", { class: "c-button__icon material-icons" }, "arrow_forward")))));
  }
  static get watchers() { return {
    "current": ["_goToPage"]
  }; }
};

export { YduqsPager as yduqs_pager };
