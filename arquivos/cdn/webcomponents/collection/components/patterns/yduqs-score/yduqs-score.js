import { Component, Host, h, Prop, State } from '@stencil/core';
import { i18n } from '../../../utils/i18n';
import { replaceLiteral } from '../../../utils/utils';
export class YduqsScore {
  constructor() {
    /**
     * Título do componente
     */
    this.datatitle = i18n('score.pontuacao');
    /**
     * Texto de subtítulo
     */
    this.datasubtitle = '';
    this.total = 0;
    this.score = 0;
  }
  componentWillLoad() {
    var _a;
    let score = 0;
    let total = 0;
    (_a = (typeof this.items === 'string' ? JSON.parse(this.items) : this.items)) === null || _a === void 0 ? void 0 : _a.forEach(item => {
      score += item.score;
      total += item.total;
    });
    this.score = score;
    this.total = total;
  }
  render() {
    var _a;
    const score = String(this.score);
    const total = String(this.total);
    return (h(Host, { class: "c-score" },
      h("h2", { class: "c-score-title" }, replaceLiteral(this.datatitle, { score, total })),
      Boolean(this.datasubtitle) && h("p", { class: "c-score-subtitle" }, this.datasubtitle), (_a = (typeof this.items === 'string' ? JSON.parse(this.items) : this.items)) === null || _a === void 0 ? void 0 :
      _a.map((item, index) => {
        var _a, _b;
        return (h("div", { class: `c-score-item ${item.score == item.total ? 'all' : item.score < (item.total / 2) ? 'none' : 'some'}` },
          h("strong", { class: "index" }, index + 1),
          h("span", { class: "label" }, item.label),
          h("span", { class: "score" }, `Ponto${item.score === 1 ? '' : 's'} ${item.score}/${item.total}`),
          h("a", { class: "anchor", href: (_a = item.anchor) === null || _a === void 0 ? void 0 : _a.url }, (_b = item.anchor) === null || _b === void 0 ? void 0 : _b.label)));
      })));
  }
  static get is() { return "yduqs-score"; }
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
    "datatitle": {
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
        "text": "T\u00EDtulo do componente"
      },
      "attribute": "datatitle",
      "reflect": false,
      "defaultValue": "i18n('score.pontuacao')"
    },
    "datasubtitle": {
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
        "text": "Texto de subt\u00EDtulo"
      },
      "attribute": "datasubtitle",
      "reflect": false,
      "defaultValue": "''"
    },
    "items": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "iScoreItem[] | string",
        "resolved": "iScoreItem[] | string",
        "references": {
          "iScoreItem": {
            "location": "import",
            "path": "../../../models/yduqs-score"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Lista de itens"
      },
      "attribute": "items",
      "reflect": false
    }
  }; }
  static get states() { return {
    "total": {},
    "score": {}
  }; }
}
