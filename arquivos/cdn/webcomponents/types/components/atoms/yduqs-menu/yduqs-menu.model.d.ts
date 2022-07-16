export declare class YduqsPlaylistVideoModelItens {
  id: string;
  title_video: string;
  subtitle_video: string;
  thumb_video: string;
  link_video: string;
  paragraph: string;
  time: string;
  border_bottom: boolean;
  mod_num: string;
  type: string;
  skip_menu: boolean;
}
export declare class YduqsMenuPlaylistModel {
  module: string;
  playlist: Array<YduqsPlaylistVideoModelItens>;
}
export declare class YduqsMenuModel {
  modules: Array<YduqsMenuPlaylistModel>;
}
