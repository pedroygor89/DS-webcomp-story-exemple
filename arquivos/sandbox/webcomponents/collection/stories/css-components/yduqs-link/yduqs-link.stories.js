import { html } from 'lit-html';
export default {
  title: 'Componentes/Link',
  argTypes: {
    content: {
      control: "text",
      name: "Texto do link"
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"]
      },
      name: "Tamanho do texto no link",
    },
  },
};
const BasicTemplate = ({ content, size }) => html `
<div class="container">
  <div class="d-flex flex-column">
    <a class="c-link u-text--${size}" tabindex="1">${content}</a>
    <a class="c-link c-link--disabled u-text--${size}">Link Disabled</a>
  </div>
  <div class="d-flex flex-column">
    <p class="u-text--${size}">
    Mussum Ipsum, cacilds vidis litro abertis. <a class="c-link u-text--${size}">Casamentiss</a> faiz malandris se pirulitá. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem manda na minha terra sou euzis!
    </p>
  </div>
</div>
`;
export const Basic = BasicTemplate.bind({});
Basic.storyName = 'Basic';
Basic.args = {
  content: 'Saiba mais',
  size: 'small'
};
const ButtonLinkTemplate = () => html `
  <a class="c-button">Button link</a>
`;
export const ButtonLink = ButtonLinkTemplate.bind({});
ButtonLink.storyName = 'Button';
const TagLinkTemplate = ({ content, size }) => html `
  <div class="container">
    <a class="c-link c-link--tag">${content}</a>
    <p>Principalmente encontrado em frutas e hortaliças. <a class="c-link c-link--tag u-text--${size}">${content}</a> afirma que a melhor fonte deste elemento na alimentação é em geleias de frutas.</p>
  </div>
`;
export const TagLink = TagLinkTemplate.bind({});
TagLink.storyName = 'Tag';
TagLink.args = {
  content: 'Coultate (2009)',
  size: 'small'
};
