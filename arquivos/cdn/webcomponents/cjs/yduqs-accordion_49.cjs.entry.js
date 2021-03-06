'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-8cdf533a.js');
const _commonjsHelpers = require('./_commonjsHelpers-f652a1e5.js');

const YduqsAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  // @Event({ eventName: 'toggle' })
  // onToggle: EventEmitter;
  // @Listen('togglepane')
  // onTogglePane(ev) {
  //   const accordion = this.element.children[0];
  //   const open = ev.detail;
  //   const pane = ev.target;
  //   const idx = [].indexOf.call(accordion.children, pane);
  //   this.onToggle.emit({ idx, open });
  //   this._active = open;
  //   this.animate();
  // }
  animate() {
    this.content.style.maxHeight = `${this._contentMaxHeight}px`;
  }
  render() {
    const outlineClass = this.outline ? 'c-accordion--outline' : '';
    const activeClass = this._active ? 'c-accordion--active' : '';
    return (index.h("div", { ref: (el) => (this.content = el), class: `c-accordion c-accordion--collapse ${outlineClass} ${activeClass}` }, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
};

const YduqsAccordionPane = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onClickCollapse = index.createEvent(this, "onClickCollapse", 7);
    this.onToggle = index.createEvent(this, "togglepane", 7);
    this._isOpen = false;
    this.open = false;
  }
  async show() {
    this._isOpen = true;
  }
  async close() {
    this._isOpen = false;
  }
  toggle() {
    this._isOpen ? this.close() : this.show();
    this.onToggle.emit(this._isOpen);
    this.animate();
  }
  async isOpen() {
    return this._isOpen;
  }
  animate() {
    this.content.className = this._isOpen ? 'c-accordion__item c-accordion__item--pane u-fade-in' : 'c-accordion__item c-accordion__item--pane';
  }
  render() {
    const isOpenClass = this._isOpen ? 'c-accordion__control--active' : '';
    return (index.h(index.Host, { class: "c-accordion-pane" }, index.h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-accordion__control ${isOpenClass}`, onClick: ev => {
        this.onClickCollapse.emit(ev);
        this.toggle();
      } }, index.h("div", { class: "c-accordion__title" }, index.h("slot", { name: "c-accordion-header" })), index.h("span", { class: "c-accordion__icon material-icons" }, "expand_more")), index.h("div", { ref: (el) => (this.content = el), "aria-hidden": !this._isOpen, class: "c-accordion__item c-accordion__item--pane" }, index.h("slot", { name: "c-accordion-content" }))));
  }
};

class GreenAudioPlayer {
    constructor(player, options) {
        this.audioPlayer = typeof player === 'string' ? document.querySelector(player) : player;
        const opts = options || {};

        const audioElement = this.audioPlayer.innerHTML;
        this.audioPlayer.classList.add('green-audio-player');
        this.audioPlayer.innerHTML = GreenAudioPlayer.getTemplate() + audioElement;

        this.playPauseBtn = this.audioPlayer.querySelector('.play-pause-btn');
        this.loading = this.audioPlayer.querySelector('.loading');
        this.sliders = this.audioPlayer.querySelectorAll('.slider');
        this.progress = this.audioPlayer.querySelector('.controls__progress');
        this.volumeBtn = this.audioPlayer.querySelector('.volume__button');
        this.volumeControls = this.audioPlayer.querySelector('.volume__controls');
        this.volumeProgress = this.volumeControls.querySelector('.volume__progress');
        this.player = this.audioPlayer.querySelector('audio');
        this.currentTime = this.audioPlayer.querySelector('.controls__current-time');
        this.totalTime = this.audioPlayer.querySelector('.controls__total-time');
        this.speaker = this.audioPlayer.querySelector('.volume__speaker');
        this.draggableClasses = ['pin'];
        this.currentlyDragged = null;
        this.stopOthersOnPlay = opts.stopOthersOnPlay || false;

        this.initEvents();
        this.directionAware();
        this.overcomeIosLimitations();
    }

    static init(options) {
        const players = document.querySelectorAll(options.selector);

        players.forEach(player => {
            new GreenAudioPlayer(player, options);
        });
    }

    static getTemplate() {
        return `
            <div class="loading">
                <div class="loading__spinner"></div>
            </div>
            <div class="play-pause-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
                    <path fill="#566574" fill-rule="evenodd" d="M18 12L0 24V0" class="play-pause-btn__icon"/>
                </svg>
            </div>
    
            <div class="controls">
                <span class="controls__current-time">0:00</span>
                <div class="controls__slider slider" data-direction="horizontal">
                    <div class="controls__progress gap-progress">
                        <div class="pin progress__pin" data-method="rewind"></div>
                    </div>
                </div>
                <span class="controls__total-time">0:00</span>
            </div>
    
            <div class="volume">
                <div class="volume__button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path class="volume__speaker" fill="#566574" fill-rule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"/>
                    </svg>
                </div>
                <div class="volume__controls hidden">
                    <div class="volume__slider slider" data-direction="vertical">
                        <div class="volume__progress gap-progress">
                            <div class="pin volume__pin" data-method="changeVolume"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        `;
    }

    initEvents() {
        const self = this;

        self.audioPlayer.addEventListener('mousedown', (event) => {
            if (self.isDraggable(event.target)) {
                self.currentlyDragged = event.target;
                const handleMethod = self.currentlyDragged.dataset.method;
                const listener = self[handleMethod].bind(self);

                window.addEventListener('mousemove', listener, false);
                window.addEventListener('mouseup', () => {
                    self.currentlyDragged = false;
                    window.removeEventListener('mousemove', listener, false);
                }, false);
            }
        });

        // for mobile touches
        self.audioPlayer.addEventListener('touchstart', (event) => {
            if (self.isDraggable(event.target)) {
                [self.currentlyDragged] = event.targetTouches;

                const handleMethod = self.currentlyDragged.target.dataset.method;
                const listener = self[handleMethod].bind(self);

                window.addEventListener('touchmove', listener, false);
                window.addEventListener('touchend', () => {
                    self.currentlyDragged = false;
                    window.removeEventListener('touchmove', listener, false);
                }, false);

                event.preventDefault();
            }
        });

        this.playPauseBtn.addEventListener('click', this.togglePlay.bind(self));
        this.player.addEventListener('timeupdate', this.updateProgress.bind(self));
        this.player.addEventListener('volumechange', this.updateVolume.bind(self));
        this.player.addEventListener('loadedmetadata', () => {
            this.totalTime.textContent = GreenAudioPlayer.formatTime(self.player.duration);
        });

        this.player.addEventListener('seeking', this.showLoadingIndicator.bind(self));
        this.player.addEventListener('seeked', this.hideLoadingIndicator.bind(self));
        this.player.addEventListener('canplay', this.hideLoadingIndicator.bind(self));
        this.player.addEventListener('ended', () => {
            GreenAudioPlayer.pausePlayer(self.player);
            self.player.currentTime = 0;
        });

        this.volumeBtn.addEventListener('click', () => {
            self.volumeBtn.classList.toggle('open');
            self.volumeControls.classList.toggle('hidden');
        });

        window.addEventListener('resize', self.directionAware.bind(self));
        window.addEventListener('scroll', self.directionAware.bind(self));

        for (let i = 0; i < this.sliders.length; i++) {
            const pin = this.sliders[i].querySelector('.pin');
            this.sliders[i].addEventListener('click', self[pin.dataset.method].bind(self));
        }
    }

    overcomeIosLimitations() {
        const self = this;
        if (window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iPhone/i)) {
            // iOS does not support "canplay" event
            this.player.addEventListener('loadedmetadata', this.hideLoadingIndicator.bind(self));
            // iOS does not let "volume" property be set programmatically
            this.audioPlayer.querySelector('.volume').style.display = 'none';
            this.audioPlayer.querySelector('.controls').style.marginRight = '0';
        }
    }

    isDraggable(el) {
        let canDrag = false;

        if (typeof el.classList === 'undefined') return false; // fix for IE 11 not supporting classList on SVG elements

        for (let i = 0; i < this.draggableClasses.length; i++) {
            if (el.classList.contains(this.draggableClasses[i])) {
                canDrag = true;
            }
        }

        return canDrag;
    }

    inRange(event) {
        const touch = ('touches' in event); // instanceof TouchEvent may also be used
        const rangeBox = this.getRangeBox(event);
        const sliderPositionAndDimensions = rangeBox.getBoundingClientRect();
        const { dataset: { direction } } = rangeBox;
        let min = null;
        let max = null;

        if (direction === 'horizontal') {
            min = sliderPositionAndDimensions.x;
            max = min + sliderPositionAndDimensions.width;
            const clientX = touch ? event.touches[0].clientX : event.clientX;
            if (clientX < min || clientX > max) return false;
        } else {
            min = sliderPositionAndDimensions.top;
            max = min + sliderPositionAndDimensions.height;
            const clientY = touch ? event.touches[0].clientY : event.clientY;
            if (clientY < min || clientY > max) return false;
        }
        return true;
    }

    updateProgress() {
        const current = this.player.currentTime;
        const percent = (current / this.player.duration) * 100;
        this.progress.style.width = `${percent}%`;

        this.currentTime.textContent = GreenAudioPlayer.formatTime(current);
    }

    updateVolume() {
        this.volumeProgress.style.height = `${this.player.volume * 100}%`;
        if (this.player.volume >= 0.5) {
            this.speaker.attributes.d.value = 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z';
        } else if (this.player.volume < 0.5 && this.player.volume > 0.05) {
            this.speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z';
        } else if (this.player.volume <= 0.05) {
            this.speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667';
        }
    }

    getRangeBox(event) {
        let rangeBox = event.target;
        const el = this.currentlyDragged;
        if (event.type === 'click' && this.isDraggable(event.target)) {
            rangeBox = event.target.parentElement.parentElement;
        }
        if (event.type === 'mousemove') {
            rangeBox = el.parentElement.parentElement;
        }
        if (event.type === 'touchmove') {
            rangeBox = el.target.parentElement.parentElement;
        }
        return rangeBox;
    }


    getCoefficient(event) {
        const touch = ('touches' in event); // instanceof TouchEvent may also be used

        const slider = this.getRangeBox(event);
        const sliderPositionAndDimensions = slider.getBoundingClientRect();
        let K = 0;
        if (slider.dataset.direction === 'horizontal') {
            // if event is touch
            const clientX = touch ? event.touches[0].clientX : event.clientX;
            const offsetX = clientX - sliderPositionAndDimensions.left;
            const { width } = sliderPositionAndDimensions;
            K = offsetX / width;
        } else if (slider.dataset.direction === 'vertical') {
            const { height } = sliderPositionAndDimensions;
            const clientY = touch ? event.touches[0].clientY : event.clientY;
            const offsetY = clientY - sliderPositionAndDimensions.top;
            K = 1 - offsetY / height;
        }
        return K;
    }

    rewind(event) {
        if (this.inRange(event)) {
            this.player.currentTime = this.player.duration * this.getCoefficient(event);
        }
    }

    changeVolume(event) {
        if (this.inRange(event)) {
            this.player.volume = Math.round(this.getCoefficient(event) * 10) / 10;
        }
    }

    static formatTime(time) {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${(sec < 10) ? `0${sec}` : sec}`;
    }

    togglePlay() {
        if (this.player.paused) {
            if (this.stopOthersOnPlay) {
                GreenAudioPlayer.stopOtherPlayers();
            }
            GreenAudioPlayer.playPlayer(this.player);
        } else {
            GreenAudioPlayer.pausePlayer(this.player);
        }
    }

    static pausePlayer(player) {
        const playPauseButton = player.parentElement.querySelector('.play-pause-btn__icon');
        playPauseButton.attributes.d.value = 'M18 12L0 24V0';
        player.pause();
    }

    static playPlayer(player) {
        const playPauseButton = player.parentElement.querySelector('.play-pause-btn__icon');
        playPauseButton.attributes.d.value = 'M0 0h6v24H0zM12 0h6v24h-6z';
        player.play();
    }

    static stopOtherPlayers() {
        const players = document.querySelectorAll('.green-audio-player audio');

        for (let i = 0; i < players.length; i++) {
            GreenAudioPlayer.pausePlayer(players[i]);
        }
    }

    showLoadingIndicator() {
        this.playPauseBtn.style.display = 'none';
        this.loading.style.display = 'block';
    }

    hideLoadingIndicator() {
        this.playPauseBtn.style.display = 'block';
        this.loading.style.display = 'none';
    }

    directionAware() {
        this.volumeControls.classList.remove('top', 'middle', 'bottom');

        if (window.innerHeight < 250) {
            this.volumeControls.classList.add('middle');
        } else if (this.audioPlayer.getBoundingClientRect().top < 180) {
            this.volumeControls.classList.add('bottom');
        } else {
            this.volumeControls.classList.add('top');
        }
    }
}

const main = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': GreenAudioPlayer
});

const require$$0 = /*@__PURE__*/_commonjsHelpers.getAugmentedNamespace(main);

var greenAudioPlayer = require$$0.default;

const YduqsAudioPlayer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.updateRate = index.createEvent(this, "updateRate", 7);
    this.src = '';
    this.audio_id = '';
    this._rate = 1;
    this.rate = 1;
    this.settings = {
      speedList: [0.5, 1, 1.5]
    };
    this._speedPosition = 1;
  }
  async initialize(config) {
    this.settings = config;
    this._speedPosition = this.settings.speedList.findIndex((n) => n === 1);
    this._rate = this.settings.speedList[this._speedPosition];
  }
  playbackRateHandler(newRate) {
    this._rate = newRate;
    this._audioObj.playbackRate = this._rate;
  }
  componentDidLoad() {
    let playerSettings = {
      selector: `div#audioPlayer${this.audio_id}`,
      showTooltips: true,
      showDownloadButton: true,
      stopOthersOnPlay: true,
      enableKeystrokes: true
    };
    greenAudioPlayer.init(playerSettings);
    if (this.dark) {
      this._audioObj = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark .c-audio__object`);
      this.createSpeedControl();
    }
    else {
      this._audioObj = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player .c-audio__object`);
      this.createSpeedControl();
    }
  }
  componentWillLoad() {
    if (this.dark) {
      this.coloraudio = 'c-audio-player-dark';
    }
    else {
      this.coloraudio = 'c-audio-player';
    }
  }
  updatePlaybackRate() {
    if (!this.settings || !this.settings.speedList) {
      return;
    }
    this._speedPosition < (this.settings.speedList.length - 1) ? this._speedPosition++ : this._speedPosition = 0;
    this._rate = this.settings.speedList[this._speedPosition];
    if (this.dark) {
      this._audioObj = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark .c-audio__object`);
      this._audioObj.playbackRate = this._rate;
      let speedDisplay = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark .speed .speed__display`);
      speedDisplay.innerHTML = `${this._rate}x`;
    }
    else {
      this._audioObj = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player .c-audio__object`);
      this._audioObj.playbackRate = this._rate;
      let speedDisplay = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player .speed .speed__display`);
      speedDisplay.innerHTML = `${this._rate}x`;
    }
  }
  createSpeedControl() {
    if (this.dark) {
      let controlContainer = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player-dark`);
      const speedCtrlContainer = document.createElement('div');
      const speedCtrl = document.createElement('a');
      const speedDisplay = document.createElement('span');
      speedCtrlContainer.className = 'speed';
      speedCtrl.className = 'speed__controls material-icons';
      speedCtrl.innerHTML = 'speed';
      speedCtrl.setAttribute('role', 'button');
      speedDisplay.className = 'speed__display';
      speedDisplay.id = 'speed__display';
      speedDisplay.innerHTML = `${this._rate}x`;
      controlContainer.insertBefore(speedCtrlContainer, controlContainer.children[3]);
      speedCtrlContainer.append(speedCtrl);
      speedCtrlContainer.append(speedDisplay);
      speedCtrl.addEventListener('click', () => this.updatePlaybackRate());
    }
    else {
      let controlContainer = document.querySelector(`#audioPlayer${this.audio_id}.c-audio-player`);
      const speedCtrlContainer = document.createElement('div');
      const speedCtrl = document.createElement('a');
      const speedDisplay = document.createElement('span');
      speedCtrlContainer.className = 'speed';
      speedCtrl.className = 'speed__controls material-icons';
      speedCtrl.innerHTML = 'speed';
      speedCtrl.setAttribute('role', 'button');
      speedDisplay.className = 'speed__display';
      speedDisplay.id = 'speed__display';
      speedDisplay.innerHTML = `${this._rate}x`;
      controlContainer.insertBefore(speedCtrlContainer, controlContainer.children[3]);
      speedCtrlContainer.append(speedCtrl);
      speedCtrlContainer.append(speedDisplay);
      speedCtrl.addEventListener('click', () => this.updatePlaybackRate());
    }
  }
  render() {
    const shortPlayerClass = this.shortdisplay ? `c-audio-player-short` : '';
    let audioScript = `
            window.addEventListener('DOMContentLoaded', function () {
                var audioPlayer${this.audio_id} = document.querySelector('#audioPlayer${this.audio_id}');
                audioPlayer${this.audio_id}.initialize({ "speedList": [0.5, 0.6, 0.7, 1, 1.5, 2] });
            });
        `;
    return (index.h("div", { id: `audioPlayer` + this.audio_id, class: `${this.coloraudio} ${shortPlayerClass}` }, index.h("audio", { class: "c-audio__object", preload: "metadata" }, index.h("source", { src: this.src, type: "audio/mpeg" }, "O seu navegador n\u00E3o suporta o elemento ", index.h("code", null, "audio"), ".")), index.h("script", null, audioScript)));
  }
  static get watchers() { return {
    "rate": ["playbackRateHandler"]
  }; }
};

const YduqsCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, { class: `c-card ${colorMode} ${equalHeight} ${pSmall}` }, index.h("slot", null)));
  }
};

const YduqsCardBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "c-card__body" }, index.h("slot", null)));
  }
};

const YduqsCardComparativo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dark = false;
    this.outline = false;
    this.icon = '';
    this.rotate_mobile = false;
  }
  render() {
    const colorMode = this.dark ? 'c-card-comparativo--dark' : '';
    const outlineClass = this.outline ? 'c-card-destaque--outline' : '';
    const rotate = this.rotate_mobile ? 'rotate' : '';
    return (index.h(index.Host, { class: `c-card-comparativo ${colorMode} ${outlineClass}` }, index.h("slot", { name: "item-a" }), index.h("div", { class: "c-card-comparativo__divider" }, index.h("div", { class: "c-card-comparativo__bar" }), index.h("div", { class: "c-card-comparativo__icon-container" }, index.h("span", { class: `c-card-comparativo__icon ${rotate} material-icons` }, this.icon ? this.icon : 'close'))), index.h("slot", { name: "item-b" })));
  }
};

const YduqsCardComparativoBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-card-comparativo__body" }, index.h("slot", null)));
  }
};

const YduqsCardComparativoHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-card-comparativo__header" }, index.h("slot", null)));
  }
};

const YduqsCardComparativoItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-card-comparativo__item" }, index.h("slot", null)));
  }
};

const YduqsCardDestaque = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.grade = 1;
    this.outline = false;
    this.icon = '';
  }
  render() {
    const gradeClass = `c-card-destaque--grade-${this.grade}`;
    const gradeIconClass = `c-card-destaque--grade-icon-${this.grade}`;
    const outlineClass = this.outline ? 'c-card-destaque--outline' : 'c-card-destaque--borderless';
    return (index.h(index.Host, { class: `c-card-destaque ${gradeIconClass}` }, index.h("div", { class: "c-card-destaque__icon-container" }, index.h("span", { class: "c-card-destaque__icon material-icons" }, this.icon)), index.h("div", { class: `c-card-destaque__container ${gradeClass} ${outlineClass}` }, index.h("slot", null))));
  }
};

const YduqsCardDestaqueBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "c-card-destaque__body" }, index.h("slot", null)));
  }
};

const YduqsCardDestaqueHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("header", { class: "c-card-destaque__header" }, index.h("slot", null)));
  }
};

const YduqsCardHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("header", { class: "c-card__header" }, index.h("slot", null)));
  }
};

const CardHorizontal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
  }
  onResize(event) {
    event.stopPropagation();
    this._isMobile(event.target);
  }
  _isMobile(windowObj) {
    const wWidth = windowObj.innerWidth;
    this.mobile = (wWidth < 576);
    //this.getImage()
  }
  componentWillLoad() {
    this._isMobile(window);
    const htmlTagGallery = document.querySelector('html');
    const htmlLanguageGallery = htmlTagGallery.getAttribute('lang');
    if (htmlLanguageGallery === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageGallery === 'es') {
      this.spanish = true;
    }
  }
  /*@Method() async  getImage(){
      
      if(window.matchMedia("(max-width: 500px)")){
          this.isMobile = 'https://dev.azure.com/Ensine-Me/ebf521da-0864-4430-bdce-ca510cca7fa3/_apis/wit/attachments/8e04a799-27af-404c-a9aa-7aff85ca60e8?fileName=image.png';
          console.log('entrou no if');
      }else{
          
          this.isMobile = 'https://dev.azure.com/Ensine-Me/ebf521da-0864-4430-bdce-ca510cca7fa3/_apis/wit/attachments/9104bbc1-c21c-438c-875a-eabbd605fcc9?fileName=image.png';
          console.log('entrou no else')
      }
  }*/
  render() {
    let imageDevice = this.mobile ? 'img/mobile.png' : 'img/desktop.png';
    if (this.isquestion) {
      return (index.h("div", { class: "c-card-horizontal" }, index.h("header", null, index.h("div", { class: "card-icon" }, index.h("span", { class: "material-icons" }, this.card_icon)), index.h("div", { class: 'card-content row align-items-center justify-content-center g-0' }, index.h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, !this.isquestion ?
        index.h("div", { class: "card-image", style: { "background-image": "url('" + this.card_image + "')" } }, index.h("img", { src: this.card_image, alt: this.image_alt, title: this.image_title, loading: "lazy" }))
        :
          index.h("div", { class: "card-image", style: { "background-image": "url('" + imageDevice + "')" } }, index.h("img", { src: imageDevice, alt: "Aluno respondendo as quest\u00F5es", title: "Imagem Padr\u00E3o", loading: "lazy" }))), index.h("div", { class: 'col-sm-12 col-md-7 col-lg-7' }, index.h("div", { class: "card-header-text" }, index.h("h1", { class: "c-heading" }, this.english ? 'You are very close to reaching your goals' : this.spanish ? 'Falta poco para lograr tus objetivos' : 'Falta pouco para atingir seus objetivos ', " "), index.h("h2", { class: "c-heading" }, this.english ? 'Let???s practice!' : this.spanish ? 'Vamos a practicar algunos conceptos' : 'Vamos praticar alguns conceitos ', " ")))))));
    }
    else {
      return (index.h("div", { class: "c-card-horizontal" }, index.h("header", null, index.h("div", { class: "card-icon" }, index.h("span", { class: "material-icons" }, this.card_icon)), index.h("div", { class: 'card-content row align-items-center justify-content-center g-0' }, index.h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, !this.isquestion ?
        index.h("div", { class: "card-image", style: { "background-image": "url('" + this.card_image + "')" } }, index.h("img", { src: this.card_image, alt: this.image_alt, title: this.image_title, loading: "lazy" }))
        :
          index.h("div", { class: "card-image", style: { "background-image": "url('" + imageDevice + "')" } }, index.h("img", { src: imageDevice, alt: "Aluno respondendo as quest\u00F5es", title: "Imagem Padr\u00E3o", loading: "lazy" }))), index.h("div", { class: 'col-sm-12 col-md-7 col-lg-7' }, index.h("div", { class: "card-header-text" }, index.h("h1", { class: "c-heading" }, index.h("slot", { name: "card-heading" })), index.h("h2", { class: "c-heading" }, index.h("slot", { name: "card-subheading" }))))))));
    }
  }
};

const YduqsCardIntro = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = '';
  }
  render() {
    return (index.h(index.Host, { class: `c-card-intro` }, index.h("div", { class: "c-card-intro__title-container" }, index.h("h3", { class: "c-heading u-title-small" }, this.text)), index.h("div", { class: `c-card-intro__container c-card-intro--outline` }, index.h("div", { class: 'row align-items-center justify-content-center' }, index.h("div", { class: 'col-12 col-md-10 col-lg-8' }, index.h("slot", null))))));
  }
};

const YduqsCardModulo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onChange = index.createEvent(this, "changed", 7);
    this.progress = 100;
  }
  onChangeBar(ev) {
    // const progress = this.element.children[3];
    const progress = this.element.querySelector('yduqs-progress-bar');
    const value = ev.detail;
    const bar = ev.target;
    const idx = [].indexOf.call(progress.children, bar);
    this.onChange.emit(Object.assign({ idx }, value));
    this.completed = (value.val === 100) ? true : false;
    this.updateCardStatus();
  }
  updateCardStatus() {
    const button = this.element.children[2].children[0];
    if (this.completed) {
      button.className = 'c-button c-button--ghost u-text--small';
    }
    else {
      button.className = 'c-button c-button--primary u-text--small';
    }
  }
  render() {
    return (index.h(index.Host, { class: `c-card-modulo` }, index.h("slot", null), index.h("div", { class: "c-card-modulo__progress" }, index.h("yduqs-progress-bar", { value: this.progress, semirounded: true }))));
  }
  get element() { return index.getElement(this); }
};

const YduqsCardModuloBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-card-modulo__body" }, index.h("slot", null)));
  }
};

const YduqsCardModuloFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-card-modulo__footer" }, index.h("slot", null)));
  }
};

const YduqsCardModuloHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-card-modulo__header" }, index.h("slot", null)));
  }
};

const YduqsCardSelecionavel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onSelect = index.createEvent(this, "selected", 7);
  }
  onSelectItem(ev) {
    const cardSelecionavel = this.element.children[0];
    const clicked = ev.detail;
    const item = ev.target;
    const idx = [].indexOf.call(cardSelecionavel.children, item);
    this.onSelect.emit({ idx, clicked });
  }
  render() {
    return (index.h(index.Host, { class: `c-card-selecionavel` }, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
};

const YduqsCardSelecionavelItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onSelectItem = index.createEvent(this, "onselect", 7);
    this._isSelected = false;
    this.selected = false;
    this.optionid = '';
    this.disabled = false;
  }
  componentWillLoad() {
    this._isSelected = this.selected;
  }
  async selectItem() {
    this._isSelected = true;
  }
  async unselectItem() {
    this._isSelected = false;
  }
  select() {
    this._isSelected ? this.unselectItem() : this.selectItem();
    this.onSelectItem.emit({ optionId: this.optionid, isSelected: this._isSelected });
  }
  async isSelected() {
    return this._isSelected;
  }
  render() {
    const isSelectedClass = this._isSelected ? 'c-card-selecionavel__control--active' : '';
    const opId = `card-selecionavel-${this.optionid}`;
    return (index.h(index.Host, { class: "c-card-selecionavel__item", id: `${opId}` }, index.h("button", { disabled: this.disabled, role: "heading", class: `c-card-selecionavel__control ${isSelectedClass}`, onClick: () => this.select() }, index.h("span", { class: "c-card-selecionavel__label" }, this.optionid), index.h("div", { class: "c-card-selecionavel__content" }, index.h("slot", null), index.h("div", { class: "c-card-selecionavel__icon-container" }, index.h("span", { class: `c-card-selecionavel__icon material-icons` }, this._isSelected ? 'done' : ''))))));
  }
};

const PlaylistVideo$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = false;
  }
  render() {
    const styleBorder = this.border_bottom ? 'border-bottom' : '';
    const video_active = this.active ? 'active' : '';
    return (index.h("div", { class: "c-card-video " + styleBorder }, index.h("div", { class: "c-card-video__thumb " + video_active }, index.h("yduqs-image", { src: this.thumb_video, alt: "" }), index.h("div", { class: "c-card-video__thumb_play" }, index.h("span", { class: "material-icons" }, "play_arrow"))), index.h("div", { class: "c-card-video__description" }, index.h("h2", { class: "c-heading", innerHTML: this.title_video }), index.h("p", { class: "c-paragraph", innerHTML: this.paragraph }), index.h("div", { class: "c-card-video__description_time" }, this.time))));
  }
};

const Textarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.teacher_avatar = 'false';
    this.teacher_link = 'false';
    this.collaboration_text = 'Colabora????o';
    this.cover_preparation = false;
    this.names_prof = [];
    this.names_clb = [];
    this.professores = [];
    this.avatar = [];
    this.link = [];
    this.colaboradores_nome = [];
    this.english = false;
    this.spanish = false;
    this.title_size = 'u-title-super line-height-md';
    this.lg_title = false;
    this.xl_title = false;
    this.template_anitta = false;
    this.template_ibmec = false;
  }
  async curadores() {
    let professores = this.professores;
    professores = this.teacher.split(",");
    let avatar = this.avatar;
    avatar = this.teacher_avatar.split(",");
    let link = this.link;
    link = this.teacher_link.split(",");
    for (let i = 0; i < professores.length; i++) {
      this.names_prof.push({ name: professores[i], img: avatar[i], link: link[i] });
    }
  }
  async colaboradores() {
    let colaboradores_nome = this.colaboradores_nome;
    colaboradores_nome = this.contributors.split(",");
    for (let i = 0; i < colaboradores_nome.length; i++) {
      this.names_clb.push({ name: colaboradores_nome[i] });
    }
  }
  componentWillLoad() {
    const htmlTagCover = document.querySelector('html');
    const htmlLanguageCover = htmlTagCover.getAttribute('lang');
    if (htmlLanguageCover === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageCover === 'es') {
      this.spanish = true;
    }
    var titleSize = this.title_cover.length;
    if (titleSize > 48 && titleSize < 96) {
      this.lg_title = true;
      this.xl_title = false;
    }
    else if (titleSize >= 96) {
      this.lg_title = false;
      this.xl_title = true;
    }
  }
  componentWillRender() {
    this.curadores();
    this.colaboradores();
    //console.log(teacher_link);
  }
  render() {
    let backgroundText;
    let backgroundTextMobile;
    let refTextBgMobile = this.background_text_mobile;
    let refTextBg = this.background_text;
    if (this.background_text && this.background_text !== 'false') {
      if (this.background_text == refTextBg && (!this.background_text_mobile || this.background_text_mobile == "false")) {
        backgroundText = `theme-text-bg-${refTextBg}`;
      }
      else if (this.background_text_mobile == refTextBgMobile && this.background_text == refTextBg) {
        backgroundText = `theme-text-bg-${refTextBg}`;
        backgroundTextMobile = `theme-text-bg-black-${refTextBgMobile}`;
      }
    }
    else {
      if (this.background_text == 'false' && (!this.background_text_mobile || this.background_text_mobile == "false")) {
        backgroundText = "";
        backgroundTextMobile = "";
      }
      else if (this.background_text == 'false' && this.background_text_mobile == refTextBgMobile) {
        backgroundText = "";
        backgroundTextMobile = `theme-text-bg-black-${refTextBgMobile}`;
      }
    }
    return (index.h("div", { class: `c-cover` }, index.h("div", { class: "c-cover-bg c-cover-height", title: `${this.background_img_title}`, style: { "background-image": "url('" + this.background_img + "')" } }, index.h("div", { class: "container c-cover-height" }, index.h("div", { class: 'row align-items-center align-items-sm-center align-items-md-center align-items-lg-center justify-content-start c-cover-height' }, index.h("div", { class: `col-12 col-sm-12 box-cover ${this.xl_title ? 'xl-title col-md-10 col-lg-8' : this.lg_title ? 'lg-titles col-md-9 col-lg-7' : ' col-md-8 col-lg-6'}` }, index.h("div", { class: "theme-details" }, index.h("h1", null, index.h("span", { class: `${backgroundText} ${backgroundTextMobile}`, innerHTML: this.title_cover })), this.teacher != 'false' ? // Se tiver Professor preenchido
      index.h("div", { class: "box-professor" }, this.names_prof.map((item) => index.h("div", { class: "avatar-professor" }, index.h("div", { class: `avatar-professor-img ${!this.teacher_avatar || this.avatar.length < this.professores.length || this.names_prof[0].img == "false" ? 'without-avatar' : ''}`, style: { "background-image": "url('" + item.img + "')" } }), index.h("h4", null, this.link.length == this.names_prof.length && this.names_prof[0].link != "false" ?
        (index.h("a", { href: `${item.link}`, target: "_blank" }, index.h("span", { class: `avatar-professor ${
          // Se tiver background_text
          this.background_text ?
            // Se tiver teacher_avatar
            this.teacher_avatar ?
              // Se tiver background_text e teacher_avatar
              'theme_text_bg_with-avatar'
              // Se tiver background_text e n??o tiver teacher_avatar
              : 'theme_text_bg_without-avatar'
            // Se n??o tiver background_text
            : this.teacher_avatar ?
              // Se n??o tiver background_text e tiver teacher_avatar
              'theme_text_bg_without_bg'
              // Se n??o tiver background_text e n??o tiver teacher_avatar
              : 'theme_without_avatar_without_bg'}`, innerHTML: item.name })))
        :
          (index.h("span", { class: `${
            // Se tiver background_text
            this.background_text ?
              // Se tiver background_text
              this.names_prof[0].img != "false" ?
                // Se o professor 1 tiver imagem
                'theme_text_bg_with-avatar'
                // Se o professor 1 n??o tiver imagem
                : 'theme_text_bg_without-avatar'
              // Se n??o tiver background_text
              : this.teacher_avatar ?
                // Se tiver teacher_avatar
                'theme_text_bg_without_bg'
                // Se n??o tiver teacher_avatar
                : 'theme_without_avatar_without_bg'}`, innerHTML: item.name }))))))
      : // Se n??o tiver Professor preenchido
        '', index.h("div", { class: `${this.names_clb.length >= 1 && this.names_clb[0].name != "false" && this.contributors ? '' : 'without-clb'}` }, index.h("h4", { class: "mb-1 mt-4 collaboration-title" }, this.english ? 'Collaboration' : this.spanish ? 'Colaboraci??n' : 'Colabora????o', " "), index.h("div", { class: "box-clb" }, this.names_clb.map((item) => index.h("div", { class: "ml-5 avatar-professor " }, index.h("h4", null, index.h("span", { class: `${this.background_text ? 'theme_text_bg_colaboradores' : 'theme_text_bg_colaboradores_without_bg'}`, innerHTML: item.name }))))))))))), index.h("div", { class: "container theme-definition-wrapper" }, index.h("div", { class: 'row align-items-center justify-content-center' }, index.h("div", { class: 'col-12' }, index.h("div", { class: "theme-definition" }, index.h("div", { class: 'row align-items-baseline justify-content-center' }, index.h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' }, !this.template_anitta && !this.template_ibmec && index.h("h6", { class: "c-heading u-medium" }, this.english ? 'Description' : this.spanish ? 'Descripci??n' : 'Descri????o'), this.template_anitta && index.h("h6", { class: "c-heading u-medium" }, "Para come\u00E7ar"), this.template_ibmec && index.h("h6", { class: "c-heading u-medium" }, "Apresenta\u00E7\u00E3o")), index.h("div", { class: 'col-12 col-sm-12 col-md-9 col-lg-9' }, index.h("slot", { name: "yduqs-cover-definition" }))), index.h("div", { class: 'row align-items-baseline justify-content-center' }, index.h("div", { class: 'col-sm-12 col-md-3 col-lg-3' }, this.template_anitta ?
      index.h("h6", { class: "c-heading u-medium" }, "Qual a ideia?")
      :
        index.h("h6", { class: "c-heading u-medium" }, this.english ? 'Purpose' : this.spanish ? 'Prop??sito' : 'Prop??sito')), index.h("div", { class: 'col-sm-12 col-md-9 col-lg-9' }, index.h("slot", { name: "yduqs-cover-purpose" }))), this.cover_preparation ?
      index.h("div", { class: 'row align-items-baseline justify-content-center' }, index.h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' }, this.template_anitta ?
        index.h("h6", { class: "c-heading u-medium" }, "Prepara")
        :
          index.h("h6", { class: "c-heading u-medium" }, this.english ? 'Preparation' : this.spanish ? 'Preparaci??n' : 'Prepara????o')), index.h("div", { class: 'col-sm-12 col-md-9 col-lg-9' }, index.h("slot", { name: 'yduqs-cover-preparation-text' })))
      : ''))))));
  }
};

const DestaqueTexto = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.size = 'medium';
  }
  componentWillLoad() {
    this._getTextSize();
  }
  _getTextSize() {
    if (this.size === 'small')
      return 'small';
    if (this.size === 'medium')
      return 'medium';
    return 'big';
  }
  render() {
    return (index.h("div", { class: "c-texto-destaque" }, index.h("div", { class: "c-texto-destaque__border" }), index.h("div", { class: `c-texto-destaque__content c-texto-destaque__content--${this._getTextSize()}` }, index.h("slot", null))));
  }
};

const Footer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
    this.template_anitta = false;
    this.hide_pagination = false;
  }
  componentWillLoad() {
    const htmlTagFooter = document.querySelector('html');
    const htmlLanguageFooter = htmlTagFooter.getAttribute('lang');
    if (htmlLanguageFooter === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageFooter === 'es') {
      this.spanish = true;
    }
  }
  componentDidRender() {
    let hasLoader = document.querySelector('yduqs-loader');
    if (hasLoader) {
      let showScroolBody = document.querySelector('body');
      let showHeader = document.querySelector('header');
      let showMain = document.querySelector('main');
      let showFooter = document.querySelector('footer');
      let removeLoader = document.querySelector('yduqs-loader');
      setTimeout(() => {
        showScroolBody.style.overflowY = 'initial';
        showHeader.style.overflow = 'initial';
        showMain.style.overflow = 'initial';
        showFooter.style.overflow = 'initial';
        showHeader.style.opacity = '1';
        showMain.style.opacity = '1';
        showFooter.style.opacity = '1';
        removeLoader.style.opacity = '0';
        removeLoader.remove();
      }, 8000);
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "c-footer-bgColor" }, index.h("div", { class: "container" }, this.template_anitta ?
      index.h("yduqs-title", { topic_title: 'Backstage' })
      :
        index.h("yduqs-title", { topic_title: this.english ? 'References' : this.spanish ? 'Referencias' : 'Refer??ncias' }), index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: "col-12 col-md-10 col-lg-8" }, index.h("slot", { name: "itens-referencia" }))), this.template_anitta ?
      index.h("yduqs-title", { topic_title: 'Explore +' })
      :
        index.h("yduqs-title", { topic_title: this.english ? 'Go Further' : this.spanish ? 'Explora +' : 'Explore +' }), index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: "col-12 col-md-10 col-lg-8" }, index.h("slot", { name: "itens-exploremais" })))), index.h("div", { class: "c-footer-border mt-5 py-3" }, index.h("div", { class: "container" }, index.h("div", { class: "row" }, index.h("div", { class: "d-flex justify-content-center align-items-center" }, index.h("div", null, index.h("a", { href: `javascript:${this.hrefbtnprint}`, class: `c-button ${!this.btnimprimir ? 'disableText' : ''}` }, " ", index.h("i", { class: "material-icons" }, "picture_as_pdf"), "  ", index.h("span", { class: "txt-btnFooter" }, this.english ? 'Download material' : this.spanish ? 'Descargar el contenido' : 'Baixar conte??do'), " "))))))), !this.hide_pagination && index.h("yduqs-pager", { id: "pager" })));
  }
};

