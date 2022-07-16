import { r as registerInstance, h, a as Host } from './index-b21d89aa.js';

const YduqsCardDestaque = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.grade = 1;
    this.outline = false;
    this.icon = '';
  }
  render() {
    const gradeClass = `c-card-destaque--grade-${this.grade}`;
    const gradeIconClass = `c-card-destaque--grade-icon-${this.grade}`;
    const outlineClass = this.outline ? 'c-card-destaque--outline' : 'c-card-destaque--borderless';
    return (h(Host, { class: `c-card-destaque ${gradeIconClass}` }, h("div", { class: "c-card-destaque__icon-container" }, h("span", { class: "c-card-destaque__icon material-icons" }, this.icon)), h("div", { class: `c-card-destaque__container ${gradeClass} ${outlineClass}` }, h("slot", null))));
  }
};

export { YduqsCardDestaque as yduqs_card_destaque };
