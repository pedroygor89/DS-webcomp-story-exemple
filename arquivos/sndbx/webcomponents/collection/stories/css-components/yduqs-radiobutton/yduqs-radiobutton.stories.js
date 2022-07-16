import { html } from 'lit-html';
export default {
  title: 'Componentes/Radio Button',
  argTypes: {
    radioButtonLabel: {
      control: "text",
      name: "Label do radio button",
    },
  },
};
const Template = ({ radioButtonLabel }) => html `
<div class="container">
  <div class="d-flex flex-column">

    <div class="c-field-radio" tabindex="1">
      <span class="c-field-radio__box">
        <input id="radio-1" name="radio_group1" type="radio" checked>
        <label for="radio-1" class="c-field-radio__label">Item 1</label>
      </span>
    </div>

    <div class="c-field-radio" tabindex="2">
      <span class="c-field-radio__box">
        <input id="radio-2" name="radio_group1" type="radio">
        <label  for="radio-2" class="c-field-radio__label">Item 2</label>
      </span>
    </div>

    <div class="c-field-radio" tabindex="3">
      <span class="c-field-radio__box">
        <input id="radio-3" name="radio_group1" type="radio" disabled>
        <label for="radio-3" class="c-field-radio__label">Item Disabled</label>
      </span>
    </div>

    <div class="c-field-radio" tabindex="4">
      <span class="c-field-radio__box">
        <input id="radio-4" name="radio_group1" type="radio">
        <label for="radio-4" class="c-field-radio__label">
          <span class="c-field-radio__label--large">${radioButtonLabel}</span>
        </label>
      </span>
    </div>

  </div>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Basic';
Default.args = {
  radioButtonLabel: 'Label exemplo'
};
