'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f761ffe9.js');

const YduqsActivity = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async initialize(config) {
    this.settings = config;
  }
  renderActivities() {
    const activitiesList = [];
    if (this.settings !== undefined) {
      this.settings.activities.forEach(activity => {
        activitiesList.push(index.h("div", { class: "activity-block" }, index.h("div", { class: "activity-question" }, index.h("h3", null, activity.question_title)), index.h("div", { class: "activity-options" }, index.h("yduqs-card-selecionavel", { "correct-answer": activity.correct_anwser }, index.h("yduqs-card-selecionavel-item", { optionid: "a" }, index.h("p", { class: "c-paragraph" }, activity.options[0])), index.h("yduqs-card-selecionavel-item", { optionid: "b" }, index.h("p", { class: "c-paragraph" }, activity.options[1])), index.h("yduqs-card-selecionavel-item", { optionid: "c" }, index.h("p", { class: "c-paragraph" }, activity.options[2])), index.h("yduqs-card-selecionavel-item", { optionid: "d" }, index.h("p", { class: "c-paragraph" }, activity.options[3])), index.h("yduqs-card-selecionavel-item", { optionid: "e" }, index.h("p", { class: "c-paragraph" }, activity.options[4])))), index.h("div", { class: "activity-button" }, index.h("button", { type: "button", class: "c-button", tabindex: "1" }, "Responder")), index.h("div", { class: "activity-positive-feedback d-none" }, index.h("h4", null, "Parab\u00E9ns! A alternativa est\u00E1 correta."), activity.positive_feedback), index.h("div", { class: "activity-negative-feedback d-none" }, index.h("h4", null, "Opa! Algo n\u00E3o deu certo."), index.h("p", null, "Mas n\u00E3o se preocupe, voc\u00EA pode voltar ao t\u00F3pico ", index.h("a", { href: activity.negative_feedback_link }, activity.negative_feedback_topic), " e, ap\u00F3s reler o conte\u00FAdo, tentar novamente."))));
      });
    }
    return index.h("yduqs-activity-body", null, activitiesList);
  }
  render() {
    return (index.h("div", { class: "c-activity" }, index.h("div", { class: 'row align-items-center justify-content-center' }, index.h("div", { class: 'col-12' }, this.renderActivities()))));
  }
  get el() { return index.getElement(this); }
};

exports.yduqs_activity = YduqsActivity;
