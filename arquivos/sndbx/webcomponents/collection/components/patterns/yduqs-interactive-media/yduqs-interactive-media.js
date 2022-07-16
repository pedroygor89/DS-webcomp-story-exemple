import { Component, Host, h, State, Watch, Prop, Listen } from '@stencil/core';
import { i18n } from '../../../utils/i18n';
import { replaceLiteral } from '../../../utils/utils';
export class YduqsInteractiveMedia {
  constructor() {
    /**
     * Título do Cabeçalho
     */
    this.headertitle = i18n('interactiveMedia.title');
    /**
     * Texto descritivo do cabeçalho
     */
    this.headertext = i18n('interactiveMedia.description');
    /**
     * Icone do cabeçalho
     */
    this.headericon = "signpost";
    this.renderButton = (props) => {
      var _a, _b;
      return (h("button", Object.assign({ class: "c-button c-button--primary u-text--small" }, props.attr),
        ((_a = props.icon) === null || _a === void 0 ? void 0 : _a.left) && h("i", { class: "material-icons" }, props.icon.left),
        props.value,
        ((_b = props.icon) === null || _b === void 0 ? void 0 : _b.right) && h("i", { class: "material-icons" }, props.icon.right)));
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
    return (h("div", { class: "c-interactive-video" },
      h("yduqs-video-player", { transparent: true, src: data.url, videoId: String(data.id), covered: data.covered, width: "100%" }),
      h("footer", null, this.renderButton({
        value: i18n('interactiveMedia.video.btn'),
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
    return (h("div", { class: "c-interactive-quiz" },
      h("yduqs-quiz", { dataid: data.id, overline: replaceLiteral(i18n('interactiveMedia.quiz.overline'), { index: String(((quizes === null || quizes === void 0 ? void 0 : quizes.filter((item) => Boolean(item.answer)).length) || 0) + 1), total: String(quizes === null || quizes === void 0 ? void 0 : quizes.length) }), question: data.text, answers: answers }),
      h("footer", null, this.renderButton({
        value: i18n('interactiveMedia.quiz.btn'),
        attr: {
          disabled: !Boolean(this.quizSelectedAnswer),
          onClick: () => this.handleQuizSubmit()
        }
      }))));
  }
  getInfo(data) {
    var _a;
    return (h("div", { class: "c-interactive-info" },
      h("h2", { class: "c-info-title" }, data.title),
      h("p", { class: "c-info-text" }, data.text),
      h("footer", null, (_a = data.goto) === null || _a === void 0 ? void 0 : _a.map((item) => (this.renderButton({
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
          label: i18n('interactiveMedia.score.anchorLabel'),
        }
      };
    });
    // Definindo o Subtitulo
    const defaultSubtitle = i18n(`interactiveMedia.score.subtitle.${totalScore === 0 ? 'none' : totalScore < totalPoints ? "some" : 'all'}`);
    return (h("div", { class: "c-interactive-score" },
      h("yduqs-score", { datatitle: data.title || i18n('interactiveMedia.score.title'), datasubtitle: data.subtitle || defaultSubtitle, dataid: data.id, items: items }),
      h("footer", null, (_a = data.goto) === null || _a === void 0 ? void 0 : _a.map((item) => (this.renderButton({
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
    return (h(Host, { class: "c-interactive" },
      h("slot", { name: "header" },
        h("header", { class: "c-interactive-header" },
          h("div", { class: "row align-items-center justify-content-start" },
            h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" },
              h("i", { class: "icon material-icons" }, this.headericon)),
            h("div", { class: "col-12 col-md-10 col-lg-8" },
              h("h3", { class: "c-heading c-interactive-header-title" }, this.headertitle))),
          h("div", { class: "row align-items-center justify-content-start" },
            h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }),
            h("div", { class: "col-12 col-md-10 col-lg-8" },
              h("p", { class: "c-interactive-header-text" }, this.headertext))))),
      h("div", { class: "c-interactive-container" },
        h("div", { class: "row align-items-center justify-content-start" },
          h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }),
          h("div", { class: "col-12 col-md-10 col-lg-8" }, this.current ? (this.getComponent(this.current)) : (h("div", null, "LOading")))))));
  }
  static get is() { return "yduqs-interactive-media"; }
  static get properties() { return {
    "headertitle": {
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
        "text": "T\u00EDtulo do Cabe\u00E7alho"
      },
      "attribute": "headertitle",
      "reflect": false,
      "defaultValue": "i18n('interactiveMedia.title')"
    },
    "headertext": {
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
        "text": "Texto descritivo do cabe\u00E7alho"
      },
      "attribute": "headertext",
      "reflect": false,
      "defaultValue": "i18n('interactiveMedia.description')"
    },
    "headericon": {
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
        "text": "Icone do cabe\u00E7alho"
      },
      "attribute": "headericon",
      "reflect": false,
      "defaultValue": "\"signpost\""
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
        "text": "Url com o endere\u00E7o do arquivo de configura\u00E7\u00E3o"
      },
      "attribute": "config",
      "reflect": false
    }
  }; }
  static get states() { return {
    "medias": {},
    "current": {},
    "quizSelectedAnswer": {}
  }; }
  static get watchers() { return [{
      "propName": "medias",
      "methodName": "init"
    }, {
      "propName": "current",
      "methodName": "reset"
    }]; }
  static get listeners() { return [{
      "name": "quizSelect",
      "method": "handleQuizSelect",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
