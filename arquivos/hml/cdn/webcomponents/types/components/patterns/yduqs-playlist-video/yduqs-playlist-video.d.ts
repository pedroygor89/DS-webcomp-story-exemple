import { YduqsModulesPlaylists } from './yduqs-playlist-video.model';
export declare class PlaylistVideo {
  module_number: number;
  settings: YduqsModulesPlaylists;
  videoItems: {
    modules: any[];
  };
  videoSelected: string;
  moduleId: string;
  el: HTMLElement;
  english: boolean;
  spanish: boolean;
  initialize(config: YduqsModulesPlaylists): Promise<void>;
  changeVideoGallery(video: any): Promise<void>;
  private renderPlaylistVideo;
  videosLoad(): Promise<void>;
  jsonLoad(): Promise<void>;
  componentWillLoad(): Promise<void>;
  componentDidRender(): void;
  render(): any;
}
