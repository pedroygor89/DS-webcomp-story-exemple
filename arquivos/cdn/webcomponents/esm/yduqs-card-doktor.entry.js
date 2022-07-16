import { r as registerInstance, c as createEvent, h, g as getElement } from './index-b21d89aa.js';

const YduqsCardDoktor = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onChange = createEvent(this, "changed", 7);
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
    return (h("a", { href: this.anchor }, h("div", { class: "card" }, h("div", { class: "card-icon" }, h("span", { class: "material-icons" }, this.icon)), h("div", { class: "card-body" }, h("span", { class: "card-value" }, this.value), h("div", { class: "card-type" }, this.title)))));
  }
  get element() { return getElement(this); }
};

export { YduqsCardDoktor as yduqs_card_doktor };
