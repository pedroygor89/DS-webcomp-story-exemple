'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const caixaFormula = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
              else if (item.tagName == 'MJX-MTABLE') {
                let innerTotal = 0;
                let mtableItems = item.querySelectorAll('mjx-table mjx-itable mjx-mtr mjx-mtd');
                let caixa_inner_width = el.getBoundingClientRect().width;
                item.style.minWidth = 'auto';
                mtableItems.forEach(mtableItem => {
                  let getScope = mtableItem.querySelectorAll(':scope > *');
                  if (getScope.length > 0) {
                    getScope.forEach(innerItem => {
                      innerTotal = innerTotal + innerItem.getBoundingClientRect().width;
                      if (caixa_inner_width < innerTotal) {
                        innerTotal = 0;
                        if (item.tagName == 'MJX-MO') {
                          innerItem.insertAdjacentHTML('afterend', '<p/>');
                        }
                        else {
                          innerItem.insertAdjacentHTML('beforebegin', '<p/>');
                        }
                      }
                    });
                  }
                });
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
              else if (item.tagName == 'MJX-MTABLE') {
                let innerTotal = 0;
                let mtableItems = item.querySelectorAll('mjx-table mjx-itable mjx-mtr mjx-mtd');
                let caixa_inner_width = el.getBoundingClientRect().width;
                item.style.minWidth = 'auto';
                mtableItems.forEach(mtableItem => {
                  let getScope = mtableItem.querySelectorAll(':scope > *');
                  if (getScope.length > 0) {
                    getScope.forEach(innerItem => {
                      innerTotal = innerTotal + innerItem.getBoundingClientRect().width;
                      if (caixa_inner_width < innerTotal) {
                        innerTotal = 0;
                        if (item.tagName == 'MJX-MO') {
                          innerItem.insertAdjacentHTML('afterend', '<p class="innerbreakformend"/>');
                        }
                        else {
                          innerItem.insertAdjacentHTML('beforebegin', '<p class="innerbreakformbegin"/>');
                        }
                      }
                    });
                  }
                });
              }
              else {
                item.insertAdjacentHTML('beforebegin', '<p/><p/>');
              }
            }
            else {
              total = 0;
              if (item.tagName == 'MJX-MTABLE') {
                let mtableItems = item.querySelectorAll('mjx-table mjx-itable mjx-mtr mjx-mtd');
                item.style.minWidth = 'auto';
                mtableItems.forEach(mtableItem => {
                  let getScope = mtableItem.querySelectorAll(':scope > *');
                  if (getScope.length > 0) {
                    getScope.forEach(i => {
                      if (i.tagName == 'P') {
                        i.parentNode.removeChild(i);
                      }
                    });
                  }
                });
              }
              else {
                let getScope = item.querySelectorAll(':scope > *');
                if (getScope.length > 0) {
                  getScope.forEach(i => {
                    if (i.tagName == 'P') {
                      i.parentNode.removeChild(i);
                    }
                  });
                }
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
  }
  componentDidRender() {
    var _a;
    let el = this.element;
    let elForm = el.querySelector('.c-paragraph').innerHTML.includes('$$');
    let MathJax = (_a = window) === null || _a === void 0 ? void 0 : _a.MathJax;
    if (elForm) {
      const mathTimer = setInterval(waitForMath, 250);
      function waitForMath(el) {
        try {
          MathJax.typeset(el);
          clearInterval(mathTimer);
        }
        catch (e) {
        }
      }
    }
  }
  render() {
    const background_caixa_formula = this.dark ? 'dark' : this.outlined ? 'outline' : 'light';
    this.outlined = false;
    const equalHeight = this.equal_height ? 'h-100' : '';
    return (index.h(index.Host, { class: equalHeight }, index.h("div", { class: `c-caixa-formula ` + equalHeight }, index.h("div", { class: `${background_caixa_formula} ${equalHeight}` }, index.h("div", { class: "d-flex align-items-center justify-content-center" }, index.h("yduqs-tag", { color: this.dark ? 'aaaaa' : '', innerHTML: this.title_formula })), index.h("yduqs-card", { dark: this.dark, outlined: this.outlined, class: `c-table ${equalHeight}` }, index.h("p", { innerHTML: this.formula, class: "c-paragraph" }), index.h("div", { class: "d-flex align-items-center justify-content-center" }, index.h("slot", null)), index.h("div", { class: "legend-rotate" }, index.h("span", null, "Rotacione a tela. "), index.h("span", { class: "material-icons" }, "screen_rotation")))))));
  }
  get element() { return index.getElement(this); }
};

exports.yduqs_caixa_formula = caixaFormula;