const GalleryVideo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.module_number = 1;
    this.english = false;
    this.spanish = false;
  }
  async initialize(config) {
    this.settings = config;
  }
  componentWillLoad() {
    const htmlTagGallery = document.querySelector('html');
    const htmlLanguageGallery = htmlTagGallery.getAttribute('lang');
    if (htmlLanguageGallery === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageGallery === 'es') {
      this.spanish = true;
    }
  }
  render() {
    return (index.h("div", { class: "c-gallery-video" }, index.h("div", { class: "c-gallery-video__header" }, index.h("h5", null, this.english ? 'SECTION' : this.spanish ? 'M??DULO' : 'M??DULO', " ", this.module_number), index.h("h1", null, this.title_gallery)), index.h("div", { class: "c-gallery-video__content" }, index.h("div", { class: "c-gallery-video__content_videos" }, index.h("div", { class: "c-gallery-video__content_videos_video" }, index.h("yduqs-video-player", { src: "", videoId: "1", width: "", height: "" })), index.h("div", { class: "c-gallery-video__content_videos_description" }, index.h("h3", null, this.title_video, " "), index.h("p", { class: "c-gallery-video__content_videos_description_large" }, this.paragraph_video))), index.h("div", { class: "c-gallery-video__content_playlist" }, index.h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number })))));
  }
};

const YduqsImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.covered = false;
    this._iscovered = false;
  }
  handleCover() {
    this.coverChange();
  }
  componentWillLoad() {
    this._iscovered = this.covered;
  }
  coverChange() {
    this.covered ? this._iscovered = !this._iscovered : this._iscovered = false;
  }
  render() {
    return (index.h("div", { style: { width: `${this.width}`, height: `${this.height}` }, class: { 'c-image': true, 'covered': this._iscovered }, onClick: () => this.coverChange() }, this.covered ?
      index.h("div", { class: { 'c-image__capa': true } }, index.h("svg", { width: "54", height: "54", viewBox: "0 0 54 54", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M27 14.625C33.21 14.625 38.25 19.665 38.25 25.875C38.25 27.0225 38.025 28.125 37.71 29.16L44.595 36.045C47.7225 33.2775 50.1975 29.8125 51.75 25.8525C47.8575 15.9975 38.25 9.00003 27 9.00003C24.1425 9.00003 21.3975 9.45003 18.81 10.2825L23.6925 15.165C24.75 14.85 25.8525 14.625 27 14.625ZM6.0975 7.11003C5.22 7.98753 5.22 9.40503 6.0975 10.2825L10.53 14.715C6.885 17.6175 3.9825 21.4425 2.25 25.875C6.1425 35.7525 15.75 42.75 27 42.75C30.42 42.75 33.6825 42.075 36.6975 40.905L42.8175 47.025C43.695 47.9025 45.1125 47.9025 45.99 47.025C46.8675 46.1475 46.8675 44.73 45.99 43.8525L9.2925 7.11003C8.415 6.23253 6.975 6.23253 6.0975 7.11003ZM27 37.125C20.79 37.125 15.75 32.085 15.75 25.875C15.75 24.1425 16.155 22.5 16.8525 21.06L20.385 24.5925C20.3175 24.9975 20.25 25.425 20.25 25.875C20.25 29.61 23.265 32.625 27 32.625C27.45 32.625 27.855 32.5575 28.2825 32.4675L31.815 36C30.3525 36.72 28.7325 37.125 27 37.125ZM33.6825 25.1325C33.345 21.9825 30.87 19.53 27.7425 19.1925L33.6825 25.1325Z", fill: "white" })), index.h("p", { class: "c-image__text" }, "Conte\u00FAdo sens\u00EDvel ", index.h("br", null), "Clique na imagem para visualiz\u00E1-la"))
      : '', index.h("img", { class: "o-image", alt: this.alt, title: this.img_title, src: this.src, loading: "lazy" })));
  }
  static get watchers() { return {
    "covered": ["handleCover"]
  }; }
};

const mobileBreakpoint = 578;
const YduqsMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onChangeMenuData = index.createEvent(this, "changemenudata", 7);
    this.onClickMenuItem = index.createEvent(this, "clickmenuitem", 7);
    this.onClickMenuTitle = index.createEvent(this, "onClickMenuTitle", 7);
    this._isMobile = window.innerWidth < mobileBreakpoint;
    this._isOpen = false;
    this._isOpenGallery = false;
    this._isActive = false;
    this._animate = false;
    this._activeIndex = 0;
    this._videoModule = 1;
    this.english = false;
    this.spanish = false;
    this.hide_search = false;
  }
  handleWindowResize() {
    const isMobileDevice = window.innerWidth < mobileBreakpoint;
    if (isMobileDevice && !this._isMobile) {
      this._isMobile = true;
    }
    else if (!isMobileDevice && this._isMobile) {
      this._isMobile = false;
    }
  }
  //Momento em que ?? atribuido settings
  async initialize(config) {
    this.settings = config;
  }
  //Metodo para fechar o menu
  closeMenu(index) {
    if (!this._isMobile && this._isOpen) {
      this.animate(true);
    }
    if (index >= 0) {
      this._activeIndex = index;
    }
    this._isOpen = false;
  }
  watchHandler() {
    this.updateActiveItem();
  }
  openMenu() {
    if (!this._isMobile && this._isOpen) {
      this.closeMenu();
    }
    else {
      this._isOpen = true;
    }
  }
  updateActiveItem() {
    this._activeIndex = this.position;
  }
  renderActiveMarker() {
    return index.h("span", { class: "c-menu__active-marker" });
  }
  renderNameModule(name) {
    var current_name;
    if (name.includes('modulo')) {
      let moduleTranslation = this.english ? 'Section ' : this.spanish ? 'M??dulo ' : 'M??dulo ';
      current_name = moduleTranslation + name.slice(6);
    }
    else {
      if (name == 'apresentacao') {
        current_name = this.english ? 'Introduction' : this.spanish ? 'Introducci??n' : 'Introdu????o';
      }
      else if (name == 'conclusao') {
        current_name = this.english ? 'Conclusion' : this.spanish ? 'Conclusi??n' : 'Conclus??o';
      }
      else {
        current_name = name.charAt(0).toUpperCase() + name.slice(1);
      }
    }
    return current_name;
  }
  getNextSiblings(elem) {
    const sibs = [];
    while ((elem = elem.nextSibling)) {
      if (elem.nodeType === 3 || elem.nodeType === 8)
        continue; // text node
      sibs.push(elem);
      //if (!filter || filter(elem)) sibs.push(elem);
    }
    return sibs;
  }
  renderMenuJorney() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    document.querySelectorAll('module').forEach((e, i) => {
      var menuSubItemsList = [];
      //Pega o n?? do t??tulo do yduqs-module-cover
      i--;
      var titleAll = document.querySelectorAll('.titles h2');
      var titleModuloCover = Array.prototype.map.call(titleAll, function (t) {
        return t.textContent;
      });
      if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
        menuItemsList.push(index.h("yduqs-accordion", { outline: false }, index.h("yduqs-accordion-pane", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": 'submenu:jornada-' + e.id }, index.h("span", { slot: "c-accordion-header" }, index.h("span", { innerHTML: this.renderNameModule(e.id) }), index.h("p", { class: "module-subtitle-menu", innerHTML: titleModuloCover[i] })), index.h("div", { slot: "c-accordion-content" }, e.querySelectorAll('yduqs-title, yduqs-questions, yduqs-teoria, yduqs-atividade-discursiva, .bgLigandoPontos').forEach((f, index$1) => {
          if (f.classList.contains('bgLigandoPontos')) {
            let skipMenu = f.getAttribute('skip-menu');
            if (!skipMenu) {
              menuSubItemsList.push(index.h("a", { class: {
                  'c-menu__item-container': true,
                }, onClick: () => {
                  this.onClickMenuTitle.emit(f);
                  this.closeMenu(index$1);
                  f.scrollIntoView();
                } }, index.h("span", { class: {
                  'c-menu__item': true,
                  'c-menu__item--active': this._activeIndex === index$1,
                } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Connecting the dots' : this.spanish ? 'Conectando los Puntos' : 'Ligando os Pontos'))));
            }
          }
          //Verifica se o elemento est?? dentro do ligando os pontos (Se estiver aparece apenas o item ligando os pontos no menu)
          if (!f.closest('.bgLigandoPontos')) {
            if (f.tagName == 'YDUQS-TITLE') {
              let skipMenu = f.getAttribute('skip-menu');
              if (!skipMenu) {
                let insidePlaylist = f.closest('.container');
                if (insidePlaylist !== null) {
                  var verifyModuleVideo = insidePlaylist.querySelector('yduqs-module-video');
                  var verifyQuestion = insidePlaylist.querySelector('yduqs-questions');
                  var verifyActivities = insidePlaylist.querySelector('yduqs-atividade-discursiva');
                  var topicIcon = f.getAttribute('topic_icon');
                  if (verifyActivities === null &&
                    verifyQuestion === null &&
                    verifyModuleVideo === null &&
                    topicIcon !== 'video_library' &&
                    topicIcon !== 'ondemand_video' &&
                    topicIcon !== 'headset' &&
                    topicIcon !== 'note_alt_black') {
                    menuSubItemsList.push(index.h("a", { class: {
                        'c-menu__item-container': true,
                      }, onClick: () => {
                        this.onClickMenuTitle.emit(f);
                        this.closeMenu(index$1);
                        f.scrollIntoView();
                      } }, index.h("span", { class: {
                        'c-menu__item': true,
                        'c-menu__item--active': this._activeIndex === index$1,
                      } }, index.h("span", { class: "material-icons" }, " library_books"), index.h("span", { innerHTML: f.getAttribute('topic_title') }))));
                  }
                }
              }
            }
            else if (f.tagName == 'YDUQS-QUESTIONS') {
              if (f.getAttribute('question_id')) {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(index.h("a", { class: {
                      'c-menu__item-container': true,
                    }, onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index$1);
                      f.scrollIntoView();
                    } }, index.h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index$1,
                    } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Learning Check' : this.spanish ? 'Verificar el Aprendizaje' : 'Verificando Aprendizado'))));
                }
              }
              else if (f.getAttribute('exercise_id')) {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(index.h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' +`${ f.getAttribute('question_id') }`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index$1);
                      f.scrollIntoView();
                    } }, index.h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index$1,
                    } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Hands on' : this.spanish ? 'Manos a la obra' : 'M??o na Massa'))));
                }
              }
            }
            else if (f.tagName == 'YDUQS-TEORIA') {
              let skipMenu = f.getAttribute('skip-menu');
              if (!skipMenu) {
                menuSubItemsList.push(index.h("a", { class: {
                    'c-menu__item-container': true,
                  },
                  // href={'#' + `${f.getAttribute('question_id')}`}
                  onClick: () => {
                    this.onClickMenuTitle.emit(f);
                    this.closeMenu(index$1);
                    f.scrollIntoView();
                  } }, index.h("span", { class: {
                    'c-menu__item': true,
                    'c-menu__item--active': this._activeIndex === index$1,
                  } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Theory in Practice' : this.spanish ? 'Teor??a en la Pr??ctica' : 'Teoria na Pr??tica '))));
              }
            }
            else if (f.tagName == 'YDUQS-ATIVIDADE-DISCURSIVA') {
              let skipMenu = f.getAttribute('skip-menu');
              if (!skipMenu) {
                menuSubItemsList.push(index.h("a", { class: {
                    'c-menu__item-container': true,
                  },
                  // href={'#' + `${f.getAttribute('question_id')}`}
                  onClick: () => {
                    this.onClickMenuTitle.emit(f);
                    this.closeMenu(index$1);
                    f.scrollIntoView();
                  } }, index.h("span", { class: {
                    'c-menu__item': true,
                    'c-menu__item--active': this._activeIndex === index$1,
                  } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Discursive Activity' : this.spanish ? 'Actividad Discursiva' : 'Atividade Discursiva'))));
              }
            }
          }
        }), ...menuSubItemsList))));
      }
      else {
        menuItemsList.push(index.h("a", { class: "menu-button", href: '#' + `${e.id}`, onClick: () => {
            const firstElement = Array.from(e.childNodes).filter(child => !(child.nodeType === 3 || child.nodeType === 8))[0];
            this.onClickMenuTitle.emit(firstElement || e);
            this.closeMenu();
          }, "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": 'submenu:jornada-' + e.id }, index.h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) })));
      }
    });
    menuItemsList.push(index.h("div", { id: "accordion-download" }, this.getRenderDowloads()));
    return (index.h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, index.h("yduqs-accordion-group", { id: "accgroup-journey" }, ...menuItemsList, " ")));
  }
  //A fun????o tem o objetivo de renderizar
  renderMenuMedia() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    // anchorPodcast
    var anchorLink = '#podcast-anchor-menu';
    //verifica se o settings est?? vazio
    if (this.settings !== undefined) {
      let indexModules = 0;
      if (!document.querySelector('module#apresentacao')) {
        indexModules = 1;
      }
      document.querySelectorAll('module').forEach((e, accCount) => {
        if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
          let menuSubItemsList = [];
          this.settings.modules.forEach(m => {
            if (m.playlist !== undefined) {
              m.playlist.forEach((e, index$1) => {
                let modNum = parseInt(e.mod_num);
                if (e.type === 'playlist') {
                  var videoOrPlaylist = ' playlist_play';
                }
                else {
                  var videoOrPlaylist = ' ondemand_video';
                }
                if (modNum === indexModules) {
                  menuSubItemsList.push(index.h("a", { class: "c-menu__item-container", href: '#' + e.id, onClick: () => {
                      this.onClickMenuTitle.emit(document.querySelector(`#${e.id}`));
                      this.closeMenu();
                    } }, index.h("span", { class: "c-menu__item" }, index.h("span", { class: "c-menu__item c-menu__item--active" }, index.h("span", { class: "material-icons" }, " ", videoOrPlaylist), index.h("span", { id: 'mod' + modNum + 'title' + index$1, class: "c-menu__item-title", innerHTML: this.renderNameModule(e.title_video) })))));
                }
              });
            }
          });
          menuItemsList.push(index.h("yduqs-accordion", { id: 'menu-accordion-video-' + accCount, outline: false }, index.h("yduqs-accordion-pane", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": 'submenu:video-' + e.id }, index.h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) }), index.h("div", { slot: "c-accordion-content" }, ...menuSubItemsList))));
          let thisAcc = document.getElementById('menu-accordion-video-' + accCount);
          if (menuSubItemsList.length === 0 && thisAcc !== null) {
            thisAcc.remove();
          }
        }
        indexModules++;
      });
      var moduloConclusao = document.querySelector('module#conclusao');
      if (moduloConclusao) {
        var hasPodcast = moduloConclusao.querySelector('yduqs-audio-player');
        if (hasPodcast) {
          menuItemsList.push(index.h("yduqs-accordion", { outline: false }, index.h("yduqs-accordion-pane", null, index.h("span", { slot: "c-accordion-header" }, this.english ? 'Conclusion' : this.spanish ? 'Conclusi??n' : 'Conclus??o'), index.h("div", { slot: "c-accordion-content" }, index.h("a", { class: "c-menu__item-container", href: anchorLink, onClick: () => {
              this.onClickMenuTitle.emit(hasPodcast);
              this.closeMenu();
              hasPodcast.scrollIntoView();
            } }, index.h("span", { class: "c-menu__item" }, index.h("span", { class: "c-menu__item c-menu__item--active" }, index.h("span", { class: "material-icons" }, "mic"), index.h("span", null, "Podcast"))))))));
        }
      }
      return (index.h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, index.h("yduqs-accordion-group", { id: "accgroup-media" }, ...menuItemsList)));
    }
  }
  renderMenuActivity() {
    const menuItemsActivity = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    document.querySelectorAll('module').forEach((e, accCount) => {
      var menuSubItemsList = [];
      if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
        menuItemsActivity.push(index.h("yduqs-accordion", { id: 'menu-accordion-' + accCount, outline: false }, index.h("yduqs-accordion-pane", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": 'submenu:atividade-' + e.id }, index.h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) }), index.h("div", { slot: "c-accordion-content" }, e.querySelectorAll('yduqs-questions, yduqs-teoria, yduqs-atividade-discursiva, .bgLigandoPontos').forEach((f, index$1) => {
          let skipMenu = f.getAttribute('skip-menu');
          if (!skipMenu) {
            if (f.classList.contains('bgLigandoPontos')) {
              menuSubItemsList.push(index.h("a", { class: {
                  'c-menu__item-container': true,
                }, onClick: () => {
                  this.onClickMenuTitle.emit(f);
                  this.closeMenu(index$1);
                  f.scrollIntoView();
                } }, index.h("span", { class: {
                  'c-menu__item': true,
                  'c-menu__item--active': this._activeIndex === index$1,
                } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Connecting the dots' : this.spanish ? 'Relacionando los puntos' : 'Ligando os Pontos'))));
            }
            //Verifica se o elemento est?? dentro do ligando os pontos (Se estiver aparece apenas o item ligando os pontos no menu)
            if (!f.closest('.bgLigandoPontos')) {
              if (f.getAttribute('question_id')) {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(index.h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' +`${ f.getAttribute('question_id') }`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      //fecha o menu
                      this.closeMenu(index$1);
                      //percorre para a posi????o do verificando aprendizado
                      f.scrollIntoView();
                    } }, index.h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index$1,
                    } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Learning Check' : this.spanish ? 'Verificar el Aprendizaje' : 'Verificando Aprendizado'))));
                }
              }
              else if (f.getAttribute('exercise_id')) {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(index.h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' +`${ f.getAttribute('question_id') }`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index$1);
                      f.scrollIntoView();
                    } }, index.h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index$1,
                    } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Hands on' : this.spanish ? 'Manos a la obra' : 'M??o na Massa'))));
                }
              }
              else if (f.tagName == 'YDUQS-TEORIA') {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(index.h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' + `${f.getAttribute('question_id')}`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index$1);
                      f.scrollIntoView();
                    } }, index.h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index$1,
                    } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Theory in Practice' : this.spanish ? 'Teor??a en la Pr??ctica' : 'Teoria na Pr??tica '))));
                }
              }
              else if (f.tagName == 'YDUQS-ATIVIDADE-DISCURSIVA') {
                let skipMenu = f.getAttribute('skip-menu');
                if (!skipMenu) {
                  menuSubItemsList.push(index.h("a", { class: {
                      'c-menu__item-container': true,
                    },
                    // href={'#' + `${f.getAttribute('question_id')}`}
                    onClick: () => {
                      this.onClickMenuTitle.emit(f);
                      this.closeMenu(index$1);
                      f.scrollIntoView();
                    } }, index.h("span", { class: {
                      'c-menu__item': true,
                      'c-menu__item--active': this._activeIndex === index$1,
                    } }, index.h("span", { class: "material-icons" }, "create"), index.h("span", null, this.english ? 'Discursive Activity' : this.spanish ? 'Actividad Discursiva' : 'Atividade Discursiva'))));
                }
              }
            }
          }
        }), ...menuSubItemsList))));
        let thisAcc = document.getElementById('menu-accordion-' + accCount);
        if (menuSubItemsList.length === 0 && thisAcc !== null) {
          thisAcc.remove();
        }
      }
    });
    return (index.h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, index.h("yduqs-accordion-group", { id: "accgroup-activities" }, ...menuItemsActivity, " ")));
  }
  //Fun????o que inicia a renderiza????o do menu
  getMenuRender() {
    // Verifica????o de V??deos
    const verifyModuleVideo = document.body.querySelectorAll('yduqs-module-video').length;
    const verifyModuleVideoSkipped = document.body.querySelectorAll('yduqs-module-video[skip-menu="true"]').length;
    const verifyModuleVideoResult = verifyModuleVideo - verifyModuleVideoSkipped;
    const verifyModuleVideoInner = document.body.querySelectorAll('yduqs-module-video yduqs-video-player').length;
    const verifyVideoPlayer = document.body.querySelectorAll('yduqs-video-player').length;
    const verifyVideoPlayerSkipped = document.body.querySelectorAll('yduqs-video-player[skip-menu="true"]').length;
    const verifyVideoPlayerResult = verifyVideoPlayer - verifyVideoPlayerSkipped - verifyModuleVideoInner;
    const verifyVideos = verifyModuleVideoResult + verifyVideoPlayerResult;
    // Verifica????o de Atividades
    const verifyQuestion = document.body.querySelectorAll('yduqs-questions').length;
    const verifyQuestionSkipped = document.body.querySelectorAll('yduqs-questions[skip-menu="true"]').length;
    const verifyQuestionResult = verifyQuestion - verifyQuestionSkipped;
    const verifyDiscursiva = document.body.querySelectorAll('yduqs-atividade-discursiva').length;
    const verifyDiscursivaSkipped = document.body.querySelectorAll('yduqs-atividade-discursiva[skip-menu="true"]').length;
    const verifyDiscursivaResult = verifyDiscursiva - verifyDiscursivaSkipped;
    const verifyTeoria = document.body.querySelectorAll('yduqs-teoria').length;
    const verifyTeoriaSkipped = document.body.querySelectorAll('yduqs-teoria[skip-menu="true"]').length;
    const verifyTeoriaResult = verifyTeoria - verifyTeoriaSkipped;
    const verifyLigando = document.body.querySelectorAll('.bgLigandoPontos').length;
    const verifyLigandoSkipped = document.body.querySelectorAll('.bgLigandoPontos[skip-menu="true"]').length;
    const verifyLigandoResult = verifyLigando - verifyLigandoSkipped;
    const verifyAtividades = verifyQuestionResult + verifyDiscursivaResult + verifyTeoriaResult + verifyLigandoResult;
    let headerJorney = this.english ? 'Journey' : this.spanish ? 'Jornada' : 'Jornada';
    let headerMedia = this.english ? 'Videos' : this.spanish ? 'Videos' : 'V??deos';
    let headerActivity = this.english ? 'Activities' : this.spanish ? 'Actividades' : 'Atividades';
    return (index.h("div", { class: this._isOpen ? 'c-menu__modal__wrapper open' : 'c-menu__modal__wrapper' }, index.h("div", { class: "c-menu__modal__overlay", onClick: () => this.closeMenu() }), index.h("div", { class: "c-menu__modal" }, index.h("div", { class: "c-menu__modal__header" }, index.h("button", { class: "c-menu__modal__header__btn-close", onClick: () => this.closeMenu() }, index.h("div", { class: "c-menu__modal__header__btn-close-icon" }, index.h("span", { class: "material-icons" }, "close")))), index.h("div", { class: "c-menu__modal__body" }, index.h("div", { class: "c-menu__modal__body__tab col-12" }, index.h("yduqs-tabs", { fixed_titles: true, darkmode: false, outlined: false, icons: ['map', 'video_library', 'create'] }, index.h("yduqs-tab", { header: headerJorney, open: true }, this.renderMenuJorney()), verifyVideos > 0 && (index.h("yduqs-tab", { header: headerMedia }, this.renderMenuMedia())), verifyAtividades > 0 && (index.h("yduqs-tab", { header: headerActivity }, this.renderMenuActivity()))))))));
  }
  animate(state = false) {
    this._animate = state;
  }
  componentWillLoad() {
    const htmlTagMenu = document.querySelector('html');
    const htmlLanguageMenu = htmlTagMenu.getAttribute('lang');
    if (htmlLanguageMenu === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageMenu === 'es') {
      this.spanish = true;
    }
  }
  getRenderDowloads() {
    const podcastItems = [];
    document.querySelectorAll('yduqs-audio-player').forEach(podcast => {
      podcastItems.push(index.h("a", { class: "c-menu__item-container", "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": "download:download-podcast", href: podcast.src, download: true }, index.h("span", { class: "c-menu__item" }, index.h("span", { class: "c-menu__item" }, index.h("span", { class: "material-icons" }, "mic"), index.h("span", { id: "resource" }, "Podcast"), index.h("span", { class: "material-icons icon-right" }, "file_download")))));
    });
    return (index.h("yduqs-accordion", { outline: false }, index.h("yduqs-accordion-pane", null, index.h("span", { slot: "c-accordion-header" }, "Downloads"), index.h("div", { slot: "c-accordion-content" }, ...podcastItems, index.h("a", { class: "c-menu__item-container", href: "javascript:CriaPDF()", "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-item", "data-gtm-event-label": "download:download-pdf" }, index.h("span", { class: "c-menu__item" }, index.h("span", { class: "c-menu__item" }, index.h("span", { class: "material-icons" }, "attachment"), index.h("span", { id: "resource" }, this.english ? 'Content PDF' : this.spanish ? 'Contenido PDF' : 'PDF do conte??do'), index.h("span", { class: "icon-right material-icons" }, "file_download_done"))))))));
  }
  componentDidLoad() {
    // Ancoragem #podcast-anchor-menu em menu Media
    document.querySelectorAll('yduqs-audio-player').forEach((anchorPodcast, index) => {
      var spanEl = document.createElement('span');
      var spanElChild = anchorPodcast.appendChild(spanEl);
      spanElChild.setAttribute('id', 'podcast-anchor-menu-' + index);
    });
  }
  render() {
    const deviceClass = this._isMobile ? 'mobile' : 'desktop';
    const openIconClass = this._isOpen ? 'open' : '';
    return (index.h(index.Host, { class: `c-menu ${deviceClass}` }, index.h("div", { class: "c-menu__floating-btn__container" }, index.h("button", { class: "c-menu__floating-btn", onClick: () => this.openMenu(), "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "menu:conteudo-clique-menu", "data-gtm-event-label": "abrir-menu" }, index.h("div", { class: `c-menu__floating-icon ${openIconClass}` }, index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" }))), !this.hide_search && index.h("yduqs-search-bar", null)), this.getMenuRender()));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "position": ["watchHandler"]
  }; }
};

const YduqsModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.modalClosed = index.createEvent(this, "modalClosed", 7);
    this._isopen = false;
    this.isopen = false;
    this.closeModal = () => {
      this.isopen = false;
      this.modalClosed.emit(true);
    };
  }
  handleModal(m) {
    this._isopen = m;
  }
  async showModal() {
    this._isopen = true;
  }
  componentWillLoad() {
    this._isopen = this.isopen;
    this.getModalBodyHeight();
  }
  onResize(event) {
    event.stopPropagation();
    this.getModalBodyHeight();
  }
  getModalBodyHeight() {
    let widthScrean = window.innerWidth;
    if (widthScrean > 600) {
      this.maxbodyheight = window.innerHeight * 0.7 - 56;
    }
    else {
      this.maxbodyheight = window.innerHeight * 0.8 - 56;
    }
  }
  render() {
    return (index.h("div", { class: this._isopen ? 'c-modal__wrapper isopen' : 'c-modal__wrapper' }, index.h("div", { class: "c-modal__overlay", onClick: this.closeModal }), index.h("div", { class: "c-modal" }, index.h("div", { class: "c-modal__header" }, index.h("div", { class: "c-modal__close", onClick: this.closeModal }, index.h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#30404D" })))), index.h("div", { style: { 'max-height': `${this.maxbodyheight}px` }, class: "c-modal__body" }, index.h("slot", null)))));
  }
  static get watchers() { return {
    "isopen": ["handleModal"]
  }; }
};

const YduqsCodeSnipet = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const imgCapa = {
      backgroundImage: 'url(' + this.img_cover + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return [
      index.h("div", { class: 'c-module-cover' }, index.h("div", { class: 'row g-0 m-0' }, index.h("div", { class: "col-12 col-lg-2 col-xxl-3 d-flex justify-content-center align-items-center box-column d-lg-block" }, index.h("span", null), index.h("p", { class: "u-title-medium" }, this.number_module), index.h("span", null)), index.h("div", { class: "col-12 col-lg-10 col-xxl-9 d-flex flex-column flex-lg-row" }, index.h("div", { class: "container-box-title col-12 col-lg-8 col-xxl-7 d-flex" }, index.h("div", { class: "box-title" }, index.h("div", { class: "titles" }, index.h("h2", { class: "c-heading u-title-medium", innerHTML: this.title_module }), index.h("p", { class: "u-text", innerHTML: this.objective })), this.read_time || this.midia_time ?
        index.h("div", { class: "times" }, this.read_time && this.title_read_time ?
          index.h("div", { class: "time-read" }, index.h("span", { class: "material-icons" }, "access_time"), index.h("div", { class: "itens-read" }, index.h("span", { class: "text-read" }, this.title_read_time), index.h("span", { class: "text-time-read" }, this.read_time)))
          : '', this.midia_time && this.title_midia_time ?
          index.h("div", { class: "time-video" }, index.h("span", { class: "material-icons" }, "ondemand_video"), index.h("div", { class: "itens-video" }, index.h("span", { class: "text-video" }, this.title_midia_time), index.h("span", { class: "text-time-video" }, this.midia_time)))
          : '')
        : '')), index.h("div", { class: "box-image" }, index.h("div", { class: "img-capa", style: imgCapa }, index.h("div", { class: "shadow-image" }))))))
    ];
  }
};

const RatingModule = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
  }
  componentWillLoad() {
    const htmlTagGallery = document.querySelector('html');
    const htmlLanguageGallery = htmlTagGallery.getAttribute('lang');
    if (htmlLanguageGallery === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageGallery === 'es') {
      this.spanish = true;
    }
  }
  render() {
    return (index.h("div", { class: "c-module-rating col-12" }, index.h("yduqs-rating", { cta: this.cta, icon: this.icon, tamanho: this.tamanho, module: this.module }), index.h("div", { class: "c-module-rating__button-container" }, index.h("button", { type: "button", class: "c-button u-text--small c-button--dark", tabindex: "1", disabled: true }, this.english ? 'Send' : this.spanish ? 'Enviar' : 'Enviar'))));
  }
};

const ModuleVideo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.module_number = 1;
    this.module_icon = 'playlist_play';
  }
  async initialize(config) {
    this.settings = config;
  }
  render() {
    return (index.h("div", { class: "c-module-video" }, index.h("div", { class: "c-module-video__titles" }, index.h("div", { class: 'row align-items-center justify-content-start' }, index.h("yduqs-title", { topic_icon: this.module_icon, topic_title: this.title_gallery })), index.h("div", { class: "c-module-video__titles_subtitles row align-items-center justify-content-center" }, index.h("div", { class: "c-module-video__titles_subtitles_content col-12 col-md-10 col-lg-8" }, index.h("p", null, this.subtitle_gallery)))), index.h("div", { class: "c-module-video__box row align-items-center justify-content-center" }, index.h("div", { class: "c-module-video__box_playlist col-12 col-md-10 col-lg-8" }, index.h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number }))), index.h("yduqs-modal", { id: `modal-gallery-${this.module_number}` }, index.h("div", { class: "container" }, index.h("yduqs-gallery-video", { id: "gallery", module_number: this.module_number, title_gallery: `${this.title_gallery}`, subtitle_gallery: `${this.subtitle_gallery}` })))));
  }
};

const getLanguage = () => {
  var _a;
  const lang = (_a = document.getElementsByTagName('html')[0]) === null || _a === void 0 ? void 0 : _a.getAttribute('lang');
  return lang || 'pt-br';
};
const dictionary = {
  'en-us': {
    pager: {
      atividade: 'Activity',
      conceito: 'Concept',
      conclusao: 'Conclusion',
      introducao: 'Introduction',
      modulo: 'Section',
      teexplico: 'Here, let me explain it to you!',
    },
  },
  'es': {
    pager: {
      atividade: 'Actividad',
      conceito: 'Concepto ',
      conclusao: 'Conclusi??n',
      introducao: 'Introducci??n',
      modulo: 'M??dulo',
      teexplico: '??Ven y te explico!',
    },
  },
  'pt-br': {
    pager: {
      atividade: 'Atividade',
      conceito: 'Conceito',
      conclusao: 'Conclus??o',
      introducao: 'Introdu????o',
      modulo: 'M??dulo',
      teexplico: 'Vem que eu te explico!',
    },
  },
};
/**
 * Retorna um texto mapeado atraves da chave de idioma atual
 * @param keyMap String com o endere??o do texto procurado
 * @returns string
 *
 * @example i18n('pager.introducao')
 */
const i18n = (keyMap) => {
  const lang = getLanguage();
  const keys = keyMap.split('.');
  let result = dictionary[lang] || dictionary['pt-br'];
  for (let i = 0; i < keys.length; i++) {
    result = result[keys[i]] || '';
  }
  return `${result || ''}`;
};

const YduqsPager = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.hideCssClass = 'c-pager-hide';
    this.attrSelectorPage = 'data-page';
    this.attrSelectorModule = 'data-module';
    this.attrSelectorLabel = 'data-label';
    this.starterPageIndex = 1;
    this.total = 0;
    this.current = 0;
  }
  isActive() {
    return window.innerWidth <= 578;
  }
  getTexts(key) {
    return i18n(`pager.${key}`);
  }
  _getModulePagination(module, page, label) {
    let indexes = [];
    const hasLabel = Boolean(label === null || label === void 0 ? void 0 : label.length);
    const selector = hasLabel
      ? `[${this.attrSelectorModule}="${module}"][${this.attrSelectorLabel}="${label}"]`
      : `[${this.attrSelectorModule}="${module}"]:not([${this.attrSelectorLabel}])`;
    const elements = document.querySelectorAll(selector);
    elements === null || elements === void 0 ? void 0 : elements.forEach(elem => {
      const elemPage = elem.getAttribute(this.attrSelectorPage);
      if (!indexes.includes(elemPage)) {
        indexes.push(Number(elemPage));
      }
    });
    indexes.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    // A capa dos modulos ?? page=0 e n??o deve ser considerada no total de P??ginas.
    return {
      total: indexes.length - (hasLabel ? 0 : 1),
      atual: indexes.findIndex(item => item === page) + (hasLabel ? 1 : 0),
    };
  }
  _getLabelModule(module, count) {
    return (index.h("div", { class: "c-pager-label-module", "data-cy": `${module}-${count}` }, index.h("span", { class: "c-pager-label-module-text", "data-cy": module }, module), Boolean(count === null || count === void 0 ? void 0 : count.length) && (index.h("span", { class: "c-pager-label-module-count", "data-cy": count }, count))));
  }
  _getLabel() {
    const pageElem = $(`[${this.attrSelectorPage}="${this.current}"]`);
    const moduleCount = pageElem.attr(this.attrSelectorModule);
    const label = pageElem.attr(this.attrSelectorLabel);
    let result;
    if (isNaN(Number(moduleCount))) {
      result = (index.h("div", { class: "c-pager-label-container", "data-cy": moduleCount }, this._getLabelModule(this.getTexts(moduleCount))));
    }
    else {
      const config = this._getModulePagination(Number(moduleCount), this.current, label);
      if (pageElem.get(0).tagName === 'YDUQS-MODULE-COVER') {
        // POG para quando for a Capa do M??dulo
        result = (index.h("div", { class: "c-pager-label-container", "data-cy": moduleCount }, this._getLabelModule(this.getTexts('modulo'), moduleCount)));
      }
      else {
        result = (index.h("div", { class: "c-pager-label-container", "data-cy": label }, index.h("div", { class: "c-pager-label-page" }, index.h("span", { class: "c-pager-label-page-text", "data-cy": `label ${label}` }, this.getTexts(label || 'conceito')), index.h("span", { class: "c-pager-label-page-count" }, index.h("strong", { "data-cy": "count-atual" }, config.atual), " / ", index.h("strong", { "data-cy": "count-total" }, config.total))), index.h("div", { class: "c-pager-label-separator" }, "|"), this._getLabelModule(this.getTexts('modulo'), moduleCount)));
      }
    }
    return result;
  }
  /**
   * Procura pelos videos e faz backup do SRC
   */
  _prepareVideoPlayers() {
    $('yduqs-video-player iframe').each(function () {
      $(this).attr('set-src', $(this).attr('src'));
    });
  }
  /**
   * Seta o src nos videos da pagina atual, ou todos os videos se a pagina????o n??o estiver ativa
   */
  _setCurrentVideosSrc() {
    let players;
    if (this.isActive()) {
      const currents = $(`[${this.attrSelectorPage}="${this._getCurrentPage()}"]`);
      players = currents.find('yduqs-video-player iframe');
    }
    else {
      players = $('yduqs-video-player iframe');
    }
    players.each(function () {
      if (!Boolean($(this).attr('src'))) {
        $(this).attr('src', $(this).attr('set-src'));
      }
    });
  }
  /**
   * Procura pelos videos nas paginas n??o correntes e muda seu SRC
   */
  _stopUncurrentVideos() {
    if (this.isActive()) {
      const uncurrents = $(`[${this.attrSelectorPage}]:not([${this.attrSelectorPage}="${this._getCurrentPage()}"])`);
      const players = uncurrents.find('yduqs-video-player iframe');
      players.each(function () {
        $(this).removeAttr('src');
      });
    }
  }
  _handleVideoPlayers() {
    this._stopUncurrentVideos();
    this._setCurrentVideosSrc();
  }
  handleWindowResize() {
    this._handleVideoPlayers();
  }
  _goToPage() {
    // reseta o Hash da url
    this._resetHash();
    // Esconde as p??ginas
    $(`[${this.attrSelectorPage}]`).addClass(this.hideCssClass);
    // Mostra a p??gina atual
    $(`[${this.attrSelectorPage}="${this._getCurrentPage()}"]`).removeClass(this.hideCssClass);
    // Valida Btn Prev
    if (this._getCurrentPage() <= this.starterPageIndex) {
      this.btnPrev.disabled = true;
    }
    else {
      this.btnPrev.removeAttribute('disabled');
    }
    // Valida Btn Next
    if (this._getCurrentPage() >= this.total) {
      this.btnNext.disabled = true;
    }
    else {
      this.btnNext.removeAttribute('disabled');
    }
    // Gambiarra pra parar os videos que n??o est??o na pagina atual
    this._handleVideoPlayers();
  }
  _setCurrentPage(value) {
    this.current = value < this.starterPageIndex ? this.starterPageIndex : value > this.total ? this.total : value;
  }
  _getCurrentPage() {
    return this.current;
  }
  _init() {
    // Gambiarra para resolver problema no audio dos videos players
    this._prepareVideoPlayers();
    const elements = document.querySelectorAll(`[${this.attrSelectorPage}]`);
    let total = 0;
    elements === null || elements === void 0 ? void 0 : elements.forEach(page => {
      const pageNum = Number(page.getAttribute(this.attrSelectorPage));
      total = total < pageNum ? pageNum : total;
    });
    this.total = total;
    this._setCurrentPage(this.starterPageIndex);
  }
  /**
   * Vai para a p??gina anterior
   */
  _goToPrev() {
    // Scrolla para o inicio da p??gina
    window.scrollTo(0, 0);
    this._setCurrentPage(this._getCurrentPage() - 1);
  }
  /**
   * Vai para a pr??xima p??gina
   */
  _goToNext() {
    // Scrolla para o inicio da p??gina
    window.scrollTo(0, 0);
    this._setCurrentPage(this._getCurrentPage() + 1);
  }
  /**
   * Retorna a pagina onde est?? o elemento informado
   * @param elem jQuery Element
   */
  _getPageFromElement(selector) {
    var _a, _b, _c, _d, _e;
    const elem = (selector === null || selector === void 0 ? void 0 : selector.length) > 1 && $(selector);
    let pos;
    if (elem.attr(this.attrSelectorPage)) {
      pos = elem.attr(this.attrSelectorPage);
    }
    else if (((_a = elem.children(`[${this.attrSelectorPage}]`)) === null || _a === void 0 ? void 0 : _a.length) > 0 && elem.children(`[${this.attrSelectorPage}]`).eq(0)) {
      pos = (_c = (_b = elem.children(`[${this.attrSelectorPage}]`)) === null || _b === void 0 ? void 0 : _b.eq(0)) === null || _c === void 0 ? void 0 : _c.attr(this.attrSelectorPage);
    }
    else if (elem.closest(`[${this.attrSelectorPage}]`)) {
      pos = (_d = elem.closest(`[${this.attrSelectorPage}]`)) === null || _d === void 0 ? void 0 : _d.attr(this.attrSelectorPage);
    }
    else if (elem.next(`[${this.attrSelectorPage}]`).length > 0) {
      pos = (_e = elem.next(`[${this.attrSelectorPage}]`)) === null || _e === void 0 ? void 0 : _e.attr(this.attrSelectorPage);
    }
    return pos;
  }
  /**
   * Reseta o hash, se houver necessidade
   */
  _resetHash() {
    const hash = window.location.hash;
    if ((hash === null || hash === void 0 ? void 0 : hash.length) > 1) {
      const page = this._getPageFromElement(hash);
      const atual = this._getCurrentPage();
      if (Number(page) !== atual) {
        window.location.hash = '';
      }
    }
  }
  clickMenuTitleHandler(event) {
    var _a;
    // Scrolla para o inicio da p??gina
    window.scrollTo(0, 0);
    const element = event.detail;
    this._setCurrentPage(parseInt((_a = element.closest(`[${this.attrSelectorPage}]`)) === null || _a === void 0 ? void 0 : _a.getAttribute(this.attrSelectorPage)));
  }
  componentDidLoad() {
    /**
     * Evento disparado pela busca, antes de direcionar para um dos resultados
     */
    window.addEventListener('yduqs-search-before-navigate', event => {
      var _a;
      this._setCurrentPage(Number(((_a = event.detail) === null || _a === void 0 ? void 0 : _a.page) || this.starterPageIndex));
    });
    /**
     * Evento disparado na mudan??a do Hash da url
     * Esse recurso foi utilizado em v??rios temas como ancoragem para pontos do conteudo
     */
    window.addEventListener('hashchange', () => {
      var _a;
      const hash = ((_a = window.location.hash) === null || _a === void 0 ? void 0 : _a.length) > 1 ? window.location.hash : false;
      if (hash) {
        let pos = this._getPageFromElement(hash);
        if (pos) {
          this._setCurrentPage(parseInt(pos));
        }
      }
    });
    /**
     * Marretando um evento nos links com href hashed
     */
    $('body').on('click', 'a[href^="#"]', event => {
      var _a;
      event.preventDefault();
      const hash = (_a = event.currentTarget.href) === null || _a === void 0 ? void 0 : _a.substring(event.currentTarget.href.indexOf('#'), event.currentTarget.href.length);
      if (hash) {
        let pos = this._getPageFromElement(hash);
        if (pos) {
          this._setCurrentPage(parseInt(pos));
        }
      }
      if (window.location.hash == hash) {
        window.scrollTo(0, $(window.location.hash).offset().top);
      }
      else {
        window.location.hash = hash;
      }
    });
    this._init();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: `c-pager ${this.total <= 1 ? 'c-pager-none' : ''}`, id: "btnPaginator" }, index.h("button", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "paginacao:conteudo-clique-botao", "data-gtm-event-label": "voltar", disabled: true, type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-prev", ref: el => (this.btnPrev = el), onClick: () => this._goToPrev() }, index.h("span", { class: "c-button__icon material-icons" }, "arrow_back")), this._getLabel(), index.h("button", { "data-gtm-event-category": "joana:[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "paginacao:conteudo-clique-botao", "data-gtm-event-label": "avancar", type: "button", class: "c-button c-button__icon-container c-button__icon-square", "data-cy": "btn-next", ref: el => (this.btnNext = el), onClick: () => this._goToNext() }, index.h("span", { class: "c-button__icon material-icons" }, "arrow_forward")))));
  }
  static get watchers() { return {
    "current": ["_goToPage"]
  }; }
};

