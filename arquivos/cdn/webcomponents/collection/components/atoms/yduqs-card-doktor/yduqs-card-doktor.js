import { Component, h, Event, Element, Prop } from '@stencil/core';
export class YduqsCardDoktor {
  constructor() {
    this.value = '0';
  }
  componentDidLoad() {
    // Busca os valores
    let anchor = this.element.getAttribute('anchor');
    anchor = anchor.replace('#', '');
    // Numera os carrosseis
    let carousel = document.body.querySelector(`yduqs-carousel[type="${anchor}"]`);
    if (carousel) {
      let carouselNum = carousel.querySelectorAll('yduqs-carousel-item').length;
      this.value = carouselNum;
      if (carouselNum === 0) {
        this.title = this.title.slice(0, -1);
      }
    }
    // Numera as tags
    let tag = document.body.querySelector(`yduqs-tag[type="${anchor}"]`);
    // Numera as questões
    if (tag) {
      if (this.title === 'Pílulas de conteúdo') {
        if (parseInt(this.value) > 1) {
          tag.prepend(`${this.value} pílulas`);
        }
        else if (parseInt(this.value) === 0) {
          tag.remove();
        }
        else {
          tag.prepend(`${this.value} pílula`);
          this.title = 'Pílula de conteúdo';
        }
      }
      else if (this.title === 'Infográficos') {
        if (parseInt(this.value) > 1) {
          tag.prepend(`${this.value} infográficos`);
        }
        else if (parseInt(this.value) === 0) {
          tag.remove();
        }
        else {
          tag.prepend(`${this.value} infográfico`);
          this.title = 'Infográfico';
        }
      }
      else if (this.title === 'Casos clínicos') {
        if (parseInt(this.value) > 1) {
          tag.prepend(`${this.value} casos`);
        }
        else if (parseInt(this.value) === 0) {
          tag.remove();
        }
        else {
          tag.prepend(`${this.value} caso`);
          this.title = 'Caso clínico';
        }
      }
      else if (this.title === 'Vídeos') {
        if (parseInt(this.value) > 1) {
          tag.prepend(`${this.value} vídeos`);
        }
        else if (parseInt(this.value) === 0) {
          tag.remove();
        }
        else {
          tag.prepend(`${this.value} vídeo`);
          this.title = 'Vídeo';
        }
      }
      else if (this.title === 'Podcasts') {
        let countPodcast = document.body.querySelectorAll('yduqs-audio-player').length;
        if (countPodcast > 1) {
          tag.prepend(`${countPodcast} podcasts`);
          this.title = 'Podcasts';
        }
        else if (countPodcast === 0) {
          tag.remove();
        }
        else {
          tag.prepend(`${countPodcast} podcast`);
          this.title = 'Podcast';
        }
        this.value = countPodcast;
      }
      else if (this.title === 'Questões') {
        if (parseInt(this.value) > 1) {
          tag.prepend(`${this.value} questões`);
        }
        else if (parseInt(this.value) === 0) {
          tag.remove();
        }
        else {
          tag.prepend(`${this.value} questão`);
          this.title = 'Questão';
        }
      }
    }
  }
  render() {
    return (h("a", { href: this.anchor },
      h("div", { class: "card" },
        h("div", { class: "card-icon" },
          h("span", { class: "material-icons" }, this.icon)),
        h("div", { class: "card-body" },
          h("span", { class: "card-value" }, this.value),
          h("div", { class: "card-type" }, this.title)))));
  }
  static get is() { return "yduqs-card-doktor"; }
  static get properties() { return {
    "icon": {
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
      "attribute": "icon",
      "reflect": false
    },
    "title": {
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
      "attribute": "title",
      "reflect": false
    },
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "'0'"
    },
    "anchor": {
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
      "attribute": "anchor",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "onChange",
      "name": "changed",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "element"; }
}
