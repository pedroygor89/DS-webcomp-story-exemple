import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Helper',
  component: 'yduqs-helper',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    english: {
      control: {
        type: 'boolean',
      },
      name: 'Tema em inglês?',
    },
  },
};
const helper = ({ question_id, english }) => html `
  <yduqs-helper question_id="${question_id}" english="${english}"></yduqs-helper>
  <script>
    document.addEventListener('DOMContentLoaded', function () {
      qStorybook();
    });
  </script>
`;
export const helperDefault = helper.bind({});
helperDefault.storyName = 'Helper';
helperDefault.args = {
  question_id: '1',
  english: false,
};
