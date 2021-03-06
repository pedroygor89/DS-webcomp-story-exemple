import { r as registerInstance, c as createEvent, h, F as Fragment, a as Host } from './index-b21d89aa.js';

const _STEP_ = {
  LOADING: 'loading',
  INFO: 'info',
  GAME: 'game',
};
const YduqsZoomChallenge = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.challengeEnd = createEvent(this, "challengeEnd", 7);
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
        this.setError(h("span", null, "yduqs-zoom-challenge needs a ", h("strong", null, "valid `info`"), "."));
      }
      if (!response.items || !response.items.length) {
        this.setError(h("span", null, "yduqs-zoom-challenge needs a ", h("strong", null, "valid `items`"), "."));
      }
    }
    else {
      this.setError(h("span", null, "yduqs-zoom-challenge needs a ", h("strong", null, "valid `config response`"), "."));
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
      this.setError(h("span", null, "Fetched response is invalid:", error === null || error === void 0 ? void 0 :
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
        this.setError(h("span", null, "yduqs-zoom-challenge needs a ", h("strong", null, "valid attribute `id`"), "."));
      }
      if (!this.config) {
        this.setError(h("span", null, "yduqs-zoom-challenge needs a ", h("strong", null, "valid attribute `config`"), "."));
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
   * @param approved Se resposta ?? positiva ou negativa
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
  * Reinicializa as vari??veis
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
    return (h(Host, { class: `c-lab-game c-zoom c-zoom-challenge step-${this.step}`, ref: ref => (this.hostElem = ref) }, this.step !== _STEP_.LOADING ? (h(Fragment, null, h("header", { class: "c-lab-game-header" }, h("div", { class: "c-lab-game-header-item c-lab-game-tutorial-item c-lab-game-chances" }, [...Array(this.chances)].map((item, index) => ((item || !item) /* GAMBIARRA PARA COMPILAR */ && (index < this.chances - this.usedChances) ? (h("i", { class: "material-icons active" }, "favorite")) : (h("i", { class: "material-icons" }, "favorite_border")))))), h("div", { class: "c-lab-game-container" }, h("div", { class: `c-lab-game-info ${this.showInfo ? 'show' : 'hide'}` }, this.step === _STEP_.INFO ? (h(Fragment, null, h("div", { class: "c-lab-game-info-text", innerHTML: this.info }), h("div", { class: "btns" }, h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.handleStartGame() }, "Come\u00E7ar")))) : (h(Fragment, null, h("div", { class: "c-lab-game-info-text" }, h("p", null, this.selected.text)), h("div", { class: "btns" }, h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.next(true) }, h("i", { class: "material-icons" }, "check"), this.positiveBtnText), h("button", { type: "button", class: "c-button u-text--small", onClick: () => this.next(false) }, h("i", { class: "material-icons" }, "close"), this.negativeBtnText)), h("div", { class: "expand-btn" }, h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small p-btn", onClick: () => this.showInfo = !this.showInfo }, h("i", { class: "p-btn c-button__icon material-icons" }, this.showInfo ? 'chevron_left' : 'chevron_right')))))), h("div", { class: "c-lab-game-stage" }, h("div", Object.assign({ class: "img", ref: ref => (this.stageElem = ref) }, this.stageAttr), h("img", { src: this.selected.thumb, alt: "" }), this.step === _STEP_.GAME && (h("div", { class: "c-lab-game-stage-preview", ref: ref => (this.displayElem = ref) }, h("img", { src: this.selected.image, alt: "", ref: ref => (this.displayImg = ref) })))))), this.step === _STEP_.FEEDBACK && (h("yduqs-modal", { variant: "lab", size: "small", id: `${this._id}-feedback-modal`, isopen: true }, h("div", { class: "c-lab-game-modal-feedback" }, h("div", { class: "content" }, h("p", null, (_a = this.feedback) === null || _a === void 0 ? void 0 : _a.text)), !((_b = this.feedback) === null || _b === void 0 ? void 0 : _b.isPositive) && (h("div", { class: "result" }, this.sequence.map((value, index) => {
      var _a, _b;
      return (h("div", { class: "item" }, h("img", { src: (_a = this.items[index]) === null || _a === void 0 ? void 0 : _a.image, alt: "" }), value === ((_b = this.items[index]) === null || _b === void 0 ? void 0 : _b.approved) ? (h("i", { class: "material-icons icon success" }, "sentiment_very_satisfied")) : (h("i", { class: "material-icons icon error" }, "sentiment_dissatisfied"))));
    }))), h("footer", null, h("button", { type: "button", class: "c-button", onClick: () => this.handleCloseFeedback() }, this.feedback.isPositive ? 'Continuar' : (this.usedChances + 1 === this.chances) ? 'Voltar para Teoria' : 'Tentar outra vez'))))))) : (h("yduqs-lab-error", { errors: this.error }))));
  }
};

export { YduqsZoomChallenge as yduqs_zoom_challenge };
