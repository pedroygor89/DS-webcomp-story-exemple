import { r as registerInstance, h, g as getElement } from './index-b21d89aa.js';

const YduqsQuestion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
        questionsList.push(h("div", { class: "question-block question-loading" }, h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: `col-12 col-md-10 col-lg-${colunasLgSet}` }, h("div", { class: "question-title", innerHTML: question.question_title }), h("div", { class: "question-options" }, h("yduqs-card-selecionavel", { "correct-answer": question.correct_anwser }, h("yduqs-card-selecionavel-item", { optionid: "a", innerHTML: question.options[0] }), h("yduqs-card-selecionavel-item", { optionid: "b", innerHTML: question.options[1] }), h("yduqs-card-selecionavel-item", { optionid: "c", innerHTML: question.options[2] }), h("yduqs-card-selecionavel-item", { optionid: "d", innerHTML: question.options[3] }), h("yduqs-card-selecionavel-item", { optionid: "e", innerHTML: question.options[4] }))), h("div", { class: "question-button" }, h("button", { type: "button", class: "c-button", tabindex: "1" }, this.english ? 'Answer' : this.spanish ? 'Responder' : 'Responder')), h("div", { class: "question-positive-feedback d-none", innerHTML: encodeURIComponent(question.positive_feedback) }), h("div", { class: "question-negative-feedback d-none" }, h("p", { class: "c-paragraph", innerHTML: this.english
            ? `But don't worry, you can go back to the <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> topic and try it again after rereading the content.`
            : this.spanish
              ? `Pero no te preocupes, puedes volver al t??pico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> y, despu??s de releer el contenido, volver a intentarlo.`
              : `Mas n??o se preocupe, voc?? pode voltar ao t??pico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> e, ap??s reler o conte??do, tentar novamente.` }))))));
      });
    }
    return h("yduqs-questions-body", null, ...questionsList);
  }
  render() {
    return h("div", { class: "c-questions" }, this.renderQuestions());
  }
  get el() { return getElement(this); }
};

export { YduqsQuestion as yduqs_questions };
