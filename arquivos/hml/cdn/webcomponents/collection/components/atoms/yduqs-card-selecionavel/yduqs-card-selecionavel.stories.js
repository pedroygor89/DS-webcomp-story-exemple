import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Card Selecionável',
  component: 'yduqs-card-selecionavel',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    optionid: {
      control: {
        type: "text",
      },
      name: "ID",
    },
    option01: {
      control: {
        type: "text",
      },
      name: "Conteúdo opção 1",
    },
  }
};
const Template = ({ option01, optionid }) => html `
<div class="container">
  <div class="row">
    <div class="col-12 my-2">
      <yduqs-card-selecionavel>
        <yduqs-card-selecionavel-item optionid="${optionid}">
            <p class="c-paragraph">
              ${option01}
            </p>
        </yduqs-card-selecionavel-item>
        <yduqs-card-selecionavel-item optionid="B">
            <p class="c-paragraph">
              Label 2
            </p>
        </yduqs-card-selecionavel-item>
        <yduqs-card-selecionavel-item optionid="C">
            <p class="c-paragraph">
            Label 3
            </p>
        </yduqs-card-selecionavel-item>
        <yduqs-card-selecionavel-item optionid="D" disabled selected>
            <p class="c-paragraph">
              Label 4
            </p>
        </yduqs-card-selecionavel-item>
      </yduqs-card-selecionavel>
    </div>
  </div>
</div>
<script>
  var cardSelecionavel = document.querySelector('yduqs-card-selecionavel');

  cardSelecionavel.addEventListener('onselect', function(evt) {
    var cardData = evt.detail;
    if (cardData.isSelected) {
      return alert('Opção escolhida ' + cardData.optionId);
    }
  });

</script>
`;
export const Default = Template.bind({});
Default.storyName = 'Básico';
Default.args = {
  optionid: 'A',
  option01: 'Label 1',
};
