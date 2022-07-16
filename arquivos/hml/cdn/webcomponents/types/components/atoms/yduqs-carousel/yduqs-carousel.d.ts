import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsCarousel {
  el: HTMLElement;
  space: number;
  english: boolean;
  spanish: boolean;
  children: Array<any>;
  currentItem: number;
  currentPage: number;
  hasNext: boolean;
  hasPrev: boolean;
  isMobile: boolean;
  allItems: number;
  contentMinHeight: string;
  content: HTMLDivElement;
  onResize(event: any): void;
  onNextSlide: EventEmitter;
  onPrevSlide: EventEmitter;
  onUpdatePage: EventEmitter;
  private _isMobile;
  changeSlide(next?: boolean): void;
  next(): Promise<void>;
  prev(): Promise<void>;
  animate(animate?: boolean): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  render(): any;
}
