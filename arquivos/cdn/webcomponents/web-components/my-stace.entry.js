import { r as registerInstance, i as createEvent, g as getElement } from './index-5acc1e77.js';
import './index-7a798434.js';

const MyStace = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeText = createEvent(this, "changeText", 7);
    this.autoUpdateContent = true;
    this.durationBeforeCallback = 0;
    this.options = {};
    this.readOnly = false;
    this.theme = "ambiance";
    this.mode = "javascript";
    this.text = "";
  }
  setOptions(options) {
    this._editor.setOptions(options || {});
  }
  setReadOnly(readOnly) {
    this._editor.setReadOnly(readOnly);
  }
  async setTheme(theme, dynamicImport = true) {
    if (dynamicImport) {
      var url_theme = `https://unpkg.com/brace/theme/${theme}`;
      await import(url_theme);
    }
    this._editor.setTheme(`ace/theme/${theme}`);
  }
  async setMode(mode, dynamicImport = true) {
    var lang = mode;
    if (lang === "python" || lang === "python2" || lang === "python3") {
      lang = "python";
    }
    else if (lang === "c" || lang === "c++" || lang === "csharp" || lang === "c-sharp" || lang === "cpp") {
      lang = "c_cpp";
    }
    else if (lang === "objective-c" || lang === "objectivec") {
      lang = "objectivec";
    }
    else if (lang === "go" || lang === "golang") {
      lang = "golang";
    }
    else if (lang === "coffee" || lang === "coffeescript") {
      lang = "coffee";
    }
    else if (lang === "vb" || lang === "vbscript") {
      lang = "vbscript";
    }
    else {
      lang = 'text';
    }
    if (dynamicImport) {
      var url_mode = 'https://unpkg.com/brace/mode/' + lang;
      await import(url_mode);
    }
    this._editor.getSession().setMode('ace/mode/' + lang);
  }
  watchText(text) {
    if (text === null || text === undefined) {
      text = "";
    }
    if (this.text !== text && this.autoUpdateContent === true) {
      this.text = text;
      this._editor.setValue(text);
      this._editor.clearSelection();
    }
  }
  componentDidLoad() {
    this.init();
    this.initEvents();
  }
  async getEditor() {
    return this._editor;
  }
  init() {
    if (this.elm && !this._editor) {
      this._editor = ace.edit(this.elm);
      this._editor.$blockScrolling = Infinity;
    }
    if (this._editor) {
      this.setOptions(this.options || {});
      this.setTheme(this.theme);
      this.setMode(this.mode);
      this.setReadOnly(this.readOnly);
    }
  }
  initEvents() {
    this._editor.on('change', () => this.updateText());
    this._editor.on('paste', () => this.updateText());
  }
  updateText() {
    let newVal = this._editor.getValue();
    if (newVal === this.oldText) {
      return;
    }
    if (!this.durationBeforeCallback) {
      this.text = newVal;
      this.changeText.emit(newVal);
    }
    else {
      if (this.timeoutSaving) {
        clearTimeout(this.timeoutSaving);
      }
      this.timeoutSaving = setTimeout(() => {
        this.text = newVal;
        this.changeText.emit(newVal);
        this.timeoutSaving = null;
      }, this.durationBeforeCallback);
    }
    this.oldText = newVal;
  }
  get elm() { return getElement(this); }
  static get watchers() { return {
    "options": ["setOptions"],
    "readOnly": ["setReadOnly"],
    "theme": ["setTheme"],
    "mode": ["setMode"],
    "text": ["watchText"]
  }; }
};

export { MyStace as my_stace };
