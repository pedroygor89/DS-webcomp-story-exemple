'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f761ffe9.js');

const YduqsMediaImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "o-media__image" }, index.h("img", { class: "o-image", alt: this.alt, src: this.src })));
  }
};

exports.yduqs_media_image = YduqsMediaImage;
