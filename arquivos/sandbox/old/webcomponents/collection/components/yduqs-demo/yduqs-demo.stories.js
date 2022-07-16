import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Demo',
  component: 'yduqs-demo',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    cor: {
      name: 'Escolha uma cor',
      control: {
        type: "select",
        options: ["blue", "red"]
      },
    },
    texto: {
      name: 'Escolha um texto',
      control: 'text',
    }
  },
};
const Template = ({ cor, texto }) => html `
  <yduqs-demo cor="${cor}" texto="${texto}"></yduqs-demo>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  cor: 'blue',
  texto: 'Lorem ipsum'
};
