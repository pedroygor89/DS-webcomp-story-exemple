import { Component, h } from '@stencil/core';
export class YduqsHelper {
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
  static get is() { return "yduqs-helper"; }
}
