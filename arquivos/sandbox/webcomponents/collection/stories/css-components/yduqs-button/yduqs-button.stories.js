import { html } from 'lit-html';
export default {
  title: 'Componentes/Button',
  argTypes: {
    buttonLabel: { control: "text" },
    dark: { control: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"]
      },
      name: "Tamanho do Button",
    },
  },
};
const BasicTemplate = ({ buttonLabel, dark, size }) => html `
<div class="container py-4 d-flex justify-content-around">
  <button type="button" class="c-button ${dark ? `c-button--dark` : ``} u-text--${size}" tabindex="1">${buttonLabel}</button>
  <button type="button" class="c-button ${dark ? `c-button--dark` : ``} u-text--${size}" tabindex="2" disabled>${buttonLabel}</button>
</div>
`;
export const Basic = BasicTemplate.bind({});
Basic.storyName = 'Primary';
Basic.args = {
  buttonLabel: 'Button',
  dark: false,
  size: 'small'
};
const GhostTemplate = ({ buttonLabel, dark, size }) => html `
<div class="container py-4 d-flex justify-content-around">
  <button type="button" class="c-button c-button--ghost ${dark ? `c-button--dark` : ``} u-text--${size}">${buttonLabel}</button>
  <button type="button" class="c-button c-button--ghost ${dark ? `c-button--dark` : ``} u-text--${size}" disabled>${buttonLabel}</button>
</div>
`;
export const Ghost = GhostTemplate.bind({});
Ghost.storyName = 'Secondary';
Ghost.args = {
  buttonLabel: 'Button Secondary',
  dark: false,
  size: 'small'
};
const LinkTemplate = ({ buttonLabel, dark, size }) => html `
<div class="container py-4 d-flex justify-content-around">
  <a class="c-button ${dark ? `c-button--dark` : ``} u-text--${size}">${buttonLabel}</a>
</div>
`;
export const Link = LinkTemplate.bind({});
Link.storyName = 'Link';
Link.args = {
  buttonLabel: 'Button Link',
  dark: false,
  size: 'medium'
};
const InputTemplate = ({ buttonLabel, dark, size }) => html `
<div class="container py-4 d-flex justify-content-around">
  <input type="button" class="c-button ${dark ? `c-button--dark` : ``} u-text--${size}" value="${buttonLabel}">
</div>
`;
export const Input = InputTemplate.bind({});
Input.storyName = 'Input';
Input.args = {
  buttonLabel: 'Input Button',
  dark: false,
  size: 'small'
};
const IconTemplate = ({ buttonLabel, dark, size }) => html `
<div class="container py-4 d-flex justify-content-around">
  <button class="c-button c-button__icon-container ${dark ? `c-button--dark` : ``} u-text--${size}" type="button">
  ${buttonLabel} <span class="c-button__icon-text-left material-icons">face</span>
  </button>
  <button class="c-button c-button__icon-container ${dark ? `c-button--dark` : ``} u-text--${size}" type="button">
    <span class="c-button__icon material-icons">face</span>
  </button>
  <button class="c-button c-button__icon-container ${dark ? `c-button--dark` : ``} u-text--${size}" type="button">
    <span class="c-button__icon-text-right material-icons">face</span> ${buttonLabel}
  </button>
</div>
`;
export const Icon = IconTemplate.bind({});
Icon.storyName = 'Icons';
Icon.args = {
  buttonLabel: 'Button',
  dark: false,
  size: 'small'
};
