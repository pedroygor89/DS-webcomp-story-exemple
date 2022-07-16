import { h, Component, Prop } from '@stencil/core';
export class Textarea {
  constructor() {
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
    let backgroundText;
    let backgroundTextMobile;
    let refTextBgMobile = this.background_text_mobile;
    let refTextBg = this.background_text;
    if (this.background_text && this.background_text !== 'false') {
      if (this.background_text == refTextBg && (!this.background_text_mobile || this.background_text_mobile == 'false')) {
        backgroundText = `theme-text-bg-${refTextBg}`;
      }
      else if (this.background_text_mobile == refTextBgMobile && this.background_text == refTextBg) {
        backgroundText = `theme-text-bg-${refTextBg}`;
        backgroundTextMobile = `theme-text-bg-black-${refTextBgMobile}`;
      }
    }
    else {
      if (this.background_text == 'false' && (!this.background_text_mobile || this.background_text_mobile == 'false')) {
        backgroundText = '';
        backgroundTextMobile = '';
      }
      else if (this.background_text == 'false' && this.background_text_mobile == refTextBgMobile) {
        backgroundText = '';
        backgroundTextMobile = `theme-text-bg-black-${refTextBgMobile}`;
      }
    }
    return (h("div", { class: `c-cover` },
      h("div", { class: "c-cover-bg c-cover-height", title: `${this.background_img_title}`, style: { 'background-image': "url('" + this.background_img + "')" } },
        h("div", { class: "container c-cover-height" },
          h("div", { class: "row align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-start c-cover-height" },
            h("div", { class: "col-12" },
              h("div", { class: "theme-details" },
                h("h1", { innerHTML: this.title_cover }),
                h("div", { class: "row align-items-center justify-content-center theme-details-block" },
                  h("div", { class: `col-12 col-sm-12 col-md-7 col-lg-7` },
                    h("slot", { name: "yduqs-cover-doktor-definition" }),
                    h("div", { class: "mt-5 c-cover-buttons" },
                      h("button", { class: "c-button u-text--small d-inline-block me-3 mb-3", onClick: () => this.openModal('cover-video') },
                        h("span", { class: "material-icons d-inline-block" }, "ondemand_video"),
                        h("span", null, "V\u00EDdeo de apresenta\u00E7\u00E3o")),
                      h("button", { class: "c-button u-text--small d-inline-block me-3 mb-3", onClick: () => this.openModal('cover-teacher') },
                        h("span", { class: "material-icons d-inline-block" }, "person"),
                        h("span", null, "Conhe\u00E7a seu professor")),
                      h("yduqs-modal", { id: "cover-video", class: "cover-modal" },
                        h("div", { class: "row align-items-center justify-content-center h-100" },
                          h("div", { class: "col" },
                            h("yduqs-video-player", { src: this.video, videoId: "cover-video" })))),
                      h("yduqs-modal", { id: "cover-teacher", class: "cover-modal" },
                        h("div", { class: "row" },
                          h("div", { class: "col" },
                            h("slot", { name: "yduqs-cover-teacher" })))))),
                  h("div", { class: "col-12 col-sm-12 col-md-5 col-lg-5" },
                    h("div", { class: "" },
                      h("div", { class: "container" },
                        h("slot", { name: "yduqs-cover-grid" }))))))))))));
  }
  static get is() { return "yduqs-cover-doktor"; }
  static get properties() { return {
    "background_img": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "background_img",
      "reflect": false
    },
    "background_img_title": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "background_img_title",
      "reflect": false
    },
    "title_cover": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "title_cover",
      "reflect": false
    },
    "background_text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "background_text",
      "reflect": false
    },
    "collaboration_text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "collaboration_text",
      "reflect": false,
      "defaultValue": "'Colabora\u00E7\u00E3o'"
    },
    "cover_preparation": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "cover_preparation",
      "reflect": false,
      "defaultValue": "false"
    },
    "background_text_mobile": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "background_text_mobile",
      "reflect": false
    },
    "video": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "video",
      "reflect": false,
      "defaultValue": "'https://play.yduqs.videolib.live/index.html?token=27efc41292214362beddde52d341a3f6'"
    },
    "english": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "english",
      "reflect": false,
      "defaultValue": "false"
    },
    "spanish": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "spanish",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