const PlaylistVideo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.module_number = 1;
  }
  async initialize(config) {
    this.settings = config;
  }
  renderPlaylistVideo() {
    const cardVideolist = [];
    if (this.settings !== undefined) {
      var module = this.settings.modules[this.module_number - 1];
      module.playlist.forEach(playlistItem => {
        cardVideolist.push(index.h("yduqs-card-video", { title_video: playlistItem.title_video, subtitle_video: playlistItem.subtitle_video, thumb_video: playlistItem.thumb_video, link_video: playlistItem.link_video, paragraph: playlistItem.paragraph, time: playlistItem.time, border_bottom: playlistItem.border_bottom }));
      });
    }
    return index.h("div", { class: "c-playlist-video__items" }, ...cardVideolist);
  }
  componentWillLoad() {
    if (document.body.classList.contains('template_recursos')) {
      var jsonLocation = 'https://stensineme.blob.core.windows.net/designsystem/test/playlist_teste.json';
    }
    else {
      var jsonLocation = './json/videos.json';
    }
    fetch(jsonLocation)
      .then(response => response.json())
      .then(json => {
      document.querySelectorAll('yduqs-playlist-video').forEach(playlist => {
        playlist.initialize(json);
      });
    });
  }
  render() {
    return index.h("div", { class: "c-playlist-video" }, this.renderPlaylistVideo());
  }
};

const YduqsProgressBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onHoverBar = index.createEvent(this, "hoverbar", 7);
    this.onChange = index.createEvent(this, "changebar", 7);
    this.max = 100;
    this.min = 0;
    this._isValueVisible = false;
    this.displayValue = false;
  }
  watchValue(val, oldValue) {
    this.onChange.emit({ val, oldValue });
  }
  componentWillLoad() {
    this._isValueVisible = this.displayValue;
    this._infoEl = document.createElement('span');
    this.el.parentElement.insertBefore(this._infoEl, this.el);
    // Envia o valor da barra ao carregar o componente em tempo de criacao
    const val = this.value;
    this.onChange.emit({ val });
  }
  async show() {
    this._isValueVisible = true;
  }
  async hide() {
    this._isValueVisible = false;
  }
  onHoverBarHandler() {
    this._isValueVisible ? this.hide() : this.show();
    this.onHoverBar.emit(this._isValueVisible);
  }
  showInfo(valPercentage) {
    this._infoEl.innerHTML = `${Math.round(valPercentage)}%`;
    this._infoEl.className = 'c-progress__info u-fade-in';
    const boxSize = Math.round(this._infoEl.offsetWidth);
    const barEl = this.el.children[0];
    let containerWidth = barEl ? Math.round(barEl.offsetWidth) : 0;
    let boxPosX = 0;
    if (containerWidth >= 0 && valPercentage < 100) {
      boxPosX = containerWidth - boxSize * 0.5;
    }
    else {
      boxPosX = containerWidth - boxSize;
    }
    this._infoEl.style.setProperty('left', `${Math.round(boxPosX)}px`);
  }
  hideInfo() {
    this._infoEl.className = 'c-progress__info u-fade-out';
  }
  async isValueVisible() {
    return this._isValueVisible;
  }
  render() {
    const semiroundedClass = this.semirounded ? `c-progress--semirounded` : '';
    const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
    // Atualiza os valores da barra de progresso
    this.el.style.setProperty('--current-value', this.value.toString());
    this.el.style.setProperty('--max-value', this.max.toString());
    if (this._isValueVisible) {
      this.showInfo(percentage);
    }
    else {
      this.hideInfo();
    }
    return (index.h(index.Host, { class: `c-progress ${semiroundedClass}` }, index.h("div", { onMouseOver: () => this.onHoverBarHandler(), class: "c-progress__bar" }), index.h("div", { class: "c-progress__bar--remainder" })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["watchValue"]
  }; }
};

const YduqsQuestion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
    this.math = false;
    this.math_advanced = false;
    this.colunalg = "8";
  }
  async initialize(config) {
    this.settings = config;
  }
  componentWillLoad() {
    let bodyHtml = document.querySelector('body');
    const htmlTagQuestions = document.querySelector('html');
    const htmlLanguageQuestions = htmlTagQuestions.getAttribute('lang');
    if (htmlLanguageQuestions === 'en-us') {
      this.english = true;
    }
    else if (htmlLanguageQuestions === 'es') {
      this.spanish = true;
    }
    if (this.math) {
      let assetsMath = document.getElementById('mathjax-assets');
      let wcMath = document.getElementById('mathjax-webcomponents');
      let yqMath = document.getElementById('mathjax-assets-questions');
      if (assetsMath === null && wcMath === null && yqMath === null) {
        const scriptTag = document.createElement('script');
        scriptTag.type = "text/javascript";
        scriptTag.id = "mathjax-webcomponents";
        if (document.body.classList.contains('template_recursos')) {
          scriptTag.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
        }
        else {
          scriptTag.src = "../assets/js/mathjax/es5/tex-chtml-full.js";
        }
        bodyHtml.appendChild(scriptTag);
      }
    }
  }
  componentDidLoad() {
    let bodyHtml = document.querySelector('body');
    let questionScript = document.getElementById('loadQuestions');
    let titleStorybook = document.querySelector('title').textContent;
    if (questionScript === null && titleStorybook !== 'Storybook') {
      const scriptTag = document.createElement('script');
      if (document.body.classList.contains('template_recursos')) {
        scriptTag.src = "https://stensineme.blob.core.windows.net/designsystem/test/yduqs_questions_index.js";
      }
      else {
        scriptTag.src = "../assets/js/yduqs_questions.js";
      }
      scriptTag.type = "text/javascript";
      scriptTag.id = "loadQuestions";
      bodyHtml.appendChild(scriptTag);
    }
    if (this.math) {
      let assetsMath = document.getElementById('mathjax-assets');
      let wcMath = document.getElementById('mathjax-webcomponents');
      let yqMath = document.getElementById('mathjax-assets-questions');
      if (assetsMath !== null || wcMath !== null || yqMath !== null) {
        const reloadMath = document.createElement('script');
        reloadMath.type = "text/javascript";
        reloadMath.id = "reload-wc";
        if (document.body.classList.contains('template_recursos')) {
          reloadMath.src = "https://stensineme.blob.core.windows.net/designsystem/test/yduqs_mathjax_reload.js";
        }
        else {
          reloadMath.src = "../assets/js/yduqs_mathjax_reload.js";
        }
        reloadMath.defer = true;
        bodyHtml.appendChild(reloadMath);
        setTimeout(function () {
          reloadMath.remove();
        }, 5000);
      }
    }
  }
  renderQuestions() {
    const questionsList = [];
    const colunasLgSet = this.colunalg ? this.colunalg : '8';
    if (this.settings !== undefined) {
      this.settings.questions.forEach(question => {
        questionsList.push(index.h("div", { class: "question-block question-loading" }, index.h("div", { class: 'row align-items-center justify-content-center' }, index.h("div", { class: `col-12 col-md-10 col-lg-${colunasLgSet}` }, index.h("div", { class: "question-title", innerHTML: question.question_title }), index.h("div", { class: "question-options" }, index.h("yduqs-card-selecionavel", { "correct-answer": question.correct_anwser }, index.h("yduqs-card-selecionavel-item", { optionid: "a", innerHTML: question.options[0] }), index.h("yduqs-card-selecionavel-item", { optionid: "b", innerHTML: question.options[1] }), index.h("yduqs-card-selecionavel-item", { optionid: "c", innerHTML: question.options[2] }), index.h("yduqs-card-selecionavel-item", { optionid: "d", innerHTML: question.options[3] }), index.h("yduqs-card-selecionavel-item", { optionid: "e", innerHTML: question.options[4] }))), index.h("div", { class: "question-button" }, index.h("button", { type: "button", class: "c-button", tabindex: "1" }, this.english ? 'Answer' : this.spanish ? 'Responder' : 'Responder')), index.h("div", { class: "question-positive-feedback d-none", innerHTML: encodeURIComponent(question.positive_feedback) }), index.h("div", { class: "question-negative-feedback d-none" }, index.h("p", { class: "c-paragraph", innerHTML: this.english ? `But don't worry, you can go back to the <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> topic and try it again after rereading the content.` :
            this.spanish ? `Pero no te preocupes, puedes volver al t??pico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> y, despu??s de releer el contenido, volver a intentarlo.` :
              `Mas n??o se preocupe, voc?? pode voltar ao t??pico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> e, ap??s reler o conte??do, tentar novamente.` }))))));
      });
    }
    return index.h("yduqs-questions-body", null, ...questionsList);
  }
  render() {
    return (index.h("div", { class: "c-questions" }, this.renderQuestions()));
  }
  get el() { return index.getElement(this); }
};

const YduqsQuote = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dark = false;
    this.size = '';
  }
  componentWillLoad() {
    if (this.size)
      this._getQuoteSize();
  }
  _getQuoteSize() {
    if (this.size === 'small')
      return 'small';
    if (this.size === 'medium')
      return 'medium';
    return 'big';
  }
  render() {
    const darkMode = this.dark ? 'c-quote--dark' : '';
    const quoteSize = `c-quote--${this._getQuoteSize()}`;
    return (index.h("blockquote", { class: `c-quote ${darkMode} ${quoteSize}` }, index.h("slot", null)));
  }
};

const YduqsQuoteBody = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-quote__body" }, index.h("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: "c-quote__icon" }, index.h("path", { d: "M23.1381 24.2696C23.1381 19.6097 25.01 15.3343 28.7537 11.4435C31.1211 9.09095 33.0205 8.07301 34.4519 8.3897C35.7732 8.79688 36.4339 9.40764 36.4339 10.222C36.4339 10.9911 35.9935 11.8055 35.1126 12.6651C34.2867 13.5247 33.6261 14.2259 33.1306 14.7688C32.6351 15.3117 32.2222 15.8999 31.8919 16.5332C31.1211 17.8 30.7357 19.3382 30.7357 21.1479C32.057 20.8312 33.3783 20.967 34.6997 21.5551C37.1221 22.6861 38.3333 24.1339 38.3333 25.8983C38.3333 27.6175 37.6726 29.02 36.3513 30.1058C35.085 31.1464 33.3233 31.6667 31.066 31.6667C28.8088 31.6667 26.9094 30.9654 25.3678 29.5629C23.8813 28.1152 23.1381 26.3507 23.1381 24.2696ZM1.66662 24.2696C1.66662 19.4287 3.51097 15.1534 7.19966 11.4435C10.0075 8.68376 12.3473 7.84679 14.2192 8.9326C14.6046 9.15881 14.7973 9.52074 14.7973 10.0184C14.7973 10.9232 14.3843 11.8055 13.5585 12.6651C12.7877 13.5247 12.1546 14.2259 11.6591 14.7688C11.1636 15.3117 10.7507 15.8999 10.4204 16.5332C9.64961 17.8 9.26422 19.3382 9.26422 21.1479C10.5855 20.8312 11.8793 20.9669 13.1456 21.5551C15.513 22.6861 16.6967 24.1339 16.6967 25.8983C16.6967 27.6175 16.0635 29.02 14.7973 30.1058C13.531 31.1464 11.7692 31.6667 9.51196 31.6667C7.25471 31.6667 5.38283 30.9654 3.89635 29.5629C2.40986 28.1152 1.66662 26.3507 1.66662 24.2696Z" })), index.h("slot", null)));
  }
};

const YduqsQuoteImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-quote__image", style: { 'background-image': `url(${this.path})` } }, index.h("slot", null)));
  }
};

const YduqsRange = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.value = 0;
    this.max = 10;
    this.min = -10;
    this.step = 1;
  }
  updateValue(val) {
    this.value = val;
    this.output && this.output(this.value);
  }
  increaseValue() {
    this.updateValue(this.value + this.step > this.max ? this.max : this.value + this.step);
  }
  decreaseValue() {
    this.updateValue(this.value - this.step < this.min ? this.min : this.value - this.step);
  }
  render() {
    return (index.h("yduqs-card", { dark: true, small: true, class: "c-range" }, index.h("div", { class: "c-range-controls" }, index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small", disabled: this.value <= this.min, onClick: () => this.decreaseValue() }, index.h("span", { class: "c-button__icon material-icons" }, "remove")), index.h("div", { class: "c-range-input" }, index.h("input", { type: "range", id: this.name, name: this.name, class: "c-range-input", min: this.min, max: this.max, step: this.step, value: this.value, onChange: event => this.updateValue(parseInt(event.target.value)), ref: el => (this.elemRange = el) })), index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small", disabled: this.value >= this.max, onClick: () => this.increaseValue() }, index.h("span", { class: "c-button__icon material-icons" }, "add")))));
  }
};

const Rating = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "c-rating" }, index.h("h3", null, this.cta), index.h("div", { class: "star-rating" }, index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), index.h("label", null, index.h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)))));
  }
};

/**
 * Dispara um evento personalizado na janela
 * @param {string} label Nome do evento
 * @param {any} params Parametros enviados ao Evento
 */
const dispatchEvent = (label, params) => {
  window.dispatchEvent(new CustomEvent(label, params ? { detail: params } : null));
};
/** UTILS */
/**
 * Remove os duplos espa??os em branco e quebra de linha
 * @param str
 * @returns
 */
const removeDoubleSpacesAndBreaks = (str) => {
  if (!str)
    return str;
  let result = str;
  result = result.replace(/[\n]/giu, ' ');
  result = result.replace(/[\r]/giu, ' ');
  result = result.replace(/  +/g, ' ');
  return result;
};
/**
 * Remove acentos e caracteres especiais de uma string
 * @param str
 * @returns
 */
const cleanString = (str) => {
  if (!str)
    return str;
  let result = str.toLowerCase();
  result = result.replace(/[??????????]/giu, 'a');
  result = result.replace(/[????????]/giu, 'e');
  result = result.replace(/[????????]/giu, 'i');
  result = result.replace(/[??????????]/giu, 'o');
  result = result.replace(/[????????]/giu, 'u');
  result = result.replace(/[??]/giu, 'c');
  result = result.replace(/[??]/giu, 'n');
  return removeDoubleSpacesAndBreaks(result);
};

