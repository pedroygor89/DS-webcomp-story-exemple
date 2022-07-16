import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Collapse',
  component: 'yduqs-collapse',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    border: {
      control: {
        type: "boolean",
      },
      name: "Borda em torno do collapse",
    },
    title: {
      control: "text",
      name: "Texto do título do collapse"
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"]
      },
      name: "Tamanho do texto do título",
    },
    content: {
      control: "text",
      name: "Conteúdo do collapse"
    },
  },
};
const Template = ({ title, size, content, border }) => html `
<div class="container">
  <yduqs-collapse border="${border}">
    <yduqs-collapse-content size="${size}" header="${title}">
      <p>${content}</p>
    </yduqs-collapse-content>
  </yduqs-collapse>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  title: 'Saiba mais',
  size: 'small',
  content: 'Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo. Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo. Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.',
  border: true
};
