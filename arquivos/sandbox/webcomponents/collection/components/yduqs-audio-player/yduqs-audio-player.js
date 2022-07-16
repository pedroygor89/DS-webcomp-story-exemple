import { Component, h, Prop, Host, Element } from '@stencil/core';
import * as GreenAudioPlayer from 'green-audio-player';
export class YduqsAudioPlayer {
  constructor() {
    this.src = '';
  }
  componentDidLoad() {
    let playerSettings = {
      selector: '.c-audio-player',
      showTooltips: true,
      showDownloadButton: true,
      enableKeystrokes: true
    };
    GreenAudioPlayer.init(playerSettings);
  }
  render() {
    const shortPlayerClass = this.shortdisplay ? `c-audio-player-short` : '';
    return (h(Host, { class: `c-audio-player ${shortPlayerClass}` },
      h("audio", { class: "c-audio__object" },
        h("source", { src: this.src, type: "audio/mpeg" },
          "O seu navegador n\u00E3o suporta o elemento ",
          h("code", null, "audio"),
          "."))));
  }
  static get is() { return "yduqs-audio-player"; }
  static get properties() { return {
    "src": {
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
      "attribute": "src",
      "reflect": false,
      "defaultValue": "''"
    },
    "shortdisplay": {
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
      "attribute": "shortdisplay",
      "reflect": false
    }
  }; }
  static get elementRef() { return "self"; }
}
