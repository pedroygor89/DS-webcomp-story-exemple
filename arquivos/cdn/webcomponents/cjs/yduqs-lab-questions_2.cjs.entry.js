'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const _STEP_ = {
  LOADING: 'loading',
  INFO: 'info',
  GAME: 'game',
};
const YduqsLabQuestions = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.challengeEnd = index.createEvent(this, "challengeEnd", 7);
    this.error = [];
    this.step = _STEP_.LOADING;
  }
  setError(error) {
    const err = [...this.error, error];
    this.error = err;
  }
  validateFetchedData(response) {
    if (response) {
      if (!response.items || !response.items.length) {
        this.setError(index.h("span", null, "yduqs-lab-questions needs a ", index.h("strong", null, "valid `items`"), "."));
      }
    }
    else {
      this.setError(index.h("span", null, "yduqs-lab-questions needs a ", index.h("strong", null, "valid `config response`"), "."));
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
      this.items = response === null || response === void 0 ? void 0 : response.items;
      if (!((_a = this.error) === null || _a === void 0 ? void 0 : _a.length)) {
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
        this.setError(index.h("span", null, "yduqs-lab-questions needs a ", index.h("strong", null, "valid attribute `id`"), "."));
      }
      if (!this.config) {
        this.setError(index.h("span", null, "yduqs-lab-questions needs a ", index.h("strong", null, "valid attribute `config`"), "."));
      }
    }
  }
  render() {
    var _a, _b;
    return (index.h(index.Host, { class: "c-lab-questions", ref: ref => (this.hostElem = ref) }, this.step !== _STEP_.LOADING ? (index.h(index.Fragment, null, (_a = this.items) === null || _a === void 0 ? void 0 : _a.map((item, index$1) => {
      var _a;
      return (index.h("yduqs-quiz", { dataid: `quiz-${index$1}`, question: item.text, description: "Description da pergunta", answers: (_a = item.answers) === null || _a === void 0 ? void 0 : _a.map((option, i) => ({ id: i, label: option.label, value: option.value })) }));
    }))) : (index.h(index.Fragment, null, "Loading...", ((_b = this.error) === null || _b === void 0 ? void 0 : _b.length) > 0 && (index.h("dl", null, index.h("dt", null, "Errors"), this.error.map(error => (index.h("dd", null, error)))))))));
  }
};

const YduqsQuiz = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.quizSelect = index.createEvent(this, "quizSelect", 7);
    /**
     * Texto que aparece sobre a Pergunta
     */
    this.overline = '';
    /**
     * Tipo de index das opções: Textual (a, b, c, etc) ou numérico (1, 2, 3, etc)
     */
    this.indexType = 'letter';
    this.letters = 'abcdefghijklmnopqrstuvxwyz'.split('');
  }
  getIndex(index) {
    switch (this.indexType) {
      case 'number':
        return (index + 1);
      default:
        return this.letters[index]; // TODO - Remover limitação no futuro
    }
  }
  handleSelectItem(item) {
    this.selected = item.id;
    this.quizSelect.emit(item);
  }
  render() {
    var _a;
    return (index.h(index.Host, { class: "c-quiz" }, this.overline && (index.h("h6", { class: "c-quiz-overline" }, this.overline)), index.h("h4", { class: "c-quiz-title" }, this.question), this.description && (index.h("div", { class: "c-quiz-description", innerHTML: this.description })), (_a = (typeof this.answers === 'string' ? JSON.parse(this.answers) : this.answers)) === null || _a === void 0 ? void 0 :
      _a.map((item, index$1) => (index.h("label", { class: `c-quiz-option ${item.id === this.selected ? 'active' : ''}` }, index.h("input", { type: "radio", name: `quiz-${this.dataid}`, onInput: () => this.handleSelectItem(item) }), index.h("strong", { class: "index" }, this.getIndex(index$1)), index.h("span", { class: "text" }, item.label), index.h("i", { class: "material-icons icon" }, "done"))))));
  }
};

exports.yduqs_lab_questions = YduqsLabQuestions;
exports.yduqs_quiz = YduqsQuiz;
