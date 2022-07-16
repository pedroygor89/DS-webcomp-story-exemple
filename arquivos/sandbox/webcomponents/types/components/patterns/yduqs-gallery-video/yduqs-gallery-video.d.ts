import { YduqsModulePlaylists } from './yduqs-gallery-video.model';
export declare class GalleryVideo {
  settings: YduqsModulePlaylists;
  module_number: number;
  title_gallery: string;
  subtitle_gallery: string;
  title_video: string;
  paragraph_video: string;
  english: boolean;
  spanish: boolean;
  initialize(config: YduqsModulePlaylists): Promise<void>;
  componentWillLoad(): void;
  render(): any;
}
