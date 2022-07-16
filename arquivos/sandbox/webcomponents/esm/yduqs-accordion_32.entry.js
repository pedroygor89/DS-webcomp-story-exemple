import { r as registerInstance, h, g as getElement, c as createEvent, a as Host } from './index-c3ccce17.js';
import { g as getAugmentedNamespace } from './_commonjsHelpers-47400be3.js';

let YduqsAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { ref: (el) => (this.content = el), class: `c-accordion c-accordion--collapse ${outlineClass} ${activeClass}` }, h("slot", null)));
  }
  get element() { return getElement(this); }
};

let YduqsAccordionPane = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onToggle = createEvent(this, "togglepane", 7);
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
    return (h(Host, { class: "c-accordion-pane" }, h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-accordion__control ${isOpenClass}`, onClick: () => this.toggle() }, h("div", { class: "c-accordion__title" }, h("slot", { name: "c-accordion-header" })), h("span", { class: "c-accordion__icon material-icons" }, "expand_more")), h("div", { ref: (el) => (this.content = el), "aria-hidden": !this._isOpen, class: "c-accordion__item c-accordion__item--pane" }, h("slot", { name: "c-accordion-content" }))));
  }
};

class GreenAudioPlayer {
    constructor(player, options) {
        this.audioPlayer = typeof player === 'string' ? document.querySelector(player) : player;
        const opts = options || {};

        const audioElement = this.audioPlayer.innerHTML;
        this.audioPlayer.classList.add('green-audio-player');
        this.audioPlayer.innerHTML = GreenAudioPlayer.getTemplate() + audioElement;

        this.isDevice = /ipad|iphone|ipod|android/i.test(window.navigator.userAgent.toLowerCase()) && !window.MSStream;
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
        this.download = this.audioPlayer.querySelector('.download');
        this.downloadLink = this.audioPlayer.querySelector('.download__link');
        this.span = this.audioPlayer.querySelectorAll('.message__offscreen');
        this.svg = this.audioPlayer.getElementsByTagName('svg');
        this.img = this.audioPlayer.getElementsByTagName('img');
        this.draggableClasses = ['pin'];
        this.currentlyDragged = null;
        this.stopOthersOnPlay = opts.stopOthersOnPlay || false;
        this.enableKeystrokes = opts.enableKeystrokes || false;
        this.showTooltips = opts.showTooltips || false;

        const self = this;

        this.labels = {
            volume: {
                open: 'Open Volume Controls',
                close: 'Close Volume Controls',
            },
            pause: 'Pause',
            play: 'Play',
            download: 'Download',
        };

        if (!this.enableKeystrokes) {
            for (let i = 0; i < this.span.length; i++) {
                this.span[i].outerHTML = '';
            }
        } else {
            window.addEventListener('keydown', this.pressKb.bind(self), false);
            window.addEventListener('keyup', this.unPressKb.bind(self), false);
            this.sliders[0].setAttribute('tabindex', 0);
            this.sliders[1].setAttribute('tabindex', 0);
            this.download.setAttribute('tabindex', -1);
            this.downloadLink.setAttribute('tabindex', -1);
            for (let j = 0; j < this.svg.length; j++) {
                this.svg[j].setAttribute('tabindex', 0);
                this.svg[j].setAttribute('focusable', true);
            }
            for (let k = 0; k < this.img.length; k++) {
                this.img[k].setAttribute('tabindex', 0);
            }
        }

        if (this.showTooltips) {
            this.playPauseBtn.setAttribute('title', this.labels.play);
            this.volumeBtn.setAttribute('title', this.labels.volume.open);
            this.downloadLink.setAttribute('title', this.labels.download);
        }

        if (opts.outlineControls || false) {
            this.audioPlayer.classList.add('player-accessible');
        }

        if (opts.showDownloadButton || false) {
            this.showDownload();
        }

        this.initEvents();
        this.directionAware();
        this.overcomeIosLimitations();

        if ('autoplay' in this.player.attributes) {
            const promise = this.player.play();
            if (promise !== undefined) {
                promise.then(() => {
                    const playPauseButton = self.player.parentElement.querySelector('.play-pause-btn__icon');
                    playPauseButton.attributes.d.value = 'M0 0h6v24H0zM12 0h6v24h-6z';
                    self.playPauseBtn.setAttribute('aria-label', self.labels.pause);
                    self.hasSetAttribute(self.playPauseBtn, 'title', self.labels.pause);
                }).catch(() => {
                    // eslint-disable-next-line no-console
                    console.error('Green Audio Player Error: Autoplay has been prevented, because it is not allowed by this browser.');
                });
            }
        }
        if ('preload' in this.player.attributes && this.player.attributes.preload.value === 'none') {
            this.playPauseBtn.style.visibility = 'visible';
            this.loading.style.visibility = 'hidden';
        }
    }

    static init(options) {
        const players = document.querySelectorAll(options.selector);

        players.forEach((player) => {
            /* eslint-disable no-new */
            new GreenAudioPlayer(player, options);
        });
    }

    static getTemplate() {
        return `
            <div class="holder">
                <div class="loading">
                    <div class="loading__spinner"></div>
                </div>

                <div class="play-pause-btn" aria-label="Play" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24">
                        <path fill="#566574" fill-rule="evenodd" d="M18 12L0 24V0" class="play-pause-btn__icon"/>
                    </svg>
                </div>
            </div>

            <div class="controls">
                <span class="controls__current-time" aria-live="off" role="timer">00:00</span>
                <div class="controls__slider slider" data-direction="horizontal">
                    <div class="controls__progress gap-progress" aria-label="Time Slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="slider">
                        <div class="pin progress__pin" data-method="rewind"></div>
                    </div>
                </div>
                <span class="controls__total-time">00:00</span>
            </div>

            <div class="volume">
                <div class="volume__button" aria-label="Open Volume Controls" role="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path class="volume__speaker" fill="#566574" fill-rule="evenodd" d="M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z"/>
                    </svg>
                    <span class="message__offscreen">Press Enter or Space to show volume slider.</span>
                </div>
                <div class="volume__controls hidden">
                    <div class="volume__slider slider" data-direction="vertical">
                        <div class="volume__progress gap-progress" aria-label="Volume Slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="81" role="slider">
                            <div class="pin volume__pin" data-method="changeVolume"></div>
                        </div>
                        <span class="message__offscreen">Use Up/Down Arrow keys to increase or decrease volume.</span>
                    </div>
                </div>
            </div>

            <div class="download">
                <a class="download__link" href="" download="" aria-label="Download" role="button">
                    <svg width="24" height="24" fill="#566574" enable-background="new 0 0 29.978 29.978" version="1.1" viewBox="0 0 29.978 29.978" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                        <path d="m25.462 19.105v6.848h-20.947v-6.848h-4.026v8.861c0 1.111 0.9 2.012 2.016 2.012h24.967c1.115 0 2.016-0.9 2.016-2.012v-8.861h-4.026z"/>
                        <path d="m14.62 18.426l-5.764-6.965s-0.877-0.828 0.074-0.828 3.248 0 3.248 0 0-0.557 0-1.416v-8.723s-0.129-0.494 0.615-0.494h4.572c0.536 0 0.524 0.416 0.524 0.416v8.742 1.266s1.842 0 2.998 0c1.154 0 0.285 0.867 0.285 0.867s-4.904 6.51-5.588 7.193c-0.492 0.495-0.964-0.058-0.964-0.058z"/>
                    </svg>
                </a>
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
                if (self.currentlyDragged.parentElement.parentElement === self.sliders[0]) {
                    self.paused = self.player.paused;
                    if (self.paused === false) self.togglePlay();
                }
                window.addEventListener('mouseup', () => {
                    if (self.currentlyDragged !== false
                        && self.currentlyDragged.parentElement.parentElement === self.sliders[0]
                        && self.paused !== self.player.paused) {
                        self.togglePlay();
                    }
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
                if (self.currentlyDragged.parentElement.parentElement === self.sliders[0]) {
                    self.paused = self.player.paused;
                    if (self.paused === false) self.togglePlay();
                }
                window.addEventListener('touchend', () => {
                    if (self.currentlyDragged !== false
                        && self.currentlyDragged.parentElement.parentElement === self.sliders[0]
                        && self.paused !== self.player.paused) {
                        self.togglePlay();
                    }
                    self.currentlyDragged = false;
                    window.removeEventListener('touchmove', listener, false);
                }, false);

                event.preventDefault();
            }
        });

        this.playPauseBtn.addEventListener('click', this.togglePlay.bind(self));
        this.player.addEventListener('timeupdate', this.updateProgress.bind(self));
        this.player.addEventListener('volumechange', this.updateVolume.bind(self));
        this.player.volume = 0.81;
        this.player.addEventListener('loadedmetadata', () => {
            self.totalTime.textContent = GreenAudioPlayer.formatTime(self.player.duration);
        });
        this.player.addEventListener('seeking', this.showLoadingIndicator.bind(self));
        this.player.addEventListener('seeked', this.hideLoadingIndicator.bind(self));
        this.player.addEventListener('canplay', this.hideLoadingIndicator.bind(self));
        this.player.addEventListener('ended', () => {
            GreenAudioPlayer.pausePlayer(self.player, 'ended');
            self.player.currentTime = 0;
            self.playPauseBtn.setAttribute('aria-label', self.labels.play);
            self.hasSetAttribute(self.playPauseBtn, 'title', self.labels.play);
        });

        this.volumeBtn.addEventListener('click', this.showHideVolume.bind(self));
        window.addEventListener('resize', self.directionAware.bind(self));
        window.addEventListener('scroll', self.directionAware.bind(self));

        for (let i = 0; i < this.sliders.length; i++) {
            const pin = this.sliders[i].querySelector('.pin');
            this.sliders[i].addEventListener('click', self[pin.dataset.method].bind(self));
        }

        this.downloadLink.addEventListener('click', this.downloadAudio.bind(self));
    }

    overcomeIosLimitations() {
        const self = this;
        if (this.isDevice) {
            // iOS does not support "canplay" event
            this.player.addEventListener('loadedmetadata', this.hideLoadingIndicator.bind(self));
            // iOS does not let "volume" property to be set programmatically
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
        this.progress.setAttribute('aria-valuenow', percent);
        this.progress.style.width = `${percent}%`;

        this.currentTime.textContent = GreenAudioPlayer.formatTime(current);
    }

    updateVolume() {
        this.volumeProgress.setAttribute('aria-valuenow', this.player.volume * 100);
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
        if (this.player.seekable && this.player.seekable.length) { // no seek if not (pre)loaded
            if (this.inRange(event)) {
                this.player.currentTime = this.player.duration * this.getCoefficient(event);
            }
        }
    }

    showVolume() {
        if (this.volumeBtn.getAttribute('aria-attribute') === this.labels.volume.open) {
            this.volumeControls.classList.remove('hidden');
            this.volumeBtn.classList.add('open');
            this.volumeBtn.setAttribute('aria-label', this.labels.volume.close);
            this.hasSetAttribute(this.volumeBtn, 'title', this.labels.volume.close);
        }
    }

    showHideVolume() {
        this.volumeControls.classList.toggle('hidden');

        if (this.volumeBtn.getAttribute('aria-label') === this.labels.volume.open) {
            this.volumeBtn.setAttribute('aria-label', this.labels.volume.close);
            this.hasSetAttribute(this.volumeBtn, 'title', this.labels.volume.close);
            this.volumeBtn.classList.add('open');
        } else {
            this.volumeBtn.setAttribute('aria-label', this.labels.volume.open);
            this.hasSetAttribute(this.volumeBtn, 'title', this.labels.volume.open);
            this.volumeBtn.classList.remove('open');
        }
    }

    changeVolume(event) {
        if (this.inRange(event)) {
            this.player.volume = Math.round(this.getCoefficient(event) * 50) / 50;
        }
    }

    static formatTime(time) {
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${(min < 10) ? `0${min}` : min}:${(sec < 10) ? `0${sec}` : sec}`;
    }

    preloadNone() {
        const self = this;
        if (!this.player.duration) {
            self.playPauseBtn.style.visibility = 'hidden';
            self.loading.style.visibility = 'visible';
        }
    }

    togglePlay() {
        this.preloadNone();
        if (this.player.paused) {
            if (this.stopOthersOnPlay) {
                GreenAudioPlayer.stopOtherPlayers();
            }
            GreenAudioPlayer.playPlayer(this.player);
            this.playPauseBtn.setAttribute('aria-label', this.labels.pause);
            this.hasSetAttribute(this.playPauseBtn, 'title', this.labels.pause);
        } else {
            GreenAudioPlayer.pausePlayer(this.player, 'toggle');
            this.playPauseBtn.setAttribute('aria-label', this.labels.play);
            this.hasSetAttribute(this.playPauseBtn, 'title', this.labels.play);
        }
    }

    hasSetAttribute(el, a, v) {
        if (this.showTooltips) {
            if (el.hasAttribute(a)) {
                el.setAttribute(a, v);
            }
        }
    }

    setCurrentTime(time) {
        const pos = this.player.currentTime;
        const end = Math.floor(this.player.duration);
        if (pos + time < 0 && pos === 0) {
            this.player.currentTime = this.player.currentTime;
        } else if (pos + time < 0) {
            this.player.currentTime = 0;
        } else if (pos + time > end) {
            this.player.currentTime = end;
        } else {
            this.player.currentTime += time;
        }
    }

    setVolume(volume) {
        if (this.isDevice) return;
        const vol = this.player.volume;
        if (vol + volume >= 0 && vol + volume < 1) {
            this.player.volume += volume;
        } else if (vol + volume <= 0) {
            this.player.volume = 0;
        } else {
            this.player.volume = 1;
        }
    }

    unPressKb(event) {
        const evt = event || window.event;
        if (this.seeking && (evt.keyCode === 37 || evt.keyCode === 39)) {
            this.togglePlay();
            this.seeking = false;
        }
    }

    pressKb(event) {
        const evt = event || window.event;
        switch (evt.keyCode) {
        case 13: // Enter
        case 32: // Spacebar
            if (document.activeElement.parentNode === this.playPauseBtn) {
                this.togglePlay();
            } else if (document.activeElement.parentNode === this.volumeBtn
                || document.activeElement === this.sliders[1]) {
                if (document.activeElement === this.sliders[1]) {
                    try { // IE 11 not supporting programmatic focus on svg elements
                        this.volumeBtn.children[0].focus();
                    } catch (error) {
                        this.volumeBtn.focus();
                    }
                }
                this.showHideVolume();
            }
            if (evt.keyCode === 13 && this.showDownload
                && document.activeElement.parentNode === this.downloadLink) {
                this.downloadLink.focus();
            }
            break;
        case 37: case 39: // horizontal Arrows
            if (document.activeElement === this.sliders[0]) {
                if (evt.keyCode === 37) {
                    this.setCurrentTime(-5);
                } else {
                    this.setCurrentTime(+5);
                }
                if (!this.player.paused && this.player.seeking) {
                    this.togglePlay();
                    this.seeking = true;
                }
            }
            break;
        case 38: case 40: // vertical Arrows
            if (document.activeElement.parentNode === this.volumeBtn
                || document.activeElement === this.sliders[1]) {
                if (evt.keyCode === 38) {
                    this.setVolume(0.05);
                } else {
                    this.setVolume(-0.05);
                }
            }
            if (document.activeElement.parentNode === this.volumeBtn) {
                this.showVolume();
            }
            break;
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
        this.playPauseBtn.style.visibility = 'hidden';
        this.loading.style.visibility = 'visible';
    }

    hideLoadingIndicator() {
        this.playPauseBtn.style.visibility = 'visible';
        this.loading.style.visibility = 'hidden';
    }

    showDownload() {
        this.download.style.display = 'block';
    }

    downloadAudio() {
        const src = this.player.currentSrc;
        const name = src.split('/').reverse()[0];

        this.downloadLink.setAttribute('href', src);
        this.downloadLink.setAttribute('download', name);
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

const require$$0 = /*@__PURE__*/getAugmentedNamespace(main);

var greenAudioPlayer = require$$0.default;

let YduqsAudioPlayer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.updateRate = createEvent(this, "updateRate", 7);
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
    return (h("div", { id: `audioPlayer` + this.audio_id, class: `${this.coloraudio} ${shortPlayerClass}` }, h("audio", { class: "c-audio__object" }, h("source", { src: this.src, type: "audio/mpeg" }, "O seu navegador n\u00E3o suporta o elemento ", h("code", null, "audio"), ".")), h("script", null, audioScript)));
  }
  static get watchers() { return {
    "rate": ["playbackRateHandler"]
  }; }
};

let YduqsCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dark = false;
    this.outlined = false;
    this.equal_height = false;
  }
  render() {
    const darkMode = this.dark ? 'c-card--dark' : '';
    const colorMode = this.outlined ? 'c-card--outlined' : darkMode;
    const equalHeight = this.equal_height ? 'h-100' : '';
    return (h(Host, { class: `c-card ${colorMode} ${equalHeight}` }, h("slot", null)));
  }
};

let YduqsCardBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "c-card__body" }, h("slot", null)));
  }
};

let YduqsCardHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("header", { class: "c-card__header" }, h("slot", null)));
  }
};

let CardHorizontal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "c-card-horizontal" }, h("header", null, h("div", { class: "card-icon" }, h("span", { class: "material-icons" }, this.card_icon)), h("div", { class: 'card-content row align-items-center justify-content-center g-0' }, h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, !this.isquestion ?
      h("div", { class: "card-image", style: { "background-image": "url('" + this.card_image + "')" } }, h("img", { src: this.card_image, alt: this.image_alt, title: this.image_title, loading: "lazy" }))
      :
        h("div", { class: "card-image", style: { "background-image": "url('" + imageDevice + "')" } }, h("img", { src: imageDevice, alt: "Aluno respondendo as quest\u00F5es", title: "Imagem Padr\u00E3o", loading: "lazy" }))), h("div", { class: 'col-sm-12 col-md-7 col-lg-7' }, h("div", { class: "card-header-text" }, h("h1", { class: "c-heading" }, h("slot", { name: "card-heading" })), h("h2", { class: "c-heading" }, h("slot", { name: "card-subheading" }))))))));
  }
};

let YduqsCardIntro = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.text = '';
  }
  render() {
    return (h(Host, { class: `c-card-intro` }, h("div", { class: "c-card-intro__title-container" }, h("h3", { class: "c-heading u-title-small" }, this.text)), h("div", { class: `c-card-intro__container c-card-intro--outline` }, h("div", { class: 'row align-items-center justify-content-center' }, h("div", { class: 'col-12 col-md-10 col-lg-8' }, h("slot", null))))));
  }
};

let YduqsCardModulo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onChange = createEvent(this, "changed", 7);
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
    return (h(Host, { class: `c-card-modulo` }, h("slot", null), h("div", { class: "c-card-modulo__progress" }, h("yduqs-progress-bar", { value: this.progress, semirounded: true }))));
  }
  get element() { return getElement(this); }
};

let YduqsCardModuloBody = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "c-card-modulo__body" }, h("slot", null)));
  }
};

let YduqsCardModuloFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "c-card-modulo__footer" }, h("slot", null)));
  }
};

let YduqsCardModuloHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "c-card-modulo__header" }, h("slot", null)));
  }
};

let YduqsCardSelecionavel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onSelect = createEvent(this, "selected", 7);
  }
  onSelectItem(ev) {
    const cardSelecionavel = this.element.children[0];
    const clicked = ev.detail;
    const item = ev.target;
    const idx = [].indexOf.call(cardSelecionavel.children, item);
    this.onSelect.emit({ idx, clicked });
  }
  render() {
    return (h(Host, { class: `c-card-selecionavel` }, h("slot", null)));
  }
  get element() { return getElement(this); }
};

let YduqsCardSelecionavelItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onSelectItem = createEvent(this, "onselect", 7);
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
    return (h(Host, { class: "c-card-selecionavel__item", id: `${opId}` }, h("button", { disabled: this.disabled, role: "heading", class: `c-card-selecionavel__control ${isSelectedClass}`, onClick: () => this.select() }, h("span", { class: "c-card-selecionavel__label" }, this.optionid), h("div", { class: "c-card-selecionavel__content" }, h("slot", null), h("div", { class: "c-card-selecionavel__icon-container" }, h("span", { class: `c-card-selecionavel__icon material-icons` }, this._isSelected ? 'done' : ''))))));
  }
};

let PlaylistVideo$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.active = false;
  }
  render() {
    const styleBorder = this.border_bottom ? 'border-bottom' : '';
    const video_active = this.active ? 'active' : '';
    return (h("div", { class: "c-card-video " + styleBorder }, h("div", { class: "c-card-video__thumb " + video_active }, h("yduqs-image", { src: this.thumb_video, alt: "" }), h("div", { class: "c-card-video__thumb_play" }, h("span", { class: "material-icons" }, "play_arrow"))), h("div", { class: "c-card-video__description" }, h("h2", { class: "c-heading", innerHTML: this.title_video }), h("p", { class: "c-paragraph", innerHTML: this.paragraph }), h("div", { class: "c-card-video__description_time" }, this.time))));
  }
};

let Textarea = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.teacher_avatar = 'false';
    this.teacher_link = 'false';
    this.collaboration_text = 'Colaboração';
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
    /* console.log(teacher_link); */
  }
  render() {
    return (h("div", { class: `c-cover` }, h("div", { class: "c-cover-bg c-cover-height", title: `${this.background_img_title}`, style: { "background-image": "url('" + this.background_img + "')" } }, h("div", { class: "container c-cover-height" }, h("div", { class: 'row align-items-end align-items-sm-center align-items-md-center align-items-lg-center justify-content-start c-cover-height' }, h("div", { class: `col-12 col-sm-12 ${this.xl_title ? 'xl-title col-md-10 col-lg-8' : this.lg_title ? 'lg-titles col-md-9 col-lg-7' : ' col-md-8 col-lg-6'}` }, h("div", { class: "theme-details" }, h("h1", null, h("span", { class: `${this.background_text ? 'theme_text_bg' : ''}`, innerHTML: this.title_cover })), this.teacher != 'false' ? // Se tiver Professor preenchido
      h("div", { class: "box-professor" }, this.names_prof.map((item) => h("div", { class: "avatar-professor" }, h("div", { class: `avatar-professor-img ${!this.teacher_avatar || this.avatar.length < this.professores.length || this.names_prof[0].img == "false" ? 'without-avatar' : ''}`, style: { "background-image": "url('" + item.img + "')" } }), h("h4", null, this.link.length == this.names_prof.length && this.names_prof[0].link != "false" ?
        (h("a", { href: `${item.link}`, target: "_blank" }, h("span", { class: `avatar-professor ${
          // Se tiver background_text
          this.background_text ?
            // Se tiver teacher_avatar
            this.teacher_avatar ?
              // Se tiver background_text e teacher_avatar
              'theme_text_bg_with-avatar'
              // Se tiver background_text e não tiver teacher_avatar
              : 'theme_text_bg_without-avatar'
            // Se não tiver background_text
            : this.teacher_avatar ?
              // Se não tiver background_text e tiver teacher_avatar
              'theme_text_bg_without_bg'
              // Se não tiver background_text e não tiver teacher_avatar
              : 'theme_without_avatar_without_bg'}`, innerHTML: item.name })))
        :
          (h("span", { class: `${
            // Se tiver background_text
            this.background_text ?
              // Se tiver background_text
              this.names_prof[0].img != "false" ?
                // Se o professor 1 tiver imagem
                'theme_text_bg_with-avatar'
                // Se o professor 1 não tiver imagem
                : 'theme_text_bg_without-avatar'
              // Se não tiver background_text
              : this.teacher_avatar ?
                // Se tiver teacher_avatar
                'theme_text_bg_without_bg'
                // Se não tiver teacher_avatar
                : 'theme_without_avatar_without_bg'}`, innerHTML: item.name }))))))
      : // Se não tiver Professor preenchido
        '', h("div", { class: `${this.names_clb.length >= 1 && this.names_clb[0].name != "false" && this.contributors ? '' : 'without-clb'}` }, h("h4", { class: "mb-1 mt-4 collaboration-title" }, this.collaboration_text), h("div", { class: "box-clb" }, this.names_clb.map((item) => h("div", { class: "ml-5 avatar-professor " }, h("h4", null, h("span", { class: `${this.background_text ? 'theme_text_bg_colaboradores' : 'theme_text_bg_colaboradores_without_bg'}`, innerHTML: item.name }))))))))))), h("div", { class: "container theme-definition-wrapper" }, h("div", { class: 'row align-items-center justify-content-center' }, h("div", { class: 'col-12' }, h("div", { class: "theme-definition" }, h("div", { class: 'row align-items-baseline justify-content-center' }, h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' }, h("h6", { class: "c-heading u-medium" }, this.english ? 'Description' : this.spanish ? 'Descripción' : 'Descrição')), h("div", { class: 'col-12 col-sm-12 col-md-9 col-lg-9' }, h("slot", { name: "yduqs-cover-definition" }))), h("div", { class: 'row align-items-baseline justify-content-center' }, h("div", { class: 'col-sm-12 col-md-3 col-lg-3' }, h("h6", { class: "c-heading u-medium" }, this.english ? 'Purpose' : this.spanish ? 'Propósito' : 'Propósito')), h("div", { class: 'col-sm-12 col-md-9 col-lg-9' }, h("slot", { name: "yduqs-cover-purpose" }))), this.cover_preparation ?
      h("div", { class: 'row align-items-baseline justify-content-center' }, h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' }, h("h6", { class: "c-heading u-medium" }, this.english ? 'Preparation' : this.spanish ? 'Preparación' : 'Preparação')), h("div", { class: 'col-sm-12 col-md-9 col-lg-9' }, h("slot", { name: 'yduqs-cover-preparation-text' })))
      : ''))))));
  }
};

let Footer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.english = false;
    this.spanish = false;
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
  render() {
    return (h("div", { class: "c-footer-bgColor" }, h("div", { class: "container" }, h("yduqs-title", { topic_title: this.english ? 'References' : this.spanish ? 'Referencias' : 'Referências' }), h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: "col-12 col-md-10 col-lg-8" }, h("slot", { name: "itens-referencia" }))), h("yduqs-title", { topic_title: this.english ? 'Go Further' : this.spanish ? 'Explora +' : 'Explore +' }), h("div", { class: "row align-items-center justify-content-center" }, h("div", { class: "col-12 col-md-10 col-lg-8" }, h("slot", { name: "itens-exploremais" })))), h("div", { class: "c-footer-border mt-5 py-3" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "d-flex justify-content-center align-items-center" }, h("div", null, h("a", { href: `javascript:${this.hrefbtnprint}`, class: `btn btn-apostila ${!this.btnimprimir ? 'disableText' : ''}` }, h("i", { class: "material-icons" }, "picture_as_pdf"), " ", this.namebtnimprimir))))))));
  }
};

let GalleryVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "c-gallery-video" }, h("div", { class: "c-gallery-video__header" }, h("h5", null, this.english ? 'SECTION' : this.spanish ? 'MÓDULO' : 'MÓDULO', " ", this.module_number), h("h1", null, this.title_gallery)), h("div", { class: "c-gallery-video__content" }, h("div", { class: "c-gallery-video__content_videos" }, h("div", { class: "c-gallery-video__content_videos_video" }, h("yduqs-video-player", { src: "https://atreus.uoledtech.com.br/estacio/video/193763", videoId: "1", width: "", height: "" })), h("div", { class: "c-gallery-video__content_videos_description" }, h("h3", null, this.title_video, " "), h("p", { class: "c-gallery-video__content_videos_description_large" }, this.paragraph_video))), h("div", { class: "c-gallery-video__content_playlist" }, h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number })))));
  }
};

let YduqsImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { style: { width: `${this.width}`, height: `${this.height}` }, class: { 'c-image': true, 'covered': this._iscovered }, onClick: () => this.coverChange() }, this.covered ?
      h("div", { class: { 'c-image__capa': true } }, h("svg", { width: "54", height: "54", viewBox: "0 0 54 54", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M27 14.625C33.21 14.625 38.25 19.665 38.25 25.875C38.25 27.0225 38.025 28.125 37.71 29.16L44.595 36.045C47.7225 33.2775 50.1975 29.8125 51.75 25.8525C47.8575 15.9975 38.25 9.00003 27 9.00003C24.1425 9.00003 21.3975 9.45003 18.81 10.2825L23.6925 15.165C24.75 14.85 25.8525 14.625 27 14.625ZM6.0975 7.11003C5.22 7.98753 5.22 9.40503 6.0975 10.2825L10.53 14.715C6.885 17.6175 3.9825 21.4425 2.25 25.875C6.1425 35.7525 15.75 42.75 27 42.75C30.42 42.75 33.6825 42.075 36.6975 40.905L42.8175 47.025C43.695 47.9025 45.1125 47.9025 45.99 47.025C46.8675 46.1475 46.8675 44.73 45.99 43.8525L9.2925 7.11003C8.415 6.23253 6.975 6.23253 6.0975 7.11003ZM27 37.125C20.79 37.125 15.75 32.085 15.75 25.875C15.75 24.1425 16.155 22.5 16.8525 21.06L20.385 24.5925C20.3175 24.9975 20.25 25.425 20.25 25.875C20.25 29.61 23.265 32.625 27 32.625C27.45 32.625 27.855 32.5575 28.2825 32.4675L31.815 36C30.3525 36.72 28.7325 37.125 27 37.125ZM33.6825 25.1325C33.345 21.9825 30.87 19.53 27.7425 19.1925L33.6825 25.1325Z", fill: "white" })), h("p", { class: "c-image__text" }, "Conte\u00FAdo sens\u00EDvel ", h("br", null), "Clique na imagem para visualiz\u00E1-la"))
      : '', h("img", { class: "o-image", alt: this.alt, title: this.img_title, src: this.src, loading: "lazy" })));
  }
  static get watchers() { return {
    "covered": ["handleCover"]
  }; }
};

const mobileBreakpoint = 578;
let YduqsMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onChangeMenuData = createEvent(this, "changemenudata", 7);
    this.onClickMenuItem = createEvent(this, "clickmenuitem", 7);
    this._isMobile = window.innerWidth < mobileBreakpoint;
    this._isOpen = false;
    this._isOpenGallery = false;
    this._isActive = false;
    this._animate = false;
    this._activeIndex = 0;
    this._videoModule = 1;
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
  //Momento em que é atribuido settings
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
  ;
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
  ;
  /* private openGallery(module_number, playlist, playlist_index) {
      var current_video = playlist;
      this._videoModule = module_number + 1;
      this.closeMenu();

      var box_video = document.querySelector('.c-menu yduqs-video-player');
      var new_video = document.createElement('yduqs-video-player');
      new_video.setAttribute('src', current_video.link_video);
      box_video.insertAdjacentHTML('beforebegin', new_video.outerHTML);

      var title = document.querySelector('.c-menu .c-gallery-video__content_videos_description h3');
      var paragraph = document.querySelector('.c-menu .c-gallery-video__content_videos_description_large');

      var active = document.querySelector(".c-menu .c-gallery-video__content_playlist .c-playlist-video__items");

      active.querySelectorAll('.active').forEach(item => {
          item.classList.remove('active');
      })

      var active_child = active.children[playlist_index];
      var position_active = active_child.querySelector('.c-card-video__thumb');
      position_active.classList.add('active');

      title.innerHTML = current_video.title_video;
      paragraph.innerHTML = current_video.paragraph;

      box_video.remove();

      var modal = this.el.querySelector('yduqs-modal');

      modal.addEventListener('modalClosed', function () {
          var video_playing = document.querySelector('.c-menu yduqs-video-player');
          video_playing.setAttribute('src', '');
      })

      modal.isopen = true;

      //Ele Percorre o componente playlist que ja foi renderizado e dentro dele percorre o componente yduqs-card-video.
      modal.querySelectorAll('yduqs-card-video').forEach((f, index) => {

          f.addEventListener('click', function () {
              var box_video = document.querySelector('.c-menu yduqs-video-player');
              var new_video = document.createElement('yduqs-video-player');
              new_video.setAttribute('src', f.link_video);
              box_video.insertAdjacentHTML('beforebegin', new_video.outerHTML);

              var title = document.querySelector('.c-menu .c-gallery-video__content_videos_description h3');
              var paragraph = document.querySelector('.c-menu .c-gallery-video__content_videos_description_large');

              var active = document.querySelector(".c-menu .c-gallery-video__content_playlist .c-playlist-video__items");

              active.querySelectorAll('.active').forEach(item => {
                  item.classList.remove('active');
              })

              var active_child = active.children[index];
              var position_active = active_child.querySelector('.c-card-video__thumb');

              //adiciona a class active que faz o outline no card selecionado.
              position_active.classList.add('active');

              //adiciona o titulo do card de video na posição atual.
              title.innerHTML = f.title_video;

              //adiciona o paragrafo do card de video na posição atual
              paragraph.innerHTML = f.paragraph;

              box_video.remove();
          });
      });

  }; */
  updateActiveItem() {
    this._activeIndex = this.position;
  }
  /* private getGalleryRender() {
      return (
          <yduqs-modal id={`modal-gallery-menu`}>
              <div class="container">
                  <yduqs-gallery-video
                      id="gallery"
                      module_number={this._videoModule}
                      title_gallery={`Galeria Menu`}
                      subtitle_gallery={`galeria do menu`}>
                  </yduqs-gallery-video>
              </div>
          </yduqs-modal>
      );
  } */
  renderActiveMarker() {
    return (h("span", { class: "c-menu__active-marker" }));
  }
  renderNameModule(name) {
    var current_name;
    if (name.includes('modulo')) {
      current_name = 'Módulo ' + name.slice(6);
    }
    else {
      if (name == 'apresentacao') {
        current_name = 'Introdução';
      }
      else if (name == 'conclusao') {
        current_name = 'Conclusão';
      }
      else {
        current_name = name.charAt(0).toUpperCase() + name.slice(1);
      }
    }
    return current_name;
  }
  renderMenuJorney() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    document.querySelectorAll('module').forEach((e, i) => {
      var menuSubItemsList = [];
      //Pega o nó do título do yduqs-module-cover 
      i--;
      var titleAll = document.querySelectorAll('.titles h2');
      var titleModuloCover = Array.prototype.map.call(titleAll, function (t) { return t.textContent; });
      if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
        menuItemsList.push(h("yduqs-accordion", { outline: false }, h("yduqs-accordion-pane", null, h("span", { slot: "c-accordion-header" }, h("span", { innerHTML: this.renderNameModule(e.id) }), h("p", { class: "module-subtitle-menu", innerHTML: titleModuloCover[i] })), h("div", { slot: "c-accordion-content" }, e.querySelectorAll('yduqs-title').forEach((f, index) => {
          let insidePlaylist = f.closest('.container').querySelectorAll('yduqs-module-video');
          let isVideo = f.getAttribute('topic_icon');
          console.log(isVideo);
          if (insidePlaylist.length === 0 && isVideo !== 'video_library' && isVideo !== 'ondemand_video') {
            menuSubItemsList.push(h("a", { class: {
                'c-menu__item-container': true
              },
              // Acontece a ancoragem do menu
              // href={'#' +`${ f.id }`}
              onClick: () => {
                this.closeMenu(index);
                f.scrollIntoView();
              } }, h("span", { class: {
                'c-menu__item': true,
                'c-menu__item--active': (this._activeIndex === index)
              } }, h("span", { class: "material-icons" }, " library_books"), h("span", { innerHTML: f.topic_title }))));
          }
        }), menuSubItemsList))));
      }
      else {
        menuItemsList.push(h("a", { class: "menu-button", href: '#' + `${e.id}`, onClick: () => this.closeMenu() }, h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) })));
      }
    });
    menuItemsList.push(h("div", { id: "accordion-download" }));
    return h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, h("yduqs-accordion-group", { id: "accgroup-journey" }, menuItemsList, " "));
  }
  //A função tem o objetivo de renderizar
  renderMenuMedia() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    // anchorPodcast
    var anchorLink = '#podcast-anchor-menu';
    //verifica se o settings está vazio
    if (this.settings !== undefined) {
      document.querySelectorAll('module').forEach((e, i) => {
        if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
          let menuSubItemsList = [];
          this.settings.modules.forEach((m) => {
            m.playlist.forEach((e, index) => {
              let modNum = parseInt(e.mod_num);
              if (e.type === 'playlist') {
                var videoOrPlaylist = ' playlist_play';
              }
              else {
                var videoOrPlaylist = ' ondemand_video';
              }
              if (modNum === i) {
                menuSubItemsList.push(h("a", { class: "c-menu__item-container", href: '#' + e.id, onClick: () => this.closeMenu() }, h("span", { class: "c-menu__item" }, h("span", { class: "c-menu__item c-menu__item--active" }, h("span", { class: "material-icons" }, " ", videoOrPlaylist), h("span", { id: 'mod' + modNum + 'title' + index, class: "c-menu__item-title", innerHTML: this.renderNameModule(e.title_video) })))));
              }
            });
          });
          menuItemsList.push(h("yduqs-accordion", { outline: false }, h("yduqs-accordion-pane", null, h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) }), h("div", { slot: "c-accordion-content" }, menuSubItemsList))));
        }
      });
      menuItemsList.push(h("yduqs-accordion", { outline: false }, h("yduqs-accordion-pane", null, h("span", { slot: "c-accordion-header" }, "Conclus\u00E3o"), h("div", { slot: "c-accordion-content" }, h("a", { class: "c-menu__item-container", href: anchorLink, onClick: () => this.closeMenu() }, h("span", { class: "c-menu__item" }, h("span", { class: "c-menu__item c-menu__item--active" }, h("span", { class: "material-icons" }, "mic"), h("span", null, "Podcast"))))))));
      return h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, h("yduqs-accordion-group", { id: "accgroup-media" }, menuItemsList));
    }
  }
  renderMenuActivity() {
    const menuItemsActivity = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    document.querySelectorAll('module').forEach(e => {
      var menuSubItemsList = [];
      if (e.id !== 'apresentacao' && e.id !== 'conclusao') {
        menuItemsActivity.push(h("yduqs-accordion", { outline: false }, h("yduqs-accordion-pane", null, h("span", { slot: "c-accordion-header", innerHTML: this.renderNameModule(e.id) }), h("div", { slot: "c-accordion-content" }, e.querySelectorAll('yduqs-questions, yduqs-teoria').forEach((f, index) => {
          if (f.getAttribute('question_id')) {
            menuSubItemsList.push(h("a", { class: {
                'c-menu__item-container': true
              },
              // href={'#' +`${ f.getAttribute('question_id') }`}
              onClick: () => {
                //fecha o menu
                this.closeMenu(index);
                //percorre para a posição do verificando aprendizado
                f.scrollIntoView();
              } }, h("span", { class: {
                'c-menu__item': true,
                'c-menu__item--active': (this._activeIndex === index)
              } }, h("span", { class: "material-icons" }, "create"), h("span", null, "Verificando Aprendizado"))));
          }
          else if (f.getAttribute('exercise_id')) {
            menuSubItemsList.push(h("a", { class: {
                'c-menu__item-container': true
              },
              // href={'#' +`${ f.getAttribute('question_id') }`}
              onClick: () => {
                this.closeMenu(index);
                f.scrollIntoView();
              } }, h("span", { class: {
                'c-menu__item': true,
                'c-menu__item--active': (this._activeIndex === index)
              } }, h("span", { class: "material-icons" }, "create"), h("span", null, "M\u00E3o na Massa"))));
          }
          else if (f.tagName == 'yduqs-teoria') {
            menuSubItemsList.push(h("a", { class: {
                'c-menu__item-container': true
              }, href: '#' + `${f.getAttribute('question_id')}`, onClick: () => this.closeMenu(index) }, h("span", { class: {
                'c-menu__item': true,
                'c-menu__item--active': (this._activeIndex === index)
              } }, h("span", { class: "material-icons" }, "create"), h("span", null, "Teoria na Pr\u00E1tica"))));
          }
        }), menuSubItemsList))));
      }
    });
    return h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, h("yduqs-accordion-group", { id: "accgroup-activities" }, menuItemsActivity, " "));
  }
  //Função que inicia a renderização do menu
  getMenuRender() {
    return (h("div", { class: this._isOpen ? 'c-menu__modal__wrapper open' : 'c-menu__modal__wrapper' }, h("div", { class: "c-menu__modal__overlay", onClick: () => this.closeMenu() }), h("div", { class: "c-menu__modal" }, h("div", { class: "c-menu__modal__header" }, h("button", { class: "c-menu__modal__header__btn-close", onClick: () => this.closeMenu() }, h("div", { class: "c-menu__modal__header__btn-close-icon" }, h("span", { class: "material-icons" }, "close")))), h("div", { class: "c-menu__modal__body" }, h("div", { class: "c-menu__modal__body__tab col-12" }, h("yduqs-tabs", { fixed_titles: true, darkmode: false, outlined: false, icons: ['map', 'video_library', 'create'] }, h("yduqs-tab", { header: "Jornadas", open: true }, this.renderMenuJorney()), h("yduqs-tab", { header: "M\u00EDdias" }, this.renderMenuMedia()), h("yduqs-tab", { header: "Atividades" }, this.renderMenuActivity())))))));
  }
  animate(state = false) {
    this._animate = state;
  }
  componentDidLoad() {
    // Ancoragem #podcast-anchor-menu em menu Media
    var anchorPodcast = document.querySelector('yduqs-audio-player');
    var spanEl = document.createElement("span");
    var spanElChild = anchorPodcast.appendChild(spanEl);
    spanElChild.setAttribute('id', 'podcast-anchor-menu');
    //Obtém o valor do atributo src 
    let linkPodcast = document.querySelector('yduqs-audio-player');
    let linkDownloadPodcast = linkPodcast.getAttribute('src');
    //Obtém o valor do atributo para download do pdf
    let linkPdf = document.querySelector('.btn-apostila');
    let linkDownloadPDF = linkPdf.getAttribute('href');
    let menuItemsListDownload = '';
    menuItemsListDownload += ` <yduqs-accordion outline=false>
                                    <yduqs-accordion-pane>
                                        <span slot="c-accordion-header">Downloads</span>
                                        <div slot="c-accordion-content">

                                            <a class='c-menu__item-container'
                                                href="${linkDownloadPodcast}" download>

                                                <span class="c-menu__item">
                                                    <span class="c-menu__item">
                                                        <span class="material-icons">mic</span>
                                                        <span id="resource">Podcast</span>
                                                        <span class="material-icons icon-right">file_download</span>
                                                    </span>
                                                </span>
                                            </a>

                                            <a class="c-menu__item-container"
                                                href="${linkDownloadPDF}" >

                                                <span class="c-menu__item">
                                                    <span class="c-menu__item">
                                                        <span class="material-icons">attachment</span>
                                                        <span id="resource">PDF do conteúdo</span>
                                                        <span class="icon-right material-icons">file_download_done</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </yduqs-accordion-pane>
                                </yduqs-accordion>`;
    document.getElementById('accordion-download').innerHTML = menuItemsListDownload;
  }
  componentDidRender() {
    // Fechador de collapses
    /* const accordionGroup = document.querySelectorAll('menu.c-menu__items-wrapper');

    accordionGroup.forEach(aG => {

        let btsAccordion = aG.querySelectorAll('yduqs-accordion-pane button');

        btsAccordion.forEach((bt,i) => {
            let accGroup = bt.closest('yduqs-accordion-group');
            let accGroupId = accGroup.getAttribute('id');
            bt.setAttribute('onclick', 'accControl("' + accGroupId + '/' + i + '");')

            let accPane = bt.closest('yduqs-accordion-pane');
            accPane.setAttribute('id', accGroupId + '-' + i)

        });
    }); */
  }
  render() {
    const deviceClass = this._isMobile ? 'mobile' : 'desktop';
    const openIconClass = this._isOpen ? 'open' : '';
    return (h(Host, { class: `c-menu ${deviceClass}` }, h("div", { class: "c-menu__floating-btn__container" }, h("button", { class: "c-menu__floating-btn", onClick: () => this.openMenu() }, h("div", { class: `c-menu__floating-icon ${openIconClass}` }, h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" }), h("span", { class: "icon-bar" })))), this.getMenuRender()));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "position": ["watchHandler"]
  }; }
};

let YduqsModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalClosed = createEvent(this, "modalClosed", 7);
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
    return (h("div", { class: this._isopen ? 'c-modal__wrapper isopen' : 'c-modal__wrapper' }, h("div", { class: "c-modal__overlay", onClick: this.closeModal }), h("div", { class: "c-modal" }, h("div", { class: "c-modal__header" }, h("div", { class: "c-modal__close", onClick: this.closeModal }, h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#30404D" })))), h("div", { style: { 'max-height': `${this.maxbodyheight}px` }, class: "c-modal__body" }, h("slot", null)))));
  }
  static get watchers() { return {
    "isopen": ["handleModal"]
  }; }
};

let YduqsCodeSnipet = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const imgCapa = {
      backgroundImage: 'url(' + this.img_cover + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return [
      h("div", { class: 'c-module-cover' }, h("div", { class: 'row g-0 m-0' }, h("div", { class: "col-12 col-lg-2 col-xxl-3 d-flex justify-content-center align-items-center box-column d-lg-block" }, h("span", null), h("p", { class: "u-title-medium" }, this.number_module), h("span", null)), h("div", { class: "col-12 col-lg-10 col-xxl-9 d-flex flex-column flex-lg-row" }, h("div", { class: "container-box-title col-12 col-lg-8 col-xxl-7 d-flex" }, h("div", { class: "box-title" }, h("div", { class: "titles" }, h("h2", { class: "c-heading u-title-medium", innerHTML: this.title_module }), h("p", { class: "u-text", innerHTML: this.objective })), this.read_time || this.midia_time ?
        h("div", { class: "times" }, this.read_time && this.title_read_time ?
          h("div", { class: "time-read" }, h("span", { class: "material-icons" }, "access_time"), h("div", { class: "itens-read" }, h("span", { class: "text-read" }, this.title_read_time), h("span", { class: "text-time-read" }, this.read_time)))
          : '', this.midia_time && this.title_midia_time ?
          h("div", { class: "time-video" }, h("span", { class: "material-icons" }, "ondemand_video"), h("div", { class: "itens-video" }, h("span", { class: "text-video" }, this.title_midia_time), h("span", { class: "text-time-video" }, this.midia_time)))
          : '')
        : '')), h("div", { class: "box-image" }, h("div", { class: "img-capa", style: imgCapa }, h("div", { class: "shadow-image" }))))))
    ];
  }
};

let RatingModule = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h("div", { class: "c-module-rating col-4 d-none" }, h("div", { class: "c-module-rating__icon-container" }, h("div", { class: "c-module-rating__icon-box" }, h("span", { class: "c-module-rating__icon" }, h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { id: "btnClose-svg", d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#30404D" }))))), h("yduqs-rating", { cta: this.cta, icon: this.icon, tamanho: this.tamanho, module: this.module }), h("div", { class: "c-module-rating__button-container" }, h("button", { type: "button", class: "c-button u-text--small c-button--dark", tabindex: "1", disabled: true }, this.english ? 'Send' : this.spanish ? 'Enviar' : 'Enviar'))));
  }
};

let ModuleVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.module_number = 1;
    this.module_icon = 'playlist_play';
  }
  async initialize(config) {
    this.settings = config;
  }
  render() {
    return (h("div", { class: "c-module-video" }, h("div", { class: "c-module-video__titles" }, h("div", { class: 'row align-items-center justify-content-start' }, h("yduqs-title", { topic_icon: this.module_icon, topic_title: this.title_gallery })), h("div", { class: "c-module-video__titles_subtitles row align-items-center justify-content-center" }, h("div", { class: "c-module-video__titles_subtitles_content col-12 col-md-10 col-lg-8" }, h("p", null, this.subtitle_gallery)))), h("div", { class: "c-module-video__box row align-items-center justify-content-center" }, h("div", { class: "c-module-video__box_playlist col-12 col-md-10 col-lg-8" }, h("yduqs-playlist-video", { id: "playlist", module_number: this.module_number }))), h("yduqs-modal", { id: `modal-gallery-${this.module_number}` }, h("div", { class: "container" }, h("yduqs-gallery-video", { id: "gallery", module_number: this.module_number, title_gallery: `${this.title_gallery}`, subtitle_gallery: `${this.subtitle_gallery}` })))));
  }
};

let PlaylistVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.module_number = 1;
  }
  async initialize(config) {
    this.settings = config;
  }
  renderPlaylistVideo() {
    const cardVideolist = [];
    if (this.settings !== undefined) {
      var module = this.settings.modules[this.module_number - 1];
      module.playlist.forEach((playlistItem) => {
        cardVideolist.push(h("yduqs-card-video", { title_video: playlistItem.title_video, subtitle_video: playlistItem.subtitle_video, thumb_video: playlistItem.thumb_video, link_video: playlistItem.link_video, paragraph: playlistItem.paragraph, time: playlistItem.time, border_bottom: playlistItem.border_bottom }));
      });
    }
    return h("div", { class: "c-playlist-video__items" }, cardVideolist);
  }
  render() {
    return (h("div", { class: "c-playlist-video" }, this.renderPlaylistVideo()));
  }
};

let YduqsProgressBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onHoverBar = createEvent(this, "hoverbar", 7);
    this.onChange = createEvent(this, "changebar", 7);
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
    return (h(Host, { class: `c-progress ${semiroundedClass}` }, h("div", { onMouseOver: () => this.onHoverBarHandler(), class: "c-progress__bar" }), h("div", { class: "c-progress__bar--remainder" })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "value": ["watchValue"]
  }; }
};

let YduqsQuestion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    let headHtml = document.querySelector('head');
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
        scriptTag.async = true;
        headHtml.appendChild(scriptTag);
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
        questionsList.push(h("div", { class: "question-block question-loading" }, h("div", { class: 'row align-items-center justify-content-center' }, h("div", { class: `col-12 col-md-10 col-lg-${colunasLgSet}` }, h("div", { class: "question-title", innerHTML: question.question_title }), h("div", { class: "question-options" }, h("yduqs-card-selecionavel", { "correct-answer": question.correct_anwser }, h("yduqs-card-selecionavel-item", { optionid: "a", innerHTML: question.options[0] }), h("yduqs-card-selecionavel-item", { optionid: "b", innerHTML: question.options[1] }), h("yduqs-card-selecionavel-item", { optionid: "c", innerHTML: question.options[2] }), h("yduqs-card-selecionavel-item", { optionid: "d", innerHTML: question.options[3] }), h("yduqs-card-selecionavel-item", { optionid: "e", innerHTML: question.options[4] }))), h("div", { class: "question-button" }, h("button", { type: "button", class: "c-button", tabindex: "1" }, this.english ? 'Answer' : this.spanish ? 'Responder' : 'Responder')), h("div", { class: "question-positive-feedback d-none", innerHTML: encodeURIComponent(question.positive_feedback) }), h("div", { class: "question-negative-feedback d-none" }, h("p", { class: "c-paragraph", innerHTML: this.english ? `But don't worry, you can go back to the <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> topic and try it again after rereading the content.` :
            this.spanish ? `Pero no te preocupes, puedes volver al tópico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> y, después de releer el contenido, volver a intentarlo.` :
              `Mas não se preocupe, você pode voltar ao tópico <a href=${question.negative_feedback_link}>${question.negative_feedback_topic}</a> e, após reler o conteúdo, tentar novamente.` }))))));
      });
    }
    return h("yduqs-questions-body", null, questionsList);
  }
  render() {
    return (h("div", { class: "c-questions" }, this.renderQuestions()));
  }
  get el() { return getElement(this); }
};

