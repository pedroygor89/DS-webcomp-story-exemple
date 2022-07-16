import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Card Intro',
  component: 'yduqs-card-intro',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    text: {
      control: {
        type: "text",
      },
      name: "Insira o Título",
    },
    content: {
      control: {
        type: "text",
      },
      name: "Insira o conteúdo",
    }
  }
};
const Template = ({ text, content }) => html `
<yduqs-card-intro text="${text}">
          <p class="c-paragraph">
            ${content}
          </p>
    </yduqs-card-intro>
`;
export const Default = Template.bind({});
Default.storyName = 'Básico';
Default.args = {
  text: 'Introdução',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida vehicula sollicitudin. Duis erat massa, fringilla vel elit a, semper venenatis massa. Praesent ut sem lacinia, iaculis urna vel, laoreet turpis. Suspendisse pulvinar bibendum augue, sagittis interdum nulla rutrum sed. Curabitur sed ullamcorper mi, sit amet rhoncus nibh. Nam id ipsum non est efficitur.'
};
