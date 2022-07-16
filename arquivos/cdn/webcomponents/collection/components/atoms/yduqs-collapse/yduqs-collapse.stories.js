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
    outline: {
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
    background: {
      control: {
        type: "select",
        options: ["light", "dark", ""]
      },
      name: "Background do content do collapse",
    },
    aling: {
      control: {
        type: "select",
        options: ["", "rigth"]
      },
      name: "Alinhamento button do collapse",
    },
  },
};
const Template = ({ title, size, content, outline, background, aling }) => html `
<div class="container">
  <yduqs-collapse outline="${outline}">
    <yduqs-collapse-content size="${size}" header="${title}" color_collapse="${background}" aling_collapse="${aling}">
      <p class="c-paragraph">${content}</p>
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
  outline: true,
  background: "",
  aling: ""
};
