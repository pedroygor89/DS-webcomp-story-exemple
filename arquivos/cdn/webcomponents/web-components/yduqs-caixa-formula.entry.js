import { r as registerInstance, h, e as Host, g as getElement } from './index-5acc1e77.js';

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
      if (current_formula) {
        let getScope = current_formula.querySelectorAll(':scope > *');
        if (getScope.length > 0) {
          getScope.forEach(item => {
            total = total + item.getBoundingClientRect().width;
            if (caixa_width - 200 < total) {
              total = 0;
              if (current_formula.tagName == 'MJX-MO') {
                item.insertAdjacentHTML('afterend', '<p/><p/>');
              }
              else {
                item.insertAdjacentHTML('beforebegin', '<p/><p/>');
              }
            }
          });
        }
      }
    }, 3000);
  }
  componentWillLoad() {
    let assetsMath = document.getElementById('mathjax-assets');
    let wcMath = document.getElementById('mathjax-webcomponents');
    let yqMath = document.getElementById('mathjax-assets-questions');
    if (assetsMath === null && wcMath === null && yqMath === null) {
      const scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.id = 'mathjax-webcomponents';
      scriptTag.src = `https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js`;
      scriptTag.async = true;
      document.head.appendChild(scriptTag);
    }
  }
  //Executa novamente o script de quebra de fórmula.
  reloadScriptComponent(el) {
    setTimeout(function () {
      var total = 0;
      var current_formula = el.querySelector('.c-caixa-formula mjx-container mjx-math');
      var caixa_width = el.getBoundingClientRect().width;
      if (current_formula) {
        let getScope = current_formula.querySelectorAll(':scope > *');
        if (getScope.length > 0) {
          getScope.forEach(i => {
            if (i.tagName == 'P') {
              i.parentNode.removeChild(i);
            }
          });
          getScope.forEach(item => {
            total = total + item.getBoundingClientRect().width;
            if (caixa_width - 200 < total) {
              total = 0;
              if (current_formula.tagName == 'MJX-MO') {
                item.insertAdjacentHTML('afterend', '<p/><p/>');
              }
              else {
                item.insertAdjacentHTML('beforebegin', '<p/><p/>');
              }
            }
          });
        }
      }
    }, 3000);
  }
  componentDidLoad() {
    var el = this.element;
    this.calcula_space(el);
    window.addEventListener('resize', () => {
      this.reloadScriptComponent(el);
    });
    window.addEventListener('yduqs-pager-before-change', () => {
      this.reloadScriptComponent(el);
    });
    let assetsMath = document.getElementById('mathjax-assets');
    let wcMath = document.getElementById('mathjax-webcomponents');
    let yqMath = document.getElementById('mathjax-assets-questions');
    if (assetsMath !== null || wcMath !== null || yqMath !== null) {
      const reloadMath = document.createElement('script');
      reloadMath.type = 'text/javascript';
      reloadMath.id = 'reload-wc';
      reloadMath.src = 'https://stensineme.blob.core.windows.net/assets/js/yduqs_mathjax_reload.js';
      reloadMath.async = true;
      document.body.appendChild(reloadMath);
    }
  }
  componentDidRender() {
    let assetsMath = document.getElementById('mathjax-assets');
    let wcMath = document.getElementById('mathjax-webcomponents');
    let yqMath = document.getElementById('mathjax-assets-questions');
    if (assetsMath !== null || wcMath !== null || yqMath !== null) {
      const reloadMath = document.createElement('script');
      reloadMath.type = 'text/javascript';
      reloadMath.id = 'reload-wc';
      reloadMath.src = 'https://stensineme.blob.core.windows.net/assets/js/yduqs_mathjax_reload.js';
      reloadMath.async = true;
      document.body.appendChild(reloadMath);
    }
  }
  render() {
    const background_caixa_formula = this.dark ? 'dark' : this.outlined ? 'outline' : 'light';
    this.outlined = false;
    const equalHeight = this.equal_height ? 'h-100' : '';
    return (h(Host, { class: equalHeight }, h("div", { class: `c-caixa-formula ` + equalHeight }, h("div", { class: `${background_caixa_formula} ${equalHeight}` }, h("div", { class: "d-flex align-items-center justify-content-center" }, h("yduqs-tag", { color: this.dark ? 'aaaaa' : '', innerHTML: this.title_formula })), h("yduqs-card", { dark: this.dark, outlined: this.outlined, class: `c-table ${equalHeight}` }, h("p", { innerHTML: this.formula, class: "c-paragraph" }), h("div", { class: "d-flex align-items-center justify-content-center" }, h("slot", null)), h("div", { class: "legend-rotate" }, h("span", null, "Rotacione a tela. "), h("span", { class: "material-icons" }, "screen_rotation")))))));
  }
  get element() { return getElement(this); }
};

export { caixaFormula as yduqs_caixa_formula };
