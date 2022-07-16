import { Component, h, Prop, Watch, State, Method, Event } from '@stencil/core';
import * as GreenAudioPlayer from 'green-audio-player';
export class YduqsAudioPlayer {
  constructor() {
    this.src = '';
    this.audio_id = '';
    this._rate = 1;
    this.rate = 1;
    this.settings = {
      speedList: [0.5, 1, 1.5]
    };
    this._speedPosition = 1;
  }
  async initialize(config) {
    this.settings = config;
    this._speedPosition = this.settings.speedList.findIndex((n) => n === 1);
    this._rate = this.settings.speedList[this._speedPosition];
  }
  playbackRateHandler(newRate) {
    this._rate = newRate;
    this._audioObj.playbackRate = this._rate;
  }
  componentDidLoad() {
    let playerSettings = {
      selector: `div#audioPlayer${this.audio_id}`,
      showTooltips: true,
      showDownloadButton: true,
      stopOthersOnPlay: true,
      enableKeystrokes: true
    };
    GreenAudioPlayer.init(playerSettings);
    if (this.dark) {
      this._audioObj = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark .c-audio__object`);
      this.createSpeedControl();
    }
    else {
      this._audioObj = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player .c-audio__object`);
      this.createSpeedControl();
    }
  }
  componentWillLoad() {
    if (this.dark) {
      this.coloraudio = 'c-audio-player-dark';
    }
    else {
      this.coloraudio = 'c-audio-player';
    }
  }
  updatePlaybackRate() {
    if (!this.settings || !this.settings.speedList) {
      return;
    }
    this._speedPosition < (this.settings.speedList.length - 1) ? this._speedPosition++ : this._speedPosition = 0;
    this._rate = this.settings.speedList[this._speedPosition];
    if (this.dark) {
      this._audioObj = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark .c-audio__object`);
      this._audioObj.playbackRate = this._rate;
      let speedDisplay = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark .speed .speed__display`);
      speedDisplay.innerHTML = `${this._rate}x`;
    }
    else {
      this._audioObj = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player .c-audio__object`);
      this._audioObj.playbackRate = this._rate;
      let speedDisplay = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player .speed .speed__display`);
      speedDisplay.innerHTML = `${this._rate}x`;
    }
  }
  createSpeedControl() {
    if (this.dark) {
      let controlContainer = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark`);
      const speedCtrlContainer = document.createElement('div');
      const speedCtrl = document.createElement('a');
      const speedDisplay = document.createElement('span');
      speedCtrlContainer.className = 'speed';
      speedCtrl.className = 'speed__controls material-icons';
      speedCtrl.innerHTML = 'speed';
      speedCtrl.setAttribute('role', 'button');
      speedDisplay.className = 'speed__display';
      speedDisplay.id = 'speed__display';
      speedDisplay.innerHTML = `${this._rate}x`;
      controlContainer.insertBefore(speedCtrlContainer, controlContainer.children[3]);
      speedCtrlContainer.append(speedCtrl);
      speedCtrlContainer.append(speedDisplay);
      speedCtrl.addEventListener('click', () => this.updatePlaybackRate());
    }
    else {
      let controlContainer = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player`);
      const speedCtrlContainer = document.createElement('div');
      const speedCtrl = document.createElement('a');
      const speedDisplay = document.createElement('span');
      speedCtrlContainer.className = 'speed';
      speedCtrl.className = 'speed__controls material-icons';
      speedCtrl.innerHTML = 'speed';
      speedCtrl.setAttribute('role', 'button');
      speedDisplay.className = 'speed__display';
      speedDisplay.id = 'speed__display';
      speedDisplay.innerHTML = `${this._rate}x`;
      controlContainer.insertBefore(speedCtrlContainer, controlContainer.children[3]);
      speedCtrlContainer.append(speedCtrl);
      speedCtrlContainer.append(speedDisplay);
      speedCtrl.addEventListener('click', () => this.updatePlaybackRate());
    }
  }
  render() {
    const shortPlayerClass = this.shortdisplay ? `c-audio-player-short` : '';
    let audioScript = `
            window.addEventListener('DOMContentLoaded', function () {
                var audioPlayer${this.audio_id} = document.querySelector('#audioPlayer${this.audio_id}');
                audioPlayer${this.audio_id}.initialize({ "speedList": [0.5, 0.6, 0.7, 1, 1.5, 2] });
            });
        `;
    return (h("div", { id: `audioPlayer` + this.audio_id, class: `${this.coloraudio} ${shortPlayerClass}` },
      h("audio", { class: "c-audio__object", preload: "metadata" },
        h("source", { src: this.src, type: "audio/mpeg" },
          "O seu navegador n\u00E3o suporta o elemento ",
          h("code", null, "audio"),
          ".")),
      h("script", null, audioScript)));
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
    "audio_id": {
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
      "attribute": "audio_id",
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
    },
    "dark": {
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
      "attribute": "dark",
      "reflect": false
    },
    "rate": {
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
      "attribute": "rate",
      "reflect": false,
      "defaultValue": "1"
    },
    "settings": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "YduqsAudioPlayerModel",
        "resolved": "YduqsAudioPlayerModel",
        "references": {
          "YduqsAudioPlayerModel": {
            "location": "import",
            "path": "./yduqs-audio-player.model"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{\r\n        speedList: [0.5, 1, 1.5]\r\n    }"
    }
  }; }
  static get states() { return {
    "_rate": {},
    "coloraudio": {}
  }; }
  static get events() { return [{
      "method": "updateRate",
      "name": "updateRate",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "initialize": {
      "complexType": {
        "signature": "(config: YduqsAudioPlayerModel) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "YduqsAudioPlayerModel": {
            "location": "import",
            "path": "./yduqs-audio-player.model"
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
  static get watchers() { return [{
      "propName": "rate",
      "methodName": "playbackRateHandler"
    }]; }
}
