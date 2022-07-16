import { EventEmitter } from '../../stencil-public-runtime';
export declare class YduqsAccordion {
  private element;
  content: HTMLDivElement;
  _contentMaxHeight: string;
  outline: boolean;
  _isFirstRender: boolean;
  _active: boolean;
  onToggle: EventEmitter;
  onTogglePane(ev: any): void;
  componentDidRender(): void;
  animate(): void;
  render(): any;
}
