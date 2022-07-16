import { r as registerInstance, c as createEvent, h, F as Fragment, a as Host } from './index-b21d89aa.js';

const _STEP_ = {
  LOADING: 'loading',
  INFO: 'info',
  GAME: 'game',
};
const YduqsLabQuestions = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.challengeEnd = createEvent(this, "challengeEnd", 7);
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
        this.setError(h("span", null, "yduqs-lab-questions needs a ", h("strong", null, "valid `items`"), "."));
      }
    }
    else {
      this.setError(h("span", null, "yduqs-lab-questions needs a ", h("strong", null, "valid `config response`"), "."));
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
      this.setError(h("span", null, "Fetched response is invalid:", error === null || error === void 0 ? void 0 :
        error.toString()));
    });
  }
  componentWillLoad() {
    if (this._id && this.config) {
      this.init();
    }
    else {
      if (!this._id) {
        this.setError(h("span", null, "yduqs-lab-questions needs a ", h("strong", null, "valid attribute `id`"), "."));
      }
      if (!this.config) {
        this.setError(h("span", null, "yduqs-lab-questions needs a ", h("strong", null, "valid attribute `config`"), "."));
      }
    }
  }
  render() {
    var _a, _b;
    return (h(Host, { class: "c-lab-questions", ref: ref => (this.hostElem = ref) }, this.step !== _STEP_.LOADING ? (h(Fragment, null, (_a = this.items) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
      var _a;
      return (h("yduqs-quiz", { dataid: `quiz-${index}`, question: item.text, description: "Description da pergunta", answers: (_a = item.answers) === null || _a === void 0 ? void 0 : _a.map((option, i) => ({ id: i, label: option.label, value: option.value })) }));
    }))) : (h(Fragment, null, "Loading...", ((_b = this.error) === null || _b === void 0 ? void 0 : _b.length) > 0 && (h("dl", null, h("dt", null, "Errors"), this.error.map(error => (h("dd", null, error)))))))));
  }
};

const YduqsQuiz = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.quizSelect = createEvent(this, "quizSelect", 7);
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
    return (h(Host, { class: "c-quiz" }, this.overline && (h("h6", { class: "c-quiz-overline" }, this.overline)), h("h4", { class: "c-quiz-title" }, this.question), this.description && (h("div", { class: "c-quiz-description", innerHTML: this.description })), (_a = (typeof this.answers === 'string' ? JSON.parse(this.answers) : this.answers)) === null || _a === void 0 ? void 0 :
      _a.map((item, index) => (h("label", { class: `c-quiz-option ${item.id === this.selected ? 'active' : ''}` }, h("input", { type: "radio", name: `quiz-${this.dataid}`, onInput: () => this.handleSelectItem(item) }), h("strong", { class: "index" }, this.getIndex(index)), h("span", { class: "text" }, item.label), h("i", { class: "material-icons icon" }, "done"))))));
  }
};

export { YduqsLabQuestions as yduqs_lab_questions, YduqsQuiz as yduqs_quiz };
