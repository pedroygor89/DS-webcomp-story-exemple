import{r as i,c as t,h as s}from"./p-3b8a929f.js";const n=class{constructor(s){i(this,s),this.onClose=t(this,"close",7),this.type="",this.dismissible=!1,this.open=!1,this._isOpen=!1,this._isDynamic=!1}async close(){this._isOpen=!1,this._isDynamic=!1,this.onClose.emit()}async show(){this._isOpen=!0,this._isDynamic=!0}async isOpen(){return this._isOpen}componentWillLoad(){this._isOpen=this.open}_getIconName(){return"info"===this.type?"info":"success"===this.type?"check_circle":"warning"===this.type?"report_problem":"error"===this.type?"cancel":""}render(){const i=this._isOpen?"":"u-fade-out",t=this.type?`c-notification--${this.type}`:"",n=this._getIconName();return s("div",{role:"notification",hidden:!this._isOpen,class:`c-notification ${t} ${i} ${this._isDynamic?"c-notification--dynamic u-fade-in":""}`},s("div",{class:"c-notification__container"},s("div",{class:"c-notification__content"},s("span",{class:"c-notification__icon material-icons"},n),s("slot",null)),this.dismissible&&s("button",{class:"c-notification__control",onClick:()=>this.close()},s("span",{class:"c-notification__icon material-icons"},"close"))))}};export{n as yduqs_notification}