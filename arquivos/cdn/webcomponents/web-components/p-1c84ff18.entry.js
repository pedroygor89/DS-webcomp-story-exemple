import{r as t,h as s}from"./p-c4393f38.js";const i=class{constructor(s){t(this,s),this.value=0,this.max=10,this.min=-10,this.step=1}updateValue(t){this.value=t,this.output&&this.output(this.value)}increaseValue(){this.updateValue(this.value+this.step>this.max?this.max:this.value+this.step)}decreaseValue(){this.updateValue(this.value-this.step<this.min?this.min:this.value-this.step)}render(){return s("yduqs-card",{dark:!0,small:!0,class:"c-range"},s("div",{class:"c-range-controls"},s("button",{type:"button",class:"c-button c-button__icon-container c-button__icon-small u-text--small",disabled:this.value<=this.min,onClick:()=>this.decreaseValue()},s("span",{class:"c-button__icon material-icons"},"remove")),s("div",{class:"c-range-input"},s("input",{type:"range",id:this.name,name:this.name,class:"c-range-input",min:this.min,max:this.max,step:this.step,value:this.value,onChange:t=>this.updateValue(parseInt(t.target.value)),ref:t=>this.elemRange=t})),s("button",{type:"button",class:"c-button c-button__icon-container c-button__icon-small u-text--small",disabled:this.value>=this.max,onClick:()=>this.increaseValue()},s("span",{class:"c-button__icon material-icons"},"add"))))}};export{i as yduqs_range}