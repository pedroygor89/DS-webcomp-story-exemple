import { EventEmitter } from '../../../stencil-public-runtime';
import { YduqsAudioPlayerModel } from './yduqs-audio-player.model';
export declare class YduqsAudioPlayer {
  private _audioObj;
  src: string;
  audio_id: string;
  shortdisplay: boolean;
  dark: boolean;
  private _rate;
  coloraudio: string;
  rate: number;
  settings: YduqsAudioPlayerModel;
  private _speedPosition;
  initialize(config: YduqsAudioPlayerModel): Promise<void>;
  updateRate: EventEmitter<number>;
  playbackRateHandler(newRate: number): void;
  componentDidLoad(): void;
  componentWillLoad(): void;
  updatePlaybackRate(): void;
  createSpeedControl(): void;
  render(): any;
}
