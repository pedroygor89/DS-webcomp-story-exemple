import { r as registerInstance, c as createEvent, h, a as Host } from './index-b21d89aa.js';

const YduqsCountdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.countdownFinished = createEvent(this, "countdownFinished", 7);
    this.countdownDanger = createEvent(this, "countdownDanger", 7);
    this.countdownWarning = createEvent(this, "countdownWarning", 7);
    /**
     * Marcador da contagem de Alerta, em porcentagem;
     */
    this.warningMarker = 20;
    this.dangerMarker = this.warningMarker / 2;
    this.number = this.time;
    this.paused = false;
  }
  /**
   * Inicia a contagem
   * @returns Promise.resolve
   */
  async start() {
    this.paused = false;
    if (!this.interval) {
      this.interval = window.setInterval(() => {
        if (!this.paused) {
          this.number -= 1;
          if (this.inDanger()) {
            this.countdownDanger.emit(this._id);
          }
          else if (this.inWarning()) {
            this.countdownWarning.emit(this._id);
          }
        }
        if (this.number <= 0 && !this.paused) {
          this.pause();
          this.countdownFinished.emit(this._id);
        }
      }, 1000);
    }
    return Promise.resolve(true);
  }
  /**
   * Para o contador resetando a contagem
   * @returns Promise.resolve
   */
  async stop() {
    window.clearInterval(this.interval);
    this.interval = null;
    this.number = this.time;
    return Promise.resolve();
  }
  /**
   * Pausa o contador, sem resetar a contagem
   * @returns Promise.resolve
   */
  async pause() {
    this.paused = true;
    return Promise.resolve();
  }
  /**
   * Reinicia a contagem
   * @returns Promise.resolve
   */
  async restart() {
    await this.stop();
    await this.start();
    return Promise.resolve();
  }
  inWarning() {
    return this.number < this.time * (this.warningMarker / 100);
  }
  inDanger() {
    return this.number < this.time * (this.dangerMarker / 100);
  }
  componentWillLoad() {
    if (!this._id) {
      console.error('yduqs-countdown: Atributo `id` é obrigatório');
    }
    if (!this.time) {
      console.error('yduqs-countdown: Atributo `time` é obrigatório');
    }
    this.number = this.time;
  }
  render() {
    const min = Math.trunc(this.number / 60);
    const seg = this.number % 60;
    const css = !this.paused ? (this.inDanger() ? 'danger' : this.inWarning() ? 'warning' : '') : '';
    return (h(Host, { id: this._id, class: `c-countdown ${css}` }, h("i", { class: "material-icons icon" }, "alarm"), h("span", { class: "number" }, min < 10 ? `0${min}` : min, ":", seg < 10 ? `0${seg}` : seg)));
  }
};

export { YduqsCountdown as yduqs_countdown };
