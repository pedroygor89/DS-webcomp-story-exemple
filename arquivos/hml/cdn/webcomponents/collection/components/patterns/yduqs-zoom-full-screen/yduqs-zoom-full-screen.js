import { Component, Host, h, Prop, State, Listen, Watch } from '@stencil/core';
export class YduqsImageFullScreen {
  constructor() {
    this.max = 20;
    this.min = 0;
    this.step = 1;
    this.val = 0;
    // Global vars to cache event state
    this.evCache = new Array();
    this.prevDiff = -1;
    this.mouseScrollEventName = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    this.lastX = 0;
    this.lastY = 0;
    this.refX = 0;
    this.refY = 0;
  }
  handleClick(event) {
    const { className } = event.target;
    const list = className.split(' ');
    if (list.includes('p-img') || list.includes('p-btn')) {
      this.fullScreen = !this.fullScreen;
    }
  }
  reset() {
    if (this.fullScreen) {
      this.initialWidth = this.img.clientWidth;
    }
    this.rangeOutput(0);
    this.setImgMargins({ left: 0, top: 0 });
  }
  /**
   * Seta o valor da Larura da imagem
   * @param value
   */
  setImgWidth(value) {
    this.img.style.width = `calc(${this.initialWidth}px + ${value * 10}%)`;
  }
  /**
   * informa se um valor é negativo
   * @param value
   * @returns true | false
   */
  isNegative(value) {
    return value < 0;
  }
  /**
   * Seta a margem máxima de arraste da imagem para não sair do viewScreen
   * @param options
   *   @property top
   *   @property left
   */
  setImgMargins(options) {
    const imgH = this.img.clientHeight;
    const imgW = this.img.clientWidth;
    const conH = this.container.clientHeight;
    const conW = this.container.clientWidth;
    const maxLeftMargin = imgW <= conW ? 0 : (imgW - conW) / 2;
    const maxTopMargin = imgH <= conH ? 0 : (imgH - conH) / 2;
    let left;
    if (this.isNegative(options.left)) {
      left = options.left < -maxLeftMargin ? -maxLeftMargin : options.left;
    }
    else {
      left = options.left > maxLeftMargin ? maxLeftMargin : options.left;
    }
    let top;
    if (this.isNegative(options.top)) {
      top = options.top < -maxTopMargin ? -maxTopMargin : options.top;
    }
    else {
      top = options.top > maxTopMargin ? maxTopMargin : options.top;
    }
    this.lastX = left;
    this.lastY = top;
    this.img.style.marginLeft = `${left}px`;
    this.img.style.marginTop = `${top}px`;
  }
  /**
   * Verifica o valor inserido, e seta width e margens da imagem
   * @param value
   */
  rangeOutput(value) {
    this.val = value > this.max ? this.max : value < this.min ? this.min : value;
    this.setImgWidth(this.val);
    this.setImgMargins({ left: this.lastX, top: this.lastY });
  }
  /**
   * Cria um cache dos eventos para suportar interação com 2 pontos de toque
   * @param ev
   */
  handlePointerDown(ev) {
    this.evCache.push(ev);
  }
  /**
   * Atualiza o evento do Cache
   * @param ev
   */
  handlePointerMove(ev) {
    for (var i = 0; i < this.evCache.length; i++) {
      if (ev.pointerId == this.evCache[i].pointerId) {
        this.evCache[i] = ev;
        break;
      }
    }
    if (this.evCache.length == 2) {
      var curDiff = Math.abs(this.evCache[0].clientX - this.evCache[1].clientX);
      if (this.prevDiff > 0) {
        if (curDiff > this.prevDiff) {
          this.rangeOutput(this.val + this.step);
        }
        if (curDiff < this.prevDiff) {
          this.rangeOutput(this.val - this.step);
        }
      }
      this.prevDiff = curDiff;
    }
  }
  /**
   * Processo de saida dos toques
   * @param ev
   */
  handlePointerUp(ev) {
    this.removeEvent(ev);
    if (this.evCache.length < 2)
      this.prevDiff = -1;
  }
  /**
   * Remove um evento do Cache
   * @param ev
   */
  removeEvent(ev) {
    for (var i = 0; i < this.evCache.length; i++) {
      if (this.evCache[i].pointerId == ev.pointerId) {
        this.evCache.splice(i, 1);
        break;
      }
    }
  }
  /**
   * Previne o funcionamento padrão de toque quando houver mais de 1 toque simultâneo
   * @param e Evento de Toque
   */
  handleTouchStart(e) {
    var _a;
    if (((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a.length) === 2) {
      e.preventDefault();
    }
  }
  /**
   * Verifica se a direção do Scroll foi Vertical
   * @param e Evento de mudança no scroll do mouse
   * @returns
   */
  scrollDirectionIsUpDown(e) {
    return (e.deltaY || e.wheelDeltaY) !== 0;
  }
  /**
   * Normaliza os valores do scroll do mouse em diferentes navegadores
   * @param e Evento de mudança no scroll do mouse
   * @returns
   */
  normalizeScrollData(e) {
    var normalized;
    if (e.wheelDelta) {
      normalized = (e.wheelDelta % 120) - 0 == -0 ? e.wheelDelta / 120 : e.wheelDelta / 12;
    }
    else {
      var rawAmmount = e.deltaY ? e.deltaY : e.detail;
      normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
    }
    return normalized;
  }
  /**
   *
   * @param e Evento de mudança no scroll do mouse
   */
  handleMouseScroll(e) {
    if (!this.fullScreen || !this.scrollDirectionIsUpDown(e))
      return;
    e.preventDefault();
    if (this.normalizeScrollData(e) > 0) {
      this.rangeOutput(this.val + this.step);
    }
    else {
      this.rangeOutput(this.val - this.step);
    }
  }
  /**
   * Inicia o Arrastar de um elemento
   * @param e
   */
  handleDragStart(e) {
    this.dragXStart = e.screenX;
    this.dragYStart = e.screenY;
  }
  /**
   * Chamado em Loop quando o Arrastar esta sobre um elemento
   * @param e
   */
  handleDragOver(e) {
    this.setImgMargins({
      top: this.lastY + (e.screenY - this.dragYStart) * 0.07,
      left: this.lastX + (e.screenX - this.dragXStart) * 0.07,
    });
  }
  /**
   * Finalização do movimento de Arrastar
   * @param e
   */
  handleDragEnd(e) {
    this.lastX = this.lastX + (e.screenX - this.dragXStart);
    this.lastY = this.lastY + (e.screenY - this.dragYStart);
  }
  /**
   * Inicia o movimento de arratar em telas de toque
   * @param e
   */
  handleTouchDragStart(e) {
    var _a;
    if (((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a.length) === 1) {
      const touch = e.targetTouches[0];
      this.dragXStart = touch === null || touch === void 0 ? void 0 : touch.screenX;
      this.dragYStart = touch === null || touch === void 0 ? void 0 : touch.screenY;
    }
  }
  /**
   * Chamado em Loop enquanto o elemento é arrastado
   * @param e
   */
  handleTouchDragMove(e) {
    var _a;
    if (((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a.length) === 1) {
      const touch = e.targetTouches[0];
      const nX = (touch.screenX - this.dragXStart) * 0.1;
      const nY = (touch.screenY - this.dragYStart) * 0.1;
      this.setImgMargins({
        left: this.lastX + (nX != this.refX ? nX : 0),
        top: this.lastY + (nY != this.refY ? nY : 0),
      });
      this.refX = nX != this.refX ? nX : this.refX;
      this.refY = nY != this.refY ? nY : this.refY;
    }
  }
  /**
   * Finaliza o movimento de arrastar
   * @param e
   */
  handleTouchDragEnd(e) {
    var _a;
    if (((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a.length) === 1) {
      const touch = e.targetTouches[0];
      this.lastX = this.lastX + (touch.screenX - this.dragXStart);
      this.lastY = this.lastY + (touch.screenY - this.dragYStart);
    }
  }
  componentDidLoad() {
    this.img.onpointerdown = ev => this.handlePointerDown(ev);
    this.img.onpointermove = ev => this.handlePointerMove(ev);
    this.img.onpointerup = ev => this.handlePointerUp(ev);
    this.img.onpointercancel = ev => this.handlePointerUp(ev);
    this.img.onpointerout = ev => this.handlePointerUp(ev);
    this.img.onpointerleave = ev => this.handlePointerUp(ev);
    this.img.addEventListener('touchstart', e => this.handleTouchStart(e), { passive: false });
    this.img.addEventListener(this.mouseScrollEventName, e => this.handleMouseScroll(e));
  }
  render() {
    return (h(Host, { class: "c-image-full-screen" },
      h("div", { class: `p-${this.fullScreen ? 'full-screen' : 'preview'}`, ref: r => (this.container = r) },
        h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small p-btn p-open-in-full" },
          h("span", { class: "p-btn c-button__icon material-icons" }, this.fullScreen ? 'close' : 'open_in_full')),
        h("img", { draggable: true, onTouchStart: e => this.handleTouchDragStart(e), onTouchMove: e => this.handleTouchDragMove(e), onTouchEnd: e => this.handleTouchDragEnd(e), onDragStart: e => this.handleDragStart(e), onDragOver: e => this.handleDragOver(e), onDragEnd: e => this.handleDragEnd(e), class: "p-img", src: this.src, alt: this.alt, ref: r => (this.img = r) }),
        this.fullScreen && (h("div", { class: "p-range-container" },
          h("yduqs-range", { max: this.max, min: this.min, step: this.step, value: this.val, output: (value) => this.rangeOutput(value) }))))));
  }
  static get is() { return "yduqs-zoom-full-screen"; }
  static get properties() { return {
    "src": {
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
      "attribute": "src",
      "reflect": false
    },
    "alt": {
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
      "attribute": "alt",
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
      "defaultValue": "20"
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
    "step": {
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
      "attribute": "step",
      "reflect": false,
      "defaultValue": "1"
    }
  }; }
  static get states() { return {
    "fullScreen": {},
    "val": {},
    "evCache": {},
    "prevDiff": {}
  }; }
  static get watchers() { return [{
      "propName": "fullScreen",
      "methodName": "reset"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "handleClick",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