let Rating = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "c-rating" }, h("h3", null, this.cta, " ", this.module), h("div", { class: "star-rating" }, h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)), h("label", null, h("i", { class: `active material-icons ${this.tamanho}`, "aria-hidden": "true" }, this.icon)))));
  }
};

let Tab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const typeClass = this.type ? `c-tabs__tab--${this.type}` : '';
    return (h(Host, null, this.outline ?
      h("div", { class: 'c-round-border' }, h("div", { role: "tabpanel", hidden: !this.open, class: "c-tabs__tab {typeClass}" }, h("slot", null)))
      :
        h("div", { role: "tabpanel", hidden: !this.open, class: `c-tabs__tab ${typeClass}` }, h("slot", null))));
  }
};

let Tabs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onChange = createEvent(this, "changed", 7);
    this.fixed_titles = false;
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
    return (h("div", { class: `c-tabs ${darkClass} ${colorMode}` }, h("div", { role: "tablist", class: "c-tabs" }, h("div", { class: "c-tabs__nav" }, h("div", { class: "c-tabs__headings" }, this.tabs.map((tab, i) => {
      const openClass = tab.open ? 'c-tab-heading--active' : '';
      var head = this.icons ? `<span class="c-button__icon-text-right material-icons">${this.icons[i]}</span> ${tab.header}` : `${tab.header}`;
      return (h("div", { class: `c-tab-heading ${openClass}`, onClick: () => this.openTab(i), innerHTML: head, role: "tab" }));
    }))), this.fixed_titles != false ? h("div", { class: "c-tabpanel-scroll" }, h("slot", null)) : h("slot", null))));
  }
  get elem() { return getElement(this); }
};

