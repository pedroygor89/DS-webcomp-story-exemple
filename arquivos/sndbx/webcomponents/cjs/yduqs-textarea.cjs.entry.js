'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const Textarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hidden_feedback = true;
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
        this.btnElement.removeAttribute('disabled');
      else
        this.btnElement.setAttribute('disabled', 'disabled');
    }
  }
  inibirTxt() {
    let txt = document.getElementById(this.idtxt);
    txt.setAttribute('disabled', 'disabled');
    txt.classList.add('Nocursor');
    txt.classList.add('colorDisabled');
  }
  render() {
    const ligthtxt = this.ligthtxtarea ? 'c-ligthBg-TxtArea' : '';
    const outlinetxt = this.outlinetxtarea ? 'c-outline-TxtArea' : '';
    const showClassDisplay = this.displayAnswer ? 'feedbackInvisible' : 'feedbackVisible';
    const showBtn = !this.withbtn ? 'displayBtn' : '';
    const titleBtn = this.displayAnswer ? 'Exibir Solução' : 'Fechar Solução';
    const arrowTeste = this.displayAnswer ? 'expand_more ' : 'expand_less';
    const bgDark = this.bgfeedbackdark ? 'bgDarkAD' : 'bgLigthAD';
    return (index.h("div", { class: `col-12 col-md-${this.colunasmd} col-lg-${this.colunaslg}` }, index.h("div", { class: "row" }, index.h("div", { class: "c-textarea" }, index.h("form", null, index.h("textarea", { class: `${ligthtxt} ${outlinetxt}`, value: this.value, onInput: event => this.handleChange(event), id: this.idtxt, placeholder: this.placeholder }), this.hidden_feedback && (index.h("div", null, index.h("div", { class: `${showBtn} btnAtividade` }, index.h("button", { class: "c-button", type: "button", onClick: e => this.handleSubmit(e), id: this.idbtn, disabled: true }, titleBtn, index.h("span", { class: "C-collapse__icon material-icons" }, " ", arrowTeste, " "), ' ')), index.h("div", { class: `${showClassDisplay} ` }, index.h("div", { class: `bgAtividadeDiscursiva ${bgDark}` }, index.h("slot", null))))))))));
  }
};

exports.yduqs_textarea = Textarea;
