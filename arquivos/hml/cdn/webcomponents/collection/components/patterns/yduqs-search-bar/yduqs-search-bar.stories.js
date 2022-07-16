import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Barra de busca',
  component: 'yduqs-search-bar',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {}
};
const Template = ({}) => html `
  <div style="margin-left: 50px">
    <yduqs-search-bar></yduqs-search-bar>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {};
