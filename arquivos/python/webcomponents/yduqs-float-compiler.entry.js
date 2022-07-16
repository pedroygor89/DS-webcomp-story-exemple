import { r as registerInstance, h, e as Host, g as getElement } from './index-6ca065bd.js';

const mobileBreakpoint = 578;
const YduqsFloatCompiler = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dark = true;
    this._isMobile = window.innerWidth < mobileBreakpoint;
    this._isOpen = false;
    this._isActive = false;
    this._animate = false;
    this._activeIndex = 0;
  }
  handleWindowResize() {
    const isMobileDevice = window.innerWidth < mobileBreakpoint;
    if (isMobileDevice && !this._isMobile) {
      this._isMobile = true;
    }
    else if (!isMobileDevice && this._isMobile) {
      this._isMobile = false;
    }
  }
  closeFloatCompiler(index) {
    if (!this._isMobile && this._isOpen) {
      this.animate(true);
    }
    if (index >= 0) {
      this._activeIndex = index;
    }
    this._isOpen = false;
  }
  openFloatCompiler() {
    if (!this._isMobile && this._isOpen) {
      this.closeFloatCompiler();
    }
    else {
      this._isOpen = true;
    }
  }
  animate(state = false) {
    this._animate = state;
  }
  open_compiler() {
    document.body.classList.add('compiler_open');
    document.querySelector('yduqs-float-compiler').classList.add('floatCompiler_open');
    document.getElementById('iframe-container').classList.add('collapsed');
    document.getElementById('compiler-container').classList.remove('collapsed');
    document.getElementById('sidebarFloatCompiler').classList.remove('collapsed');
    this._isOpen = true;
  }
  close_compiler() {
    document.body.classList.remove('compiler_open');
    document.querySelector('yduqs-float-compiler').classList.remove('floatCompiler_open');
    document.getElementById('iframe-container').classList.remove('collapsed');
    document.getElementById('compiler-container').classList.add('collapsed');
    document.getElementById('sidebarFloatCompiler').classList.add('collapsed');
    this._isOpen = false;
  }
  componentDidLoad() {
    let iframeBox = window.frames[0];
    document.body.classList.add('theme_first_page');
    function pagePosition() {
      if (iframeBox.document.querySelector('body').classList.contains('pager_first_page') === true) {
        document.body.classList.add('theme_first_page');
        document.getElementById('iframe-container').classList.remove('collapsed');
        document.getElementById('compiler-container').classList.add('collapsed');
        document.getElementById('sidebarFloatCompiler').classList.add('collapsed');
        document.querySelector('yduqs-float-compiler').classList.remove('floatCompiler_open');
      }
      else {
        document.body.classList.remove('theme_first_page');
        document.body.classList.remove('theme_last_page');
        document.getElementById('compiler-container').classList.remove('d-none');
      }
      if (iframeBox.document.querySelector('body').classList.contains('pager_last_page') === true) {
        document.body.classList.add('theme_last_page');
      }
      else {
        document.body.classList.remove('theme_last_page');
      }
    }
    function getLastPage() {
      document.body.classList.add('theme_last_page');
    }
    iframeBox.onload = function () {
      const waitPageTimer = setTimeout(waitPage, 250);
      iframeBox.document.querySelector('a[href*="#conclusao"]').setAttribute('id', 'pager_menu_conclusao');
      function waitPage() {
        if (typeof iframeBox.document.getElementById('pager_menu_conclusao') !== typeof undefined) {
          pagePosition();
          iframeBox.document.getElementById('start_class').addEventListener('click', pagePosition, false);
          iframeBox.document.getElementById('btnPaginator').addEventListener('click', pagePosition, false);
          iframeBox.document.getElementById('pager_menu_conclusao').addEventListener('click', getLastPage, false);
          clearTimeout(waitPageTimer);
        }
        else {
          console.log('ainda nao');
        }
      }
    };
  }
  getCompiler() {
    return (h("div", { id: "sidebarFloatCompiler", class: "collapsed c-float-compiler__floating-btn__container" }, h("button", { class: "floatCompilerClose c-button u-text--small d-inline-block", onClick: () => this.close_compiler() }, h("span", { class: "material-icons d-inline-block" }, "close"), h("span", null, "Fechar")), h("yduqs-code-compiler", { exercise_title: "Compilador", language_code: "python", input_keyboard: "", code: "", dark: true, project_python: true }), h("yduqs-modal", { id: "float-compiler-obs" }, h("div", { class: "row" }, h("div", { class: "col" }, h("span", { class: "c-modal__title" }, h("span", { class: "material-icons icon" }, "help_outline"), " Orienta\u00E7\u00F5es de uso"))), h("div", { class: "row" }, h("div", { class: "col" }, h("p", { class: "c-modal__paragraph" }, "Para utilizar o compilador basta digitar ou colar o c\u00F3digo e depois clicar em Executar. Quando houver necessidade de entrada de dados pelo usu\u00E1rio, o valor de entrada deve ser inserido no campo input antes da execu\u00E7\u00E3o do c\u00F3digo. Quando houver mais de uma entrada, cada valor dever\u00E1 ser inserido em uma linha isolada dentro do campo. A sa\u00EDda ser\u00E1 visualizada no campo console."))))));
  }
  render() {
    return (h(Host, { class: `c-float-compiler ${this._isOpen ? 'floatCompiler_open' : ''}` }, h("div", { id: "openCompiler", class: "c-float-compiler__floating-btn__container" }, h("button", { class: "c-button u-text--medium p-3", onClick: () => this.open_compiler() }, h("span", { class: "c-float-compiler-button-icon material-icons d-inline-block" }, "code"), h("span", { class: "c-float-compiler-button-text" }, "Compilador"))), this.getCompiler()));
  }
  get el() { return getElement(this); }
};

export { YduqsFloatCompiler as yduqs_float_compiler };
