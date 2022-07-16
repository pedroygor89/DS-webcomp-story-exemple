import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Loading',
  component: 'yduqs-loading',
  parameters: {
    markdown: readme,
    notes: { readme },
    layout: 'centered'
  },
  argTypes: {
    message: {
      control: "text",
      name: "Mensagem do loader (opcional)"
    }
  }
};
const Template = ({ message }) => html `
  <yduqs-loading open message="${message}"></yduqs-loading>
`;
export const Basic = Template.bind({});
Basic.storyName = 'Estático';
Basic.args = {
  message: 'Aguarde...'
};
const DynamicTemplate = ({ message }) => html `
<div class="container">
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-around">
        <button id="btnOpen" class="c-button">Open</button>
        <button id="btnClose" class="c-button">Close</button>
      </div>
    </div>
    <div class="col-12 my-4">
      <yduqs-loading id="myLoading" message="${message}"></yduqs-loading>
    </div>
  </div>
</div>

  <script>
    var objLoading = document.querySelector('#myLoading');
    var btnOpen = document.querySelector('#btnOpen');
    var btnClose = document.querySelector('#btnClose');

    btnOpen.addEventListener('click', function(){
      objLoading.show();
    });

    btnClose.addEventListener('click', function(){
      objLoading.hide();
    });
  </script>
`;
export const Dynamic = DynamicTemplate.bind({});
Dynamic.storyName = 'Dinâmico';
Dynamic.args = {
  message: ''
};
