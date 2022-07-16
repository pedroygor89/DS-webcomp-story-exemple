import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Pontuação',
  component: 'yduqs-score',
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
    datatitle: {
      control: {
        type: 'text',
      },
      name: 'Título',
    },
    datasubtitle: {
      control: {
        type: 'text',
      },
      name: 'Subtítulo',
    }
  },
};
const Template = ({ dataid, datatitle, datasubtitle, items }) => html `
  <yduqs-score dataid="${dataid}" datatitle="${datatitle}" datasubtitle="${datasubtitle}" items="${items}"></yduqs-score>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  dataid: '001',
  datatitle: 'Pontuação final: {score}/{total}',
  datasubtitle: 'Texto do subtitulo. Esse texto é opcional.',
  items: `[
    { "score": 1, "total": 1, "label": "Primeiro módulo", "anchor": { "label": "Texto da âncora", "url": "#ancora" }},
    { "score": 1, "total": 2, "label": "Segundo módulo", "anchor": { "label": "Texto da âncora", "url": "#ancora" }},
    { "score": 0, "total": 1, "label": "Terceiro módulo", "anchor": { "label": "Texto da âncora", "url": "#ancora" }}
  ]`
};
