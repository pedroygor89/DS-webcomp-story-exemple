'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const _STEP_ = {
  LOADING: 'loading',
  INFO: 'info',
  GAME: 'game',
};
const YduqsOrderedDndTrainning = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.trainningEnd = index.createEvent(this, "trainningEnd", 7);
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
        this.setError(index.h("span", null, "yduqs-ordered-dnd-trainning needs a ", index.h("strong", null, "valid `title`"), "."));
      }
      if (!response.info) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-trainning needs a ", index.h("strong", null, "valid `info`"), "."));
      }
      if (!response.sequence || !response.sequence.length) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-trainning needs a ", index.h("strong", null, "valid `sequence`"), "."));
      }
      if (!response.items || !response.items.length) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-trainning needs a ", index.h("strong", null, "valid `items`"), "."));
      }
      if (!response.dropzone) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-trainning needs a ", index.h("strong", null, "valid `dropzone`"), "."));
      }
    }
    else {
      this.setError(index.h("span", null, "yduqs-ordered-dnd-trainning needs a ", index.h("strong", null, "valid `config response`"), "."));
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
      this.setError(index.h("span", null, "Fetched response is invalid:", error === null || error === void 0 ? void 0 :
        error.toString()));
    });
  }
  componentWillLoad() {
    if (this._id && this.config) {
      this.init();
    }
    else {
      if (!this._id) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-trainning needs a ", index.h("strong", null, "valid attribute `id`"), "."));
      }
      if (!this.config) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-trainning needs a ", index.h("strong", null, "valid attribute `config`"), "."));
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
    return (index.h(index.Host, { class: `c-lab-game c-ordered c-ordered-trainning step-${this.step}`, ref: ref => (this.hostElem = ref) }, this.step !== _STEP_.LOADING ? (index.h(index.Fragment, null, index.h("header", { class: "c-lab-game-header" }, index.h("div", { class: "c-lab-game-header-item c-lab-game-tutorial-item c-lab-game-count" }, (_a = this.selecteds) === null || _a === void 0 ? void 0 :
      _a.length, "/", (_b = this.sequence) === null || _b === void 0 ? void 0 :
      _b.length)), index.h("div", { class: "c-lab-game-container" }, index.h("div", { class: `c-lab-game-info ${this.step === _STEP_.TUTORIAL ? 'noIndex' : ''} ${this.showInfo ? 'show' : 'hide'}` }, index.h("div", { class: "c-lab-game-info-text", innerHTML: this.info }), this.step === _STEP_.INFO ? (index.h("div", { class: "btns" }, index.h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.handleStartGame() }, "Come\u00E7ar"))) : (index.h("div", { class: "expand-btn" }, index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small p-btn", onClick: () => this.showInfo = !this.showInfo }, index.h("i", { class: "p-btn c-button__icon material-icons" }, this.showInfo ? 'chevron_left' : 'chevron_right'))))), index.h("div", Object.assign({ class: "c-lab-game-stage" }, this.dropAttr), this.dropImage && (index.h("img", { src: this.dropImage, alt: "" })), ((_c = this.selecteds) === null || _c === void 0 ? void 0 : _c.length) > 0 && ((_d = [...this.data]) === null || _d === void 0 ? void 0 : _d.reverse().map(item => {
      const isSelected = this.selecteds.find(sel => sel.id === item.id);
      return isSelected ? index.h("img", { src: item.image, class: "preview", alt: "" }) : '';
    }))), index.h("div", { class: "c-lab-game-options" }, index.h("span", { class: `c-lab-game-tutorial-tip left-top ${this.step !== _STEP_.INFO && !Boolean(this.feedback) && this.showTip ? 'show' : 'hide'}`, style: { marginTop: '17px' } }, 'Arraste o item em destaque'), index.h("div", { class: "c-lab-game-options-scroll" }, (_e = this.data) === null || _e === void 0 ? void 0 : _e.map(item => (index.h("div", { id: item.id, class: `c-lab-game-options-item ${item.id === (actual === null || actual === void 0 ? void 0 : actual.id) ? 'active u-colored-pulse' : ''} ${ /* item.selected ||*/Boolean(this.feedback) ? 'disabled' : ''}`, draggable: /*!item.selected &&*/ !Boolean(this.feedback), onDragStart: event => this.handleDragStart(event), style: { backgroundImage: `url(${item.thumb})` } })))))), this.feedback && (index.h("yduqs-modal", { size: "small", variant: "lab", isopen: true, id: `${this._id}-feedback-modal` }, index.h("div", { class: "c-lab-game-modal-feedback" }, index.h("div", { class: "content" }, index.h("div", { class: "thumb" }, index.h("img", { class: "image", src: this.feedback.thumb, alt: "" }), index.h("span", { class: `material-icons badge ${this.feedback.isPositive ? 'success' : 'error'}` }, this.feedback.isPositive ? 'check_circle' : 'cancel')), index.h("p", null, this.feedback.text)), index.h("footer", null, index.h("button", { type: "button", class: "c-button", onClick: () => this.handleCloseFeedback() }, "Continuar"))))))) : (index.h("yduqs-lab-error", { errors: this.error }))));
  }
};

exports.yduqs_ordered_dnd_trainning = YduqsOrderedDndTrainning;
