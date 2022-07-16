import { YduqsModulePlaylists } from './yduqs-module-video.model';
export declare class ModuleVideo {
  settings: YduqsModulePlaylists;
  module_number: number;
  module_icon: string;
  title_gallery: string;
  subtitle_gallery: string;
  title_video: string;
  paragraph_video: string;
  active_video: string;
  initialize(config: YduqsModulePlaylists): Promise<void>;
  render(): any;
}
