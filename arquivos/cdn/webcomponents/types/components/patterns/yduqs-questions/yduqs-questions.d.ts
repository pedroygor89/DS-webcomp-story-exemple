import { YduqsQuestionsModel } from './yduqs-questions.model';
export declare class YduqsQuestion {
  el: HTMLElement;
  settings: YduqsQuestionsModel;
  english: boolean;
  spanish: boolean;
  math: boolean;
  math_advanced: boolean;
  colunalg: string;
  initialize(config: YduqsQuestionsModel): Promise<void>;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private renderQuestions;
  render(): any;
}
