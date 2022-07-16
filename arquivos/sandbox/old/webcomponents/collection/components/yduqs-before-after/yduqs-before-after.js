import { Component, h, Host, Listen, Prop, State } from '@stencil/core';
import { calculateXfromEvent } from '../../utils/calculate-x-from-event';
export class YduqsBeforeAfter {
  constructor() {
    this._barPosision = 0;
    this._isDraggingValue = false;
    this._xValue = 0;
    this._isFirstRender = true;
    this.elementWidth = 0;
  }
  get isDragging() {
    return this._isDraggingValue;
  }
  set isDragging(value) {
    this._isDraggingValue = value;
  }
  get x() {
    return this._xValue;
  }
  set x(value) {
    this._xValue = value;
  }
  componentDidRender() {
    const dratEl = document.getElementById('drag');
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    dratEl.addEventListener('dragstart', function (e) {
      e.dataTransfer.setDragImage(img, 0, 0);
    });
    this.elementWidth = this.divElement.getBoundingClientRect().width;
    if (this._isFirstRender) {
      this._barPosision = this.elementWidth / 2;
      this._isFirstRender = false;
    }
  }
  calculateMaxBarRight() {
    return this.elementWidth - 24;
  }
  changeBar(e) {
    if (e.layerX > 48 && e.layerX < this.calculateMaxBarRight()) {
      this._barPosision = e.layerX;
    }
  }
  dragStart() {
    this.isDragging = true;
  }
  onDrag(event) {
    if (!this.isDragging) {
      return;
    }
    let barPosision = calculateXfromEvent(event, this.divElement);
    if (barPosision > 24 && barPosision < this.calculateMaxBarRight()) {
      this._barPosision = barPosision;
    }
  }
  dragEnd() {
    this.isDragging = false;
  }
  onResize(event) {
    event.stopPropagation();
    this.elementWidth = this.divElement.getBoundingClientRect().width;
    this._barPosision = this.elementWidth / 2;
  }
  render() {
    const dragControlClass = this.isDragging ? 'c-before-after__drag-control--active' : '';
    return (h(Host, null,
      h("div", { class: "c-before-after", ref: (el) => this.divElement = el, onClick: this.changeBar.bind(this) },
        h("div", { id: "before", style: { 'width': `${this._barPosision}px` }, title: this.before_img_title },
          h("slot", { name: "before" },
            h("img", { src: this.before_img, alt: this.before_img_alt, title: this.before_img_title, class: "c-before-after__image c-before-after__image-default" }))),
        h("div", { id: "after", title: this.after_img_title },
          h("slot", { name: "after" },
            h("img", { src: this.after_img, alt: this.after_img_alt, title: this.after_img_title, class: "c-before-after__image c-before-after__image-compare" }))),
        h("div", { id: "drag", class: `${dragControlClass}`, ref: (el) => this.draggbleElement = el, draggable: true, onTouchStart: this.dragStart.bind(this), onDragStart: this.dragStart.bind(this), onDrag: this.onDrag.bind(this), onTouchMove: this.onDrag.bind(this), onDragEnd: this.dragEnd.bind(this), onTouchEnd: this.dragEnd.bind(this), style: { 'left': `${this._barPosision}px` } },
          h("svg", { width: "52", height: "52", viewBox: "0 0 52 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: 'c-before-after__drag-icon' },
            h("rect", { x: "1", y: "1", width: "50", height: "50", rx: "25", fill: "#007E9E", class: "c-before-after__drag-icon-rect" }),
            h("path", { d: "M21.013 21.2003C21.013 20.3659 20.0513 19.8985 19.3952 20.414L13.2865 25.2137C12.777 25.6141 12.777 26.3859 13.2865 26.7863L19.3952 31.586C20.0513 32.1015 21.013 31.6341 21.013 30.7997V21.2003ZM32.6049 20.414C31.9488 19.8985 30.9871 20.3659 30.9871 21.2003L30.9871 30.7997C30.9871 31.6341 31.9488 32.1015 32.6049 31.586L38.7136 26.7863C39.2231 26.3859 39.2231 25.6141 38.7136 25.2137L32.6049 20.414Z", fill: "white" }),
            h("rect", { x: "1", y: "1", width: "50", height: "50", rx: "25", stroke: "white", "stroke-width": "2" })))),
      h("p", { class: "c-before-after__caption u-text--small" }, this.caption)));
  }
  static get is() { return "yduqs-before-after"; }
  static get properties() { return {
    "before_img": {
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
      "attribute": "before_img",
      "reflect": false
    },
    "before_img_alt": {
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
      "attribute": "before_img_alt",
      "reflect": false
    },
    "before_img_title": {
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
      "attribute": "before_img_title",
      "reflect": false
    },
    "after_img": {
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
      "attribute": "after_img",
      "reflect": false
    },
    "after_img_alt": {
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
      "attribute": "after_img_alt",
      "reflect": false
    },
    "after_img_title": {
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
      "attribute": "after_img_title",
      "reflect": false
    },
    "caption": {
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
      "attribute": "caption",
      "reflect": false
    }
  }; }
  static get states() { return {
    "_barPosision": {},
    "_isDraggingValue": {}
  }; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
