import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Laboratório/Mapa Virtual',
  component: 'yduqs-virtual-map',
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
    <yduqs-virtual-map id="${id}" config="${config}"></yduqs-virtual-map>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  id: 'mapa-virtual',
  config: 'http://stensineme.blob.core.windows.net/hmlgrepoh/hml_repo/web-components/assets/virtual-map/config.json'
};
