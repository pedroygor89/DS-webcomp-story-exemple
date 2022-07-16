import { h, Component, Prop, Method, State, Element, Listen } from '@stencil/core';
import { i18n } from '../../../utils/i18n';
export class GalleryVideo {
  constructor() {
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
    listButtonsMenu.push(h("div", { class: "module-button bt-mod-0 activated", id: "all", "data-gtm-event-category": ":[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "galeria-video:conteudo-clique-botao", "data-gtm-event-label": "trocar-modulo", onClick: event => {
        this.changeModule(0);
        event.stopPropagation();
      } },
      h("p", null, i18n('pager.todos'))));
    document.querySelectorAll('module').forEach(mod => {
      let select_apresentation = document.getElementById('apresentacao');
      let video_apresentation = select_apresentation.querySelectorAll('yduqs-video-player');
      let select_conclusion = document.getElementById('conclusao');
      let video_conclusion = select_conclusion.querySelectorAll('yduqs-video-player');
      let module_video_conclusion = select_conclusion.querySelectorAll('yduqs-module-video');
      if (video_apresentation.length !== 0 && mod.id !== 'conclusao') {
        listButtonsMenu.push(h("div", { class: `module-button bt-mod-${mod.id.replace('modulo', '')}`, "data-gtm-event-category": ":[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "galeria-video:conteudo-clique-botao", "data-gtm-event-label": "trocar-modulo", onClick: event => {
            this.changeModule(mod.id.replace('modulo', ''));
            event.stopPropagation();
          } },
          h("p", null, this.renderNameModule(mod.id))));
      }
      else if ((module_video_conclusion.length !== 0 || video_conclusion.length !== 0) && mod.id !== 'apresentacao') {
        listButtonsMenu.push(h("div", { class: `issomesmo module-button bt-mod-${mod.id.replace('modulo', '')}`, "data-gtm-event-category": ":[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "galeria-video:conteudo-clique-botao", "data-gtm-event-label": "trocar-modulo", onClick: event => {
            this.changeModule(mod.id.replace('modulo', ''));
            event.stopPropagation();
          } },
          h("p", null, this.renderNameModule(mod.id))));
      }
      else if (mod.id !== 'apresentacao' && mod.id !== 'conclusao') {
        listButtonsMenu.push(h("div", { class: `module-button bt-mod-${mod.id.replace('modulo', '')}`, "data-gtm-event-category": ":[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "galeria-video:conteudo-clique-botao", "data-gtm-event-label": "trocar-modulo", onClick: event => {
            this.changeModule(mod.id.replace('modulo', ''));
            event.stopPropagation();
          } },
          h("p", null, this.renderNameModule(mod.id))));
      }
    });
    return (h("div", { id: "box-modules-buttons", class: "modules-wrapper" }, ...listButtonsMenu));
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
    return (h("div", { class: "c-gallery-video" },
      h("div", { class: "c-gallery-video__header d-none d-lg-inline" },
        h("h5", null, this.module_number_video == 0
          ? i18n('pager.todos')
          : this.module_number_video == 99
            ? i18n('pager.apresentacao')
            : this.module_number_video == 100
              ? i18n('pager.conclusao')
              : i18n('pager.modulo') + ' ' + this.module_number_video),
        h("div", { class: "box-modules d-flex" },
          h("h1", { class: "col-12 col-lg-8 col-xxl-9", innerHTML: this.title_gallery }),
          h("div", { class: "module-navigation d-flex col-lg-4 col-xxl-3" },
            h("div", { class: `module-button-navigation before`, id: "before", onClick: () => {
                this.prevScroll();
              } },
              h("span", { class: "material-icons" }, "keyboard_arrow_left")),
            this.renderButtonsMenu(),
            h("div", { class: `module-button-navigation after`, id: "after", onClick: () => {
                this.nextScroll();
              } },
              h("span", { class: "material-icons" }, "keyboard_arrow_right"))))),
      h("div", { class: "c-gallery-video__content" },
        h("div", { class: "c-gallery-video__content_videos col-12 col-lg-8 col-xxl-9" },
          h("div", { class: "close-modal d-lg-none d-xl-none d-sxl-none", onClick: () => {
              this.closeModalGallery();
            } },
            h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
              h("path", { d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#fff" }))),
          h("div", { class: "c-gallery-video__content_videos_video" },
            h("yduqs-video-player", { "skip-menu": "true", src: this.srcVideo, videoId: "", width: "", height: "" })),
          h("div", { class: "c-gallery-video__header d-inline d-lg-none" },
            h("h5", null, this.module_number_video == 0
              ? i18n('pager.todos')
              : this.module_number_video == 99
                ? i18n('pager.apresentacao')
                : this.module_number_video == 100
                  ? i18n('pager.conclusao')
                  : i18n('pager.modulo') + ' ' + this.module_number_video),
            h("div", { class: "box-modules d-flex flex-column" },
              h("h1", { class: "col-lg-8 col-xxl-9", innerHTML: this.title_gallery }),
              h("div", { class: "d-flex module-navigation-mob" },
                h("div", { class: `module-button-navigation before-mob`, id: "before", onClick: () => {
                    this.prevScroll();
                  } },
                  h("span", { class: "material-icons" }, "keyboard_arrow_left")),
                this.renderButtonsMenu(),
                h("div", { class: `module-button-navigation after-mob`, id: "after", onClick: () => {
                    this.nextScroll();
                  } },
                  h("span", { class: "material-icons" }, "keyboard_arrow_right")))))),
        h("div", { class: "c-gallery-video__content_playlist col-12 col-lg-4 col-xxl-3" },
          h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number })))));
  }
  static get is() { return "yduqs-gallery-video"; }
  static get properties() { return {
    "module_number": {
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
      "attribute": "module_number",
      "reflect": false,
      "defaultValue": "0"
    },
    "module_number_video": {
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
      "attribute": "module_number_video",
      "reflect": false,
      "defaultValue": "0"
    },
    "title_gallery": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "title_gallery",
      "reflect": false
    },
    "subtitle_gallery": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "subtitle_gallery",
      "reflect": false
    },
    "title_video": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "title_video",
      "reflect": false
    },
    "moduleId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "module-id",
      "reflect": false
    },
    "type_video": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type_video",
      "reflect": false,
      "defaultValue": "''"
    },
    "paragraph_video": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "paragraph_video",
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
    },
    "srcVideo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "src-video",
      "reflect": false
    },
    "template_doktor": {
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
      "attribute": "template_doktor",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "scrollModules": {}
  }; }
  static get methods() { return {
    "changeVideo": {
      "complexType": {
        "signature": "(src: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "changeModule": {
      "complexType": {
        "signature": "(numMod: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "changeVideoExternal": {
      "complexType": {
        "signature": "(video: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
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
  static get listeners() { return [{
      "name": "resize",
      "method": "handleWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
