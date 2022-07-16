'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsHelper = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    console.log('helper will load');
  }
  componentWillRender() {
    console.log('helper will render');
  }
  render() {
    console.log('helper render');
    return index.h("div", { class: "c-helper" });
  }
  componentDidRender() {
    console.log('helper did render');
  }
  componentDidLoad() {
    console.log('helper did load');
  }
};

exports.yduqs_helper = YduqsHelper;
