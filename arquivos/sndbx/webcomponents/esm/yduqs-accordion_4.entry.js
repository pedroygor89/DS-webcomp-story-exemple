import { r as registerInstance, h, g as getElement, c as createEvent, a as Host } from './index-b21d89aa.js';
import { i as i18n } from './i18n-3725f313.js';
import { a as removeDoubleSpacesAndBreaks, c as cleanString, d as dispatchEvent } from './utils-42b62acd.js';

const YduqsAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  // @Event({ eventName: 'toggle' })
  // onToggle: EventEmitter;
  // @Listen('togglepane')
  // onTogglePane(ev) {
  //   const accordion = this.element.children[0];
  //   const open = ev.detail;
  //   const pane = ev.target;
  //   const idx = [].indexOf.call(accordion.children, pane);
  //   this.onToggle.emit({ idx, open });
  //   this._active = open;
  //   this.animate();
  // }
  animate() {
    this.content.style.maxHeight = `${this._contentMaxHeight}px`;
  }
  render() {
    const outlineClass = this.outline ? 'c-accordion--outline' : '';
    const activeClass = this._active ? 'c-accordion--active' : '';
    return (h("div", { ref: (el) => (this.content = el), class: `c-accordion c-accordion--collapse ${outlineClass} ${activeClass}` }, h("slot", null)));
  }
  get element() { return getElement(this); }
};

