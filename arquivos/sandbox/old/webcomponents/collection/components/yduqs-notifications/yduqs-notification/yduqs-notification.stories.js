import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Notification',
  component: 'yduqs-notification',
  parameters: {
    markdown: readme,
    notes: { readme },
    layout: 'centered'
  },
  argTypes: {
    notificationType: {
      control: {
        type: "select",
        options: ["info", "warning", "success", "error"]
      },
      name: "Tipo de notificação",
    },
    content: {
      control: "text",
      name: "Mensagem do notificação"
    }
  }
};
const Template = ({ notificationType, content }) => html `
  <yduqs-notification open dismissible type="${notificationType}">${content}</yduqs-notification>
`;
export const Basic = Template.bind({});
Basic.storyName = 'Estático';
Basic.args = {
  notificationType: 'info',
  content: 'Cabbage Daily Prophet letters from no one Dervish and Banges leg.'
};
const DynamicTemplate = ({ notificationType, content }) => html `
  <yduqs-notification id="myNotification" dismissible type="${notificationType}">${content}</yduqs-notification>
  <button id="btnNotification" class="c-button">Open Notification</button>
  <script>
    var objNotification = document.querySelector('#myNotification');
    var btnNotification = document.querySelector('#btnNotification');

    btnNotification.addEventListener('click', function(){
      objNotification.show();
    });
  </script>
`;
export const Dynamic = DynamicTemplate.bind({});
Dynamic.storyName = 'Dinâmico';
Dynamic.args = {
  notificationType: 'info',
  content: 'Daily Prophet'
};
