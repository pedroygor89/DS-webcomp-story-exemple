import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Text Area',
  component: 'yduqs-atividade-discursiva',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    placeholder: {
      name: 'Insira o texto de apoio',
      control: 'text'
    },
    outline: {
      name: 'Estilo com Outline',
      control: {
        type: "boolean",
      }
    },
    background: {
      name: 'Estilo com Background',
      control: {
        type: "boolean",
      }
    },
    idTxt: {
      name: 'Id do elemento',
      control: 'text'
    },
    colunasmd: {
      name: 'Colunas ocupadas MD ',
      control: 'text'
    },
    colunaslg: {
      name: 'Colunas ocupadas LG ',
      control: 'text'
    }
  }
};
const Template = ({ outline, background, placeholder, idTxt, colunasmd, colunaslg }) => html `
        <section class="w-100">
            <div class="container">
                <yduqs-textarea outlinetxtarea="${outline}" ligthtxtarea="${background}"  placeholder="${placeholder}" idtxt="${idTxt}" withBtn="false" colunasmd="${colunasmd}" colunaslg="${colunaslg}"></yduqs-textarea>
            </div>
        </section>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  placeholder: 'Digite sua resposta',
  outline: true,
  background: false,
  idTxt: 'txt1',
  colunasmd: '12',
  colunaslg: '12'
};
