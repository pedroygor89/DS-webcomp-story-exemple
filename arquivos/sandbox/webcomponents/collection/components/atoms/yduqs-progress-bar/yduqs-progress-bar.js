import { h, Host, Component, Event, Prop, State, Method, Element, Watch } from '@stencil/core';
export class YduqsProgressBar {
  constructor() {
    this.max = 100;
    this.min = 0;
    this._isValueVisible = false;
    this.displayValue = false;
  }
  watchValue(val, oldValue) {
    this.onChange.emit({ val, oldValue });
  }
  componentWillLoad() {
    this._isValueVisible = this.displayValue;
    this._infoEl = document.createElement('span');
    this.el.parentElement.insertBefore(this._infoEl, this.el);
    // Envia o valor da barra ao carregar o componente em tempo de criacao
    const val = this.value;
    this.onChange.emit({ val });
  }
  async show() {
    this._isValueVisible = true;
  }
  async hide() {
    this._isValueVisible = false;
  }
  onHoverBarHandler() {
    this._isValueVisible ? this.hide() : this.show();
    this.onHoverBar.emit(this._isValueVisible);
  }
  showInfo(valPercentage) {
    this._infoEl.innerHTML = `${Math.round(valPercentage)}%`;
    this._infoEl.className = 'c-progress__info u-fade-in';
    const boxSize = Math.round(this._infoEl.offsetWidth);
    const barEl = this.el.children[0];
    let containerWidth = barEl ? Math.round(barEl.offsetWidth) : 0;
    let boxPosX = 0;
    if (containerWidth >= 0 && valPercentage < 100) {
      boxPosX = containerWidth - boxSize * 0.5;
    }
    else {
      boxPosX = containerWidth - boxSize;
    }
    this._infoEl.style.setProperty('left', `${Math.round(boxPosX)}px`);
  }
  hideInfo() {
    this._infoEl.className = 'c-progress__info u-fade-out';
  }
  async isValueVisible() {
    return this._isValueVisible;
  }
  render() {
    const semiroundedClass = this.semirounded ? `c-progress--semirounded` : '';
    const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
    // Atualiza os valores da barra de progresso
    this.el.style.setProperty('--current-value', this.value.toString());
    this.el.style.setProperty('--max-value', this.max.toString());
    if (this._isValueVisible) {
      this.showInfo(percentage);
    }
    else {
      this.hideInfo();
    }
    return (h(Host, { class: `c-progress ${semiroundedClass}` },
      h("div", { onMouseOver: () => this.onHoverBarHandler(), class: "c-progress__bar" }),
      h("div", { class: "c-progress__bar--remainder" })));
  }
  static get is() { return "yduqs-progress-bar"; }
  static get properties() { return {
    "value": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": false
    },
    "max": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "max",
      "reflect": false,
      "defaultValue": "100"
    },
    "min": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "min",
      "reflect": false,
      "defaultValue": "0"
    },
    "semirounded": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "semirounded",
      "reflect": false
    },
    "displayValue": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "display-value",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "_isValueVisible": {}
  }; }
  static get events() { return [{
      "method": "onHoverBar",
      "name": "hoverbar",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "onChange",
      "name": "changebar",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "show": {
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
    "hide": {
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
    "isValueVisible": {
      "complexType": {
        "signature": "() => Promise<boolean>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<boolean>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "watchValue"
    }]; }
}
