export declare class YduqsPlaylistVideoModel {
  id: string;
  title_video: string;
  module_video: string;
  subtitle_video: string;
  thumb_video: string;
  link_video: string;
  paragraph: string;
  time: string;
  border_bottom: boolean;
  type: string;
}
export declare class YduqsModulePlaylists {
  module: string;
  playlist: Array<YduqsPlaylistVideoModel>;
}
export declare class YduqsModulesPlaylists {
  modules: Array<YduqsModulePlaylists>;
}
