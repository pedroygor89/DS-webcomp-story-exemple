import{r as t,h as s,a as e,g as a}from"./p-321628b3.js";let c=class{constructor(s){t(this,s),this.title_formula="",this.formula=""}calcula_space(t){setTimeout((function(){var s=0,e=t.querySelector(".c-caixa-formula mjx-container mjx-math");console.log("CAIXA DE FORMULA");var a=document.querySelector("body").getBoundingClientRect().width;console.log(a),e.querySelectorAll(":scope > *").forEach((t=>{console.log(t),s+=t.getBoundingClientRect().width,a-200<s&&(s=0,t.insertAdjacentHTML("MJX-MO"==e.tagName?"afterend":"beforebegin","<p/><p/>"))}))}),3e3)}componentDidLoad(){this.calcula_space(this.element)}render(){return s(e,null,s("div",{class:"c-caixa-formula"},s("div",{class:""+(this.dark?"dark":this.outlined?"outline":"light")},s("div",{class:"d-flex align-items-center justify-content-center"},s("yduqs-tag",{color:"${colorType}"},this.title_formula)),s("yduqs-card",{dark:this.dark,outlined:this.outlined,class:"c-table"},s("p",null,this.formula),s("div",{class:"d-flex align-items-center justify-content-center"},s("slot",null))),s("div",{class:"c-legenda mt-2 pb-2"},s("p",{class:"c-paragraph u-text"},"Legenda da Caixa de fórmula.")))),s("script",{id:"MathJax-script",async:!0,src:"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"}))}get element(){return a(this)}};export{c as yduqs_caixa_formula}