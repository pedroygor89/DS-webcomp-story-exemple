import{r as s,c as t,h as i,a as o}from"./p-c4393f38.js";const a=class{constructor(i){s(this,i),this.onToggle=t(this,"togglepane",7),this._isOpen=!1,this.english=!1,this.spanish=!1,this.open=!1}componentWillLoad(){this._isOpen=this.open;const s=document.querySelector("html").getAttribute("lang");"en-us"===s?this.english=!0:"es"===s&&(this.spanish=!0)}async show(){this._isOpen=!0}async close(){this._isOpen=!1}toggle(){this._isOpen?this.close():this.show(),this.onToggle.emit(this._isOpen)}async isOpen(){return this._isOpen}animate(){this.content.className=this._isOpen?"C-collapse__content u-fade-in":"C-collapse__content"}render(){const s=this._isOpen?"C-collapse__control--active":"",t=this.size?`u-text--${this.size}`:"u-text--medium",a=this.teoria?"bgTeoriaDark":"bgTeoriaDefault",e=this._isOpen?this.english?"Close":this.spanish?"Cerrar":"Fechar Solução":this.english?"Working it Out":this.spanish?"Mostrar solución":"Mostrar solução";return i(o,null,i("button",{role:"heading","aria-expanded":this._isOpen.toString(),class:`C-collapse__control ${s} ${t}`,onClick:()=>this.toggle()},i("div",{class:"c-button container-btn"},i("span",{class:"C-collapse__title"},e),i("span",{class:"C-collapse__icon material-icons"},"expand_more"))),i("div",{ref:s=>this.content=s,"aria-hidden":!this._isOpen,class:`C-collapse__content ${a}`},i("slot",null)))}};export{a as yduqs_collapse_teoria_content}