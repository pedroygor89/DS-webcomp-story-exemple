import { EventEmitter } from '../../../stencil-public-runtime';
declare type iStep = 'loading' | 'info' | 'game';
export declare class YduqsOrderedDndTrainning {
  /**
   * Identificador do Mapa
   */
  _id: string;
  /**
   * Endereço do arquivo de configuração
   */
  config: string;
  error: string[];
  title: string;
  info: string;
  data: any[];
  dropImage: string;
  selecteds: any[];
  sequence: string[];
  step: iStep;
  feedback: {
    thumb: string;
    text: string;
    isPositive: boolean;
    isLast?: boolean;
  } | null;
  showTip: boolean;
  showInfo: boolean;
  /**
   * Evento disparado no Final do Treinamento
   */
  trainningEnd: EventEmitter<any>;
  handleCloseFeedback(): void;
  private hostElem;
  /**
   * Verifica se o item manipulado pertence a sequencia correta
   * @param selected Opção selecionada
   * @returns boolean
   */
  private verify;
  private showNegativeFeedback;
  private showPositiveFeedback;
  /**
   * Disparado quando um item é arrastado
   * @param event
   */
  private handleDragStart;
  /**
   * É disparado consecutivamente ENQUANTO um item agarrado é colocado sobre o palco de colagem
   * @param event
   */
  private handleDragOver;
  /**
   * Disparado quando um item agarrado é solto sobre o palco de colagem
   * @param event
   */
  private handleDrop;
  /**
   * Disparado quando um item arrastável é posicionado sobre o palco de colagem
   * @param event
   */
  private handleDragEnter;
  /**
   * Disparado quando um item arrastável é movido para fora do palco de colagem
   * @param event
   */
  private handleDragLeave;
  private setError;
  private validateFetchedData;
  /**
   * Inicia o desafio
   */
  private init;
  componentWillLoad(): void;
  /**
   * Atributos do elemento de colagem
   */
  private dropAttr;
  private reset;
  private handleStartGame;
  render(): any;
}
export {};
