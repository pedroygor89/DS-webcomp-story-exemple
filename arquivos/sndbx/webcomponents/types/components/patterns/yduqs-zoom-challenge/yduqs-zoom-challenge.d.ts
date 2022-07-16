import { EventEmitter } from '../../../stencil-public-runtime';
declare type iStep = 'loading' | 'info' | 'game';
export declare class YduqsZoomChallenge {
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
  chances: number;
  info: string;
  positiveBtnText: string;
  negativeBtnText: string;
  sequence: boolean[];
  items: any[];
  selected: any;
  showInfo: boolean;
  feedback: any;
  usedChances: number;
  /**
   * Evento disparado no Final do Desafio
   */
  challengeEnd: EventEmitter<any>;
  handleGameOver(): void;
  private hostElem;
  private stageElem;
  private displayElem;
  private displayImg;
  private setError;
  private validateFetchedData;
  /**
   * Inicia o desafio
   */
  private init;
  /**
   * Finaliza a Atividade
   */
  gameover(): Promise<void>;
  componentWillLoad(): void;
  private getPos;
  /**
   * Muda para a proxima imagem ou finaliza a Atividade
   * @param approved Se resposta é positiva ou negativa
   */
  private next;
  handleCloseFeedback(): void;
  /**
  * Reinicializa as variáveis
  */
  private reset;
  handleCursorLeave(): void;
  private stageAttr;
  private handleStartGame;
  render(): any;
}
export {};
