export declare class audioCard {
  el: HTMLElement;
  audiocard_id: string;
  src: string;
  dark: boolean;
  outlined: boolean;
  equal_height: boolean;
  title_audio_card: string;
  subtitle_audio_card: string;
  group: boolean;
  isPlaying: boolean;
  isPlayingSlow: boolean;
  duration: number;
  currentTime: number;
  audioPlayer: HTMLAudioElement;
  audioPlayerEnd: Boolean;
  playAudioStop(): Promise<void>;
  playAudioStopSlow(): Promise<void>;
  playAudioResetAll(): void;
  playAudioResetAllSlow(): void;
  playAudio(): Promise<void>;
  playAudioSlow(): Promise<void>;
  render(): any[];
}
