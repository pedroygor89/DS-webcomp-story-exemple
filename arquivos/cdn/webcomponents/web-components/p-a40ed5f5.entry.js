import{r as t,c as s,g as i}from"./p-c4393f38.js";import"./p-8c4b9012.js";const h=class{constructor(i){t(this,i),this.changeText=s(this,"changeText",7),this.autoUpdateContent=!0,this.durationBeforeCallback=0,this.options={},this.readOnly=!1,this.theme="ambiance",this.mode="javascript",this.text=""}setOptions(t){this._editor.setOptions(t||{})}setReadOnly(t){this._editor.setReadOnly(t)}async setTheme(t,s=!0){if(s){var i=`https://unpkg.com/brace/theme/${t}`;await import(i)}this._editor.setTheme(`ace/theme/${t}`)}async setMode(t,s=!0){var i=t;if("python"!==i&&"python2"!==i&&"python3"!==i||(i="python"),"c"!==i&&"c++"!==i&&"csharp"!==i&&"c-sharp"!==i&&"cpp"!==i||(i="c_cpp"),"objective-c"!==i&&"objectivec"!==i||(i="objectivec"),"go"!==i&&"golang"!==i||(i="golang"),"coffee"!==i&&"coffeescript"!==i||(i="coffee"),"vb"!==i&&"vbscript"!==i||(i="vbscript"),s){var h="https://unpkg.com/brace/mode/"+i;await import(h)}this._editor.getSession().setMode("ace/mode/"+i)}watchText(t){null==t&&(t=""),this.text!==t&&!0===this.autoUpdateContent&&(this.text=t,this._editor.setValue(t),this._editor.clearSelection())}componentDidLoad(){this.init(),this.initEvents()}async getEditor(){return this._editor}init(){this.elm&&!this._editor&&(this._editor=ace.edit(this.elm),this._editor.$blockScrolling=1/0),this._editor&&(this.setOptions(this.options||{}),this.setTheme(this.theme),this.setMode(this.mode),this.setReadOnly(this.readOnly))}initEvents(){this._editor.on("change",(()=>this.updateText())),this._editor.on("paste",(()=>this.updateText()))}updateText(){let t=this._editor.getValue();t!==this.oldText&&(this.durationBeforeCallback?(this.timeoutSaving&&clearTimeout(this.timeoutSaving),this.timeoutSaving=setTimeout((()=>{this.text=t,this.changeText.emit(t),this.timeoutSaving=null}),this.durationBeforeCallback)):(this.text=t,this.changeText.emit(t)),this.oldText=t)}get elm(){return i(this)}static get watchers(){return{options:["setOptions"],readOnly:["setReadOnly"],theme:["setTheme"],mode:["setMode"],text:["watchText"]}}};export{h as my_stace}