'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');
const i18n = require('./i18n-b31dba28.js');

const GalleryVideo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.module_number = 0;
    this.module_number_video = 0;
    this.type_video = '';
    this.english = false;
    this.spanish = false;
    this.scrollModules = undefined;
    this.template_doktor = false;
  }
  async changeVideo(src) {
    this.srcVideo = src;
  }
  async changeModule(numMod) {
    this.moduleId = numMod == 'apresentacao' ? 99 : numMod == 'conclusao' ? 100 : numMod;
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
    this.moduleId = mod == 'apresentacao' ? 99 : mod == 'conclusao' ? 100 : mod;
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
        document.removeEventListener('touchmove', touchMoveHandler);
        document.removeEventListener('touchstart', touchStartHandler);
        document.removeEventListener('touchend', touchEndHandler);
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
        document.addEventListener('touchmove', touchMoveHandler);
        document.addEventListener('touchend', touchEndHandler);
      };
      ele.addEventListener('touchstart', touchStartHandler);
    });
  }
  renderButtonsMenu() {
    const listButtonsMenu = [];
    listButtonsMenu.push(index.h("div", { class: "module-button bt-mod-0 activated", id: "all", "data-gtm-event-category": ":[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "galeria-video:conteudo-clique-botao", "data-gtm-event-label": "trocar-modulo", onClick: event => {
        this.changeModule(0);
        event.stopPropagation();
      } }, index.h("p", null, i18n.i18n('pager.todos'))));
    document.querySelectorAll('module').forEach(mod => {
      let select_apresentation = document.getElementById('apresentacao');
      let video_apresentation = select_apresentation.querySelectorAll('yduqs-video-player');
      let select_conclusion = document.getElementById('conclusao');
      let video_conclusion = select_conclusion.querySelectorAll('yduqs-video-player');
      let module_video_conclusion = select_conclusion.querySelectorAll('yduqs-module-video');
      if (video_apresentation.length !== 0 && mod.id !== 'conclusao') {
        listButtonsMenu.push(index.h("div", { class: `module-button bt-mod-${mod.id.replace('modulo', '')}`, "data-gtm-event-category": ":[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "galeria-video:conteudo-clique-botao", "data-gtm-event-label": "trocar-modulo", onClick: event => {
            this.changeModule(mod.id.replace('modulo', ''));
            event.stopPropagation();
          } }, index.h("p", null, this.renderNameModule(mod.id))));
      }
      else if ((module_video_conclusion.length !== 0 || video_conclusion.length !== 0) && mod.id !== 'apresentacao') {
        listButtonsMenu.push(index.h("div", { class: `issomesmo module-button bt-mod-${mod.id.replace('modulo', '')}`, "data-gtm-event-category": ":[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "galeria-video:conteudo-clique-botao", "data-gtm-event-label": "trocar-modulo", onClick: event => {
            this.changeModule(mod.id.replace('modulo', ''));
            event.stopPropagation();
          } }, index.h("p", null, this.renderNameModule(mod.id))));
      }
      else if (mod.id !== 'apresentacao' && mod.id !== 'conclusao') {
        listButtonsMenu.push(index.h("div", { class: `module-button bt-mod-${mod.id.replace('modulo', '')}`, "data-gtm-event-category": ":[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "galeria-video:conteudo-clique-botao", "data-gtm-event-label": "trocar-modulo", onClick: event => {
            this.changeModule(mod.id.replace('modulo', ''));
            event.stopPropagation();
          } }, index.h("p", null, this.renderNameModule(mod.id))));
      }
    });
    return (index.h("div", { id: "box-modules-buttons", class: "modules-wrapper" }, ...listButtonsMenu));
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
      let diff_size = pos_final - pos_initial + scroll_left;
      var total_size = diff_size.toFixed();
      const scroll_actual = parseInt(total_size);
      if (scroll_left == 0) {
        before_button.classList.add('d-none');
      }
      else {
        before_button.classList.remove('d-none');
      }
      if (scroll_size - 50 <= width_size || (scroll_actual === scroll_size && scroll_left != 0)) {
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
        diff_size = pos_final - pos_initial + scroll_left;
        var total_size = diff_size.toFixed();
        const scroll_actual = parseInt(total_size);
        if (scroll_left == 0) {
          before_button.classList.add('d-none');
        }
        else {
          before_button.classList.remove('d-none');
        }
        if (scroll_size <= width_size || (scroll_actual == scroll_size && scroll_left != 0)) {
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
      let diff_size = pos_final - pos_initial + scroll_left;
      var total_size = diff_size.toFixed();
      const scroll_actual = parseInt(total_size);
      if (scroll_left == 0) {
        before_button_mob.classList.add('d-none');
      }
      else {
        before_button_mob.classList.remove('d-none');
      }
      if (scroll_size - 50 <= width_size || (scroll_actual === scroll_size && scroll_left != 0)) {
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
        diff_size = pos_final - pos_initial + scroll_left;
        var total_size = diff_size.toFixed();
        const scroll_actual = parseInt(total_size);
        if (scroll_left == 0) {
          before_button_mob.classList.add('d-none');
        }
        else {
          before_button_mob.classList.remove('d-none');
        }
        if (scroll_size <= width_size || (scroll_actual == scroll_size && scroll_left != 0)) {
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
    let isDoktor = document.body.classList.contains('template-doktor');
    if (isDoktor) {
      this.template_doktor = true;
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
    return (index.h("div", { class: "c-gallery-video" }, index.h("div", { class: "c-gallery-video__header d-none d-lg-inline" }, index.h("h5", null, this.module_number_video == 0
      ? i18n.i18n('pager.todos')
      : this.module_number_video == 99
        ? i18n.i18n('pager.apresentacao')
        : this.module_number_video == 100
          ? i18n.i18n('pager.conclusao')
          : i18n.i18n('pager.modulo') + ' ' + this.module_number_video), index.h("div", { class: "box-modules d-flex" }, index.h("h1", { class: "col-12 col-lg-8 col-xxl-9", innerHTML: this.title_gallery }), index.h("div", { class: "module-navigation d-flex col-lg-4 col-xxl-3" }, index.h("div", { class: `module-button-navigation before`, id: "before", onClick: () => {
        this.prevScroll();
      } }, index.h("span", { class: "material-icons" }, "keyboard_arrow_left")), this.renderButtonsMenu(), index.h("div", { class: `module-button-navigation after`, id: "after", onClick: () => {
        this.nextScroll();
      } }, index.h("span", { class: "material-icons" }, "keyboard_arrow_right"))))), index.h("div", { class: "c-gallery-video__content" }, index.h("div", { class: "c-gallery-video__content_videos col-12 col-lg-8 col-xxl-9" }, index.h("div", { class: "close-modal d-lg-none d-xl-none d-sxl-none", onClick: () => {
        this.closeModalGallery();
      } }, index.h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#fff" }))), index.h("div", { class: "c-gallery-video__content_videos_video" }, index.h("yduqs-video-player", { "skip-menu": "true", src: this.srcVideo, videoId: "", width: "", height: "" })), index.h("div", { class: "c-gallery-video__header d-inline d-lg-none" }, index.h("h5", null, this.module_number_video == 0
      ? i18n.i18n('pager.todos')
      : this.module_number_video == 99
        ? i18n.i18n('pager.apresentacao')
        : this.module_number_video == 100
          ? i18n.i18n('pager.conclusao')
          : i18n.i18n('pager.modulo') + ' ' + this.module_number_video), index.h("div", { class: "box-modules d-flex flex-column" }, index.h("h1", { class: "col-lg-8 col-xxl-9", innerHTML: this.title_gallery }), index.h("div", { class: "d-flex module-navigation-mob" }, index.h("div", { class: `module-button-navigation before-mob`, id: "before", onClick: () => {
        this.prevScroll();
      } }, index.h("span", { class: "material-icons" }, "keyboard_arrow_left")), this.renderButtonsMenu(), index.h("div", { class: `module-button-navigation after-mob`, id: "after", onClick: () => {
        this.nextScroll();
      } }, index.h("span", { class: "material-icons" }, "keyboard_arrow_right")))))), index.h("div", { class: "c-gallery-video__content_playlist col-12 col-lg-4 col-xxl-3" }, index.h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number })))));
  }
  get el() { return index.getElement(this); }
};

