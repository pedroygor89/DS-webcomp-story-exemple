import{r as s,c as i,h as a,a as t}from"./p-1ffebba0.js";let n=class{constructor(a){s(this,a),this.onClose=i(this,"close",7),this.message="",this.open=!1,this._isOpen=!1}async hide(){this._isOpen=!1,this.onClose.emit()}async show(){this._isOpen=!0}async isOpen(){return this._isOpen}componentWillLoad(){this._isOpen=this.open}renderMessage(){return a("span",{class:"c-loading__message c-paragraph"},this.message)}render(){return a(t,{class:"c-loading "+(this._isOpen?"":"c-loading--hidden")},a("div",{class:"c-loading__animation"},a("div",{class:"c-loading__dot"}),a("div",{class:"c-loading__dot"}),a("div",{class:"c-loading__dot"})),""!==this.message?this.renderMessage():null)}};export{n as yduqs_loading}