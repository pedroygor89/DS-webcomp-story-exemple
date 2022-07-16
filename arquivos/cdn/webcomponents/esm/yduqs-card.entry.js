import { r as registerInstance, h, a as Host } from './index-b21d89aa.js';

const YduqsCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dark = false;
    this.outlined = false;
    this.equal_height = false;
    this.small = false;
    // Start - Props Doktor
    this.template_doktor = false;
  }
  // End - Props Doktor
  componentWillLoad() {
    let isDoktor = document.body.classList.contains('template-doktor');
    if (isDoktor) {
      this.template_doktor = true;
    }
  }
  render() {
    const darkMode = this.dark ? 'c-card--dark' : '';
    const colorMode = this.outlined ? 'c-card--outlined' : darkMode;
    const equalHeight = this.equal_height ? 'h-100' : '';
    const pSmall = this.small ? 'c-card-small-p' : '';
    const imgCard = this.template_doktor ? 'imgCard' : '';
    return (h(Host, { class: `c-card ${imgCard} ${colorMode} ${equalHeight} ${pSmall}`, style: { 'background-image': `url(${this.background})` } }, h("slot", null)));
  }
};

export { YduqsCard as yduqs_card };
