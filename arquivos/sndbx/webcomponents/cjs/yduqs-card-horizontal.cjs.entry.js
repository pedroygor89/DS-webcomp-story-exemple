'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const CardHorizontal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
  }
  onResize(event) {
    event.stopPropagation();
    this._isMobile(event.target);
  }
  _isMobile(windowObj) {
    const wWidth = windowObj.innerWidth;
    this.mobile = (wWidth < 576);
    //this.getImage()
  }
  componentWillLoad() {
    this._isMobile(window);
    const htmlTagGallery = document.querySelector('html');
    const htmlLanguageGallery = htmlTagGallery.getAttribute('lang');
    if (htmlLanguageGallery === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageGallery === 'es') {
      this.spanish = true;
    }
  }
  /*@Method() async  getImage(){
      
      if(window.matchMedia("(max-width: 500px)")){
          this.isMobile = 'https://dev.azure.com/Ensine-Me/ebf521da-0864-4430-bdce-ca510cca7fa3/_apis/wit/attachments/8e04a799-27af-404c-a9aa-7aff85ca60e8?fileName=image.png';
          console.log('entrou no if');
      }else{
          
          this.isMobile = 'https://dev.azure.com/Ensine-Me/ebf521da-0864-4430-bdce-ca510cca7fa3/_apis/wit/attachments/9104bbc1-c21c-438c-875a-eabbd605fcc9?fileName=image.png';
          console.log('entrou no else')
      }
  }*/
  render() {
    let imageDevice = index.getAssetPath(`https://stensineme.blob.core.windows.net/assets/img/${this.mobile ? 'mobile.jpg' : 'desktop.jpg'}`);
    if (this.isquestion) {
      return (index.h("div", { class: "c-card-horizontal" }, index.h("header", null, index.h("div", { class: "card-icon" }, index.h("span", { class: "material-icons" }, this.card_icon)), index.h("div", { class: 'card-content row align-items-center justify-content-center g-0' }, index.h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, !this.isquestion ?
        index.h("div", { class: "card-image", style: { "background-image": "url('" + (this.card_image ? this.card_image : imageDevice) + "')" } }, index.h("img", { src: this.card_image ? this.card_image : imageDevice, alt: this.image_alt, title: this.image_title, loading: "lazy" }))
        :
          index.h("div", { class: "card-image", style: { "background-image": "url('" + imageDevice + "')" } }, index.h("img", { src: imageDevice, alt: "Aluno respondendo as quest\u00F5es", title: "Imagem Padr\u00E3o", loading: "lazy" }))), index.h("div", { class: 'col-sm-12 col-md-7 col-lg-7' }, index.h("div", { class: "card-header-text" }, index.h("h1", { class: "c-heading" }, this.english ? 'You are very close to reaching your goals' : this.spanish ? 'Falta poco para lograr tus objetivos' : 'Falta pouco para atingir seus objetivos ', " "), index.h("h2", { class: "c-heading" }, this.english ? 'Let’s practice!' : this.spanish ? 'Vamos a practicar algunos conceptos' : 'Vamos praticar alguns conceitos ', " ")))))));
    }
    else {
      return (index.h("div", { class: "c-card-horizontal" }, index.h("header", null, index.h("div", { class: "card-icon" }, index.h("span", { class: "material-icons" }, this.card_icon)), index.h("div", { class: 'card-content row align-items-center justify-content-center g-0' }, index.h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, !this.isquestion ?
        index.h("div", { class: "card-image", style: { "background-image": "url('" + (this.card_image ? this.card_image : imageDevice) + "')" } }, index.h("img", { src: this.card_image ? this.card_image : imageDevice, alt: this.image_alt, title: this.image_title, loading: "lazy" }))
        :
          index.h("div", { class: "card-image", style: { "background-image": "url('" + imageDevice + "')" } }, index.h("img", { src: imageDevice, alt: "Aluno respondendo as quest\u00F5es", title: "Imagem Padr\u00E3o", loading: "lazy" }))), index.h("div", { class: 'col-sm-12 col-md-7 col-lg-7' }, index.h("div", { class: "card-header-text" }, index.h("h1", { class: "c-heading" }, index.h("slot", { name: "card-heading" })), index.h("h2", { class: "c-heading" }, index.h("slot", { name: "card-subheading" }))))))));
    }
  }
  static get assetsDirs() { return ["assets"]; }
};

exports.yduqs_card_horizontal = CardHorizontal;
