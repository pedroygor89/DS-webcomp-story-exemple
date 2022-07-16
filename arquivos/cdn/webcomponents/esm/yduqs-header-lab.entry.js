import { r as registerInstance, c as createEvent, h, F as Fragment, a as Host } from './index-b21d89aa.js';

const YduqsHeaderLab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.btnClick = createEvent(this, "yduqs-lab-action", 7);
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
    return (h(Host, { class: "c-header-lab" }, h("div", { class: "c-header-lab-title" }, this._title), h("div", { class: "c-header-lab-actions" }, (_a = (typeof this.items === 'string' ? JSON.parse(this.items) : this.items)) === null || _a === void 0 ? void 0 :
      _a.map((item) => (h("div", { "aria-role": "button", class: "item", onClick: () => this.btnClick.emit({ action: item.action }) }, h("button", { title: item.label || item.icon, type: "button", class: "c-button c-button__icon-container c-button__icon-small" }, h("span", { class: "p-btn c-button__icon material-icons" }, item.icon)), item.label && (h(Fragment, null, h("span", { class: "material-icons single-icon" }, item.icon), h("span", { class: "text" }, item.label)))))), !this.hiddenFullscreen && !['iPad', 'iPhone'].includes(navigator.platform) && (h("div", { "aria-role": "button", class: "item btn-fs", onClick: () => this.handleFullscreen() }, h("button", { title: this.inFullscreen ? 'Sair da Tela Cheia' : 'Tela Cheia', type: "button", class: "c-button c-button__icon-container c-button__icon-small" }, h("span", { class: "p-btn c-button__icon material-icons" }, this.inFullscreen ? 'fullscreen_exit' : 'fullscreen')), h("span", { class: "material-icons single-icon" }, this.inFullscreen ? 'fullscreen_exit' : 'fullscreen'), h("span", { class: "text" }, this.inFullscreen ? 'Sair da Tela Cheia' : 'Tela Cheia'))))));
  }
};

export { YduqsHeaderLab as yduqs_header_lab };
