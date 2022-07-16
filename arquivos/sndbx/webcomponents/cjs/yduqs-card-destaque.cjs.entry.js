'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCardDestaque = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.grade = 1;
    this.outline = false;
    this.icon = '';
  }
  render() {
    const gradeClass = `c-card-destaque--grade-${this.grade}`;
    const gradeIconClass = `c-card-destaque--grade-icon-${this.grade}`;
    const outlineClass = this.outline ? 'c-card-destaque--outline' : 'c-card-destaque--borderless';
    return (index.h(index.Host, { class: `c-card-destaque ${gradeIconClass}` }, index.h("div", { class: "c-card-destaque__icon-container" }, index.h("span", { class: "c-card-destaque__icon material-icons" }, this.icon)), index.h("div", { class: `c-card-destaque__container ${gradeClass} ${outlineClass}` }, index.h("slot", null))));
  }
};

exports.yduqs_card_destaque = YduqsCardDestaque;
