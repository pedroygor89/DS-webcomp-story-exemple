import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsLabPhase {
  /**
   * Identificador da Fase
   */
  phase: string | number;
  /**
   * Identificador da Próxima Fase. É utilizado no terminos da Atividade de Desafio
   */
  next: string | number;
  show: 'cover' | 'trainning' | 'challenge' | 'map';
  confirmation: any;
  /**
   * Evento disparado no final dos Desafios
   */
  goToNextPage: EventEmitter<string>;
  /**
   * Evento disparado sempre que houver navegação no meio de um desafio
   */
  gameOverEvent: EventEmitter;
  handleNav(event: CustomEvent): void;
  handleNext(event: CustomEvent): void;
  handleTrainning(): void;
  handleLabActionsValidate(event: CustomEvent): void;
  handleMapActions(event: CustomEvent): void;
  private modalTheory;
  private modalConfirm;
  private handleLabActions;
  handleNavConfirmation(): void;
  private showTheory;
  private goToHome;
  private headerItems;
  private headerTitle;
  render(): any;
}
