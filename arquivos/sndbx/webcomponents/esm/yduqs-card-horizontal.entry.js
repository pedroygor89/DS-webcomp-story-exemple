import { r as registerInstance, d as getAssetPath, h } from './index-b21d89aa.js';

const CardHorizontal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    let imageDevice = getAssetPath(`https://stensineme.blob.core.windows.net/assets/img/${this.mobile ? 'mobile.jpg' : 'desktop.jpg'}`);
    if (this.isquestion) {
      return (h("div", { class: "c-card-horizontal" }, h("header", null, h("div", { class: "card-icon" }, h("span", { class: "material-icons" }, this.card_icon)), h("div", { class: 'card-content row align-items-center justify-content-center g-0' }, h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, !this.isquestion ?
        h("div", { class: "card-image", style: { "background-image": "url('" + (this.card_image ? this.card_image : imageDevice) + "')" } }, h("img", { src: this.card_image ? this.card_image : imageDevice, alt: this.image_alt, title: this.image_title, loading: "lazy" }))
        :
          h("div", { class: "card-image", style: { "background-image": "url('" + imageDevice + "')" } }, h("img", { src: imageDevice, alt: "Aluno respondendo as quest\u00F5es", title: "Imagem Padr\u00E3o", loading: "lazy" }))), h("div", { class: 'col-sm-12 col-md-7 col-lg-7' }, h("div", { class: "card-header-text" }, h("h1", { class: "c-heading" }, this.english ? 'You are very close to reaching your goals' : this.spanish ? 'Falta poco para lograr tus objetivos' : 'Falta pouco para atingir seus objetivos ', " "), h("h2", { class: "c-heading" }, this.english ? 'Let’s practice!' : this.spanish ? 'Vamos a practicar algunos conceptos' : 'Vamos praticar alguns conceitos ', " ")))))));
    }
    else {
      return (h("div", { class: "c-card-horizontal" }, h("header", null, h("div", { class: "card-icon" }, h("span", { class: "material-icons" }, this.card_icon)), h("div", { class: 'card-content row align-items-center justify-content-center g-0' }, h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, !this.isquestion ?
        h("div", { class: "card-image", style: { "background-image": "url('" + (this.card_image ? this.card_image : imageDevice) + "')" } }, h("img", { src: this.card_image ? this.card_image : imageDevice, alt: this.image_alt, title: this.image_title, loading: "lazy" }))
        :
          h("div", { class: "card-image", style: { "background-image": "url('" + imageDevice + "')" } }, h("img", { src: imageDevice, alt: "Aluno respondendo as quest\u00F5es", title: "Imagem Padr\u00E3o", loading: "lazy" }))), h("div", { class: 'col-sm-12 col-md-7 col-lg-7' }, h("div", { class: "card-header-text" }, h("h1", { class: "c-heading" }, h("slot", { name: "card-heading" })), h("h2", { class: "c-heading" }, h("slot", { name: "card-subheading" }))))))));
    }
  }
  static get assetsDirs() { return ["assets"]; }
};

export { CardHorizontal as yduqs_card_horizontal };
