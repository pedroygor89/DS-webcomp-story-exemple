declare type iStep = 'loading' | 'info' | 'game';
export declare class YduqsShowPoints {
  /**
   * Identificador do Mapa
   */
  _id: string;
  /**
   * Endereço do arquivo de configuração
   */
  config: string;
  error: string[];
  step: iStep;
  title: string;
  info: string;
  items: any[];
  selected: any;
  selectedIndex: number;
  showInfo: boolean;
  showPoints: boolean;
  bgDimensions: {
    height: number;
    width: number;
  };
  modal: any;
  handleChangeSelectedIndex(): void;
  handleChangeSelected(): void;
  handleCloseModal(): void;
  private hostElem;
  private imgElem;
  private setError;
  private validateFetchedData;
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
   * Inicia o desafio
   */
  private init;
  private handleNext;
  private handlePrev;
  componentWillLoad(): void;
  handlePointClick(point: any): void;
  handleStartGame(): void;
  render(): any;
}
export {};
