import{r as s,h as a,a as i,c as t}from"./p-3b8a929f.js";const n=class{constructor(a){s(this,a),this.message="Carregando..."}render(){var s;return a(i,{class:"c-lab-error"},(null===(s=this.errors)||void 0===s?void 0:s.length)>0?a("dl",null,a("dt",null,"Errors:"),this.errors.map((s=>a("dd",null,s)))):a("yduqs-loading",{open:!0,message:this.message}))}},r=class{constructor(a){s(this,a),this.onClose=t(this,"close",7),this.message="",this.open=!1,this._isOpen=!1}async hide(){this._isOpen=!1,this.onClose.emit()}async show(){this._isOpen=!0}async isOpen(){return this._isOpen}componentWillLoad(){this._isOpen=this.open}renderMessage(){return a("span",{class:"c-loading__message c-paragraph"},this.message)}render(){return a(i,{class:"c-loading "+(this._isOpen?"":"c-loading--hidden")},a("div",{class:"c-loading__animation"},a("div",{class:"c-loading__dot"}),a("div",{class:"c-loading__dot"}),a("div",{class:"c-loading__dot"})),""!==this.message?this.renderMessage():null)}};export{n as yduqs_lab_error,r as yduqs_loading}