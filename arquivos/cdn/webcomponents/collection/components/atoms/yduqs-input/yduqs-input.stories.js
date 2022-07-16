import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Input',
  component: 'yduqs-input',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    placeh: {
      name: "Escolha o placeholder",
      control: "text"
    }
  },
};
const Template = ({ placeh }) => html `
    <yduqs-input placeh="${placeh}" icon="" titulo=''> </yduqs-input>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  placeh: 'Digite seu usuário'
};
