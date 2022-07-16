import{r as t,c as s,g as e,h as i,a as o}from"./p-c4393f38.js";import"./p-8c4b9012.js";const a=class{constructor(e){t(this,e),this.textChange=s(this,"textChange",7),this.autoUpdateContent=!0,this.durationBeforeCallback=0,this.options={},this.readOnly=!1,this.theme="ambiance",this.mode="javascript",this.text=""}setOptions(t){this._editor.setOptions(t||{})}setReadOnly(t){this._editor.setReadOnly(t)}async setTheme(t,s=!0){if(s){var e=`https://unpkg.com/brace/theme/${t}`;await import(e)}this._editor.setTheme(`ace/theme/${t}`)}async setMode(t,s=!0){var e=t;if("python"!==e&&"python2"!==e&&"python3"!==e||(e="python"),"c"!==e&&"c++"!==e&&"csharp"!==e&&"c-sharp"!==e&&"cpp"!==e||(e="c_cpp"),"objective-c"!==e&&"objectivec"!==e||(e="objectivec"),"go"!==e&&"golang"!==e||(e="golang"),"coffee"!==e&&"coffeescript"!==e||(e="coffee"),"vb"!==e&&"vbscript"!==e||(e="vbscript"),s){var i="https://unpkg.com/brace/mode/"+e;await import(i)}this._editor.getSession().setMode("ace/mode/"+e)}watchText(t){null==t&&(t=""),this.text!==t&&!0===this.autoUpdateContent&&(this.text=t,this._editor.setValue(t),this._editor.clearSelection())}componentDidLoad(){this.init(),this.initEvents()}async getEditor(){return this._editor}init(){this.elm&&!this._editor&&(this._editor=ace.edit(this.elm),this._editor.$blockScrolling=1/0),this._editor&&(this.setOptions(this.options||{}),this.setTheme(this.theme),this.setMode(this.mode),this.setReadOnly(this.readOnly))}initEvents(){this._editor.on("change",(()=>this.updateText())),this._editor.on("paste",(()=>this.updateText()))}updateText(){let t=this._editor.getValue();t!==this.oldText&&(this.durationBeforeCallback?(this.timeoutSaving&&clearTimeout(this.timeoutSaving),this.timeoutSaving=setTimeout((()=>{this.text=t,this.textChange.emit(t),this.timeoutSaving=null}),this.durationBeforeCallback)):(this.text=t,this.textChange.emit(t)),this.oldText=t)}get elm(){return e(this)}static get watchers(){return{options:["setOptions"],readOnly:["setReadOnly"],theme:["setTheme"],mode:["setMode"],text:["watchText"]}}},n=class{constructor(s){t(this,s),this.project_python=!1,this.text_console="",this.text_response="",this.response_active=!1}async copy(t){navigator.clipboard.writeText(t)}async GET(t,s){var e=new XMLHttpRequest;return e.withCredentials=!1,e.open(t,s,!1),e.setRequestHeader("x-rapidapi-key","5c5fc15161msh1ed684ed727dacdp1856e4jsn507d3fc3d8ce"),e.setRequestHeader("x-rapidapi-host","paiza-io.p.rapidapi.com"),e.send(null),e.responseText}async runCompilerDesktop(){this.text_console='<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>',this.response_active=!1,setTimeout((()=>{this.runCompilerAPI()}),100)}runCompilerMobile(){this.text_console='<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>',this.response_active=!1,this.el.querySelector("yduqs-tabs").openTab(1),setTimeout((()=>{this.runCompilerAPI()}),100)}async runCompilerAPI(){var t="https://paiza-io.p.rapidapi.com/runners/create?source_code="+encodeURIComponent(this.current_code)+"&input="+encodeURIComponent(this.el.querySelector(".content_input pre").innerHTML.replace(/<br ?\/?>/g,"\n"))+"&language="+this.language_code+"&longpoll=true&api_key=guest",s="https://paiza-io.p.rapidapi.com/runners/get_status?id="+JSON.parse(await this.GET("POST",t)).id+"&api_key=guest",e=JSON.parse(await this.GET("GET",s));if("completed"==e.status){var i="https://paiza-io.p.rapidapi.com/runners/get_details?id="+e.id+"&api_key=guest",o=JSON.parse(await this.GET("GET",i));"success"==o.result?(this.response_active=!0,this.text_response=o.stdout):(this.response_active=!1,this.text_console='<span class="error-compiler">'+o.stderr+"</span>")}}textChangeHandler(t){this.current_code=t.detail}setInput(){this.el.querySelector(".content_input pre").innerHTML=decodeURIComponent(this.input_keyboard),this.el.querySelector(".content_input-tab pre").innerHTML=decodeURIComponent(this.input_keyboard)}updateInput(){this.el.querySelector(".content_input pre").innerHTML=this.el.querySelector(".content_input-tab pre").innerHTML}updateInputTab(){this.el.querySelector(".content_input-tab pre").innerHTML=this.el.querySelector(".content_input pre").innerHTML}componentWillRender(){this.isDark=this.dark}componentDidLoad(){null==this.current_code&&(this.current_code=decodeURIComponent(this.code)),"python"!==this.language_code&&"python2"!==this.language_code&&"python3"!==this.language_code||(this.language_code="python3"),this.setInput()}openModal(t){document.getElementById(t).setAttribute("isopen","true")}render(){return[i("div",{class:"c-code-compiler "+(this.isDark?"dark":"")},!this.project_python&&i("div",{class:"top d-flex align-items-center justify-content-between"},i("span",{class:"title"},this.exercise_title),i("span",{class:"material-icons icon",onClick:()=>this.copy(this.current_code)},"content_copy")),i("div",{class:"box"},i("div",{class:"box-code"},this.project_python?i("div",{class:"box-code-float-padd"},i("stace-editor",{class:"content_code",mode:this.language_code,theme:this.isDark?"monokai":"chrome",readOnly:!1,autoUpdateContent:!0,durationBeforeCallback:1e3},decodeURIComponent(this.code))):i("div",null,i("span",{class:"title_code"},this.language_code),i("stace-editor",{class:"content_code",mode:this.language_code,theme:this.isDark?"monokai":"chrome",readOnly:!1,autoUpdateContent:!0,durationBeforeCallback:1e3},decodeURIComponent(this.code))),this.project_python&&i("div",{class:"top d-flex align-items-center justify-content-start"},i("div",{class:"button_console"},i("button",{class:"me-4 c-button c-button__icon-container "+(this.isDark?"c-button--dark":""),type:"button",onClick:()=>this.runCompilerDesktop()},i("span",{class:"c-button__icon-text-right material-icons"},"play_arrow"),"Executar")),i("span",{title:"Copiar código",class:"float-icon me-4 material-icons icon",onClick:()=>this.copy(this.current_code)},"content_copy"),i("span",{title:"Orientações",class:"modal float-icon me-4 material-icons icon",onClick:()=>this.openModal("float-compiler-obs")},"help_outline"))),i("div",{class:"box-input-console"},i("div",{class:"box-input"},i("span",{class:"title_input"},"Input"),i("div",{class:"content_input",onInput:()=>this.updateInputTab()},i("pre",{autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"true"}))),i("div",{class:"box-console"},i("span",{class:"title_console"},"Console"),!this.project_python&&i("div",{class:"button_console"},i("button",{class:"c-button c-button__icon-container "+(this.isDark?"c-button--dark":""),type:"button",onClick:()=>this.runCompilerDesktop()},i("span",{class:"c-button__icon-text-right material-icons"},"play_arrow"),"Executar")),this.response_active?i("textarea",{class:"content_response",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",disabled:!0,innerHTML:this.text_response}):i("div",{class:"content_console",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",innerHTML:this.text_console})),i("div",{class:"box-mobile"},i("yduqs-tabs",{darkmode:!1},i("yduqs-tab",{header:"Input",open:!0},i("div",{class:"box-input-tab"},i("div",{class:"content_input-tab",onInput:()=>this.updateInput()},i("pre",{autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"true"})))),i("yduqs-tab",{header:"Console"},i("div",{class:"box-console-tab"},this.response_active?i("textarea",{class:"content_response-tab",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",disabled:!0,innerHTML:this.text_response}):i("div",{class:"content_console-tab",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",innerHTML:this.text_console})))),i("div",{class:"button_console-mobile"},i("button",{class:"c-button c-button__icon-container u-text--small "+(this.isDark?"c-button--dark":""),type:"button",onClick:()=>this.runCompilerMobile()},i("span",{class:"c-button__icon-text-right material-icons"},"play_arrow")))))))]}get el(){return e(this)}},c=class{constructor(s){t(this,s),this.dark=!0,this._isMobile=window.innerWidth<578,this._isOpen=!1,this._isActive=!1,this._animate=!1,this._activeIndex=0}handleWindowResize(){const t=window.innerWidth<578;t&&!this._isMobile?this._isMobile=!0:!t&&this._isMobile&&(this._isMobile=!1)}closeFloatCompiler(t){!this._isMobile&&this._isOpen&&this.animate(!0),t>=0&&(this._activeIndex=t),this._isOpen=!1}openFloatCompiler(){!this._isMobile&&this._isOpen?this.closeFloatCompiler():this._isOpen=!0}animate(t=!1){this._animate=t}open_compiler(){document.body.classList.add("compiler_open"),document.querySelector("yduqs-float-compiler").classList.add("floatCompiler_open"),document.getElementById("iframe-container").classList.add("collapsed"),document.getElementById("compiler-container").classList.remove("collapsed"),document.getElementById("sidebarFloatCompiler").classList.remove("collapsed"),this._isOpen=!0}close_compiler(){document.body.classList.remove("compiler_open"),document.querySelector("yduqs-float-compiler").classList.remove("floatCompiler_open"),document.getElementById("iframe-container").classList.remove("collapsed"),document.getElementById("compiler-container").classList.add("collapsed"),document.getElementById("sidebarFloatCompiler").classList.add("collapsed"),this._isOpen=!1}componentDidLoad(){let t=window.frames[0];function s(){!0===t.document.querySelector("body").classList.contains("pager_first_page")?(document.body.classList.add("theme_first_page"),document.getElementById("iframe-container").classList.remove("collapsed"),document.getElementById("compiler-container").classList.add("collapsed"),document.getElementById("sidebarFloatCompiler").classList.add("collapsed"),document.querySelector("yduqs-float-compiler").classList.remove("floatCompiler_open")):(document.body.classList.remove("theme_first_page"),document.getElementById("compiler-container").classList.remove("d-none"))}t.onload=function(){s(),t.document.getElementById("start_class").addEventListener("click",s,!1),t.document.getElementById("btnPaginator").addEventListener("click",s,!1)}}getCompiler(){return i("div",{id:"sidebarFloatCompiler",class:"collapsed c-float-compiler__floating-btn__container"},i("button",{class:"floatCompilerClose c-button u-text--small d-inline-block",onClick:()=>this.close_compiler()},i("span",{class:"material-icons d-inline-block"},"close"),i("span",null,"Fechar")),i("yduqs-code-compiler",{exercise_title:"Compilador",language_code:"python",input_keyboard:"",code:"",dark:!0,project_python:!0}),i("yduqs-modal",{id:"float-compiler-obs"},i("div",{class:"row"},i("div",{class:"col"},i("span",{class:"c-modal__title"},i("span",{class:"material-icons icon"},"help_outline")," Orientações de uso"))),i("div",{class:"row"},i("div",{class:"col"},i("p",{class:"c-modal__paragraph"},"Para utilizar o compilador basta digitar ou colar o código e depois clicar em Executar. Quando houver necessidade de entrada de dados pelo usuário, o valor de entrada deve ser inserido no campo input antes da execução do código. Quando houver mais de uma entrada, cada valor deverá ser inserido em uma linha isolada dentro do campo. A saída será visualizada no campo console.")))))}render(){return i(o,{class:"c-float-compiler "+(this._isOpen?"floatCompiler_open":"")},i("div",{id:"openCompiler",class:"c-float-compiler__floating-btn__container"},i("button",{class:"c-button u-text--medium p-3",onClick:()=>this.open_compiler()},i("span",{class:"c-float-compiler-button-icon material-icons d-inline-block"},"code"),i("span",{class:"c-float-compiler-button-text"},"Compilador"))),this.getCompiler())}get el(){return e(this)}},l=class{constructor(e){t(this,e),this.modalClosed=s(this,"modalClosed",7),this._isopen=!1,this.isopen=!1,this.closeModal=()=>{this.isopen=!1,this.modalClosed.emit(!0)}}handleModal(t){this._isopen=t}async showModal(){this._isopen=!0}componentWillLoad(){this._isopen=this.isopen,this.getModalBodyHeight()}onResize(t){t.stopPropagation(),this.getModalBodyHeight()}getModalBodyHeight(){let t=window.innerWidth;this.maxbodyheight=t>600?.7*window.innerHeight-56:.8*window.innerHeight-56}render(){return i("div",{class:this._isopen?"c-modal__wrapper isopen":"c-modal__wrapper"},i("div",{class:"c-modal__overlay",onClick:this.closeModal}),i("div",{class:"c-modal"},i("div",{class:"c-modal__header"},i("div",{class:"c-modal__close",onClick:this.closeModal},i("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z",fill:"#30404D"})))),i("div",{style:{"max-height":`calc(${this.maxbodyheight}px + 10vh)`},class:"c-modal__body"},i("slot",null))))}static get watchers(){return{isopen:["handleModal"]}}},r=class{constructor(s){t(this,s)}render(){const t=this.type?`c-tabs__tab--${this.type}`:"";return i(o,null,this.outline?i("div",{class:"c-round-border"},i("div",{role:"tabpanel",hidden:!this.open,class:"c-tabs__tab {typeClass}"},i("slot",null))):i("div",{role:"tabpanel",hidden:!this.open,class:`c-tabs__tab ${t}`},i("slot",null)))}},d=class{constructor(e){t(this,e),this.onChange=s(this,"changed",7),this.fixed_titles=!1,this.gtm_category=[],this.gtm_action=[],this.gtm_label=[]}componentWillLoad(){this.tabs=Array.from(this.elem.querySelectorAll("yduqs-tab"))}async currentTab(){return this.tabs.findIndex((t=>t.open))}async openTab(t){this.tabs[t].disabled||(this.tabs=this.tabs.map((t=>(t.open=!1,t))),this.tabs[t].open=!0,this.onChange.emit({idx:t}))}render(){return i("div",{class:`c-tabs ${this.darkmode?"c-tabs--dark":""} ${this.outlined?"c-tabs--outlined":""}`},i("div",{role:"tablist",class:"c-tabs"},i("div",{class:"c-tabs__nav"},i("div",{class:"c-tabs__headings"},this.tabs.map(((t,s)=>i("div",{class:"c-tab-heading "+(t.open?"c-tab-heading--active":""),onClick:()=>this.openTab(s),innerHTML:this.icons?`<span class="c-button__icon-text-right material-icons">${this.icons[s]}</span> ${t.header}`:`${t.header}`,role:"tab","data-gtm-event-category":this.gtm_category[s],"data-gtm-event-action":this.gtm_action[s],"data-gtm-event-label":this.gtm_label[s]}))))),0!=this.fixed_titles?i("div",{class:"c-tabpanel-scroll"},i("slot",null)):i("slot",null)))}get elem(){return e(this)}};export{a as stace_editor,n as yduqs_code_compiler,c as yduqs_float_compiler,l as yduqs_modal,r as yduqs_tab,d as yduqs_tabs}