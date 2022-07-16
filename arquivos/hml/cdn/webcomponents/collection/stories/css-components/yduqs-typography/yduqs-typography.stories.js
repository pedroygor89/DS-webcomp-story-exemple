import notes from './additional-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Typography',
  parameters: {
    notes: { 'Uso em elementos de texto': notes },
    layout: 'centered'
  },
  argTypes: {
    content: {
      control: "text",
      name: "Texto do link"
    },
    size: {
      control: {
        type: "select",
        options: ["xsmall", "small", "medium", "large", "xlarge", "super"]
      },
      name: "Tamanho do texto",
    },
  },
};
const BasicTemplate = ({ content, size }) => html `
<div class="container">
  <div class="d-flex flex-column">
    <h1 class="c-heading u-title-${size}">${content}</h1>
  </div>
</div>
`;
export const Basic = BasicTemplate.bind({});
Basic.storyName = 'Títulos';
Basic.args = {
  content: 'Mussum Ipsum, cacilds vidis litro abertis.',
  size: 'large'
};
const BodyTextTemplate = ({ content, size }) => html `
<div class="container">
  <div class="d-flex flex-column">
    <p class="u-text u-${size}">${content}</p>
  </div>
</div>
`;
export const BodyText = BodyTextTemplate.bind({});
BodyText.storyName = 'Corpo';
BodyText.args = {
  content: 'Mussum Ipsum, cacilds vidis litro abertis.',
  size: 'small'
};
