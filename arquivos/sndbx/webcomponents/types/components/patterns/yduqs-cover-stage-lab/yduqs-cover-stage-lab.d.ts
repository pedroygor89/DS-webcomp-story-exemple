import { EventEmitter } from '../../../stencil-public-runtime';
export declare class YduqsCoverStageLab {
  /**
   * Imagem de Fundo da Capa
   */
  background: string;
  /**
   * Numero da Fase
   */
  phaseNumber: number;
  /**
   * Que aparece Sobre o Titulo. Se omitido, será mostrado o texto 'Fase %phaseNumber%'
   */
  overtitle: string;
  /**
   * Texto de Título da Capa
   */
  _title: string;
  /**
   * Texto de Descríção
   */
  description: string;
  /**
   * Lista de ações (botões) visíveis na Capa
   */
  actions: any;
  parsedActions: any[];
  /**
   * Evento disparado no click dos botões de Ação
   */
  btnClick: EventEmitter<any>;
  private hostElem;
  componentWillLoad(): void;
  handleBtnClick(action: string): void;
  render(): any;
}