const ignoredNodeList = ['#comment', '#text', 'SCRIPT', 'STYLE', 'IFRAME', 'HR', 'svg', 'path', 'g', 'math', 'mi', 'mo', 'mrow', 'mfrac', 'msqrt', 'msup', 'mn'];
const ignoredParentList = ['yduqs-menu', 'yduqs-rating', 'yduqs-modal', 'yduqs-pager'].join(',');
const YduqsSearchBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.open = false;
    this.term = '';
    this.hasSearch = false;
    this.actualFoundItemPosition = -1;
    this.cacheDbId = 'data-cache-id';
    this.termFoundClass = 'c-search-found-item';
    this.termFoundResultClass = 'c-search-found-result-item';
  }
  reset() {
    var _a, _b;
    if (!((_a = this.term) === null || _a === void 0 ? void 0 : _a.length)) {
      this.hasSearch = false;
      this.clearResults();
    }
    else if (((_b = this.term) === null || _b === void 0 ? void 0 : _b.length) > 2) {
      this.handleSubmit({});
    }
  }
  /** CORE */
  /**
   * Cria um objeto indexado com o conteudo html do tema
   * @returns
   */
  createCachedDb() {
    const allElem = $('p, span:not(.material-icons,.c-video-player__cover-title), strong, b, u, i:not(.material-icons), em, h1, h2, h3, h4, h5, h6, li, dt, dd, a:not(.c-button), [slot="card-heading"], [slot="card-subheading"], td, th');
    // Incluir um id de cache em todos os elementos iniciais
    for (let i = 0; i < allElem.length; i++) {
      if (!ignoredNodeList.includes(allElem[i].nodeName) &&
        allElem[i].nodeName.substring(0, 4) != 'MJX-' &&
        !Boolean($(allElem[i]).parents(ignoredParentList).length) // FIXME - Excluir YDUQS-MODAL???
      ) {
        $(allElem[i]).attr(this.cacheDbId, (Math.random() + 1).toString(36).substring(2));
      }
    }
    // Buscar todos os elemtnos cacheados e montar Objeto de busca
    const allCachedElem = $(`body *[${this.cacheDbId}]`);
    const result = [];
    for (let i = 0; i < allCachedElem.length; i++) {
      // Parsing original html to remove double spaces and break lines
      $(allCachedElem[i]).html(removeDoubleSpacesAndBreaks($(allCachedElem[i]).html()));
      const original = $(allCachedElem[i]);
      const clone = original.clone();
      const cloneContents = clone.contents();
      const parsedItems = cloneContents.map(index => {
        var _a;
        if (cloneContents[index].nodeName === '#text') {
          return cleanString(cloneContents[index].textContent);
        }
        else if ((_a = cloneContents[index].dataset) === null || _a === void 0 ? void 0 : _a.cacheId) {
          return Array.from(Array(cloneContents[index].outerHTML.length), () => '*').join('');
        }
      });
      if (parsedItems.length > 0) {
        const data = {
          cachedId: original.attr(this.cacheDbId),
          original: original.html(),
          parsed: Array.from(parsedItems).join(''),
        };
        result.push(data);
      }
    }
    return result;
  }
  findInDocument() {
    this.actualFoundItemPosition = -1;
    let txt = cleanString(this.term);
    this.clearResults();
    this.hasSearch = true;
    if (txt === '') {
      return;
    }
    const $founds = this.cachedDb
      .map((item) => ({
      cachedId: item.cachedId,
      index: item.parsed.indexOf(txt),
      length: txt.length,
    }))
      .filter((item) => item.index >= 0);
    let result = [];
    $founds.forEach((item, index) => {
      var _a, _b, _c, _d, _e;
      const element = $(`body *[${this.cacheDbId}="${item.cachedId}"]`);
      const originalText = (_a = element.html()) === null || _a === void 0 ? void 0 : _a.substr(item.index, item.length);
      const page = (_b = element.closest('[data-page]')) === null || _b === void 0 ? void 0 : _b.attr('data-page');
      const module = (_c = element.closest('[data-module]')) === null || _c === void 0 ? void 0 : _c.attr('data-module');
      const locator = !module ? '' : !isNaN(Number(module)) ? `${i18n('pager.modulo')} ${module}` : i18n(`pager.${module}`) || '';
      const obj = {
        start: (_d = element.html()) === null || _d === void 0 ? void 0 : _d.substr(0, item.index),
        new: (cssClass) => `<span class="${cssClass}">${originalText}</span>`,
        end: (_e = element.html()) === null || _e === void 0 ? void 0 : _e.substr(item.index + originalText.length),
      };
      element.html(obj.start + obj.new(this.termFoundClass) + obj.end);
      result.push({
        index,
        page: page || '0',
        locator,
        html: obj.start + obj.new(this.termFoundResultClass) + obj.end,
      });
    });
    this.setResult(result);
    dispatchEvent('yduqs-search-called', { term: txt });
  }
  /** EVENTS */
  /**
   * Atualiza o valor de open
   * @param value
   */
  setOpen(value) {
    this.open = value;
  }
  /**
   * Atualiza o valor de term
   * @param value
   */
  setTerm(value) {
    this.term = value;
  }
  /**
   * Abre o modal de busca
   */
  handleOpen() {
    this.setOpen(true);
    this.elemInput.focus();
  }
  /**
   * Fecha o modal de busca
   */
  handleClose() {
    this.setOpen(false);
  }
  /**
   * Limpa os resultados
   */
  clearResults() {
    var _a;
    this.result = [];
    this.hasSearch = false;
    const $founds = $(`.${this.termFoundClass}`);
    for (let i = 0; i < $founds.length; i++) {
      if ($($founds[i]).is('span')) {
        const $parent = $($founds[i]).parent();
        var html = (_a = this.cachedDb.find(item => item.cachedId === $parent.attr(this.cacheDbId))) === null || _a === void 0 ? void 0 : _a.original;
        if (html) {
          $($parent).html(html);
        }
      }
    }
    dispatchEvent('yduqs-search-cleaned');
  }
  /**
   * Limpa o campo de busca e a lista de resultados
   */
  handleClear() {
    this.setTerm('');
    this.clearResults();
  }
  /**
   * Reseta o modal de busca para o estado inicial (fechado, sem termo e sem resultados)
   */
  handleReset() {
    this.handleClear();
    this.handleClose();
  }
  /**
   * Chamado na altera????o do campo de busca
   * @param event
   */
  handleInputChange(event) {
    this.setTerm(event.target.value);
  }
  setResult(value) {
    this.result = value;
  }
  /**
   * Move o scroll at?? o elemento selecionado
   * @param position
   */
  navigateOnResults(position) {
    var $txtElement = $(`body span.${this.termFoundClass}`);
    this.actualFoundItemPosition = position < 0 ? $txtElement.length - 1 : position >= $txtElement.length ? 0 : position;
    if ($txtElement.eq(this.actualFoundItemPosition)) {
      // $($txtElement).removeClass('selected');
      // $($txtElement[this.actualFoundItemPosition]).addClass('selected');
      let txtElementTopPosition = $txtElement.eq(this.actualFoundItemPosition).offset().top;
      $(window).scrollTop(txtElementTopPosition - 120);
    }
    this.handleClose();
    dispatchEvent('yduqs-search-navigate', { position: this.actualFoundItemPosition });
  }
  handleResultItemClick(position, page) {
    dispatchEvent('yduqs-search-before-navigate', { position, page });
    setTimeout(() => {
      this.navigateOnResults(position);
    }, 400);
  }
  /**
   * Chamado no envio do formul??rio de busca
   * @param event
   */
  handleSubmit(event) {
    if (event.type === 'submit') {
      event.preventDefault();
    }
    if (this.open) {
      if (!this.cachedDb) {
        this.cachedDb = this.createCachedDb();
      }
      this.findInDocument();
    }
    else {
      this.handleOpen();
    }
  }
  render() {
    var _a;
    return (index.h(index.Host, { class: "c-search-bar" }, index.h("form", { class: `c-search-bar-trigger ${this.open ? 'opened' : ''}`, onSubmit: event => this.handleSubmit(event) }, index.h("button", { "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'barra-busca:conteudo-clique-botao', "data-gtm-event-label": 'voltar', type: "button", class: "c-button c-button__icon-container u-text--small c-search-bar-trigger-back", onClick: () => this.handleReset() }, index.h("span", { class: "c-button__icon material-icons" }, "arrow_back")), index.h("div", { class: "c-search-bar-trigger-input-container" }, index.h("input", { type: "search", class: "c-search-bar-trigger-input", onInput: event => this.handleInputChange(event), value: this.term, ref: el => (this.elemInput = el), placeholder: "Pesquisar no tema" }), this.hasSearch && (index.h("span", { class: "c-button__icon material-icons", onClick: () => this.handleClear() }, "close"))), index.h("button", { "data-gtm-event-category": 'joana:[[instituicao]]:[[tipo-usuario]]', "data-gtm-event-action": 'barra-busca:conteudo-clique-botao', "data-gtm-event-label": 'buscar', type: "submit", class: "c-button c-button__icon-container u-text--small c-search-bar-trigger-btn" }, index.h("span", { class: "c-button__icon material-icons" }, "search"))), index.h("div", { class: `c-search-bar-result ${this.open ? 'opened' : ''}` }, index.h("div", { class: "c-search-bar-result-overlay", onClick: () => this.handleClose() }), index.h("div", { class: "c-search-bar-result-container" }, ((_a = this.result) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (index.h("div", { class: "c-search-bar-result-list" }, this.result.map(item => (index.h("div", { class: "c-search-bar-result-list-item", onClick: () => this.handleResultItemClick(item.index, item.page) }, index.h("div", { class: "item-breadcrumb" }, item.locator), index.h("div", { innerHTML: item.html })))))) : this.hasSearch ? (index.h("div", { class: "c-search-bar-result-list-empty" }, `N??o encontramos nenhum resultado`)) : (index.h("div", null))))));
  }
  static get watchers() { return {
    "term": ["reset"]
  }; }
};

const Tab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const typeClass = this.type ? `c-tabs__tab--${this.type}` : '';
    return (index.h(index.Host, null, this.outline ?
      index.h("div", { class: 'c-round-border' }, index.h("div", { role: "tabpanel", hidden: !this.open, class: "c-tabs__tab {typeClass}" }, index.h("slot", null)))
      :
        index.h("div", { role: "tabpanel", hidden: !this.open, class: `c-tabs__tab ${typeClass}` }, index.h("slot", null))));
  }
};

const Tabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onChange = index.createEvent(this, "changed", 7);
    this.fixed_titles = false;
    this.gtm_category = [];
    this.gtm_action = [];
    this.gtm_label = [];
  }
  componentWillLoad() {
    this.tabs = Array.from(this.elem.querySelectorAll('yduqs-tab'));
  }
  async currentTab() {
    return this.tabs.findIndex((tab) => tab.open);
  }
  async openTab(tabIndex) {
    if (!this.tabs[tabIndex].disabled) {
      this.tabs = this.tabs.map((tab) => {
        tab.open = false;
        return tab;
      });
      this.tabs[tabIndex].open = true;
      this.onChange.emit({ idx: tabIndex });
    }
  }
  render() {
    const darkClass = this.darkmode ? 'c-tabs--dark' : '';
    const colorMode = this.outlined ? 'c-tabs--outlined' : '';
    return (index.h("div", { class: `c-tabs ${darkClass} ${colorMode}` }, index.h("div", { role: "tablist", class: "c-tabs" }, index.h("div", { class: "c-tabs__nav" }, index.h("div", { class: "c-tabs__headings" }, this.tabs.map((tab, i) => {
      const openClass = tab.open ? 'c-tab-heading--active' : '';
      var head = this.icons ? `<span class="c-button__icon-text-right material-icons">${this.icons[i]}</span> ${tab.header}` : `${tab.header}`;
      return (index.h("div", { class: `c-tab-heading ${openClass}`, onClick: () => this.openTab(i), innerHTML: head, role: "tab", "data-gtm-event-category": this.gtm_category[i], "data-gtm-event-action": this.gtm_action[i], "data-gtm-event-label": this.gtm_label[i] }));
    }))), this.fixed_titles != false ? index.h("div", { class: "c-tabpanel-scroll" }, index.h("slot", null)) : index.h("slot", null))));
  }
  get elem() { return index.getElement(this); }
};

const Timeline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.horizontal = false;
  }
  render() {
    const typeClass = this.horizontal ? `o-timeline--horizontal` : '';
    const isdarkmode = this.dark ? `o-timeline--dark` : '';
    return (index.h("ol", { class: `o-timeline ${typeClass} ${isdarkmode}` }, index.h("slot", null)));
  }
};

const TimelineItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const lastClass = this.last ? `c-timeline-item--last` : '';
    return (index.h("li", { class: `c-timeline-item ${lastClass}` }, index.h("div", { class: "c-timeline-item__icon-container" }, index.h("span", { class: "c-timeline-item__icon material-icons" }, this.icon)), index.h("div", { class: "c-timeline-item__body" }, index.h("slot", null))));
  }
};

const Title = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: `c-topic-title ${this.dark ? 'c-topic-title--dark' : ''}` }, index.h("div", { class: 'row align-items-center justify-content-start' }, index.h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }, this.topic_icon ? index.h("span", { class: "material-icons" }, this.topic_icon) : index.h("span", { class: "title-bar" })), index.h("div", { class: 'col-12 col-md-10 col-lg-8' }, index.h("h1", { class: "c-heading u-title-small", innerHTML: this.topic_title })))));
  }
};

/*! @vimeo/player v2.16.4 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/**
 * @module lib/functions
 */

/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */

/* global global */
var isNode = typeof global !== 'undefined' && {}.toString.call(global) === '[object global]';
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either ???get??? or ???set???.
 * @return {string}
 */

function getMethodName(prop, type) {
  if (prop.indexOf(type.toLowerCase()) === 0) {
    return prop;
  }

  return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */

function isDomElement(element) {
  return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */

function isInteger(value) {
  // eslint-disable-next-line eqeqeq
  return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */

function isVimeoUrl(url) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */

function getVimeoUrl() {
  var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = oEmbedParameters.id;
  var url = oEmbedParameters.url;
  var idOrUrl = id || url;

  if (!idOrUrl) {
    throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
  }

  if (isInteger(idOrUrl)) {
    return "https://vimeo.com/".concat(idOrUrl);
  }

  if (isVimeoUrl(idOrUrl)) {
    return idOrUrl.replace('http:', 'https:');
  }

  if (id) {
    throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
  }

  throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}

var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';

if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
  throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function (self) {

  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var defineProperty = function (object, name, value) {
    if (Object.defineProperty) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = function () {
    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])

      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)


    defineProperty(WeakMap.prototype, 'delete', function (key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)

    defineProperty(WeakMap.prototype, 'get', function (key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)

    defineProperty(WeakMap.prototype, 'has', function (key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)

    defineProperty(WeakMap.prototype, 'set', function (key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });

    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }

    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  }();

  function isObject(x) {
    return Object(x) === x;
  }
})(typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

var npo_src = createCommonjsModule(function (module) {
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function UMD(name, context, definition) {
  // special form of UMD for polyfilling across evironments
  context[name] = context[name] || definition();

  if (module.exports) {
    module.exports = context[name];
  }
})("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {

  var builtInProp,
      cycle,
      scheduling_queue,
      ToString = Object.prototype.toString,
      timer = typeof setImmediate != "undefined" ? function timer(fn) {
    return setImmediate(fn);
  } : setTimeout; // dammit, IE8.

  try {
    Object.defineProperty({}, "x", {});

    builtInProp = function builtInProp(obj, name, val, config) {
      return Object.defineProperty(obj, name, {
        value: val,
        writable: true,
        configurable: config !== false
      });
    };
  } catch (err) {
    builtInProp = function builtInProp(obj, name, val) {
      obj[name] = val;
      return obj;
    };
  } // Note: using a queue instead of array for efficiency


  scheduling_queue = function Queue() {
    var first, last, item;

    function Item(fn, self) {
      this.fn = fn;
      this.self = self;
      this.next = void 0;
    }

    return {
      add: function add(fn, self) {
        item = new Item(fn, self);

        if (last) {
          last.next = item;
        } else {
          first = item;
        }

        last = item;
        item = void 0;
      },
      drain: function drain() {
        var f = first;
        first = last = cycle = void 0;

        while (f) {
          f.fn.call(f.self);
          f = f.next;
        }
      }
    };
  }();

  function schedule(fn, self) {
    scheduling_queue.add(fn, self);

    if (!cycle) {
      cycle = timer(scheduling_queue.drain);
    }
  } // promise duck typing


  function isThenable(o) {
    var _then,
        o_type = typeof o;

    if (o != null && (o_type == "object" || o_type == "function")) {
      _then = o.then;
    }

    return typeof _then == "function" ? _then : false;
  }

  function notify() {
    for (var i = 0; i < this.chain.length; i++) {
      notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
    }

    this.chain.length = 0;
  } // NOTE: This is a separate function to isolate
  // the `try..catch` so that other code can be
  // optimized better


  function notifyIsolated(self, cb, chain) {
    var ret, _then;

    try {
      if (cb === false) {
        chain.reject(self.msg);
      } else {
        if (cb === true) {
          ret = self.msg;
        } else {
          ret = cb.call(void 0, self.msg);
        }

        if (ret === chain.promise) {
          chain.reject(TypeError("Promise-chain cycle"));
        } else if (_then = isThenable(ret)) {
          _then.call(ret, chain.resolve, chain.reject);
        } else {
          chain.resolve(ret);
        }
      }
    } catch (err) {
      chain.reject(err);
    }
  }

  function resolve(msg) {
    var _then,
        self = this; // already triggered?


    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    try {
      if (_then = isThenable(msg)) {
        schedule(function () {
          var def_wrapper = new MakeDefWrapper(self);

          try {
            _then.call(msg, function $resolve$() {
              resolve.apply(def_wrapper, arguments);
            }, function $reject$() {
              reject.apply(def_wrapper, arguments);
            });
          } catch (err) {
            reject.call(def_wrapper, err);
          }
        });
      } else {
        self.msg = msg;
        self.state = 1;

        if (self.chain.length > 0) {
          schedule(notify, self);
        }
      }
    } catch (err) {
      reject.call(new MakeDefWrapper(self), err);
    }
  }

  function reject(msg) {
    var self = this; // already triggered?

    if (self.triggered) {
      return;
    }

    self.triggered = true; // unwrap

    if (self.def) {
      self = self.def;
    }

    self.msg = msg;
    self.state = 2;

    if (self.chain.length > 0) {
      schedule(notify, self);
    }
  }

  function iteratePromises(Constructor, arr, resolver, rejecter) {
    for (var idx = 0; idx < arr.length; idx++) {
      (function IIFE(idx) {
        Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
          resolver(idx, msg);
        }, rejecter);
      })(idx);
    }
  }

  function MakeDefWrapper(self) {
    this.def = self;
    this.triggered = false;
  }

  function MakeDef(self) {
    this.promise = self;
    this.state = 0;
    this.triggered = false;
    this.chain = [];
    this.msg = void 0;
  }

  function Promise(executor) {
    if (typeof executor != "function") {
      throw TypeError("Not a function");
    }

    if (this.__NPO__ !== 0) {
      throw TypeError("Not a promise");
    } // instance shadowing the inherited "brand"
    // to signal an already "initialized" promise


    this.__NPO__ = 1;
    var def = new MakeDef(this);

    this["then"] = function then(success, failure) {
      var o = {
        success: typeof success == "function" ? success : true,
        failure: typeof failure == "function" ? failure : false
      }; // Note: `then(..)` itself can be borrowed to be used against
      // a different promise constructor for making the chained promise,
      // by substituting a different `this` binding.

      o.promise = new this.constructor(function extractChain(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        o.resolve = resolve;
        o.reject = reject;
      });
      def.chain.push(o);

      if (def.state !== 0) {
        schedule(notify, def);
      }

      return o.promise;
    };

    this["catch"] = function $catch$(failure) {
      return this.then(void 0, failure);
    };

    try {
      executor.call(void 0, function publicResolve(msg) {
        resolve.call(def, msg);
      }, function publicReject(msg) {
        reject.call(def, msg);
      });
    } catch (err) {
      reject.call(def, err);
    }
  }

  var PromisePrototype = builtInProp({}, "constructor", Promise,
  /*configurable=*/
  false); // Note: Android 4 cannot use `Object.defineProperty(..)` here

  Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise

  builtInProp(PromisePrototype, "__NPO__", 0,
  /*configurable=*/
  false);
  builtInProp(Promise, "resolve", function Promise$resolve(msg) {
    var Constructor = this; // spec mandated checks
    // note: best "isPromise" check that's practical for now

    if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
      return msg;
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      resolve(msg);
    });
  });
  builtInProp(Promise, "reject", function Promise$reject(msg) {
    return new this(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      reject(msg);
    });
  });
  builtInProp(Promise, "all", function Promise$all(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    if (arr.length === 0) {
      return Constructor.resolve([]);
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      var len = arr.length,
          msgs = Array(len),
          count = 0;
      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        msgs[idx] = msg;

        if (++count === len) {
          resolve(msgs);
        }
      }, reject);
    });
  });
  builtInProp(Promise, "race", function Promise$race(arr) {
    var Constructor = this; // spec mandated checks

    if (ToString.call(arr) != "[object Array]") {
      return Constructor.reject(TypeError("Not an array"));
    }

    return new Constructor(function executor(resolve, reject) {
      if (typeof resolve != "function" || typeof reject != "function") {
        throw TypeError("Not a function");
      }

      iteratePromises(Constructor, arr, function resolver(idx, msg) {
        resolve(msg);
      }, reject);
    });
  });
  return Promise;
});
});

