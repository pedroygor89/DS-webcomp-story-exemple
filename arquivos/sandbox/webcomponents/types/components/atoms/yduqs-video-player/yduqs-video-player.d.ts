import Player from '@vimeo/player';
export declare class YduqsVideoPlayer {
  playerObj: Player;
  playerId: string;
  videoId: string;
  src: string;
  covered: boolean;
  width: string;
  height: string;
  bgcolor: string;
  componentWilLoad(): void;
  coverRemove(): void;
  render(): any;
}
