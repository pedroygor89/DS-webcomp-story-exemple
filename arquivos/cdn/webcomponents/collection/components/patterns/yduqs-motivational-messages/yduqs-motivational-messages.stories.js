import readme from './readme.md';
import notes from './notes.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Mensagens Motivacionais',
  component: 'yduqs-motivational-messages',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Desenvolvimento': notes },
  },
  argTypes: {},
};
const Template = ({}) => html `
  <div style="margin-left: 50px">
    <yduqs-motivational-messages></yduqs-motivational-messages>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {};
