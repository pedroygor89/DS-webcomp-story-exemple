import { h, Component, Prop, Host } from '@stencil/core';
export class Footer {
  constructor() {
    this.english = false;
    this.spanish = false;
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
  render() {
    return (h(Host, null,
      h("div", { class: "c-footer-bgColor" },
        h("div", { class: "container" },
          h("div", { class: "row align-items-center justify-content-center" },
            h("div", { class: "col-12 text-center" },
              h("img", { class: "mt-3", width: "120", src: "./img/logo_idomed.png" }),
              h("p", { class: "c-paragraph u-text--medium text-center mt-0" },
                "Todos os direitos reservados.",
                h("br", null),
                "Veja a nossa pol\u00EDtica de privacidade e os termos de uso.")))))));
  }
  static get is() { return "yduqs-footer-doktor"; }
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
}
