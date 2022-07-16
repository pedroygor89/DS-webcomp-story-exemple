import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Caixa de Fórmula',
  component: 'yduqs-caixa-formula',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    title_formula: {
      control: "text",
      name: "Título da caixa de fórmula"
    },
    formula: {
      control: "text",
      name: "Fórmula da caixa de fórmula"
    },
    dark: {
      control: {
        type: "boolean",
      },
      name: "Estilo dark",
    },
    outline: {
      control: {
        type: "boolean",
      },
      name: "Estilo outline",
    }
  },
};
const Template = ({ title_formula, formula, dark, outline }) => html `
  <div class="container-sm my-5 px-0">
    <yduqs-caixa-formula  formula="${formula}" dark="${dark}" outlined="${outline}" title_formula="${title_formula}">
    </yduqs-caixa-formula>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  title_formula: 'Equação 1',
  formula: '$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} = {-b \pm \sqrt{b^2-4ac} \over 2a} = {-b \pm \sqrt{b^2-4ac} \over 2a} = {-b \pm \sqrt{b^2-4ac} \over 2a} = {-b \pm \sqrt{b^2-4ac} \over 2a} = {-b \pm \sqrt{b^2-4ac} \over 2a} $$',
  dark: false,
  outline: false,
};
