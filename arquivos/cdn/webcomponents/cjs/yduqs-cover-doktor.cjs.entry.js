'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const Textarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", { class: `c-cover` }, index.h("div", { class: "c-cover-bg c-cover-height", title: `${this.background_img_title}`, style: { 'background-image': "url('" + this.background_img + "')" } }, index.h("div", { class: "container c-cover-height" }, index.h("div", { class: "row align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-start c-cover-height" }, index.h("div", { class: "col-12" }, index.h("div", { class: "theme-details" }, index.h("h1", { innerHTML: this.title_cover }), index.h("div", { class: "row align-items-center justify-content-center theme-details-block" }, index.h("div", { class: `col-12 col-sm-12 col-md-7 col-lg-7` }, index.h("slot", { name: "yduqs-cover-doktor-definition" }), index.h("div", { class: "mt-5 c-cover-buttons" }, index.h("button", { class: "c-button u-text--small d-inline-block me-3 mb-3", onClick: () => this.openModal('cover-video') }, index.h("span", { class: "material-icons d-inline-block" }, "ondemand_video"), index.h("span", null, "V\u00EDdeo de apresenta\u00E7\u00E3o")), index.h("button", { class: "c-button u-text--small d-inline-block me-3 mb-3", onClick: () => this.openModal('cover-teacher') }, index.h("span", { class: "material-icons d-inline-block" }, "person"), index.h("span", null, "Conhe\u00E7a seu professor")), index.h("yduqs-modal", { id: "cover-video", class: "cover-modal" }, index.h("div", { class: "row align-items-center justify-content-center h-100" }, index.h("div", { class: "col" }, index.h("yduqs-video-player", { src: this.video, videoId: "cover-video" })))), index.h("yduqs-modal", { id: "cover-teacher", class: "cover-modal" }, index.h("div", { class: "row" }, index.h("div", { class: "col" }, index.h("slot", { name: "yduqs-cover-teacher" })))))), index.h("div", { class: "col-12 col-sm-12 col-md-5 col-lg-5" }, index.h("div", { class: "" }, index.h("div", { class: "container" }, index.h("slot", { name: "yduqs-cover-grid" }))))))))))));
  }
};

exports.yduqs_cover_doktor = Textarea;
