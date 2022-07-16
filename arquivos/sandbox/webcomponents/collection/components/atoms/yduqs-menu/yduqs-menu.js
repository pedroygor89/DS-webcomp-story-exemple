import { Component, h, Host, Element, State, Prop, Listen, Event, Method, Watch } from '@stencil/core';
const mobileBreakpoint = 578;
export class YduqsMenu {
  constructor() {
    this._isMobile = window.innerWidth < mobileBreakpoint;
    this._isOpen = false;
    this._isOpenGallery = false;
    this._isActive = false;
    this._animate = false;
    this._activeIndex = 0;
    this._videoModule = 1;
    this.english = false;
    this.spanish = false;
  }
  handleWindowResize() {
    const isMobileDevice = window.innerWidth < mobileBreakpoint;
    if (isMobileDevice && !this._isMobile) {
      this._isMobile = true;
    }
    else if (!isMobileDevice && this._isMobile) {
      this._isMobile = false;
    }
  }
  //Momento em que é atribuido settings
  async initialize(config) {
    this.settings = config;
  }
  //Metodo para fechar o menu
  closeMenu(index) {
    if (!this._isMobile && this._isOpen) {
      this.animate(true);
    }
    if (index >= 0) {
      this._activeIndex = index;
    }
    this._isOpen = false;
  }
  ;
  watchHandler() {
    this.updateActiveItem();
  }
  openMenu() {
    if (!this._isMobile && this._isOpen) {
      this.closeMenu();
    }
    else {
      this._isOpen = true;
    }
  }
  ;
  updateActiveItem() {
    this._activeIndex = this.position;
  }
  renderActiveMarker() {
    return (h("span", { class: "c-menu__active-marker" }));
  }
  renderNameModule(name) {
    var current_name;
    if (name.includes('modulo')) {
      let moduleTranslation = this.english ? 'Section ' : this.spanish ? 'Módulo ' : 'Módulo ';
      current_name = moduleTranslation + name.slice(6);
    }
    else {
      if (name == 'apresentacao') {
        current_name = this.english ? 'Introduction' : this.spanish ? 'Introducción' : 'Introdução';
      }
      else if (name == 'conclusao') {
        current_name = this.english ? 'Conclusion' : this.spanish ? 'Conclusión' : 'Conclusão';
      }
      else {
        current_name = name.charAt(0).toUpperCase() + name.slice(1);
      }
    }
    return current_name;
  }
  renderMenuJorney() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    document.querySelectorAll('module').forEach((e, i) => {
      var menuSubItemsList = [];
      //Pega o nó do título do yduqs-module-cover 
      i--;
      var titleAll = document.querySelectorAll('.titles h2');
      var titleModuloCover = Array.prototype.map.call(titleAll, function (t) { return t.textContent; });
      if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
        menuItemsList.push(h("yduqs-accordion", { outline: false },
          h("yduqs-accordion-pane", { "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'menu:conteudo-clique-item', "data-gtm-event-label": 'submenu:jornada-' + e.id },
            h("span", { slot: "c-accordion-header" },
              h("span", { innerHTML: this.renderNameModule(e.id) }),
              h("p", { class: "module-subtitle-menu", innerHTML: titleModuloCover[i] })),
            h("div", { slot: "c-accordion-content" },
              e.querySelectorAll('yduqs-title, yduqs-questions, yduqs-teoria').forEach((f, index) => {
                if (f.tagName == 'YDUQS-TITLE') {
                  let insidePlaylist = f.closest('.container');
                  if (insidePlaylist !== null) {
                    var verifyModuleVideo = insidePlaylist.querySelector('yduqs-module-video');
                    var verifyQuestion = insidePlaylist.querySelector('yduqs-questions');
                    var verifyActivities = insidePlaylist.querySelector('yduqs-atividade-discursiva');
                    var topicIcon = f.getAttribute('topic_icon');
                    if (verifyActivities === null && verifyQuestion === null && verifyModuleVideo === null && topicIcon !== 'video_library' && topicIcon !== 'ondemand_video' && topicIcon !== 'headset' && topicIcon !== 'note_alt_black') {
                      menuSubItemsList.push(h("a", { class: {
                          'c-menu__item-container': true
                        }, onClick: () => {
                          this.closeMenu(index);
                          f.scrollIntoView();
                        } },
                        h("span", { class: {
                            'c-menu__item': true,
                            'c-menu__item--active': (this._activeIndex === index)
                          } },
                          h("span", { class: "material-icons" }, " library_books"),
                          h("span", { innerHTML: f.getAttribute('topic_title') }))));
                    }
                  }
                }
                else if (f.tagName == 'YDUQS-QUESTIONS') {
                  if (f.getAttribute('question_id')) {
                    menuSubItemsList.push(h("a", { class: {
                        'c-menu__item-container': true
                      }, onClick: () => {
                        this.closeMenu(index);
                        f.scrollIntoView();
                      } },
                      h("span", { class: {
                          'c-menu__item': true,
                          'c-menu__item--active': (this._activeIndex === index)
                        } },
                        h("span", { class: "material-icons" }, "create"),
                        h("span", null, this.english ? 'Learning Check' : this.spanish ? 'Verificar el Aprendizaje' : 'Verificando Aprendizado'))));
                  }
                  else if (f.getAttribute('exercise_id')) {
                    menuSubItemsList.push(h("a", { class: {
                        'c-menu__item-container': true
                      }, 
                      // href={'#' +`${ f.getAttribute('question_id') }`}
                      onClick: () => {
                        this.closeMenu(index);
                        f.scrollIntoView();
                      } },
                      h("span", { class: {
                          'c-menu__item': true,
                          'c-menu__item--active': (this._activeIndex === index)
                        } },
                        h("span", { class: "material-icons" }, "create"),
                        h("span", null, this.english ? 'Hands on' : this.spanish ? 'Manos a la obra' : 'Mão na Massa'))));
                  }
                }
              }),
              menuSubItemsList))));
      }
      else {
        menuItemsList.push(h("a", { class: "menu-button", href: '#' + `${e.id}`, onClick: () => this.closeMenu(), "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'menu:conteudo-clique-item', "data-gtm-event-label": 'submenu:jornada-' + e.id },
          h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) })));
      }
    });
    menuItemsList.push(h("div", { id: "accordion-download" }));
    return h("menu", { class: `c-menu__items-wrapper ${animationClass}` },
      h("yduqs-accordion-group", { id: "accgroup-journey" },
        menuItemsList,
        " "));
  }
  //A função tem o objetivo de renderizar
  renderMenuMedia() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    // anchorPodcast
    var anchorLink = '#podcast-anchor-menu';
    //verifica se o settings está vazio
    if (this.settings !== undefined) {
      let indexModules = 0;
      if (!document.querySelector('module#apresentacao')) {
        indexModules = 1;
      }
      document.querySelectorAll('module').forEach((e) => {
        if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
          let menuSubItemsList = [];
          this.settings.modules.forEach((m) => {
            if (m.playlist !== undefined) {
              m.playlist.forEach((e, index) => {
                let modNum = parseInt(e.mod_num);
                if (e.type === 'playlist') {
                  var videoOrPlaylist = ' playlist_play';
                }
                else {
                  var videoOrPlaylist = ' ondemand_video';
                }
                if (modNum === indexModules) {
                  menuSubItemsList.push(h("a", { class: "c-menu__item-container", href: '#' + e.id, onClick: () => this.closeMenu() },
                    h("span", { class: "c-menu__item" },
                      h("span", { class: "c-menu__item c-menu__item--active" },
                        h("span", { class: "material-icons" },
                          " ",
                          videoOrPlaylist),
                        h("span", { id: 'mod' + modNum + 'title' + index, class: "c-menu__item-title", innerHTML: this.renderNameModule(e.title_video) })))));
                }
              });
            }
          });
          menuItemsList.push(h("yduqs-accordion", { outline: false },
            h("yduqs-accordion-pane", { "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'menu:conteudo-clique-item', "data-gtm-event-label": 'submenu:video-' + e.id },
              h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) }),
              h("div", { slot: "c-accordion-content" }, menuSubItemsList))));
        }
        indexModules++;
      });
      var moduloConclusao = document.querySelector('module#conclusao');
      if (moduloConclusao) {
        var hasPodcast = moduloConclusao.querySelector('yduqs-audio-player');
        if (hasPodcast) {
          menuItemsList.push(h("yduqs-accordion", { outline: false },
            h("yduqs-accordion-pane", null,
              h("span", { slot: "c-accordion-header" }, this.english ? 'Conclusion' : this.spanish ? 'Conclusión' : 'Conclusão'),
              h("div", { slot: "c-accordion-content" },
                h("a", { class: "c-menu__item-container", href: anchorLink, onClick: () => this.closeMenu() },
                  h("span", { class: "c-menu__item" },
                    h("span", { class: "c-menu__item c-menu__item--active" },
                      h("span", { class: "material-icons" }, "mic"),
                      h("span", null, "Podcast"))))))));
        }
      }
      return h("menu", { class: `c-menu__items-wrapper ${animationClass}` },
        h("yduqs-accordion-group", { id: "accgroup-media" }, menuItemsList));
    }
  }
  renderMenuActivity() {
    const menuItemsActivity = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    document.querySelectorAll('module').forEach(e => {
      var menuSubItemsList = [];
      if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
        menuItemsActivity.push(h("yduqs-accordion", { outline: false },
          h("yduqs-accordion-pane", { "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'menu:conteudo-clique-item', "data-gtm-event-label": 'submenu:atividade-' + e.id },
            h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) }),
            h("div", { slot: "c-accordion-content" },
              e.querySelectorAll('yduqs-questions, yduqs-teoria').forEach((f, index) => {
                if (f.getAttribute('question_id')) {
                  menuSubItemsList.push(h("a", { class: {
                      'c-menu__item-container': true
                    }, 
                    // href={'#' +`${ f.getAttribute('question_id') }`}
                    onClick: () => {
                      //fecha o menu
                      this.closeMenu(index);
                      //percorre para a posição do verificando aprendizado
                      f.scrollIntoView();
                    } },
                    h("span", { class: {
                        'c-menu__item': true,
                        'c-menu__item--active': (this._activeIndex === index)
                      } },
                      h("span", { class: "material-icons" }, "create"),
                      h("span", null, this.english ? 'Learning Check' : this.spanish ? 'Verificar el Aprendizaje' : 'Verificando Aprendizado'))));
                }
                else if (f.getAttribute('exercise_id')) {
                  menuSubItemsList.push(h("a", { class: {
                      'c-menu__item-container': true
                    }, 
                    // href={'#' +`${ f.getAttribute('question_id') }`}
                    onClick: () => {
                      this.closeMenu(index);
                      f.scrollIntoView();
                    } },
                    h("span", { class: {
                        'c-menu__item': true,
                        'c-menu__item--active': (this._activeIndex === index)
                      } },
                      h("span", { class: "material-icons" }, "create"),
                      h("span", null, this.english ? 'Hands on' : this.spanish ? 'Manos a la obra' : 'Mão na Massa'))));
                }
                else if (f.tagName == 'yduqs-teoria') {
                  menuSubItemsList.push(h("a", { class: {
                      'c-menu__item-container': true
                    }, href: '#' + `${f.getAttribute('question_id')}`, onClick: () => this.closeMenu(index) },
                    h("span", { class: {
                        'c-menu__item': true,
                        'c-menu__item--active': (this._activeIndex === index)
                      } },
                      h("span", { class: "material-icons" }, "create"),
                      h("span", null, this.english ? 'Theory in Practice' : this.spanish ? 'Teoría en la Práctica' : 'Teoria na Prática '))));
                }
              }),
              menuSubItemsList))));
      }
    });
    return h("menu", { class: `c-menu__items-wrapper ${animationClass}` },
      h("yduqs-accordion-group", { id: "accgroup-activities" },
        menuItemsActivity,
        " "));
  }
  //Função que inicia a renderização do menu
  getMenuRender() {
    return (h("div", { class: this._isOpen ? 'c-menu__modal__wrapper open' : 'c-menu__modal__wrapper' },
      h("div", { class: "c-menu__modal__overlay", onClick: () => this.closeMenu() }),
      h("div", { class: "c-menu__modal" },
        h("div", { class: "c-menu__modal__header" },
          h("button", { class: "c-menu__modal__header__btn-close", onClick: () => this.closeMenu() },
            h("div", { class: "c-menu__modal__header__btn-close-icon" },
              h("span", { class: "material-icons" }, "close")))),
        h("div", { class: "c-menu__modal__body" },
          h("div", { class: "c-menu__modal__body__tab col-12" },
            h("yduqs-tabs", { fixed_titles: true, darkmode: false, outlined: false, icons: ['map', 'video_library', 'create'], gtm_category: ['joana:[[instituicao]]:[[tipo-usuario]]', 'joana:[[instituicao]]:[[tipo-usuario]]', 'joana:[[instituicao]]:[[tipo-usuario]]'], gtm_action: ['menu:conteudo-clique-submenu', 'menu:conteudo-clique-submenu', 'menu:conteudo-clique-submenu'], gtm_label: ['jornada', 'video', 'atividades'] },
              h("yduqs-tab", { header: this.english ? 'Journey' : this.spanish ? 'Jornada' : 'Jornada', open: true }, this.renderMenuJorney()),
              h("yduqs-tab", { header: this.english ? 'Videos' : this.spanish ? 'Videos' : 'Vídeos' }, this.renderMenuMedia()),
              h("yduqs-tab", { header: this.english ? 'Activities' : this.spanish ? 'Actividades' : 'Atividades' }, this.renderMenuActivity())))))));
  }
  animate(state = false) {
    this._animate = state;
  }
  componentWillLoad() {
    const htmlTagMenu = document.querySelector('html');
    const htmlLanguageMenu = htmlTagMenu.getAttribute('lang');
    if (htmlLanguageMenu === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageMenu === 'es') {
      this.spanish = true;
    }
  }
  componentDidLoad() {
    // Ancoragem #podcast-anchor-menu em menu Media
    var anchorPodcast = document.querySelector('yduqs-audio-player');
    var spanEl = document.createElement("span");
    var spanElChild = anchorPodcast.appendChild(spanEl);
    spanElChild.setAttribute('id', 'podcast-anchor-menu');
    //Obtém o valor do atributo src 
    let linkPodcast = document.querySelector('yduqs-audio-player');
    let linkDownloadPodcast = linkPodcast.getAttribute('src');
    //Obtém o valor do atributo para download do pdf
    /* let linkPdf = document.querySelector('.c-footer-border a');
    let linkDownloadPDF = linkPdf.getAttribute('href'); */
    let menuItemsListDownload = '';
    menuItemsListDownload += ` <yduqs-accordion outline=false>
                                    <yduqs-accordion-pane>
                                        <span slot="c-accordion-header">Downloads</span>
                                        <div slot="c-accordion-content">

                                            <a class='c-menu__item-container'
                                                data-gtm-event-category='joana:[[instituicao]]:[[tipo-usuario]]'
                                                data-gtm-event-action='menu:conteudo-clique-item'
                                                data-gtm-event-label='download:download-podcast'                                 
                                                href="${linkDownloadPodcast}" download
                                            >

                                                <span class="c-menu__item">
                                                    <span class="c-menu__item">
                                                        <span class="material-icons">mic</span>
                                                        <span id="resource">Podcast</span>
                                                        <span class="material-icons icon-right">file_download</span>
                                                    </span>
                                                </span>
                                            </a>

                                            <a class="c-menu__item-container"
                                                href="javascript:CriaPDF()" 
                                                data-gtm-event-category='joana:[[instituicao]]:[[tipo-usuario]]'
                                                data-gtm-event-action='menu:conteudo-clique-item'
                                                data-gtm-event-label='download:download-pdf'                                                
                                            >

                                                <span class="c-menu__item">
                                                    <span class="c-menu__item">
                                                        <span class="material-icons">attachment</span>
                                                        <span id="resource">${this.english ? 'Content PDF' : this.spanish ? 'Contenido PDF' : 'PDF do conteúdo'}</span>
                                                        <span class="icon-right material-icons">file_download_done</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </yduqs-accordion-pane>
                                </yduqs-accordion>`;
    document.getElementById('accordion-download').innerHTML = menuItemsListDownload;
  }
  componentDidRender() {
    // Fechador de collapses
    /* const accordionGroup = document.querySelectorAll('menu.c-menu__items-wrapper');

    accordionGroup.forEach(aG => {

        let btsAccordion = aG.querySelectorAll('yduqs-accordion-pane button');

        btsAccordion.forEach((bt,i) => {
            let accGroup = bt.closest('yduqs-accordion-group');
            let accGroupId = accGroup.getAttribute('id');
            bt.setAttribute('onclick', 'accControl("' + accGroupId + '/' + i + '");')

            let accPane = bt.closest('yduqs-accordion-pane');
            accPane.setAttribute('id', accGroupId + '-' + i)

        });
    }); */
  }
  render() {
    const deviceClass = this._isMobile ? 'mobile' : 'desktop';
    const openIconClass = this._isOpen ? 'open' : '';
    return (h(Host, { class: `c-menu ${deviceClass}` },
      h("div", { class: "c-menu__floating-btn__container" },
        h("button", { class: "c-menu__floating-btn", onClick: () => this.openMenu(), "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'menu:conteudo-clique-menu', "data-gtm-event-label": 'abrir-menu' },
          h("div", { class: `c-menu__floating-icon ${openIconClass}` },
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" })))),
      this.getMenuRender()));
  }
  static get is() { return "yduqs-menu"; }
  static get properties() { return {
    "settings": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "YduqsMenuModel",
        "resolved": "YduqsMenuModel",
        "references": {
          "YduqsMenuModel": {
            "location": "import",
            "path": "./yduqs-menu.model"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "position": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "position",
      "reflect": false
    },
    "english": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "english",
      "reflect": false,
      "defaultValue": "false"
    },
    "spanish": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "spanish",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "_isMobile": {},
    "_isOpen": {},
    "_isOpenGallery": {},
    "_isActive": {},
    "_animate": {},
    "_activeIndex": {},
    "_videoModule": {},
    "_menuDeskContainerWidth": {}
  }; }
  static get events() { return [{
      "method": "onChangeMenuData",
      "name": "changemenudata",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "onClickMenuItem",
      "name": "clickmenuitem",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "initialize": {
      "complexType": {
        "signature": "(config: YduqsMenuModel) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "YduqsMenuModel": {
            "location": "import",
            "path": "./yduqs-menu.model"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "position",
      "methodName": "watchHandler"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
