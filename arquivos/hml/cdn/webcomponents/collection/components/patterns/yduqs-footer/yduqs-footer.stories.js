import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Footer',
  component: 'yduqs-footer',
  parameters: {
    markdown: readme
    //notes: readme,
  },
  argTypes: {
    btnImprimir: {
      control: {
        type: "boolean",
      },
      name: "Botão para imprimir"
    },
    nameBtnImprimir: {
      control: {
        type: "text",
      },
      name: "Texto do botão para imprimir"
    },
    hrefbtnprint: {
      control: {
        control: 'text'
      },
      name: 'Função chamada no botão',
    }
  }
};
const Template = ({ btnImprimir, hrefbtnprint, nameBtnImprimir }) => html `
<!-- inicio footer-->
    <yduqs-footer btnimprimir="${btnImprimir}" hrefbtnprint="${hrefbtnprint}" namebtnimprimir="${nameBtnImprimir}">
        
        <div class="c-footer-list-items" slot="itens-referencia">
            <p>
            Lorem Ipsum is simply <strong>dummy text of the printing and</strong> typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>

            <p>
            Lorem Ipsum is simply <strong>dummy text of the printing and</strong> typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>

            <p>
            Lorem Ipsum is simply <strong>dummy text of the printing and</strong> typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>

            <p>
            Lorem Ipsum is simply <strong>dummy text of the printing and</strong> typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
        </div>

        <div class="c-footer-list-items" slot="itens-exploremais">
            <p>
                Lorem Ipsum is simply <strong>dummy text of the printing and</strong> typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>

            <p>
                Lorem Ipsum is simply <strong>dummy text of the printing and</strong> typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>

            <p>
                Lorem Ipsum is simply <strong>dummy text of the printing and</strong> typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>

            <p class="mb-4"><strong>Conheça os sites:</strong></p>
            
            <ul class="px-3 mb-4">
                <li>
                    AB2L - Associação Brasileira de Lawtechs & legalTechs
                </li>
                <li>
                    Portal Anjos do Brasil
                </li>
            </ul>

            <p class="mb-4"><strong>Leia os artigos:</strong></p>

            <ul class="px-3 mb-4">
                <li>
                    <strong>Lorem Ipsum is</strong> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </li>

                <li>
                    <strong>Lorem Ipsum is</strong> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </li>

                <li>
                    <strong>Lorem Ipsum is</strong> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </li>

                </ul>
        </div>
    </yduqs-footer>
<!-- footer -->
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  btnImprimir: false,
  nameBtnImprimir: 'Baixar conteúdo',
  hrefbtnprint: 'CriaPDF'
};
