import { r as registerInstance, h, e as Host } from './index-6ca065bd.js';

const YduqsCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dark = false;
    this.outlined = false;
    this.equal_height = false;
    this.small = false;
  }
  render() {
    const darkMode = this.dark ? 'c-card--dark' : '';
    const colorMode = this.outlined ? 'c-card--outlined' : darkMode;
    const equalHeight = this.equal_height ? 'h-100' : '';
    const pSmall = this.small ? 'c-card-small-p' : '';
    return (h(Host, { class: `c-card ${colorMode} ${equalHeight} ${pSmall}` }, h("slot", null)));
  }
};

export { YduqsCard as yduqs_card };
