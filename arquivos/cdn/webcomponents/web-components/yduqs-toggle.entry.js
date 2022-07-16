import { r as registerInstance, i as createEvent, h } from './index-5acc1e77.js';

const YduqsToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.myToggleEmit = createEvent(this, "myToggleEmit", 7);
    this.teste = 'teseeee';
    this.isOpen = false;
    this.isDisable = false;
    this.handleClick = () => {
      this.isOpen = !this.isOpen;
      this.myToggleEmit.emit(this.isOpen);
    };
  }
  componentDidLoad() {
    this.isOpen = this.open;
    this.isDisable = this.disable;
  }
  render() {
    return [
      h("div", { class: "c-toggle" }, h("label", { class: "switch" }, h("input", { id: "tog", type: "checkbox", checked: this.isOpen, disabled: this.isDisable, onClick: this.handleClick }), h("span", { class: "slider round" })))
    ];
  }
};

export { YduqsToggle as yduqs_toggle };
