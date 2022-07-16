export declare class YduqsInteractiveMedia {
  /**
   * Título do Cabeçalho
   */
  headertitle: string;
  /**
   * Texto descritivo do cabeçalho
   */
  headertext: string;
  /**
   * Icone do cabeçalho
   */
  headericon: string;
  /**
   * Url com o endereço do arquivo de configuração
   */
  config: string;
  private medias;
  private current;
  private quizSelectedAnswer;
  init(): void;
  reset(): void;
  handleQuizSelect({ detail }: {
    detail: any;
  }): void;
  private setCurrent;
  private handleQuizSubmit;
  componentWillLoad(): void;
  private renderButton;
  private getVideo;
  private getQuiz;
  private getInfo;
  private getScore;
  private getComponent;
  render(): any;
}
