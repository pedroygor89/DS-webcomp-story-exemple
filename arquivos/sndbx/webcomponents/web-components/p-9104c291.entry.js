import{r as s,h as t}from"./p-680957d0.js";let i=class{constructor(t){s(this,t),this.visible="invisible",this.color="",this.iconColor="times-buttom-color-default",this.bgColor=""}async alteraInput(s){this.input=s.target.value}async apagarValor(){this.input="",this.visible="invisible",this.color="color-default"}mensagem(s){""!=s&&s.length>4?(this.visible="",this.color="success",this.iconColor="times-buttom-color-success",this.messageTitle=!0,this.bgColor="bg-success"):""==s?(this.color="color-default",this.visible="invisible",this.iconColor="times-buttom-color-default",this.bgColor=""):(this.visible=" ",this.color="danger",this.iconColor="times-buttom-color-danger",this.messageTitle=!1,this.bgColor="bg-danger")}render(){return t("div",{class:"container-input"},t("h2",null,this.titulo),t("input",{id:"inputId",class:`${this.color} inputC ${this.bgColor}`,type:"text",placeholder:this.icon+" "+this.placeh,value:this.input,onInput:s=>this.alteraInput(s)}),t("span",{class:"times-buttom",onClick:()=>{this.apagarValor()}},t("i",{class:`fa fa-times ${this.iconColor}`})),t("p",{class:`${this.color} message-value ${this.visible}`},this.messageTitle?"Username available!":"Username Token!"))}static get watchers(){return{input:["mensagem"]}}};export{i as yduqs_input}