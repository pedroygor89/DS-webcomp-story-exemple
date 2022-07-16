'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dark = false;
    this.outlined = false;
    this.equal_height = false;
    this.small = false;
  }
  render() {
    const darkMode = this.dark ? 'c-card--dark' : '';
    const colorMode = this.outlined ? 'c-card--outlined' : darkMode;
    const equalHeight = this.equal_height ? 'h-100' : '';
    const pSmall = this.small ? 'c-card-small-p' : '';
    return (index.h(index.Host, { class: `c-card ${colorMode} ${equalHeight} ${pSmall}` }, index.h("slot", null)));
  }
};

exports.yduqs_card = YduqsCard;
