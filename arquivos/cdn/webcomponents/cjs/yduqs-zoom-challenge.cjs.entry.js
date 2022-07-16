'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const _STEP_ = {
  LOADING: 'loading',
  INFO: 'info',
  GAME: 'game',
};
const YduqsZoomChallenge = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.challengeEnd = index.createEvent(this, "challengeEnd", 7);
    this.error = [];
    this.step = _STEP_.LOADING;
    this.showInfo = true;
    this.usedChances = 0;
    this.stageAttr = {
      onMouseMove: e => this.getPos(e),
      onMouseLeave: () => this.handleCursorLeave(),
      onTouchStart: e => this.getPos(e),
      onTouchMove: e => this.getPos(e),
      onTouchEnd: () => this.handleCursorLeave(),
    };
  }
  handleGameOver() {
    this.gameover();
  }
  setError(error) {
    const err = [...this.error, error];
    this.error = err;
  }
  validateFetchedData(response) {
    if (response) {
      if (!response.info) {
        this.setError(index.h("span", null, "yduqs-zoom-challenge needs a ", index.h("strong", null, "valid `info`"), "."));
      }
      if (!response.items || !response.items.length) {
        this.setError(index.h("span", null, "yduqs-zoom-challenge needs a ", index.h("strong", null, "valid `items`"), "."));
      }
    }
    else {
      this.setError(index.h("span", null, "yduqs-zoom-challenge needs a ", index.h("strong", null, "valid `config response`"), "."));
    }
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
      this.info = response === null || response === void 0 ? void 0 : response.info;
      this.items = response === null || response === void 0 ? void 0 : response.items;
      this.chances = (response === null || response === void 0 ? void 0 : response.chances) || 3;
      this.positiveBtnText = (response === null || response === void 0 ? void 0 : response.positiveBtnText) || 'Aprovar';
      this.negativeBtnText = (response === null || response === void 0 ? void 0 : response.negativeBtnText) || 'Reprovar';
      if (response === null || response === void 0 ? void 0 : response.background) {
        this.hostElem.style.backgroundImage = `url(${response.background})`;
      }
      this.selected = this.items[0];
      if (!((_a = this.error) === null || _a === void 0 ? void 0 : _a.length)) {
        this.step = _STEP_.INFO;
      }
    })
      .catch(error => {
      this.setError(index.h("span", null, "Fetched response is invalid:", error === null || error === void 0 ? void 0 :
        error.toString()));
    });
  }
  /**
   * Finaliza a Atividade
   */
  async gameover() {
    this.usedChances = 0;
    this.reset();
    this.step = _STEP_.INFO;
    return Promise.resolve();
  }
  componentWillLoad() {
    if (this._id && this.config) {
      this.init();
    }
    else {
      if (!this._id) {
        this.setError(index.h("span", null, "yduqs-zoom-challenge needs a ", index.h("strong", null, "valid attribute `id`"), "."));
      }
      if (!this.config) {
        this.setError(index.h("span", null, "yduqs-zoom-challenge needs a ", index.h("strong", null, "valid attribute `config`"), "."));
      }
    }
  }
  getPos(e) {
    e.preventDefault();
    if (this.step !== _STEP_.GAME)
      return;
    this.showInfo = false;
    let x, y, displayX, displayY;
    const rect = e.target.getBoundingClientRect();
    if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
      const touch = (e.originalEvent || e).touches[0] || (e.originalEvent || e).changedTouches[0];
      x = touch.pageX - rect.left;
      y = touch.pageY - rect.top;
    }
    else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    displayX = (x - (this.displayElem.clientWidth / 2));
    displayY = (y - this.displayElem.clientHeight - 20);
    const vectorX = (this.displayImg.clientWidth / this.stageElem.clientWidth * x) - (this.displayElem.clientWidth / 2);
    const vectorY = (this.displayImg.clientHeight / this.stageElem.clientHeight * y) - (this.displayElem.clientHeight / 2);
    this.displayImg.style.left = `${vectorX > 0 ? -Math.abs(vectorX) : Math.abs(vectorX)}px`;
    this.displayImg.style.top = `${vectorY > 0 ? -Math.abs(vectorY) : Math.abs(vectorY)}px`;
    // Reposicionando quando o preview passar da borda direita
    if (displayX + this.displayElem.clientWidth > this.stageElem.clientWidth) {
      displayX = displayX - ((displayX + this.displayElem.clientWidth) - this.stageElem.clientWidth) - 5;
    }
    // Reposicionando quando o preview passar da borda superior
    if (displayY + rect.top < 0) {
      displayY = y + 20;
    }
    this.displayElem.style.opacity = '1';
    this.displayElem.style.left = `${displayX}px`;
    this.displayElem.style.top = `${displayY}px`;
  }
  /**
   * Muda para a proxima imagem ou finaliza a Atividade
   * @param approved Se resposta é positiva ou negativa
   */
  next(approved) {
    const newSequence = [...(this.sequence || [])];
    newSequence.push(approved);
    this.sequence = newSequence;
    if (this.items.length > this.sequence.length) {
      this.selected = this.items[this.sequence.length];
    }
    else {
      // TODO - ACABOU
      this.step = _STEP_.FEEDBACK;
      if (this.sequence.every((value, index) => value === this.items[index].approved)) {
        this.feedback = {
          text: "Texto do Feedback POSITIVO",
          isPositive: true
        };
      }
      else {
        this.feedback = {
          text: "Texto do Feedback NEGATIVO",
          isPositive: false
        };
      }
    }
  }
  handleCloseFeedback() {
    var _a;
    this.showInfo = true;
    if (this.step === _STEP_.FEEDBACK) {
      if ((_a = this.feedback) === null || _a === void 0 ? void 0 : _a.isPositive) {
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
  * Reinicializa as variáveis
  */
  reset() {
    this.showInfo = true;
    this.sequence = [];
    this.selected = this.items[0];
    this.step = _STEP_.GAME;
  }
  handleCursorLeave() {
    if (this.step === _STEP_.GAME) {
      this.showInfo = true;
      this.displayElem.style.opacity = '0';
    }
  }
  handleStartGame() {
    this.showInfo = true;
    this.step = _STEP_.GAME;
  }
  render() {
    var _a, _b;
    return (index.h(index.Host, { class: `c-lab-game c-zoom c-zoom-challenge step-${this.step}`, ref: ref => (this.hostElem = ref) }, this.step !== _STEP_.LOADING ? (index.h(index.Fragment, null, index.h("header", { class: "c-lab-game-header" }, index.h("div", { class: "c-lab-game-header-item c-lab-game-tutorial-item c-lab-game-chances" }, [...Array(this.chances)].map((item, index$1) => ((item || !item) /* GAMBIARRA PARA COMPILAR */ && (index$1 < this.chances - this.usedChances) ? (index.h("i", { class: "material-icons active" }, "favorite")) : (index.h("i", { class: "material-icons" }, "favorite_border")))))), index.h("div", { class: "c-lab-game-container" }, index.h("div", { class: `c-lab-game-info ${this.showInfo ? 'show' : 'hide'}` }, this.step === _STEP_.INFO ? (index.h(index.Fragment, null, index.h("div", { class: "c-lab-game-info-text", innerHTML: this.info }), index.h("div", { class: "btns" }, index.h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.handleStartGame() }, "Come\u00E7ar")))) : (index.h(index.Fragment, null, index.h("div", { class: "c-lab-game-info-text" }, index.h("p", null, this.selected.text)), index.h("div", { class: "btns" }, index.h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.next(true) }, index.h("i", { class: "material-icons" }, "check"), this.positiveBtnText), index.h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.next(false) }, index.h("i", { class: "material-icons" }, "close"), this.negativeBtnText)), index.h("div", { class: "expand-btn" }, index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small p-btn", onClick: () => this.showInfo = !this.showInfo }, index.h("i", { class: "p-btn c-button__icon material-icons" }, this.showInfo ? 'chevron_left' : 'chevron_right')))))), index.h("div", { class: "c-lab-game-stage" }, index.h("div", Object.assign({ class: "img", ref: ref => (this.stageElem = ref) }, this.stageAttr), index.h("img", { src: this.selected.thumb, alt: "" }), this.step === _STEP_.GAME && (index.h("div", { class: "c-lab-game-stage-preview", ref: ref => (this.displayElem = ref) }, index.h("img", { src: this.selected.image, alt: "", ref: ref => (this.displayImg = ref) })))))), this.step === _STEP_.FEEDBACK && (index.h("yduqs-modal", { variant: "lab", size: "small", id: `${this._id}-feedback-modal`, isopen: true }, index.h("div", { class: "c-lab-game-modal-feedback" }, index.h("div", { class: "content" }, index.h("p", null, (_a = this.feedback) === null || _a === void 0 ? void 0 : _a.text)), !((_b = this.feedback) === null || _b === void 0 ? void 0 : _b.isPositive) && (index.h("div", { class: "result" }, this.sequence.map((value, index$1) => {
      var _a, _b;
      return (index.h("div", { class: "item" }, index.h("img", { src: (_a = this.items[index$1]) === null || _a === void 0 ? void 0 : _a.image, alt: "" }), value === ((_b = this.items[index$1]) === null || _b === void 0 ? void 0 : _b.approved) ? (index.h("i", { class: "material-icons icon success" }, "sentiment_very_satisfied")) : (index.h("i", { class: "material-icons icon error" }, "sentiment_dissatisfied"))));
    }))), index.h("footer", null, index.h("button", { type: "button", class: "c-button", onClick: () => this.handleCloseFeedback() }, this.feedback.isPositive ? 'Continuar' : (this.usedChances + 1 === this.chances) ? 'Voltar para Teoria' : 'Tentar outra vez'))))))) : (index.h("yduqs-lab-error", { errors: this.error }))));
  }
};

exports.yduqs_zoom_challenge = YduqsZoomChallenge;
