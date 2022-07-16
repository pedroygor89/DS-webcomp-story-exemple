import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsAlert {
  open: boolean;
  _title: string;
  subtitle?: string;
  message: string;
  icon: string;
  usematerial?: boolean;
  btntext?: string;
  alertClosed: EventEmitter<boolean>;
  alertClick: EventEmitter<boolean>;
  handleClose(): void;
  handleClick(): void;
  render(): any;
}
