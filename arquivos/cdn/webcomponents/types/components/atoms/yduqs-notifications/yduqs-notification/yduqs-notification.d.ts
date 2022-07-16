import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class YduqsNotification {
  type: string;
  dismissible: boolean;
  open: boolean;
  _isOpen: boolean;
  _isDynamic: boolean;
  onClose: EventEmitter;
  close(): Promise<void>;
  show(): Promise<void>;
  isOpen(): Promise<boolean>;
  componentWillLoad(): void;
  private _getIconName;
  render(): any;
}
