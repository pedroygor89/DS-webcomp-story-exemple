import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Text Area',
  component: 'yduqs-textarea',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    cta: {
      name: 'Insira a chamada',
      control: 'text'
    },
    placeholder: {
      name: 'Insira o texto de apoio',
      control: 'text'
    },
    txt_button: {
      name: 'Insira o texto do botão',
      control: {
        type: "select",
        options: ["Enviar", "Responder", "Desistir"]
      }
    }
  }
};
const Template = ({ cta, txt_button, placeholder }) => html `
  <yduqs-textarea cta="${cta}" txt_button="${txt_button}" placeholder="${placeholder}"></yduqs-textarea>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  cta: 'Lorem ipsum',
  txt_button: 'Enviar',
  placeholder: 'Digite sua resposta'
};