const PlaylistVideo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.module_number = 0;
    this.videoItems = { "modules": [] };
    this.videoSelected = '';
    this.english = false;
    this.spanish = false;
  }
  async initialize(config) {
    this.settings = config;
  }
  //Muda o Video da Galeria.
  async changeVideoGallery(video) {
    document.querySelectorAll('yduqs-gallery-video').forEach(gallery => {
      gallery.srcVideo = video.link_video;
      this.moduleId = video.id.split('-')[1] == "apresentacao" ? 99 : video.id.split('-')[1] == "conclusao" ? 100 : video.id.split('-')[1];
      gallery.module_number_video = parseInt(this.moduleId);
      gallery.title_gallery = video.title_video;
    });
    this.videoSelected = video.id;
  }
  renderPlaylistVideo() {
    const cardVideolist = [];
    if (this.settings !== undefined) {
      this.settings.modules.forEach(module => {
        module.playlist.forEach(playlistItem => {
          let current_module_number = module.module.replace("modulo_", "") == "apresentacao" ? 99 : module.module.replace("modulo_", "") == "conclusao" ? 100 : module.module.replace("modulo_", "");
          if (this.module_number == 0 || this.module_number == current_module_number) {
            cardVideolist.push(index.h("yduqs-card-video", { "data-gtm-event-category": ':[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'galeria-video:conteudo-clique-item', "data-gtm-event-label": 'selecionar-video', id_video: playlistItem.id, title_video: playlistItem.title_video, subtitle_video: playlistItem.subtitle_video, thumb_video: playlistItem.thumb_video, link_video: playlistItem.link_video, paragraph: playlistItem.paragraph, time: playlistItem.time, border_bottom: playlistItem.border_bottom, active: playlistItem.id == this.videoSelected ? true : false, module_video: module.module.replace("modulo_", ""), type_video: playlistItem.type, onClick: () => {
                this.changeVideoGallery(playlistItem);
              } }));
          }
        });
      });
      return index.h("div", { class: "c-playlist-video__items" }, ...cardVideolist);
    }
  }
  async videosLoad() {
    document.querySelectorAll('module').forEach(currentModule => {
      //pega somente o numero do modulo
      let moduleId = currentModule.id.replace("modulo", "");
      let module = 'modulo_' + moduleId;
      let playlist = [];
      //Pega os yduqs-video-player no HTML
      currentModule.querySelectorAll('yduqs-video-player').forEach((videosHtml, indexVideo) => {
        let videoChildModuleVideo = videosHtml.closest('yduqs-module-video');
        let videoChildGallery = videosHtml.closest('yduqs-gallery-video');
        let videoChildQuestion = videosHtml.closest('yduqs-gallery-video');
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
          let anchor = `mod-${moduleId}-vid-${indexVideo}`;
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
  async jsonLoad() {
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
        .then(json => {
        json.modules.forEach(videosJson => {
          this.videoItems.modules.forEach((videoItem, videoItemIndex) => {
            if (videosJson.module == videoItem.module) {
              this.videoItems.modules[videoItemIndex].playlist = this.videoItems.modules[videoItemIndex].playlist.concat(videosJson.playlist);
            }
          });
          this.videoItems.modules.forEach((m, indexM) => {
            let indexPlaylist = 0;
            if (m.playlist !== undefined) {
              m.playlist.forEach((n, indexN) => {
                let modNum = m.module.replace('modulo_', '');
                if (n.type === 'Video') {
                  this.videoItems.modules[indexM].playlist[indexN].id = `mod-${modNum}-vid-${indexN}`;
                  this.videoItems.modules[indexM].playlist[indexN].type = 'Video';
                  this.videoItems.modules[indexM].playlist[indexN].module_video = modNum == 'apresentacao' ? 'Introduçao' : modNum == 'conclusao' ? 'Conclusão' : 'Módulo ' + modNum;
                }
                else {
                  this.videoItems.modules[indexM].playlist[indexN].id = `mod-${modNum}-pl-${indexPlaylist}`;
                  this.videoItems.modules[indexM].playlist[indexN].type = i18n.i18n('pager.teexplico');
                  this.videoItems.modules[indexM].playlist[indexN].module_video = 'Módulo ' + modNum;
                  indexPlaylist++;
                }
              });
            }
          });
        });
      });
    }
  }
  async componentWillLoad() {
    await this.videosLoad();
    await this.jsonLoad();
  }
  componentDidRender() {
    this.initialize(this.videoItems);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "c-playlist-video" }, this.renderPlaylistVideo())));
  }
  get el() { return index.getElement(this); }
};

exports.yduqs_gallery_video = GalleryVideo;
exports.yduqs_playlist_video = PlaylistVideo;
