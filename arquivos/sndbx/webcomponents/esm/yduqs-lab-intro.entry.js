import { r as registerInstance, h } from './index-b21d89aa.js';

const YduqsLabIntro = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Título da página, se slot=header não for informado
     */
    this._title = 'Introdução';
    /**
     * Texto dos links do cabeçalho o rodapé.
     */
    this.btnText = 'Ir para o mapa';
    /**
     * Url do Href dos links do cabeçalho e rodapé
     */
    this.btnHref = '?page=fase-1:map';
    /**
     * Ícone do link do rodapé. Deve ser uma ícone Material.
     */
    this.btnIcon = 'chevron_right';
  }
  render() {
    return (h("yduqs-page-generic-lab", null, h("div", { slot: "header", class: "box-title d-flex justify-content-between align-items-center" }, h("h1", { class: "px-0" }, this._title), h("a", { href: this.btnHref }, this.btnText)), h("div", { slot: "body", class: "box-body d-flex justify-content-between" }, h("slot", null)), h("div", { slot: "footer", class: "d-flex justify-content-center" }, h("a", { class: "c-button btn-intro my-5 d-flex align-items-center", href: this.btnHref }, this.btnText, " ", h("span", { class: "c-button__icon material-icons px-1" }, this.btnIcon)))));
  }
};

export { YduqsLabIntro as yduqs_lab_intro };
