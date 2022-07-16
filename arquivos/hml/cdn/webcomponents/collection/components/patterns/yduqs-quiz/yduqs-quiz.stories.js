import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Quiz',
  component: 'yduqs-quiz',
  parameters: {
    markdown: readme,
    notes: readme
  },
  argTypes: {
    dataid: {
      control: {
        type: 'text',
      },
      name: 'Identificador (id)',
    },
    overline: {
      control: {
        type: 'text',
      },
      name: 'Overline',
    },
    question: {
      control: {
        type: 'text',
      },
      name: 'Pergunta',
    },
    indexType: {
      type: 'select',
      options: ["letter", "number"],
      name: 'Tipo de index',
    },
  },
};
const Template = ({ dataid, overline, question, answers, indexType }) => html `
  <yduqs-quiz dataid="${dataid}" overline="${overline}" question="${question}" answers="${answers}" index-type="${indexType}"></yduqs-quiz>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  dataid: '001',
  overline: 'Sobre texto',
  question: 'Se "Tempo é dinheiro" e tenho tempo de sobra, então:',
  answers: `[
    { "id": 0, "label": "Sou muito rico.", "value": 0},
    { "id": 1, "label": "Estou desempregado.", "value": 1},
    { "id": 2, "label": "Sou um engraçadinho", "value": 2}
  ]`,
  indexType: 'letter'
};
