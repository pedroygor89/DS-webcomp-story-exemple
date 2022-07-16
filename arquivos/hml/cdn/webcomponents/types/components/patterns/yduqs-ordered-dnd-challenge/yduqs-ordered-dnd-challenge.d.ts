import { EventEmitter } from '../../../stencil-public-runtime';
declare type iTutorialItem = 'tips' | 'chances' | 'count' | 'time';
declare type iStep = 'loading' | 'info' | 'tutorial' | 'game' | 'feedback';
export declare class YduqsOrderedDndChallenge {
  /**
   * Identificador do Mapa
   */
  _id: string;
  /**
   * Endereço do arquivo de configuração
   */
  config: string;
  error: string[];
  chances: number;
  tips: number;
  time: number | null;
  info: string;
  usedChances: number;
  hideCount: boolean;
  usedTips: number;
  showTip: boolean;
  showFeedback: null | 'positive' | 'negative';
  positiveFeedback: string;
  negativeFeedback: string;
  failFeedback: string;
  dropImage: string;
  data: any[];
  selecteds: any[];
  sequence: string[];
  step: iStep;
  tutorialItem?: iTutorialItem;
  result: boolean;
  showInfo: boolean;
  inCountdownDanger: boolean;
  ordered: boolean;
  /**
   * Evento disparado no Final do Desafio
   */
  challengeEnd: EventEmitter<any>;
  handleCountdownFinished(event: any): void;
  handleCountdownDanger(event: any): void;
  handleGameOver(): void;
  private countdownElem;
  private hostElem;
  /**
   * Verifica se o item manipulado pertence a sequencia correta
   * @param selected Opção selecionada
   * @returns boolean
   */
  private verify;
  /**
   * Disparado quando um item é arrastado
   * @param event
   */
  private handleDragStart;
  /**
   * Disparado quando um item agarrado antes é solto
   * @param event
   */
  private handleDragEnd;
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
  /**
   * Manipula a visualização das Dicas
   */
  private handleTip;
  /**
   * Reinicializa as variáveis
   */
  private reset;
  gameover(): Promise<void>;
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
  private handleNextTutorial;
  handleCloseFeedback(): void;
  /**
   * TODO
   * Criar um componente de TIP
   */
  private renderTip;
  private getResultThumb;
  private startTutorial;
  render(): any;
}
export {};
