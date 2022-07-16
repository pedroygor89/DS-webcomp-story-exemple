import { h, Component, Prop } from '@stencil/core';
export class Footer {
  constructor() {
    this.english = false;
    this.spanish = false;
    this.template_anitta = false;
  }
  componentWillLoad() {
    const htmlTagFooter = document.querySelector('html');
    const htmlLanguageFooter = htmlTagFooter.getAttribute('lang');
    if (htmlLanguageFooter === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageFooter === 'es') {
      this.spanish = true;
    }
  }
  componentDidRender() {
    let hasLoader = document.querySelector('yduqs-loader');
    if (hasLoader) {
      let showScroolBody = document.querySelector('body');
      let showHeader = document.querySelector('header');
      let showMain = document.querySelector('main');
      let showFooter = document.querySelector('footer');
      let removeLoader = document.querySelector('yduqs-loader');
      setTimeout(() => {
        showScroolBody.style.overflowY = 'initial';
        showHeader.style.overflow = 'initial';
        showMain.style.overflow = 'initial';
        showFooter.style.overflow = 'initial';
        showHeader.style.opacity = '1';
        showMain.style.opacity = '1';
        showFooter.style.opacity = '1';
        removeLoader.style.opacity = '0';
        removeLoader.remove();
      }, 8000);
    }
  }
  render() {
    return (h("div", { class: "c-footer-bgColor" },
      h("div", { class: "container" },
        this.template_anitta ?
          h("yduqs-title", { topic_title: 'Backstage' })
          :
            h("yduqs-title", { topic_title: this.english ? 'References' : this.spanish ? 'Referencias' : 'Referências' }),
        h("div", { class: "row align-items-center justify-content-center" },
          h("div", { class: "col-12 col-md-10 col-lg-8" },
            h("slot", { name: "itens-referencia" }))),
        this.template_anitta ?
          h("yduqs-title", { topic_title: 'N\u00E3o para' })
          :
            h("yduqs-title", { topic_title: this.english ? 'Go Further' : this.spanish ? 'Explora +' : 'Explore +' }),
        h("div", { class: "row align-items-center justify-content-center" },
          h("div", { class: "col-12 col-md-10 col-lg-8" },
            h("slot", { name: "itens-exploremais" })))),
      h("div", { class: "c-footer-border mt-5 py-3" },
        h("div", { class: "container" },
          h("div", { class: "row" },
            h("div", { class: "d-flex justify-content-center align-items-center" },
              h("div", null,
                h("a", { href: `javascript:${this.hrefbtnprint}`, class: `c-button ${!this.btnimprimir ? 'disableText' : ''}` },
                  " ",
                  h("i", { class: "material-icons" }, "picture_as_pdf"),
                  "  ",
                  h("span", { class: "txt-btnFooter" }, this.english ? 'Download material' : this.spanish ? 'Descargar el contenido' : 'Baixar conteúdo'),
                  " "))))))));
  }
  static get is() { return "yduqs-footer"; }
  static get properties() { return {
    "useimage": {
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
      "attribute": "useimage",
      "reflect": false
    },
    "btnimprimir": {
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
      "attribute": "btnimprimir",
      "reflect": false
    },
    "namebtnimprimir": {
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
      "attribute": "namebtnimprimir",
      "reflect": false
    },
    "hrefbtnprint": {
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
      "attribute": "hrefbtnprint",
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
    },
    "template_anitta": {
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
      "attribute": "template_anitta",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
