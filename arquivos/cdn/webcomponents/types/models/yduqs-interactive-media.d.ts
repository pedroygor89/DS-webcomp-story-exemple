export declare type iMediaObjectGoTo = {
  text: string;
  to: number;
};
export declare type iMediaInfo = {
  id: number;
  type: 'info';
  title: string;
  text: string;
  goto: iMediaObjectGoTo[];
};
export declare type iMediaQuizModule = {
  name: string;
  anchor: string;
};
export declare type iMediaQuizAnswer = {
  id: number;
  text: string;
  to: number;
  points: number;
};
export declare type iMediaQuiz = {
  id: number;
  type: 'quiz';
  text: string;
  module: iMediaQuizModule;
  answers: iMediaQuizAnswer[];
  answer?: iMediaQuizAnswer;
  totalPoints?: number;
};
export declare type iMediaScore = {
  id: number;
  type: 'score';
  title?: string;
  subtitle?: string;
  goto?: iMediaObjectGoTo[];
};
export declare type iMediaVideo = {
  id: number;
  covered?: boolean;
  type: 'video';
  url: string;
  goto: number;
};
export declare type iMedia = iMediaInfo | iMediaQuiz | iMediaScore | iMediaVideo;
declare type iMediaButtonIcon = {
  left?: string;
  right?: string;
};
declare type iMediaButtonAttr = {
  onClick: (event?: any) => any;
  class?: string;
  disabled?: boolean;
};
export declare type iMediaButton = {
  value: string;
  icon?: iMediaButtonIcon;
  attr: iMediaButtonAttr;
};
export {};
