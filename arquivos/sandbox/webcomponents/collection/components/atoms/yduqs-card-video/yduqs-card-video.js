import { h, Component, Prop } from '@stencil/core';
export class PlaylistVideo {
  constructor() {
    this.active = false;
  }
  render() {
    const styleBorder = this.border_bottom ? 'border-bottom' : '';
    const video_active = this.active ? 'active' : '';
    return (h("div", { class: "c-card-video " + styleBorder },
      h("div", { class: "c-card-video__thumb " + video_active },
        h("yduqs-image", { src: this.thumb_video, alt: "" }),
        h("div", { class: "c-card-video__thumb_play" },
          h("span", { class: "material-icons" }, "play_arrow"))),
      h("div", { class: "c-card-video__description" },
        h("h2", { class: "c-heading", innerHTML: this.title_video }),
        h("p", { class: "c-paragraph", innerHTML: this.paragraph }),
        h("div", { class: "c-card-video__description_time" }, this.time))));
  }
  static get is() { return "yduqs-card-video"; }
  static get properties() { return {
    "title_video": {
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
      "attribute": "title_video",
      "reflect": false
    },
    "subtitle_video": {
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
      "attribute": "subtitle_video",
      "reflect": false
    },
    "thumb_video": {
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
      "attribute": "thumb_video",
      "reflect": false
    },
    "link_video": {
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
      "attribute": "link_video",
      "reflect": false
    },
    "paragraph": {
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
      "attribute": "paragraph",
      "reflect": false
    },
    "time": {
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
      "attribute": "time",
      "reflect": false
    },
    "border_bottom": {
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
      "attribute": "border_bottom",
      "reflect": false
    },
    "active": {
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
      "attribute": "active",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
