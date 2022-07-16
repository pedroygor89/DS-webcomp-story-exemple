import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsCountdown {
  /**
   * Identificador do Componente
   */
  _id: string;
  /**
   * Quantidade de tempo para a contagem em segundos.
   */
  time: number;
  /**
   * Marcador da contagem de Alerta, em porcentagem;
   */
  warningMarker: number;
  dangerMarker: number;
  number: number;
  interval: any;
  paused: boolean;
  /**
   * Evento disparado quando o contador termina
   */
  countdownFinished: EventEmitter<string>;
  /**
   * Evento disparado quando a contagem entra no estado de Perigo
   */
  countdownDanger: EventEmitter<string>;
  /**
   * Evento disparado quando a contagem entra no estado de Alerta
   */
  countdownWarning: EventEmitter<string>;
  /**
   * Inicia a contagem
   * @returns Promise.resolve
   */
  start(): Promise<boolean>;
  /**
   * Para o contador resetando a contagem
   * @returns Promise.resolve
   */
  stop(): Promise<void>;
  /**
   * Pausa o contador, sem resetar a contagem
   * @returns Promise.resolve
   */
  pause(): Promise<void>;
  /**
   * Reinicia a contagem
   * @returns Promise.resolve
   */
  restart(): Promise<void>;
  private inWarning;
  private inDanger;
  componentWillLoad(): void;
  render(): any;
}
