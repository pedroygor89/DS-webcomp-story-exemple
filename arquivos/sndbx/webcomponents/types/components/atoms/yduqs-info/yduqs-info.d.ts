import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsInfo {
  /**
   * Mostra/esconde o componente
   */
  open: boolean;
  /**
   * Título da mensagem
   */
  _title: string;
  /**
   * Subtítulo da mensagem
   */
  subtitle?: string;
  /**
   * Texto da mensagem
   */
  message: string;
  /**
   * Identificador do ícone ou base64 do SVG
   */
  icon: string;
  /**
   * Informa se o ícone é Material Design ou Base64
   */
  usematerial?: boolean;
  /**
   * Tempo em milessegundos que a mensagem permanece visível
   */
  delay?: number;
  /**
   * Evento disparado no onClick do icone de fechar ou quando o tempo visível termina
   */
  infoClosed: EventEmitter<boolean>;
  handleClose(): void;
  handleClick(): void;
  private getWidth;
  render(): any;
}
