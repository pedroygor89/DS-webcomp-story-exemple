import { r as registerInstance, h, e as Host } from './index-5acc1e77.js';
import { i as i18n } from './i18n-b16b05ee.js';
import { c as cleanString, d as dispatchEvent } from './utils-f2ca3a61.js';

const YduqsPager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.hideCssClass = 'c-pager-hide';
    this.attrSelectorPage = 'data-page';
    this.attrSelectorModule = 'data-module';
    this.attrSelectorLabel = 'data-label';
    this.starterPageIndex = 1;
    this.theme = cleanString(document.title).replace(/ +/g, '');
    this.localStorageKey = `${this.theme}-last-viewed-page`;
    this.total = 0;
    this.current = 0;
  }
  isActive() {
    return window.innerWidth <= 578;
  }
  getTexts(key) {
    return i18n(`pager.${key}`);
  }
  _getModulePagination(module, page, label) {
    let indexes = [];
    const hasLabel = Boolean(label === null || label === void 0 ? void 0 : label.length);
    const selector = hasLabel
      ? `[${this.attrSelectorModule}="${module}"][${this.attrSelectorLabel}="${label}"]`
      : `[${this.attrSelectorModule}="${module}"]:not([${this.attrSelectorLabel}])`;
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
    return (h("div", { class: "c-pager-label-module", "data-cy": `${module}-${count}` }, h("span", { class: "c-pager-label-module-text", "data-cy": module }, module), Boolean(count === null || count === void 0 ? void 0 : count.length) && (h("span", { class: "c-pager-label-module-count", "data-cy": count }, count))));
  }
  _getLabel() {
    const pageElem = $(`[${this.attrSelectorPage}="${this.current}"]`);
    const moduleCount = pageElem.attr(this.attrSelectorModule);
    const label = pageElem.attr(this.attrSelectorLabel);
    let result;
    if (isNaN(Number(moduleCount))) {
      result = (h("div", { class: "c-pager-label-container", "data-cy": moduleCount }, this._getLabelModule(this.getTexts(moduleCount))));
    }
    else {
      const config = this._getModulePagination(Number(moduleCount), this.current, label);
      if (pageElem.get(0).tagName === 'YDUQS-MODULE-COVER') {
        // POG para quando for a Capa do Módulo
        result = (h("div", { class: "c-pager-label-container", "data-cy": moduleCount }, this._getLabelModule(this.getTexts('modulo'), moduleCount)));
      }
      else {
        result = (h("div", { class: "c-pager-label-container", "data-cy": label }, h("div", { class: "c-pager-label-page" }, h("span", { class: "c-pager-label-page-text", "data-cy": `label ${label}` }, this.getTexts(label || 'conceito')), h("span", { class: "c-pager-label-page-count" }, h("strong", { "data-cy": "count-atual" }, config.atual), " / ", h("strong", { "data-cy": "count-total" }, config.total))), h("div", { class: "c-pager-label-separator" }, "|"), this._getLabelModule(this.getTexts('modulo'), moduleCount)));
      }
    }
    return result;
  }
  /**
   * Procura pelos videos e faz backup do SRC
   */
  _prepareVideoPlayers() {
    $('yduqs-video-player iframe').each(function () {
      $(this).attr('set-src', $(this).attr('src'));
    });
  }
  /**
   * Seta o src nos videos da pagina atual, ou todos os videos se a paginação não estiver ativa
   */
  _setCurrentVideosSrc() {
    let players;
    if (this.isActive()) {
      const currents = $(`[${this.attrSelectorPage}="${this._getCurrentPage()}"]`);
      players = currents.find('yduqs-video-player iframe');
    }
    else {
      players = $('yduqs-video-player iframe');
    }
    players.each(function () {
      if (!Boolean($(this).attr('src'))) {
        $(this).attr('src', $(this).attr('set-src'));
      }
    });
  }
  /**
   * Procura pelos videos nas paginas não correntes e muda seu SRC
   */
  _stopUncurrentVideos() {
    if (this.isActive()) {
      const uncurrents = $(`[${this.attrSelectorPage}]:not([${this.attrSelectorPage}="${this._getCurrentPage()}"])`);
      const players = uncurrents.find('yduqs-video-player iframe');
      players.each(function () {
        $(this).removeAttr('src');
      });
    }
  }
  _handleVideoPlayers() {
    this._stopUncurrentVideos();
    this._setCurrentVideosSrc();
  }
  handleWindowResize() {
    this._handleVideoPlayers();
  }
  _goToPage() {
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
    // Gambiarra pra parar os videos que não estão na pagina atual
    this._handleVideoPlayers();
    // Gravação dos dados de Ultimo página visualizada
    window.localStorage.setItem(this.localStorageKey, `${this.current}`);
  }
  _setCurrentPage(value) {
    const next = value < this.starterPageIndex ? this.starterPageIndex : value > this.total ? this.total : value;
    // Disparo do Evento de Troca de páginas
    dispatchEvent('yduqs-pager-before-change', { from: this.current, to: next, total: this.total });
    this.current = next;
  }
  _getCurrentPage() {
    return this.current;
  }
  _init() {
    // Gambiarra para resolver problema no audio dos videos players
    this._prepareVideoPlayers();
    const elements = document.querySelectorAll(`[${this.attrSelectorPage}]`);
    let total = 0;
    elements === null || elements === void 0 ? void 0 : elements.forEach(page => {
      const pageNum = Number(page.getAttribute(this.attrSelectorPage));
      total = total < pageNum ? pageNum : total;
    });
    this.total = total;
    const last = window.localStorage.getItem(this.localStorageKey);
    if (last && !isNaN(Number(last))) {
      this._setCurrentPage(Number(last));
    }
    else {
      this._setCurrentPage(this.starterPageIndex);
    }
  }
  /**
   * Vai para a página anterior
   */
  _goToPrev() {
    // Scrolla para o inicio da página
    window.scrollTo(0, 0);
    this._setCurrentPage(this._getCurrentPage() - 1);
  }
  /**
   * Vai para a próxima página
   */
  _goToNext() {
    // Scrolla para o inicio da página
    window.scrollTo(0, 0);
    this._setCurrentPage(this._getCurrentPage() + 1);
  }
  /**
   * Retorna a pagina onde está o elemento informado
   * @param elem jQuery Element
   */
  _getPageFromElement(selector) {
    var _a, _b, _c, _d, _e;
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
    else if (elem.next(`[${this.attrSelectorPage}]`).length > 0) {
      pos = (_e = elem.next(`[${this.attrSelectorPage}]`)) === null || _e === void 0 ? void 0 : _e.attr(this.attrSelectorPage);
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
    // Scrolla para o inicio da página
    window.scrollTo(0, 0);
    const element = event.detail;
    this._setCurrentPage(parseInt((_a = element.closest(`[${this.attrSelectorPage}]`)) === null || _a === void 0 ? void 0 : _a.getAttribute(this.attrSelectorPage)));
  }
  componentWillLoad() {
    // Numerador de páginas
    let p = $('.auto-pager');
    p.each(function (i) {
      let m = $(this).closest('module').attr('id');
      if (m == 'apresentacao') {
        $(this).attr('data-module', 'introducao');
      }
      else if (m == 'modulo1') {
        $(this).attr('data-module', '1');
      }
      else if (m == 'modulo2') {
        $(this).attr('data-module', '2');
      }
      else if (m == 'modulo3') {
        $(this).attr('data-module', '3');
      }
      else if (m == 'modulo4') {
        $(this).attr('data-module', '4');
      }
      // Numera páginas comuns
      $(this).attr('data-page', i);
      // Numera a capa
      $(this).find('c-cover').length > 0 && ($(this).attr('data-module', 'introducao'), $(this).attr('data-page', '0'));
      // Label para intro e pagina 1
      $(this).closest('header').find('yduqs-cover').length > 0 && ($(this).attr('data-module', 'introducao'), $(this).attr('data-page', 1));
      // Label para apresentacao
      $(this).find('module#apresentacao').length > 0 && $(this).attr('data-module', 'apresentacao');
      // Label para vem que eu te explico
      $(this).find('yduqs-module-video[title_gallery*="Vem que eu te explico"]').length > 0 && $(this).attr('data-label', 'teexplico');
      // Label para atividades
      $(this).find('yduqs-questions').length > 0 && $(this).attr('data-label', 'atividade');
      $(this).find('yduqs-title[topic_title="Atividade discursiva"]').length > 0 && $(this).attr('data-label', 'atividade');
      $(this).find('yduqs-teoria').length > 0 && $(this).attr('data-label', 'atividade');
      // Numera a conclusão
      $(this).closest('module#conclusao').length > 0 && $(this).attr('data-module', 'conclusao');
      $(this).find('module#conclusao').length > 0 && $(this).attr('data-module', 'conclusao');
      // Numera o footer
      $(this).closest('footer').length > 0 && $(this).attr('data-page', i - 1);
      // Renumera e agrupa itens extras do footer
      if ($(this).closest('footer').find('yduqs-footer').length > 0) {
        let t = $('[data-module=conclusao').attr('data-page');
        $(this).attr('data-page', t);
        $(this).attr('data-module', 'conclusao');
      }
    });
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
    /**
     * Marretando um evento nos links com href hashed
     */
    $('body').on('click', 'a[href^="#"]', event => {
      var _a;
      event.preventDefault();
      const hash = (_a = event.currentTarget.href) === null || _a === void 0 ? void 0 : _a.substring(event.currentTarget.href.indexOf('#'), event.currentTarget.href.length);
      if (hash) {
        let pos = this._getPageFromElement(hash);
        if (pos) {
          this._setCurrentPage(parseInt(pos));
        }
      }
      if (window.location.hash == hash) {
        window.scrollTo(0, $(window.location.hash).offset().top);
      }
      else {
        window.location.hash = hash;
      }
    });
    this._init();
  }
  render() {
    return (h(Host, null, h("div", { class: `c-pager ${this.total <= 1 ? 'c-pager-none' : ''}`, id: "btnPaginator" }, h("button", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "paginacao:conteudo-clique-botao", "data-gtm-event-label": "voltar", disabled: true, type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-prev", ref: el => (this.btnPrev = el), onClick: () => this._goToPrev() }, h("span", { class: "c-button__icon material-icons" }, "arrow_back")), this._getLabel(), h("button", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "paginacao:conteudo-clique-botao", "data-gtm-event-label": "avancar", type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-next", ref: el => (this.btnNext = el), onClick: () => this._goToNext() }, h("span", { class: "c-button__icon material-icons" }, "arrow_forward")))));
  }
  static get watchers() { return {
    "current": ["_goToPage"]
  }; }
};

export { YduqsPager as yduqs_pager };
