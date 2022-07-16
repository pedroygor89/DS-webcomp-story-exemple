import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Atividade Discursiva',
  component: 'yduqs-textarea',
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
    idBtn: {
      name: 'Id do Botão',
      control: 'text'
    },
    idTxt: {
      name: 'Id do elemento',
      control: 'text'
    },
    bgfeedbackdark: {
      name: 'Estilo Feedback com Background',
      control: {
        type: "boolean",
      }
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
const Template = ({ outline, background, placeholder, idTxt, idBtn, bgfeedbackdark, colunasmd, colunaslg }) => html `
        <section class="w-100">
            <div class="container">

                <yduqs-atividade-discursiva>
                    <yduqs-textarea outlinetxtarea="${outline}" ligthtxtarea="${background}"  placeholder="${placeholder}" idbtn="${idBtn}" idtxt="${idTxt}" bgfeedbackdark="${bgfeedbackdark}"  withBtn="true" colunasmd="${colunasmd}" colunaslg="${colunaslg}"></yduqs-textarea>
                        <div>
                            <!-- CONTEUDO FEEDBACK AQUI -->
                        </div>    
                    </yduqs-textarea>
                </yduqs-atividade-discursiva>

            </div>
        </section>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  placeholder: 'Digite sua resposta',
  outline: true,
  background: false,
  idBtn: 'btn1',
  idTxt: 'txt1',
  colunasmd: '12',
  colunaslg: '12',
  bgfeedbackdark: true
};
