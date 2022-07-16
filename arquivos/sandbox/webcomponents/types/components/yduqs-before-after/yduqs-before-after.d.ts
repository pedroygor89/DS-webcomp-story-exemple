export declare class YduqsBeforeAfter {
  before_img: string;
  before_img_alt: string;
  before_img_title: string;
  after_img: string;
  after_img_alt: string;
  after_img_title: string;
  caption: string;
  _barPosision: number;
  _isDraggingValue: boolean;
  private _xValue;
  _isFirstRender: boolean;
  elementWidth: number;
  el: HTMLElement;
  divElement: HTMLElement;
  draggbleElement: HTMLDivElement;
  get isDragging(): boolean;
  set isDragging(value: boolean);
  get x(): number;
  set x(value: number);
  componentDidRender(): void;
  calculateMaxBarRight(): number;
  changeBar(e: any): void;
  dragStart(): void;
  onDrag(event: MouseEvent | TouchEvent): void;
  dragEnd(): void;
  onResize(event: any): void;
  render(): any;
}
