import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Modal',
  component: 'yduqs-modal',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    imgSrc: {
      type: 'string',
      name: 'Caminho da imagem',
    },
    widthImg: {
      type: 'string',
      name: "Largura da imagem",
    },
    heightImg: {
      type: 'string',
      name: "Altura da imagem",
    },
    title: {
      type: 'string',
      name: 'Título do modal',
    },
    paragraph: {
      type: 'string',
      name: 'Texto',
    },
  }
};
const Template = ({ title, paragraph, imgSrc, widthImg, heightImg }) => html `
  <button id="open-modal" class="c-button">Open Modal</button>
  <p style="font-size:11px;color:red">Componente disponível somente na aba Cavas</p>

	<yduqs-modal id="modal" >
    <div class="row">
      <div class="col">
        <img 
          src="${imgSrc}" 
          width="${widthImg}"
          height="${heightImg}"
          alt="Imagem de exemplo" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span class="c-modal__title">${title}</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="c-modal__paragraph">${paragraph}</p>
      </div>
    </div>
  </yduqs-modal>


  
  <script>
    var btnModal = document.getElementById('open-modal');
    var modal = document.getElementById('modal');

    btnModal.addEventListener('click', function(){
      modal.isopen = true;
    });
  </script>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  imgSrc: 'https://images.unsplash.com/photo-1526374073174-7661a8028eb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  widthImg: '64px',
  heightImg: '64px',
  title: 'Título do modal',
  paragraph: 'Desde os primórdios, os humanos observam o comportamento dos animais, fosse com o intuito de se proteger de ataques fosse para facilitar a obtenção de comida. Essas observações ficaram registradas nas paredes de cavernas, em forma de pinturas rupestres, e são parte dos poucos registros que temos do comportamento, tanto de animais já extintos, quanto da vida dos humanos da pré-história. A observação do comportamento dos animais possibilitou uma vasta gama de vantagens aos humanos, desde prever quando determinada espécie estaria disponível para a caça até a domesticação e utilização desses animais como fonte fixa de alimento, meio de transporte e trabalho. Neste tema, veremos como se deu a origem do comportamento dos animais, como eles são influenciados pelo meio ambiente e pela genética. Aprenderemos como identificar e descrever comportamentos e vamos saber como os animais desenvolveram a capacidade de viver em sociedade e como este tipo de comportamento influencia nos sistemas de acasalamento, na busca por alimento e na proteção.',
};
const ShortDisplayTemplate = ({ title, paragraph }) => html `
  <button id="open-modal" class="c-button">Open Small Modal</button>
  <p style="font-size:11px;color:red">Componente disponível somente na aba Cavas</p>

	<yduqs-modal id="modal">
    <div class="row">
      <div class="col">
        <span class="c-modal__title">${title}</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="c-modal__paragraph" style="max-width:295px">${paragraph}</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button type="button" class="c-button c-button--ghost">Botão</button>
      </div>
    </div>
  </yduqs-modal>

  <script>
    var btnModal = document.getElementById('open-modal');
    var modal = document.getElementById('modal');

    btnModal.addEventListener('click', function(){
      modal.isopen = true;
    });
  </script>
`;
export const ShortDisplay = ShortDisplayTemplate.bind({});
ShortDisplay.storyName = 'Small Modal';
ShortDisplay.args = {
  title: 'Título do modal',
  paragraph: 'Texto do modal lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a erat tellus. Nullam commodo, purus sit amet convallis elementum, nisl erat pretium mauris, vel sodales est orci .',
  imgSrc: 'N/A',
  widthImg: 'N/A',
  heightImg: 'N/A',
};
