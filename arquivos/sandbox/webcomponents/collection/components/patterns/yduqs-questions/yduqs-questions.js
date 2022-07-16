import { Component, h, Prop, Method, Element } from '@stencil/core';
export class YduqsQuestion {
  constructor() {
    this.english = false;
    this.spanish = false;
    this.math = false;
    this.math_advanced = false;
    this.colunalg = "8";
  }
  async initialize(config) {
    this.settings = config;
  }
  componentWillLoad() {
    let bodyHtml = document.querySelector('body');
    const htmlTagQuestions = document.querySelector('html');
    const htmlLanguageQuestions = htmlTagQuestions.getAttribute('lang');
    if (htmlLanguageQuestions === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageQuestions === 'es') {
      this.spanish = true;
    }
    if (this.math) {
      let assetsMath = document.getElementById('mathjax-assets');
      let wcMath = document.getElementById('mathjax-webcomponents');
      let yqMath = document.getElementById('mathjax-assets-questions');
      if (assetsMath === null && wcMath === null && yqMath === null) {
        const scriptTag = document.createElement('script');
        scriptTag.type = "text/javascript";
        scriptTag.id = "mathjax-webcomponents";
        if (document.body.classList.contains('template_recursos')) {
          scriptTag.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
        }
        else {
          scriptTag.src = "../assets/js/mathjax/es5/tex-chtml-full.js";
        }
        bodyHtml.appendChild(scriptTag);
      }
    }
  }
  componentDidLoad() {
    let bodyHtml = document.querySelector('body');
    let questionScript = document.getElementById('loadQuestions');
    let titleStorybook = document.querySelector('title').textContent;
    if (questionScript === null && titleStorybook !== 'Storybook') {
      const scriptTag = document.createElement('script');
      if (document.body.classList.contains('template_recursos')) {
        scriptTag.src = "https://stensineme.blob.core.windows.net/designsystem/test/yduqs_questions_index.js";
      }
      else {
        scriptTag.src = "../assets/js/yduqs_questions.js";
      }
      scriptTag.type = "text/javascript";
      scriptTag.id = "loadQuestions";
      bodyHtml.appendChild(scriptTag);
    }
    if (this.math) {
      let assetsMath = document.getElementById('mathjax-assets');
      let wcMath = document.getElementById('mathjax-webcomponents');
      let yqMath = document.getElementById('mathjax-assets-questions');
      if (assetsMath !== null || wcMath !== null || yqMath !== null) {
        const reloadMath = document.createElement('script');
        reloadMath.type = "text/javascript";
        reloadMath.id = "reload-wc";
        if (document.body.classList.contains('template_recursos')) {
          reloadMath.src = "https://stensineme.blob.core.windows.net/designsystem/test/yduqs_mathjax_reload.js";
        }
        else {
          reloadMath.src = "../assets/js/yduqs_mathjax_reload.js";
        }
        reloadMath.defer = true;
        bodyHtml.appendChild(reloadMath);
        setTimeout(function () {
          reloadMath.remove();
        }, 5000);
      }
    }
  }
  renderQuestions() {
    const questionsList = [];
    const colunasLgSet = this.colunalg ? this.colunalg : '8';
    if (this.settings !== undefined) {
      this.settings.questions.forEach(question => {
        questionsList.push(h("div", { class: "question-block question-loading" },
          h("div", { class: 'row align-items-center justify-content-center' },
            h("div", { class: `col-12 col-md-10 col-lg-${colunasLgSet}` },
              h("div", { class: "question-title", innerHTML: question.question_title }),
              h("div", { class: "question-options" },
                h("yduqs-card-selecionavel", { "correct-answer": question.correct_anwser },
                  h("yduqs-card-selecionavel-item", { optionid: "a", innerHTML: question.options[0] }),
                  h("yduqs-card-selecionavel-item", { optionid: "b", innerHTML: question.options[1] }),
                  h("yduqs-card-selecionavel-item", { optionid: "c", innerHTML: question.options[2] }),
                  h("yduqs-card-selecionavel-item", { optionid: "d", innerHTML: question.options[3] }),
                  h("yduqs-card-selecionavel-item", { optionid: "e", innerHTML: question.options[4] }))),
              h("div", { class: "question-button" },
                h("button", { type: "button", class: "c-button", tabindex: "1" }, this.english ? 'Answer' : this.spanish ? 'Responder' : 'Responder')),
              h("div", { class: "question-positive-feedback d-none", innerHTML: encodeURIComponent(question.positive_feedback) }),
              h("div", { class: "question-negative-feedback d-none" },
                h("p", { class: "c-paragraph", innerHTML: this.english ? `But don't worry, you can go back to the <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> topic and try it again after rereading the content.` :
                    this.spanish ? `Pero no te preocupes, puedes volver al tópico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> y, después de releer el contenido, volver a intentarlo.` :
                      `Mas não se preocupe, você pode voltar ao tópico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> e, após reler o conteúdo, tentar novamente.` }))))));
      });
    }
    return h("yduqs-questions-body", null, questionsList);
  }
  render() {
    return (h("div", { class: "c-questions" }, this.renderQuestions()));
  }
  static get is() { return "yduqs-questions"; }
  static get properties() { return {
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
    },
    "english": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "english",
      "reflect": false,
      "defaultValue": "false"
    },
    "spanish": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "spanish",
      "reflect": false,
      "defaultValue": "false"
    },
    "math": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "math",
      "reflect": false,
      "defaultValue": "false"
    },
    "math_advanced": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "math_advanced",
      "reflect": false,
      "defaultValue": "false"
    },
    "colunalg": {
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
      "attribute": "colunalg",
      "reflect": false,
      "defaultValue": "\"8\""
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
