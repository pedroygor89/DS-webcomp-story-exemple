import { Component, h, Prop, Method, Element } from '@stencil/core';
export class YduqsActivity {
  async initialize(config) {
    this.settings = config;
  }
  renderActivities() {
    const activitiesList = [];
    if (this.settings !== undefined) {
      this.settings.activities.forEach(activity => {
        activitiesList.push(h("div", { class: "activity-block" },
          h("div", { class: "activity-question" },
            h("h3", null, activity.question_title)),
          h("div", { class: "activity-options" },
            h("yduqs-card-selecionavel", { "correct-answer": activity.correct_anwser },
              h("yduqs-card-selecionavel-item", { optionid: "a" },
                h("p", { class: "c-paragraph" }, activity.options[0])),
              h("yduqs-card-selecionavel-item", { optionid: "b" },
                h("p", { class: "c-paragraph" }, activity.options[1])),
              h("yduqs-card-selecionavel-item", { optionid: "c" },
                h("p", { class: "c-paragraph" }, activity.options[2])),
              h("yduqs-card-selecionavel-item", { optionid: "d" },
                h("p", { class: "c-paragraph" }, activity.options[3])),
              h("yduqs-card-selecionavel-item", { optionid: "e" },
                h("p", { class: "c-paragraph" }, activity.options[4])))),
          h("div", { class: "activity-button" },
            h("button", { type: "button", class: "c-button", tabindex: "1" }, "Responder")),
          h("div", { class: "activity-positive-feedback d-none" },
            h("h4", null, "Parab\u00E9ns! A alternativa est\u00E1 correta."),
            activity.positive_feedback),
          h("div", { class: "activity-negative-feedback d-none" },
            h("h4", null, "Opa! Algo n\u00E3o deu certo."),
            h("p", null,
              "Mas n\u00E3o se preocupe, voc\u00EA pode voltar ao t\u00F3pico ",
              h("a", { href: activity.negative_feedback_link }, activity.negative_feedback_topic),
              " e, ap\u00F3s reler o conte\u00FAdo, tentar novamente."))));
      });
    }
    return h("yduqs-activity-body", null, activitiesList);
  }
  render() {
    return (h("div", { class: "c-activity" },
      h("div", { class: 'row align-items-center justify-content-center' },
        h("div", { class: 'col-12' }, this.renderActivities()))));
  }
  static get is() { return "yduqs-activity"; }
  static get properties() { return {
    "activity_id": {
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
      "attribute": "activity_id",
      "reflect": false
    },
    "settings": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "YduqsActivityModel",
        "resolved": "YduqsActivityModel",
        "references": {
          "YduqsActivityModel": {
            "location": "import",
            "path": "./yduqs-activity.model"
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
        "signature": "(config: YduqsActivityModel) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "YduqsActivityModel": {
            "location": "import",
            "path": "./yduqs-activity.model"
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
