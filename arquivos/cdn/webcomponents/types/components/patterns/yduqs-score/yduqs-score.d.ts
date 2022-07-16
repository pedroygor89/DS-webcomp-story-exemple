import { iScoreItem } from '../../../models/yduqs-score';
export declare class YduqsScore {
  /**
   * Identificador do Quiz
   */
  dataid: number | string;
  /**
   * Título do componente
   */
  datatitle: string;
  /**
   * Texto de subtítulo
   */
  datasubtitle: string;
  /**
   * Lista de itens
   */
  items: iScoreItem[] | string;
  total: number;
  score: number;
  componentWillLoad(): void;
  render(): any;
}
