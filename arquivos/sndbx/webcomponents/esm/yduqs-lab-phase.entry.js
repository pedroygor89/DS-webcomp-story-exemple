import { r as registerInstance, c as createEvent, h, a as Host } from './index-b21d89aa.js';

const YduqsLabPhase = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.goToNextPage = createEvent(this, "goToNextPage", 7);
    this.gameOverEvent = createEvent(this, "gameOverEvent", 7);
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
    return (h(Host, { class: `c-lab-phase showing-${this.show}` }, h("div", { class: `c-lab-phase-header ${['cover', 'map'].includes(this.show) ? 'floating' : ''}` }, h("slot", { name: "header" }, h("yduqs-header-lab", { items: this.headerItems, title: this.headerTitle[this.show] || 'Laboratório virtual' }))), h("div", { class: `slot c-lab-phase-cover ${this.show === 'cover' ? 'show' : 'hide'}` }, h("slot", { name: "cover" })), h("div", { class: `slot c-lab-phase-trainning ${this.show === 'trainning' ? 'show' : 'hide'}` }, h("slot", { name: "trainning" })), h("div", { class: `slot c-lab-phase-challenge ${this.show === 'challenge' ? 'show' : 'hide'}` }, h("slot", { name: "challenge" })), h("div", { class: `slot c-lab-phase-map ${this.show === 'map' ? 'show' : 'hide'}` }, h("slot", { name: "map" })), h("yduqs-modal", { ref: (ref) => this.modalTheory = ref, id: `modal-theory-${this.phase}`, variant: "lab", size: "large" }, h("slot", { name: "theory" })), h("yduqs-modal", { ref: (ref) => this.modalConfirm = ref, id: `modal-confirm-${this.phase}`, variant: "lab", size: "small" }, h("p", null, "Texto explicando que o progresso ser\u00E1 perdido"), h("div", { style: { display: 'flex' } }, h("button", { type: "button", class: "c-button c-button--ghost u-text--small", onClick: () => { this.modalConfirm.hide(); this.confirmation = null; } }, "Cancelar"), h("button", { type: "button", class: "c-button u-text--small", style: { marginLeft: '20px' }, onClick: () => this.handleNavConfirmation() }, "Continuar")))));
  }
};

export { YduqsLabPhase as yduqs_lab_phase };
