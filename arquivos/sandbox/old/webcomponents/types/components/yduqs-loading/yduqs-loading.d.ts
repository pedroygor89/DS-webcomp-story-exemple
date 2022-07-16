import { EventEmitter } from '../../stencil-public-runtime';
export declare class YduqsLoading {
  message: string;
  open: boolean;
  _isOpen: boolean;
  onClose: EventEmitter;
  hide(): Promise<void>;
  show(): Promise<void>;
  isOpen(): Promise<boolean>;
  componentWillLoad(): void;
  private renderMessage;
  render(): any;
}
