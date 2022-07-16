export declare class YduqsQuestionModel {
  question_title: string;
  options: [string, string, string, string, string];
  correct_anwser: number;
  positive_feedback: string;
  negative_feedback_topic: string;
  negative_feedback_link: string;
}
export declare class YduqsQuestionsModel {
  title: "Verificando o Aprendizado";
  questions: Array<YduqsQuestionModel>;
}
