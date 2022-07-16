import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class YduqsAccordionPane {
  content: HTMLDivElement;
  _isOpen: boolean;
  open: boolean;
  onClickCollapse: EventEmitter;
  onToggle: EventEmitter;
  show(): Promise<void>;
  close(): Promise<void>;
  toggle(): void;
  isOpen(): Promise<boolean>;
  animate(): void;
  render(): any;
}
