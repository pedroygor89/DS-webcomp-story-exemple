import { r as registerInstance, h } from './index-b21d89aa.js';

const Textarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.collaboration_text = 'Colaboração';
    this.cover_preparation = false;
    this.video = 'https://play.yduqs.videolib.live/index.html?token=27efc41292214362beddde52d341a3f6';
    this.english = false;
    this.spanish = false;
  }
  componentWillLoad() {
    const htmlTagCover = document.querySelector('html');
    const htmlLanguageCover = htmlTagCover.getAttribute('lang');
    if (htmlLanguageCover === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageCover === 'es') {
      this.spanish = true;
    }
  }
  openModal(getModal) {
    var modal = document.getElementById(getModal);
    modal.setAttribute('isopen', 'true');
  }
  render() {
    return (h("div", { class: `c-cover` }, h("div", { class: "c-cover-bg c-cover-height", title: `${this.background_img_title}`, style: { 'background-image': "url('" + this.background_img + "')" } }, h("div", { class: "container c-cover-height" }, h("div", { class: "row align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-start c-cover-height" }, h("div", { class: "col-12" }, h("div", { class: "theme-details" }, h("h1", { innerHTML: this.title_cover }), h("div", { class: "row align-items-center justify-content-center theme-details-block" }, h("div", { class: `col-12 col-sm-12 col-md-7 col-lg-7` }, h("slot", { name: "yduqs-cover-doktor-definition" }), h("div", { class: "mt-5 c-cover-buttons" }, h("button", { class: "c-button u-text--small d-inline-block me-3 mb-3", onClick: () => this.openModal('cover-video') }, h("span", { class: "material-icons d-inline-block" }, "ondemand_video"), h("span", null, "V\u00EDdeo de apresenta\u00E7\u00E3o")), h("button", { class: "c-button u-text--small d-inline-block me-3 mb-3", onClick: () => this.openModal('cover-teacher') }, h("span", { class: "material-icons d-inline-block" }, "person"), h("span", null, "Conhe\u00E7a seu professor")), h("yduqs-modal", { id: "cover-video", class: "cover-modal" }, h("div", { class: "row align-items-center justify-content-center h-100" }, h("div", { class: "col" }, h("yduqs-video-player", { src: this.video, videoId: "cover-video" })))), h("yduqs-modal", { id: "cover-teacher", class: "cover-modal" }, h("div", { class: "row" }, h("div", { class: "col" }, h("slot", { name: "yduqs-cover-teacher" })))))), h("div", { class: "col-12 col-sm-12 col-md-5 col-lg-5" }, h("div", { class: "" }, h("div", { class: "container" }, h("slot", { name: "yduqs-cover-grid" }))))))))))));
  }
};

export { Textarea as yduqs_cover_doktor };
