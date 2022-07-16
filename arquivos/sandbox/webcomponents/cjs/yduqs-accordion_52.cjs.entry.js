'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f761ffe9.js');

const YduqsAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onToggle = index.createEvent(this, "toggle", 7);
    this._isFirstRender = true;
  }
  onTogglePane(ev) {
    const accordion = this.element.children[0];
    const open = ev.detail;
    const pane = ev.target;
    const idx = [].indexOf.call(accordion.children, pane);
    this.onToggle.emit({ idx, open });
    this._active = open;
    this.animate();
  }
  componentDidRender() {
    if (this.content && this.content.offsetHeight && this._isFirstRender) {
      this._contentMaxHeight = `${this.content.offsetHeight.toString()}px`;
      this._isFirstRender = false;
      const itemPane = this.content.children[0];
      itemPane.close();
    }
  }
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
    this.onToggle = index.createEvent(this, "togglepane", 7);
    this._isOpen = true;
    this.open = true;
  }
  componentWillLoad() {
    this._isOpen = this.open;
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
    return (index.h(index.Host, { class: "c-accordion-pane" }, index.h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-accordion__control ${isOpenClass}`, onClick: () => this.toggle() }, index.h("span", { class: "c-accordion__title" }, this.header), index.h("span", { class: "c-accordion__icon material-icons" }, "expand_more")), index.h("div", { ref: (el) => (this.content = el), "aria-hidden": !this._isOpen, class: "c-accordion__item c-accordion__item--pane" }, index.h("slot", null))));
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

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

const require$$0 = /*@__PURE__*/getAugmentedNamespace(main);

var greenAudioPlayer = require$$0.default;

const YduqsAudioPlayer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.src = '';
  }
  componentDidLoad() {
    let playerSettings = {
      selector: '.c-audio-player',
      showTooltips: true,
      showDownloadButton: true,
      enableKeystrokes: true
    };
    greenAudioPlayer.init(playerSettings);
  }
  render() {
    const shortPlayerClass = this.shortdisplay ? `c-audio-player-short` : '';
    return (index.h(index.Host, { class: `c-audio-player ${shortPlayerClass}` }, index.h("audio", { class: "c-audio__object" }, index.h("source", { src: this.src, type: "audio/mpeg" }, "O seu navegador n\u00E3o suporta o elemento ", index.h("code", null, "audio"), "."))));
  }
  get self() { return index.getElement(this); }
};

const calculateXfromEvent = (event, offsetElement) => {
  let clientX = 0;
  if (event instanceof MouseEvent) {
    clientX = event.clientX;
  }
  else if (event instanceof TouchEvent) {
    clientX = event.touches[0].clientX;
  }
  const offsetLeft = (offsetElement === null || offsetElement === void 0 ? void 0 : offsetElement.getBoundingClientRect().left) || 0;
  return clientX - offsetLeft;
};

const YduqsBeforeAfter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this._barPosision = 0;
    this._isDraggingValue = false;
    this._xValue = 0;
    this._isFirstRender = true;
    this.elementWidth = 0;
  }
  get isDragging() {
    return this._isDraggingValue;
  }
  set isDragging(value) {
    this._isDraggingValue = value;
  }
  get x() {
    return this._xValue;
  }
  set x(value) {
    this._xValue = value;
  }
  componentDidRender() {
    const dratEl = document.getElementById('drag');
    var img = new Image();
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
    dratEl.addEventListener('dragstart', function (e) {
      e.dataTransfer.setDragImage(img, 0, 0);
    });
    this.elementWidth = this.divElement.getBoundingClientRect().width;
    if (this._isFirstRender) {
      this._barPosision = this.elementWidth / 2;
      this._isFirstRender = false;
    }
  }
  calculateMaxBarRight() {
    return this.elementWidth - 24;
  }
  changeBar(e) {
    if (e.layerX > 48 && e.layerX < this.calculateMaxBarRight()) {
      this._barPosision = e.layerX;
    }
  }
  dragStart() {
    this.isDragging = true;
  }
  onDrag(event) {
    if (!this.isDragging) {
      return;
    }
    let barPosision = calculateXfromEvent(event, this.divElement);
    if (barPosision > 24 && barPosision < this.calculateMaxBarRight()) {
      this._barPosision = barPosision;
    }
  }
  dragEnd() {
    this.isDragging = false;
  }
  onResize(event) {
    event.stopPropagation();
    this.elementWidth = this.divElement.getBoundingClientRect().width;
    this._barPosision = this.elementWidth / 2;
  }
  render() {
    const dragControlClass = this.isDragging ? 'c-before-after__drag-control--active' : '';
    return (index.h(index.Host, null, index.h("div", { class: "c-before-after", ref: (el) => this.divElement = el, onClick: this.changeBar.bind(this) }, index.h("div", { id: "before", style: { 'width': `${this._barPosision}px` }, title: this.before_img_title }, index.h("slot", { name: "before" }, index.h("img", { src: this.before_img, alt: this.before_img_alt, title: this.before_img_title, class: "c-before-after__image c-before-after__image-default" }))), index.h("div", { id: "after", title: this.after_img_title }, index.h("slot", { name: "after" }, index.h("img", { src: this.after_img, alt: this.after_img_alt, title: this.after_img_title, class: "c-before-after__image c-before-after__image-compare" }))), index.h("div", { id: "drag", class: `${dragControlClass}`, ref: (el) => this.draggbleElement = el, draggable: true, onTouchStart: this.dragStart.bind(this), onDragStart: this.dragStart.bind(this), onDrag: this.onDrag.bind(this), onTouchMove: this.onDrag.bind(this), onDragEnd: this.dragEnd.bind(this), onTouchEnd: this.dragEnd.bind(this), style: { 'left': `${this._barPosision}px` } }, index.h("svg", { width: "52", height: "52", viewBox: "0 0 52 52", fill: "none", xmlns: "http://www.w3.org/2000/svg", class: 'c-before-after__drag-icon' }, index.h("rect", { x: "1", y: "1", width: "50", height: "50", rx: "25", fill: "#007E9E", class: "c-before-after__drag-icon-rect" }), index.h("path", { d: "M21.013 21.2003C21.013 20.3659 20.0513 19.8985 19.3952 20.414L13.2865 25.2137C12.777 25.6141 12.777 26.3859 13.2865 26.7863L19.3952 31.586C20.0513 32.1015 21.013 31.6341 21.013 30.7997V21.2003ZM32.6049 20.414C31.9488 19.8985 30.9871 20.3659 30.9871 21.2003L30.9871 30.7997C30.9871 31.6341 31.9488 32.1015 32.6049 31.586L38.7136 26.7863C39.2231 26.3859 39.2231 25.6141 38.7136 25.2137L32.6049 20.414Z", fill: "white" }), index.h("rect", { x: "1", y: "1", width: "50", height: "50", rx: "25", stroke: "white", "stroke-width": "2" })))), index.h("p", { class: "c-before-after__caption u-text--small" }, this.caption)));
  }
};

const YduqsCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dark = false;
    this.outlined = false;
  }
  render() {
    const darkMode = this.dark ? 'c-card--dark' : '';
    const colorMode = this.outlined ? 'c-card--outlined' : darkMode;
    return (index.h(index.Host, { class: `c-card ${colorMode}` }, index.h("slot", null)));
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
  }
  render() {
    const colorMode = this.dark ? 'c-card-comparativo--dark' : '';
    const outlineClass = this.outline ? 'c-card-destaque--outline' : '';
    return (index.h(index.Host, { class: `c-card-comparativo ${colorMode} ${outlineClass}` }, index.h("slot", { name: "item-a" }), index.h("div", { class: "c-card-comparativo__divider" }, index.h("div", { class: "c-card-comparativo__bar" }), index.h("div", { class: "c-card-comparativo__icon-container" }, index.h("span", { class: "c-card-comparativo__icon material-icons" }, "close"))), index.h("slot", { name: "item-b" })));
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
    const outlineClass = this.outline ? 'c-card-destaque--outline' : '';
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

var hammer = createCommonjsModule(function (module) {
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined$1) {

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined$1) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined$1 || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined$1 && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined$1)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined$1 : undefined$1, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined$1) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined$1;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined$1;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {Hammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined$1)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined$1;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Hammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
Hammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
Hammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, Hammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined$1) {
            return;
        }
        if (handler === undefined$1) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined$1) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(Hammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.Hammer = Hammer;

if (typeof undefined$1 === 'function' && undefined$1.amd) {
    undefined$1(function() {
        return Hammer;
    });
} else if (module.exports) {
    module.exports = Hammer;
} else {
    window[exportName] = Hammer;
}

})(window, document, 'Hammer');
});

const YduqsCarousel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onNextSlide = index.createEvent(this, "nextslide", 7);
    this.onPrevSlide = index.createEvent(this, "prevslide", 7);
    this.onUpdatePage = index.createEvent(this, "updatepage", 7);
    this.space = 24;
    this.children = [];
    this.currentItem = 0;
    this.currentPage = 0;
    this.hasNext = false;
    this.hasPrev = false;
    this.isMobile = false;
    this.allItems = 0;
  }
  onResize(event) {
    event.stopPropagation();
    this.animate(false);
    this._isMobile(event.target);
  }
  setChildrenOrder() {
    this.children.forEach((item, index) => {
      item.style.gridArea = `1 / ${index + 1}`;
    });
  }
  _setOrder(order) {
    switch (order) {
      case 'next':
        const first = this.children.shift();
        this.children = this.children.concat([first]);
        break;
      case 'prev':
        const last = this.children.pop();
        this.children = [last].concat(this.children);
        break;
    }
    this.setChildrenOrder();
  }
  _isMobile(windowObj) {
    const wWidth = windowObj.innerWidth;
    this.isMobile = (wWidth < 576);
  }
  changeSlide(next = true) {
    if (next) {
      this._setOrder('next');
      this.currentItem++;
      this.onUpdatePage.emit(this.currentPage++);
    }
    else {
      this._setOrder('prev');
      this.currentItem--;
      this.onUpdatePage.emit(this.currentPage--);
    }
  }
  async next() {
    this.hasNext = ((this.currentItem + 1) < this.allItems);
    if (this.hasNext) {
      this.changeSlide();
      if (this.currentPage === this.allItems) {
        this.hasNext = false;
      }
      this.hasPrev = true;
      this.onPrevSlide.emit(this.hasPrev);
      this.animate(true);
    }
    this.onNextSlide.emit(this.hasNext);
  }
  async prev() {
    this.hasPrev = (this.currentItem - 1) >= 0;
    if (this.hasPrev) {
      this.changeSlide(false);
      if (this.currentPage === 1) {
        this.hasPrev = false;
      }
      this.hasNext = true;
      this.onNextSlide.emit(this.hasNext);
      this.animate(true);
    }
    this.onPrevSlide.emit(this.hasPrev);
  }
  animate(animate = true) {
    if (animate) {
      this.content.style.transition = "all 0.4s ease-in";
    }
    if (!animate) {
      this.content.style.removeProperty("transition");
    }
    const width = parseFloat(`${this.content.getBoundingClientRect().width + this.space}`).toFixed(2);
    this.content.style.transform = `translateX(${this.currentItem * parseInt(width) * -1}px)`;
  }
  componentWillLoad() {
    this.currentPage = this.currentItem + 1;
    this._isMobile(window);
  }
  componentDidLoad() {
    const items = this.el.querySelector('.carousel__content');
    this.children = Object.assign([], items.children);
    this.allItems = this.children ? this.children.length : 0;
    if (!items) {
      return;
    }
    this.hasNext = this.allItems > 2;
    if (items.children.length > 0) {
      this.children.forEach((el) => {
        el.style.alignSelf = 'center';
        el.style.justifySelf = 'center';
      });
    }
    const hammertime = hammer(this.el);
    hammertime.on('swipeleft', () => {
      this.next();
    });
    hammertime.on('swiperight', () => {
      this.prev();
    });
  }
  componentDidRender() {
    if (this.content && this.content.offsetHeight) {
      this.contentMinHeight = `${this.content.offsetHeight.toString()}px`;
    }
  }
  render() {
    const prevCtrlState = this.hasPrev ? '' : 'c-carousel-control--disabled';
    const nextCtrlState = this.hasNext ? '' : 'c-carousel-control--disabled';
    const mobileState = this.isMobile ? 'mobile' : '';
    const controlLeft = (index.h("div", { class: `c-carousel-control c-carousel-control__left` }, index.h("div", { class: `c-carousel-control__button ${prevCtrlState}`, onClick: this.prev.bind(this) }, index.h("span", { class: "c-carousel-control__icon material-icons" }, "arrow_back"))));
    const controlRight = (index.h("div", { class: `c-carousel-control c-carousel-control__right` }, index.h("div", { class: `c-carousel-control__button ${nextCtrlState}`, onClick: this.next.bind(this) }, index.h("span", { class: "c-carousel-control__icon material-icons" }, "arrow_forward"))));
    const pages = (index.h("div", { class: "c-carousel-pages" }, index.h("div", { class: "c-carousel-pages__content" }, index.h("span", { class: `c-carousel-pages__icon material-icons ${prevCtrlState}`, onClick: this.prev.bind(this) }, "arrow_back"), index.h("span", { class: "c-carousel-pages__container" }, this.currentPage, " de ", this.allItems), index.h("span", { class: `c-carousel-pages__icon material-icons ${nextCtrlState}`, onClick: this.next.bind(this) }, "arrow_forward"))));
    return (index.h(index.Host, { class: `c-carousel ${mobileState}` }, controlLeft, index.h("div", { class: "carousel show" }, index.h("div", { ref: (el) => (this.content = el), class: "carousel__content", style: {
        "grid-template-columns": `repeat(${this.children.length}, 100%)`,
        "grid-column-gap": `${this.space}px`,
      } }, index.h("slot", null))), controlRight, pages));
  }
  get el() { return index.getElement(this); }
};

const YduqsCarouselItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "c-carousel-item" }, index.h("slot", null)));
  }
};

const YduqsCodeSnipet$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  meuToggle(ev) {
    this.isDark = ev.detail;
  }
  componentDidLoad() {
    this.isDark = this.dark;
  }
  render() {
    return [
      index.h("div", { class: `c-code-snipet row ${this.isDark ? 'dark' : ''}` }, index.h("div", { class: "row align-items-center" }, index.h("div", { class: "col-12 codigo-top py-2" }, index.h("yduqs-toggle", { open: this.dark, disable: this.disable }))), index.h("div", { class: "row align-items-center " }, index.h("div", { class: "col-12 codigo-body text-light p-3" }, index.h("div", { class: "c-code-snipet-content" }, index.h("div", { class: "content" }, index.h("pre", null, index.h("slot", null)))))))
    ];
  }
};

const YduqsCollapse = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onToggle = index.createEvent(this, "toggle", 7);
  }
  onTogglePane(ev) {
    const collapse = this.element.children[0];
    const open = ev.detail;
    const pane = ev.target;
    const idx = [].indexOf.call(collapse.children, pane);
    this.onToggle.emit({ idx, open });
    this._active = open;
    this.animate();
  }
  componentDidRender() {
    if (this.content && this.content.offsetHeight) {
      this._contentMaxHeight = `${this.content.offsetHeight.toString()}px`;
    }
  }
  animate() {
    this.content.style.maxHeight = `${this._contentMaxHeight}px`;
  }
  render() {
    const borderClass = this.border ? 'c-collapse--border' : '';
    const activeClass = this._active ? 'c-collapse--active' : '';
    return (index.h("div", { ref: (el) => (this.content = el), class: `c-collapse ${borderClass} ${activeClass}` }, index.h("slot", null)));
  }
  get element() { return index.getElement(this); }
};

const YduqsCollapseContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onToggle = index.createEvent(this, "togglepane", 7);
    this._isOpen = false;
    this.open = false;
  }
  componentWillLoad() {
    this._isOpen = this.open;
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
  }
  async isOpen() {
    return this._isOpen;
  }
  animate() {
    this.content.className = this._isOpen ? 'c-collapse__content u-fade-in' : 'c-collapse__content';
  }
  render() {
    const isOpenClass = this._isOpen ? 'c-collapse__control--active' : '';
    const sizeClass = this.size ? `u-text--${this.size}` : 'u-text--medium';
    return (index.h(index.Host, null, index.h("button", { role: "heading", "aria-expanded": this._isOpen.toString(), class: `c-collapse__control ${isOpenClass} ${sizeClass}`, onClick: () => this.toggle() }, index.h("span", { class: "c-collapse__title" }, this.header), index.h("span", { class: "c-collapse__icon material-icons" }, "expand_more")), index.h("div", { ref: (el) => (this.content = el), "aria-hidden": !this._isOpen, class: "c-collapse__content" }, index.h("slot", null))));
  }
};

const Textarea$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.theme_teacher_avatar = 'img/avatar.png';
  }
  render() {
    return (index.h("div", { class: `c-cover` }, index.h("div", { class: "c-cover-bg c-cover-height", style: { "background-image": "url('" + this.theme_background + "')" } }, index.h("div", { class: "container c-cover-height" }, index.h("div", { class: 'row align-items-end align-items-sm-center align-items-md-center align-items-lg-center justify-content-start c-cover-height' }, index.h("div", { class: 'col-12 col-sm-12 col-md-8 col-lg-5' }, index.h("div", { class: "theme-details" }, index.h("h1", null, index.h("span", { class: `${this.theme_title_bg ? 'theme_text_bg' : ''}` }, this.theme_title)), index.h("div", { class: "avatar-professor" }, index.h("div", { class: "avatar-professor-img", style: { "background-image": "url('" + this.theme_teacher_avatar + "')" } }), index.h("h4", null, index.h("span", { class: `avatar-professor ${this.theme_teacher_bg ? 'theme_text_bg' : ''}` }, this.theme_teacher)))))))), index.h("div", { class: "container theme-definition-wrapper" }, index.h("div", { class: 'row align-items-center justify-content-center' }, index.h("div", { class: 'col-12' }, index.h("div", { class: "theme-definition" }, index.h("div", { class: 'row align-items-baseline justify-content-center' }, index.h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' }, index.h("h3", null, "Defini\u00E7\u00E3o")), index.h("div", { class: 'col-12 col-sm-12 col-md-9 col-lg-9' }, index.h("slot", { name: "yduqs-cover-definition" }))), index.h("div", { class: 'row align-items-baseline justify-content-center' }, index.h("div", { class: 'col-sm-12 col-md-3 col-lg-3' }, index.h("h3", null, "Prop\u00F3sito")), index.h("div", { class: 'col-sm-12 col-md-9 col-lg-9' }, index.h("slot", { name: "yduqs-cover-purpose" }))), this.theme_cover_preparation ?
      index.h("div", { class: 'row align-items-baseline justify-content-center' }, index.h("div", { class: 'col-12 col-sm-12 col-md-3 col-lg-3' }, index.h("h3", null, "Prepara\u00E7\u00E3o")), index.h("div", { class: 'col-sm-12 col-md-9 col-lg-9' }, index.h("slot", { name: 'yduqs-cover-preparation-text' })))
      : ''))))));
  }
};

const Drop = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    if (this.colsize !== "" || this.colsize !== undefined) {
      this._colsize = this.colsize;
      console.log(this._colsize);
    }
    else {
      this._colsize = "12";
    }
  }
  render() {
    return (index.h("div", { class: `container-drop col-md-${this._colsize}` }, index.h("select", { class: "drop-options", "arial-label": "Selecionar elemento" }, index.h("slot", null))));
  }
};

const Footer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "c-footer-bgColor" }, index.h("div", { class: "container" }, index.h("yduqs-title", { topic_title: "Refer\u00EAncias" }), index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: "col-12 col-md-10 col-lg-8 my-2" }, index.h("slot", { name: "itens-referencia" }))), index.h("yduqs-title", { topic_title: "Explore +" }), index.h("div", { class: "row align-items-center justify-content-center" }, index.h("div", { class: "col-12 col-md-10 col-lg-8 my-2" }, index.h("slot", { name: "itens-exploremais" }))))));
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
    return (index.h("div", { style: { width: `${this.width}`, height: `${this.height}` }, class: { 'c-image': true, 'covered': this._iscovered }, onClick: () => this.coverChange() }, index.h("div", { class: { 'c-image__capa': true }, style: { 'background-color': `${this.bgcolor}` } }, index.h("svg", { width: "54", height: "54", viewBox: "0 0 54 54", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M27 14.625C33.21 14.625 38.25 19.665 38.25 25.875C38.25 27.0225 38.025 28.125 37.71 29.16L44.595 36.045C47.7225 33.2775 50.1975 29.8125 51.75 25.8525C47.8575 15.9975 38.25 9.00003 27 9.00003C24.1425 9.00003 21.3975 9.45003 18.81 10.2825L23.6925 15.165C24.75 14.85 25.8525 14.625 27 14.625ZM6.0975 7.11003C5.22 7.98753 5.22 9.40503 6.0975 10.2825L10.53 14.715C6.885 17.6175 3.9825 21.4425 2.25 25.875C6.1425 35.7525 15.75 42.75 27 42.75C30.42 42.75 33.6825 42.075 36.6975 40.905L42.8175 47.025C43.695 47.9025 45.1125 47.9025 45.99 47.025C46.8675 46.1475 46.8675 44.73 45.99 43.8525L9.2925 7.11003C8.415 6.23253 6.975 6.23253 6.0975 7.11003ZM27 37.125C20.79 37.125 15.75 32.085 15.75 25.875C15.75 24.1425 16.155 22.5 16.8525 21.06L20.385 24.5925C20.3175 24.9975 20.25 25.425 20.25 25.875C20.25 29.61 23.265 32.625 27 32.625C27.45 32.625 27.855 32.5575 28.2825 32.4675L31.815 36C30.3525 36.72 28.7325 37.125 27 37.125ZM33.6825 25.1325C33.345 21.9825 30.87 19.53 27.7425 19.1925L33.6825 25.1325Z", fill: "white" })), index.h("p", { class: "c-image__text" }, "Conte\u00FAdo sens\u00EDvel ", index.h("br", null), "Clique na imagem para visualiz\u00E1-la")), index.h("img", { class: "o-image", src: this.src, alt: this.bgcolor, title: this.img_title, loading: "lazy" })));
  }
  static get watchers() { return {
    "covered": ["handleCover"]
  }; }
};

const Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.visible = 'invisible';
    this.color = '';
    this.iconColor = 'times-buttom-color-default';
    this.bgColor = '';
  }
  async alteraInput(ev) {
    this.input = ev.target.value;
  }
  async apagarValor() {
    this.input = "";
    this.visible = 'invisible';
    this.color = 'color-default';
  }
  mensagem(novoValor) {
    if (novoValor != "" && novoValor.length > 4) {
      this.visible = '';
      this.color = 'success';
      this.iconColor = 'times-buttom-color-success';
      this.messageTitle = true;
      this.bgColor = 'bg-success';
    }
    else if (novoValor == "") {
      this.color = 'color-default';
      this.visible = 'invisible';
      this.iconColor = 'times-buttom-color-default';
      this.bgColor = "";
    }
    else {
      this.visible = ' ';
      this.color = 'danger';
      this.iconColor = 'times-buttom-color-danger';
      this.messageTitle = false;
      this.bgColor = 'bg-danger';
    }
  }
  render() {
    return (index.h("div", { class: "container-input" }, index.h("h2", null, this.titulo), index.h("input", { id: "inputId", class: `${this.color} inputC ${this.bgColor}`, type: "text", placeholder: this.icon + ' ' + this.placeh, value: this.input, onInput: (ev) => this.alteraInput(ev) }), index.h("span", { class: "times-buttom", onClick: () => { this.apagarValor(); } }, index.h("i", { class: `fa fa-times ${this.iconColor}` })), index.h("p", { class: `${this.color} message-value ${this.visible}` }, this.messageTitle ? 'Username available!' : 'Username Token!')));
  }
  static get watchers() { return {
    "input": ["mensagem"]
  }; }
};

const YduqsLoading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onClose = index.createEvent(this, "close", 7);
    this.message = '';
    this.open = false;
    this._isOpen = false;
  }
  async hide() {
    this._isOpen = false;
    this.onClose.emit();
  }
  async show() {
    this._isOpen = true;
  }
  async isOpen() {
    return this._isOpen;
  }
  componentWillLoad() {
    this._isOpen = this.open;
  }
  renderMessage() {
    return (index.h("span", { class: "c-loading__message c-paragraph" }, this.message));
  }
  render() {
    const displayClass = this._isOpen ? '' : 'c-loading--hidden';
    return (index.h(index.Host, { class: `c-loading ${displayClass}` }, index.h("div", { class: "c-loading__animation" }, index.h("div", { class: "c-loading__dot" }), index.h("div", { class: "c-loading__dot" }), index.h("div", { class: "c-loading__dot" })), this.message !== '' ? this.renderMessage() : null));
  }
};

const mobileBreakpoint = 578;
const YduqsMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onChangeMenuData = index.createEvent(this, "changemenudata", 7);
    this.onClickMenuItem = index.createEvent(this, "clickmenuitem", 7);
    this._isMobile = window.innerWidth < mobileBreakpoint;
    this._isOpen = false;
    this._isActive = false;
    this._animate = false;
    this._activeIndex = 0;
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
  async initialize(config) {
    this.settings = config;
  }
  closeMenu(index) {
    if (!this._isMobile && this._isOpen) {
      this.animate(true);
      this.renderActiveItem();
      this.onClickMenuItem.emit(this.getActiveItem());
    }
    if (index >= 0) {
      this._activeIndex = index;
    }
    this._isOpen = false;
  }
  ;
  openMenu() {
    if (!this._isMobile && this._isOpen) {
      this.closeMenu();
    }
    else {
      this._isOpen = true;
    }
  }
  ;
  getActiveItem() {
    if (this.settings !== undefined) {
      return this.settings.itemList.find((item, index) => {
        if (index === this._activeIndex) {
          return item;
        }
      });
    }
    return { label: '', href: '' };
  }
  renderActiveItem() {
    const currActiveItem = this.getActiveItem();
    const animationClass = this._animate ? 'u-fade-in' : '';
    return (index.h("div", { class: `c-menu__item--active ${animationClass}` }, index.h("span", { class: "c-menu__title" }, this.settings !== undefined ? this.settings.title : ''), index.h("span", { class: "c-menu__divider" }), index.h("span", { class: `c-menu__item` }, currActiveItem.label)));
  }
  renderActiveMarker() {
    return (index.h("span", { class: "c-menu__active-marker" }));
  }
  renderMenuItems() {
    const menuItemsList = [];
    const animationClass = this._animate ? 'u-fade-in' : '';
    if (this.settings !== undefined) {
      this.settings.itemList.forEach((item, index$1) => {
        menuItemsList.push(index.h("div", { class: {
            'c-menu__item-container': true
          } }, (this._activeIndex === index$1) ? this.renderActiveMarker() : null, index.h("a", { href: `${item.href}`, onClick: () => this.closeMenu(index$1), class: {
            'c-menu__item': true,
            'c-menu__item--active': (this._activeIndex === index$1)
          } }, item.label), index.h("span", { class: "c-menu__divider" })));
      });
    }
    return index.h("menu", { class: `c-menu__items-wrapper ${animationClass}` }, menuItemsList);
  }
  getMenuMobile() {
    return (index.h("div", { class: this._isOpen ? 'c-menu__modal__wrapper open' : 'c-menu__modal__wrapper' }, index.h("div", { class: "c-menu__modal__overlay", onClick: () => this.closeMenu() }), index.h("div", { class: "c-menu__modal" }, index.h("div", { class: "c-menu__modal__header" }, index.h("div", { class: "c-menu__modal__close", onClick: () => this.closeMenu() }, index.h("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, index.h("path", { d: "M13.3 0.709971C12.91 0.319971 12.28 0.319971 11.89 0.709971L6.99997 5.58997L2.10997 0.699971C1.71997 0.309971 1.08997 0.309971 0.699971 0.699971C0.309971 1.08997 0.309971 1.71997 0.699971 2.10997L5.58997 6.99997L0.699971 11.89C0.309971 12.28 0.309971 12.91 0.699971 13.3C1.08997 13.69 1.71997 13.69 2.10997 13.3L6.99997 8.40997L11.89 13.3C12.28 13.69 12.91 13.69 13.3 13.3C13.69 12.91 13.69 12.28 13.3 11.89L8.40997 6.99997L13.3 2.10997C13.68 1.72997 13.68 1.08997 13.3 0.709971Z", fill: "#30404D" }))), index.h("span", { class: "c-menu__modal__title c-heading u-title-xsmall" }, this.settings ? this.settings.title : '')), index.h("div", { class: "c-menu__modal__body" }, this.renderMenuItems()))));
  }
  getMenuDesktop() {
    const animationClass = this._animate ? 'active u-linear-left' : '';
    return (index.h("div", { class: `c-menu__desktop ${animationClass}` }, this._isOpen ? this.renderMenuItems() : this.renderActiveItem()));
  }
  animate(state = false) {
    this._animate = state;
  }
  render() {
    const deviceClass = this._isMobile ? 'mobile' : 'desktop';
    const openIconClass = this._isOpen ? 'open' : '';
    return (index.h(index.Host, { class: `c-menu ${deviceClass}` }, index.h("div", { class: "c-menu__floating-btn__container" }, index.h("button", { class: "c-menu__floating-btn", onClick: () => this.openMenu() }, index.h("div", { class: `c-menu__floating-icon ${openIconClass}` }, index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" }), index.h("span", { class: "icon-bar" })))), this._isMobile ? this.getMenuMobile() : this.getMenuDesktop()));
  }
  get el() { return index.getElement(this); }
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
      index.h("div", { class: 'c-module-cover' }, index.h("div", { class: 'row g-0 m-0' }, index.h("div", { class: "col-12 col-lg-2 col-xxl-3 d-flex justify-content-center align-items-center box-column d-lg-block" }, index.h("span", null), index.h("p", { class: "u-title-medium" }, this.number_module), index.h("span", null)), index.h("div", { class: "col-12 col-lg-10 col-xxl-9 d-flex flex-column flex-lg-row" }, index.h("div", { class: "container-box-title col-12 col-lg-8 col-xxl-7 d-flex" }, index.h("div", { class: "box-title" }, index.h("div", { class: "titles" }, index.h("h2", { class: "c-heading u-title-medium" }, this.title_module), index.h("p", { class: "u-text" }, this.objective)), index.h("div", { class: "times" }, this.read_time && this.title_read_time ?
        index.h("div", { class: "time-read" }, index.h("span", { class: "material-icons" }, "access_time"), index.h("div", { class: "itens-read" }, index.h("span", { class: "text-read" }, this.title_read_time), index.h("span", { class: "text-time-read" }, this.read_time)))
        : '', this.midia_time && this.title_midia_time ?
        index.h("div", { class: "time-video" }, index.h("span", { class: "material-icons" }, "ondemand_video"), index.h("div", { class: "itens-video" }, index.h("span", { class: "text-video" }, this.title_midia_time), index.h("span", { class: "text-time-video" }, this.midia_time)))
        : ''))), index.h("div", { class: "box-image" }, index.h("div", { class: "img-capa", style: imgCapa }, index.h("div", { class: "shadow-image" }))))))
    ];
  }
};

const YduqsNotification = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onClose = index.createEvent(this, "close", 7);
    this.type = '';
    this.dismissible = false;
    this.open = false;
    this._isOpen = false;
    this._isDynamic = false;
  }
  async close() {
    this._isOpen = false;
    this._isDynamic = false;
    this.onClose.emit();
  }
  async show() {
    this._isOpen = true;
    this._isDynamic = true;
  }
  async isOpen() {
    return this._isOpen;
  }
  componentWillLoad() {
    this._isOpen = this.open;
  }
  _getIconName() {
    if (this.type === 'info') {
      return 'info';
    }
    else if (this.type === 'success') {
      return 'check_circle';
    }
    else if (this.type === 'warning') {
      return 'report_problem';
    }
    else if (this.type === 'error') {
      return 'cancel';
    }
    else {
      return '';
    }
  }
  render() {
    const isOpenClass = !this._isOpen ? 'u-fade-out' : '';
    const typeClass = this.type ? `c-notification--${this.type}` : '';
    const iconClass = this._getIconName();
    const isDynamicClass = this._isDynamic ? 'c-notification--dynamic u-fade-in' : '';
    return (index.h("div", { role: "notification", hidden: !this._isOpen, class: `c-notification ${typeClass} ${isOpenClass} ${isDynamicClass}` }, index.h("div", { class: "c-notification__container" }, index.h("div", { class: "c-notification__content" }, index.h("span", { class: "c-notification__icon material-icons" }, iconClass), index.h("slot", null)), this.dismissible && (index.h("button", { class: "c-notification__control", onClick: () => this.close() }, index.h("span", { class: "c-notification__icon material-icons" }, "close"))))));
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
  }
  async initialize(config) {
    this.settings = config;
  }
  renderQuestions() {
    const questionsList = [];
    if (this.settings !== undefined) {
      this.settings.questions.forEach(question => {
        questionsList.push(index.h("div", { class: "question-block" }, index.h("div", { class: "question-title", innerHTML: question.question_title }), index.h("div", { class: "question-options" }, index.h("yduqs-card-selecionavel", { "correct-answer": question.correct_anwser }, index.h("yduqs-card-selecionavel-item", { optionid: "a", innerHTML: question.options[0] }), index.h("yduqs-card-selecionavel-item", { optionid: "b", innerHTML: question.options[1] }), index.h("yduqs-card-selecionavel-item", { optionid: "c", innerHTML: question.options[2] }), index.h("yduqs-card-selecionavel-item", { optionid: "d", innerHTML: question.options[3] }), index.h("yduqs-card-selecionavel-item", { optionid: "e", innerHTML: question.options[4] }))), index.h("div", { class: "question-button" }, index.h("button", { type: "button", class: "c-button", tabindex: "1" }, "Responder")), index.h("div", { class: "question-positive-feedback d-none" }, index.h("yduqs-card-intro", { text: "Parab\u00E9ns!" }, index.h("h4", null, "A alternativa est\u00E1 correta."), index.h("p", { class: "c-paragraph", innerHTML: question.positive_feedback }))), index.h("div", { class: "question-negative-feedback d-none" }, index.h("yduqs-card-intro", { text: "Opa!" }, index.h("h4", null, "Algo n\u00E3o deu certo."), index.h("p", { class: "c-paragraph" }, "Mas n\u00E3o se preocupe, voc\u00EA pode voltar ao t\u00F3pico ", index.h("a", { href: question.negative_feedback_link, innerHTML: question.negative_feedback_topic }), " e, ap\u00F3s reler o conte\u00FAdo, tentar novamente.")))));
      });
    }
    return index.h("yduqs-questions-body", null, questionsList);
  }
  render() {
    return (index.h("div", { class: "c-questions" }, index.h("div", { class: 'row align-items-center justify-content-center' }, index.h("div", { class: 'col-12' }, this.renderQuestions()))));
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

const Rating = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async avaliar() {
    console.log('teste');
    // var starY = '<i class="active fas fa-star" aria-hidden="true"></i>~{"\n"}';
    // var starN = '<i class="active far fa-star" aria-hidden="true"></i>~{"\n"}';
    // var nota1 = starN + starN + starN + starN + starY;
    // var nota2 = starN + starN + starN + starY + starY;
    // var nota3 = starN + starN + starY + starY + starY;
    // var nota4 = starN + starY + starY + starY + starY;
    // var nota5 = starY + starY + starY + starY + starY;
    // if (nota == 1) {
    //     console.log(nota1);
    // } else if (nota == 2) {
    //     console.log(nota2);
    // } else if (nota == 3) {
    //     console.log(nota3);
    // } else if (nota == 4) {
    //     console.log(nota4);
    // } else if (nota == 5) {
    //     console.log(nota5);
    // }
  }
  render() {
    return (index.h("div", { class: "c-rating" }, index.h("h3", null, this.cta), index.h("div", { class: "star-rating" }, index.h("label", null, index.h("i", { class: "active fa fa-star", "aria-hidden": "true" })), index.h("label", null, index.h("i", { class: "active fa fa-star", "aria-hidden": "true" })), index.h("label", null, index.h("i", { class: "active fa fa-star", "aria-hidden": "true" })), index.h("label", null, index.h("i", { class: "active fa fa-star", "aria-hidden": "true" })), index.h("label", null, index.h("i", { class: "active fa fa-star", "aria-hidden": "true" })), index.h("div", { class: "resposta" }))));
  }
};

const SectionCover = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "c-section-cover " }, index.h("header", null, index.h("div", { class: "section-icon" }, index.h("span", { class: "material-icons" }, this.section_icon)), index.h("div", { class: 'row align-items-center justify-content-center' }, index.h("div", { class: 'col-sm-12 col-md-5 col-lg-5' }, index.h("div", { class: "section-image", style: { "--section-image": "url('" + this.section_image + "')" } }, index.h("img", { src: "http://placeimg.com/720/480/tech" }))), index.h("div", { class: 'col-sm-12 col-md-7 col-lg-7' }, index.h("div", { class: "section-header-text" }, index.h("h1", { class: "c-heading" }, index.h("slot", { name: "section-heading" })), index.h("h2", { class: "c-heading" }, index.h("slot", { name: "section-subheading" }))))))));
  }
};

const Tab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const typeClass = this.type ? `c-tabs__tab--${this.type}` : '';
    return (index.h("div", { role: "tabpanel", hidden: !this.open, class: `c-tabs__tab ${typeClass}` }, index.h("slot", null)));
  }
};

const Tabs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onChange = index.createEvent(this, "changed", 7);
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
    const darkClass = this.isdarkmode ? 'c-tabs--dark' : '';
    return (index.h("div", { class: `c-tabs ${darkClass}` }, index.h("div", { role: "tablist", class: "c-tabs" }, index.h("div", { class: "c-tabs__nav" }, index.h("div", { class: "c-tabs__headings" }, this.tabs.map((tab, i) => {
      const openClass = tab.open ? 'c-tab-heading--active' : '';
      return (index.h("button", { role: "tab", disabled: tab.disabled, class: `c-tab-heading ${openClass}`, onClick: () => this.openTab(i) }, tab.header));
    }))), index.h("slot", null))));
  }
  get elem() { return index.getElement(this); }
};

const YduqsTag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const colorClass = this.color ? `c-tag--${this.color}` : '';
    return (index.h(index.Host, { role: "tag", class: `c-tag ${colorClass}` }, index.h("slot", null)));
  }
};

const YduqsTags = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: `c-tags` }, index.h("slot", null)));
  }
};

const Textarea = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "c-textarea" }, index.h("label", null, this.cta), index.h("textarea", { placeholder: this.placeholder }), index.h("button", { type: "submit", class: "c-button" }, this.txt_button)));
  }
};

const Timeline = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", { class: `c-topic-title ${this.dark ? 'c-topic-title--dark' : ''}` }, index.h("div", { class: 'row align-items-center justify-content-start' }, index.h("div", { class: "col-12 col-md-1 col-lg-1 offset-lg-1" }, this.topic_icon ? index.h("span", { class: "material-icons" }, this.topic_icon) : index.h("span", { class: "title-bar" })), index.h("div", { class: 'col-12 col-md-10 col-lg-8' }, index.h("h1", { class: "c-heading u-title-small" }, this.topic_title)))));
  }
};

const YduqsToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.myToggleEmit = index.createEvent(this, "myToggleEmit", 7);
    this.teste = 'teseeee';
    this.isOpen = false;
    this.isDisable = false;
    this.handleClick = () => {
      this.isOpen = !this.isOpen;
      this.myToggleEmit.emit(this.isOpen);
    };
  }
  componentDidLoad() {
    this.isOpen = this.open;
    this.isDisable = this.disable;
  }
  render() {
    return [
      index.h("div", { class: "c-toggle" }, index.h("label", { class: "switch" }, index.h("input", { id: "tog", type: "checkbox", checked: this.isOpen, disabled: this.isDisable, onClick: this.handleClick }), index.h("span", { class: "slider round" })))
    ];
  }
};

exports.yduqs_accordion = YduqsAccordion;
exports.yduqs_accordion_pane = YduqsAccordionPane;
exports.yduqs_audio_player = YduqsAudioPlayer;
exports.yduqs_before_after = YduqsBeforeAfter;
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
exports.yduqs_card_intro = YduqsCardIntro;
exports.yduqs_card_modulo = YduqsCardModulo;
exports.yduqs_card_modulo_body = YduqsCardModuloBody;
exports.yduqs_card_modulo_footer = YduqsCardModuloFooter;
exports.yduqs_card_modulo_header = YduqsCardModuloHeader;
exports.yduqs_card_selecionavel = YduqsCardSelecionavel;
exports.yduqs_card_selecionavel_item = YduqsCardSelecionavelItem;
exports.yduqs_carousel = YduqsCarousel;
exports.yduqs_carousel_item = YduqsCarouselItem;
exports.yduqs_code_snipet = YduqsCodeSnipet$1;
exports.yduqs_collapse = YduqsCollapse;
exports.yduqs_collapse_content = YduqsCollapseContent;
exports.yduqs_cover = Textarea$1;
exports.yduqs_dropdown = Drop;
exports.yduqs_footer = Footer;
exports.yduqs_image = YduqsImage;
exports.yduqs_input = Input;
exports.yduqs_loading = YduqsLoading;
exports.yduqs_menu = YduqsMenu;
exports.yduqs_modal = YduqsModal;
exports.yduqs_module_cover = YduqsCodeSnipet;
exports.yduqs_notification = YduqsNotification;
exports.yduqs_progress_bar = YduqsProgressBar;
exports.yduqs_questions = YduqsQuestion;
exports.yduqs_quote = YduqsQuote;
exports.yduqs_quote_body = YduqsQuoteBody;
exports.yduqs_quote_image = YduqsQuoteImage;
exports.yduqs_rating = Rating;
exports.yduqs_section_cover = SectionCover;
exports.yduqs_tab = Tab;
exports.yduqs_tabs = Tabs;
exports.yduqs_tag = YduqsTag;
exports.yduqs_tags = YduqsTags;
exports.yduqs_textarea = Textarea;
exports.yduqs_timeline = Timeline;
exports.yduqs_timeline_item = TimelineItem;
exports.yduqs_title = Title;
exports.yduqs_toggle = YduqsToggle;
