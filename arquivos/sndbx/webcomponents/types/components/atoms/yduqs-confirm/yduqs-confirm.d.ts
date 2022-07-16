import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsConfirm {
  open: boolean;
  _title: string;
  subtitle?: string;
  message: string;
  icon: string;
  usematerial?: boolean;
  btntext?: string;
  confirmClosed: EventEmitter<boolean>;
  confirmClick: EventEmitter<boolean>;
  handleClose(): void;
  handleClick(): void;
  render(): any;
}
