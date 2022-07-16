import{r as s,h as t,F as i,a as n}from"./p-3b8a929f.js";const l=class{constructor(t){s(this,t),this.error=[],this.step="loading",this.showInfo=!0,this.showPoints=!1,this.modal=null}handleChangeSelectedIndex(){this.selected=this.items[this.selectedIndex]}handleChangeSelected(){this.buildBgImage(this.selected.image)}handleCloseModal(){this.modal=null}setError(s){const t=[...this.error,s];this.error=t}validateFetchedData(s){s?(s.title||this.setError(t("span",null,"yduqs-show-points needs a ",t("strong",null,"valid `title`"),".")),s.info||this.setError(t("span",null,"yduqs-show-points needs a ",t("strong",null,"valid `info`"),".")),s.items&&s.items.length||this.setError(t("span",null,"yduqs-show-points needs a ",t("strong",null,"valid `items`"),"."))):this.setError(t("span",null,"yduqs-show-points needs a ",t("strong",null,"valid `config response`"),"."))}calculatePointPosition(s,t){var i,n;return{left:100/(null===(i=this.bgDimensions)||void 0===i?void 0:i.width)*s+"%",top:100/(null===(n=this.bgDimensions)||void 0===n?void 0:n.height)*t+"%"}}async buildBgImage(s){var i;if((null===(i=this.error)||void 0===i?void 0:i.length)>0)return;const n=document.createElement("img");n.classList.add("image"),n.src=s,this.imgElem.src=n.src,n.onload=()=>{this.bgDimensions={height:n.naturalHeight,width:n.naturalWidth},this.showPoints=!0},n.onerror=()=>{this.setError(t("span",null,"yduqs-show-points needs a ",t("strong",null,"valid `background url`"),".")),this.step="loading"}}async init(){return await fetch(this.config).then((s=>s.json())).then((s=>{var t;this.validateFetchedData(s),this.title=null==s?void 0:s.title,this.info=null==s?void 0:s.info,this.items=null==s?void 0:s.items,(null==s?void 0:s.background)&&(this.hostElem.style.backgroundImage=`url(${s.background})`),(null===(t=this.error)||void 0===t?void 0:t.length)||(this.step="info",setTimeout((()=>{this.selectedIndex=0}),500))})).catch((s=>{this.setError(t("span",null,"Fetched response is invalid:",null==s?void 0:s.toString()))}))}handleNext(){this.showPoints=!1,this.selectedIndex+=1}handlePrev(){this.showPoints=!1,this.selectedIndex-=1}componentWillLoad(){this._id&&this.config?this.init():(this._id||this.setError(t("span",null,"yduqs-show-points needs a ",t("strong",null,"valid attribute `id`"),".")),this.config||this.setError(t("span",null,"yduqs-show-points needs a ",t("strong",null,"valid attribute `config`"),".")))}handlePointClick(s){this.modal=s.content}handleStartGame(){this.showInfo=!1,this.step="game"}render(){var s,l,e,a;return t(n,{class:`c-lab-game c-show-points step-${this.step}`,ref:s=>this.hostElem=s},"loading"!==this.step?t(i,null,t("header",{class:"c-lab-game-header"}),t("div",{class:"c-lab-game-container"},t("div",{class:"c-lab-game-info "+(this.showInfo?"show":"hide")},t("div",{class:"c-lab-game-info-text",innerHTML:this.info}),"info"===this.step?t("div",{class:"btns"},t("button",{type:"button",class:"c-button u-text--small",onClick:()=>this.handleStartGame()},"Começar")):t("div",{class:"expand-btn"},t("button",{type:"button",class:"c-button c-button__icon-container c-button__icon-small u-text--small p-btn",onClick:()=>this.showInfo=!this.showInfo},t("i",{class:"p-btn c-button__icon material-icons"},this.showInfo?"chevron_left":"chevron_right")))),t("div",{class:"c-lab-game-stage"},t("div",{class:"img"},t("img",{class:"selected-img",ref:s=>this.imgElem=s}),"game"===this.step&&(null===(s=this.selected)||void 0===s?void 0:s.points.map((s=>t("button",{class:"point "+(this.showPoints?"show":"hide"),onClick:()=>this.handlePointClick(s),style:this.calculatePointPosition(s.left,s.top)}))))))),t("footer",{class:"c-lab-game-footer"},t("button",{class:"c-button",onClick:()=>this.handlePrev(),disabled:"game"!==this.step||!Boolean(this.selectedIndex)},"Anterior"),this.selectedIndex+1<(null===(l=this.items)||void 0===l?void 0:l.length)?t("button",{class:"c-button",onClick:()=>this.handleNext(),disabled:"game"!==this.step},"Próxima"):t("button",{class:"c-button",onClick:()=>alert("CONCLUIR"),disabled:"game"!==this.step},"Concluir")),t("yduqs-modal",{_title:null===(e=this.modal)||void 0===e?void 0:e.title,variant:"lab",size:"large",id:`${this._id}-feedback-modal`,isopen:Boolean(this.modal)},t("div",{class:"c-lab-game-modal"},t("div",{class:"content",innerHTML:null===(a=this.modal)||void 0===a?void 0:a.text})))):t("yduqs-lab-error",{errors:this.error}))}static get watchers(){return{selectedIndex:["handleChangeSelectedIndex"],selected:["handleChangeSelected"]}}};export{l as yduqs_show_points}