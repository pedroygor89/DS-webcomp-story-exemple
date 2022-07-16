import { h, Component, Prop, State } from '@stencil/core';
export class Textarea {
  constructor() {
    this.btnDisabilitado = true;
    this.displayAnswer = true;
  }
  handleSubmit(e) {
    e.preventDefault();
    if (e.target.id == this.idbtn) {
      console.log('ENTROU' + e.target.id);
      this.displayAnswer = !this.displayAnswer;
      //let btn = this.getBtnSubmit();
      //btn.setAttribute("disabled", "disabled");
      this.inibirTxt();
    }
  }
  handleChange(event) {
    if (event.target.id == this.idtxt) {
      this.value = event.target.value;
      this.btnElement = document.getElementById(this.idbtn);
      if (this.value.length > 2)
        this.btnElement.removeAttribute("disabled");
      else
        this.btnElement.setAttribute("disabled", "disabled");
    }
  }
  inibirTxt() {
    let txt = document.getElementById(this.idtxt);
    txt.setAttribute("disabled", "disabled");
    txt.classList.add("Nocursor");
    txt.classList.add("colorDisabled");
  }
  render() {
    const ligthtxt = this.ligthtxtarea ? 'c-ligthBg-TxtArea' : '';
    const outlinetxt = this.outlinetxtarea ? 'c-outline-TxtArea' : '';
    const showClassDisplay = this.displayAnswer ? 'feedbackInvisible' : 'feedbackVisible';
    const showBtn = !this.withbtn ? 'displayBtn' : '';
    const titleBtn = this.displayAnswer ? 'Exibir Solução' : 'Fechar Solução';
    const arrowTeste = this.displayAnswer ? 'expand_more ' : 'expand_less';
    const bgDark = this.bgfeedbackdark ? 'bgDarkAD' : 'bgLigthAD';
    return (h("div", { class: `col-12 col-md-${this.colunasmd} col-lg-${this.colunaslg}` },
      h("div", { class: "row" },
        h("div", { class: "c-textarea" },
          h("form", null,
            h("textarea", { class: `${ligthtxt} ${outlinetxt}`, value: this.value, onInput: (event) => this.handleChange(event), id: this.idtxt, placeholder: this.placeholder }),
            h("div", { class: `${showBtn} btnAtividade` },
              h("button", { class: "c-button", type: "button", onClick: (e) => this.handleSubmit(e), id: this.idbtn, disabled: true },
                titleBtn,
                h("span", { class: "C-collapse__icon material-icons" },
                  " ",
                  arrowTeste,
                  " "),
                " ")),
            h("div", { class: `${showClassDisplay} ` },
              h("div", { class: `bgAtividadeDiscursiva ${bgDark}` },
                h("slot", null))))))));
  }
  static get is() { return "yduqs-textarea"; }
  static get properties() { return {
    "ligthtxtarea": {
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
      "attribute": "ligthtxtarea",
      "reflect": false
    },
    "outlinetxtarea": {
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
      "attribute": "outlinetxtarea",
      "reflect": false
    },
    "idbtn": {
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
      "attribute": "idbtn",
      "reflect": false
    },
    "idtxt": {
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
      "attribute": "idtxt",
      "reflect": false
    },
    "placeholder": {
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
      "attribute": "placeholder",
      "reflect": false
    },
    "withbtn": {
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
      "attribute": "withbtn",
      "reflect": false
    },
    "colunasmd": {
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
      "attribute": "colunasmd",
      "reflect": false
    },
    "colunaslg": {
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
      "attribute": "colunaslg",
      "reflect": false
    },
    "bgfeedbackdark": {
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
      "attribute": "bgfeedbackdark",
      "reflect": false
    }
  }; }
  static get states() { return {
    "btnDisabilitado": {},
    "value": {},
    "displayAnswer": {},
    "btnElement": {}
  }; }
}
