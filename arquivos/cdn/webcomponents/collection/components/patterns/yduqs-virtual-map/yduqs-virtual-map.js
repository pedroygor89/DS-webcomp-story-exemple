import { Component, Host, h, State, Prop, Fragment, Event, Watch, Method } from '@stencil/core';
const _STEP_ = {
  LOADING: 'loading',
  LOADED: 'loaded',
};
export class YduqsVirtualMap {
  constructor() {
    this.error = [];
    this.step = _STEP_.LOADING;
    this.showLines = true;
  }
  handlePointsPosition() {
    var _a;
    this.items.forEach((item, index) => {
      var _a, _b, _c, _d;
      if (item.left < 0 || item.left > ((_a = this.bgDimensions) === null || _a === void 0 ? void 0 : _a.width) || item.top < 0 || item.top > ((_b = this.bgDimensions) === null || _b === void 0 ? void 0 : _b.height)) {
        this.setError(h("span", null,
          "yduqs-virtual-map error: ",
          h("strong", null,
            "Item number ",
            index + 1,
            " is outside image area"),
          ". It demands left ",
          h("strong", null,
            "0 - ", (_c = this.bgDimensions) === null || _c === void 0 ? void 0 :
            _c.width),
          " and top ",
          h("strong", null,
            "0 - ", (_d = this.bgDimensions) === null || _d === void 0 ? void 0 :
            _d.height),
          " pixels."));
      }
      /*
      if (!item.modules || !Boolean(item.modules.length)) {
        this.setError(
          <span>
            yduqs-virtual-map error: <strong>Item number {index + 1} hasn´t module</strong>.
          </span>
        );
      }
      */
    });
    if (!((_a = this.error) === null || _a === void 0 ? void 0 : _a.length)) {
      this.step = _STEP_.LOADED;
    }
  }
  buildLines() {
    var _a;
    if (this.step === _STEP_.LOADED && this.showLines) {
      (_a = this.items) === null || _a === void 0 ? void 0 : _a.forEach((item, index) => {
        var _a, _b, _c, _d;
        if (index > 0 && this.bgDimensions) {
          const newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          newLine.setAttribute('x1', `${100 / ((_a = this.bgDimensions) === null || _a === void 0 ? void 0 : _a.width) * this.items[index - 1].left}%`);
          newLine.setAttribute('y1', `${100 / ((_b = this.bgDimensions) === null || _b === void 0 ? void 0 : _b.height) * this.items[index - 1].top}%`);
          newLine.setAttribute('x2', `${100 / ((_c = this.bgDimensions) === null || _c === void 0 ? void 0 : _c.width) * item.left}%`);
          newLine.setAttribute('y2', `${100 / ((_d = this.bgDimensions) === null || _d === void 0 ? void 0 : _d.height) * item.top}%`);
          newLine.setAttribute('class', item.active ? 'active' : 'disabled');
          this.linesElem.appendChild(newLine);
        }
      });
    }
  }
  /**
   * Executado sempre que um ponto no mapa é clicado
   * @param point
   */
  handlePointClick(point) {
    this.virtualMapPointClick.emit(point);
  }
  /**
   * Adiciona um item a lista de erros
   * @param error
   */
  setError(error) {
    const err = [...this.error, error];
    this.error = err;
  }
  /**
   * Converte a posição de un Ponto em PX para %
   * @param left
   * @param top
   * @returns {top: number, left: number}
   */
  calculatePointPosition(left, top) {
    var _a, _b;
    return {
      left: `${100 / ((_a = this.bgDimensions) === null || _a === void 0 ? void 0 : _a.width) * left}%`,
      top: `${100 / ((_b = this.bgDimensions) === null || _b === void 0 ? void 0 : _b.height) * top}%`,
    };
  }
  /**
   * Verifica e constroi os elementos necessários para o carregamento do background
   * @param url
   */
  async buildBgImage(url) {
    var _a;
    if (((_a = this.error) === null || _a === void 0 ? void 0 : _a.length) > 0)
      return;
    const bg = document.createElement('img');
    bg.classList.add('image');
    bg.src = url;
    this.bgElem.appendChild(bg);
    bg.onload = () => {
      // Capturando as dimensões originais da imagem de fundo
      this.bgDimensions = {
        height: bg.naturalHeight,
        width: bg.naturalWidth
      };
    };
    bg.onerror = () => {
      this.setError(h("span", null,
        "yduqs-virtual-map needs a ",
        h("strong", null, "valid `background url`"),
        "."));
      this.step = _STEP_.LOADING;
    };
  }
  /**
   * Valida os dados da resposta de configuração
   * @param response
   */
  validateFetchedData(response) {
    if (response) {
      if (!response.background) {
        this.setError(h("span", null,
          "yduqs-virtual-map needs a ",
          h("strong", null, "valid `background url`"),
          "."));
      }
      if (!response.items || !response.items.length) {
        this.setError(h("span", null,
          "yduqs-virtual-map needs a ",
          h("strong", null, "valid `items`"),
          "."));
      }
    }
    else {
      this.setError(h("span", null,
        "yduqs-virtual-map needs a ",
        h("strong", null, "valid `config response`"),
        "."));
    }
  }
  /**
   * Inicia o Mapa
   */
  async init() {
    return await fetch(this.config)
      .then((response) => response.json())
      .then((response) => {
      var _a;
      this.validateFetchedData(response);
      this.items = (_a = response.items) === null || _a === void 0 ? void 0 : _a.map(item => item); // TODO - Remover map se não houver necessidade de alterações no objeto
      if (response.hideLines) {
        this.showLines = false;
      }
      if (response === null || response === void 0 ? void 0 : response.background) {
        this.buildBgImage(response.background);
      }
    })
      .catch(error => {
      this.setError(h("span", null,
        "Fetched response is invalid:", error === null || error === void 0 ? void 0 :
        error.toString()));
    });
  }
  componentWillLoad() {
    if (this._id && this.config) {
      this.init();
    }
    else {
      if (!this._id) {
        this.setError(h("span", null,
          "yduqs-virtual-map needs a ",
          h("strong", null, "valid attribute `id`"),
          "."));
      }
      if (!this.config) {
        this.setError(h("span", null,
          "yduqs-virtual-map needs a ",
          h("strong", null, "valid attribute `config`"),
          "."));
      }
    }
  }
  async centralize() {
    const actualBtn = document.querySelector('.c-virtual-map-item.actual');
    if (actualBtn) {
      this.hostElem.scroll(actualBtn.offsetLeft - this.hostElem.clientWidth / 2, 0);
    }
    return Promise.resolve();
  }
  render() {
    var _a, _b, _c;
    return (h(Host, { class: `c-virtual-map ${((_a = this.bgElem) === null || _a === void 0 ? void 0 : _a.clientWidth) < ((_b = this.hostElem) === null || _b === void 0 ? void 0 : _b.clientWidth) ? 'centered' : ''} ${this.step === _STEP_.LOADING ? 'loading' : ''}`, ref: ref => (this.hostElem = ref) },
      h("div", { class: "c-virtual-map-bg", ref: ref => (this.bgElem = ref) },
        h("svg", { class: "lines", ref: ref => (this.linesElem = ref) }),
        this.step !== _STEP_.LOADING ? (h(Fragment, null,
          this.buildLines(), (_c = this.items) === null || _c === void 0 ? void 0 :
          _c.map((point, index) => (h(Fragment, null,
            h("button", { class: `c-virtual-map-item ${index + 1 === this.selected ? 'actual' : ''}`, style: this.calculatePointPosition(point.left, point.top), onClick: () => this.handlePointClick(point) }, index + 1)))))) : (h("yduqs-lab-error", { errors: this.error })))));
  }
  static get is() { return "yduqs-virtual-map"; }
  static get properties() { return {
    "_id": {
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
        "text": "Identificador do Mapa"
      },
      "attribute": "id",
      "reflect": false
    },
    "config": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Endere\u00E7o do arquivo de configura\u00E7\u00E3o"
      },
      "attribute": "config",
      "reflect": false
    },
    "selected": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "N\u00FAmero do item que ser\u00E1 marcado como ponto atual."
      },
      "attribute": "selected",
      "reflect": false
    }
  }; }
  static get states() { return {
    "error": {},
    "step": {},
    "background": {},
    "items": {},
    "bgDimensions": {},
    "showLines": {}
  }; }
  static get events() { return [{
      "method": "virtualMapPointClick",
      "name": "virtualMapPointClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento disparado no clique de cada ponto"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "centralize": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLElement": {
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
  static get watchers() { return [{
      "propName": "bgDimensions",
      "methodName": "handlePointsPosition"
    }, {
      "propName": "step",
      "methodName": "buildLines"
    }]; }
}
