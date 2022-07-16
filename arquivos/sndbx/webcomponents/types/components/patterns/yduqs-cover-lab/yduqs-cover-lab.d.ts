import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsCoverLab {
  el: HTMLElement;
  background_img: string;
  loading: boolean;
  subtitle_cover: string;
  title_cover: string;
  to_page_init_lab: string;
  mobileBreakpoint: number;
  _isMobile: Boolean;
  goToNextPage: EventEmitter<string>;
  handleWindowResize(): void;
  openIntro(): void;
  openStart(): void;
  componentWillLoad(): void;
  render(): any;
}
