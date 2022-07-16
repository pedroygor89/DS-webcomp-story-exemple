import { EventEmitter } from '../../stencil-public-runtime';
export declare class YduqsCarousel {
  el: HTMLElement;
  space: number;
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
  setChildrenOrder(): void;
  private _setOrder;
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
