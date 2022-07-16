import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class YduqsCollapseContent {
  content: HTMLDivElement;
  _isOpen: boolean;
  open: boolean;
  size: string;
  color_collapse: string;
  aling_collapse: string;
  header: string;
  onToggle: EventEmitter;
  componentWillLoad(): void;
  show(): Promise<void>;
  close(): Promise<void>;
  toggle(): void;
  isOpen(): Promise<boolean>;
  animate(): void;
  render(): any;
}
