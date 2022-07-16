'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsLabIntro = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("yduqs-page-generic-lab", null, index.h("div", { slot: "header", class: "box-title d-flex justify-content-between align-items-center" }, index.h("h1", { class: "px-0" }, this._title), index.h("a", { href: this.btnHref }, this.btnText)), index.h("div", { slot: "body", class: "box-body d-flex justify-content-between" }, index.h("slot", null)), index.h("div", { slot: "footer", class: "d-flex justify-content-center" }, index.h("a", { class: "c-button btn-intro my-5 d-flex align-items-center", href: this.btnHref }, this.btnText, " ", index.h("span", { class: "c-button__icon material-icons px-1" }, this.btnIcon)))));
  }
};

exports.yduqs_lab_intro = YduqsLabIntro;
