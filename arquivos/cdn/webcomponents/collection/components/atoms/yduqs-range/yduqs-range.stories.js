import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Range',
  component: 'yduqs-range',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    value: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
      name: 'Valor padrão',
    },
    min: {
      control: {
        type: 'number',
        min: -10,
        max: 10,
      },
      name: 'Mínimo',
    },
    max: {
      control: {
        type: 'number',
        min: 0,
        max: 10,
      },
      name: 'Máximo',
    },
    step: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
      },
      name: 'Passo',
    },
  },
};
const Template = ({ value, min, max, step }) => html `
  <div class="container">
    <div class="row">
      <div class="col py-5">
        <yduqs-range value="${value}" min="${min}" max="${max}" step="${step}"></yduqs-range>
      </div>
      <div class="col py-5">
        <span id="output">${value}</output>
      </div>
    </div>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  value: 0,
  min: 0,
  max: 10,
  step: 1,
};
