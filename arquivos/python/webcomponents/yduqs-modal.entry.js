import { r as registerInstance, f as createEvent, h } from './index-6ca065bd.js';

const YduqsModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalClosed = createEvent(this, "modalClosed", 7);
    this._isopen = false;
    this.isopen = false;
    this.closeModal = () => {
      this.isopen = false;
      this.modalClosed.emit(true);
    };
  }
  handleModal(m) {
    this._isopen = m;
  }
  async showModal() {
    this._isopen = true;
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
    return (h("div", { class: this._isopen ? 'c-modal__wrapper isopen' : 'c-modal__wrapper' }, h("div", { class: "c-modal__overlay", onClick: this.closeModal }), h("div", { class: "c-modal" }, h("div", { class: "c-modal__header" }, h("div", { class: "c-modal__close", onClick: this.closeModal }, h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#30404D" })))), h("div", { style: { 'max-height': `calc(${this.maxbodyheight}px + 10vh)` }, class: "c-modal__body" }, h("slot", null)))));
  }
  static get watchers() { return {
    "isopen": ["handleModal"]
  }; }
};

export { YduqsModal as yduqs_modal };
