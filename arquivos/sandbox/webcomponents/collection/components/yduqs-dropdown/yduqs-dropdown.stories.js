import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Dropdown',
  component: 'yduqs-dropdown',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    texto: {
      name: "Escolha uma opção",
      control: "text"
    },
    colsize: {
      name: "Escolha o tamanho do dropdown",
      control: "text"
    }
  },
};
const Template = ({ texto, colsize }) => html `
    <yduqs-dropdown colsize="${colsize}">
        <option value="Valor2">Valor2</option> 
        <option value="Valor3">Valor3</option> 
        <option value="Valor4">Valor4</option> 
        <option value="${texto}">${texto}</option> 
    </yduqs-dropdown>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  texto: 'Valor1',
  colsize: '8'
};
