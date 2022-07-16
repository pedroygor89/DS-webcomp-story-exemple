import { r as registerInstance, h, a as Host } from './index-b21d89aa.js';
import { i as i18n } from './i18n-3725f313.js';
import { r as replaceLiteral } from './utils-42b62acd.js';

const YduqsScore = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, { class: "c-score" }, h("h2", { class: "c-score-title" }, replaceLiteral(this.datatitle, { score, total })), Boolean(this.datasubtitle) && h("p", { class: "c-score-subtitle" }, this.datasubtitle), (_a = (typeof this.items === 'string' ? JSON.parse(this.items) : this.items)) === null || _a === void 0 ? void 0 :
      _a.map((item, index) => {
        var _a, _b;
        return (h("div", { class: `c-score-item ${item.score == item.total ? 'all' : item.score < (item.total / 2) ? 'none' : 'some'}` }, h("strong", { class: "index" }, index + 1), h("span", { class: "label" }, item.label), h("span", { class: "score" }, `Ponto${item.score === 1 ? '' : 's'} ${item.score}/${item.total}`), h("a", { class: "anchor", href: (_a = item.anchor) === null || _a === void 0 ? void 0 : _a.url }, (_b = item.anchor) === null || _b === void 0 ? void 0 : _b.label)));
      })));
  }
};

export { YduqsScore as yduqs_score };
