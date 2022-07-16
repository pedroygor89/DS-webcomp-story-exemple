'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let Timeline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.horizontal = false;
  }
  render() {
    const typeClass = this.horizontal ? `o-timeline--horizontal` : '';
    const isdarkmode = this.dark ? `o-timeline--dark` : '';
    return (index.h("ol", { class: `o-timeline ${typeClass} ${isdarkmode}` }, index.h("slot", null)));
  }
};

exports.yduqs_timeline = Timeline;