const YduqsAccordionPane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onClickCollapse = createEvent(this, "onClickCollapse", 7);
    this.onToggle = createEvent(this, "togglepane", 7);
    this._isOpen = false;
    this.open = false;
  }
  async show() {
    this._isOpen = true;
  }
  async close() {
    this._isOpen = false;
  }
  toggle() {
    this._isOpen ? this.close() : this.show();
    this.onToggle.emit(this._isOpen);
    this.animate();
  }
  async isOpen() {
    return this._isOpen;
  }
  animate() {
    this.content.className = this._isOpen ? 'c-accordion__item c-accordion__item--pane u-fade-in' : 'c-accordion__item c-accordion__item--pane';
  }
  render() {
    const isOpenClass = this._isOpen ? 'c-accordion__control--active' : '';
    return (h(Host, { class: "c-accordion-pane" }, h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-accordion__control ${isOpenClass}`, onClick: ev => {
        this.onClickCollapse.emit(ev);
        this.toggle();
      } }, h("div", { class: "c-accordion__title" }, h("slot", { name: "c-accordion-header" })), h("span", { class: "c-accordion__icon material-icons" }, "expand_more")), h("div", { ref: (el) => (this.content = el), "aria-hidden": !this._isOpen, class: "c-accordion__item c-accordion__item--pane" }, h("slot", { name: "c-accordion-content" }))));
  }
};

const GalleryVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.module_number = 0;
    this.module_number_video = 0;
    this.type_video = '';
    this.english = false;
    this.spanish = false;
    this.scrollModules = undefined;
  }
  async changeVideo(src) {
    this.srcVideo = src;
  }
  async changeModule(numMod) {
    this.moduleId = numMod == "apresentacao" ? 99 : numMod == "conclusao" ? 100 : numMod;
    let yduqs_playlist = this.el.querySelector('yduqs-playlist-video');
    yduqs_playlist.module_number = parseInt(this.moduleId);
    this.el.querySelectorAll('.activated').forEach(e => {
      e.classList.remove('activated');
    });
    this.el.querySelectorAll('.bt-mod-' + numMod).forEach(el => {
      el.classList.add('activated');
    });
  }
  async changeVideoExternal(video) {
    var mod = video.id.split('-')[1];
    this.changeModule(mod);
    this.moduleId = mod == "apresentacao" ? 99 : mod == "conclusao" ? 100 : mod;
    this.module_number = parseInt(this.moduleId);
    this.module_number_video = parseInt(this.moduleId);
    this.title_gallery = video.title_video;
    this.type_video = video.type;
    let yduqs_playlist = this.el.querySelector('yduqs-playlist-video');
    yduqs_playlist.changeVideoGallery(video);
  }
  handleWindowResize() {
    this.verifyIsMobile();
  }
  renderNameModule(name) {
    var current_name;
    if (name === null || name === void 0 ? void 0 : name.includes('modulo')) {
      let moduleTranslation = this.english ? 'Section ' : this.spanish ? 'Módulo ' : 'Módulo ';
      current_name = moduleTranslation + name.slice(6);
    }
    else {
      if (name == 'apresentacao' || name == 'Módulo apresentacao') {
        current_name = this.english ? 'Warm Up' : this.spanish ? 'Introducción' : 'Introdução';
      }
      else if (name == 'conclusao') {
        current_name = this.english ? 'Conclusion' : this.spanish ? 'Conclusión' : 'Conclusão';
      }
      else {
        current_name = (name === null || name === void 0 ? void 0 : name.charAt(0).toUpperCase()) + (name === null || name === void 0 ? void 0 : name.slice(1));
      }
    }
    return current_name;
  }
  verifyIsMobile() {
    var body = window.innerWidth;
    if (body > 991) {
      this.getSizeScrollButtonsMenu();
    }
    else {
      this.getSizeScrollButtonsMenuMobile();
    }
  }
  mouseMoveButtonsModule() {
    document.querySelectorAll('.modules-wrapper').forEach(ele => {
      ele.scrollTop = 0;
      ele.scrollLeft = 0;
      let pos = { top: 0, left: 0, x: 0, y: 0 };
      const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;
        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
      };
      const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
      };
      const mouseDownHandler = function (e) {
        pos = {
          // The current scroll
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
        };
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
      };
      ele.addEventListener('mousedown', mouseDownHandler);
    });
  }
  touchMoveButtonsModules() {
    document.querySelectorAll('.modules-wrapper').forEach(ele => {
      ele.scrollTop = 0;
      ele.scrollLeft = 0;
      let pos = { top: 0, left: 0, x: 0, y: 0 };
      const touchMoveHandler = function (e) {
        // How far the mouse has been moved
        const fx = e.touches[0].clientX - pos.x;
        // Scroll the element
        ele.scrollLeft = pos.left - fx;
      };
      const touchEndHandler = function () {
        document.removeEventListener("touchmove", touchMoveHandler);
        document.removeEventListener("touchstart", touchStartHandler);
        document.removeEventListener("touchend", touchEndHandler);
      };
      const touchStartHandler = function (e) {
        pos = {
          // The current scroll
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // Get the current mouse position
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
        document.addEventListener("touchmove", touchMoveHandler);
        document.addEventListener("touchend", touchEndHandler);
      };
      ele.addEventListener('touchstart', touchStartHandler);
    });
  }
  renderButtonsMenu() {
    const listButtonsMenu = [];
    listButtonsMenu.push(h("div", { class: "module-button bt-mod-0 activated", id: "all", "data-gtm-event-category": ':[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'galeria-video:conteudo-clique-botao', "data-gtm-event-label": 'trocar-modulo', onClick: (event) => {
        this.changeModule(0);
        event.stopPropagation();
      } }, h("p", null, i18n('pager.todos'))));
    document.querySelectorAll('module').forEach(mod => {
      let select_apresentation = document.getElementById('apresentacao');
      let video_apresentation = select_apresentation.querySelectorAll('yduqs-video-player');
      let select_conclusion = document.getElementById('conclusao');
      let video_conclusion = select_conclusion.querySelectorAll('yduqs-video-player');
      let module_video_conclusion = select_conclusion.querySelectorAll('yduqs-module-video');
      if (video_apresentation.length !== 0 && mod.id !== 'conclusao') {
        listButtonsMenu.push(h("div", { class: `module-button bt-mod-${mod.id.replace('modulo', '')}`, "data-gtm-event-category": ':[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'galeria-video:conteudo-clique-botao', "data-gtm-event-label": 'trocar-modulo', onClick: (event) => {
            this.changeModule(mod.id.replace('modulo', ''));
            event.stopPropagation();
          } }, h("p", null, this.renderNameModule(mod.id))));
      }
      else if ((module_video_conclusion.length !== 0 || video_conclusion.length !== 0) && mod.id !== 'apresentacao') {
        listButtonsMenu.push(h("div", { class: `issomesmo module-button bt-mod-${mod.id.replace('modulo', '')}`, "data-gtm-event-category": ':[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'galeria-video:conteudo-clique-botao', "data-gtm-event-label": 'trocar-modulo', onClick: (event) => {
            this.changeModule(mod.id.replace('modulo', ''));
            event.stopPropagation();
          } }, h("p", null, this.renderNameModule(mod.id))));
      }
      else if (mod.id !== 'apresentacao' && mod.id !== 'conclusao') {
        listButtonsMenu.push(h("div", { class: `module-button bt-mod-${mod.id.replace('modulo', '')}`, "data-gtm-event-category": ':[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'galeria-video:conteudo-clique-botao', "data-gtm-event-label": 'trocar-modulo', onClick: (event) => {
            this.changeModule(mod.id.replace('modulo', ''));
            event.stopPropagation();
          } }, h("p", null, this.renderNameModule(mod.id))));
      }
    });
    return h("div", { id: "box-modules-buttons", class: "modules-wrapper" }, ...listButtonsMenu);
  }
  closeModalGallery() {
    let modal = document.querySelector('yduqs-menu yduqs-modal');
    let closeModal = document.querySelector('yduqs-video-player iframe');
    closeModal.removeAttribute('src');
    modal.setAttribute('isOpen', 'false');
  }
  getSizeScrollButtonsMenu() {
    this.el.querySelectorAll('.module-navigation .modules-wrapper').forEach(box => {
      var before_button = this.el.querySelector('.before');
      var after_button = this.el.querySelector('.after');
      //primeira Verificação
      let pos_final = box.getBoundingClientRect().right;
      let pos_initial = box.getBoundingClientRect().x;
      let scroll_left = box.scrollLeft;
      let scroll_size = box.scrollWidth;
      let width_size = box.getBoundingClientRect().width;
      let diff_size = (pos_final - pos_initial) + scroll_left;
      var total_size = diff_size.toFixed();
      const scroll_actual = parseInt(total_size);
      if (scroll_left == 0) {
        before_button.classList.add('d-none');
      }
      else {
        before_button.classList.remove('d-none');
      }
      if (scroll_size - 50 <= width_size || scroll_actual === scroll_size && scroll_left != 0) {
        after_button.classList.add('d-none');
      }
      else {
        after_button.classList.remove('d-none');
      }
      //Adicionando no evento
      box.addEventListener('scroll', function () {
        pos_final = box.getBoundingClientRect().right;
        pos_initial = box.getBoundingClientRect().x;
        scroll_left = box.scrollLeft;
        scroll_size = box.scrollWidth;
        width_size = box.getBoundingClientRect().width;
        diff_size = (pos_final - pos_initial) + scroll_left;
        var total_size = diff_size.toFixed();
        const scroll_actual = parseInt(total_size);
        if (scroll_left == 0) {
          before_button.classList.add('d-none');
        }
        else {
          before_button.classList.remove('d-none');
        }
        if (scroll_size <= width_size || scroll_actual == scroll_size && scroll_left != 0) {
          after_button.classList.add('d-none');
        }
        else {
          after_button.classList.remove('d-none');
        }
      });
    });
  }
  getSizeScrollButtonsMenuMobile() {
    this.el.querySelectorAll('.module-navigation-mob .modules-wrapper').forEach(box => {
      var before_button_mob = this.el.querySelector('.before-mob');
      var after_button_mob = this.el.querySelector('.after-mob');
      //primeira Verificação
      let pos_final = box.getBoundingClientRect().right;
      let pos_initial = box.getBoundingClientRect().x;
      let scroll_left = box.scrollLeft;
      let scroll_size = box.scrollWidth;
      let width_size = box.getBoundingClientRect().width;
      let diff_size = (pos_final - pos_initial) + scroll_left;
      var total_size = diff_size.toFixed();
      const scroll_actual = parseInt(total_size);
      if (scroll_left == 0) {
        before_button_mob.classList.add('d-none');
      }
      else {
        before_button_mob.classList.remove('d-none');
      }
      if (scroll_size - 50 <= width_size || scroll_actual === scroll_size && scroll_left != 0) {
        after_button_mob.classList.add('d-none');
      }
      else {
        after_button_mob.classList.remove('d-none');
      }
      //Adicionando no evento
      box.addEventListener('scroll', function () {
        pos_final = box.getBoundingClientRect().right;
        pos_initial = box.getBoundingClientRect().x;
        scroll_left = box.scrollLeft;
        scroll_size = box.scrollWidth;
        width_size = box.getBoundingClientRect().width;
        diff_size = (pos_final - pos_initial) + scroll_left;
        var total_size = diff_size.toFixed();
        const scroll_actual = parseInt(total_size);
        if (scroll_left == 0) {
          before_button_mob.classList.add('d-none');
        }
        else {
          before_button_mob.classList.remove('d-none');
        }
        if (scroll_size <= width_size || scroll_actual == scroll_size && scroll_left != 0) {
          after_button_mob.classList.add('d-none');
        }
        else {
          after_button_mob.classList.remove('d-none');
        }
      });
    });
  }
  nextScroll() {
    this.el.querySelectorAll('.modules-wrapper').forEach(element => {
      let scroll_left = element.scrollLeft;
      element.scroll(scroll_left + 50, 0);
    });
  }
  prevScroll() {
    this.el.querySelectorAll('.modules-wrapper').forEach(element => {
      let scroll_left = element.scrollLeft;
      element.scroll(scroll_left - 50, 0);
    });
  }
  async componentWillLoad() {
    const htmlTagGallery = document.querySelector('html');
    const htmlLanguageGallery = htmlTagGallery.getAttribute('lang');
    if (htmlLanguageGallery === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageGallery === 'es') {
      this.spanish = true;
    }
    this.verifyIsMobile();
    this.mouseMoveButtonsModule();
    this.touchMoveButtonsModules();
  }
  componentWillRender() {
    this.verifyIsMobile();
    this.mouseMoveButtonsModule();
    this.touchMoveButtonsModules();
  }
  render() {
    return (h("div", { class: "c-gallery-video" }, h("div", { class: "c-gallery-video__header d-none d-lg-inline" }, h("h5", null, this.module_number_video == 0 ? i18n('pager.todos') : this.module_number_video == 99 ? i18n('pager.apresentacao') : this.module_number_video == 100 ? i18n('pager.conclusao') : i18n('pager.modulo') + ' ' + this.module_number_video), h("div", { class: "box-modules d-flex" }, h("h1", { class: "col-12 col-lg-8 col-xxl-9", innerHTML: this.title_gallery }), h("div", { class: "module-navigation d-flex col-lg-4 col-xxl-3" }, h("div", { class: `module-button-navigation before`, id: "before", onClick: () => { this.prevScroll(); } }, h("span", { class: "material-icons" }, "keyboard_arrow_left")), this.renderButtonsMenu(), h("div", { class: `module-button-navigation after`, id: "after", onClick: () => { this.nextScroll(); } }, h("span", { class: "material-icons" }, "keyboard_arrow_right"))))), h("div", { class: "c-gallery-video__content" }, h("div", { class: "c-gallery-video__content_videos col-12 col-lg-8 col-xxl-9" }, h("div", { class: "close-modal d-lg-none d-xl-none d-sxl-none", onClick: () => { this.closeModalGallery(); } }, h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#fff" }))), h("div", { class: "c-gallery-video__content_videos_video" }, h("yduqs-video-player", { "skip-menu": "true", src: this.srcVideo, videoId: "", width: "", height: "" })), h("div", { class: "c-gallery-video__header d-inline d-lg-none" }, h("h5", null, this.module_number_video == 0 ? i18n('pager.todos') : this.module_number_video == 99 ? i18n('pager.apresentacao') : this.module_number_video == 100 ? i18n('pager.conclusao') : i18n('pager.modulo') + ' ' + this.module_number_video), h("div", { class: "box-modules d-flex flex-column" }, h("h1", { class: "col-lg-8 col-xxl-9", innerHTML: this.title_gallery }), h("div", { class: "d-flex module-navigation-mob" }, h("div", { class: `module-button-navigation before-mob`, id: "before", onClick: () => { this.prevScroll(); } }, h("span", { class: "material-icons" }, "keyboard_arrow_left")), this.renderButtonsMenu(), h("div", { class: `module-button-navigation after-mob`, id: "after", onClick: () => { this.nextScroll(); } }, h("span", { class: "material-icons" }, "keyboard_arrow_right")))))), h("div", { class: "c-gallery-video__content_playlist col-12 col-lg-4 col-xxl-3" }, h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number })))));
  }
  get el() { return getElement(this); }
};

const ignoredNodeList = ['#comment', '#text', 'SCRIPT', 'STYLE', 'IFRAME', 'HR', 'svg', 'path', 'g', 'math', 'mi', 'mo', 'mrow', 'mfrac', 'msqrt', 'msup', 'mn'];
const ignoredParentList = ['yduqs-menu', 'yduqs-rating', 'yduqs-modal', 'yduqs-pager'].join(',');
const YduqsSearchBar = class {
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
  /** CORE */
  /**
   * Cria um objeto indexado com o conteudo html do tema
   * @returns
   */
  createCachedDb() {
    const allElem = $('p, span:not(.material-icons,.c-video-player__cover-title), strong, b, u, i:not(.material-icons), em, h1, h2, h3, h4, h5, h6, li, dt, dd, a:not(.c-button), [slot="card-heading"], [slot="card-subheading"], td, th');
    // Incluir um id de cache em todos os elementos iniciais
    for (let i = 0; i < allElem.length; i++) {
      if (!ignoredNodeList.includes(allElem[i].nodeName) &&
        allElem[i].nodeName.substring(0, 4) != 'MJX-' &&
        !Boolean($(allElem[i]).parents(ignoredParentList).length) // FIXME - Excluir YDUQS-MODAL???
      ) {
        $(allElem[i]).attr(this.cacheDbId, (Math.random() + 1).toString(36).substring(2));
      }
    }
    // Buscar todos os elemtnos cacheados e montar Objeto de busca
    const allCachedElem = $(`body *[${this.cacheDbId}]`);
    const result = [];
    for (let i = 0; i < allCachedElem.length; i++) {
      // Parsing original html to remove double spaces and break lines
      $(allCachedElem[i]).html(removeDoubleSpacesAndBreaks($(allCachedElem[i]).html()));
      const original = $(allCachedElem[i]);
      const clone = original.clone();
      const cloneContents = clone.contents();
      const parsedItems = cloneContents.map(index => {
        var _a;
        if (cloneContents[index].nodeName === '#text') {
          return cleanString(cloneContents[index].textContent);
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
    let txt = cleanString(this.term);
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
      const locator = !module ? '' : !isNaN(Number(module)) ? `${i18n('pager.modulo')} ${module}` : i18n(`pager.${module}`) || '';
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
    return (h(Host, { class: "c-search-bar" }, h("form", { class: `c-search-bar-trigger ${this.open ? 'opened' : ''}`, onSubmit: event => this.handleSubmit(event) }, h("button", { "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'barra-busca:conteudo-clique-botao', "data-gtm-event-label": 'voltar', type: "button", class: "c-button c-button__icon-container u-text--small c-search-bar-trigger-back", onClick: () => this.handleReset() }, h("span", { class: "c-button__icon material-icons" }, "arrow_back")), h("div", { class: "c-search-bar-trigger-input-container" }, h("input", { type: "search", class: "c-search-bar-trigger-input", onInput: event => this.handleInputChange(event), value: this.term, ref: el => (this.elemInput = el), placeholder: "Pesquisar no tema" }), this.hasSearch && (h("span", { class: "c-button__icon material-icons", onClick: () => this.handleClear() }, "close"))), h("button", { "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'barra-busca:conteudo-clique-botao', "data-gtm-event-label": 'buscar', type: "submit", class: "c-button c-button__icon-container u-text--small c-search-bar-trigger-btn" }, h("span", { class: "c-button__icon material-icons" }, "search"))), h("div", { class: `c-search-bar-result ${this.open ? 'opened' : ''}` }, h("div", { class: "c-search-bar-result-overlay", onClick: () => this.handleClose() }), h("div", { class: "c-search-bar-result-container" }, ((_a = this.result) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (h("div", { class: "c-search-bar-result-list" }, this.result.map(item => (h("div", { class: "c-search-bar-result-list-item", onClick: () => this.handleResultItemClick(item.index, item.page) }, h("div", { class: "item-breadcrumb" }, item.locator), h("div", { innerHTML: item.html })))))) : this.hasSearch ? (h("div", { class: "c-search-bar-result-list-empty" }, `Não encontramos nenhum resultado`)) : (h("div", null))))));
  }
  static get watchers() { return {
    "term": ["reset"]
  }; }
};

export { YduqsAccordion as yduqs_accordion, YduqsAccordionPane as yduqs_accordion_pane, GalleryVideo as yduqs_gallery_video, YduqsSearchBar as yduqs_search_bar };
