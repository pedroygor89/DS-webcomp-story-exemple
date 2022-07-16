import readme from './readme.md';
import front_notes from './front-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Laboratório/Página de Laboratório Genérica',
  component: 'yduqs-page-generic-lab',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Utilização': front_notes },
  },
  argTypes: {
    fluid: {
      control: {
        type: 'text',
      },
      name: 'fluid',
    },
    bg: {
      control: {
        type: 'boolean',
      },
      name: 'Bg',
    },
  },
};
const Template = ({ fluid, bg }) => html `
  <yduqs-page-generic-lab fluid=${fluid} bg=${bg}>
    <div slot="header" class="box-title d-flex justify-content-between align-items-center">
      <h1 class="px-0">Titulo da Pagina</h1>
      <a href="javascript:void(0)">Ir para o Mapa</a>
    </div>

    <div slot="body" class="box-body d-flex justify-content-between">
      <slot></slot>
    </div>

    <div slot="footer" class="d-flex justify-content-center">
      <a class="c-button btn-intro my-5 d-flex align-items-center" href="javascript:void(0)">Ir para o mapa <span class="c-button__icon material-icons px-1">chevron_right</span></a>
    </div>
  </yduqs-page-generic-lab>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  fluid: '',
  bg: true,
};
