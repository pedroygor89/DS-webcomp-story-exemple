import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Rating',
  component: 'yduqs-rating',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    cta: {
      name: 'Insira o texto',
      control: 'text'
    },
    icon: {
      name: 'Insira um ícone do materialize icons',
      control: 'text'
    },
    tamanho: {
      type: "select",
      options: ["xsmall", "small", "medium", "super", "xlarge", "large"]
    },
    module: {
      name: 'Insira o módulo',
      control: 'text'
    },
  },
};
const Template = ({ cta, icon, tamanho, module }) => html `
    <div class="rating-storybook">
        <style>.c-rating {display: block;}</style>
        <yduqs-rating cta="${cta}" icon="${icon}" tamanho="${tamanho}" module="${module}"></yduqs-rating>
        <script src="https://stensineme.blob.core.windows.net/designsystem/test/yduqs_rating.js"></script>
    </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  cta: 'Lorem ipsum',
  icon: 'star',
  tamanho: 'large',
  module: '1'
};
