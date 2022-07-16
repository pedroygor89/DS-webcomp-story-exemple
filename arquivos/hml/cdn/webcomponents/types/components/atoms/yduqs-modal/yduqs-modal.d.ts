import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsModal {
  _isopen: boolean;
  variant: string;
  size: string;
  _title: string;
  isopen: boolean;
  maxbodyheight: number;
  handleModal(m: any): void;
  showModal(): Promise<void>;
  show(): Promise<void>;
  hide(): Promise<void>;
  componentWillLoad(): void;
  modalClosed: EventEmitter<boolean>;
  private closeModal;
  onResize(event: any): void;
  private getModalBodyHeight;
  render(): any;
}
