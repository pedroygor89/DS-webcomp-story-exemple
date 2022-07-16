import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Mansagem de Informação',
  component: 'yduqs-info',
  parameters: {
    markdown: readme,
    notes: readme,
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
    subtitle: {
      control: { type: 'text' },
      name: 'Sub título',
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
const Template = ({ usematerial, icon, title, subtitle, message, delay, open }) => html `
  <div style="margin-left: 50px">
    <yduqs-info usematerial="${usematerial}" icon="${icon}" title="${title}" subtitle="${subtitle}" delay="${delay}" message="${message}" open="${open}"></yduqs-info>
    <button onclick='toggle()'>Mostrar</button>
  </div>
  <script>
    var elem = document.querySelector('yduqs-info');
  
    function toggle() {
      elem.open = !elem.open;
    }
  
    elem.addEventListener('infoClosed', toggle);
  
  </script>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  open: false,
  usematerial: true,
  icon: 'info',
  title: 'Nunc eget tempor!',
  subtitle: 'Fusce a lacinia libero',
  message: 'Cras volutpat faucibus justo sit amet accumsan',
  delay: 10000,
};
