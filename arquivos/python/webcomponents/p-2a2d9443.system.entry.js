var __awaiter=this&&this.__awaiter||function(t,e,o,n){function i(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,s){function a(t){try{c(n.next(t))}catch(t){s(t)}}function r(t){try{c(n["throw"](t))}catch(t){s(t)}}function c(t){t.done?o(t.value):i(t.value).then(a,r)}c((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var o={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,i,s,a;return a={next:r(0),throw:r(1),return:r(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function r(t){return function(e){return c([t,e])}}function c(a){if(n)throw new TypeError("Generator is already executing.");while(o)try{if(n=1,i&&(s=a[0]&2?i["return"]:a[0]?i["throw"]||((s=i["return"])&&s.call(i),0):i.next)&&!(s=s.call(i,a[1])).done)return s;if(i=0,s)a=[a[0]&2,s.value];switch(a[0]){case 0:case 1:s=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;i=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(s=o.trys,s=s.length>0&&s[s.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!s||a[1]>s[0]&&a[1]<s[3])){o.label=a[1];break}if(a[0]===6&&o.label<s[1]){o.label=s[1];s=a;break}if(s&&o.label<s[2]){o.label=s[2];o.ops.push(a);break}if(s[2])o.ops.pop();o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t];i=0}finally{n=s=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-aa0e6d07.system.js","./p-9de78152.system.js"],(function(t,e){"use strict";var o,n,i,s,a;return{setters:[function(t){o=t.r;n=t.c;i=t.g;s=t.h;a=t.a},function(){}],execute:function(){var r=t("stace_editor",function(){function t(t){o(this,t);this.textChange=n(this,"textChange",7);this.autoUpdateContent=true;this.durationBeforeCallback=0;this.options={};this.readOnly=false;this.theme="ambiance";this.mode="javascript";this.text=""}t.prototype.setOptions=function(t){this._editor.setOptions(t||{})};t.prototype.setReadOnly=function(t){this._editor.setReadOnly(t)};t.prototype.setTheme=function(t,o){if(o===void 0){o=true}return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(i){switch(i.label){case 0:if(!o)return[3,2];n="https://unpkg.com/brace/theme/".concat(t);return[4,e.import(n)];case 1:i.sent();i.label=2;case 2:this._editor.setTheme("ace/theme/".concat(t));return[2]}}))}))};t.prototype.setMode=function(t,o){if(o===void 0){o=true}return __awaiter(this,void 0,void 0,(function(){var n,i;return __generator(this,(function(s){switch(s.label){case 0:n=t;if(n==="python"||n==="python2"||n==="python3"){n="python"}if(n==="c"||n==="c++"||n==="csharp"||n==="c-sharp"||n==="cpp"){n="c_cpp"}if(n==="objective-c"||n==="objectivec"){n="objectivec"}if(n==="go"||n==="golang"){n="golang"}if(n==="coffee"||n==="coffeescript"){n="coffee"}if(n==="vb"||n==="vbscript"){n="vbscript"}if(!o)return[3,2];i="https://unpkg.com/brace/mode/"+n;return[4,e.import(i)];case 1:s.sent();s.label=2;case 2:this._editor.getSession().setMode("ace/mode/"+n);return[2]}}))}))};t.prototype.watchText=function(t){if(t===null||t===undefined){t=""}if(this.text!==t&&this.autoUpdateContent===true){this.text=t;this._editor.setValue(t);this._editor.clearSelection()}};t.prototype.componentDidLoad=function(){this.init();this.initEvents()};t.prototype.getEditor=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this._editor]}))}))};t.prototype.init=function(){if(this.elm&&!this._editor){this._editor=ace.edit(this.elm);this._editor.$blockScrolling=Infinity}if(this._editor){this.setOptions(this.options||{});this.setTheme(this.theme);this.setMode(this.mode);this.setReadOnly(this.readOnly)}};t.prototype.initEvents=function(){var t=this;this._editor.on("change",(function(){return t.updateText()}));this._editor.on("paste",(function(){return t.updateText()}))};t.prototype.updateText=function(){var t=this;var e=this._editor.getValue();if(e===this.oldText){return}if(!this.durationBeforeCallback){this.text=e;this.textChange.emit(e)}else{if(this.timeoutSaving){clearTimeout(this.timeoutSaving)}this.timeoutSaving=setTimeout((function(){t.text=e;t.textChange.emit(e);t.timeoutSaving=null}),this.durationBeforeCallback)}this.oldText=e};Object.defineProperty(t.prototype,"elm",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{options:["setOptions"],readOnly:["setReadOnly"],theme:["setTheme"],mode:["setMode"],text:["watchText"]}},enumerable:false,configurable:true});return t}());var c=t("yduqs_code_compiler",function(){function t(t){o(this,t);this.project_python=false;this.text_console="";this.text_response="";this.response_active=false}t.prototype.copy=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){navigator.clipboard.writeText(t);return[2]}))}))};t.prototype.GET=function(t,e){return __awaiter(this,void 0,void 0,(function(){var o;return __generator(this,(function(n){o=new XMLHttpRequest;o.withCredentials=false;o.open(t,e,false);o.setRequestHeader("x-rapidapi-key","5c5fc15161msh1ed684ed727dacdp1856e4jsn507d3fc3d8ce");o.setRequestHeader("x-rapidapi-host","paiza-io.p.rapidapi.com");o.send(null);return[2,o.responseText]}))}))};t.prototype.runCompilerDesktop=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){this.text_console='<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>';this.response_active=false;setTimeout((function(){t.runCompilerAPI()}),100);return[2]}))}))};t.prototype.runCompilerMobile=function(){var t=this;this.text_console='<yduqs-loading open message="Estamos compilando o código."></yduqs-loading>';this.response_active=false;var e=this.el.querySelector("yduqs-tabs");e.openTab(1);setTimeout((function(){t.runCompilerAPI()}),100)};t.prototype.runCompilerAPI=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,o,n,i,s,a,r,c,l,u,d,p,h,f,m,_,y,b;return __generator(this,(function(g){switch(g.label){case 0:t=encodeURIComponent(this.current_code);e=encodeURIComponent(this.el.querySelector(".content_input pre").innerHTML.replace(/<br ?\/?>/g,"\n"));o=this.language_code;n="POST";i="https://paiza-io.p.rapidapi.com/runners/create?source_code="+t+"&input="+e+"&language="+o+"&longpoll=true&api_key=guest";r=(a=JSON).parse;return[4,this.GET(n,i)];case 1:s=r.apply(a,[g.sent()]);c=s.id;l="GET";u="https://paiza-io.p.rapidapi.com/runners/get_status?id="+c+"&api_key=guest";h=(p=JSON).parse;return[4,this.GET(l,u)];case 2:d=h.apply(p,[g.sent()]);if(!(d.status=="completed"))return[3,4];f="GET";m="https://paiza-io.p.rapidapi.com/runners/get_details?id="+d.id+"&api_key=guest";b=(y=JSON).parse;return[4,this.GET(f,m)];case 3:_=b.apply(y,[g.sent()]);if(_.result=="success"){this.response_active=true;this.text_response=_.stdout}else{this.response_active=false;this.text_console='<span class="error-compiler">'+_.stderr+"</span>"}g.label=4;case 4:return[2]}}))}))};t.prototype.textChangeHandler=function(t){this.current_code=t.detail};t.prototype.setInput=function(){var t=this.el.querySelector(".content_input pre");t.innerHTML=decodeURIComponent(this.input_keyboard);var e=this.el.querySelector(".content_input-tab pre");e.innerHTML=decodeURIComponent(this.input_keyboard)};t.prototype.updateInput=function(){this.el.querySelector(".content_input pre").innerHTML=this.el.querySelector(".content_input-tab pre").innerHTML};t.prototype.updateInputTab=function(){this.el.querySelector(".content_input-tab pre").innerHTML=this.el.querySelector(".content_input pre").innerHTML};t.prototype.componentWillRender=function(){this.isDark=this.dark};t.prototype.componentDidLoad=function(){if(this.current_code==null){this.current_code=decodeURIComponent(this.code)}if(this.language_code==="python"||this.language_code==="python2"||this.language_code==="python3"){this.language_code="python3"}this.setInput()};t.prototype.openModal=function(t){var e=document.getElementById(t);e.setAttribute("isopen","true")};t.prototype.render=function(){var t=this;return[s("div",{class:"c-code-compiler ".concat(this.isDark?"dark":"")},!this.project_python&&s("div",{class:"top d-flex align-items-center justify-content-between"},s("span",{class:"title"},this.exercise_title),s("span",{class:"material-icons icon",onClick:function(){return t.copy(t.current_code)}},"content_copy")),s("div",{class:"box"},s("div",{class:"box-code"},!this.project_python?s("div",null,s("span",{class:"title_code"},this.language_code),s("stace-editor",{class:"content_code",mode:this.language_code,theme:"".concat(this.isDark?"monokai":"chrome"),readOnly:false,autoUpdateContent:true,durationBeforeCallback:1e3},decodeURIComponent(this.code))):s("div",{class:"box-code-float-padd"},s("stace-editor",{class:"content_code",mode:this.language_code,theme:"".concat(this.isDark?"monokai":"chrome"),readOnly:false,autoUpdateContent:true,durationBeforeCallback:1e3},decodeURIComponent(this.code))),this.project_python&&s("div",{class:"top d-flex align-items-center justify-content-start"},s("div",{class:"button_console"},s("button",{class:"me-4 c-button c-button__icon-container ".concat(this.isDark?"c-button--dark":""),type:"button",onClick:function(){return t.runCompilerDesktop()}},s("span",{class:"c-button__icon-text-right material-icons"},"play_arrow"),"Executar")),s("span",{title:"Copiar código",class:"float-icon me-4 material-icons icon",onClick:function(){return t.copy(t.current_code)}},"content_copy"),s("span",{title:"Orientações",class:"modal float-icon me-4 material-icons icon",onClick:function(){return t.openModal("float-compiler-obs")}},"help_outline"))),s("div",{class:"box-input-console"},s("div",{class:"box-input"},s("span",{class:"title_input"},"Input"),s("div",{class:"content_input",onInput:function(){return t.updateInputTab()}},s("pre",{autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"true"}))),s("div",{class:"box-console"},s("span",{class:"title_console"},"Console"),!this.project_python&&s("div",{class:"button_console"},s("button",{class:"c-button c-button__icon-container ".concat(this.isDark?"c-button--dark":""),type:"button",onClick:function(){return t.runCompilerDesktop()}},s("span",{class:"c-button__icon-text-right material-icons"},"play_arrow"),"Executar")),this.response_active?s("textarea",{class:"content_response",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",disabled:true,innerHTML:this.text_response}):s("div",{class:"content_console",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",innerHTML:this.text_console})),s("div",{class:"box-mobile"},s("yduqs-tabs",{darkmode:false},s("yduqs-tab",{header:"Input",open:true},s("div",{class:"box-input-tab"},s("div",{class:"content_input-tab",onInput:function(){return t.updateInput()}},s("pre",{autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"true"})))),s("yduqs-tab",{header:"Console"},s("div",{class:"box-console-tab"},this.response_active?s("textarea",{class:"content_response-tab",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",disabled:true,innerHTML:this.text_response}):s("div",{class:"content_console-tab",autocorrect:"off",autocapitalize:"off",spellcheck:"false",contenteditable:"false",innerHTML:this.text_console})))),s("div",{class:"button_console-mobile"},s("button",{class:"c-button c-button__icon-container u-text--small ".concat(this.isDark?"c-button--dark":""),type:"button",onClick:function(){return t.runCompilerMobile()}},s("span",{class:"c-button__icon-text-right material-icons"},"play_arrow")))))))]};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());var l=578;var u=t("yduqs_float_compiler",function(){function t(t){o(this,t);this.dark=true;this._isMobile=window.innerWidth<l;this._isOpen=false;this._isActive=false;this._animate=false;this._activeIndex=0}t.prototype.handleWindowResize=function(){var t=window.innerWidth<l;if(t&&!this._isMobile){this._isMobile=true}else if(!t&&this._isMobile){this._isMobile=false}};t.prototype.closeFloatCompiler=function(t){if(!this._isMobile&&this._isOpen){this.animate(true)}if(t>=0){this._activeIndex=t}this._isOpen=false};t.prototype.openFloatCompiler=function(){if(!this._isMobile&&this._isOpen){this.closeFloatCompiler()}else{this._isOpen=true}};t.prototype.animate=function(t){if(t===void 0){t=false}this._animate=t};t.prototype.open_compiler=function(){document.body.classList.add("compiler_open");document.querySelector("yduqs-float-compiler").classList.add("floatCompiler_open");document.getElementById("iframe-container").classList.add("collapsed");document.getElementById("compiler-container").classList.remove("collapsed");document.getElementById("sidebarFloatCompiler").classList.remove("collapsed");this._isOpen=true};t.prototype.close_compiler=function(){document.body.classList.remove("compiler_open");document.querySelector("yduqs-float-compiler").classList.remove("floatCompiler_open");document.getElementById("iframe-container").classList.remove("collapsed");document.getElementById("compiler-container").classList.add("collapsed");document.getElementById("sidebarFloatCompiler").classList.add("collapsed");this._isOpen=false};t.prototype.componentDidLoad=function(){var t=window.frames[0];document.body.classList.add("theme_first_page");function e(){if(t.document.querySelector("body").classList.contains("pager_first_page")===true){document.body.classList.add("theme_first_page");document.getElementById("iframe-container").classList.remove("collapsed");document.getElementById("compiler-container").classList.add("collapsed");document.getElementById("sidebarFloatCompiler").classList.add("collapsed");document.querySelector("yduqs-float-compiler").classList.remove("floatCompiler_open")}else{document.body.classList.remove("theme_first_page");document.getElementById("compiler-container").classList.remove("d-none")}if(t.document.querySelector("body").classList.contains("pager_last_page")===true){document.body.classList.add("theme_last_page");document.getElementById("iframe-container").classList.remove("collapsed");document.getElementById("compiler-container").classList.add("collapsed");document.getElementById("sidebarFloatCompiler").classList.add("collapsed");document.querySelector("yduqs-float-compiler").classList.remove("floatCompiler_open");document.getElementById("openCompiler").classList.add("d-none")}else{document.body.classList.remove("theme_last_page");document.getElementById("compiler-container").classList.remove("d-none");document.getElementById("openCompiler").classList.remove("d-none")}}t.onload=function(){var o=setTimeout(n,250);function n(){if(typeof t.document.getElementById("start_class")!==typeof undefined){e();t.document.getElementById("start_class").addEventListener("click",e,false);t.document.getElementById("btnPaginator").addEventListener("click",e,false);t.document.querySelector('a.menu-button[href="#conclusao"]').addEventListener("click",e,false);clearTimeout(o)}}}};t.prototype.getCompiler=function(){var t=this;return s("div",{id:"sidebarFloatCompiler",class:"collapsed c-float-compiler__floating-btn__container"},s("button",{class:"floatCompilerClose c-button u-text--small d-inline-block",onClick:function(){return t.close_compiler()}},s("span",{class:"material-icons d-inline-block"},"close"),s("span",null,"Fechar")),s("yduqs-code-compiler",{exercise_title:"Compilador",language_code:"python",input_keyboard:"",code:"",dark:true,project_python:true}),s("yduqs-modal",{id:"float-compiler-obs"},s("div",{class:"row"},s("div",{class:"col"},s("span",{class:"c-modal__title"},s("span",{class:"material-icons icon"},"help_outline")," Orientações de uso"))),s("div",{class:"row"},s("div",{class:"col"},s("p",{class:"c-modal__paragraph"},"Para utilizar o compilador basta digitar ou colar o código e depois clicar em Executar. Quando houver necessidade de entrada de dados pelo usuário, o valor de entrada deve ser inserido no campo input antes da execução do código. Quando houver mais de uma entrada, cada valor deverá ser inserido em uma linha isolada dentro do campo. A saída será visualizada no campo console.")))))};t.prototype.render=function(){var t=this;return s(a,{class:"c-float-compiler ".concat(this._isOpen?"floatCompiler_open":"")},s("div",{id:"openCompiler",class:"c-float-compiler__floating-btn__container"},s("button",{class:"c-button u-text--medium p-3",onClick:function(){return t.open_compiler()}},s("span",{class:"c-float-compiler-button-icon material-icons d-inline-block"},"code"),s("span",{class:"c-float-compiler-button-text"},"Compilador"))),this.getCompiler())};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());var d=t("yduqs_modal",function(){function t(t){var e=this;o(this,t);this.modalClosed=n(this,"modalClosed",7);this._isopen=false;this.isopen=false;this.closeModal=function(){e.isopen=false;e.modalClosed.emit(true)}}t.prototype.handleModal=function(t){this._isopen=t};t.prototype.showModal=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this._isopen=true;return[2]}))}))};t.prototype.componentWillLoad=function(){this._isopen=this.isopen;this.getModalBodyHeight()};t.prototype.onResize=function(t){t.stopPropagation();this.getModalBodyHeight()};t.prototype.getModalBodyHeight=function(){var t=window.innerWidth;if(t>600){this.maxbodyheight=window.innerHeight*.7-56}else{this.maxbodyheight=window.innerHeight*.8-56}};t.prototype.render=function(){return s("div",{class:this._isopen?"c-modal__wrapper isopen":"c-modal__wrapper"},s("div",{class:"c-modal__overlay",onClick:this.closeModal}),s("div",{class:"c-modal"},s("div",{class:"c-modal__header"},s("div",{class:"c-modal__close",onClick:this.closeModal},s("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z",fill:"#30404D"})))),s("div",{style:{"max-height":"calc(".concat(this.maxbodyheight,"px + 10vh)")},class:"c-modal__body"},s("slot",null))))};Object.defineProperty(t,"watchers",{get:function(){return{isopen:["handleModal"]}},enumerable:false,configurable:true});return t}());var p=t("yduqs_tab",function(){function t(t){o(this,t)}t.prototype.render=function(){var t=this.type?"c-tabs__tab--".concat(this.type):"";return s(a,null,this.outline?s("div",{class:"c-round-border"},s("div",{role:"tabpanel",hidden:!this.open,class:"c-tabs__tab {typeClass}"},s("slot",null))):s("div",{role:"tabpanel",hidden:!this.open,class:"c-tabs__tab ".concat(t)},s("slot",null)))};return t}());var h=t("yduqs_tabs",function(){function t(t){o(this,t);this.onChange=n(this,"changed",7);this.fixed_titles=false;this.gtm_category=[];this.gtm_action=[];this.gtm_label=[]}t.prototype.componentWillLoad=function(){this.tabs=Array.from(this.elem.querySelectorAll("yduqs-tab"))};t.prototype.currentTab=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.tabs.findIndex((function(t){return t.open}))]}))}))};t.prototype.openTab=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(!this.tabs[t].disabled){this.tabs=this.tabs.map((function(t){t.open=false;return t}));this.tabs[t].open=true;this.onChange.emit({idx:t})}return[2]}))}))};t.prototype.render=function(){var t=this;var e=this.darkmode?"c-tabs--dark":"";var o=this.outlined?"c-tabs--outlined":"";return s("div",{class:"c-tabs ".concat(e," ").concat(o)},s("div",{role:"tablist",class:"c-tabs"},s("div",{class:"c-tabs__nav"},s("div",{class:"c-tabs__headings"},this.tabs.map((function(e,o){var n=e.open?"c-tab-heading--active":"";var i=t.icons?'<span class="c-button__icon-text-right material-icons">'.concat(t.icons[o],"</span> ").concat(e.header):"".concat(e.header);return s("div",{class:"c-tab-heading ".concat(n),onClick:function(){return t.openTab(o)},innerHTML:i,role:"tab","data-gtm-event-category":t.gtm_category[o],"data-gtm-event-action":t.gtm_action[o],"data-gtm-event-label":t.gtm_label[o]})})))),this.fixed_titles!=false?s("div",{class:"c-tabpanel-scroll"},s("slot",null)):s("slot",null)))};Object.defineProperty(t.prototype,"elem",{get:function(){return i(this)},enumerable:false,configurable:true});return t}())}}}));