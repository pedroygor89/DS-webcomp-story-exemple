import { r as registerInstance, h } from './index-b21d89aa.js';
import { i as i18n } from './i18n-3725f313.js';

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
    return (h("div", { id: this.id_video, class: "c-card-video " + styleBorder }, h("div", { class: "c-card-video__thumb " + video_active }, h("yduqs-image", { src: this.thumb_video, alt: "" }), h("div", { class: "c-card-video__description_time" }, this.time)), h("div", { class: "c-card-video__description" }, h("p", { class: "c-paragraph" }, parseInt(this.module_video) == 0 || this.module_video == 'todos' ? i18n('pager.todos') : parseInt(this.module_video) == 99 || this.module_video == 'apresentacao' ? i18n('pager.apresentacao') : parseInt(this.module_video) == 100 || this.module_video == 'conclusao' ? i18n('pager.conclusao') : i18n('pager.modulo') + ' ' + this.module_video, " - ", this.type_video), h("h2", { class: "c-heading", innerHTML: this.title_video }), h("p", { class: "c-paragraph", innerHTML: this.paragraph }))));
  }
};

const YduqsImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.covered = false;
    this._iscovered = false;
  }
  handleCover() {
    this.coverChange();
  }
  componentWillLoad() {
    this._iscovered = this.covered;
  }
  coverChange() {
    this.covered ? this._iscovered = !this._iscovered : this._iscovered = false;
  }
  render() {
    return (h("div", { style: { width: `${this.width}`, height: `${this.height}` }, class: { 'c-image': true, 'covered': this._iscovered }, onClick: () => this.coverChange() }, this.covered ?
      h("div", { class: { 'c-image__capa': true } }, h("svg", { width: "54", height: "54", viewBox: "0 0 54 54", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M27 14.625C33.21 14.625 38.25 19.665 38.25 25.875C38.25 27.0225 38.025 28.125 37.71 29.16L44.595 36.045C47.7225 33.2775 50.1975 29.8125 51.75 25.8525C47.8575 15.9975 38.25 9.00003 27 9.00003C24.1425 9.00003 21.3975 9.45003 18.81 10.2825L23.6925 15.165C24.75 14.85 25.8525 14.625 27 14.625ZM6.0975 7.11003C5.22 7.98753 5.22 9.40503 6.0975 10.2825L10.53 14.715C6.885 17.6175 3.9825 21.4425 2.25 25.875C6.1425 35.7525 15.75 42.75 27 42.75C30.42 42.75 33.6825 42.075 36.6975 40.905L42.8175 47.025C43.695 47.9025 45.1125 47.9025 45.99 47.025C46.8675 46.1475 46.8675 44.73 45.99 43.8525L9.2925 7.11003C8.415 6.23253 6.975 6.23253 6.0975 7.11003ZM27 37.125C20.79 37.125 15.75 32.085 15.75 25.875C15.75 24.1425 16.155 22.5 16.8525 21.06L20.385 24.5925C20.3175 24.9975 20.25 25.425 20.25 25.875C20.25 29.61 23.265 32.625 27 32.625C27.45 32.625 27.855 32.5575 28.2825 32.4675L31.815 36C30.3525 36.72 28.7325 37.125 27 37.125ZM33.6825 25.1325C33.345 21.9825 30.87 19.53 27.7425 19.1925L33.6825 25.1325Z", fill: "white" })), h("p", { class: "c-image__text" }, "Conte\u00FAdo sens\u00EDvel ", h("br", null), "Clique na imagem para visualiz\u00E1-la"))
      : '', h("img", { class: "o-image", alt: this.alt, title: this.img_title, src: this.src, loading: "lazy" })));
  }
  static get watchers() { return {
    "covered": ["handleCover"]
  }; }
};

export { CardVideo as yduqs_card_video, YduqsImage as yduqs_image };
