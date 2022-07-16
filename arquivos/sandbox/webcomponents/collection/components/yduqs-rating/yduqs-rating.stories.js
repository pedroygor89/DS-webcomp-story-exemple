import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Rating',
  component: 'yduqs-rating',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    cta: {
      name: 'Insira o texto',
      control: 'text'
    }
  },
};
const Template = ({ cta }) => html `
  <yduqs-rating cta="${cta}"></yduqs-rating>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  cta: 'Lorem ipsum'
};
