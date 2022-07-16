import { Component, h, Prop, Element, Method, State, Listen, Event } from '@stencil/core';
import hammer from 'hammerjs';
export class YduqsCarousel {
  constructor() {
    this.space = 24;
    this.english = false;
    this.spanish = false;
    this.children = [];
    this.currentItem = 0;
    this.currentPage = 0;
    this.hasNext = false;
    this.hasPrev = false;
    this.isMobile = false;
    this.allItems = 0;
  }
  onResize(event) {
    event.stopPropagation();
    this.animate(false);
    this._isMobile(event.target);
  }
  _isMobile(windowObj) {
    const wWidth = windowObj.innerWidth;
    this.isMobile = (wWidth < 576);
  }
  changeSlide(next = true) {
    if (next) {
      this.currentItem++;
      this.onUpdatePage.emit(this.currentPage++);
    }
    else {
      this.currentItem--;
      this.onUpdatePage.emit(this.currentPage--);
    }
  }
  async next() {
    this.hasNext = ((this.currentItem + 1) < this.allItems);
    if (this.hasNext) {
      this.changeSlide();
      if (this.currentPage === this.allItems) {
        this.hasNext = false;
      }
      this.hasPrev = true;
      this.onPrevSlide.emit(this.hasPrev);
      this.animate(true);
    }
    this.onNextSlide.emit(this.hasNext);
  }
  async prev() {
    this.hasPrev = (this.currentItem - 1) >= 0;
    if (this.hasPrev) {
      this.changeSlide(false);
      if (this.currentPage === 1) {
        this.hasPrev = false;
      }
      this.hasNext = true;
      this.onNextSlide.emit(this.hasNext);
      this.animate(true);
    }
    this.onPrevSlide.emit(this.hasPrev);
  }
  animate(animate = true) {
    if (animate) {
      this.content.style.transition = "all 0.4s ease-in";
    }
    if (!animate) {
      this.content.style.removeProperty("transition");
    }
    const width = parseFloat(`${Math.ceil(this.content.getBoundingClientRect().width + this.space)}`).toFixed(2);
    this.content.style.transform = `translateX(${this.currentItem * parseInt(width) * -1}px)`;
  }
  componentWillLoad() {
    this.currentPage = this.currentItem + 1;
    this._isMobile(window);
    const htmlTagCarousel = document.querySelector('html');
    const htmlLanguageCarousel = htmlTagCarousel.getAttribute('lang');
    if (htmlLanguageCarousel === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageCarousel === 'es') {
      this.spanish = true;
    }
  }
  componentDidLoad() {
    const items = this.el.querySelector('.carousel__content');
    this.children = Object.assign([], items.children);
    this.allItems = this.children ? this.children.length : 0;
    if (!items) {
      return;
    }
    this.hasNext = this.allItems > 1;
    if (items.children.length > 0) {
      this.children.forEach((el) => {
        el.style.alignSelf = 'center';
        el.style.justifySelf = 'center';
      });
    }
    const hammertime = hammer(this.el.querySelector('.carousel__content'));
    hammertime.on('swipeleft', () => {
      this.next();
    });
    hammertime.on('swiperight', () => {
      this.prev();
    });
  }
  componentDidRender() {
    if (this.content && this.content.offsetHeight) {
      this.contentMinHeight = `${this.content.offsetHeight.toString()}px`;
    }
  }
  render() {
    const prevCtrlState = this.hasPrev ? '' : 'c-carousel-control--disabled';
    const nextCtrlState = this.hasNext ? '' : 'c-carousel-control--disabled';
    const mobileState = this.isMobile ? 'mobile' : '';
    const controlLeft = (h("div", { class: `c-carousel-control c-carousel-control__left` },
      h("div", { class: `c-carousel-control__button ${prevCtrlState}`, onClick: this.prev.bind(this) },
        h("span", { class: "c-carousel-control__icon material-icons" }, "arrow_back"))));
    const controlRight = (h("div", { class: `c-carousel-control c-carousel-control__right` },
      h("div", { class: `c-carousel-control__button ${nextCtrlState}`, onClick: this.next.bind(this) },
        h("span", { class: "c-carousel-control__icon material-icons" }, "arrow_forward"))));
    const pages = (h("div", { class: "c-carousel-pages" },
      h("div", { class: "c-carousel-pages__content" },
        h("span", { class: `c-carousel-pages__icon material-icons ${prevCtrlState}`, onClick: this.prev.bind(this) }, "arrow_back"),
        h("span", { class: "c-carousel-pages__container" },
          this.currentPage,
          " ",
          this.english ? 'out of' : this.spanish ? 'de' : 'de',
          " ",
          this.allItems),
        h("span", { class: `c-carousel-pages__icon material-icons ${nextCtrlState}`, onClick: this.next.bind(this) }, "arrow_forward"))));
    return (h("div", { class: "c-carousel-background" },
      h("div", { class: `c-carousel ${mobileState}` },
        controlLeft,
        h("div", { class: "carousel show" },
          h("div", { ref: (el) => (this.content = el), class: "carousel__content", style: {
              "grid-template-columns": `repeat(${this.children.length}, 100%)`,
              "grid-column-gap": `${this.space}px`,
            } },
            h("slot", null))),
        controlRight,
        pages)));
  }
  static get is() { return "yduqs-carousel"; }
  static get properties() { return {
    "space": {
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
      "attribute": "space",
      "reflect": true,
      "defaultValue": "24"
    },
    "english": {
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
      "attribute": "english",
      "reflect": false,
      "defaultValue": "false"
    },
    "spanish": {
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
      "attribute": "spanish",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "children": {},
    "currentItem": {},
    "currentPage": {},
    "hasNext": {},
    "hasPrev": {},
    "isMobile": {}
  }; }
  static get events() { return [{
      "method": "onNextSlide",
      "name": "nextslide",
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
      "method": "onPrevSlide",
      "name": "prevslide",
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
      "method": "onUpdatePage",
      "name": "updatepage",
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
    "next": {
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
    "prev": {
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
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "onResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
