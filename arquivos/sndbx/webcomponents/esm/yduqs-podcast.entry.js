import { r as registerInstance, h } from './index-b21d89aa.js';

const Podcast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: `${this.bgColor} py-5` }, h("div", { class: "container" }, h("div", { class: `${this.titleappears} p-0 m-0` }, h("yduqs-title", { topic_icon: "keyboard_voice", topic_title: "Podcast" })), h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: 'col-12 col-md-10 col-lg-8' }, h("p", { class: `c-paragraph u-text u-small pb-4 ${this.bgColor}` }, this.subtitulo), h("yduqs-audio-player", { id: "meuPlayer", src: `${this.audio}` }))))));
  }
};

export { Podcast as yduqs_podcast };
