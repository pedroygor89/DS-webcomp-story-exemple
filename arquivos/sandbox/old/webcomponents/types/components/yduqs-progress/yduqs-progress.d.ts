import { EventEmitter } from '../../stencil-public-runtime';
export declare class Progress {
  private element;
  rounded: boolean;
  semirounded: boolean;
  onChange: EventEmitter;
  onChangeBar(ev: any): void;
  render(): any;
}
