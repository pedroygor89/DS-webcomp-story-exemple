import readme from './readme.md';
import notes from './notes.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Mensagem de Rodapé',
  component: 'yduqs-toast',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Desenvolvimento': notes },
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
      name: 'Visível?',
    },
    icon: {
      control: {
        type: 'text',
      },
      name: 'Ícone (Material Design ou url)',
    },
    usematerial: {
      control: {
        type: 'boolean',
      },
      name: 'Usa o Material Design Icon?',
    },
    title: {
      control: { type: 'text' },
      name: 'Título',
    },
    message: {
      control: { type: 'text' },
      name: 'Mensagem',
    },
    delay: {
      control: { type: 'number' },
      name: 'Delay da mensagem',
    },
  },
};
const Template = ({ usematerial, icon, title, message, open, delay }) => html `
  <div style="margin-left: 50px">
    <yduqs-toast usematerial="${usematerial}" icon="${icon}" tit="${title}" delay="${delay}" message="${message}" open="${open}"></yduqs-toast>
    <button onclick='handleOpen()'>Mostrar</button>
  </div>
  <script>
    var elem = document.querySelector('yduqs-toast');
  
    function handleOpen() {
      elem.open = true;
    }

    function handleClose() {
      elem.open = false;
    }
  
    elem.addEventListener('toastClosed', handleClose);
  
  </script>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  open: false,
  usematerial: true,
  icon: 'info',
  title: 'Nunc eget tempor!',
  message: 'Cras volutpat faucibus justo sit amet accumsan',
  delay: 5000,
};
