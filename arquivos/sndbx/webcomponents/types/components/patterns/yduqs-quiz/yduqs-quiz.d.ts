import { EventEmitter } from '../../../stencil-public-runtime';
import { iQuizAnswer } from '../../../models/yduqs-quiz';
export declare class YduqsQuiz {
  /**
   * Identificador do Quiz
   */
  dataid: number | string;
  /**
   * Texto que aparece sobre a Pergunta
   */
  overline: string;
  /**
   * Texto da Pergunta
   */
  question: string;
  /**
   * Descrição da Pergunta. Esse campo suporta HTML
   */
  description: string;
  /**
   * Lista opções disponíveis para escolha. Esse campo aceita uma string JSON ou um Objeto JSON
   * { id: number; label: string; value: any; }
   */
  answers: string | iQuizAnswer[];
  /**
   * Tipo de index das opções: Textual (a, b, c, etc) ou numérico (1, 2, 3, etc)
   */
  indexType: 'number' | 'letter';
  selected: iQuizAnswer['id'];
  /**
   * Evento disparado sempre que uma opção é selecionada
   */
  quizSelect: EventEmitter<iQuizAnswer>;
  private letters;
  private getIndex;
  private handleSelectItem;
  render(): any;
}
