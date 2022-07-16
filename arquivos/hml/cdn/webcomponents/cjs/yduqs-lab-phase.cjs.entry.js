'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9ff254ed.js');

const YduqsLabPhase = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.goToNextPage = index.createEvent(this, "goToNextPage", 7);
    this.gameOverEvent = index.createEvent(this, "gameOverEvent", 7);
    this.headerItems = [
      { icon: 'home', label: 'Tela Inicial', action: 'home' },
      { icon: 'map', label: 'Mapa', action: 'map' },
      { icon: 'class', label: 'Teoria', action: 'theory' },
    ];
    this.headerTitle = {
      trainning: `Fase ${this.phase} - Treinamento`,
      challenge: `Fase ${this.phase} - Desafio`,
    };
  }
  handleNav(event) {
    // if ((event.target as any).nodeName?.toUpperCase() === 'YDUQS-COVER-STAGE-LAB' && Number(event.detail.phase) === Number(this.phase)) {
    if (event.detail.action === 'theory') {
      this.showTheory();
    }
    else {
      this.show = event.detail.action;
    }
    /*
    } else {
      this.show = event.detail.action;
    }
    */
  }
  handleNext(event) {
    if (event.detail.result) {
      this.goToNextPage.emit(String(this.next));
    }
    else {
      this.showTheory();
    }
  }
  handleTrainning() {
    this.goToHome();
  }
  handleLabActionsValidate(event) {
    const blocked = this.show === 'challenge' || this.show === 'trainning' && !['theory'].includes(event.detail.action);
    if (blocked) {
      // Chamar o modal de confirmação
      this.confirmation = {
        action: event.detail.action
      };
      this.modalConfirm.showModal();
    }
    else {
      this.handleLabActions(event.detail.action);
    }
  }
  handleMapActions(event) {
    this.goToNextPage.emit(event.detail.url);
  }
  handleLabActions(action) {
    switch (action) {
      case 'home':
        this.goToNextPage.emit('');
        break;
      case 'theory':
        this.showTheory();
        break;
      case 'map':
        this.show = 'map';
        const mapElem = document.querySelector('yduqs-virtual-map');
        if (mapElem) {
          window.setTimeout(() => mapElem.centralize(), 100);
        }
        break;
    }
  }
  handleNavConfirmation() {
    this.modalConfirm.hide();
    if (this.show === 'challenge') {
      this.gameOverEvent.emit();
    }
    this.handleLabActions(this.confirmation.action);
  }
  showTheory() {
    this.modalTheory.showModal();
  }
  goToHome() {
    this.show = 'cover';
  }
  render() {
    return (index.h(index.Host, { class: `c-lab-phase showing-${this.show}` }, index.h("div", { class: `c-lab-phase-header ${['cover', 'map'].includes(this.show) ? 'floating' : ''}` }, index.h("slot", { name: "header" }, index.h("yduqs-header-lab", { items: this.headerItems, title: this.headerTitle[this.show] || 'Laboratório virtual' }))), index.h("div", { class: `slot c-lab-phase-cover ${this.show === 'cover' ? 'show' : 'hide'}` }, index.h("slot", { name: "cover" })), index.h("div", { class: `slot c-lab-phase-trainning ${this.show === 'trainning' ? 'show' : 'hide'}` }, index.h("slot", { name: "trainning" })), index.h("div", { class: `slot c-lab-phase-challenge ${this.show === 'challenge' ? 'show' : 'hide'}` }, index.h("slot", { name: "challenge" })), index.h("div", { class: `slot c-lab-phase-map ${this.show === 'map' ? 'show' : 'hide'}` }, index.h("slot", { name: "map" })), index.h("yduqs-modal", { ref: (ref) => this.modalTheory = ref, id: `modal-theory-${this.phase}`, variant: "lab", size: "large" }, index.h("slot", { name: "theory" })), index.h("yduqs-modal", { ref: (ref) => this.modalConfirm = ref, id: `modal-confirm-${this.phase}`, variant: "lab", size: "small" }, index.h("p", null, "Texto explicando que o progresso ser\u00E1 perdido"), index.h("div", { style: { display: 'flex' } }, index.h("button", { type: "button", class: "c-button c-button--ghost u-text--small", onClick: () => { this.modalConfirm.hide(); this.confirmation = null; } }, "Cancelar"), index.h("button", { type: "button", class: "c-button u-text--small", style: { marginLeft: '20px' }, onClick: () => this.handleNavConfirmation() }, "Continuar")))));
  }
};

exports.yduqs_lab_phase = YduqsLabPhase;
