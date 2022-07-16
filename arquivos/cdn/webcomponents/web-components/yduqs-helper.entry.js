import { r as registerInstance, h } from './index-5acc1e77.js';

const YduqsHelper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    console.log('helper will load');
  }
  componentWillRender() {
    console.log('helper will render');
  }
  render() {
    console.log('helper render');
    return h("div", { class: "c-helper" });
  }
  componentDidRender() {
    console.log('helper did render');
  }
  componentDidLoad() {
    console.log('helper did load');
  }
};

export { YduqsHelper as yduqs_helper };
