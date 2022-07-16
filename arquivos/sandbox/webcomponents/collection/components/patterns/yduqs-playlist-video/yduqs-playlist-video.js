import { h, Component, Prop, Method } from '@stencil/core';
export class PlaylistVideo {
  constructor() {
    this.module_number = 1;
  }
  async initialize(config) {
    this.settings = config;
  }
  renderPlaylistVideo() {
    const cardVideolist = [];
    if (this.settings !== undefined) {
      var module = this.settings.modules[this.module_number - 1];
      module.playlist.forEach((playlistItem) => {
        cardVideolist.push(h("yduqs-card-video", { title_video: playlistItem.title_video, subtitle_video: playlistItem.subtitle_video, thumb_video: playlistItem.thumb_video, link_video: playlistItem.link_video, paragraph: playlistItem.paragraph, time: playlistItem.time, border_bottom: playlistItem.border_bottom }));
      });
    }
    return h("div", { class: "c-playlist-video__items" }, cardVideolist);
  }
  render() {
    return (h("div", { class: "c-playlist-video" }, this.renderPlaylistVideo()));
  }
  static get is() { return "yduqs-playlist-video"; }
  static get properties() { return {
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
    "settings": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "YduqsModulesPlaylists",
        "resolved": "YduqsModulesPlaylists",
        "references": {
          "YduqsModulesPlaylists": {
            "location": "import",
            "path": "./yduqs-playlist-video.model"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get methods() { return {
    "initialize": {
      "complexType": {
        "signature": "(config: YduqsModulesPlaylists) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "YduqsModulesPlaylists": {
            "location": "import",
            "path": "./yduqs-playlist-video.model"
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
