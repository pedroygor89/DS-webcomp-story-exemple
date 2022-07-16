import { r as registerInstance, h } from './index-5acc1e77.js';

const Title = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: `c-topic-title ${this.dark ? 'c-topic-title--dark' : ''}` }, h("div", { class: 'row align-items-center justify-content-start' }, h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }, this.topic_icon ? h("span", { class: "material-icons" }, this.topic_icon) : h("span", { class: "title-bar" })), h("div", { class: 'col-12 col-md-10 col-lg-8' }, h("h1", { class: "c-heading u-title-small", innerHTML: this === null || this === void 0 ? void 0 : this.topic_title })))));
  }
};

export { Title as yduqs_title };
