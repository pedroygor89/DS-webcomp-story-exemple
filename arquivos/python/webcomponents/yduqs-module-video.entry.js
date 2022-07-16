import { r as registerInstance, h } from './index-6ca065bd.js';

const ModuleVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.module_number = 1;
    this.module_icon = 'playlist_play';
  }
  async initialize(config) {
    this.settings = config;
  }
  render() {
    return (h("div", { class: "c-module-video" }, h("div", { class: "c-module-video__titles" }, h("div", { class: 'row align-items-center justify-content-start' }, h("yduqs-title", { topic_icon: this.module_icon, topic_title: this.title_gallery })), h("div", { class: "c-module-video__titles_subtitles row align-items-center justify-content-center" }, h("div", { class: "c-module-video__titles_subtitles_content col-12 col-md-10 col-lg-8" }, h("p", null, this.subtitle_gallery)))), h("div", { class: "c-module-video__box row align-items-center justify-content-center" }, h("div", { class: "c-module-video__box_playlist col-12 col-md-10 col-lg-8" }, h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number }))), h("yduqs-modal", { id: `modal-gallery-${this.module_number}` }, h("div", { class: "container" }, h("yduqs-gallery-video", { id: "gallery", module_number: this.module_number, title_gallery: `${this.title_gallery}`, subtitle_gallery: `${this.subtitle_gallery}` })))));
  }
};

export { ModuleVideo as yduqs_module_video };
