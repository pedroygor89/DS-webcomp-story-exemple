import { r as registerInstance, h } from './index-6ca065bd.js';
import { i as i18n } from './i18n-d17a09a3.js';

const CardVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.id_video = '';
    this.type_video = 'Vem que eu te explico!';
    this.active = false;
  }
  render() {
    const styleBorder = this.border_bottom ? 'border-bottom' : '';
    const video_active = this.active ? 'active' : '';
    return (h("div", { id: this.id_video, class: 'c-card-video ' + styleBorder }, h("div", { class: 'c-card-video__thumb ' + video_active }, h("yduqs-image", { src: this.thumb_video, alt: "" }), h("div", { class: "c-card-video__description_time" }, this.time)), h("div", { class: "c-card-video__description" }, h("p", { class: "c-paragraph" }, parseInt(this.module_video) == 0 || this.module_video == 'todos'
      ? i18n('pager.todos')
      : parseInt(this.module_video) == 99 || this.module_video == 'apresentacao'
        ? i18n('pager.apresentacao')
        : parseInt(this.module_video) == 100 || this.module_video == 'conclusao'
          ? i18n('pager.conclusao')
          : i18n('pager.modulo') + ' ' + this.module_video, ' ', "- ", this.type_video), h("h2", { class: "c-heading", innerHTML: this.title_video }), h("p", { class: "c-paragraph", innerHTML: this.paragraph }))));
  }
};

export { CardVideo as yduqs_card_video };
