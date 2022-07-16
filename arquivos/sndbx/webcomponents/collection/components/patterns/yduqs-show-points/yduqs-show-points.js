import { Component, Host, h, Prop, State, Fragment, Watch, Listen } from '@stencil/core';
const _STEP_ = {
  LOADING: 'loading',
  INFO: 'info',
  GAME: 'game',
};
export class YduqsShowPoints {
  constructor() {
    this.error = [];
    this.step = _STEP_.LOADING;
    this.showInfo = true;
    this.showPoints = false;
    this.modal = null;
  }
  handleChangeSelectedIndex() {
    this.selected = this.items[this.selectedIndex];
  }
  handleChangeSelected() {
    this.buildBgImage(this.selected.image);
  }
  handleCloseModal() {
    this.modal = null;
  }
  setError(error) {
    const err = [...this.error, error];
    this.error = err;
  }
  validateFetchedData(response) {
    if (response) {
      if (!response.title) {
        this.setError(h("span", null,
          "yduqs-show-points needs a ",
          h("strong", null, "valid `title`"),
          "."));
      }
      if (!response.info) {
        this.setError(h("span", null,
          "yduqs-show-points needs a ",
          h("strong", null, "valid `info`"),
          "."));
      }
      if (!response.items || !response.items.length) {
        this.setError(h("span", null,
          "yduqs-show-points needs a ",
          h("strong", null, "valid `items`"),
          "."));
      }
    }
    else {
      this.setError(h("span", null,
        "yduqs-show-points needs a ",
        h("strong", null, "valid `config response`"),
        "."));
    }
  }
  /**
   * Converte a posição de un Ponto em PX para %
   * @param left
   * @param top
   * @returns {top: number, left: number}
   */
  calculatePointPosition(left, top) {
    var _a, _b;
    return {
      left: `${100 / ((_a = this.bgDimensions) === null || _a === void 0 ? void 0 : _a.width) * left}%`,
      top: `${100 / ((_b = this.bgDimensions) === null || _b === void 0 ? void 0 : _b.height) * top}%`,
    };
  }
  /**
   * Verifica e constroi os elementos necessários para o carregamento do background
   * @param url
   */
  async buildBgImage(url) {
    var _a;
    if (((_a = this.error) === null || _a === void 0 ? void 0 : _a.length) > 0)
      return;
    const bg = document.createElement('img');
    bg.classList.add('image');
    bg.src = url;
    // this.imgElem.innerHTML = '';
    this.imgElem.src = bg.src;
    bg.onload = () => {
      // Capturando as dimensões originais da imagem de fundo
      this.bgDimensions = {
        height: bg.naturalHeight,
        width: bg.naturalWidth
      };
      this.showPoints = true;
    };
    bg.onerror = () => {
      this.setError(h("span", null,
        "yduqs-show-points needs a ",
        h("strong", null, "valid `background url`"),
        "."));
      this.step = _STEP_.LOADING;
    };
  }
  /**
   * Inicia o desafio
   */
  async init() {
    return await fetch(this.config)
      .then((response) => response.json())
      .then(response => {
      var _a;
      this.validateFetchedData(response);
      this.title = response === null || response === void 0 ? void 0 : response.title;
      this.info = response === null || response === void 0 ? void 0 : response.info;
      this.items = response === null || response === void 0 ? void 0 : response.items;
      if (response === null || response === void 0 ? void 0 : response.background) {
        this.hostElem.style.backgroundImage = `url(${response.background})`;
      }
      if (!((_a = this.error) === null || _a === void 0 ? void 0 : _a.length)) {
        this.step = _STEP_.INFO;
        setTimeout(() => {
          // this.selected = this.items[0];
          this.selectedIndex = 0;
        }, 500);
      }
    })
      .catch(error => {
      this.setError(h("span", null,
        "Fetched response is invalid:", error === null || error === void 0 ? void 0 :
        error.toString()));
    });
  }
  handleNext() {
    this.showPoints = false;
    this.selectedIndex += 1;
  }
  handlePrev() {
    this.showPoints = false;
    this.selectedIndex -= 1;
  }
  componentWillLoad() {
    if (this._id && this.config) {
      this.init();
    }
    else {
      if (!this._id) {
        this.setError(h("span", null,
          "yduqs-show-points needs a ",
          h("strong", null, "valid attribute `id`"),
          "."));
      }
      if (!this.config) {
        this.setError(h("span", null,
          "yduqs-show-points needs a ",
          h("strong", null, "valid attribute `config`"),
          "."));
      }
    }
  }
  handlePointClick(point) {
    this.modal = point.content;
  }
  handleStartGame() {
    this.showInfo = false;
    this.step = _STEP_.GAME;
  }
  render() {
    var _a, _b, _c, _d;
    return (h(Host, { class: `c-lab-game c-show-points step-${this.step}`, ref: ref => (this.hostElem = ref) }, this.step !== _STEP_.LOADING ? (h(Fragment, null,
      h("header", { class: "c-lab-game-header" }),
      h("div", { class: "c-lab-game-container" },
        h("div", { class: `c-lab-game-info ${this.showInfo ? 'show' : 'hide'}` },
          h("div", { class: "c-lab-game-info-text", innerHTML: this.info }),
          this.step === _STEP_.INFO ? (h("div", { class: "btns" },
            h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.handleStartGame() }, "Come\u00E7ar"))) : (h("div", { class: "expand-btn" },
            h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small p-btn", onClick: () => this.showInfo = !this.showInfo },
              h("i", { class: "p-btn c-button__icon material-icons" }, this.showInfo ? 'chevron_left' : 'chevron_right'))))),
        h("div", { class: "c-lab-game-stage" },
          h("div", { class: "img" },
            h("img", { class: "selected-img", ref: ref => (this.imgElem = ref) }),
            this.step === _STEP_.GAME && ((_a = this.selected) === null || _a === void 0 ? void 0 : _a.points.map((point) => (h("button", { class: `point ${this.showPoints ? 'show' : 'hide'}`, onClick: () => this.handlePointClick(point), style: this.calculatePointPosition(point.left, point.top) }))))))),
      h("footer", { class: "c-lab-game-footer" },
        h("button", { class: "c-button", onClick: () => this.handlePrev(), disabled: this.step !== _STEP_.GAME || !Boolean(this.selectedIndex) }, "Anterior"),
        this.selectedIndex + 1 < ((_b = this.items) === null || _b === void 0 ? void 0 : _b.length) ? (h("button", { class: "c-button", onClick: () => this.handleNext(), disabled: this.step !== _STEP_.GAME }, "Pr\u00F3xima")) : (h("button", { class: "c-button", onClick: () => alert('CONCLUIR'), disabled: this.step !== _STEP_.GAME }, "Concluir"))),
      h("yduqs-modal", { _title: (_c = this.modal) === null || _c === void 0 ? void 0 : _c.title, variant: "lab", size: "large", id: `${this._id}-feedback-modal`, isopen: Boolean(this.modal) },
        h("div", { class: "c-lab-game-modal" },
          h("div", { class: "content", innerHTML: (_d = this.modal) === null || _d === void 0 ? void 0 : _d.text }))))) : (h("yduqs-lab-error", { errors: this.error }))));
  }
  static get is() { return "yduqs-show-points"; }
  static get properties() { return {
    "_id": {
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
        "text": "Identificador do Mapa"
      },
      "attribute": "id",
      "reflect": false
    },
    "config": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Endere\u00E7o do arquivo de configura\u00E7\u00E3o"
      },
      "attribute": "config",
      "reflect": false
    }
  }; }
  static get states() { return {
    "error": {},
    "step": {},
    "title": {},
    "info": {},
    "items": {},
    "selected": {},
    "selectedIndex": {},
    "showInfo": {},
    "showPoints": {},
    "bgDimensions": {},
    "modal": {}
  }; }
  static get watchers() { return [{
      "propName": "selectedIndex",
      "methodName": "handleChangeSelectedIndex"
    }, {
      "propName": "selected",
      "methodName": "handleChangeSelected"
    }]; }
  static get listeners() { return [{
      "name": "modalClosed",
      "method": "handleCloseModal",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
