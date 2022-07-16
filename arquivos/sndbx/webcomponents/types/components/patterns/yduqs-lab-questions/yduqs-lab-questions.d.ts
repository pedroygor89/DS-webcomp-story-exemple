import { EventEmitter } from '../../../stencil-public-runtime';
declare type iStep = 'loading' | 'info' | 'game';
export declare class YduqsLabQuestions {
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
  items: any[];
  /**
   * Evento disparado no Final do Desafio
   */
  challengeEnd: EventEmitter<any>;
  private hostElem;
  private setError;
  private validateFetchedData;
  /**
   * Inicia o desafio
   */
  private init;
  componentWillLoad(): void;
  render(): any;
}
export {};
