'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');
const i18n = require('./i18n-b31dba28.js');
const utils = require('./utils-d6d1bd9f.js');

const YduqsScore = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Título do componente
     */
    this.datatitle = i18n.i18n('score.pontuacao');
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
    return (index.h(index.Host, { class: "c-score" }, index.h("h2", { class: "c-score-title" }, utils.replaceLiteral(this.datatitle, { score, total })), Boolean(this.datasubtitle) && index.h("p", { class: "c-score-subtitle" }, this.datasubtitle), (_a = (typeof this.items === 'string' ? JSON.parse(this.items) : this.items)) === null || _a === void 0 ? void 0 :
      _a.map((item, index$1) => {
        var _a, _b;
        return (index.h("div", { class: `c-score-item ${item.score == item.total ? 'all' : item.score < (item.total / 2) ? 'none' : 'some'}` }, index.h("strong", { class: "index" }, index$1 + 1), index.h("span", { class: "label" }, item.label), index.h("span", { class: "score" }, `Ponto${item.score === 1 ? '' : 's'} ${item.score}/${item.total}`), index.h("a", { class: "anchor", href: (_a = item.anchor) === null || _a === void 0 ? void 0 : _a.url }, (_b = item.anchor) === null || _b === void 0 ? void 0 : _b.label)));
      })));
  }
};

exports.yduqs_score = YduqsScore;
