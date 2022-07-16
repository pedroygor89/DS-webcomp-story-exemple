import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Laboratório/Desafio Ordenado DragNDrop',
  component: 'yduqs-ordered-dnd-challenge',
  parameters: {
    markdown: readme,
    notes: readme
  },
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
      name: 'Identificador (id)',
    },
    config: {
      control: {
        type: 'text',
      },
      name: 'Configuração',
    },
  },
};
const Template = ({ id, config }) => html `
  <div style="height: calc(100vh - 2em); overflow: hidden;">
    <yduqs-ordered-dnd-challenge id="${id}" config="${config}"></yduqs-ordered-dnd-challenge>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  id: 'desafio-ordenado',
  config: 'http://stensineme.blob.core.windows.net/hmlgrepoh/hml_repo/web-components/assets/completar-lacunas/challenge.json'
};
