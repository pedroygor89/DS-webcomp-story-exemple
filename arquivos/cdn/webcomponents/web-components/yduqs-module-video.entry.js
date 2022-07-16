import { r as registerInstance, h } from './index-5acc1e77.js';
import { i as i18n } from './i18n-b16b05ee.js';

const ModuleVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.module_number = '0';
    this.module_icon = 'playlist_play';
  }
  async initialize(config) {
    this.settings = config;
  }
  //Abre o modal da Galeria dentro do menu.
  openGallery(video) {
    var menu = document.querySelector('yduqs-menu');
    menu.openGalleryVideo(video);
  }
  renderPlaylistVideo() {
    const cardVideolist = [];
    if (this.settings !== undefined) {
      this.settings['modules'].forEach(module => {
        module.playlist.forEach((playlistItem) => {
          /* console.info(this.module_number) */
          if (this.module_number == '0' || this.module_number.replace("modulo_", "") == module.module.replace("modulo_", "")) {
            playlistItem.id = `mod-${(module.module.replace("modulo_", ""))}-pl-${playlistItem.id}`;
            cardVideolist.push(h("yduqs-card-video", { id_video: playlistItem.id, module_video: module.module.replace("modulo_", ""), type_video: i18n('pager.teexplico'), title_video: playlistItem.title_video, subtitle_video: playlistItem.subtitle_video, thumb_video: playlistItem.thumb_video, link_video: playlistItem.link_video,
              // paragraph={playlistItem.paragraph}
              time: playlistItem.time, border_bottom: playlistItem.border_bottom, onClick: () => {
                this.openGallery(playlistItem);
              } }));
          }
        });
      });
      return h("div", { class: "c-playlist-video__items" }, ...cardVideolist);
    }
  }
  componentWillLoad() {
    // Verifica o ambiente dev ou prod para carregar o arquivo json
    if (document.body.classList.contains('template_recursos')) {
      var jsonLocation = 'https://stensineme.blob.core.windows.net/designsystem/test/playlist_teste.json';
    }
    else {
      var jsonLocation = './json/videos.json';
    }
    fetch(jsonLocation)
      .then(response => response.json())
      .then(json => {
      this.initialize(json);
    });
  }
  render() {
    return (h("div", { class: "c-module-video" }, h("div", { class: "c-module-video__titles" }, h("div", { class: 'row align-items-center justify-content-start' }, h("yduqs-title", { topic_icon: this.module_icon, topic_title: this.title_gallery })), h("div", { class: "c-module-video__titles_subtitles row align-items-center justify-content-center" }, h("div", { class: "c-module-video__titles_subtitles_content col-12 col-md-10 col-lg-8" }, h("p", null, this.subtitle_gallery)))), h("div", { class: "c-module-video__box row align-items-center justify-content-center" }, h("div", { class: "c-module-video__box_playlist col-12 col-md-10 col-lg-8" }, this.renderPlaylistVideo()))));
  }
};

export { ModuleVideo as yduqs_module_video };
