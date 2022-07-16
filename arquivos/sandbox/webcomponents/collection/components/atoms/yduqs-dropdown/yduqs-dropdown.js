import { h, Component, Prop, State, Method } from '@stencil/core';
export class Dropdown {
  constructor() {
    this.icon = false;
  }
  async createOptionsSelect() {
    const selected = document.querySelector(`#${this.identificador} .selected`);
    const optionsContainer = document.querySelector(`#${this.identificador} .options-container`);
    const optionsList = document.querySelectorAll(`#${this.identificador} .option`);
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });
    optionsList.forEach(o => {
      o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        selected.classList.add("selecionado");
        optionsContainer.classList.remove("active");
      });
    });
  }
  async createOptionsDrop() {
    const selected = document.querySelector(`#${this.identificador} .selected`);
    const optionsContainer = document.querySelector(`#${this.identificador} .options-container`);
    const optionsList = document.querySelectorAll(`#${this.identificador} .option`);
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
      selected.classList.remove("iconCheck");
    });
    optionsList.forEach(o => {
      o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        selected.classList.add("iconCheck");
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
      return (h("div", { class: "container-dp" },
        h("div", { class: "select-box" },
          h("div", { class: "options-container" },
            h("slot", { name: "optionsgroup" })),
          h("div", { class: "selected" }, "Escolha uma op\u00E7\u00E3o"))));
    }
    else if (this.tipo == 'dropdown') {
      return (h("div", { class: "container-dp" },
        h("div", { class: "select-box" },
          h("div", { class: "options-container" },
            h("slot", { name: "optionsgroup" })),
          h("div", { class: "selected" }, "Escolha uma op\u00E7\u00E3o"))));
    }
  }
  static get is() { return "yduqs-dropdown"; }
  static get properties() { return {
    "colunas": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "colunas",
      "reflect": false
    },
    "identificador": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "identificador",
      "reflect": false
    },
    "tipo": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "tipo",
      "reflect": false
    }
  }; }
  static get states() { return {
    "icon": {}
  }; }
  static get methods() { return {
    "createOptionsSelect": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    },
    "createOptionsDrop": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
}
