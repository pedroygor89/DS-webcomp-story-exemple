import{r as t,h as s,g as e}from"./p-3b8a929f.js";const o=class{constructor(s){t(this,s),this.text_console="",this.text_response="",this.value="",this.response_active=!1}async copy(t){navigator.clipboard.writeText(t)}async GET(t,s){var e=new XMLHttpRequest;return e.withCredentials=!1,e.open(t,s,!1),e.setRequestHeader("x-rapidapi-key","5c5fc15161msh1ed684ed727dacdp1856e4jsn507d3fc3d8ce"),e.setRequestHeader("x-rapidapi-host","paiza-io.p.rapidapi.com"),e.send(null),e.responseText}async runCompilerDesktop(){this.text_console='<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>',this.response_active=!1,setTimeout((()=>{this.runCompilerAPI()}),100)}runCompilerMobile(){this.text_console='<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>',this.response_active=!1,this.el.querySelector("yduqs-tabs").openTab(1),setTimeout((()=>{this.runCompilerAPI()}),100)}async runCompilerAPI(){var t="https://paiza-io.p.rapidapi.com/runners/create?source_code="+encodeURIComponent(this.current_code)+"&input="+encodeURIComponent(this.value.replace(/<br ?\/?>/g,"\n"))+"&language="+this.language_code+"&longpoll=true&api_key=guest",s="https://paiza-io.p.rapidapi.com/runners/get_status?id="+JSON.parse(await this.GET("POST",t)).id+"&api_key=guest",e=JSON.parse(await this.GET("GET",s));if("completed"==e.status){var o="https://paiza-io.p.rapidapi.com/runners/get_details?id="+e.id+"&api_key=guest",i=JSON.parse(await this.GET("GET",o));"success"==i.result?(this.response_active=!0,this.text_response=i.stdout):(this.response_active=!1,this.text_console='<span class="error-compiler">'+i.stderr+"</span>")}}handleChange(t){this.value=t.target.value}formatValue(t){return decodeURIComponent(t.replace(/<br ?\/?>/g,"\n"))}textChangeHandler(t){this.current_code=t.detail}setInput(){this.value=decodeURIComponent(this.input_keyboard)}componentWillRender(){this.isDark=this.dark}componentDidLoad(){null==this.current_code&&(this.current_code=decodeURIComponent(this.code)),"python"!==this.language_code&&"python2"!==this.language_code&&"python3"!==this.language_code||(this.language_code="python3"),this.setInput()}render(){return[s("div",{class:"c-code-compiler "+(this.isDark?"dark":"")},s("div",{class:"top d-flex align-items-center justify-content-between"},s("span",{class:"title"},this.exercise_title),s("span",{class:"material-icons icon",onClick:()=>this.copy(this.current_code)},"content_copy")),s("div",{class:"box"},s("div",{class:"box-code"},s("span",{class:"title_code"},this.language_code),s("stace-editor",{class:"content_code",mode:this.language_code,theme:this.isDark?"monokai":"chrome",readOnly:!1,autoUpdateContent:!0,durationBeforeCallback:1e3},decodeURIComponent(this.code))),s("div",{class:"box-input-console"},s("div",{class:"box-input"},s("span",{class:"title_input"},"Input"),s("div",{class:"content_input"},s("textarea",{value:this.formatValue(this.value),onInput:t=>this.handleChange(t)}))),s("div",{class:"box-console"},s("span",{class:"title_console"},"Console"),s("div",{class:"button_console"},s("button",{class:"c-button c-button__icon-container "+(this.isDark?"c-button--dark":""),type:"button",onClick:()=>this.runCompilerDesktop()},s("span",{class:"c-button__icon-text-right material-icons"},"play_arrow"),"Executar")),this.response_active?s("textarea",{class:"content_response",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",disabled:!0,innerHTML:this.text_response}):s("div",{class:"content_console",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",innerHTML:this.text_console})),s("div",{class:"box-mobile"},s("yduqs-tabs",{darkmode:!1},s("yduqs-tab",{header:"Input",open:!0},s("div",{class:"box-input-tab"},s("div",{class:"content_input-tab"},s("textarea",{value:this.formatValue(this.value),onInput:t=>this.handleChange(t)})))),s("yduqs-tab",{header:"Console"},s("div",{class:"box-console-tab"},this.response_active?s("textarea",{class:"content_response-tab",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",disabled:!0,innerHTML:this.text_response}):s("div",{class:"content_console-tab",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",innerHTML:this.text_console})))),s("div",{class:"button_console-mobile"},s("button",{class:"c-button c-button__icon-container u-text--small "+(this.isDark?"c-button--dark":""),type:"button",onClick:()=>this.runCompilerMobile()},s("span",{class:"c-button__icon-text-right material-icons"},"play_arrow")))))))]}get el(){return e(this)}};export{o as yduqs_code_compiler}