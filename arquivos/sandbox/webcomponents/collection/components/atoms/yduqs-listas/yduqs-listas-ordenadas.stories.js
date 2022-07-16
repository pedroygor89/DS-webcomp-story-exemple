import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Listas-Ordenadas',
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
                

                <yduqs-listas tamanho="${tamanho_fonte}" tipo="ol">

                    <ol class="prime-list-ol">
                        
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</li>
                        
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                            
                            <ol class="sub-list-ol">
                                
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</li>
                                
                                <li>Item</li>
                            
                            </ol>
                        
                        </li>
                        
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                            
                            <ol class="third-list-ol">
                                
                                <li>Item</li>
                                
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                
                                
                                </li>
                            
                            </ol>
                        
                        </li>
                        
                        <li>Item </li>
                    
                    </ol>
                    
                    


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
