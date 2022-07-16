import { Component, Host, h, Prop, State, Event, Fragment } from '@stencil/core';
const _STEP_ = {
  LOADING: 'loading',
  INFO: 'info',
  GAME: 'game',
};
export class YduqsLabQuestions {
  constructor() {
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
        this.setError(h("span", null,
          "yduqs-lab-questions needs a ",
          h("strong", null, "valid `items`"),
          "."));
      }
    }
    else {
      this.setError(h("span", null,
        "yduqs-lab-questions needs a ",
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
      var _a;
      this.validateFetchedData(response);
      this.items = response === null || response === void 0 ? void 0 : response.items;
      if (!((_a = this.error) === null || _a === void 0 ? void 0 : _a.length)) {
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
          "yduqs-lab-questions needs a ",
          h("strong", null, "valid attribute `id`"),
          "."));
      }
      if (!this.config) {
        this.setError(h("span", null,
          "yduqs-lab-questions needs a ",
          h("strong", null, "valid attribute `config`"),
          "."));
      }
    }
  }
  render() {
    var _a, _b;
    return (h(Host, { class: "c-lab-questions", ref: ref => (this.hostElem = ref) }, this.step !== _STEP_.LOADING ? (h(Fragment, null, (_a = this.items) === null || _a === void 0 ? void 0 : _a.map((item, index) => {
      var _a;
      return (h("yduqs-quiz", { dataid: `quiz-${index}`, question: item.text, description: "Description da pergunta", answers: (_a = item.answers) === null || _a === void 0 ? void 0 : _a.map((option, i) => ({ id: i, label: option.label, value: option.value })) }));
    }))) : (h(Fragment, null,
      "Loading...",
      ((_b = this.error) === null || _b === void 0 ? void 0 : _b.length) > 0 && (h("dl", null,
        h("dt", null, "Errors"),
        this.error.map(error => (h("dd", null, error)))))))));
  }
  static get is() { return "yduqs-lab-questions"; }
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
    "items": {}
  }; }
  static get events() { return [{
      "method": "challengeEnd",
      "name": "challengeEnd",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento disparado no Final do Desafio"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
