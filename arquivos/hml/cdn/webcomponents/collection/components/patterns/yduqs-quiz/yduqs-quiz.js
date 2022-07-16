import { Component, Host, h, Prop, Event, State } from '@stencil/core';
/**
 * Texto de Informação
 */
export class YduqsQuiz {
  constructor() {
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
    return (h(Host, { class: "c-quiz" },
      this.overline && (h("h6", { class: "c-quiz-overline" }, this.overline)),
      h("h4", { class: "c-quiz-title" }, this.question),
      this.description && (h("div", { class: "c-quiz-description", innerHTML: this.description })), (_a = (typeof this.answers === 'string' ? JSON.parse(this.answers) : this.answers)) === null || _a === void 0 ? void 0 :
      _a.map((item, index) => (h("label", { class: `c-quiz-option ${item.id === this.selected ? 'active' : ''}` },
        h("input", { type: "radio", name: `quiz-${this.dataid}`, onInput: () => this.handleSelectItem(item) }),
        h("strong", { class: "index" }, this.getIndex(index)),
        h("span", { class: "text" }, item.label),
        h("i", { class: "material-icons icon" }, "done"))))));
  }
  static get is() { return "yduqs-quiz"; }
  static get properties() { return {
    "dataid": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "number | string",
        "resolved": "number | string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Identificador do Quiz"
      },
      "attribute": "dataid",
      "reflect": false
    },
    "overline": {
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
        "text": "Texto que aparece sobre a Pergunta"
      },
      "attribute": "overline",
      "reflect": false,
      "defaultValue": "''"
    },
    "question": {
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
        "text": "Texto da Pergunta"
      },
      "attribute": "question",
      "reflect": false
    },
    "description": {
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
        "text": "Descri\u00E7\u00E3o da Pergunta. Esse campo suporta HTML"
      },
      "attribute": "description",
      "reflect": false
    },
    "answers": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | iQuizAnswer[]",
        "resolved": "iQuizAnswer[] | string",
        "references": {
          "iQuizAnswer": {
            "location": "import",
            "path": "../../../models/yduqs-quiz"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Lista op\u00E7\u00F5es dispon\u00EDveis para escolha. Esse campo aceita uma string JSON ou um Objeto JSON\r\n{ id: number; label: string; value: any; }"
      },
      "attribute": "answers",
      "reflect": false
    },
    "indexType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'number' | 'letter'",
        "resolved": "\"letter\" | \"number\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Tipo de index das op\u00E7\u00F5es: Textual (a, b, c, etc) ou num\u00E9rico (1, 2, 3, etc)"
      },
      "attribute": "index-type",
      "reflect": false,
      "defaultValue": "'letter'"
    }
  }; }
  static get states() { return {
    "selected": {}
  }; }
  static get events() { return [{
      "method": "quizSelect",
      "name": "quizSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento disparado sempre que uma op\u00E7\u00E3o \u00E9 selecionada"
      },
      "complexType": {
        "original": "iQuizAnswer",
        "resolved": "{ id: number; label: string; value: any; }",
        "references": {
          "iQuizAnswer": {
            "location": "import",
            "path": "../../../models/yduqs-quiz"
          }
        }
      }
    }]; }
}
