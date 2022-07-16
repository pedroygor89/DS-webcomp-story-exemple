'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsQuestion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
    this.math = false;
    this.math_advanced = false;
    this.colunalg = '8';
  }
  async initialize(config) {
    this.settings = config;
  }
  componentWillLoad() {
    document.querySelector('body');
    const htmlTagQuestions = document.querySelector('html');
    const htmlLanguageQuestions = htmlTagQuestions.getAttribute('lang');
    if (htmlLanguageQuestions === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageQuestions === 'es') {
      this.spanish = true;
    }
  }
  componentDidLoad() {
    var _a;
    let questionScript = document.getElementById('loadQuestions');
    let titleStorybook = document.querySelector('title').textContent;
    if (questionScript === null && titleStorybook !== 'Storybook') {
      const scriptTag = document.createElement('script');
      if (document.body.classList.contains('template_recursos')) {
        scriptTag.src = 'https://stensineme.blob.core.windows.net/designsystem/test/yduqs_questions_index.js';
      }
      else {
        scriptTag.src = 'https://stensineme.blob.core.windows.net/assets/js/yduqs_questions.min.js';
      }
      scriptTag.type = 'text/javascript';
      scriptTag.id = 'loadQuestions';
      document.body.appendChild(scriptTag);
    }
    if (this.math) {
      let MathJax = (_a = window) === null || _a === void 0 ? void 0 : _a.MathJax;
      const mathTimer = setInterval(waitForMath, 250);
      function waitForMath(el) {
        try {
          MathJax.typeset(el);
          clearInterval(mathTimer);
        }
        catch (e) {
        }
      }
    }
  }
  renderQuestions() {
    const questionsList = [];
    const colunasLgSet = this.colunalg ? this.colunalg : '8';
    if (this.settings !== undefined) {
      this.settings.questions.forEach(question => {
        questionsList.push(index.h("div", { class: "question-block question-loading" }, index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: `col-12 col-md-10 col-lg-${colunasLgSet}` }, index.h("div", { class: "question-title", innerHTML: question.question_title }), index.h("div", { class: "question-options" }, index.h("yduqs-card-selecionavel", { "correct-answer": question.correct_anwser }, index.h("yduqs-card-selecionavel-item", { optionid: "a", innerHTML: question.options[0] }), index.h("yduqs-card-selecionavel-item", { optionid: "b", innerHTML: question.options[1] }), index.h("yduqs-card-selecionavel-item", { optionid: "c", innerHTML: question.options[2] }), index.h("yduqs-card-selecionavel-item", { optionid: "d", innerHTML: question.options[3] }), index.h("yduqs-card-selecionavel-item", { optionid: "e", innerHTML: question.options[4] }))), index.h("div", { class: "question-button" }, index.h("button", { type: "button", class: "c-button", tabindex: "1" }, this.english ? 'Answer' : this.spanish ? 'Responder' : 'Responder')), index.h("div", { class: "question-positive-feedback d-none", innerHTML: encodeURIComponent(question.positive_feedback) }), index.h("div", { class: "question-negative-feedback d-none" }, index.h("p", { class: "c-paragraph", innerHTML: this.english
            ? `But don't worry, you can go back to the <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> topic and try it again after rereading the content.`
            : this.spanish
              ? `Pero no te preocupes, puedes volver al tópico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> y, después de releer el contenido, volver a intentarlo.`
              : `Mas não se preocupe, você pode voltar ao tópico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> e, após reler o conteúdo, tentar novamente.` }))))));
      });
    }
    return index.h("yduqs-questions-body", null, ...questionsList);
  }
  render() {
    return index.h("div", { class: "c-questions" }, this.renderQuestions());
  }
  get el() { return index.getElement(this); }
};

exports.yduqs_questions = YduqsQuestion;
