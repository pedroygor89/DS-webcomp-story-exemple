import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsProgressBar {
  value: number;
  max: number;
  min: number;
  semirounded: boolean;
  el: HTMLElement;
  private _infoEl;
  _isValueVisible: boolean;
  displayValue: boolean;
  onHoverBar: EventEmitter;
  onChange: EventEmitter;
  watchValue(val: boolean, oldValue: boolean): void;
  componentWillLoad(): void;
  show(): Promise<void>;
  hide(): Promise<void>;
  onHoverBarHandler(): void;
  showInfo(valPercentage: any): void;
  hideInfo(): void;
  isValueVisible(): Promise<boolean>;
  render(): any;
}
