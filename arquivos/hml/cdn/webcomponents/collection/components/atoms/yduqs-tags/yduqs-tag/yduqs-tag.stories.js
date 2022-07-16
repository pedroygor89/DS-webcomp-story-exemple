import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Tags',
  component: 'yduqs-tag',
  parameters: {
    markdown: readme,
    notes: { readme },
    layout: 'centered'
  },
  argTypes: {
    colorType: {
      control: {
        type: "select",
        options: ["blue", "yellow", "red", "green"]
      },
      name: "Cor da tag",
    },
    content: {
      control: "text",
      name: "Conteúdo da tag"
    }
  }
};
const Template = ({ colorType, content }) => html `
  <yduqs-tags>
    <yduqs-tag color="${colorType}">${content} </yduqs-tag>
    <yduqs-tag color="green">Vitamina C </yduqs-tag>
    <yduqs-tag color="blue">Vitamina D </yduqs-tag>
    <yduqs-tag color="red">Vitamina K</yduqs-tag>
  </yduqs-tags>
`;
export const Basic = Template.bind({});
Basic.storyName = 'Default';
Basic.args = {
  colorType: 'yellow',
  content: 'Vitamina A'
};
