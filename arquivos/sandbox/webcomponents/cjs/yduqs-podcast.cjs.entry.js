'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let Podcast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bgColor = 'c-podcast-bgColor';
    this.titleappears = 'showTitle';
  }
  async changeColor(novoValor) {
    if (novoValor) {
      this.bgColor = 'c-podcast-bgColor-dark';
    }
  }
  async showtitle(value) {
    if (!value) {
      this.titleappears = 'hiddenTitle';
    }
  }
  componentWillRender() {
    this.changeColor(this.dark);
    this.showtitle(this.withtitle);
  }
  render() {
    return (index.h("div", { class: `${this.bgColor} py-5` }, index.h("div", { class: "container" }, index.h("div", { class: `${this.titleappears} p-0 m-0` }, index.h("yduqs-title", { topic_icon: "keyboard_voice", topic_title: "Podcast" })), index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: 'col-12 col-md-10 col-lg-8' }, index.h("p", { class: `c-paragraph u-text u-small pb-4 ${this.bgColor}` }, this.subtitulo), index.h("yduqs-audio-player", { id: "meuPlayer", src: `${this.audio}` }))))));
  }
};

exports.yduqs_podcast = Podcast;
