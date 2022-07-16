import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Progress Bar',
  component: 'yduqs-progress',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    value: {
      control: {
        type: "number",
        min: 0,
        max: 100
      },
      name: "Porcentagem de progresso",
    },
    semiRounded: {
      control: {
        type: "boolean",
      },
      name: "Borda semi-arredondada",
    }
  },
};
const Template = ({ value, semiRounded }) => html `
<div class="container">
  <div class="row">
    <div class="col py-5">
      <yduqs-progress-bar value="${value}" semirounded="${semiRounded}"></yduqs-progress-bar>
    </div>
  </div>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  value: 50,
  semiRounded: false,
};
