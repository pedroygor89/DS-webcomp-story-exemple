import { r as registerInstance, i as createEvent, h, e as Host, g as getElement } from './index-5acc1e77.js';
import { i as i18n } from './i18n-b16b05ee.js';

const mobileBreakpoint = 578;
const YduqsMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onChangeMenuData = createEvent(this, "changemenudata", 7);
    this.onClickMenuItem = createEvent(this, "clickmenuitem", 7);
    this.onClickMenuTitle = createEvent(this, "onClickMenuTitle", 7);
    this._isMobile = window.innerWidth < mobileBreakpoint;
    this._isOpen = false;
    this._isOpenGallery = false;
    this._isActive = false;
    this._animate = false;
    this._activeIndex = 0;
    this._videoModule = 1;
    this.videoItems = { "modules": [] };
    this.english = false;
    this.spanish = false;
    this.hide_search = false;
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
  //Metodo que abre a galeria de video e passa o id do video para a galeria.
  async openGalleryVideo(video) {
    let modal_galeria = this.el.querySelector('yduqs-modal');
    modal_galeria.isopen = true;
    let galeria = this.el.querySelector('yduqs-gallery-video');
    galeria.changeVideoExternal(video);
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
  updateActiveItem() {
    this._activeIndex = this.position;
  }
  renderActiveMarker() {
    return h("span", { class: "c-menu__active-marker" });
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
      else if (name == 'conclusao' || name == 'Módulo conclusao') {
        current_name = this.english ? 'Conclusion' : this.spanish ? 'Conclusión' : 'Conclusão';
      }
      else {
        current_name = (name === null || name === void 0 ? void 0 : name.charAt(0).toUpperCase()) + (name === null || name === void 0 ? void 0 : name.slice(1));
      }
    }
    return current_name;
  }
  getNextSiblings(elem) {
    const sibs = [];
    while ((elem = elem.nextSibling)) {
      if (elem.nodeType === 3 || elem.nodeType === 8)
        continue; // text node
      sibs.push(elem);
      //if (!filter || filter(elem)) sibs.push(elem);
    }
    return sibs;
  }
  videosLoad() {
    document.querySelectorAll('module').forEach(currentModule => {
      //pega somente o numero do modulo
      let moduleId = currentModule.id.replace("modulo", "");
      let module = 'modulo_' + moduleId;
      let playlist = [];
      //Pega os yduqs-video-player no HTML
      currentModule.querySelectorAll('yduqs-video-player').forEach((videosHtml, indexVideo) => {
        let videoChildModuleVideo = videosHtml.closest('yduqs-module-video');
        let videoChildGallery = videosHtml.closest('yduqs-gallery-video');
        let videoChildQuestion = videosHtml.closest('yduqs-questions');
        let videoChildTeoria = videosHtml.closest('yduqs-teoria');
        //verifica se o yduqs-video-player está dentro de outro compoenente de video
        if (!videoChildTeoria && !videoChildModuleVideo && !videoChildGallery && !videoChildQuestion) {
          let closestContainer = videosHtml.closest('.container');
          let closestTitle = closestContainer.querySelector('yduqs-title');
          let nameVideo = closestTitle === null || closestTitle === void 0 ? void 0 : closestTitle.topic_title;
          let anchor = `mod-${moduleId}-vid-${indexVideo}`;
          playlist.push({
            'id': anchor,
            'title_video': nameVideo,
            'subtitle_video': "",
            'thumb_video': "https://stensineme.blob.core.windows.net/designsystem/test/vid1.png",
            'link_video': videosHtml.src,
            'paragraph': "",
            'time': "",
            'border_bottom': false,
            'type': 'Video'
          });
        }
        else if (videoChildTeoria) {
          let anchor = 'mod' + moduleId + 'vid' + indexVideo;
          let title_video = this.english ? 'Theory in Practice' : this.spanish ? 'Teoría en la Práctica' : 'Teoria na Prática';
          playlist.push({
            'id': anchor,
            'title_video': title_video,
            'subtitle_video': "",
            'thumb_video': "https://stensineme.blob.core.windows.net/designsystem/test/vid1.png",
            'link_video': videosHtml.src,
            'paragraph': "",
            'time': "",
            'border_bottom': false,
            'type': 'Video'
          });
        }
      });
      this.videoItems.modules.push({
        'module': module,
        'playlist': playlist
      });
    });
  }
  jsonLoad() {
    let module_video = document.querySelector('yduqs-module-video');
    if (module_video) {
      // Verifica o ambiente dev ou prod para carregar o arquivo json
      if (document.body.classList.contains('template_recursos')) {
        var jsonLocation = 'https://stensineme.blob.core.windows.net/designsystem/test/playlist_teste.json';
      }
      else {
        var jsonLocation = './json/videos.json';
      }
      // Associa o arquivo Json e faz o merge com os videos do html
      fetch(jsonLocation)
        .then(response => response.json())
        .then(async (json) => {
        await json.modules.forEach(videosJson => {
          this.videoItems.modules.forEach((videoItem, videoItemIndex) => {
            if (videosJson.module == videoItem.module) {
              this.videoItems.modules[videoItemIndex].playlist = this.videoItems.modules[videoItemIndex].playlist.concat(videosJson.playlist);
            }
          });
        });
      });
    }
  }
  renderMenuJorney() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    document.querySelectorAll('module').forEach((e, i) => {
      var menuSubItemsList = [];
      //Pega o nó do título do yduqs-module-cover
      i--;
      var titleAll = document.querySelectorAll('.titles h2');
      var titleModuloCover = Array.prototype.map.call(titleAll, function (t) {
        return t.textContent;
      });
      if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
        menuItemsList.push(h("yduqs-accordion", { outline: false }, h("yduqs-accordion-pane", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": 'submenu:jornada-' + e.id }, h("span", { slot: "c-accordion-header" }, h("span", { innerHTML: this.renderNameModule(e.id) }), h("p", { class: "module-subtitle-menu", innerHTML: titleModuloCover[i] })), h("div", { slot: "c-accordion-content" }, e.querySelectorAll('yduqs-title, yduqs-questions, yduqs-teoria, yduqs-atividade-discursiva, .bgLigandoPontos').forEach((f, index) => {
          if (f.classList.contains('bgLigandoPontos')) {
            let skipMenu = f.getAttribute('skip-menu');
            if (!skipMenu) {
              menuSubItemsList.push(h("a", { class: {
                  'c-menu__item-container': true,
                }, onClick: () => {
                  this.onClickMenuTitle.emit(f);
                  this.closeMenu(index);
                  f.scrollIntoView();
                } }, h("span", { class: {
                  'c-menu__item': true,
                  'c-menu__item--active': this._activeIndex === index,
                } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Connecting the dots' : this.spanish ? 'Conectando los Puntos' : 'Ligando os Pontos'))));
            }
          }
          //Verifica se o elemento está dentro do ligando os pontos (Se estiver aparece apenas o item ligando os pontos no menu)
          if (!f.closest('.bgLigandoPontos')) {
            if (f.tagName == 'YDUQS-TITLE') {
              let skipMenu = f.getAttribute('skip-menu');
              if (!skipMenu) {
                let insidePlaylist = f.closest('.container');
                if (insidePlaylist !== null) {
                  var verifyModuleVideo = insidePlaylist.querySelector('yduqs-module-video');
                  var verifyQuestion = insidePlaylist.querySelector('yduqs-questions');
                  var verifyActivities = insidePlaylist.querySelector('yduqs-atividade-discursiva');
                  var topicIcon = f.getAttribute('topic_icon');
                  if (verifyActivities === null &&
                    verifyQuestion === null &&
                    verifyModuleVideo === null &&
                    topicIcon !== 'video_library' &&
                    topicIcon !== 'ondemand_video' &&
                    topicIcon !== 'headset' &&
                    topicIcon !== 'note_alt_black') {
                    menuSubItemsList.push(h("a", { class: {
                        'c-menu__item-container': true,
                      }, onClick: () => {
                        this.onClickMenuTitle.emit(f);
                        this.closeMenu(index);
                        f.scrollIntoView();
                      } }, h("span", { class: {
                        'c-menu__item': true,
                        'c-menu__item--active': this._activeIndex === index,
                      } }, h("span", { class: "material-icons" }, " library_books"), h("span", { innerHTML: f.getAttribute('topic_title') }))));
                  }
                }
              }
            }
            else if (f.tagName == 'YDUQS-QUESTIONS') {
              if (f.getAttribute('question_id')) {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(h("a", { class: {
                      'c-menu__item-container': true,
                    }, onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index);
                      f.scrollIntoView();
                    } }, h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index,
                    } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Learning Check' : this.spanish ? 'Verificar el Aprendizaje' : 'Verificando Aprendizado'))));
                }
              }
              else if (f.getAttribute('exercise_id')) {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' +`${ f.getAttribute('question_id') }`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index);
                      f.scrollIntoView();
                    } }, h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index,
                    } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Hands on' : this.spanish ? 'Manos a la obra' : 'Mão na Massa'))));
                }
              }
            }
            else if (f.tagName == 'YDUQS-TEORIA') {
              let skipMenu = f.getAttribute('skip-menu');
              if (!skipMenu) {
                menuSubItemsList.push(h("a", { class: {
                    'c-menu__item-container': true,
                  },
                  // href={'#' + `${f.getAttribute('question_id')}`}
                  onClick: () => {
                    this.onClickMenuTitle.emit(f);
                    this.closeMenu(index);
                    f.scrollIntoView();
                  } }, h("span", { class: {
                    'c-menu__item': true,
                    'c-menu__item--active': this._activeIndex === index,
                  } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Theory in Practice' : this.spanish ? 'Teoría en la Práctica' : 'Teoria na Prática '))));
              }
            }
            else if (f.tagName == 'YDUQS-ATIVIDADE-DISCURSIVA') {
              let skipMenu = f.getAttribute('skip-menu');
              if (!skipMenu) {
                menuSubItemsList.push(h("a", { class: {
                    'c-menu__item-container': true,
                  },
                  // href={'#' + `${f.getAttribute('question_id')}`}
                  onClick: () => {
                    this.onClickMenuTitle.emit(f);
                    this.closeMenu(index);
                    f.scrollIntoView();
                  } }, h("span", { class: {
                    'c-menu__item': true,
                    'c-menu__item--active': this._activeIndex === index,
                  } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Discursive Activity' : this.spanish ? 'Actividad Discursiva' : 'Atividade Discursiva'))));
              }
            }
          }
        }), ...menuSubItemsList))));
      }
      else {
        menuItemsList.push(h("a", { class: "menu-button", href: '#' + `${e.id}`, onClick: () => {
            const firstElement = Array.from(e.childNodes).filter(child => !(child.nodeType === 3 || child.nodeType === 8))[0];
            this.onClickMenuTitle.emit(firstElement || e);
            this.closeMenu();
          }, "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": 'submenu:jornada-' + e.id }, h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) })));
      }
    });
    menuItemsList.push(h("div", { id: "accordion-download" }, this.getRenderDowloads()));
    return (h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, h("yduqs-accordion-group", { id: "accgroup-journey" }, ...menuItemsList, " ")));
  }
  //A função tem o objetivo de renderizar
  renderMenuMedia() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    var titleAll = document.querySelectorAll('.titles h2');
    this._titleModuloCover = Array.prototype.map.call(titleAll, function (t) {
      return t.textContent;
    });
    this.settings.modules.forEach((e, indexModule) => {
      let menuSubItemsList = [];
      let indexPlaylist = 0;
      let modNum = e.module.replace('modulo_', '');
      if (modNum !== 'apresentacao' && modNum !== 'conclusao' && modNum !== 'introducao') {
        let menuSubItemsList = [];
        let indexPlaylist = 0;
        let modNum = e.module.replace('modulo_', '');
        e.playlist.forEach((n, indexN) => {
          let modNum = e.module.replace('modulo_', '');
          if (n.type === 'Video') {
            n.id = `mod-${modNum}-vid-${indexN}`;
          }
          else {
            n.id = `mod-${modNum}-pl-${indexPlaylist}`;
            indexPlaylist++;
          }
        });
        e.playlist.forEach(n => {
          if (n.type === 'Video') {
            var videoOrPlaylist = ' ondemand_video';
          }
          else {
            var videoOrPlaylist = ' playlist_play';
          }
          menuSubItemsList.push(h("a", { "data-gtm-event-category": ':[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'menu:conteudo-clique-item', "data-gtm-event-label": 'acessar-video', class: "c-menu__item-container", onClick: () => {
              this.closeMenu();
              this.openGalleryVideo(n);
            } }, h("span", { class: "c-menu__item" }, h("span", { class: "c-menu__item c-menu__item--active" }, h("span", { class: "material-icons" }, " ", videoOrPlaylist), h("span", { id: n.id, class: "c-menu__item-title", innerHTML: this.renderNameModule(n.title_video) })))));
        });
        menuItemsList.push(h("yduqs-accordion", { id: 'menu-accordion-video-' + indexModule, outline: false }, h("yduqs-accordion-pane", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": 'submenu:video-' + modNum }, h("span", { slot: "c-accordion-header", innerHTML: modNum == 'apresentacao' ? this.renderNameModule(i18n('pager.apresentacao')) : modNum == 'conclusao' ? this.renderNameModule(i18n('pager.conclusao')) : this.renderNameModule(i18n('pager.modulo') + ' ' + modNum) }, h("p", { class: "module-subtitle-menu", innerHTML: (this._titleModuloCover && this._titleModuloCover[indexModule - 1]) || '' })), h("div", { slot: "c-accordion-content" }, ...menuSubItemsList))));
        let thisAcc = document.getElementById('menu-accordion-video-' + indexModule);
        if (menuSubItemsList.length === 0 && thisAcc !== null) {
          thisAcc.remove();
        }
      }
      else {
        e.playlist.forEach((n, indexN) => {
          let modNum = e.module.replace('modulo_', '');
          if (n.type === 'Video') {
            n.id = `mod-${modNum}-vid-${indexN}`;
          }
          else {
            n.id = `mod-${modNum}-pl-${indexPlaylist}`;
            indexPlaylist++;
          }
        });
        e.playlist.forEach(n => {
          if (n.type === 'Video') {
            var videoOrPlaylist = ' ondemand_video';
          }
          else {
            var videoOrPlaylist = ' playlist_play';
          }
          menuSubItemsList.push(h("a", { class: "c-menu__item-container", onClick: () => {
              this.closeMenu();
              this.openGalleryVideo(n);
            } }, h("span", { class: "c-menu__item" }, h("span", { class: "c-menu__item c-menu__item--active" }, h("span", { class: "material-icons" }, " ", videoOrPlaylist), h("span", { id: n.id, class: "c-menu__item-title", innerHTML: this.renderNameModule(n.title_video) })))));
        });
        if (e.playlist && e.playlist.length > 0) {
          menuItemsList.push(h("yduqs-accordion", { id: 'menu-accordion-video-' + indexModule, outline: false }, h("yduqs-accordion-pane", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": 'submenu:video-' + modNum }, h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule('Módulo ' + modNum) }), h("div", { slot: "c-accordion-content" }, ...menuSubItemsList))));
          let thisAcc = document.getElementById('menu-accordion-video-' + indexModule);
          if (menuSubItemsList.length === 0 && thisAcc !== null) {
            thisAcc.remove();
          }
        }
      }
    });
    return (h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, h("yduqs-accordion-group", { id: "accgroup-media" }, ...menuItemsList)));
  }
  renderMenuActivity() {
    const menuItemsActivity = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    document.querySelectorAll('module').forEach((e, accCount) => {
      var menuSubItemsList = [];
      if (e.id !== 'apresentacao' && e.id !== 'conclusao' && e.id !== 'introducao') {
        menuItemsActivity.push(h("yduqs-accordion", { id: 'menu-accordion-' + accCount, outline: false }, h("yduqs-accordion-pane", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": 'submenu:atividade-' + e.id }, h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) }, h("p", { class: "module-subtitle-menu", innerHTML: (this._titleModuloCover && this._titleModuloCover[accCount - 1]) || '' })), h("div", { slot: "c-accordion-content" }, e.querySelectorAll('yduqs-questions, yduqs-teoria, yduqs-atividade-discursiva, .bgLigandoPontos').forEach((f, index) => {
          let skipMenu = f.getAttribute('skip-menu');
          if (!skipMenu) {
            if (f.classList.contains('bgLigandoPontos')) {
              menuSubItemsList.push(h("a", { class: {
                  'c-menu__item-container': true,
                }, onClick: () => {
                  this.onClickMenuTitle.emit(f);
                  this.closeMenu(index);
                  f.scrollIntoView();
                } }, h("span", { class: {
                  'c-menu__item': true,
                  'c-menu__item--active': this._activeIndex === index,
                } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Connecting the dots' : this.spanish ? 'Relacionando los puntos' : 'Ligando os Pontos'))));
            }
            //Verifica se o elemento está dentro do ligando os pontos (Se estiver aparece apenas o item ligando os pontos no menu)
            if (!f.closest('.bgLigandoPontos')) {
              if (f.getAttribute('question_id')) {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' +`${ f.getAttribute('question_id') }`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      //fecha o menu
                      this.closeMenu(index);
                      //percorre para a posição do verificando aprendizado
                      f.scrollIntoView();
                    } }, h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index,
                    } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Learning Check' : this.spanish ? 'Verificar el Aprendizaje' : 'Verificando Aprendizado'))));
                }
              }
              else if (f.getAttribute('exercise_id')) {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' +`${ f.getAttribute('question_id') }`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index);
                      f.scrollIntoView();
                    } }, h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index,
                    } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Hands on' : this.spanish ? 'Manos a la obra' : 'Mão na Massa'))));
                }
              }
              else if (f.tagName == 'YDUQS-TEORIA') {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' + `${f.getAttribute('question_id')}`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index);
                      f.scrollIntoView();
                    } }, h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index,
                    } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Theory in Practice' : this.spanish ? 'Teoría en la Práctica' : 'Teoria na Prática '))));
                }
              }
              else if (f.tagName == 'YDUQS-ATIVIDADE-DISCURSIVA') {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' + `${f.getAttribute('question_id')}`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index);
                      f.scrollIntoView();
                    } }, h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index,
                    } }, h("span", { class: "material-icons" }, "create"), h("span", null, this.english ? 'Discursive Activity' : this.spanish ? 'Actividad Discursiva' : 'Atividade Discursiva'))));
                }
              }
            }
          }
        }), ...menuSubItemsList))));
        let thisAcc = document.getElementById('menu-accordion-' + accCount);
        if (menuSubItemsList.length === 0 && thisAcc !== null) {
          thisAcc.remove();
        }
      }
    });
    return (h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, h("yduqs-accordion-group", { id: "accgroup-activities" }, ...menuItemsActivity, " ")));
  }
  //Função que inicia a renderização do menu
  getMenuRender() {
    // Verificação de Vídeos
    const verifyModuleVideo = document.body.querySelectorAll('yduqs-module-video').length;
    const verifyModuleVideoSkipped = document.body.querySelectorAll('yduqs-module-video[skip-menu="true"]').length;
    const verifyModuleVideoResult = verifyModuleVideo - verifyModuleVideoSkipped;
    const verifyModuleVideoInner = document.body.querySelectorAll('yduqs-module-video yduqs-video-player').length;
    const verifyVideoPlayer = document.body.querySelectorAll('yduqs-video-player').length;
    const verifyVideoPlayerSkipped = document.body.querySelectorAll('yduqs-video-player[skip-menu="true"]').length;
    const verifyVideoPlayerResult = verifyVideoPlayer - verifyVideoPlayerSkipped - verifyModuleVideoInner;
    const verifyVideos = verifyModuleVideoResult + verifyVideoPlayerResult;
    // Verificação de Atividades
    const verifyQuestion = document.body.querySelectorAll('yduqs-questions').length;
    const verifyQuestionSkipped = document.body.querySelectorAll('yduqs-questions[skip-menu="true"]').length;
    const verifyQuestionResult = verifyQuestion - verifyQuestionSkipped;
    const verifyDiscursiva = document.body.querySelectorAll('yduqs-atividade-discursiva').length;
    const verifyDiscursivaSkipped = document.body.querySelectorAll('yduqs-atividade-discursiva[skip-menu="true"]').length;
    const verifyDiscursivaResult = verifyDiscursiva - verifyDiscursivaSkipped;
    const verifyTeoria = document.body.querySelectorAll('yduqs-teoria').length;
    const verifyTeoriaSkipped = document.body.querySelectorAll('yduqs-teoria[skip-menu="true"]').length;
    const verifyTeoriaResult = verifyTeoria - verifyTeoriaSkipped;
    const verifyLigando = document.body.querySelectorAll('.bgLigandoPontos').length;
    const verifyLigandoSkipped = document.body.querySelectorAll('.bgLigandoPontos[skip-menu="true"]').length;
    const verifyLigandoResult = verifyLigando - verifyLigandoSkipped;
    const verifyAtividades = verifyQuestionResult + verifyDiscursivaResult + verifyTeoriaResult + verifyLigandoResult;
    let headerJorney = this.english ? 'Journey' : this.spanish ? 'Jornada' : 'Jornada';
    let headerMedia = this.english ? 'Videos' : this.spanish ? 'Videos' : 'Vídeos';
    let headerActivity = this.english ? 'Activities' : this.spanish ? 'Actividades' : 'Atividades';
    return (h("div", { class: this._isOpen ? 'c-menu__modal__wrapper open' : 'c-menu__modal__wrapper' }, h("div", { class: "c-menu__modal__overlay", onClick: () => this.closeMenu() }), h("div", { class: "c-menu__modal" }, h("div", { class: "c-menu__modal__header" }, h("button", { class: "c-menu__modal__header__btn-close", onClick: () => this.closeMenu() }, h("div", { class: "c-menu__modal__header__btn-close-icon" }, h("span", { class: "material-icons" }, "close")))), h("div", { class: "c-menu__modal__body" }, h("div", { class: "c-menu__modal__body__tab col-12" }, h("yduqs-tabs", { fixed_titles: true, darkmode: false, outlined: false, icons: ['map', 'video_library', 'create'], gtm_category: [':[[instituicao]]:[[tipo-usuario]]', ':[[instituicao]]:[[tipo-usuario]]', ':[[instituicao]]:[[tipo-usuario]]'], gtm_action: ['menu:conteudo-clique-submenu', 'menu:conteudo-clique-submenu', 'menu:conteudo-clique-submenu'], gtm_label: ['jornada', 'videos', 'atividades'] }, h("yduqs-tab", { header: headerJorney, open: true }, this.renderMenuJorney()), verifyVideos > 0 && (h("yduqs-tab", { header: headerMedia }, this.renderMenuMedia())), verifyAtividades > 0 && (h("yduqs-tab", { header: headerActivity }, this.renderMenuActivity()))))))));
  }
  animate(state = false) {
    this._animate = state;
  }
  async componentWillLoad() {
    const htmlTagMenu = document.querySelector('html');
    const htmlLanguageMenu = htmlTagMenu.getAttribute('lang');
    if (htmlLanguageMenu === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageMenu === 'es') {
      this.spanish = true;
    }
    await this.videosLoad();
    await this.jsonLoad();
    this.initialize(this.videoItems);
  }
  getRenderDowloads() {
    const podcastItems = [];
    document.querySelectorAll('yduqs-audio-player').forEach(podcast => {
      podcastItems.push(h("a", { class: "c-menu__item-container", "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": "download:download-podcast", href: podcast.src, download: true }, h("span", { class: "c-menu__item" }, h("span", { class: "c-menu__item" }, h("span", { class: "material-icons" }, "mic"), h("span", { id: "resource" }, "Podcast"), h("span", { class: "material-icons icon-right" }, "file_download")))));
    });
    return (h("yduqs-accordion", { outline: false }, h("yduqs-accordion-pane", null, h("span", { slot: "c-accordion-header" }, "Downloads"), h("div", { slot: "c-accordion-content" }, ...podcastItems, h("a", { class: "c-menu__item-container", href: "javascript:CriaPDF()", "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": "download:download-pdf" }, h("span", { class: "c-menu__item" }, h("span", { class: "c-menu__item" }, h("span", { class: "material-icons" }, "attachment"), h("span", { id: "resource" }, this.english ? 'Content PDF' : this.spanish ? 'Contenido PDF' : 'PDF do conteúdo'), h("span", { class: "icon-right material-icons" }, "file_download_done"))))))));
  }
  componentDidLoad() {
    // Ancoragem #podcast-anchor-menu em menu Media
    document.querySelectorAll('yduqs-audio-player').forEach((anchorPodcast, index) => {
      var spanEl = document.createElement('span');
      var spanElChild = anchorPodcast.appendChild(spanEl);
      spanElChild.setAttribute('id', 'podcast-anchor-menu-' + index);
    });
  }
  render() {
    const deviceClass = this._isMobile ? 'mobile' : 'desktop';
    const openIconClass = this._isOpen ? 'open' : '';
    return (h(Host, { class: `c-menu ${deviceClass}` }, h("div", { class: "c-menu__floating-btn__container" }, h("button", { class: "c-menu__floating-btn", onClick: () => this.openMenu(), "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-menu", "data-gtm-event-label": "abrir-menu" }, h("div", { class: `c-menu__floating-icon ${openIconClass}` }, h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" }))), !this.hide_search && h("yduqs-search-bar", null)), this.getMenuRender(), h("yduqs-modal", { id: `modal-gallery-menu` }, h("div", { class: "container" }, h("yduqs-gallery-video", { id: "gallery", module_number: 0, title_gallery: `` })))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "position": ["watchHandler"]
  }; }
};

export { YduqsMenu as yduqs_menu };
