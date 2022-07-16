import { r as registerInstance, h, a as Host } from './index-c1d8c1d5.js';

/**
 * Dispara um evento personalizado na janela
 * @param {string} label Nome do evento
 * @param {any} params Parametros enviados ao Evento
 */
const dispatchEvent = (label, params) => {
  window.dispatchEvent(new CustomEvent(label, params ? { detail: params } : null));
};
/**
 * Retorna o título do Módulo seguindo as regras da paginação
 */
const moduleTitleDictionary = {
  apresentacao: 'Apresentação',
  atividade: 'Atividade',
  conclusao: 'Conclusão',
};

const ignoredNodeList = ['#comment', '#text', 'SCRIPT', 'STYLE', 'IFRAME', 'HR', 'svg', 'path', 'g', 'math', 'mi', 'mo', 'mrow', 'mfrac', 'msqrt', 'msup', 'mn'];
let YduqsSearchBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.open = false;
    this.term = '';
    this.hasSearch = false;
    this.actualFoundItemPosition = -1;
    this.cacheDbId = 'data-cache-id';
    this.termFoundClass = 'c-search-found-item';
    this.termFoundResultClass = 'c-search-found-result-item';
  }
  reset() {
    var _a, _b;
    if (!((_a = this.term) === null || _a === void 0 ? void 0 : _a.length)) {
      this.hasSearch = false;
      this.clearResults();
    }
    else if (((_b = this.term) === null || _b === void 0 ? void 0 : _b.length) > 2) {
      this.handleSubmit({});
    }
  }
  /** UTILS */
  /**
   * Remove os duplos espaços em branco e quebra de linha
   * @param str
   * @returns
   */
  removeDoubleSpacesAndBreaks(str) {
    if (!str)
      return str;
    let result = str;
    result = result.replace(/[\n]/giu, ' ');
    result = result.replace(/[\r]/giu, ' ');
    result = result.replace(/  +/g, ' ');
    return result;
  }
  /**
   * Remove acentos e caracteres especiais de uma string
   * @param str
   * @returns
   */
  cleanString(str) {
    if (!str)
      return str;
    let result = str.toLowerCase();
    result = result.replace(/[áàãâä]/giu, 'a');
    result = result.replace(/[éèêë]/giu, 'e');
    result = result.replace(/[íìîï]/giu, 'i');
    result = result.replace(/[óòõôö]/giu, 'o');
    result = result.replace(/[úùûü]/giu, 'u');
    result = result.replace(/[ç]/giu, 'c');
    result = result.replace(/[ñ]/giu, 'n');
    return this.removeDoubleSpacesAndBreaks(result);
  }
  /** CORE */
  /**
   * Cria um objeto indexado com o conteudo html do tema
   * @returns
   */
  createCachedDb() {
    const allElem = $('p.c-paragraph, span:not(.material-icons,.c-video-player__cover-title), strong, i:not(.material-icons), em, h1, h2, h3, h4, h5, h6, li, dt, dd, a:not(.c-button)');
    // Incluir um id de cache em todos os elementos iniciais
    for (let i = 0; i < allElem.length; i++) {
      if (!ignoredNodeList.includes(allElem[i].nodeName) && allElem[i].nodeName.substring(0, 4) != 'MJX-' &&
        !Boolean($(allElem[i]).parents('yduqs-menu, yduqs-rating, yduqs-modal').length) // FIXME - Excluir YDUQS-MODAL???
      ) {
        $(allElem[i]).attr(this.cacheDbId, (Math.random() + 1).toString(36).substring(2));
      }
    }
    // Buscar todos os elemtnos cacheados e montar Objeto de busca
    const allCachedElem = $(`body *[${this.cacheDbId}]`);
    const result = [];
    for (let i = 0; i < allCachedElem.length; i++) {
      // Parsing original html to remove double spaces and break lines
      $(allCachedElem[i]).html(this.removeDoubleSpacesAndBreaks($(allCachedElem[i]).html()));
      const original = $(allCachedElem[i]);
      const clone = original.clone();
      const cloneContents = clone.contents();
      const parsedItems = cloneContents.map(index => {
        var _a;
        if (cloneContents[index].nodeName === '#text') {
          return this.cleanString(cloneContents[index].textContent);
        }
        else if ((_a = cloneContents[index].dataset) === null || _a === void 0 ? void 0 : _a.cacheId) {
          return Array.from(Array(cloneContents[index].outerHTML.length), () => '*').join('');
        }
      });
      if (parsedItems.length > 0) {
        const data = {
          cachedId: original.attr(this.cacheDbId),
          original: original.html(),
          parsed: Array.from(parsedItems).join(''),
        };
        result.push(data);
      }
    }
    return result;
  }
  findInDocument() {
    this.actualFoundItemPosition = -1;
    let txt = this.cleanString(this.term);
    this.clearResults();
    this.hasSearch = true;
    if (txt === '') {
      return;
    }
    const $founds = this.cachedDb
      .map((item) => ({
      cachedId: item.cachedId,
      index: item.parsed.indexOf(txt),
      length: txt.length,
    }))
      .filter((item) => item.index >= 0);
    let result = [];
    $founds.forEach((item, index) => {
      var _a, _b, _c, _d, _e;
      const element = $(`body *[${this.cacheDbId}="${item.cachedId}"]`);
      const originalText = (_a = element.html()) === null || _a === void 0 ? void 0 : _a.substr(item.index, item.length);
      const page = (_b = element.closest('[data-page]')) === null || _b === void 0 ? void 0 : _b.attr('data-page');
      const module = (_c = element.closest('[data-module]')) === null || _c === void 0 ? void 0 : _c.attr('data-module');
      const locator = !module ? '' : !isNaN(Number(module)) ? `Módulo ${module}` : (moduleTitleDictionary[module] || '');
      const obj = {
        start: (_d = element.html()) === null || _d === void 0 ? void 0 : _d.substr(0, item.index),
        new: (cssClass) => `<span class="${cssClass}">${originalText}</span>`,
        end: (_e = element.html()) === null || _e === void 0 ? void 0 : _e.substr(item.index + originalText.length),
      };
      element.html(obj.start + obj.new(this.termFoundClass) + obj.end);
      result.push({
        index,
        page: page || '0',
        locator,
        html: obj.start + obj.new(this.termFoundResultClass) + obj.end,
      });
    });
    this.setResult(result);
    dispatchEvent('yduqs-search-called', { term: txt });
  }
  /** EVENTS */
  /**
   * Atualiza o valor de open
   * @param value
   */
  setOpen(value) {
    this.open = value;
  }
  /**
   * Atualiza o valor de term
   * @param value
   */
  setTerm(value) {
    this.term = value;
  }
  /**
   * Abre o modal de busca
   */
  handleOpen() {
    this.setOpen(true);
    this.elemInput.focus();
  }
  /**
   * Fecha o modal de busca
   */
  handleClose() {
    this.setOpen(false);
  }
  /**
   * Limpa os resultados
   */
  clearResults() {
    var _a;
    this.result = [];
    this.hasSearch = false;
    const $founds = $(`.${this.termFoundClass}`);
    for (let i = 0; i < $founds.length; i++) {
      if ($($founds[i]).is('span')) {
        const $parent = $($founds[i]).parent();
        var html = (_a = this.cachedDb.find(item => item.cachedId === $parent.attr(this.cacheDbId))) === null || _a === void 0 ? void 0 : _a.original;
        if (html) {
          $($parent).html(html);
        }
      }
    }
    dispatchEvent('yduqs-search-cleaned');
  }
  /**
   * Limpa o campo de busca e a lista de resultados
   */
  handleClear() {
    this.setTerm('');
    this.clearResults();
  }
  /**
   * Reseta o modal de busca para o estado inicial (fechado, sem termo e sem resultados)
   */
  handleReset() {
    this.handleClear();
    this.handleClose();
  }
  /**
   * Chamado na alteração do campo de busca
   * @param event
   */
  handleInputChange(event) {
    this.setTerm(event.target.value);
  }
  setResult(value) {
    this.result = value;
  }
  /**
   * Move o scroll até o elemento selecionado
   * @param position
   */
  navigateOnResults(position) {
    var $txtElement = $(`body span.${this.termFoundClass}`);
    this.actualFoundItemPosition = position < 0 ? $txtElement.length - 1 : position >= $txtElement.length ? 0 : position;
    if ($txtElement.eq(this.actualFoundItemPosition)) {
      // $($txtElement).removeClass('selected');
      // $($txtElement[this.actualFoundItemPosition]).addClass('selected');
      let txtElementTopPosition = $txtElement.eq(this.actualFoundItemPosition).offset().top;
      $(window).scrollTop(txtElementTopPosition - 120);
    }
    this.handleClose();
    dispatchEvent('yduqs-search-navigate', { position: this.actualFoundItemPosition });
  }
  handleResultItemClick(position, page) {
    dispatchEvent('yduqs-search-before-navigate', { position, page });
    setTimeout(() => {
      this.navigateOnResults(position);
    }, 400);
  }
  /**
   * Chamado no envio do formulário de busca
   * @param event
   */
  handleSubmit(event) {
    if (event.type === 'submit') {
      event.preventDefault();
    }
    if (this.open) {
      if (!this.cachedDb) {
        this.cachedDb = this.createCachedDb();
      }
      this.findInDocument();
    }
    else {
      this.handleOpen();
    }
  }
  render() {
    var _a;
    return (h(Host, { class: "c-search-bar" }, h("form", { class: `c-search-bar-trigger ${this.open ? 'opened' : ''}`, onSubmit: event => this.handleSubmit(event) }, h("button", { type: "button", class: "c-button c-button__icon-container u-text--small c-search-bar-trigger-back", onClick: () => this.handleReset() }, h("span", { class: "c-button__icon material-icons" }, "arrow_back")), h("div", { class: "c-search-bar-trigger-input-container" }, h("input", { type: "search", class: "c-search-bar-trigger-input", onInput: event => this.handleInputChange(event), value: this.term, ref: el => (this.elemInput = el), placeholder: "Pesquisar no tema" }), this.hasSearch && (h("span", { class: "c-button__icon material-icons", onClick: () => this.handleClear() }, "close"))), h("button", { type: "submit", class: "c-button c-button__icon-container u-text--small c-search-bar-trigger-btn" }, h("span", { class: "c-button__icon material-icons" }, "search"))), h("div", { class: `c-search-bar-result ${this.open ? 'opened' : ''}` }, h("div", { class: "c-search-bar-result-overlay", onClick: () => this.handleClose() }), h("div", { class: "c-search-bar-result-container" }, ((_a = this.result) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (h("div", { class: "c-search-bar-result-list" }, this.result.map(item => (h("div", { class: "c-search-bar-result-list-item", onClick: () => this.handleResultItemClick(item.index, item.page) }, h("div", { class: "item-breadcrumb" }, item.locator), h("div", { innerHTML: item.html })))))) : this.hasSearch ? (h("div", { class: "c-search-bar-result-list-empty" }, `Não encontramos nenhum resultado`)) : (h("div", null))))));
  }
  static get watchers() { return {
    "term": ["reset"]
  }; }
};

export { YduqsSearchBar as yduqs_search_bar };
