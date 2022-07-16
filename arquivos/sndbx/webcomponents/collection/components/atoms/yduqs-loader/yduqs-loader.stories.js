import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Loader',
  component: 'yduqs-loader',
  parameters: {
    markdown: readme,
    notes: readme,
  }
};
const Template = ({}) => html `
  <yduqs-loader></yduqs-loader>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {};
