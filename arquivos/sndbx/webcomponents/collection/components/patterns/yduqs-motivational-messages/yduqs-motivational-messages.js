import { Component, Host, h, State, Watch, Listen } from '@stencil/core';
import { i18n } from '../../../utils/i18n';
import { cleanString, generateRandomNumber } from '../../../utils/utils';
import IconWaterGlass from './icons/water-glass.svg';
import IconTeaCup from './icons/tea-cup.svg';
import IconFlag from './icons/flag.svg';
import IconThumb from './icons/thumb_up.svg';
export class YduqsMotivationalMessages {
  constructor() {
    this.open = false;
    this.active = false;
    // TODO Remover countdown
    this.countdown = {
      break: 0,
      forward: 0,
    };
    this.configOpen = false;
    // Remover até aqui
    this.forwardKey = 'yduqs-mm-start-count';
    this.icons = {
      water_glass: IconWaterGlass,
      tea_cup: IconTeaCup,
      flag: IconFlag,
      thumb_up: IconThumb,
    };
  }
  handleCloseAlert() {
    this._hideMessage();
    this._generateIntervals();
  }
  handleCloseConfirm() {
    this._hideMessage();
    this._generateIntervals();
  }
  handleCloseInfo() {
    this._hideMessage();
    this._generateIntervals();
  }
  handleCloseToast() {
    this._hideMessage();
    this._generateForwardIntervals();
  }
  isMobile() {
    return window.innerWidth <= 578;
  }
  _generateForwardIntervals() {
    // Sortenaod um valor entre 3 e 4 minutos
    this.forwardInterval = new Date().getTime() + (3 * 60 + generateRandomNumber(1, 60)) * 1000;
  }
  /*
  private _generateBreakIntervals() {
    // Sortenaod um valor entre 23 e 25 minutos
    this.breakInterval = new Date().getTime() + (23 * 60 + generateRandomNumber(1, 120)) * 1000;
  }
  */
  _generateIntervals() {
    this._generateForwardIntervals();
    // this._generateBreakIntervals();
  }
  handleVisibility() {
    if (document.hidden) {
      // Aba Inativa
      this._stopCount();
    }
    else {
      // Aba ativa
      this._startCount();
    }
  }
  handleOpen() {
    this.open = Boolean(this.message);
  }
  _setMessage(message) {
    this.message = message;
  }
  _getIcon(type) {
    switch (type) {
      case 'toast':
        return 'thumb_up';
      case 'confirm':
      case 'info':
        return 'flag';
      default:
        return undefined;
    }
  }
  _showMessage(type) {
    let randomVector;
    let prefix;
    this.forwardInterval = null;
    if (type === 'toast') {
      randomVector = 8;
      prefix = 'forward';
    }
    else if (type === 'alert') {
      randomVector = 5;
      prefix = 'break';
      this.breakInterval = null;
    }
    else if (type === 'confirm' || type === 'info') {
      randomVector = 0;
      prefix = 'conclusion';
    }
    const index = generateRandomNumber(0, randomVector);
    this._setMessage({
      type: type,
      disclaimer: i18n(`motivationalMsg.${prefix}.${index}.disclaimer`) || undefined,
      icon: this.icons[i18n(`motivationalMsg.${prefix}.${index}.icon`)] || this.icons[this._getIcon(type)],
      title: i18n(`motivationalMsg.${prefix}.${index}.title`) || undefined,
      message: i18n(`motivationalMsg.${prefix}.${index}.message`),
    });
  }
  _hideMessage() {
    this.open = false;
    window.setTimeout(() => {
      this._setMessage(null);
    }, 1000);
  }
  _setActivateTime() {
    window.localStorage.setItem(this.forwardKey, String(new Date().getTime()));
  }
  _setInactivateTime() {
    window.localStorage.removeItem(this.forwardKey);
  }
  _triggerMessages() {
    if (!document.hidden && !this.open) {
      // Abrir mensagem de apoio
      if (Boolean(this.forwardInterval) && this.forwardInterval <= new Date().getTime()) {
        // Mensagens de Apoio
        this._showMessage('toast');
      }
      else if (Boolean(this.breakInterval) && this.breakInterval <= new Date().getTime()) {
        // REMOVENDO MENSAGENS DE BREAK TIME
        // this._showMessage('alert');
      }
    }
  }
  _startCount() {
    this._generateIntervals(); // Cria um novo Intervalo
    this._setActivateTime(); // Grava um novo Start time no Storage
    if (this.looper) {
      clearInterval(this.looper);
    }
    this.looper = setInterval(() => {
      this.countdown = {
        break: ((this.breakInterval - new Date().getTime()) / 1000).toFixed(),
        forward: ((this.forwardInterval - new Date().getTime()) / 1000).toFixed(),
      };
      this._triggerMessages();
    }, 1000); // TODO mudar intervalo para um ciclo maior
  }
  _stopCount() {
    this._setInactivateTime(); // Grava um novo Start time no Storage
    this.forwardInterval = null;
    if (this.looper) {
      clearInterval(this.looper);
    }
  }
  componentDidLoad() {
    document.addEventListener('visibilitychange', () => {
      this.handleVisibility();
    });
    this._startCount();
    /**
     * Gambiarra para mostrar a mSG de Conclusão do Módulo
     */
    $('body').on('click', 'yduqs-questions[question_id] button[question-reference]', (event) => {
      const btn = $(event.target);
      const parent = $(btn.closest(`div.question-block[question-reference="${btn.attr('question-reference')}"]`)[0]);
      const question = $(parent.closest('yduqs-questions')[0]);
      const module = $(question.closest('module')[0]);
      const answerFeedback = $(parent).find('div.question-negative-feedback');
      // Qual o tema?
      const theme = cleanString(document.title).replace(/ +/g, '');
      // Qual o Módulo?
      const moduleId = module.attr('id');
      // Quantas questões?
      const total = [];
      question
        .find('yduqs-questions-body')
        .children('div.question-block')
        .each(function () {
        total.push($(this).attr('question-reference'));
      });
      // Qual a questão respondida?
      const answered = btn.attr('question-reference');
      // Chave do localStorage
      const storageKey = `${theme}-${moduleId}`;
      const localData = localStorage.getItem(storageKey)
        ? JSON.parse(localStorage.getItem(storageKey))
        : {
          questions: total.map(item => {
            return { reference: item, answered: false };
          }),
        };
      if (parent.is('.answered')) {
        if (answerFeedback.is('.d-none') && localData.questions.filter((item) => !item.answered).length > 0) {
          const questionIndex = localData.questions.findIndex((item) => item.reference === answered);
          localData.questions[questionIndex].answered = true;
          // Todas foram respondidas?
          if (localData.questions.filter((item) => !item.answered).length === 0) {
            if (this.isMobile()) {
              // setTimeout(() => {
              // Compensar o Feedback da resposta
              this._showMessage('confirm');
              // }, 3000);
            }
            else {
              this._showMessage('info');
            }
          }
        }
      }
      localStorage.setItem(storageKey, JSON.stringify(localData));
    });
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    return (h(Host, null,
      h("yduqs-alert", { usematerial: !Boolean((_a = this.message) === null || _a === void 0 ? void 0 : _a.icon), icon: ((_b = this.message) === null || _b === void 0 ? void 0 : _b.icon) || 'info', title: ((_c = this.message) === null || _c === void 0 ? void 0 : _c.disclaimer) || undefined, subtitle: ((_d = this.message) === null || _d === void 0 ? void 0 : _d.title) || undefined, message: (_e = this.message) === null || _e === void 0 ? void 0 : _e.message, btntext: i18n('globals.continuar'), open: this.open && Boolean(((_f = this.message) === null || _f === void 0 ? void 0 : _f.type) === 'alert') }),
      h("yduqs-confirm", { usematerial: !Boolean((_g = this.message) === null || _g === void 0 ? void 0 : _g.icon), icon: ((_h = this.message) === null || _h === void 0 ? void 0 : _h.icon) || 'info', title: i18n(`motivationalMsg.conclusion.disclaimer`), subtitle: ((_j = this.message) === null || _j === void 0 ? void 0 : _j.title) || undefined, message: (_k = this.message) === null || _k === void 0 ? void 0 : _k.message, btntext: i18n('motivationalMsg.conclusion.action'), open: this.open && Boolean(((_l = this.message) === null || _l === void 0 ? void 0 : _l.type) === 'confirm') }),
      h("yduqs-info", { usematerial: !Boolean((_m = this.message) === null || _m === void 0 ? void 0 : _m.icon), icon: ((_o = this.message) === null || _o === void 0 ? void 0 : _o.icon) || 'info', title: i18n(`motivationalMsg.conclusion.disclaimer`), subtitle: ((_p = this.message) === null || _p === void 0 ? void 0 : _p.title) || undefined, message: (_q = this.message) === null || _q === void 0 ? void 0 : _q.message, open: this.open && Boolean(((_r = this.message) === null || _r === void 0 ? void 0 : _r.type) === 'info') }),
      h("yduqs-toast", { usematerial: !Boolean((_s = this.message) === null || _s === void 0 ? void 0 : _s.icon), icon: ((_t = this.message) === null || _t === void 0 ? void 0 : _t.icon) || 'info', message: (_u = this.message) === null || _u === void 0 ? void 0 : _u.message, tit: (_v = this.message) === null || _v === void 0 ? void 0 : _v.title, open: this.open && Boolean(((_w = this.message) === null || _w === void 0 ? void 0 : _w.type) === 'toast') })));
  }
  static get is() { return "yduqs-motivational-messages"; }
  static get states() { return {
    "open": {},
    "message": {},
    "active": {},
    "breakInterval": {},
    "forwardInterval": {},
    "looper": {},
    "countdown": {},
    "configOpen": {}
  }; }
  static get watchers() { return [{
      "propName": "message",
      "methodName": "handleOpen"
    }]; }
  static get listeners() { return [{
      "name": "alertClosed",
      "method": "handleCloseAlert",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "alertClick",
      "method": "handleCloseAlert",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "confirmClosed",
      "method": "handleCloseConfirm",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "confirmClick",
      "method": "handleCloseConfirm",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "infoClosed",
      "method": "handleCloseInfo",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "toastClosed",
      "method": "handleCloseToast",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
