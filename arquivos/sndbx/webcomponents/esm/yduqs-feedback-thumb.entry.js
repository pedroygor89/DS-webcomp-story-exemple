import { r as registerInstance, h, a as Host } from './index-b21d89aa.js';

const YduqsFeedbackThumb = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: `c-feedback-thumb ${this._class} ${this.feedback ? 'success' : 'error'}` }, h("img", { src: this.image, alt: "" }), h("i", { class: `material-icons icon ${this.feedback ? 'success' : 'error'}` }, this.feedback ? 'check_circle' : 'cancel')));
  }
};

export { YduqsFeedbackThumb as yduqs_feedback_thumb };
