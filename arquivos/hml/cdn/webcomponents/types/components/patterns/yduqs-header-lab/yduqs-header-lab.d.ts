import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsHeaderLab {
  /**
   * Título do Laboratório
   */
  _title: string;
  /**
   * Lista de Botões
   */
  items: string | any[];
  /**
   * Esconde o btn de Fullscreen
   */
  hiddenFullscreen: boolean;
  inFullscreen: boolean;
  btnClick: EventEmitter<any>;
  listennerFullscreenChange(): void;
  private handleFullscreen;
  render(): any;
}
