import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Accordion',
  component: 'yduqs-accordion',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    outline: {
      control: {
        type: "boolean",
      },
      name: "Estilo outline",
    },
    title01: {
      control: "text",
      name: "Título da primeira aba"
    },
    content01: {
      control: "text",
      name: "Conteúdo da primeira aba"
    },
    title02: {
      control: "text",
      name: "Título da segunda aba"
    },
    content02: {
      control: "text",
      name: "Conteúdo da segunda aba"
    },
    title03: {
      control: "text",
      name: "Título da terceira aba"
    }
  },
};
const Template = ({ outline, title01, title02, title03 }) => html `
  <yduqs-accordion outline="${outline}">
    <yduqs-accordion-pane open header="${title01}">
    <h4>Mussum Ipsum, cacilds vidis litro abertis.</h4>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    </yduqs-accordion-pane>
  </yduqs-accordion>
  <yduqs-accordion outline="${outline}">
    <yduqs-accordion-pane header="${title02}">
    <h4>Mussum Ipsum, cacilds vidis litro abertis.</h4>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    </yduqs-accordion-pane>
  </yduqs-accordion>
  <yduqs-accordion outline="${outline}">
    <yduqs-accordion-pane header="${title03}">
      <h4>Mussum Ipsum, cacilds vidis litro abertis.</h4>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
      <p>Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
    </yduqs-accordion-pane>
  </yduqs-accordion>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  outline: false,
  title01: 'Aba com um título muito muito muito muito muito muito muito muito muito muito grande mesmo. Talvez para ficar maior ainda precise dessa frase.',
  content01: 'Uma aba aberta possui o atributo "open".',
  title02: 'Segunda aba',
  content02: 'Ao clicar em uma aba, ela se abre ou fecha de acordo com seu comportamento atual.',
  title03: 'Terceira aba'
};
