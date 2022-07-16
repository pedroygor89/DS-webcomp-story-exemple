import { h, Component, Prop, State, Method } from '@stencil/core';
export class Podcast {
  constructor() {
    this.bgColor = 'c-podcast-bgColor';
    this.titleappears = 'showTitle';
  }
  async changeColor(novoValor) {
    if (novoValor) {
      this.bgColor = 'c-podcast-bgColor-dark';
    }
  }
  async showtitle(value) {
    if (!value) {
      this.titleappears = 'hiddenTitle';
    }
  }
  componentWillRender() {
    this.changeColor(this.dark);
    this.showtitle(this.withtitle);
  }
  render() {
    return (h("div", { class: `${this.bgColor} py-5` },
      h("div", { class: "container" },
        h("div", { class: `${this.titleappears} p-0 m-0` },
          h("yduqs-title", { topic_icon: "keyboard_voice", topic_title: "Podcast" })),
        h("div", { class: "row align-items-center justify-content-center" },
          h("div", { class: 'col-12 col-md-10 col-lg-8' },
            h("p", { class: `c-paragraph u-text u-small pb-4 ${this.bgColor}` }, this.subtitulo),
            h("yduqs-audio-player", { id: "meuPlayer", src: `${this.audio}` }))))));
  }
  static get is() { return "yduqs-podcast"; }
  static get properties() { return {
    "subtitulo": {
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
      "attribute": "subtitulo",
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
    "withtitle": {
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
      "attribute": "withtitle",
      "reflect": false
    },
    "audio": {
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
      "attribute": "audio",
      "reflect": false
    }
  }; }
  static get states() { return {
    "bgColor": {},
    "titleappears": {}
  }; }
  static get methods() { return {
    "changeColor": {
      "complexType": {
        "signature": "(novoValor: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "showtitle": {
      "complexType": {
        "signature": "(value: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
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
