import{r as t,c as s,h as c,a as e}from"./p-3b8a929f.js";const a=class{constructor(c){t(this,c),this.btnClick=s(this,"btnClick",7),this.parsedActions=[]}componentWillLoad(){const t=[];this.actions.split(";").forEach((s=>{const c=s.split(":");t.push({label:c[1],action:c[0]})})),this.parsedActions=t}handleBtnClick(t){this.btnClick.emit({phase:this.phaseNumber,action:t})}render(){var t;return c(e,{class:"c-cover-stage",ref:t=>this.hostElem=t,style:this.background?{backgroundImage:`url('${this.background}')`}:{}},c("div",{class:"c-cover-stage-aside"}),c("span",{class:"c-cover-stage-phase "+(String(this.phaseNumber).length>1?"a-left":"")},this.phaseNumber),c("div",{class:"c-cover-stage-content"},c("h6",{class:"c-cover-stage-content-overtitle"},this.overtitle||`Fase ${this.phaseNumber}`),c("h3",{class:"c-cover-stage-content-title"},this._title),c("p",{class:"c-cover-stage-content-desc"},this.description),c("div",{class:"c-cover-stage-content-btn"},null===(t=this.parsedActions)||void 0===t?void 0:t.map((t=>c("button",{type:"button",class:"c-button",style:{marginRight:"10px"},onClick:()=>this.handleBtnClick(t.action)},t.label))))))}};export{a as yduqs_cover_stage_lab}