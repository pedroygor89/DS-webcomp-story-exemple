import { Component, Host, h, State, Prop, Listen, Fragment, Event } from '@stencil/core';
const _STEP_ = {
  LOADING: 'loading',
  INFO: 'info',
  GAME: 'game',
};
export class YduqsOrderedDndTrainning {
  constructor() {
    this.error = [];
    this.selecteds = [];
    this.step = _STEP_.LOADING;
    this.showTip = true;
    this.showInfo = true;
    /**
     * Atributos do elemento de colagem
     */
    this.dropAttr = {
      onDragOver: (event) => this.handleDragOver(event),
      onDragEnter: (event) => this.handleDragEnter(event),
      onDragLeave: (event) => this.handleDragLeave(event),
      onDrop: (event) => this.handleDrop(event),
    };
  }
  handleCloseFeedback() {
    if (this.feedback) {
      if (!this.feedback.isPositive) {
        this.showTip = true;
      }
      // TODO - Se for o ultimo item correto, finalizar o treinamento
      if (this.feedback.isLast) {
        this.trainningEnd.emit({ trainning: this._id });
        this.reset();
      }
      this.feedback = null;
    }
  }
  /**
   * Verifica se o item manipulado pertence a sequencia correta
   * @param selected Opção selecionada
   * @returns boolean
   */
  verify(selected) {
    const atualIndex = this.selecteds.length;
    return selected.id === this.sequence[atualIndex];
  }
  showNegativeFeedback(selected) {
    this.feedback = {
      thumb: selected.thumb,
      text: selected.negative,
      isPositive: false
    };
  }
  showPositiveFeedback(selected) {
    var _a, _b;
    this.feedback = {
      thumb: selected.thumb,
      text: selected.positive,
      isPositive: true,
      isLast: ((_a = this.selecteds) === null || _a === void 0 ? void 0 : _a.length) === ((_b = this.sequence) === null || _b === void 0 ? void 0 : _b.length)
    };
  }
  /**
   * Disparado quando um item é arrastado
   * @param event
   */
  handleDragStart(event) {
    this.showInfo = false;
    event.dataTransfer.setData('text/plain', event.target.id);
  }
  /**
   * É disparado consecutivamente ENQUANTO um item agarrado é colocado sobre o palco de colagem
   * @param event
   */
  handleDragOver(event) {
    event.preventDefault(); // Mágica para o onDrop funcionar
  }
  /**
   * Disparado quando um item agarrado é solto sobre o palco de colagem
   * @param event
   */
  handleDrop(event) {
    var _a, _b, _c;
    event.preventDefault();
    this.handleDragLeave(event);
    const id = event.dataTransfer.getData('text');
    const selected = (_a = this.data) === null || _a === void 0 ? void 0 : _a.find(item => item.id === id);
    if (this.verify(selected)) {
      // Item Correto
      const newData = [...this.data];
      newData[(_b = this.data) === null || _b === void 0 ? void 0 : _b.findIndex(item => item.id === id)].selected = true;
      this.data = newData;
      this.selecteds.push((_c = this.data) === null || _c === void 0 ? void 0 : _c.find(item => item.id === id));
      this.showTip = false;
      this.showPositiveFeedback(selected);
    }
    else {
      // Item incorreto
      this.showNegativeFeedback(selected);
    }
    event.dataTransfer.clearData();
  }
  /**
   * Disparado quando um item arrastável é posicionado sobre o palco de colagem
   * @param event
   */
  handleDragEnter(event) {
    event.target.classList.add('active');
  }
  /**
   * Disparado quando um item arrastável é movido para fora do palco de colagem
   * @param event
   */
  handleDragLeave(event) {
    event.target.classList.remove('active');
  }
  setError(error) {
    const err = [...this.error, error];
    this.error = err;
  }
  validateFetchedData(response) {
    if (response) {
      if (!response.title) {
        this.setError(h("span", null,
          "yduqs-ordered-dnd-trainning needs a ",
          h("strong", null, "valid `title`"),
          "."));
      }
      if (!response.info) {
        this.setError(h("span", null,
          "yduqs-ordered-dnd-trainning needs a ",
          h("strong", null, "valid `info`"),
          "."));
      }
      if (!response.sequence || !response.sequence.length) {
        this.setError(h("span", null,
          "yduqs-ordered-dnd-trainning needs a ",
          h("strong", null, "valid `sequence`"),
          "."));
      }
      if (!response.items || !response.items.length) {
        this.setError(h("span", null,
          "yduqs-ordered-dnd-trainning needs a ",
          h("strong", null, "valid `items`"),
          "."));
      }
      if (!response.dropzone) {
        this.setError(h("span", null,
          "yduqs-ordered-dnd-trainning needs a ",
          h("strong", null, "valid `dropzone`"),
          "."));
      }
    }
    else {
      this.setError(h("span", null,
        "yduqs-ordered-dnd-trainning needs a ",
        h("strong", null, "valid `config response`"),
        "."));
    }
  }
  /**
   * Inicia o desafio
   */
  async init() {
    return await fetch(this.config)
      .then((response) => response.json())
      .then(response => {
      var _a, _b;
      this.validateFetchedData(response);
      this.title = response === null || response === void 0 ? void 0 : response.title;
      this.info = response === null || response === void 0 ? void 0 : response.info;
      this.dropImage = response === null || response === void 0 ? void 0 : response.dropzone;
      this.sequence = response === null || response === void 0 ? void 0 : response.sequence;
      this.data = (_a = response.items) === null || _a === void 0 ? void 0 : _a.map(item => (Object.assign(Object.assign({}, item), { selected: false })));
      if (response === null || response === void 0 ? void 0 : response.background) {
        this.hostElem.style.backgroundImage = `url(${response.background})`;
      }
      if (!((_b = this.error) === null || _b === void 0 ? void 0 : _b.length)) {
        this.step = _STEP_.INFO;
      }
    })
      .catch(error => {
      this.setError(h("span", null,
        "Fetched response is invalid:", error === null || error === void 0 ? void 0 :
        error.toString()));
    });
  }
  componentWillLoad() {
    if (this._id && this.config) {
      this.init();
    }
    else {
      if (!this._id) {
        this.setError(h("span", null,
          "yduqs-ordered-dnd-trainning needs a ",
          h("strong", null, "valid attribute `id`"),
          "."));
      }
      if (!this.config) {
        this.setError(h("span", null,
          "yduqs-ordered-dnd-trainning needs a ",
          h("strong", null, "valid attribute `config`"),
          "."));
      }
    }
  }
  reset() {
    this.selecteds = [];
    this.step = _STEP_.loading;
    this.showTip = true;
    this.showInfo = true;
    this.init();
  }
  handleStartGame() {
    this.showInfo = false;
    this.step = _STEP_.GAME;
  }
  render() {
    var _a, _b, _c, _d, _e;
    var actual = this.step !== _STEP_.LOADING && this.data.find(item => (item === null || item === void 0 ? void 0 : item.id) === this.sequence[this.selecteds.length]);
    return (h(Host, { class: `c-lab-game c-ordered c-ordered-trainning step-${this.step}`, ref: ref => (this.hostElem = ref) }, this.step !== _STEP_.LOADING ? (h(Fragment, null,
      h("header", { class: "c-lab-game-header" },
        h("div", { class: "c-lab-game-header-item c-lab-game-tutorial-item c-lab-game-count" }, (_a = this.selecteds) === null || _a === void 0 ? void 0 :
          _a.length,
          "/", (_b = this.sequence) === null || _b === void 0 ? void 0 :
          _b.length)),
      h("div", { class: "c-lab-game-container" },
        h("div", { class: `c-lab-game-info ${this.step === _STEP_.TUTORIAL ? 'noIndex' : ''} ${this.showInfo ? 'show' : 'hide'}` },
          h("div", { class: "c-lab-game-info-text", innerHTML: this.info }),
          this.step === _STEP_.INFO ? (h("div", { class: "btns" },
            h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.handleStartGame() }, "Come\u00E7ar"))) : (h("div", { class: "expand-btn" },
            h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small p-btn", onClick: () => this.showInfo = !this.showInfo },
              h("i", { class: "p-btn c-button__icon material-icons" }, this.showInfo ? 'chevron_left' : 'chevron_right'))))),
        h("div", Object.assign({ class: "c-lab-game-stage" }, this.dropAttr),
          this.dropImage && (h("img", { src: this.dropImage, alt: "" })),
          ((_c = this.selecteds) === null || _c === void 0 ? void 0 : _c.length) > 0 && ((_d = [...this.data]) === null || _d === void 0 ? void 0 : _d.reverse().map(item => {
            const isSelected = this.selecteds.find(sel => sel.id === item.id);
            return isSelected ? h("img", { src: item.image, class: "preview", alt: "" }) : '';
          }))),
        h("div", { class: "c-lab-game-options" },
          h("span", { class: `c-lab-game-tutorial-tip left-top ${this.step !== _STEP_.INFO && !Boolean(this.feedback) && this.showTip ? 'show' : 'hide'}`, style: { marginTop: '17px' } }, 'Arraste o item em destaque'),
          h("div", { class: "c-lab-game-options-scroll" }, (_e = this.data) === null || _e === void 0 ? void 0 : _e.map(item => (h("div", { id: item.id, class: `c-lab-game-options-item ${item.id === (actual === null || actual === void 0 ? void 0 : actual.id) ? 'active u-colored-pulse' : ''} ${ /* item.selected ||*/Boolean(this.feedback) ? 'disabled' : ''}`, draggable: /*!item.selected &&*/ !Boolean(this.feedback), onDragStart: event => this.handleDragStart(event), style: { backgroundImage: `url(${item.thumb})` } })))))),
      this.feedback && (h("yduqs-modal", { size: "small", variant: "lab", isopen: true, id: `${this._id}-feedback-modal` },
        h("div", { class: "c-lab-game-modal-feedback" },
          h("div", { class: "content" },
            h("yduqs-feedback-thumb", { class: "thumb", feedback: this.feedback.isPositive, image: this.feedback.thumb }),
            h("p", null, this.feedback.text)),
          h("footer", null,
            h("button", { type: "button", class: "c-button", onClick: () => this.handleCloseFeedback() }, "Continuar"))))))) : (h("yduqs-lab-error", { errors: this.error }))));
  }
  static get is() { return "yduqs-ordered-dnd-trainning"; }
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
    "title": {},
    "info": {},
    "data": {},
    "dropImage": {},
    "selecteds": {},
    "sequence": {},
    "step": {},
    "feedback": {},
    "showTip": {},
    "showInfo": {}
  }; }
  static get events() { return [{
      "method": "trainningEnd",
      "name": "trainningEnd",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento disparado no Final do Treinamento"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get listeners() { return [{
      "name": "modalClosed",
      "method": "handleCloseFeedback",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
