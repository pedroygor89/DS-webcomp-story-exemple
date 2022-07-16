import { html } from 'lit-html';
export default {
  title: 'Patterns/Ligando os pontos',
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
const BasicTemplate = ({ outline, background, placeholder, idTxt, idBtn, bgfeedbackdark, colunasmd, colunaslg }) => html `

    <section class="w-100">
        <div class="container">
            <yduqs-title  topic_title="Ligando os pontos"></yduqs-title>
            
            <div class='row align-items-center justify-content-center'>
                <div class='col-12 col-md-10 col-lg-8'>

                    <div class="box-legenda">
                        
                        <p class='c-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>

                        <p class='c-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </p>

                    </div>

                    <div class="box-legenda">
                        <h3 class="c-heading"><strong>Questão 3</strong></h3>
                        <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <yduqs-atividade-discursiva>
                            <yduqs-textarea outlinetxtarea="${outline}" ligthtxtarea="${background}"  placeholder="${placeholder}" idbtn="${idBtn}" idtxt="${idTxt}" bgfeedbackdark="${bgfeedbackdark}"  withBtn="true" colunasmd="${colunasmd}" colunaslg="${colunaslg}"></yduqs-textarea>
                                
                                <div>
                                    <!-- FEEDBACK AQUI -- >
                                </div>    

                            </yduqs-textarea>
                        </yduqs-atividade-discursiva>
                    </div>

                </div>
            </div>    
        </div>
    </section>    

`;
export const Basic = BasicTemplate.bind({});
Basic.storyName = 'Texto';
Basic.args = {
  placeholder: 'Digite sua resposta',
  outline: true,
  background: false,
  idBtn: 'btn8',
  idTxt: 'txt8',
  colunasmd: '12',
  colunaslg: '12',
  bgfeedbackdark: true
};
const ImageTemplate = ({ outline, background, placeholder, idTxt, idBtn, bgfeedbackdark, colunasmd, colunaslg }) => html `

    <section class="w-100">
        <div class="container">
            <yduqs-title  topic_title="Ligando os pontos"></yduqs-title>
            
            <div class='row align-items-center justify-content-center'>
                <div class='col-12 col-md-10 col-lg-8'>

                    <div class="box-legenda">
                        
                        <yduqs-image
                            src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                            alt="Fuji-san" width="100%" height="415">
                        </yduqs-image>

            

                        <p class="text-legenda">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt hendrerit nulla et gravida. Integer fermentum magna enim, ac euismod nibh auctor quis. Maecenas auctor vehicula suscipit. Nunc pulvinar nec quam sit amet pretium. 
                        </p>

                        <hr class="linha-legenda-feedback">

                    </div>

                    <div class="box-legenda">
                        <h3 class="c-heading"><strong>Questão 3</strong></h3>
                        <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <yduqs-atividade-discursiva>
                            <yduqs-textarea outlinetxtarea="${outline}" ligthtxtarea="${background}"  placeholder="${placeholder}" idbtn="${idBtn}" idtxt="${idTxt}" bgfeedbackdark="${bgfeedbackdark}"  withBtn="true" colunasmd="${colunasmd}" colunaslg="${colunaslg}"></yduqs-textarea>
                                
                                <div>
                                    <!-- FEEDBACK AQUI -- >
                                </div>    

                            </yduqs-textarea>
                        </yduqs-atividade-discursiva>
                    </div>

                </div>
            </div>    
        </div>
    </section>    

`;
export const Image = ImageTemplate.bind({});
Image.storyName = 'Imagem';
Image.args = {
  placeholder: 'Digite sua resposta',
  outline: true,
  background: false,
  idBtn: 'btn10',
  idTxt: 'txt10',
  colunasmd: '12',
  colunaslg: '12',
  bgfeedbackdark: true
};
const ImageTextTemplate = ({ outline, background, placeholder, idTxt, idBtn, bgfeedbackdark, colunasmd, colunaslg }) => html `

    <section class="w-100">
        <div class="container">
            <yduqs-title  topic_title="Ligando os pontos"></yduqs-title>
            
            <div class='row align-items-center justify-content-center'>
                <div class='col-12 col-md-10 col-lg-8'>

                    <div class="box-legenda">
                        
                        <div class='row'>                   

                            <div class='col-12 col-md-12 col-lg-6 mt-3' aria-hidden='true'>
                                <yduqs-image
                                    src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                    alt="Fuji-san" width="100%" height="auto">
                                </yduqs-image>
                                
                                <p class='text-legenda'>Lorem ipsum dolor sit amet</p>
                                
                                <hr class="linha-legenda-feedback">
                            </div>

                            <div class='col-12 col-md-12 col-lg-6'>
                    
                                <p class='c-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>

                                <p class='c-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div class="box-legenda">
                        <h3 class="c-heading"><strong>Questão 3</strong></h3>
                        <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <yduqs-atividade-discursiva>
                            <yduqs-textarea outlinetxtarea="${outline}" ligthtxtarea="${background}"  placeholder="${placeholder}" idbtn="${idBtn}" idtxt="${idTxt}" bgfeedbackdark="${bgfeedbackdark}"  withBtn="true" colunasmd="${colunasmd}" colunaslg="${colunaslg}"></yduqs-textarea>
                                
                                <div>
                                    <!-- FEEDBACK AQUI -- >
                                </div>    

                            </yduqs-textarea>
                        </yduqs-atividade-discursiva>
                    </div>

                </div>
            </div>    
        </div>
    </section>    

`;
export const ImageText = ImageTextTemplate.bind({});
ImageText.storyName = 'Imagem e Texto';
ImageText.args = {
  placeholder: 'Digite sua resposta',
  outline: true,
  background: false,
  idBtn: 'btn7',
  idTxt: 'txt7',
  colunasmd: '12',
  colunaslg: '12',
  bgfeedbackdark: true
};
