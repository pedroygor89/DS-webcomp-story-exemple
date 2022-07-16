import { Component, h, Prop, Method, Element } from '@stencil/core';
export class YduqsQuestion {
  async initialize(config) {
    this.settings = config;
  }
  renderQuestions() {
    const questionsList = [];
    if (this.settings !== undefined) {
      this.settings.questions.forEach(question => {
        questionsList.push(h("div", { class: "question-block" },
          h("div", { class: "question-title", innerHTML: question.question_title }),
          h("div", { class: "question-options" },
            h("yduqs-card-selecionavel", { "correct-answer": question.correct_anwser },
              h("yduqs-card-selecionavel-item", { optionid: "a", innerHTML: question.options[0] }),
              h("yduqs-card-selecionavel-item", { optionid: "b", innerHTML: question.options[1] }),
              h("yduqs-card-selecionavel-item", { optionid: "c", innerHTML: question.options[2] }),
              h("yduqs-card-selecionavel-item", { optionid: "d", innerHTML: question.options[3] }),
              h("yduqs-card-selecionavel-item", { optionid: "e", innerHTML: question.options[4] }))),
          h("div", { class: "question-button" },
            h("button", { type: "button", class: "c-button", tabindex: "1" }, "Responder")),
          h("div", { class: "question-positive-feedback d-none" },
            h("yduqs-card-intro", { text: "Parab\u00E9ns!" },
              h("h4", null, "A alternativa est\u00E1 correta."),
              h("p", { class: "c-paragraph", innerHTML: question.positive_feedback }))),
          h("div", { class: "question-negative-feedback d-none" },
            h("yduqs-card-intro", { text: "Opa!" },
              h("h4", null, "Algo n\u00E3o deu certo."),
              h("p", { class: "c-paragraph" },
                "Mas n\u00E3o se preocupe, voc\u00EA pode voltar ao t\u00F3pico ",
                h("a", { href: question.negative_feedback_link, innerHTML: question.negative_feedback_topic }),
                " e, ap\u00F3s reler o conte\u00FAdo, tentar novamente.")))));
      });
    }
    return h("yduqs-questions-body", null, questionsList);
  }
  render() {
    return (h("div", { class: "c-questions" },
      h("div", { class: 'row align-items-center justify-content-center' },
        h("div", { class: 'col-12' }, this.renderQuestions()))));
  }
  static get is() { return "yduqs-questions"; }
  static get properties() { return {
    "question_id": {
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
        "text": ""
      },
      "attribute": "question_id",
      "reflect": false
    },
    "settings": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "YduqsQuestionsModel",
        "resolved": "YduqsQuestionsModel",
        "references": {
          "YduqsQuestionsModel": {
            "location": "import",
            "path": "./yduqs-questions.model"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get methods() { return {
    "initialize": {
      "complexType": {
        "signature": "(config: YduqsQuestionsModel) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "YduqsQuestionsModel": {
            "location": "import",
            "path": "./yduqs-questions.model"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
}
