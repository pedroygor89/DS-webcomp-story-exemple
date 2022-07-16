import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class YduqsCollapseTeoriaContent {
  content: HTMLDivElement;
  _isOpen: boolean;
  english: boolean;
  spanish: boolean;
  open: boolean;
  teoria: boolean;
  size: string;
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
