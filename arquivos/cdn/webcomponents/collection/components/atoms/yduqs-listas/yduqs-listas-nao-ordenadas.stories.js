import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Listas-Nao-Ordenadas',
  component: 'yduqs-listas',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    tamanho_fonte: {
      name: 'Insira o tamanho da fonte',
      control: 'text'
    }
  },
};
const Template = ({ tamanho_fonte }) => html `
    <section class="w-100">
        <div class="container">
            <div class="row col-12 col-md-10 col-lg-10">
               
                <yduqs-listas tamanho="${tamanho_fonte}" tipo="ul">
                    <ul class="prime-list-ul">
                        <li>
                            <span>Item 1</span>
                        </li>

                        <li>
                            <span>Item 2</span>

                            <ul class="sub-list-ul">

                                <li>
                                    <span>Item</span>
                                </li>

                                <li>

                                    <span>Item</span>

                                    <ul class="third-list-ul">

                                        <li>
                                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the.</span>
                                        </li>

                                        <li>
                                            <span>Item</span>
                                        </li>

                                        <li>
                                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                                since the.</span>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <span>Item 3</span>
                        </li>

                    </ul>

                </yduqs-listas>
            </div>
        </div>
    </section>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  tamanho_fonte: 'small'
};
