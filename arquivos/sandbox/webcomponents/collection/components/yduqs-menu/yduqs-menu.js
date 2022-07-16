import { Component, h, Host, Element, State, Prop, Listen, Event, Method } from '@stencil/core';
const mobileBreakpoint = 578;
export class YduqsMenu {
  constructor() {
    this._isMobile = window.innerWidth < mobileBreakpoint;
    this._isOpen = false;
    this._isActive = false;
    this._animate = false;
    this._activeIndex = 0;
  }
  handleWindowResize() {
    const isMobileDevice = window.innerWidth < mobileBreakpoint;
    if (isMobileDevice && !this._isMobile) {
      this._isMobile = true;
    }
    else if (!isMobileDevice && this._isMobile) {
      this._isMobile = false;
    }
  }
  async initialize(config) {
    this.settings = config;
  }
  closeMenu(index) {
    if (!this._isMobile && this._isOpen) {
      this.animate(true);
      this.renderActiveItem();
      this.onClickMenuItem.emit(this.getActiveItem());
    }
    if (index >= 0) {
      this._activeIndex = index;
    }
    this._isOpen = false;
  }
  ;
  openMenu() {
    if (!this._isMobile && this._isOpen) {
      this.closeMenu();
    }
    else {
      this._isOpen = true;
    }
  }
  ;
  getActiveItem() {
    if (this.settings !== undefined) {
      return this.settings.itemList.find((item, index) => {
        if (index === this._activeIndex) {
          return item;
        }
      });
    }
    return { label: '', href: '' };
  }
  renderActiveItem() {
    const currActiveItem = this.getActiveItem();
    const animationClass = this._animate ? 'u-fade-in' : '';
    return (h("div", { class: `c-menu__item--active ${animationClass}` },
      h("span", { class: "c-menu__title" }, this.settings !== undefined ? this.settings.title : ''),
      h("span", { class: "c-menu__divider" }),
      h("span", { class: `c-menu__item` }, currActiveItem.label)));
  }
  renderActiveMarker() {
    return (h("span", { class: "c-menu__active-marker" }));
  }
  renderMenuItems() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    if (this.settings !== undefined) {
      this.settings.itemList.forEach((item, index) => {
        menuItemsList.push(h("div", { class: {
            'c-menu__item-container': true
          } },
          (this._activeIndex === index) ? this.renderActiveMarker() : null,
          h("a", { href: `${item.href}`, onClick: () => this.closeMenu(index), class: {
              'c-menu__item': true,
              'c-menu__item--active': (this._activeIndex === index)
            } }, item.label),
          h("span", { class: "c-menu__divider" })));
      });
    }
    return h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, menuItemsList);
  }
  getMenuMobile() {
    return (h("div", { class: this._isOpen ? 'c-menu__modal__wrapper open' : 'c-menu__modal__wrapper' },
      h("div", { class: "c-menu__modal__overlay", onClick: () => this.closeMenu() }),
      h("div", { class: "c-menu__modal" },
        h("div", { class: "c-menu__modal__header" },
          h("div", { class: "c-menu__modal__close", onClick: () => this.closeMenu() },
            h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
              h("path", { d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#30404D" }))),
          h("span", { class: "c-menu__modal__title c-heading u-title-xsmall" }, this.settings ? this.settings.title : '')),
        h("div", { class: "c-menu__modal__body" }, this.renderMenuItems()))));
  }
  getMenuDesktop() {
    const animationClass = this._animate ? 'active u-linear-left' : '';
    return (h("div", { class: `c-menu__desktop ${animationClass}` }, this._isOpen ? this.renderMenuItems() : this.renderActiveItem()));
  }
  animate(state = false) {
    this._animate = state;
  }
  render() {
    const deviceClass = this._isMobile ? 'mobile' : 'desktop';
    const openIconClass = this._isOpen ? 'open' : '';
    return (h(Host, { class: `c-menu ${deviceClass}` },
      h("div", { class: "c-menu__floating-btn__container" },
        h("button", { class: "c-menu__floating-btn", onClick: () => this.openMenu() },
          h("div", { class: `c-menu__floating-icon ${openIconClass}` },
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" }),
            h("span", { class: "icon-bar" })))),
      this._isMobile ? this.getMenuMobile() : this.getMenuDesktop()));
  }
  static get is() { return "yduqs-menu"; }
  static get properties() { return {
    "settings": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "YduqsMenuModel",
        "resolved": "YduqsMenuModel",
        "references": {
          "YduqsMenuModel": {
            "location": "import",
            "path": "./yduqs-menu.model"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "_isMobile": {},
    "_isOpen": {},
    "_isActive": {},
    "_animate": {},
    "_activeIndex": {},
    "_menuDeskContainerWidth": {}
  }; }
  static get events() { return [{
      "method": "onChangeMenuData",
      "name": "changemenudata",
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
      "method": "onClickMenuItem",
      "name": "clickmenuitem",
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
    "initialize": {
      "complexType": {
        "signature": "(config: YduqsMenuModel) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          },
          "YduqsMenuModel": {
            "location": "import",
            "path": "./yduqs-menu.model"
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
      "method": "handleWindowResize",
      "target": "window",
      "capture": false,
      "passive": true
    }]; }
}
