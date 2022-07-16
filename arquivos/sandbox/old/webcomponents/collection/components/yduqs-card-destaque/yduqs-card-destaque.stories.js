import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Card Destaque',
  component: 'yduqs-card-destaque',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    grade: {
      control: {
        type: "select",
        options: ["1", "2", "3"]
      },
      name: "Nível de relevância do conteúdo",
    },
    outline: {
      control: {
        type: "boolean",
      },
      name: "Estilo outline",
    },
    icon: {
      control: {
        type: "text",
      },
      name: "Icone (fonte Material Icons)",
    },
    title: {
      control: {
        type: "text",
      },
      name: "Título do card",
    },
    content: {
      control: {
        type: "text",
      },
      name: "Conteúdo do card",
    },
  }
};
const Template = ({ grade, title, content, outline, icon }) => html `
<div class="container mt-2">
  <div class="row">
    <div class="col-12 my-2">
      <yduqs-card-destaque grade="${grade}" outline="${outline}" icon="${icon}">
        <yduqs-card-destaque-header>
          <h2 class="c-heading u-xlarge">
            ${title}${grade}
          </h2>
        </yduqs-card-destaque-header>
        <yduqs-card-destaque-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-destaque-body>
      </yduqs-card-destaque>
    </div>
  </div>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Básico';
Default.args = {
  grade: '1',
  outline: false,
  icon: 'flag',
  title: 'Conteúdo adicional de nível ',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida vehicula sollicitudin. Duis erat massa, fringilla vel elit a, semper venenatis massa. Praesent ut sem lacinia, iaculis urna vel, laoreet turpis. Suspendisse pulvinar bibendum augue, sagittis interdum nulla rutrum sed. Curabitur sed ullamcorper mi, sit amet rhoncus nibh. Nam id ipsum non est efficitur.'
};
