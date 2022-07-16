import { h, Host, Component, Prop, Element, Listen, State, Event } from '@stencil/core';
export class YduqsCoverLab {
  constructor() {
    this.loading = true;
    this.mobileBreakpoint = 992;
    this._isMobile = true;
  }
  handleWindowResize() {
    const isMobileDevice = window.innerWidth < this.mobileBreakpoint;
    if (isMobileDevice && !this._isMobile) {
      this._isMobile = true;
    }
    else if (!isMobileDevice && this._isMobile) {
      this._isMobile = false;
    }
  }
  // openConfig() {
  //   let modal_config = this.el.querySelector('#mod-config');
  //   modal_config.setAttribute('isopen', 'true');
  // }
  openIntro() {
    // let btn_intro = this.el.querySelector('.btn-intro');
    // btn_intro.classList.add('c-button--ghost')
    // let btn_start = this.el.querySelector('.btn-start');
    // btn_start.removeAttribute('disabled');
    // let modal_intro = this.el.querySelector('#mod-intro');
    // modal_intro.setAttribute('isopen', 'true');
    this.goToNextPage.emit(this.to_page_init_lab);
  }
  openStart() {
    this.goToNextPage.emit(this.to_page_init_lab);
  }
  componentWillLoad() {
    const isMobileDevice = window.innerWidth < this.mobileBreakpoint;
    if (isMobileDevice && !this._isMobile) {
      this._isMobile = true;
    }
    else if (!isMobileDevice && this._isMobile) {
      this._isMobile = false;
    }
    var capa_lab = document.querySelector('yduqs-cover-lab');
    setTimeout(function () {
      capa_lab.setAttribute('loading', 'false');
    }, 4000);
  }
  render() {
    const deviceClass = this._isMobile ? 'u-text--small' : 'u-text--large';
    return (h(Host, null,
      h("div", { class: "c-cover-lab", style: { background: `url('${this.background_img}') fixed no-repeat` } },
        h("div", { class: "aside" }),
        h("div", { class: "container" },
          h("h6", null, this.subtitle_cover),
          h("h1", { innerHTML: this.title_cover }),
          h("div", { class: "box-btns" },
            h("div", { class: `btns ${this.loading ? 'd-none' : ''}` },
              h("button", { type: "button", class: `c-button ${deviceClass} btn-intro`, style: { marginRight: '10px' }, onClick: () => this.openIntro() }, "Iniciar")))),
        h("div", { class: `box-load ${this.loading ? '' : 'd-none'}` },
          h("yduqs-loading", { open: true, message: "Carregando..." })),
        h("yduqs-modal", { id: "mod-config" },
          h("slot", { name: "modal-config" })),
        h("yduqs-modal", { id: "mod-intro", variant: "lab", size: "large" },
          h("slot", { name: "modal-intro" })))));
  }
  static get is() { return "yduqs-cover-lab"; }
  static get properties() { return {
    "background_img": {
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
      "attribute": "background_img",
      "reflect": false
    },
    "loading": {
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
      "attribute": "loading",
      "reflect": false,
      "defaultValue": "true"
    },
    "subtitle_cover": {
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
      "attribute": "subtitle_cover",
      "reflect": false
    },
    "title_cover": {
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
      "attribute": "title_cover",
      "reflect": false
    },
    "to_page_init_lab": {
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
      "attribute": "to_page_init_lab",
      "reflect": false
    }
  }; }
  static get states() { return {
    "mobileBreakpoint": {},
    "_isMobile": {}
  }; }
  static get events() { return [{
      "method": "goToNextPage",
      "name": "goToNextPage",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "resize",
      "method": "handleWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
