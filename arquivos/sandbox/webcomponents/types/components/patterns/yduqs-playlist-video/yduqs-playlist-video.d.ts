import { YduqsModulesPlaylists } from './yduqs-playlist-video.model';
export declare class PlaylistVideo {
  module_number: number;
  settings: YduqsModulesPlaylists;
  initialize(config: YduqsModulesPlaylists): Promise<void>;
  private renderPlaylistVideo;
  render(): any;
}
