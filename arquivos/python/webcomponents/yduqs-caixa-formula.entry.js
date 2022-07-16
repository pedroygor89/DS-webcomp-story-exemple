import { r as registerInstance, h, e as Host, g as getElement } from './index-6ca065bd.js';

const caixaFormula = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.title_formula = '';
    this.formula = '';
    this.outlined = false;
    this.rotate_info = false;
    this.equal_height = false;
  }
  calcula_space(el) {
    setTimeout(function () {
      var total = 0;
      var current_formula = el.querySelector('.c-caixa-formula mjx-container mjx-math');
      var caixa_width = el.getBoundingClientRect().width;
      current_formula.querySelectorAll(":scope > *").forEach(item => {
        total = total + item.getBoundingClientRect().width;
        if ((caixa_width - 200) < total) {
          total = 0;
          if (current_formula.tagName == 'MJX-MO') {
            item.insertAdjacentHTML('afterend', '<p/><p/>');
          }
          else {
            item.insertAdjacentHTML('beforebegin', '<p/><p/>');
          }
        }
      });
    }, 3000);
    window.addEventListener('resize', function () {
      var total = 0;
      var current_formula = el.querySelector('.c-caixa-formula mjx-container mjx-math');
      var caixa_width = el.getBoundingClientRect().width;
      current_formula.querySelectorAll(":scope > *").forEach(i => {
        if (i.tagName == 'P') {
          i.parentNode.removeChild(i);
        }
      });
      current_formula.querySelectorAll(":scope > *").forEach(item => {
        total = total + item.getBoundingClientRect().width;
        if ((caixa_width - 200) < total) {
          total = 0;
          if (current_formula.tagName == 'MJX-MO') {
            item.insertAdjacentHTML('afterend', '<p/><p/>');
          }
          else {
            item.insertAdjacentHTML('beforebegin', '<p/><p/>');
          }
        }
      });
    }, true);
  }
  componentWillLoad() {
    let bodyHtml = document.querySelector('body');
    let assetsMath = document.getElementById('mathjax-assets');
    let wcMath = document.getElementById('mathjax-webcomponents');
    let yqMath = document.getElementById('mathjax-assets-questions');
    if (assetsMath === null && wcMath === null && yqMath === null) {
      const scriptTag = document.createElement('script');
      scriptTag.type = "text/javascript";
      scriptTag.id = "mathjax-webcomponents";
      if (document.body.classList.contains('template_recursos')) {
        scriptTag.src = "https://stensineme.blob.core.windows.net/designsystem/templates/assets/js/mathjax/es5/tex-chtml-full.js";
      }
      else {
        scriptTag.src = 'https://stensineme.blob.core.windows.net/assets/js/mathjax/es5/tex-chtml-full.js';
      }
      bodyHtml.appendChild(scriptTag);
    }
  }
  componentDidLoad() {
    var el = this.element;
    this.calcula_space(el);
    let bodyHtml = document.querySelector('body');
    let assetsMath = document.getElementById('mathjax-assets');
    let wcMath = document.getElementById('mathjax-webcomponents');
    let yqMath = document.getElementById('mathjax-assets-questions');
    if (assetsMath !== null || wcMath !== null || yqMath !== null) {
      const reloadMath = document.createElement('script');
      reloadMath.type = "text/javascript";
      reloadMath.id = "reload-wc";
      if (document.body.classList.contains('template_recursos')) {
        reloadMath.src = "https://stensineme.blob.core.windows.net/designsystem/test/yduqs_mathjax_reload.js";
      }
      else {
        reloadMath.src = 'https://stensineme.blob.core.windows.net/assets/js/yduqs_mathjax_reload.js';
      }
      reloadMath.defer = true;
      bodyHtml.appendChild(reloadMath);
    }
  }
  render() {
    const background_caixa_formula = this.dark ? 'dark' : this.outlined ? 'outline' : 'light';
    this.outlined = false;
    const equalHeight = this.equal_height ? 'h-100' : '';
    return (h(Host, { class: equalHeight }, h("div", { class: `c-caixa-formula ` + equalHeight }, h("div", { class: `${background_caixa_formula} ${equalHeight}` }, h("div", { class: "d-flex align-items-center justify-content-center" }, h("yduqs-tag", { color: this.dark ? 'aaaaa' : '', innerHTML: this.title_formula })), h("yduqs-card", { dark: this.dark, outlined: this.outlined, class: `c-table ${equalHeight}` }, h("p", { innerHTML: this.formula, class: 'c-paragraph' }), h("div", { class: "d-flex align-items-center justify-content-center" }, h("slot", null)), h("div", { class: "legend-rotate" }, h("span", null, "Rotacione a tela. "), h("span", { class: "material-icons" }, "screen_rotation")))))));
  }
  get element() { return getElement(this); }
};

export { caixaFormula as yduqs_caixa_formula };
