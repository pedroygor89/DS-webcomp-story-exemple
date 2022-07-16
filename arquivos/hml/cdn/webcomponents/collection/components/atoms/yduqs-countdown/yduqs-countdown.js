import { Component, Host, h, Prop, Method, State, Event } from '@stencil/core';
export class YduqsCountdown {
  constructor() {
    /**
     * Marcador da contagem de Alerta, em porcentagem;
     */
    this.warningMarker = 20;
    this.dangerMarker = this.warningMarker / 2;
    this.number = this.time;
    this.paused = false;
  }
  /**
   * Inicia a contagem
   * @returns Promise.resolve
   */
  async start() {
    this.paused = false;
    if (!this.interval) {
      this.interval = window.setInterval(() => {
        if (!this.paused) {
          this.number -= 1;
          if (this.inDanger()) {
            this.countdownDanger.emit(this._id);
          }
          else if (this.inWarning()) {
            this.countdownWarning.emit(this._id);
          }
        }
        if (this.number <= 0 && !this.paused) {
          this.pause();
          this.countdownFinished.emit(this._id);
        }
      }, 1000);
    }
    return Promise.resolve(true);
  }
  /**
   * Para o contador resetando a contagem
   * @returns Promise.resolve
   */
  async stop() {
    window.clearInterval(this.interval);
    this.interval = null;
    this.number = this.time;
    return Promise.resolve();
  }
  /**
   * Pausa o contador, sem resetar a contagem
   * @returns Promise.resolve
   */
  async pause() {
    this.paused = true;
    return Promise.resolve();
  }
  /**
   * Reinicia a contagem
   * @returns Promise.resolve
   */
  async restart() {
    await this.stop();
    await this.start();
    return Promise.resolve();
  }
  inWarning() {
    return this.number < this.time * (this.warningMarker / 100);
  }
  inDanger() {
    return this.number < this.time * (this.dangerMarker / 100);
  }
  componentWillLoad() {
    if (!this._id) {
      console.error('yduqs-countdown: Atributo `id` é obrigatório');
    }
    if (!this.time) {
      console.error('yduqs-countdown: Atributo `time` é obrigatório');
    }
    this.number = this.time;
  }
  render() {
    const min = Math.trunc(this.number / 60);
    const seg = this.number % 60;
    const css = !this.paused ? (this.inDanger() ? 'danger' : this.inWarning() ? 'warning' : '') : '';
    return (h(Host, { id: this._id, class: `c-countdown ${css}` },
      h("i", { class: "material-icons icon" }, "alarm"),
      h("span", { class: "number" },
        min < 10 ? `0${min}` : min,
        ":",
        seg < 10 ? `0${seg}` : seg)));
  }
  static get is() { return "yduqs-countdown"; }
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
        "text": "Identificador do Componente"
      },
      "attribute": "id",
      "reflect": false
    },
    "time": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Quantidade de tempo para a contagem em segundos."
      },
      "attribute": "time",
      "reflect": false
    },
    "warningMarker": {
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
        "text": "Marcador da contagem de Alerta, em porcentagem;"
      },
      "attribute": "warning-marker",
      "reflect": false,
      "defaultValue": "20"
    }
  }; }
  static get states() { return {
    "dangerMarker": {},
    "number": {},
    "interval": {},
    "paused": {}
  }; }
  static get events() { return [{
      "method": "countdownFinished",
      "name": "countdownFinished",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento disparado quando o contador termina"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "countdownDanger",
      "name": "countdownDanger",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento disparado quando a contagem entra no estado de Perigo"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "countdownWarning",
      "name": "countdownWarning",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Evento disparado quando a contagem entra no estado de Alerta"
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "start": {
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
        "text": "Inicia a contagem",
        "tags": [{
            "name": "returns",
            "text": "Promise.resolve"
          }]
      }
    },
    "stop": {
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
        "text": "Para o contador resetando a contagem",
        "tags": [{
            "name": "returns",
            "text": "Promise.resolve"
          }]
      }
    },
    "pause": {
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
        "text": "Pausa o contador, sem resetar a contagem",
        "tags": [{
            "name": "returns",
            "text": "Promise.resolve"
          }]
      }
    },
    "restart": {
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
        "text": "Reinicia a contagem",
        "tags": [{
            "name": "returns",
            "text": "Promise.resolve"
          }]
      }
    }
  }; }
}
