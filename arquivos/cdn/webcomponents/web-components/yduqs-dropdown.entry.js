import { r as registerInstance, h } from './index-5acc1e77.js';

const Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.icon = false;
  }
  async createOptionsSelect() {
    const selected = document.querySelector(`#${this.identificador} .selected`);
    const optionsContainer = document.querySelector(`#${this.identificador} .options-container`);
    const optionsList = document.querySelectorAll(`#${this.identificador} .option`);
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
      selected.classList.add("styleClick");
      selected.classList.add("styleSelecionado");
    });
    optionsList.forEach(o => {
      o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        selected.classList.remove("styleClick");
      });
    });
  }
  async createOptionsDrop() {
    const selectedDp = document.querySelector(`#${this.identificador} .selected-dp`);
    const optionsContainer = document.querySelector(`#${this.identificador} .options-container`);
    const optionsList = document.querySelectorAll(`#${this.identificador} .option`);
    const optionsOptionGroupFistChild = document.querySelector(`#${this.identificador} .options-container`).firstElementChild;
    var optionFirstChild = optionsOptionGroupFistChild.firstElementChild;
    var teste = optionFirstChild.querySelector('label');
    selectedDp.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
      selectedDp.classList.add("inputPressStyle");
    });
    optionsList.forEach((o) => {
      o.addEventListener("click", () => {
        selectedDp.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        selectedDp.classList.remove("inputPressStyle");
        selectedDp.classList.add("inputFinalStyle");
        optionFirstChild.classList.remove("invisibleFirstChild");
        teste.innerHTML = '<i class="material-icons">check</i> ' + o.querySelector("label").innerHTML;
        o.classList.add("invisibleFirstChild");
        setTimeout(() => {
          o.classList.remove("invisibleFirstChild");
        }, 3000);
        //if(this.withcheck == true)selectedDp.classList.add("iconCheck");
      });
    });
  }
  componentDidRender() {
    if (this.tipo == "select") {
      this.createOptionsSelect();
      /* console.log('é select') */
    }
    else if (this.tipo == "dropdown") {
      this.createOptionsDrop();
      /* console.log('é drop') */
    }
  }
  render() {
    if (this.tipo == 'select') {
      return (h("div", { class: "container-dp" }, h("div", { class: "select-box" }, h("div", { class: "options-container" }, h("slot", { name: "optionsgroup" })), h("div", { class: "selected" }, "Escolha uma op\u00E7\u00E3o"))));
    }
    else if (this.tipo == 'dropdown') {
      return (h("div", { class: "container-dp" }, h("div", { class: "select-box-dp" }, h("div", { class: "options-container" }, h("slot", { name: "optionsgroup" })), h("div", { class: "selected-dp" }, " ", h("span", null, "Item 0 "), " "))));
    }
  }
};

export { Dropdown as yduqs_dropdown };
