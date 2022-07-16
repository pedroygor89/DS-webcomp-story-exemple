import { h, Component, Prop, Method } from '@stencil/core';
export class GalleryVideo {
  constructor() {
    this.module_number = 1;
    this.english = false;
    this.spanish = false;
  }
  async initialize(config) {
    this.settings = config;
  }
  componentWillLoad() {
    const htmlTagGallery = document.querySelector('html');
    const htmlLanguageGallery = htmlTagGallery.getAttribute('lang');
    if (htmlLanguageGallery === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageGallery === 'es') {
      this.spanish = true;
    }
  }
  render() {
    return (h("div", { class: "c-gallery-video" },
      h("div", { class: "c-gallery-video__header" },
        h("h5", null,
          this.english ? 'SECTION' : this.spanish ? 'MÓDULO' : 'MÓDULO',
          " ",
          this.module_number),
        h("h1", null, this.title_gallery)),
      h("div", { class: "c-gallery-video__content" },
        h("div", { class: "c-gallery-video__content_videos" },
          h("div", { class: "c-gallery-video__content_videos_video" },
            h("yduqs-video-player", { src: "http://atreus.uoledtech.com.br/estacio/video/193763", videoId: "1", width: "", height: "" })),
          h("div", { class: "c-gallery-video__content_videos_description" },
            h("h3", null,
              this.title_video,
              " "),
            h("p", { class: "c-gallery-video__content_videos_description_large" }, this.paragraph_video))),
        h("div", { class: "c-gallery-video__content_playlist" },
          h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number })))));
  }
  static get is() { return "yduqs-gallery-video"; }
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
            "path": "./yduqs-gallery-video.model"
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
            "path": "./yduqs-gallery-video.model"
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
