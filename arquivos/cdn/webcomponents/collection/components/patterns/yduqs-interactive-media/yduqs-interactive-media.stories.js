import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Laboratório/Mídia Interativa',
  component: 'yduqs-interactive-media',
  parameters: {
    markdown: readme,
    notes: readme
  },
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
      name: 'Identificador (id)',
    },
    headericon: {
      control: {
        type: 'text',
      },
      name: 'Ícone (Material)',
    },
    headertitle: {
      control: {
        type: 'text',
      },
      name: 'Título',
    },
    headertext: {
      control: {
        type: 'text',
      },
      name: 'Texto',
    },
    config: {
      control: {
        type: 'text',
      },
      name: 'Configuração',
    },
  },
};
const Template = ({ id, headericon, headertext, headertitle, config }) => html `
  <yduqs-interactive-media id="${id}" config="${config}" headericon="${headericon}" headertext="${headertext}" headertitle="${headertitle}"></yduqs-interactive-media>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  id: 'interactive-media',
  headericon: 'signpost',
  headertitle: 'Mídia Interativa',
  headertext: 'Donec iaculis lectus nulla, et efficitur purus sollicitudin at. In eu leo placerat, fermentum lorem vel, pretium massa. Nam a nisl erat. Fusce semper ligula ac diam viverra tincidunt. Aliquam viverra ipsum in mattis porta. Cras vitae consequat ipsum. Aliquam rhoncus mi eget ornare faucibus. Curabitur hendrerit dolor ac metus egestas auctor non sed lectus. Nulla placerat risus nec erat pharetra placerat. Curabitur consequat neque at diam maximus malesuada. Etiam sed placerat urna, vel tristique dolor.',
  config: 'http://stensineme.blob.core.windows.net/hmlgrepoh/hml_repo/web-components/assets/interactive-media/001.json'
};
