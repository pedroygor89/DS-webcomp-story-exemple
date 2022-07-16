'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCoverStageLab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.btnClick = index.createEvent(this, "btnClick", 7);
    this.parsedActions = [];
  }
  componentWillLoad() {
    const ac = [];
    this.actions.split(';').forEach(item => {
      const it = item.split(':');
      ac.push({ label: it[1], action: it[0] });
    });
    this.parsedActions = ac;
  }
  handleBtnClick(action) {
    this.btnClick.emit({ phase: this.phaseNumber, action });
  }
  render() {
    var _a;
    return (index.h(index.Host, { class: "c-cover-stage", ref: ref => this.hostElem = ref, style: this.background ? { backgroundImage: `url('${this.background}')` } : {} }, index.h("div", { class: "c-cover-stage-aside" }), index.h("span", { class: `c-cover-stage-phase ${String(this.phaseNumber).length > 1 ? 'a-left' : ''}` }, this.phaseNumber), index.h("div", { class: "c-cover-stage-content" }, index.h("h6", { class: "c-cover-stage-content-overtitle" }, this.overtitle || `Fase ${this.phaseNumber}`), index.h("h3", { class: "c-cover-stage-content-title" }, this._title), index.h("p", { class: "c-cover-stage-content-desc" }, this.description), index.h("div", { class: "c-cover-stage-content-btn" }, (_a = this.parsedActions) === null || _a === void 0 ? void 0 : _a.map(item => (index.h("button", { type: "button", class: "c-button", style: { marginRight: '10px' }, onClick: () => this.handleBtnClick(item.action) }, item.label)))))));
  }
};

exports.yduqs_cover_stage_lab = YduqsCoverStageLab;
