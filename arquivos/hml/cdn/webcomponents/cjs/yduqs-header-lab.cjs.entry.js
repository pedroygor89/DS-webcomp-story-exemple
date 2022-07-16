'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsHeaderLab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.btnClick = index.createEvent(this, "yduqs-lab-action", 7);
    /**
     * Esconde o btn de Fullscreen
     */
    this.hiddenFullscreen = false;
    this.inFullscreen = false;
  }
  listennerFullscreenChange() {
    const doc = document;
    this.inFullscreen = Boolean(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullscreenElement || doc.msFullscreenElement);
  }
  handleFullscreen() {
    const container = document.querySelector('body');
    const doc = document;
    if (!doc.fullscreenElement && !doc.webkitFullscreenElement && !doc.mozFullscreenElement && !doc.msFullscreenElement) {
      // ALERT - Navegador bloqueia atribuição desse tipo de função em variável
      if (container.requestFullscreen) {
        container.requestFullscreen();
      }
      else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
      else if (container.mozRequestFullscreen) {
        container.mozRequestFullscreen();
      }
      else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
      else if (container.webkitEnterFullscreen) {
        container.webkitEnterFullscreen();
      }
    }
    else {
      // ALERT - Navegador bloqueia atribuição desse tipo de função em variável
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      else if (document.mozExitFullscreen) {
        document.mozExitFullscreen();
      }
      else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
  render() {
    var _a;
    return (index.h(index.Host, { class: "c-header-lab" }, index.h("div", { class: "c-header-lab-title" }, this._title), index.h("div", { class: "c-header-lab-actions" }, (_a = (typeof this.items === 'string' ? JSON.parse(this.items) : this.items)) === null || _a === void 0 ? void 0 :
      _a.map((item) => (index.h("div", { "aria-role": "button", class: "item", onClick: () => this.btnClick.emit({ action: item.action }) }, index.h("button", { title: item.label || item.icon, type: "button", class: "c-button c-button__icon-container c-button__icon-small" }, index.h("span", { class: "p-btn c-button__icon material-icons" }, item.icon)), item.label && (index.h(index.Fragment, null, index.h("span", { class: "material-icons single-icon" }, item.icon), index.h("span", { class: "text" }, item.label)))))), !this.hiddenFullscreen && (index.h("div", { "aria-role": "button", class: "item", onClick: () => this.handleFullscreen() }, index.h("button", { title: this.inFullscreen ? 'Sair da Tela Cheia' : 'Tela Cheia', type: "button", class: "c-button c-button__icon-container c-button__icon-small" }, index.h("span", { class: "p-btn c-button__icon material-icons" }, this.inFullscreen ? 'fullscreen_exit' : 'fullscreen')), index.h("span", { class: "material-icons single-icon" }, this.inFullscreen ? 'fullscreen_exit' : 'fullscreen'), index.h("span", { class: "text" }, this.inFullscreen ? 'Sair da Tela Cheia' : 'Tela Cheia'))))));
  }
};

exports.yduqs_header_lab = YduqsHeaderLab;
