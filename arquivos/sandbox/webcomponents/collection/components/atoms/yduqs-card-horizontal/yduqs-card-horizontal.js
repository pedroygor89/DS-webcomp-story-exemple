import { h, Component, Prop, State, Listen } from '@stencil/core';
export class CardHorizontal {
  constructor() {
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
    let imageDevice = this.mobile ? 'img/mobile.png' : 'img/desktop.png';
    if (this.isquestion) {
      return (h("div", { class: "c-card-horizontal" },
        h("header", null,
          h("div", { class: "card-icon" },
            h("span", { class: "material-icons" }, this.card_icon)),
          h("div", { class: 'card-content row align-items-center justify-content-center g-0' },
            h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, !this.isquestion ?
              h("div", { class: "card-image", style: { "background-image": "url('" + this.card_image + "')" } },
                h("img", { src: this.card_image, alt: this.image_alt, title: this.image_title, loading: "lazy" }))
              :
                h("div", { class: "card-image", style: { "background-image": "url('" + imageDevice + "')" } },
                  h("img", { src: imageDevice, alt: "Aluno respondendo as quest\u00F5es", title: "Imagem Padr\u00E3o", loading: "lazy" }))),
            h("div", { class: 'col-sm-12 col-md-7 col-lg-7' },
              h("div", { class: "card-header-text" },
                h("h1", { class: "c-heading" },
                  this.english ? 'You are very close to reaching your goals' : this.spanish ? 'Falta poco para lograr tus objetivos' : 'Falta pouco para atingir seus objetivos ',
                  " "),
                h("h2", { class: "c-heading" },
                  this.english ? 'Let’s practice!' : this.spanish ? 'Vamos a practicar algunos conceptos' : 'Vamos praticar alguns conceitos ',
                  " ")))))));
    }
    else {
      return (h("div", { class: "c-card-horizontal" },
        h("header", null,
          h("div", { class: "card-icon" },
            h("span", { class: "material-icons" }, this.card_icon)),
          h("div", { class: 'card-content row align-items-center justify-content-center g-0' },
            h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, !this.isquestion ?
              h("div", { class: "card-image", style: { "background-image": "url('" + this.card_image + "')" } },
                h("img", { src: this.card_image, alt: this.image_alt, title: this.image_title, loading: "lazy" }))
              :
                h("div", { class: "card-image", style: { "background-image": "url('" + imageDevice + "')" } },
                  h("img", { src: imageDevice, alt: "Aluno respondendo as quest\u00F5es", title: "Imagem Padr\u00E3o", loading: "lazy" }))),
            h("div", { class: 'col-sm-12 col-md-7 col-lg-7' },
              h("div", { class: "card-header-text" },
                h("h1", { class: "c-heading" },
                  h("slot", { name: "card-heading" })),
                h("h2", { class: "c-heading" },
                  h("slot", { name: "card-subheading" }))))))));
    }
  }
  static get is() { return "yduqs-card-horizontal"; }
  static get properties() { return {
    "card_image": {
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
      "attribute": "card_image",
      "reflect": false
    },
    "card_icon": {
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
      "attribute": "card_icon",
      "reflect": false
    },
    "image_alt": {
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
      "attribute": "image_alt",
      "reflect": false
    },
    "image_title": {
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
      "attribute": "image_title",
      "reflect": false
    },
    "isquestion": {
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
      "attribute": "isquestion",
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
  static get states() { return {
    "isMobile": {},
    "mobile": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
