import { r as registerInstance, c as createEvent, h } from './index-b21d89aa.js';

const YduqsModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalClosed = createEvent(this, "modalClosed", 7);
    this._isopen = false;
    this.isopen = false;
    this.closeModal = () => {
      let closeModal = document.querySelector('yduqs-video-player iframe');
      if (closeModal) {
        closeModal.removeAttribute('src');
      }
      this.isopen = false;
      this.componentWillLoad();
      this.modalClosed.emit(true);
    };
  }
  handleModal(m) {
    this._isopen = m;
    if (this._isopen)
      document.querySelector('body').style.overflowY = 'hidden';
    else
      document.querySelector('body').style.overflowY = 'auto';
  }
  async showModal() {
    this.show();
  }
  async show() {
    this._isopen = true;
  }
  async hide() {
    this.closeModal();
  }
  componentWillLoad() {
    this._isopen = this.isopen;
    this.getModalBodyHeight();
  }
  onResize(event) {
    event.stopPropagation();
    this.getModalBodyHeight();
  }
  getModalBodyHeight() {
    let widthScrean = window.innerWidth;
    if (widthScrean > 600) {
      this.maxbodyheight = window.innerHeight * 0.7 - 56;
    }
    else {
      this.maxbodyheight = window.innerHeight * 0.8 - 56;
    }
  }
  render() {
    return (h("div", { class: `c-modal__wrapper ${this._isopen ? 'isopen' : ''}` }, h("div", { class: "c-modal__overlay", onClick: this.closeModal }), h("div", { class: `c-modal ${this.size ? `c-modal--${this.size}` : ''} ${this.variant ? `c-modal__variant--${this.variant}` : ''}` }, h("div", { class: `c-modal__header ${this._title ? 'c-modal__header--titlered' : ''}` }, this._title && (h("h3", { class: "c-heading" }, this._title)), this.variant === 'lab' ? (h("button", { type: "button", onClick: this.closeModal, class: "c-button c-button__icon-container c-button__icon-small u-text--small p-btn p-open-in-full" }, h("span", { class: "p-btn c-button__icon material-icons" }, "close"))) : (h("div", { class: "c-modal__close", onClick: this.closeModal }, h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#30404D" }))))), h("div", { style: { 'max-height': `${this.maxbodyheight}px` }, class: "c-modal__body" }, h("slot", null)))));
  }
  static get watchers() { return {
    "isopen": ["handleModal"]
  }; }
};

export { YduqsModal as yduqs_modal };