let Title = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: `c-topic-title ${this.dark ? 'c-topic-title--dark' : ''}` }, h("div", { class: 'row align-items-center justify-content-start' }, h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }, this.topic_icon ? h("span", { class: "material-icons" }, this.topic_icon) : h("span", { class: "title-bar" })), h("div", { class: 'col-12 col-md-10 col-lg-8' }, h("h1", { class: "c-heading u-title-small", innerHTML: this.topic_title })))));
  }
};

/*! @vimeo/player v2.16.2 | (c) 2021 Vimeo | MIT License | https://github.com/vimeo/player.js */
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
 * @param {string} type Either “get” or “set”.
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
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
(function (self) {

  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var hasDefine = Object.defineProperty && function () {
    try {
      // Avoid IE8's broken Object.defineProperty
      return Object.defineProperty({}, 'x', {
        value: 1
      }).x === 1;
    } catch (e) {}
  }();

  var defineProperty = function (object, name, value) {
    if (hasDefine) {
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
})(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

var npo_src = createCommonjsModule(function (module) {
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function UMD(name, context, definition) {
  // special form of UMD for polyfilling across evironments
  context[name] = context[name] || definition();

  if ( module.exports) {
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
var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'controls', 'dnt', 'height', 'id', 'keyboard', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];
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
      throw new Error('The player element passed isn’t a Vimeo embed.');
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
        // can’t return here.
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
        // can’t return here.
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
        // can’t return here.
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
     * listeners for that event if a `callback` isn’t passed, or only that
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
     *         video’s duration.
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
     * @property {string} label The human‐readable label for the track.
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
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
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
     * Pause the video if it’s playing.
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
     * Play the video if it’s paused. **Note:** on iOS and some other
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
     * For 360° videos get the camera properties for this player.
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
     * For 360° videos set the camera properties for this player.
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
     *         video’s duration.
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
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
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
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
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
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
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
     * players or stored as the viewer’s preference.
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

let YduqsVideoPlayer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.src = '';
    this.video_title = 'Conteúdo em vídeo';
  }
  componentWilLoad() { }
  componentDidLoad() {
    this.playerId = this.playerId ? `c_video_player_${this.playerId}` : 'c_video_player';
    this.playerObj = new Player(this.playerId);
  }
  coverRemove() {
    this.covered = false;
  }
  render() {
    return (h("div", { title: this.video_title, id: this.videoId, class: {
        'c-video-player': true,
        'covered': this.covered
      } }, h("div", { onClick: () => this.coverRemove(), class: {
        'c-video-player__cover': true
      }, style: { 'background-color': `${this.bgcolor}` } }, h("svg", { class: "c-video-player__cover-icon", width: "54", height: "54", viewBox: "0 0 54 54", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M27 14.625C33.21 14.625 38.25 19.665 38.25 25.875C38.25 27.0225 38.025 28.125 37.71 29.16L44.595 36.045C47.7225 33.2775 50.1975 29.8125 51.75 25.8525C47.8575 15.9975 38.25 9.00003 27 9.00003C24.1425 9.00003 21.3975 9.45003 18.81 10.2825L23.6925 15.165C24.75 14.85 25.8525 14.625 27 14.625ZM6.0975 7.11003C5.22 7.98753 5.22 9.40503 6.0975 10.2825L10.53 14.715C6.885 17.6175 3.9825 21.4425 2.25 25.875C6.1425 35.7525 15.75 42.75 27 42.75C30.42 42.75 33.6825 42.075 36.6975 40.905L42.8175 47.025C43.695 47.9025 45.1125 47.9025 45.99 47.025C46.8675 46.1475 46.8675 44.73 45.99 43.8525L9.2925 7.11003C8.415 6.23253 6.975 6.23253 6.0975 7.11003ZM27 37.125C20.79 37.125 15.75 32.085 15.75 25.875C15.75 24.1425 16.155 22.5 16.8525 21.06L20.385 24.5925C20.3175 24.9975 20.25 25.425 20.25 25.875C20.25 29.61 23.265 32.625 27 32.625C27.45 32.625 27.855 32.5575 28.2825 32.4675L31.815 36C30.3525 36.72 28.7325 37.125 27 37.125ZM33.6825 25.1325C33.345 21.9825 30.87 19.53 27.7425 19.1925L33.6825 25.1325Z", fill: "white" })), h("p", { class: "c-video-player__text" }, h("span", { class: "c-video-player__cover-title" }, "Conte\u00FAdo sens\u00EDvel "), h("br", null), "Esse conte\u00FAdo pode conter material sens\u00EDvel.")), h("iframe", { id: this.playerId, src: this.src, width: this.width, height: this.height, allowFullScreen: true })));
  }
};

export { YduqsAccordion as yduqs_accordion, YduqsAccordionPane as yduqs_accordion_pane, YduqsAudioPlayer as yduqs_audio_player, YduqsCard as yduqs_card, YduqsCardBody as yduqs_card_body, YduqsCardHeader as yduqs_card_header, CardHorizontal as yduqs_card_horizontal, YduqsCardIntro as yduqs_card_intro, YduqsCardModulo as yduqs_card_modulo, YduqsCardModuloBody as yduqs_card_modulo_body, YduqsCardModuloFooter as yduqs_card_modulo_footer, YduqsCardModuloHeader as yduqs_card_modulo_header, YduqsCardSelecionavel as yduqs_card_selecionavel, YduqsCardSelecionavelItem as yduqs_card_selecionavel_item, PlaylistVideo$1 as yduqs_card_video, Textarea as yduqs_cover, Footer as yduqs_footer, GalleryVideo as yduqs_gallery_video, YduqsImage as yduqs_image, YduqsMenu as yduqs_menu, YduqsModal as yduqs_modal, YduqsCodeSnipet as yduqs_module_cover, RatingModule as yduqs_module_rating, ModuleVideo as yduqs_module_video, PlaylistVideo as yduqs_playlist_video, YduqsProgressBar as yduqs_progress_bar, YduqsQuestion as yduqs_questions, Rating as yduqs_rating, Tab as yduqs_tab, Tabs as yduqs_tabs, Title as yduqs_title, YduqsVideoPlayer as yduqs_video_player };
