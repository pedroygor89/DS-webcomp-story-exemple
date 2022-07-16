import { YduqsQuestionsModel } from './yduqs-questions.model';
export declare class YduqsQuestion {
  el: HTMLElement;
  question_id: string;
  settings: YduqsQuestionsModel;
  initialize(config: YduqsQuestionsModel): Promise<void>;
  private renderQuestions;
  render(): any;
}
