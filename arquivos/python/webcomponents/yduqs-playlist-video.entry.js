import { r as registerInstance, h, e as Host, g as getElement } from './index-6ca065bd.js';
import { i as i18n } from './i18n-d17a09a3.js';

const PlaylistVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.module_number = 0;
    this.videoItems = { modules: [] };
    this.videoSelected = '';
    this.english = false;
    this.spanish = false;
  }
  async initialize(config) {
    this.settings = config;
  }
  //Muda o Video da Galeria.
  async changeVideoGallery(video) {
    document.querySelectorAll('yduqs-gallery-video').forEach(gallery => {
      gallery.srcVideo = video.link_video;
      this.moduleId = video.id.split('-')[1] == 'apresentacao' ? 99 : video.id.split('-')[1] == 'conclusao' ? 100 : video.id.split('-')[1];
      gallery.module_number_video = parseInt(this.moduleId);
      gallery.title_gallery = video.title_video;
    });
    this.videoSelected = video.id;
  }
  renderPlaylistVideo() {
    const cardVideolist = [];
    if (this.settings !== undefined) {
      this.settings.modules.forEach(module => {
        module.playlist.forEach(playlistItem => {
          let current_module_number = module.module.replace('modulo_', '') == 'apresentacao' ? 99 : module.module.replace('modulo_', '') == 'conclusao' ? 100 : module.module.replace('modulo_', '');
          if (this.module_number == 0 || this.module_number == current_module_number) {
            cardVideolist.push(h("yduqs-card-video", { "data-gtm-event-category": ":[[instituicao]]:[[tipo-usuario]]", "data-gtm-event-action": "galeria-video:conteudo-clique-item", "data-gtm-event-label": "selecionar-video", id_video: playlistItem.id, title_video: playlistItem.title_video, subtitle_video: playlistItem.subtitle_video, thumb_video: playlistItem.thumb_video, link_video: playlistItem.link_video, paragraph: playlistItem.paragraph, time: playlistItem.time, border_bottom: playlistItem.border_bottom, active: playlistItem.id == this.videoSelected ? true : false, module_video: module.module.replace('modulo_', ''), type_video: playlistItem.type, onClick: () => {
                this.changeVideoGallery(playlistItem);
              } }));
          }
        });
      });
      return h("div", { class: "c-playlist-video__items" }, ...cardVideolist);
    }
  }
  async videosLoad() {
    document.querySelectorAll('module').forEach(currentModule => {
      //pega somente o numero do modulo
      let moduleId = currentModule.id.replace('modulo', '');
      let module = 'modulo_' + moduleId;
      let playlist = [];
      //Pega os yduqs-video-player no HTML
      currentModule.querySelectorAll('yduqs-video-player').forEach((videosHtml, indexVideo) => {
        let videoChildModuleVideo = videosHtml.closest('yduqs-module-video');
        let videoChildGallery = videosHtml.closest('yduqs-gallery-video');
        let videoChildQuestion = videosHtml.closest('yduqs-gallery-video');
        let videoChildTeoria = videosHtml.closest('yduqs-teoria');
        //verifica se o yduqs-video-player está dentro de outro compoenente de video
        if (!videoChildTeoria && !videoChildModuleVideo && !videoChildGallery && !videoChildQuestion) {
          let closestContainer = videosHtml.closest('.container');
          let closestTitle = closestContainer.querySelector('yduqs-title');
          let nameVideo = closestTitle === null || closestTitle === void 0 ? void 0 : closestTitle.topic_title;
          let anchor = `mod-${moduleId}-vid-${indexVideo}`;
          playlist.push({
            id: anchor,
            title_video: nameVideo,
            subtitle_video: '',
            thumb_video: 'https://stensineme.blob.core.windows.net/designsystem/test/vid1.png',
            link_video: videosHtml.src,
            paragraph: '',
            time: '',
            border_bottom: false,
            type: 'Video',
          });
        }
        else if (videoChildTeoria) {
          let anchor = `mod-${moduleId}-vid-${indexVideo}`;
          let title_video = this.english ? 'Theory in Practice' : this.spanish ? 'Teoría en la Práctica' : 'Teoria na Prática';
          playlist.push({
            id: anchor,
            title_video: title_video,
            subtitle_video: '',
            thumb_video: 'https://stensineme.blob.core.windows.net/designsystem/test/vid1.png',
            link_video: videosHtml.src,
            paragraph: '',
            time: '',
            border_bottom: false,
            type: 'Video',
          });
        }
      });
      this.videoItems.modules.push({
        module: module,
        playlist: playlist,
      });
    });
  }
  async jsonLoad() {
    let module_video = document.querySelector('yduqs-module-video');
    if (module_video) {
      // Verifica o ambiente dev ou prod para carregar o arquivo json
      if (document.body.classList.contains('template_recursos')) {
        var jsonLocation = 'https://stensineme.blob.core.windows.net/designsystem/test/playlist_teste.json';
      }
      else {
        var jsonLocation = './json/videos.json';
      }
      // Associa o arquivo Json e faz o merge com os videos do html
      fetch(jsonLocation)
        .then(response => response.json())
        .then(json => {
        json.modules.forEach(videosJson => {
          this.videoItems.modules.forEach((videoItem, videoItemIndex) => {
            if (videosJson.module == videoItem.module) {
              this.videoItems.modules[videoItemIndex].playlist = this.videoItems.modules[videoItemIndex].playlist.concat(videosJson.playlist);
            }
          });
          this.videoItems.modules.forEach((m, indexM) => {
            let indexPlaylist = 0;
            if (m.playlist !== undefined) {
              m.playlist.forEach((n, indexN) => {
                let modNum = m.module.replace('modulo_', '');
                if (n.type === 'Video') {
                  this.videoItems.modules[indexM].playlist[indexN].id = `mod-${modNum}-vid-${indexN}`;
                  this.videoItems.modules[indexM].playlist[indexN].type = 'Video';
                  this.videoItems.modules[indexM].playlist[indexN].module_video =
                    modNum == 'apresentacao' ? 'Introduçao' : modNum == 'conclusao' ? 'Conclusão' : 'Módulo ' + modNum;
                }
                else {
                  this.videoItems.modules[indexM].playlist[indexN].id = `mod-${modNum}-pl-${indexPlaylist}`;
                  this.videoItems.modules[indexM].playlist[indexN].type = i18n('pager.teexplico');
                  this.videoItems.modules[indexM].playlist[indexN].module_video = 'Módulo ' + modNum;
                  indexPlaylist++;
                }
              });
            }
          });
        });
      });
    }
  }
  async componentWillLoad() {
    await this.videosLoad();
    await this.jsonLoad();
  }
  componentDidRender() {
    this.initialize(this.videoItems);
  }
  render() {
    return (h(Host, null, h("div", { class: "c-playlist-video" }, this.renderPlaylistVideo())));
  }
  get el() { return getElement(this); }
};

export { PlaylistVideo as yduqs_playlist_video };
