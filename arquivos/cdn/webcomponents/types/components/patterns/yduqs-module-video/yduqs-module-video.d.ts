import { YduqsModulePlaylists } from './yduqs-module-video.model';
export declare class ModuleVideo {
  el: HTMLElement;
  settings: YduqsModulePlaylists;
  module_number: string;
  module_icon: string;
  title_gallery: string;
  subtitle_gallery: string;
  title_video: string;
  paragraph_video: string;
  active_video: string;
  template_doktor: boolean;
  initialize(config: YduqsModulePlaylists): Promise<void>;
  private openGallery;
  private openGalleryDoktor;
  private renderPlaylistVideo;
  componentWillLoad(): void;
  render(): any;
}