/**
 * @module lib/callbacks
 */
var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */

function storeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!(name in playerCallbacks)) {
    playerCallbacks[name] = [];
  }

  playerCallbacks[name].push(callback);
  callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */

function getCallbacks(player, name) {
  var playerCallbacks = callbackMap.get(player.element) || {};
  return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */

function removeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!playerCallbacks[name]) {
    return true;
  } // If no callback is passed, remove all callbacks for the event


  if (!callback) {
    playerCallbacks[name] = [];
    callbackMap.set(player.element, playerCallbacks);
    return true;
  }

  var index = playerCallbacks[name].indexOf(callback);

  if (index !== -1) {
    playerCallbacks[name].splice(index, 1);
  }

  callbackMap.set(player.element, playerCallbacks);
  return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */

function shiftCallbacks(player, name) {
  var playerCallbacks = getCallbacks(player, name);

  if (playerCallbacks.length < 1) {
    return false;
  }

  var callback = playerCallbacks.shift();
  removeCallback(player, name, callback);
  return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */

function swapCallbacks(oldElement, newElement) {
  var playerCallbacks = callbackMap.get(oldElement);
  callbackMap.set(newElement, playerCallbacks);
  callbackMap.delete(oldElement);
}

/**
 * @module lib/embed
 */
var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'controls', 'dnt', 'height', 'id', 'interactive_params', 'keyboard', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */

function getOEmbedParameters(element) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return oEmbedParameters.reduce(function (params, param) {
    var value = element.getAttribute("data-vimeo-".concat(param));

    if (value || value === '') {
      params[param] = value === '' ? 1 : value;
    }

    return params;
  }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */

function createEmbed(_ref, element) {
  var html = _ref.html;

  if (!element) {
    throw new TypeError('An element must be provided');
  }

  if (element.getAttribute('data-vimeo-initialized') !== null) {
    return element.querySelector('iframe');
  }

  var div = document.createElement('div');
  div.innerHTML = html;
  element.appendChild(div.firstChild);
  element.setAttribute('data-vimeo-initialized', 'true');
  return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */

function getOEmbedData(videoUrl) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve, reject) {
    if (!isVimeoUrl(videoUrl)) {
      throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
    }

    var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));

    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
      }
    }

    var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 404) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
        return;
      }

      if (xhr.status === 403) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
        return;
      }

      try {
        var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed

        if (json.domain_status_code === 403) {
          // We still want to create the embed to give users visual feedback
          createEmbed(json, element);
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }

        resolve(json);
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = function () {
      var status = xhr.status ? " (".concat(xhr.status, ")") : '';
      reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
    };

    xhr.send();
  });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function initializeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error creating an embed: ".concat(error));
    }
  };

  elements.forEach(function (element) {
    try {
      // Skip any that have data-vimeo-defer
      if (element.getAttribute('data-vimeo-defer') !== null) {
        return;
      }

      var params = getOEmbedParameters(element);
      var url = getVimeoUrl(params);
      getOEmbedData(url, params, element).then(function (data) {
        return createEmbed(data, element);
      }).catch(handleError);
    } catch (error) {
      handleError(error);
    }
  });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */

function resizeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;

  // Prevent execution if users include the player.js script multiple times.
  if (window.VimeoPlayerResizeEmbeds_) {
    return;
  }

  window.VimeoPlayerResizeEmbeds_ = true;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    } // 'spacechange' is fired only on embeds with cards


    if (!event.data || event.data.event !== 'spacechange') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow !== event.source) {
        continue;
      } // Change padding-bottom of the enclosing div to accommodate
      // card carousel without distorting aspect ratio


      var space = iframes[i].parentElement;
      space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
      break;
    }
  };

  window.addEventListener('message', onMessage);
}

/**
 * @module lib/postmessage
 */
/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */

function parseMessageData(data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      // If the message cannot be parsed, throw the error as a warning
      console.warn(error);
      return {};
    }
  }

  return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */

function postMessage(player, method, params) {
  if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
    return;
  }

  var message = {
    method: method
  };

  if (params !== undefined) {
    message.value = params;
  } // IE 8 and 9 do not support passing messages, so stringify them


  var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));

  if (ieVersion >= 8 && ieVersion < 10) {
    message = JSON.stringify(message);
  }

  player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */

function processData(player, data) {
  data = parseMessageData(data);
  var callbacks = [];
  var param;

  if (data.event) {
    if (data.event === 'error') {
      var promises = getCallbacks(player, data.data.method);
      promises.forEach(function (promise) {
        var error = new Error(data.data.message);
        error.name = data.data.name;
        promise.reject(error);
        removeCallback(player, data.data.method, promise);
      });
    }

    callbacks = getCallbacks(player, "event:".concat(data.event));
    param = data.data;
  } else if (data.method) {
    var callback = shiftCallbacks(player, data.method);

    if (callback) {
      callbacks.push(callback);
      param = data.value;
    }
  }

  callbacks.forEach(function (callback) {
    try {
      if (typeof callback === 'function') {
        callback.call(player, param);
        return;
      }

      callback.resolve(param);
    } catch (e) {// empty
    }
  });
}

/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */
function initializeScreenfull() {
  var fn = function () {
    var val;
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var i = 0;
    var l = fnMap.length;
    var ret = {};

    for (; i < l; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }

        return ret;
      }
    }

    return false;
  }();

  var eventNameMap = {
    fullscreenchange: fn.fullscreenchange,
    fullscreenerror: fn.fullscreenerror
  };
  var screenfull = {
    request: function request(element) {
      return new Promise(function (resolve, reject) {
        var onFullScreenEntered = function onFullScreenEntered() {
          screenfull.off('fullscreenchange', onFullScreenEntered);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenEntered);
        element = element || document.documentElement;
        var returnPromise = element[fn.requestFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenEntered).catch(reject);
        }
      });
    },
    exit: function exit() {
      return new Promise(function (resolve, reject) {
        if (!screenfull.isFullscreen) {
          resolve();
          return;
        }

        var onFullScreenExit = function onFullScreenExit() {
          screenfull.off('fullscreenchange', onFullScreenExit);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenExit);
        var returnPromise = document[fn.exitFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenExit).catch(reject);
        }
      });
    },
    on: function on(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.addEventListener(eventName, callback);
      }
    },
    off: function off(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.removeEventListener(eventName, callback);
      }
    }
  };
  Object.defineProperties(screenfull, {
    isFullscreen: {
      get: function get() {
        return Boolean(document[fn.fullscreenElement]);
      }
    },
    element: {
      enumerable: true,
      get: function get() {
        return document[fn.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: true,
      get: function get() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[fn.fullscreenEnabled]);
      }
    }
  });
  return screenfull;
}

var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};

