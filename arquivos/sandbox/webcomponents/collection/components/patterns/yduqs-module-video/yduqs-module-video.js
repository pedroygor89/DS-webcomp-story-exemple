import { h, Component, Prop, Method } from '@stencil/core';
export class ModuleVideo {
  constructor() {
    this.module_number = 1;
    this.module_icon = 'playlist_play';
  }
  async initialize(config) {
    this.settings = config;
  }
  render() {
    return (h("div", { class: "c-module-video" },
      h("div", { class: "c-module-video__titles" },
        h("div", { class: 'row align-items-center justify-content-start' },
          h("yduqs-title", { topic_icon: this.module_icon, topic_title: this.title_gallery })),
        h("div", { class: "c-module-video__titles_subtitles row align-items-center justify-content-center" },
          h("div", { class: "c-module-video__titles_subtitles_content col-12 col-md-10 col-lg-8" },
            h("p", null, this.subtitle_gallery)))),
      h("div", { class: "c-module-video__box row align-items-center justify-content-center" },
        h("div", { class: "c-module-video__box_playlist col-12 col-md-10 col-lg-8" },
          h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number }))),
      h("yduqs-modal", { id: `modal-gallery-${this.module_number}` },
        h("div", { class: "container" },
          h("yduqs-gallery-video", { id: "gallery", module_number: this.module_number, title_gallery: `${this.title_gallery}`, subtitle_gallery: `${this.subtitle_gallery}` })))));
  }
  static get is() { return "yduqs-module-video"; }
  static get properties() { return {
    "settings": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "YduqsModulePlaylists",
        "resolved": "YduqsModulePlaylists",
        "references": {
          "YduqsModulePlaylists": {
            "location": "import",
            "path": "./yduqs-module-video.model"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "module_number": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "module_number",
      "reflect": false,
      "defaultValue": "1"
    },
    "module_icon": {
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
      "attribute": "module_icon",
      "reflect": false,
      "defaultValue": "'playlist_play'"
    },
    "title_gallery": {
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
      "attribute": "title_gallery",
      "reflect": false
    },
    "subtitle_gallery": {
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
      "attribute": "subtitle_gallery",
      "reflect": false
    },
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
    "paragraph_video": {
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
      "attribute": "paragraph_video",
      "reflect": false
    },
    "active_video": {
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
      "attribute": "active_video",
      "reflect": false
    }
  }; }
  static get methods() { return {
    "initialize": {
      "complexType": {
        "signature": "(config: YduqsModulePlaylists) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "YduqsModulePlaylists": {
            "location": "import",
            "path": "./yduqs-module-video.model"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
