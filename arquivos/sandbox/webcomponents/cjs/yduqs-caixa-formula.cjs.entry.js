'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e1c72ca8.js');

let audioCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.title_formula = '';
    this.formula = '';
  }
  calcula_space(el) {
    setTimeout(function () {
      var total = 0;
      var current_formula = el.querySelector('.c-caixa-formula mjx-container mjx-math');
      console.log('CAIXA DE FORMULA');
      var caixa_width = document.querySelector('body').getBoundingClientRect().width;
      console.log(caixa_width);
      current_formula.querySelectorAll(":scope > *").forEach(item => {
        console.log(item);
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
  }
  componentWillLoad() {
    let headHtml = document.querySelector('head');
    let assetsMath = document.getElementById('mathjax-assets');
    let wcMath = document.getElementById('mathjax-webcomponents');
    let yqMath = document.getElementById('mathjax-assets-questions');
    if (assetsMath === null && wcMath === null && yqMath === null) {
      const scriptTag = document.createElement('script');
      scriptTag.type = "text/javascript";
      scriptTag.id = "mathjax-webcomponents";
      if (document.body.classList.contains('template_recursos')) {
        scriptTag.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
      }
      else {
        scriptTag.src = "../assets/js/mathjax/es5/tex-chtml-full.js";
      }
      scriptTag.async = true;
      headHtml.appendChild(scriptTag);
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
        reloadMath.src = "../assets/js/yduqs_mathjax_reload.js";
      }
      reloadMath.defer = true;
      bodyHtml.appendChild(reloadMath);
      setTimeout(function () {
        reloadMath.remove();
      }, 2000);
    }
  }
  render() {
    const background_caixa_formula = this.dark ? 'dark' : this.outlined ? 'outline' : 'light';
    return (index.h(index.Host, null, index.h("div", { class: 'c-caixa-formula' }, index.h("div", { class: `${background_caixa_formula}` }, index.h("div", { class: "d-flex align-items-center justify-content-center" }, index.h("yduqs-tag", { color: "${colorType}" }, this.title_formula)), index.h("yduqs-card", { dark: this.dark, outlined: this.outlined, class: "c-table" }, index.h("p", null, this.formula), index.h("div", { class: "d-flex align-items-center justify-content-center" }, index.h("slot", null)))))));
  }
  get element() { return index.getElement(this); }
};

exports.yduqs_caixa_formula = audioCard;
