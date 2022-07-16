import { r as registerInstance, h, g as getElement } from './index-c3ccce17.js';

let audioCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.audiocard_id = '';
    this.src = '';
    this.isPlaying = false;
    this.isPlayingSlow = false;
    this.duration = 0;
    this.currentTime = 0;
  }
  async playAudioStop() {
    this.audioPlayer.pause();
    this.audioPlayer.currentTime = 0;
    this.isPlaying = false;
    this.isPlayingSlow = false;
  }
  async playAudioStopSlow() {
    this.audioPlayer.pause();
    this.audioPlayer.currentTime = 0;
    this.isPlaying = false;
    this.isPlayingSlow = false;
  }
  playAudioResetAll() {
    document.querySelectorAll('yduqs-audio-card').forEach(e => {
      e.playAudioStop();
    });
  }
  playAudioResetAllSlow() {
    document.querySelectorAll('yduqs-audio-card').forEach(e => {
      e.playAudioStopSlow();
    });
  }
  async playAudio() {
    if (this.isPlaying) {
      this.audioPlayer.pause();
      this.isPlaying = false;
    }
    else {
      await this.playAudioResetAll();
      this.audioPlayer.playbackRate = 1;
      this.audioPlayer.play();
      this.isPlaying = true;
    }
    this.audioPlayer.addEventListener('ended', () => {
      this.audioPlayer.pause();
      this.isPlaying = false;
    });
  }
  async playAudioSlow() {
    if (this.isPlayingSlow) {
      this.audioPlayer.pause();
      this.isPlayingSlow = false;
    }
    else {
      await this.playAudioResetAllSlow();
      this.audioPlayer.playbackRate = 0.5;
      this.audioPlayer.play();
      this.isPlayingSlow = true;
    }
    this.audioPlayer.addEventListener('ended', () => {
      this.audioPlayer.pause();
      this.isPlayingSlow = false;
    });
  }
  // componentWillRender(){
  //   this.audioPlayerEnd =  this.audioPlayer.ended;
  // }
  render() {
    const background_audio_card = this.dark ? 'background_audio_card_dark' : this.outlined ? 'background_audio_card_outline' : 'background_audio_card_light';
    const title_dark = this.dark ? 'title_dark' : '';
    const btn_dark = this.dark ? 'c-button--dark' : '';
    const txt_dark = this.dark ? 'box-titles--dark' : '';
    const group = this.group ? '--group' : '';
    return [
      h("div", { class: `c-audio-card${group} ${background_audio_card}` }, h("div", { class: "box" }, h("slot", null)), h("yduqs-card", { id: this.audiocard_id, dark: this.dark, outlined: this.outlined, equal_height: this.equal_height }, h("audio", { class: "audio-object", src: this.src, ref: (el) => this.audioPlayer = el }), h("h1", { class: `${title_dark} ` }, this.title_audio_card), h("div", { class: "box-buttons" }, h("button", { type: "button", class: `c-button ${btn_dark} `, onClick: () => this.playAudio() }, h("span", { class: "c-button__icon material-icons-round play" }, this.isPlaying ? 'stop' : 'play_arrow')), h("button", { type: "button", class: `c-button ${btn_dark} `, onClick: () => this.playAudioSlow() }, h("span", { class: "c-button__icon material-icons-round" }, this.isPlayingSlow ?
        h("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "41px", height: "50px", viewBox: "0 0 41 50" }, h("path", { class: "cor_icone", d: "M16.4,42h6.9c0,0-2.6-2.3-2.4-7.5c0,0,0,0,0,0c0-4.6,3-8.3,6.7-8.3c3,0,5.4,3,5.4,6.7c0,3-2,5.5-4.4,5.5\r\n              \r\n              c-2,0-3.6-2-3.6-4.5c0-2,1.3-3.6,2.9-3.6c1.3,0,2.4,1.3,2.4,3c0,0.2-0.1,0.4-0.3,0.4s-0.3-0.2-0.3-0.4c0-1.2-0.8-2.2-1.8-2.2\r\n              \r\n              c-1.3,0-2.3,1.3-2.3,2.9c0,2,1.3,3.7,3,3.7c2.1,0,3.8-2.1,3.8-4.7c0-3.3-2.2-6-4.8-6c-3.4,0-6.1,3.4-6.1,7.6c0,5.3,3.5,9.6,7.7,9.6\r\n              \r\n              c5.4,0,9.7-4.5,9.7-11.2c0-8.4-5.5-14.3-12.2-14.3c-10.9,0-15.3,7.3-15.3,17.8C11.5,36.3,12,42,16.4,42z" }), h("path", { class: "cor_icone", d: "M36.6,42.4l-1.5,0c-1.2,1.3-3.9,2.2-5.8,2.2c-1.9,0-4.6-0.8-5.7-2.1h-8.3c0,0-4.3-0.6-4.3-8.1V14.2\r\n              \r\n              c0,0,0-2.6-1.8-4.2C9.5,8.1,9.7,5,8.8,2.7C8.2,1.1,7,0.2,5.4,0C5.2,0,5.1,0.2,5,0.5c0,0.3,0.1,0.6,0.3,0.6C6.8,1.2,7.7,2,8.3,3.3\r\n              \r\n              C9,5.2,8.8,7.8,8.5,9.5C8.1,9.3,7.7,9.2,7.1,9.2c0,0-0.2,0-0.5,0.1C6.4,8,5.8,4.8,4.2,3.6C3,2.8,1.7,3.1,0.2,4.6\r\n              \r\n              C0,4.7,0,5.1,0.1,5.3c0.1,0.3,0.3,0.3,0.5,0.2C1.8,4.3,3,4,3.9,4.6c1.3,1,1.9,3.8,2,4.8c-1.1,0.5-2.7,0.9-2.7,4.7v26.3\r\n              \r\n              c0,0-0.2,7.5,7.6,7.5H40C40,48,40.4,42.4,36.6,42.4z" })) :
        h("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "41px", height: "50px", viewBox: "0 0 41 50" }, h("g", null, h("path", { class: "cor_icone", d: "M16.7,42.7h6.9c0,0-2.6-2.3-2.4-7.5c0,0,0,0,0,0c0-4.6,3-8.3,6.7-8.3c3,0,5.4,3,5.4,6.7c0,3-2,5.5-4.4,5.5\r\n              \r\n              c-2,0-3.6-2-3.6-4.5c0-2,1.3-3.6,2.9-3.6c1.3,0,2.4,1.3,2.4,3c0,0.2-0.1,0.4-0.3,0.4s-0.3-0.2-0.3-0.4c0-1.2-0.8-2.2-1.8-2.2\r\n              \r\n              C27,31.7,26,33,26,34.6c0,2,1.3,3.7,3,3.7c2.1,0,3.8-2.1,3.8-4.7c0-3.3-2.2-6-4.8-6c-3.4,0-6.1,3.4-6.1,7.6c0,5.3,3.5,9.6,7.7,9.6\r\n              \r\n              c5.4,0,9.7-4.5,9.7-11.2c0-8.4-5.5-14.3-12.2-14.3c-10.9,0-15.3,7.3-15.3,17.8C11.7,37,12.3,42.7,16.7,42.7z" }), h("path", { class: "cor_icone", d: "M36.9,43.2l-1.5,0c-1.2,1.3-3.9,2.2-5.8,2.2c-1.9,0-4.6-0.8-5.7-2.1h-8.3c0,0-4.3-0.6-4.3-8.1v-3.3\r\n              \r\n              c0,0,0-2.6-1.8-4.2c0.3-1.9,0.6-4.9-0.3-7.2c-0.7-1.7-1.8-2.6-3.4-2.8c-0.2,0-0.4,0.2-0.4,0.5c0,0.3,0.1,0.6,0.3,0.6\r\n              \r\n              C7,19,8,19.7,8.5,21.1c0.7,1.9,0.5,4.5,0.3,6.2c-0.4-0.2-0.8-0.3-1.4-0.3c0,0-0.2,0-0.6,0.1c-0.2-1.2-0.8-4.4-2.4-5.6\r\n              \r\n              c-1.1-0.8-2.5-0.5-4,0.9c-0.2,0.2-0.2,0.5-0.1,0.8s0.3,0.4,0.5,0.2c1.3-1.2,2.4-1.5,3.3-0.9c1.3,1,1.9,3.8,2,4.9\r\n              \r\n              c-1.1,0.5-2.7,0.9-2.7,4.7v9.3c0,0-0.2,7.5,7.6,7.5h29.2C40.2,48.7,40.7,43.2,36.9,43.2z" })))))), h("div", { class: `box-titles ${txt_dark} ` }, h("h1", null, this.title_audio_card), h("p", null, this.subtitle_audio_card))))
    ];
  }
  get el() { return getElement(this); }
};

export { audioCard as yduqs_audio_card };
