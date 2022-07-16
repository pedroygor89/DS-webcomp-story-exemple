import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Questions',
  component: 'yduqs-questions',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    english: {
      control: {
        type: "boolean",
      },
      name: "Tema em inglês?",
    }
  }
};
const question = ({ question_id, english }) => html `
    <yduqs-questions question_id="${question_id}" english="${english}"></yduqs-questions>
    <script>document.addEventListener("DOMContentLoaded", function () { qStorybook(); });</script>
`;
export const questionDefault = question.bind({});
questionDefault.storyName = 'Verificando o Aprendizado';
questionDefault.args = {
  question_id: '1',
  english: false
};
const exercise = ({ exercise_id, english }) => html `
    <yduqs-questions exercise_id="${exercise_id}" english="${english}"></yduqs-questions>
    <script>document.addEventListener("DOMContentLoaded", function () {qStorybook(); });</script>
`;
export const exerciseDefault = exercise.bind({});
exerciseDefault.storyName = 'Atividade livre';
exerciseDefault.args = {
  exercise_id: '1',
  english: false
};
