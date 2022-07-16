import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsToast {
  open: boolean;
  message: string;
  tit?: string;
  icon: string;
  usematerial?: boolean;
  delay?: number;
  toastClosed: EventEmitter<boolean>;
  handleClose(): void;
  render(): any;
}
