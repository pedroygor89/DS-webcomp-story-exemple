import readme from './readme.md';
import notes from './notes.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Mensagem de Alerta',
  component: 'yduqs-alert',
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
    subtitle: {
      control: { type: 'text' },
      name: 'Sub título',
    },
    message: {
      control: { type: 'text' },
      name: 'Mensagem',
    },
    btntext: {
      control: { type: 'text' },
      name: 'Texto do Botão',
    },
  },
};
const Template = ({ usematerial, icon, title, subtitle, message, btntext, open }) => html `
  <div style="margin-left: 50px">
    <yduqs-alert usematerial="${usematerial}" icon="${icon}" title="${title}" subtitle="${subtitle}" message="${message}" btntext="${btntext}" open="${open}"></yduqs-alert>
    <button onclick='toggle()'>Mostrar</button>
  </div>
  <script>
  var elem = document.querySelector('yduqs-alert');

  function toggle() {
    elem.open = !elem.open;
  }

  elem.addEventListener('alertClick', toggle);
  elem.addEventListener('alertClosed', toggle);

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
  btntext: 'Continuar',
};
