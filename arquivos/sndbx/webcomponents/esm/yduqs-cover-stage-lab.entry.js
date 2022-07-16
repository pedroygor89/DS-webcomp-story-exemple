import { r as registerInstance, c as createEvent, h, a as Host } from './index-b21d89aa.js';

const YduqsCoverStageLab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.btnClick = createEvent(this, "btnClick", 7);
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
    return (h(Host, { class: "c-cover-stage", ref: ref => this.hostElem = ref, style: this.background ? { backgroundImage: `url('${this.background}')` } : {} }, h("div", { class: "c-cover-stage-aside" }), h("span", { class: `c-cover-stage-phase ${String(this.phaseNumber).length > 1 ? 'a-left' : ''}` }, this.phaseNumber), h("div", { class: "c-cover-stage-content" }, h("h6", { class: "c-cover-stage-content-overtitle" }, this.overtitle || `Fase ${this.phaseNumber}`), h("h3", { class: "c-cover-stage-content-title" }, this._title), h("p", { class: "c-cover-stage-content-desc" }, this.description), h("div", { class: "c-cover-stage-content-btn" }, (_a = this.parsedActions) === null || _a === void 0 ? void 0 : _a.map(item => (h("button", { type: "button", class: "c-button", style: { marginRight: '10px' }, onClick: () => this.handleBtnClick(item.action) }, item.label)))))));
  }
};

export { YduqsCoverStageLab as yduqs_cover_stage_lab };
