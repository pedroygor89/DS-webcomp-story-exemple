import{r as s,c as t,h as e,g as i}from"./p-c4393f38.js";const o=class{constructor(e){s(this,e),this.onToggle=t(this,"toggle",7),this.border=!1,this.outline=!1}onTogglePane(s){const t=s.detail,e=[].indexOf.call(this.element.children[0].children,s.target);this.onToggle.emit({idx:e,open:t}),this._active=t,this.animate()}componentDidRender(){this.content&&this.content.offsetHeight&&(this._contentMaxHeight=`${this.content.offsetHeight.toString()}px`)}animate(){this.content.style.maxHeight=`${this._contentMaxHeight}px`}render(){return e("div",{ref:s=>this.content=s,class:`c-collapse ${this.border?"c-collapse--border":""} ${this.border?"c-collapse--border":""} ${this._active?"c-collapse--active":""}`},e("slot",null))}get element(){return i(this)}};export{o as yduqs_collapse}