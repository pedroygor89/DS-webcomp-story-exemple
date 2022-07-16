import { r as registerInstance, i as createEvent, h, e as Host } from './index-5acc1e77.js';
import { a as generateSvgFromBase64Data } from './utils-f2ca3a61.js';

const YduqsToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toastClosed = createEvent(this, "toastClosed", 7);
    this.open = false;
    this.usematerial = true;
    this.delay = 17000;
  }
  handleClose() {
    if (this.open) {
      window.setTimeout(() => {
        this.toastClosed.emit(true);
      }, this.delay);
    }
  }
  render() {
    return (h(Host, { class: this.open ? 'c-visibled' : 'c-hidden' }, this.usematerial ? h("span", { class: "c-toast-icon material-icons" }, this.icon) : h("span", { class: "c-toast-icon", innerHTML: generateSvgFromBase64Data(this.icon) }), h("span", { class: "c-toast-message" }, Boolean(this.tit) && h("span", { class: "c-toast-message-title" }, this.tit), this.message)));
  }
  static get watchers() { return {
    "open": ["handleClose"]
  }; }
};

export { YduqsToast as yduqs_toast };
