import readme from './readme.md';
import { html } from 'lit-html';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
export default {
  title: 'Componentes/Code-Snipet',
  component: 'yduqs-code-snipet',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    dark: {
      control: 'boolean',
      name: "Dark",
    },
    language_code: {
      control: 'text',
      name: "Linguagem de Programação",
    },
    code: {
      control: 'text',
      name: "Código",
    },
  },
};
const Template = ({ dark, language_code, code }) => html `
  <yduqs-code-snipet dark="${dark}" language_code="${language_code}" code="${code}">
  </yduqs-code-snipet>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  dark: false,
  language_code: 'JS',
  code: "let x = 50;&#10let y = 50;&#10x = 50;&#10y = 50;&#10ctx.fillStyle = &#20green&#20;&#10tx.fillRect(10, 10, x, y);"
};
