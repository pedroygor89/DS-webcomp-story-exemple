import { EventEmitter } from '../../../stencil-public-runtime';
declare type iConfigItemModule = {
  complete: boolean;
};
declare type iConfigItem = {
  left: number;
  top: number;
  active: boolean;
  modules: iConfigItemModule[];
};
declare type iStep = 'loading' | 'loaded';
export declare class YduqsVirtualMap {
  /**
   * Identificador do Mapa
   */
  _id: string;
  /**
   * Endereço do arquivo de configuração
   */
  config: string;
  /**
   * Número do item que será marcado como ponto atual.
   */
  selected?: number;
  error: string[];
  step: iStep;
  background: string;
  items: iConfigItem[];
  bgDimensions: {
    height: number;
    width: number;
  };
  showLines: boolean;
  /**
   * Evento disparado no clique de cada ponto
   */
  virtualMapPointClick: EventEmitter<any>;
  handlePointsPosition(): void;
  buildLines(): void;
  private hostElem;
  private bgElem;
  private linesElem;
  /**
   * Executado sempre que um ponto no mapa é clicado
   * @param point
   */
  private handlePointClick;
  /**
   * Adiciona um item a lista de erros
   * @param error
   */
  private setError;
  /**
   * Converte a posição de un Ponto em PX para %
   * @param left
   * @param top
   * @returns {top: number, left: number}
   */
  private calculatePointPosition;
  /**
   * Verifica e constroi os elementos necessários para o carregamento do background
   * @param url
   */
  private buildBgImage;
  /**
   * Valida os dados da resposta de configuração
   * @param response
   */
  private validateFetchedData;
  /**
   * Inicia o Mapa
   */
  private init;
  componentWillLoad(): void;
  centralize(): Promise<void>;
  render(): any;
}
export {};
