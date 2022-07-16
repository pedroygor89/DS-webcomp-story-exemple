import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsCollapseTeoria {
  private element;
  _active: boolean;
  content: HTMLDivElement;
  _contentMaxHeight: string;
  border: boolean;
  outline: boolean;
  onToggle: EventEmitter;
  onTogglePane(ev: any): void;
  componentDidRender(): void;
  animate(): void;
  render(): any;
}
