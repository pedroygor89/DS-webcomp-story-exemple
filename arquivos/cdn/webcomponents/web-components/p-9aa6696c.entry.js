import{r as t,h as s}from"./p-3b8a929f.js";const e=class{constructor(s){t(this,s),this.size="medium"}async copy(t){navigator.clipboard.writeText(t)}componentWillRender(){this.isDark=this.dark}render(){return[s("div",{class:"c-code-snipet "+(this.isDark?"dark":"")},s("div",{class:"top d-flex align-items-center justify-content-between"},s("span",{class:"title"},this.language_code),s("span",{class:"material-icons icon",onClick:()=>this.copy(this.code)},"content_copy")),s("div",{class:`box box-${this.size}`},s("div",{class:"box-code"},s("my-stace",{class:"content_code",mode:this.language_code,theme:this.isDark?"monokai":"chrome",readOnly:!0,autoUpdateContent:!1,durationBeforeCallback:1e3},decodeURIComponent(this.code)))))]}};export{e as yduqs_code_snipet}