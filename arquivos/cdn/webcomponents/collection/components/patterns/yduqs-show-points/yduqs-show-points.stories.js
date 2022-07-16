import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Laboratório/Mostrar Pontos',
  component: 'yduqs-show-points',
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
    <yduqs-show-points id="${id}" config="${config}"></yduqs-show-points>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  id: 'mostrar-pontos',
  config: 'http://stensineme.blob.core.windows.net/hmlgrepoh/hml_repo/web-components/assets/zoom/trainning.json'
};
