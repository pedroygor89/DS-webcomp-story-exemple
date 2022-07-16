import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Toggle',
  component: 'yduqs-toggle',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    open: {
      control: "boolean",
      name: "Seleciona true/false para o Toogle."
    },
    disable: {
      control: "boolean",
      name: "Ativa/Desativa o Toggle."
    },
  },
};
const Template = ({ open, disable }) => html `
  <div style="display:flex; justify-content:space-around;">
    <yduqs-toggle id="tog1" open="${open}" disable="${disable}"></yduqs-toggle>
    <yduqs-toggle id="tog2" open="${open}" disable="${!disable}"></yduqs-toggle>
  </div>
  <script>
    var meuToggle = document.getElementById('tog1');
    meuToggle.addEventListener('onToggleEmit',function (e){
      console.log(e);
    })
  </script>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  open: true,
  disable: false,
};
