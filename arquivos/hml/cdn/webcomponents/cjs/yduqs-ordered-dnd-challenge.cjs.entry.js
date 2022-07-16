'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const _STEP_ = {
  LOADING: 'loading',
  INFO: 'info',
  TUTORIAL: 'tutorial',
  GAME: 'game',
  FEEDBACK: 'feedback',
};
const YduqsOrderedDndChallenge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.challengeEnd = index.createEvent(this, "challengeEnd", 7);
    this.error = [];
    this.usedChances = 0;
    this.hideCount = false;
    this.usedTips = 0;
    this.showTip = false;
    this.selecteds = [];
    this.step = _STEP_.LOADING;
    this.tutorialItem = 'tips';
    this.result = true;
    this.showInfo = true;
    this.inCountdownDanger = false;
    this.ordered = true;
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
  handleCountdownFinished(event) {
    var _a;
    if (event.detail === ((_a = this.countdownElem) === null || _a === void 0 ? void 0 : _a.id)) {
      // this.usedChances += 1;
      this.showFeedback = 'negative';
      this.step = _STEP_.FEEDBACK;
    }
  }
  handleCountdownDanger(event) {
    var _a;
    if (event.detail === ((_a = this.countdownElem) === null || _a === void 0 ? void 0 : _a.id)) {
      this.inCountdownDanger = true;
    }
  }
  handleGameOver() {
    this.gameover();
  }
  /**
   * Verifica se o item manipulado pertence a sequencia correta
   * @param selected Opção selecionada
   * @returns boolean
   */
  verify(selected) {
    if (this.ordered) {
      const atualIndex = this.selecteds.length;
      return selected.id === this.sequence[atualIndex];
    }
    else {
      return this.sequence.includes(selected.id);
    }
  }
  /**
   * Disparado quando um item é arrastado
   * @param event
   */
  handleDragStart(event, disabled) {
    if (disabled) {
      event.preventDefault();
    }
    else {
      this.showInfo = false;
      event.dataTransfer.setData('text/plain', event.target.id);
      event.currentTarget.classList.add('active');
    }
  }
  /**
   * Disparado quando um item agarrado antes é solto
   * @param event
   */
  handleDragEnd(event) {
    event.currentTarget.classList.remove('active');
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
    const selectedIndex = (_a = this.data) === null || _a === void 0 ? void 0 : _a.findIndex(item => item.id === id);
    if (!this.verify(this.data[selectedIndex])) {
      // Se a ordem não estiver correta
      this.result = false;
    }
    // Marcação do item arrastado
    const newData = [...this.data];
    newData[selectedIndex].selected = true;
    this.data = newData;
    this.selecteds.push(this.data[selectedIndex]);
    this.showTip = false;
    if (((_b = this.selecteds) === null || _b === void 0 ? void 0 : _b.length) === ((_c = this.sequence) === null || _c === void 0 ? void 0 : _c.length)) {
      if (this.result) {
        this.showFeedback = 'positive';
      }
      else {
        // this.usedChances += 1;
        this.showFeedback = 'negative';
      }
      this.step = _STEP_.FEEDBACK;
      if (this.time) {
        this.countdownElem.pause();
      }
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
  /**
   * Manipula a visualização das Dicas
   */
  handleTip() {
    if (this.step !== _STEP_.GAME)
      return;
    if (!this.showTip) {
      this.usedTips += 1;
    }
    this.showTip = true;
  }
  /**
   * Reinicializa as variáveis
   */
  reset(stop) {
    this.usedTips = 0;
    this.showFeedback = null;
    this.selecteds = [];
    this.step = _STEP_.GAME;
    this.showTip = false;
    this.result = true;
    this.inCountdownDanger = false;
    this.data = this.data.map(item => (Object.assign(Object.assign({}, item), { selected: false })));
    if (this.time) {
      if (stop) {
        this.countdownElem.stop();
      }
      else {
        this.countdownElem.restart();
      }
    }
  }
  async gameover() {
    this.usedChances = 0;
    this.reset(true);
    this.step = _STEP_.INFO;
    return Promise.resolve();
  }
  setError(error) {
    const err = [...this.error, error];
    this.error = err;
  }
  validateFetchedData(response) {
    if (response) {
      if (!response.info) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid `info`"), "."));
      }
      if (!response.sequence || !response.sequence.length) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid `sequence`"), "."));
      }
      if (!response.items || !response.items.length) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid `items`"), "."));
      }
      if (!response.positiveFeedback) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid `positiveFeedback`"), "."));
      }
      if (!response.negativeFeedback) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid `negativeFeedback`"), "."));
      }
      if (!response.failFeedback) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid `failFeedback`"), "."));
      }
      if (!response.dropzone) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid `dropzone`"), "."));
      }
    }
    else {
      this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid `config response`"), "."));
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
      this.chances = (response === null || response === void 0 ? void 0 : response.chances) || 3;
      this.ordered = !Boolean(response === null || response === void 0 ? void 0 : response.unordered);
      this.hideCount = Boolean(response === null || response === void 0 ? void 0 : response.hideCount);
      this.tips = this.ordered ? ((response === null || response === void 0 ? void 0 : response.tips) || 2) : 0;
      this.time = response === null || response === void 0 ? void 0 : response.time;
      this.info = response === null || response === void 0 ? void 0 : response.info;
      this.sequence = response === null || response === void 0 ? void 0 : response.sequence;
      this.positiveFeedback = response === null || response === void 0 ? void 0 : response.positiveFeedback;
      this.negativeFeedback = response === null || response === void 0 ? void 0 : response.negativeFeedback;
      this.failFeedback = response === null || response === void 0 ? void 0 : response.failFeedback;
      this.dropImage = response === null || response === void 0 ? void 0 : response.dropzone;
      this.data = (_a = response.items) === null || _a === void 0 ? void 0 : _a.map(item => (Object.assign(Object.assign({}, item), { selected: false })));
      if (this.tips === 0) {
        this.tutorialItem = 'chances';
      }
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
        this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid attribute `id`"), "."));
      }
      if (!this.config) {
        this.setError(index.h("span", null, "yduqs-ordered-dnd-challenge needs a ", index.h("strong", null, "valid attribute `config`"), "."));
      }
    }
  }
  handleNextTutorial(actual) {
    var _a;
    if (actual === 'tips') {
      this.tutorialItem = 'chances';
    }
    else {
      if (actual === 'time' || (actual === 'chances' && !this.time)) {
        this.tutorialItem = undefined;
        this.showInfo = false;
        this.step = _STEP_.GAME;
        (_a = this.countdownElem) === null || _a === void 0 ? void 0 : _a.start();
      }
      else if (actual === 'chances') {
        this.tutorialItem = this.hideCount ? 'time' : 'count';
      }
      else if (actual === 'count') {
        this.tutorialItem = 'time';
      }
    }
  }
  handleCloseFeedback() {
    this.showInfo = true;
    if (this.step === _STEP_.FEEDBACK) {
      if (this.showFeedback === 'positive') {
        // TODO > IMPLANTAR O QUE DEVE OCORRER NO MOMENTO FINAL DO JOGO
        this.challengeEnd.emit({ challenge: this._id, result: true });
        this.usedChances = 0;
        this.reset();
      }
      else {
        this.usedChances += 1;
        if (this.usedChances === this.chances) {
          // TODO > IMPLANTAR O QUE DEVE OCORRER NO MOMENTO FINAL DO JOGO
          this.challengeEnd.emit({ challenge: this._id, result: false });
          this.gameover();
        }
        else {
          this.reset();
        }
      }
    }
  }
  /**
   * TODO
   * Criar um componente de TIP
   */
  renderTip(text, position, btnText, action) {
    return (index.h("span", { class: `c-lab-game-tutorial-tip ${position}` }, text, Boolean(action) && (index.h("button", { type: "button", class: `c-button ${Boolean(btnText) ? 'u-text--small' : 'c-button__icon-container c-button__icon-small u-text--small p-btn'}`, onClick: action }, Boolean(btnText) ? btnText : (index.h("i", { class: "p-btn c-button__icon material-icons" }, "chevron_right"))))));
  }
  getResultThumb(item, index$1) {
    let result;
    if (this.ordered) {
      result = this.selecteds[index$1].id === this.sequence[index$1];
    }
    else {
      result = this.sequence.includes(this.selecteds[index$1].id);
    }
    return (index.h("div", { class: `item ${result ? 'success' : 'error'}` }, index.h("img", { src: item === null || item === void 0 ? void 0 : item.thumb, alt: "" }), index.h("i", { class: `material-icons icon ${result ? 'success' : 'error'}` }, result ? 'sentiment_very_satisfied' : 'sentiment_dissatisfied')));
  }
  startTutorial() {
    this.showInfo = false;
    this.tutorialItem = 'chances';
    this.step = _STEP_.TUTORIAL;
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (index.h(index.Host, { class: `c-lab-game c-ordered c-ordered-challenge step-${this.step}`, ref: ref => (this.hostElem = ref) }, this.step !== _STEP_.LOADING ? (index.h(index.Fragment, null, this.step === _STEP_.TUTORIAL && (index.h("div", { class: "c-lab-game-tutorial-overlay" })), index.h("header", { class: "c-lab-game-header" }, index.h("div", { class: "c-lab-game-header-item c-lab-game-tutorial-item c-lab-game-chances" }, [...Array(this.chances)].map((item, index$1) => (
    /* GAMBIARRA */ (item || !item) /* FIM DA GAMBIARRA */ && index$1 < this.chances - this.usedChances ? ( // GAMBIARRA para o Build parar de dar erro por falta de ITEM
    index.h("i", { class: "material-icons active" }, index$1 + 1 === this.chances - this.usedChances && this.inCountdownDanger ? 'heart_broken' : 'favorite')) : (index.h("i", { class: "material-icons" }, "favorite_border")))), (this.step === 'tutorial' && this.tutorialItem === 'chances') && this.renderTip(`Você tem ${this.chances} tentativas`, 'bottom', undefined, () => this.handleNextTutorial('chances'))), !this.hideCount && (index.h("div", { class: "c-lab-game-header-item c-lab-game-tutorial-item c-lab-game-count" }, (_a = this.selecteds) === null || _a === void 0 ? void 0 :
      _a.length, "/", (_b = this.sequence) === null || _b === void 0 ? void 0 :
      _b.length, (this.step === 'tutorial' && this.tutorialItem === 'count') && this.renderTip(`Você precisa arrastar ${(_c = this.sequence) === null || _c === void 0 ? void 0 : _c.length} itens.`, 'bottom', undefined, () => this.handleNextTutorial('count')))), this.time && (index.h("div", { class: "c-lab-game-header-item c-lab-game-tutorial-item c-lab-game-countdown" }, index.h("yduqs-countdown", { id: `${this._id}-countdown`, time: this.time * 60, ref: ref => (this.countdownElem = ref) }), (this.step === 'tutorial' && this.tutorialItem === 'time') && this.renderTip('Cuidado para não ultrapassar o tempo.', 'bottom', 'Começar', () => this.handleNextTutorial('time'))))), index.h("div", { class: "c-lab-game-container" }, index.h("div", { class: `c-lab-game-info ${this.step === _STEP_.TUTORIAL ? 'noIndex' : ''} ${this.showInfo ? 'show' : 'hide'}` }, index.h("div", { class: "c-lab-game-info-text", innerHTML: this.info }), this.step === _STEP_.INFO ? (index.h("div", { class: "btns" }, index.h("button", { type: "button", style: { marginRight: '15px' }, class: "c-button u-text--small", onClick: () => this.startTutorial() }, "Tutorial"), index.h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.handleNextTutorial('time') }, "Come\u00E7ar"))) : (index.h("div", { class: "expand-btn" }, index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small p-btn", onClick: () => this.showInfo = !this.showInfo }, index.h("i", { class: "p-btn c-button__icon material-icons" }, this.showInfo ? 'chevron_left' : 'chevron_right'))))), index.h("div", Object.assign({ class: `c-lab-game-stage ${this.step === _STEP_.TUTORIAL ? 'noIndex' : ''}` }, this.dropAttr), this.dropImage && (index.h("img", { src: this.dropImage, class: "dropimage", alt: "" })), ((_d = this.selecteds) === null || _d === void 0 ? void 0 : _d.length) > 0 && ((_e = [...this.data]) === null || _e === void 0 ? void 0 : _e.reverse().map(item => {
      const isSelected = this.selecteds.find(sel => sel.id === item.id);
      return isSelected ? index.h("img", { src: item.image, class: "preview", alt: "" }) : '';
    }))), index.h("div", { class: "c-lab-game-options" }, index.h("div", { class: "c-lab-game-options-scroll" }, (_f = this.data) === null || _f === void 0 ? void 0 : _f.map(item => {
      const disabled = this.step !== _STEP_.GAME || item.selected || Boolean(this.showFeedback);
      return (index.h("div", { id: item.id, class: `c-lab-game-options-item ${disabled ? 'disabled' : ''}`, draggable: !disabled, onDragStart: event => this.handleDragStart(event, disabled), onDragEnd: event => this.handleDragEnd(event), style: { backgroundImage: `url(${item.thumb})` } }));
    })))), this.step === _STEP_.FEEDBACK && (index.h("yduqs-modal", { variant: "lab", size: "small", id: `${this._id}-feedback-modal`, isopen: true }, index.h("div", { class: "c-lab-game-modal-feedback" }, this.showFeedback === 'positive' ? (index.h(index.Fragment, null, index.h("div", { class: "content" }, index.h("p", null, this.positiveFeedback)), index.h("footer", null, index.h("button", { type: "button", class: "c-button", onClick: () => this.handleCloseFeedback() }, "Continuar")))) : (index.h(index.Fragment, null, ((_g = this.selecteds) === null || _g === void 0 ? void 0 : _g.length) > 0 && ((_h = this.selecteds) === null || _h === void 0 ? void 0 : _h.length) === this.sequence.length ? (index.h(index.Fragment, null, index.h("div", { class: "content" }, index.h("p", null, (this.usedChances + 1 === this.chances) ? this.failFeedback : this.negativeFeedback)), index.h("div", { class: "result" }, this.selecteds.map((item, index) => this.getResultThumb(item, index))))) : (index.h("div", { class: "content" }, index.h("p", null, "Foi por pouco! Voc\u00EA n\u00E3o finalizou a atividade a tempo e perdeu uma vida."), " ", (this.usedChances + 1 === this.chances) && (index.h("p", null, this.failFeedback)))), index.h("footer", null, index.h("button", { type: "button", class: "c-button", onClick: () => this.handleCloseFeedback() }, (this.usedChances + 1 === this.chances) ? 'Voltar para Teoria' : 'Tentar outra vez'))))))))) : (index.h("yduqs-lab-error", { errors: this.error }))));
  }
};

exports.yduqs_ordered_dnd_challenge = YduqsOrderedDndChallenge;
