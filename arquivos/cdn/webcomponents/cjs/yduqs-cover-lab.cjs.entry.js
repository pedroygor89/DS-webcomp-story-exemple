'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCoverLab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.goToNextPage = index.createEvent(this, "goToNextPage", 7);
    this.loading = true;
    this.mobileBreakpoint = 992;
    this._isMobile = true;
  }
  handleWindowResize() {
    const isMobileDevice = window.innerWidth < this.mobileBreakpoint;
    if (isMobileDevice && !this._isMobile) {
      this._isMobile = true;
    }
    else if (!isMobileDevice && this._isMobile) {
      this._isMobile = false;
    }
  }
  // openConfig() {
  //   let modal_config = this.el.querySelector('#mod-config');
  //   modal_config.setAttribute('isopen', 'true');
  // }
  openIntro() {
    // let btn_intro = this.el.querySelector('.btn-intro');
    // btn_intro.classList.add('c-button--ghost')
    // let btn_start = this.el.querySelector('.btn-start');
    // btn_start.removeAttribute('disabled');
    // let modal_intro = this.el.querySelector('#mod-intro');
    // modal_intro.setAttribute('isopen', 'true');
    this.goToNextPage.emit(this.to_page_init_lab);
  }
  openStart() {
    this.goToNextPage.emit(this.to_page_init_lab);
  }
  componentWillLoad() {
    const isMobileDevice = window.innerWidth < this.mobileBreakpoint;
    if (isMobileDevice && !this._isMobile) {
      this._isMobile = true;
    }
    else if (!isMobileDevice && this._isMobile) {
      this._isMobile = false;
    }
    var capa_lab = document.querySelector('yduqs-cover-lab');
    setTimeout(function () {
      capa_lab.setAttribute('loading', 'false');
    }, 4000);
  }
  render() {
    const deviceClass = this._isMobile ? 'u-text--small' : 'u-text--large';
    return (index.h(index.Host, null, index.h("div", { class: "c-cover-lab", style: { background: `url('${this.background_img}') fixed no-repeat` } }, index.h("div", { class: "aside" }), index.h("div", { class: "container" }, index.h("h6", null, this.subtitle_cover), index.h("h1", { innerHTML: this.title_cover }), index.h("div", { class: "box-btns" }, index.h("div", { class: `btns ${this.loading ? 'd-none' : ''}` }, index.h("button", { type: "button", class: `c-button ${deviceClass} btn-intro`, style: { marginRight: '10px' }, onClick: () => this.openIntro() }, "Iniciar")))), index.h("div", { class: `box-load ${this.loading ? '' : 'd-none'}` }, index.h("yduqs-loading", { open: true, message: "Carregando..." })), index.h("yduqs-modal", { id: "mod-config" }, index.h("slot", { name: "modal-config" })), index.h("yduqs-modal", { id: "mod-intro", variant: "lab", size: "large" }, index.h("slot", { name: "modal-intro" })))));
  }
  get el() { return index.getElement(this); }
};

exports.yduqs_cover_lab = YduqsCoverLab;
