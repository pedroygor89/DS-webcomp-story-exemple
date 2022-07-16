'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsFeedbackThumb = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: `c-feedback-thumb ${this._class} ${this.feedback ? 'success' : 'error'}` }, index.h("img", { src: this.image, alt: "" }), index.h("i", { class: `material-icons icon ${this.feedback ? 'success' : 'error'}` }, this.feedback ? 'check_circle' : 'cancel')));
  }
};

exports.yduqs_feedback_thumb = YduqsFeedbackThumb;
