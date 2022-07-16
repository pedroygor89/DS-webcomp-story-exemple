'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');
const i18n = require('./i18n-b31dba28.js');
const utils = require('./utils-d6d1bd9f.js');

const YduqsInteractiveMedia = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Título do Cabeçalho
     */
    this.headertitle = i18n.i18n('interactiveMedia.title');
    /**
     * Texto descritivo do cabeçalho
     */
    this.headertext = i18n.i18n('interactiveMedia.description');
    /**
     * Icone do cabeçalho
     */
    this.headericon = "signpost";
    this.renderButton = (props) => {
      var _a, _b;
      return (index.h("button", Object.assign({ class: "c-button c-button--primary u-text--small" }, props.attr), ((_a = props.icon) === null || _a === void 0 ? void 0 : _a.left) && index.h("i", { class: "material-icons" }, props.icon.left), props.value, ((_b = props.icon) === null || _b === void 0 ? void 0 : _b.right) && index.h("i", { class: "material-icons" }, props.icon.right)));
    };
  }
  init() {
    this.current = this.medias[0];
  }
  reset() {
    this.quizSelectedAnswer = null;
  }
  handleQuizSelect({ detail }) {
    this.quizSelectedAnswer = detail;
  }
  setCurrent(id) {
    this.current = this.medias.find((item) => item.id == id);
  }
  handleQuizSubmit() {
    var _a;
    this.current.answer = (_a = this.current) === null || _a === void 0 ? void 0 : _a.answers.find((answer) => answer.id === this.quizSelectedAnswer.id);
    this.setCurrent(this.quizSelectedAnswer.value);
  }
  componentWillLoad() {
    fetch(this.config)
      .then((response) => response.json())
      .then(response => {
      this.medias = response;
    });
  }
  getVideo(data) {
    return (index.h("div", { class: "c-interactive-video" }, index.h("yduqs-video-player", { transparent: true, src: data.url, videoId: String(data.id), covered: data.covered, width: "100%" }), index.h("footer", null, this.renderButton({
      value: i18n.i18n('interactiveMedia.video.btn'),
      icon: {
        right: 'chevron_right'
      },
      attr: {
        onClick: () => this.setCurrent(data.goto)
      }
    }))));
  }
  getQuiz(data) {
    var _a, _b;
    const answers = (_a = data.answers) === null || _a === void 0 ? void 0 : _a.map((item) => ({
      id: item.id,
      label: item.text,
      value: item.to
    }));
    const quizes = (_b = this.medias) === null || _b === void 0 ? void 0 : _b.filter((item) => item.type === 'quiz');
    return (index.h("div", { class: "c-interactive-quiz" }, index.h("yduqs-quiz", { dataid: data.id, overline: utils.replaceLiteral(i18n.i18n('interactiveMedia.quiz.overline'), { index: String(((quizes === null || quizes === void 0 ? void 0 : quizes.filter((item) => Boolean(item.answer)).length) || 0) + 1), total: String(quizes === null || quizes === void 0 ? void 0 : quizes.length) }), question: data.text, answers: answers }), index.h("footer", null, this.renderButton({
      value: i18n.i18n('interactiveMedia.quiz.btn'),
      attr: {
        disabled: !Boolean(this.quizSelectedAnswer),
        onClick: () => this.handleQuizSubmit()
      }
    }))));
  }
  getInfo(data) {
    var _a;
    return (index.h("div", { class: "c-interactive-info" }, index.h("h2", { class: "c-info-title" }, data.title), index.h("p", { class: "c-info-text" }, data.text), index.h("footer", null, (_a = data.goto) === null || _a === void 0 ? void 0 : _a.map((item) => (this.renderButton({
      value: item.text,
      attr: {
        onClick: () => this.setCurrent(item.to)
      }
    }))))));
  }
  getScore(data) {
    var _a;
    const quizzes = this.medias.filter((item) => item.type === 'quiz');
    let totalPoints = 0;
    let totalScore = 0;
    const items = quizzes.map((quiz) => {
      let points = 0;
      quiz.answers.forEach((answer) => {
        points = points < answer.points ? answer.points : points;
      });
      totalPoints += points;
      totalScore += quiz.answer.points;
      return {
        score: quiz.answer.points,
        total: points,
        label: quiz.module.name,
        anchor: {
          url: quiz.module.anchor,
          label: i18n.i18n('interactiveMedia.score.anchorLabel'),
        }
      };
    });
    // Definindo o Subtitulo
    const defaultSubtitle = i18n.i18n(`interactiveMedia.score.subtitle.${totalScore === 0 ? 'none' : totalScore < totalPoints ? "some" : 'all'}`);
    return (index.h("div", { class: "c-interactive-score" }, index.h("yduqs-score", { datatitle: data.title || i18n.i18n('interactiveMedia.score.title'), datasubtitle: data.subtitle || defaultSubtitle, dataid: data.id, items: items }), index.h("footer", null, (_a = data.goto) === null || _a === void 0 ? void 0 : _a.map((item) => (this.renderButton({
      value: item.text,
      attr: {
        onClick: () => this.setCurrent(item.to)
      }
    }))))));
  }
  getComponent(data) {
    switch (data.type) {
      case 'video':
        return this.getVideo(data);
      case 'quiz':
        return this.getQuiz(data);
      case 'info':
        return this.getInfo(data);
      case 'score':
        return this.getScore(data);
      default:
        return this.getInfo(data);
    }
  }
  render() {
    return (index.h(index.Host, { class: "c-interactive" }, index.h("slot", { name: "header" }, index.h("header", { class: "c-interactive-header" }, index.h("div", { class: "row align-items-center justify-content-start" }, index.h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }, index.h("i", { class: "icon material-icons" }, this.headericon)), index.h("div", { class: "col-12 col-md-10 col-lg-8" }, index.h("h3", { class: "c-heading c-interactive-header-title" }, this.headertitle))), index.h("div", { class: "row align-items-center justify-content-start" }, index.h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }), index.h("div", { class: "col-12 col-md-10 col-lg-8" }, index.h("p", { class: "c-interactive-header-text" }, this.headertext))))), index.h("div", { class: "c-interactive-container" }, index.h("div", { class: "row align-items-center justify-content-start" }, index.h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }), index.h("div", { class: "col-12 col-md-10 col-lg-8" }, this.current ? (this.getComponent(this.current)) : (index.h("div", null, "LOading")))))));
  }
  static get watchers() { return {
    "medias": ["init"],
    "current": ["reset"]
  }; }
};

exports.yduqs_interactive_media = YduqsInteractiveMedia;