var Player = /*#__PURE__*/function () {
  /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
  function Player(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Player);

    /* global jQuery */
    if (window.jQuery && element instanceof jQuery) {
      if (element.length > 1 && window.console && console.warn) {
        console.warn('A jQuery object with multiple elements was passed, using the first element.');
      }

      element = element[0];
    } // Find an element by ID


    if (typeof document !== 'undefined' && typeof element === 'string') {
      element = document.getElementById(element);
    } // Not an element!


    if (!isDomElement(element)) {
      throw new TypeError('You must pass either a valid element or a valid id.');
    } // Already initialized an embed in this div, so grab the iframe


    if (element.nodeName !== 'IFRAME') {
      var iframe = element.querySelector('iframe');

      if (iframe) {
        element = iframe;
      }
    } // iframe url is not a Vimeo url


    if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
      throw new Error('The player element passed isn???t a Vimeo embed.');
    } // If there is already a player object in the map, return that


    if (playerMap.has(element)) {
      return playerMap.get(element);
    }

    this._window = element.ownerDocument.defaultView;
    this.element = element;
    this.origin = '*';
    var readyPromise = new npo_src(function (resolve, reject) {
      _this._onMessage = function (event) {
        if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
          return;
        }

        if (_this.origin === '*') {
          _this.origin = event.origin;
        }

        var data = parseMessageData(event.data);
        var isError = data && data.event === 'error';
        var isReadyError = isError && data.data && data.data.method === 'ready';

        if (isReadyError) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          reject(error);
          return;
        }

        var isReadyEvent = data && data.event === 'ready';
        var isPingResponse = data && data.method === 'ping';

        if (isReadyEvent || isPingResponse) {
          _this.element.setAttribute('data-ready', 'true');

          resolve();
          return;
        }

        processData(_this, data);
      };

      _this._window.addEventListener('message', _this._onMessage);

      if (_this.element.nodeName !== 'IFRAME') {
        var params = getOEmbedParameters(element, options);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function (data) {
          var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
          // but store reference to the original element

          _this.element = iframe;
          _this._originalElement = element;
          swapCallbacks(element, iframe);
          playerMap.set(_this.element, _this);
          return data;
        }).catch(reject);
      }
    }); // Store a copy of this Player in the map

    readyMap.set(this, readyPromise);
    playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
    // the player is already ready.

    if (this.element.nodeName === 'IFRAME') {
      postMessage(this, 'ping');
    }

    if (screenfull.isEnabled) {
      var exitFullscreen = function exitFullscreen() {
        return screenfull.exit();
      };

      this.fullscreenchangeHandler = function () {
        if (screenfull.isFullscreen) {
          storeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } else {
          removeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } // eslint-disable-next-line


        _this.ready().then(function () {
          postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);
        });
      };

      screenfull.on('fullscreenchange', this.fullscreenchangeHandler);
    }

    return this;
  }
  /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */


  _createClass(Player, [{
    key: "callMethod",
    value: function callMethod(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new npo_src(function (resolve, reject) {
        // We are storing the resolve/reject handlers to call later, so we
        // can???t return here.
        // eslint-disable-next-line promise/always-return
        return _this2.ready().then(function () {
          storeCallback(_this2, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this2, name, args);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we
        // can???t return here.
        // eslint-disable-next-line promise/always-return

        return _this3.ready().then(function () {
          storeCallback(_this3, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this3, name);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */

  }, {
    key: "set",
    value: function set(name, value) {
      var _this4 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'set');

        if (value === undefined || value === null) {
          throw new TypeError('There must be a value to set.');
        } // We are storing the resolve/reject handlers to call later, so we
        // can???t return here.
        // eslint-disable-next-line promise/always-return


        return _this4.ready().then(function () {
          storeCallback(_this4, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this4, name, value);
        }).catch(reject);
      });
    }
    /**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */

  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (!callback) {
        throw new TypeError('You must pass a callback function.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var callbacks = getCallbacks(this, "event:".concat(eventName));

      if (callbacks.length === 0) {
        this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }

      storeCallback(this, "event:".concat(eventName), callback);
    }
    /**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn???t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */

  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (callback && typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener

      if (lastCallback) {
        this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }
    }
    /**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id or url successfully loaded.
     * @reject {TypeError} The id was not a number.
     */

    /**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
     * @return {LoadVideoPromise}
     */

  }, {
    key: "loadVideo",
    value: function loadVideo(options) {
      return this.callMethod('loadVideo', options);
    }
    /**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     */

    /**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */

  }, {
    key: "ready",
    value: function ready() {
      var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {
        reject(new Error('Unknown player. Probably unloaded.'));
      });
      return npo_src.resolve(readyPromise);
    }
    /**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video???s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */

  }, {
    key: "addCuePoint",
    value: function addCuePoint(time) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.callMethod('addCuePoint', {
        time: time,
        data: data
      });
    }
    /**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */

  }, {
    key: "removeCuePoint",
    value: function removeCuePoint(id) {
      return this.callMethod('removeCuePoint', id);
    }
    /**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human???readable label for the track.
     */

    /**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     */

    /**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer???s
     * stored preference.
     *
     * @param {string} language The two???letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */

  }, {
    key: "enableTextTrack",
    value: function enableTextTrack(language, kind) {
      if (!language) {
        throw new TypeError('You must pass a language.');
      }

      return this.callMethod('enableTextTrack', {
        language: language,
        kind: kind
      });
    }
    /**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     */

    /**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */

  }, {
    key: "disableTextTrack",
    value: function disableTextTrack() {
      return this.callMethod('disableTextTrack');
    }
    /**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     */

    /**
     * Pause the video if it???s playing.
     *
     * @return {PausePromise}
     */

  }, {
    key: "pause",
    value: function pause() {
      return this.callMethod('pause');
    }
    /**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     */

    /**
     * Play the video if it???s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */

  }, {
    key: "play",
    value: function play() {
      return this.callMethod('play');
    }
    /**
     * Request that the player enters fullscreen.
     * @return {Promise}
     */

  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.request(this.element);
      }

      return this.callMethod('requestFullscreen');
    }
    /**
     * Request that the player exits fullscreen.
     * @return {Promise}
     */

  }, {
    key: "exitFullscreen",
    value: function exitFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.exit();
      }

      return this.callMethod('exitFullscreen');
    }
    /**
     * Returns true if the player is currently fullscreen.
     * @return {Promise}
     */

  }, {
    key: "getFullscreen",
    value: function getFullscreen() {
      if (screenfull.isEnabled) {
        return npo_src.resolve(screenfull.isFullscreen);
      }

      return this.get('fullscreen');
    }
    /**
     * Request that the player enters picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "requestPictureInPicture",
    value: function requestPictureInPicture() {
      return this.callMethod('requestPictureInPicture');
    }
    /**
     * Request that the player exits picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "exitPictureInPicture",
    value: function exitPictureInPicture() {
      return this.callMethod('exitPictureInPicture');
    }
    /**
     * Returns true if the player is currently picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "getPictureInPicture",
    value: function getPictureInPicture() {
      return this.get('pictureInPicture');
    }
    /**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     */

    /**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */

  }, {
    key: "unload",
    value: function unload() {
      return this.callMethod('unload');
    }
    /**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      return new npo_src(function (resolve) {
        readyMap.delete(_this5);
        playerMap.delete(_this5.element);

        if (_this5._originalElement) {
          playerMap.delete(_this5._originalElement);

          _this5._originalElement.removeAttribute('data-vimeo-initialized');
        }

        if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
          // If we've added an additional wrapper div, remove that from the DOM.
          // If not, just remove the iframe element.
          if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) {
            _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
          } else {
            _this5.element.parentNode.removeChild(_this5.element);
          }
        } // If the clip is private there is a case where the element stays the
        // div element. Destroy should reset the div and remove the iframe child.


        if (_this5.element && _this5.element.nodeName === 'DIV' && _this5.element.parentNode) {
          _this5.element.removeAttribute('data-vimeo-initialized');

          var iframe = _this5.element.querySelector('iframe');

          if (iframe && iframe.parentNode) {
            // If we've added an additional wrapper div, remove that from the DOM.
            // If not, just remove the iframe element.
            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) {
              iframe.parentNode.parentNode.removeChild(iframe.parentNode);
            } else {
              iframe.parentNode.removeChild(iframe);
            }
          }
        }

        _this5._window.removeEventListener('message', _this5._onMessage);

        if (screenfull.isEnabled) {
          screenfull.off('fullscreenchange', _this5.fullscreenchangeHandler);
        }

        resolve();
      });
    }
    /**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */

  }, {
    key: "getAutopause",
    value: function getAutopause() {
      return this.get('autopause');
    }
    /**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */

  }, {
    key: "setAutopause",
    value: function setAutopause(autopause) {
      return this.set('autopause', autopause);
    }
    /**
     * A promise to get the buffered property of the video.
     *
     * @promise GetBufferedPromise
     * @fulfill {Array} Buffered Timeranges converted to an Array.
     */

    /**
     * Get the buffered property of the video.
     *
     * @return {GetBufferedPromise}
     */

  }, {
    key: "getBuffered",
    value: function getBuffered() {
      return this.get('buffered');
    }
    /**
     * @typedef {Object} CameraProperties
     * @prop {number} props.yaw - Number between 0 and 360.
     * @prop {number} props.pitch - Number between -90 and 90.
     * @prop {number} props.roll - Number between -180 and 180.
     * @prop {number} props.fov - The field of view in degrees.
     */

    /**
     * A promise to get the camera properties of the player.
     *
     * @promise GetCameraPromise
     * @fulfill {CameraProperties} The camera properties.
     */

    /**
     * For 360?? videos get the camera properties for this player.
     *
     * @return {GetCameraPromise}
     */

  }, {
    key: "getCameraProps",
    value: function getCameraProps() {
      return this.get('cameraProps');
    }
    /**
     * A promise to set the camera properties of the player.
     *
     * @promise SetCameraPromise
     * @fulfill {Object} The camera was successfully set.
     * @reject {RangeError} The range was out of bounds.
     */

    /**
     * For 360?? videos set the camera properties for this player.
     *
     * @param {CameraProperties} camera The camera properties
     * @return {SetCameraPromise}
     */

  }, {
    key: "setCameraProps",
    value: function setCameraProps(camera) {
      return this.set('cameraProps', camera);
    }
    /**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     */

    /**
     * A promise to get chapters for the video.
     *
     * @promise GetChaptersPromise
     * @fulfill {VimeoChapter[]} The chapters for the video.
     */

    /**
     * Get an array of all the chapters for the video.
     *
     * @return {GetChaptersPromise}
     */

  }, {
    key: "getChapters",
    value: function getChapters() {
      return this.get('chapters');
    }
    /**
     * A promise to get the currently active chapter.
     *
     * @promise GetCurrentChaptersPromise
     * @fulfill {VimeoChapter|undefined} The current chapter for the video.
     */

    /**
     * Get the currently active chapter for the video.
     *
     * @return {GetCurrentChaptersPromise}
     */

  }, {
    key: "getCurrentChapter",
    value: function getCurrentChapter() {
      return this.get('currentChapter');
    }
    /**
     * A promise to get the color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     */

    /**
     * Get the color for this player.
     *
     * @return {GetColorPromise}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.get('color');
    }
    /**
     * A promise to set the color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */

    /**
     * Set the color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */

  }, {
    key: "setColor",
    value: function setColor(color) {
      return this.set('color', color);
    }
    /**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */

    /**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */

  }, {
    key: "getCuePoints",
    value: function getCuePoints() {
      return this.get('cuePoints');
    }
    /**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     */

    /**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.get('currentTime');
    }
    /**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video???s duration.
     */

    /**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(currentTime) {
      return this.set('currentTime', currentTime);
    }
    /**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     */

    /**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.get('duration');
    }
    /**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     */

    /**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */

  }, {
    key: "getEnded",
    value: function getEnded() {
      return this.get('ended');
    }
    /**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     */

    /**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getLoop",
    value: function getLoop() {
      return this.get('loop');
    }
    /**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     */

    /**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */

  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      return this.set('loop', loop);
    }
    /**
     * A promise to set the muted state of the player.
     *
     * @promise SetMutedPromise
     * @fulfill {boolean} The muted state that was set.
     */

    /**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */

  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      return this.set('muted', muted);
    }
    /**
     * A promise to get the muted state of the player.
     *
     * @promise GetMutedPromise
     * @fulfill {boolean} Whether or not the player is muted.
     */

    /**
     * Get the muted state of the player.
     *
     * @return {GetMutedPromise}
     */

  }, {
    key: "getMuted",
    value: function getMuted() {
      return this.get('muted');
    }
    /**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     */

    /**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getPaused",
    value: function getPaused() {
      return this.get('paused');
    }
    /**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.
     */

    /**
     * Get the playback rate of the player on a scale from `0.5` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.get('playbackRate');
    }
    /**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.
     */

    /**
     * Set the playback rate of the player on a scale from `0.5` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(playbackRate) {
      return this.set('playbackRate', playbackRate);
    }
    /**
     * A promise to get the played property of the video.
     *
     * @promise GetPlayedPromise
     * @fulfill {Array} Played Timeranges converted to an Array.
     */

    /**
     * Get the played property of the video.
     *
     * @return {GetPlayedPromise}
     */

  }, {
    key: "getPlayed",
    value: function getPlayed() {
      return this.get('played');
    }
    /**
     * A promise to get the qualities available of the current video.
     *
     * @promise GetQualitiesPromise
     * @fulfill {Array} The qualities of the video.
     */

    /**
     * Get the qualities of the current video.
     *
     * @return {GetQualitiesPromise}
     */

  }, {
    key: "getQualities",
    value: function getQualities() {
      return this.get('qualities');
    }
    /**
     * A promise to get the current set quality of the video.
     *
     * @promise GetQualityPromise
     * @fulfill {string} The current set quality.
     */

    /**
     * Get the current set quality of the video.
     *
     * @return {GetQualityPromise}
     */

  }, {
    key: "getQuality",
    value: function getQuality() {
      return this.get('quality');
    }
    /**
     * A promise to set the video quality.
     *
     * @promise SetQualityPromise
     * @fulfill {number} The quality was set.
     * @reject {RangeError} The quality is not available.
     */

    /**
     * Set a video quality.
     *
     * @param {string} quality
     * @return {SetQualityPromise}
     */

  }, {
    key: "setQuality",
    value: function setQuality(quality) {
      return this.set('quality', quality);
    }
    /**
     * A promise to get the seekable property of the video.
     *
     * @promise GetSeekablePromise
     * @fulfill {Array} Seekable Timeranges converted to an Array.
     */

    /**
     * Get the seekable property of the video.
     *
     * @return {GetSeekablePromise}
     */

  }, {
    key: "getSeekable",
    value: function getSeekable() {
      return this.get('seekable');
    }
    /**
     * A promise to get the seeking property of the player.
     *
     * @promise GetSeekingPromise
     * @fulfill {boolean} Whether or not the player is currently seeking.
     */

    /**
     * Get if the player is currently seeking.
     *
     * @return {GetSeekingPromise}
     */

  }, {
    key: "getSeeking",
    value: function getSeeking() {
      return this.get('seeking');
    }
    /**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     */

    /**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */

  }, {
    key: "getTextTracks",
    value: function getTextTracks() {
      return this.get('textTracks');
    }
    /**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     */

    /**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */

  }, {
    key: "getVideoEmbedCode",
    value: function getVideoEmbedCode() {
      return this.get('videoEmbedCode');
    }
    /**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     */

    /**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */

  }, {
    key: "getVideoId",
    value: function getVideoId() {
      return this.get('videoId');
    }
    /**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     */

    /**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */

  }, {
    key: "getVideoTitle",
    value: function getVideoTitle() {
      return this.get('videoTitle');
    }
    /**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     */

    /**
     * Get the native width of the currently???playing video. The width of
     * the highest???resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */

  }, {
    key: "getVideoWidth",
    value: function getVideoWidth() {
      return this.get('videoWidth');
    }
    /**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     */

    /**
     * Get the native height of the currently???playing video. The height of
     * the highest???resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */

  }, {
    key: "getVideoHeight",
    value: function getVideoHeight() {
      return this.get('videoHeight');
    }
    /**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn???t available because of the video???s privacy setting.
     */

    /**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */

  }, {
    key: "getVideoUrl",
    value: function getVideoUrl() {
      return this.get('videoUrl');
    }
    /**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     */

    /**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.get('volume');
    }
    /**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     */

    /**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer???s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      return this.set('volume', volume);
    }
  }]);

  return Player;
}(); // Setup embed only if this is not a node environment


if (!isNode) {
  screenfull = initializeScreenfull();
  initializeEmbeds();
  resizeEmbeds();
}

const YduqsVideoPlayer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.src = '';
  }
  componentWilLoad() {
    this.playerId = this.playerId ? `c_video_player_${this.playerId}` : 'c_video_player';
    this.playerObj = new Player(this.playerId);
  }
  coverRemove() {
    this.covered = false;
  }
  render() {
    return (index.h("div", { class: {
        'c-video-player': true,
        'covered': this.covered
      } }, index.h("div", { onClick: () => this.coverRemove(), class: {
        'c-video-player__cover': true
      }, style: { 'background-color': `${this.bgcolor}` } }, index.h("svg", { class: "c-video-player__cover-icon", width: "54", height: "54", viewBox: "0 0 54 54", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M27 14.625C33.21 14.625 38.25 19.665 38.25 25.875C38.25 27.0225 38.025 28.125 37.71 29.16L44.595 36.045C47.7225 33.2775 50.1975 29.8125 51.75 25.8525C47.8575 15.9975 38.25 9.00003 27 9.00003C24.1425 9.00003 21.3975 9.45003 18.81 10.2825L23.6925 15.165C24.75 14.85 25.8525 14.625 27 14.625ZM6.0975 7.11003C5.22 7.98753 5.22 9.40503 6.0975 10.2825L10.53 14.715C6.885 17.6175 3.9825 21.4425 2.25 25.875C6.1425 35.7525 15.75 42.75 27 42.75C30.42 42.75 33.6825 42.075 36.6975 40.905L42.8175 47.025C43.695 47.9025 45.1125 47.9025 45.99 47.025C46.8675 46.1475 46.8675 44.73 45.99 43.8525L9.2925 7.11003C8.415 6.23253 6.975 6.23253 6.0975 7.11003ZM27 37.125C20.79 37.125 15.75 32.085 15.75 25.875C15.75 24.1425 16.155 22.5 16.8525 21.06L20.385 24.5925C20.3175 24.9975 20.25 25.425 20.25 25.875C20.25 29.61 23.265 32.625 27 32.625C27.45 32.625 27.855 32.5575 28.2825 32.4675L31.815 36C30.3525 36.72 28.7325 37.125 27 37.125ZM33.6825 25.1325C33.345 21.9825 30.87 19.53 27.7425 19.1925L33.6825 25.1325Z", fill: "white" })), index.h("p", { class: "c-video-player__text" }, index.h("span", { class: "c-video-player__cover-title" }, "Conte\u00FAdo sens\u00EDvel "), index.h("br", null), "Esse conte\u00FAdo pode conter material sens\u00EDvel.")), index.h("iframe", { id: this.playerId, src: this.src, width: this.width, height: this.height, allowFullScreen: true })));
  }
};

const YduqsImageFullScreen = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.max = 20;
    this.min = 0;
    this.step = 1;
    this.val = 0;
    // Global vars to cache event state
    this.evCache = new Array();
    this.prevDiff = -1;
    this.mouseScrollEventName = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
    this.lastX = 0;
    this.lastY = 0;
    this.refX = 0;
    this.refY = 0;
  }
  handleClick(event) {
    const { className } = event.target;
    const list = className.split(' ');
    if (list.includes('p-img') || list.includes('p-btn')) {
      this.fullScreen = !this.fullScreen;
    }
  }
  reset() {
    if (this.fullScreen) {
      this.initialWidth = this.img.clientWidth;
    }
    this.rangeOutput(0);
    this.setImgMargins({ left: 0, top: 0 });
  }
  /**
   * Seta o valor da Larura da imagem
   * @param value
   */
  setImgWidth(value) {
    this.img.style.width = `calc(${this.initialWidth}px + ${value * 10}%)`;
  }
  /**
   * informa se um valor ?? negativo
   * @param value
   * @returns true | false
   */
  isNegative(value) {
    return value < 0;
  }
  /**
   * Seta a margem m??xima de arraste da imagem para n??o sair do viewScreen
   * @param options
   *   @property top
   *   @property left
   */
  setImgMargins(options) {
    const imgH = this.img.clientHeight;
    const imgW = this.img.clientWidth;
    const conH = this.container.clientHeight;
    const conW = this.container.clientWidth;
    const maxLeftMargin = imgW <= conW ? 0 : (imgW - conW) / 2;
    const maxTopMargin = imgH <= conH ? 0 : (imgH - conH) / 2;
    let left;
    if (this.isNegative(options.left)) {
      left = options.left < -maxLeftMargin ? -maxLeftMargin : options.left;
    }
    else {
      left = options.left > maxLeftMargin ? maxLeftMargin : options.left;
    }
    let top;
    if (this.isNegative(options.top)) {
      top = options.top < -maxTopMargin ? -maxTopMargin : options.top;
    }
    else {
      top = options.top > maxTopMargin ? maxTopMargin : options.top;
    }
    this.lastX = left;
    this.lastY = top;
    this.img.style.marginLeft = `${left}px`;
    this.img.style.marginTop = `${top}px`;
  }
  /**
   * Verifica o valor inserido, e seta width e margens da imagem
   * @param value
   */
  rangeOutput(value) {
    this.val = value > this.max ? this.max : value < this.min ? this.min : value;
    this.setImgWidth(this.val);
    this.setImgMargins({ left: this.lastX, top: this.lastY });
  }
  /**
   * Cria um cache dos eventos para suportar intera????o com 2 pontos de toque
   * @param ev
   */
  handlePointerDown(ev) {
    this.evCache.push(ev);
  }
  /**
   * Atualiza o evento do Cache
   * @param ev
   */
  handlePointerMove(ev) {
    for (var i = 0; i < this.evCache.length; i++) {
      if (ev.pointerId == this.evCache[i].pointerId) {
        this.evCache[i] = ev;
        break;
      }
    }
    if (this.evCache.length == 2) {
      var curDiff = Math.abs(this.evCache[0].clientX - this.evCache[1].clientX);
      if (this.prevDiff > 0) {
        if (curDiff > this.prevDiff) {
          this.rangeOutput(this.val + this.step);
        }
        if (curDiff < this.prevDiff) {
          this.rangeOutput(this.val - this.step);
        }
      }
      this.prevDiff = curDiff;
    }
  }
  /**
   * Processo de saida dos toques
   * @param ev
   */
  handlePointerUp(ev) {
    this.removeEvent(ev);
    if (this.evCache.length < 2)
      this.prevDiff = -1;
  }
  /**
   * Remove um evento do Cache
   * @param ev
   */
  removeEvent(ev) {
    for (var i = 0; i < this.evCache.length; i++) {
      if (this.evCache[i].pointerId == ev.pointerId) {
        this.evCache.splice(i, 1);
        break;
      }
    }
  }
  /**
   * Previne o funcionamento padr??o de toque quando houver mais de 1 toque simult??neo
   * @param e Evento de Toque
   */
  handleTouchStart(e) {
    var _a;
    if (((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a.length) === 2) {
      e.preventDefault();
    }
  }
  /**
   * Verifica se a dire????o do Scroll foi Vertical
   * @param e Evento de mudan??a no scroll do mouse
   * @returns
   */
  scrollDirectionIsUpDown(e) {
    return (e.deltaY || e.wheelDeltaY) !== 0;
  }
  /**
   * Normaliza os valores do scroll do mouse em diferentes navegadores
   * @param e Evento de mudan??a no scroll do mouse
   * @returns
   */
  normalizeScrollData(e) {
    var normalized;
    if (e.wheelDelta) {
      normalized = (e.wheelDelta % 120) - 0 == -0 ? e.wheelDelta / 120 : e.wheelDelta / 12;
    }
    else {
      var rawAmmount = e.deltaY ? e.deltaY : e.detail;
      normalized = -(rawAmmount % 3 ? rawAmmount * 10 : rawAmmount / 3);
    }
    return normalized;
  }
  /**
   *
   * @param e Evento de mudan??a no scroll do mouse
   */
  handleMouseScroll(e) {
    if (!this.fullScreen || !this.scrollDirectionIsUpDown(e))
      return;
    e.preventDefault();
    if (this.normalizeScrollData(e) > 0) {
      this.rangeOutput(this.val + this.step);
    }
    else {
      this.rangeOutput(this.val - this.step);
    }
  }
  /**
   * Inicia o Arrastar de um elemento
   * @param e
   */
  handleDragStart(e) {
    this.dragXStart = e.screenX;
    this.dragYStart = e.screenY;
  }
  /**
   * Chamado em Loop quando o Arrastar esta sobre um elemento
   * @param e
   */
  handleDragOver(e) {
    this.setImgMargins({
      top: this.lastY + (e.screenY - this.dragYStart) * 0.07,
      left: this.lastX + (e.screenX - this.dragXStart) * 0.07,
    });
  }
  /**
   * Finaliza????o do movimento de Arrastar
   * @param e
   */
  handleDragEnd(e) {
    this.lastX = this.lastX + (e.screenX - this.dragXStart);
    this.lastY = this.lastY + (e.screenY - this.dragYStart);
  }
  /**
   * Inicia o movimento de arratar em telas de toque
   * @param e
   */
  handleTouchDragStart(e) {
    var _a;
    if (((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a.length) === 1) {
      const touch = e.targetTouches[0];
      this.dragXStart = touch === null || touch === void 0 ? void 0 : touch.screenX;
      this.dragYStart = touch === null || touch === void 0 ? void 0 : touch.screenY;
    }
  }
  /**
   * Chamado em Loop enquanto o elemento ?? arrastado
   * @param e
   */
  handleTouchDragMove(e) {
    var _a;
    if (((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a.length) === 1) {
      const touch = e.targetTouches[0];
      const nX = (touch.screenX - this.dragXStart) * 0.1;
      const nY = (touch.screenY - this.dragYStart) * 0.1;
      this.setImgMargins({
        left: this.lastX + (nX != this.refX ? nX : 0),
        top: this.lastY + (nY != this.refY ? nY : 0),
      });
      this.refX = nX != this.refX ? nX : this.refX;
      this.refY = nY != this.refY ? nY : this.refY;
    }
  }
  /**
   * Finaliza o movimento de arrastar
   * @param e
   */
  handleTouchDragEnd(e) {
    var _a;
    if (((_a = e.targetTouches) === null || _a === void 0 ? void 0 : _a.length) === 1) {
      const touch = e.targetTouches[0];
      this.lastX = this.lastX + (touch.screenX - this.dragXStart);
      this.lastY = this.lastY + (touch.screenY - this.dragYStart);
    }
  }
  componentDidLoad() {
    this.img.onpointerdown = ev => this.handlePointerDown(ev);
    this.img.onpointermove = ev => this.handlePointerMove(ev);
    this.img.onpointerup = ev => this.handlePointerUp(ev);
    this.img.onpointercancel = ev => this.handlePointerUp(ev);
    this.img.onpointerout = ev => this.handlePointerUp(ev);
    this.img.onpointerleave = ev => this.handlePointerUp(ev);
    this.img.addEventListener('touchstart', e => this.handleTouchStart(e), { passive: false });
    this.img.addEventListener(this.mouseScrollEventName, e => this.handleMouseScroll(e));
  }
  render() {
    return (index.h(index.Host, { class: "c-image-full-screen" }, index.h("div", { class: `p-${this.fullScreen ? 'full-screen' : 'preview'}`, ref: r => (this.container = r) }, index.h("button", { type: "button", class: "c-button c-button__icon-container c-button__icon-small u-text--small p-btn p-open-in-full" }, index.h("span", { class: "p-btn c-button__icon material-icons" }, this.fullScreen ? 'close' : 'open_in_full')), index.h("img", { draggable: true, onTouchStart: e => this.handleTouchDragStart(e), onTouchMove: e => this.handleTouchDragMove(e), onTouchEnd: e => this.handleTouchDragEnd(e), onDragStart: e => this.handleDragStart(e), onDragOver: e => this.handleDragOver(e), onDragEnd: e => this.handleDragEnd(e), class: "p-img", src: this.src, alt: this.alt, ref: r => (this.img = r) }), this.fullScreen && (index.h("div", { class: "p-range-container" }, index.h("yduqs-range", { max: this.max, min: this.min, step: this.step, value: this.val, output: (value) => this.rangeOutput(value) }))))));
  }
  static get watchers() { return {
    "fullScreen": ["reset"]
  }; }
};

exports.yduqs_accordion = YduqsAccordion;
exports.yduqs_accordion_pane = YduqsAccordionPane;
exports.yduqs_audio_player = YduqsAudioPlayer;
exports.yduqs_card = YduqsCard;
exports.yduqs_card_body = YduqsCardBody;
exports.yduqs_card_comparativo = YduqsCardComparativo;
exports.yduqs_card_comparativo_body = YduqsCardComparativoBody;
exports.yduqs_card_comparativo_header = YduqsCardComparativoHeader;
exports.yduqs_card_comparativo_item = YduqsCardComparativoItem;
exports.yduqs_card_destaque = YduqsCardDestaque;
exports.yduqs_card_destaque_body = YduqsCardDestaqueBody;
exports.yduqs_card_destaque_header = YduqsCardDestaqueHeader;
exports.yduqs_card_header = YduqsCardHeader;
exports.yduqs_card_horizontal = CardHorizontal;
exports.yduqs_card_intro = YduqsCardIntro;
exports.yduqs_card_modulo = YduqsCardModulo;
exports.yduqs_card_modulo_body = YduqsCardModuloBody;
exports.yduqs_card_modulo_footer = YduqsCardModuloFooter;
exports.yduqs_card_modulo_header = YduqsCardModuloHeader;
exports.yduqs_card_selecionavel = YduqsCardSelecionavel;
exports.yduqs_card_selecionavel_item = YduqsCardSelecionavelItem;
exports.yduqs_card_video = PlaylistVideo$1;
exports.yduqs_cover = Textarea;
exports.yduqs_destaque_texto = DestaqueTexto;
exports.yduqs_footer = Footer;
exports.yduqs_gallery_video = GalleryVideo;
exports.yduqs_image = YduqsImage;
exports.yduqs_menu = YduqsMenu;
exports.yduqs_modal = YduqsModal;
exports.yduqs_module_cover = YduqsCodeSnipet;
exports.yduqs_module_rating = RatingModule;
exports.yduqs_module_video = ModuleVideo;
exports.yduqs_pager = YduqsPager;
exports.yduqs_playlist_video = PlaylistVideo;
exports.yduqs_progress_bar = YduqsProgressBar;
exports.yduqs_questions = YduqsQuestion;
exports.yduqs_quote = YduqsQuote;
exports.yduqs_quote_body = YduqsQuoteBody;
exports.yduqs_quote_image = YduqsQuoteImage;
exports.yduqs_range = YduqsRange;
exports.yduqs_rating = Rating;
exports.yduqs_search_bar = YduqsSearchBar;
exports.yduqs_tab = Tab;
exports.yduqs_tabs = Tabs;
exports.yduqs_timeline = Timeline;
exports.yduqs_timeline_item = TimelineItem;
exports.yduqs_title = Title;
exports.yduqs_video_player = YduqsVideoPlayer;
exports.yduqs_zoom_full_screen = YduqsImageFullScreen;
