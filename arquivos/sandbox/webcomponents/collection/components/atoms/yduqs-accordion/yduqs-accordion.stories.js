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
    title02: {
      control: "text",
      name: "Título da segunda aba"
    },
    title03: {
      control: "text",
      name: "Título da terceira aba"
    }
  },
};
const Template = ({ outline, title01, title02, title03 }) => html `
  <yduqs-accordion outline="${outline}">
    <yduqs-accordion-pane>
      <span slot="c-accordion-header">
        ${title01} <span class="material-icons">flag</span>
      </span>
      <div slot="c-accordion-content">
        <h4>Mussum Ipsum, cacilds vidis litro abertis.</h4>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
      </div>
    </yduqs-accordion-pane>
  </yduqs-accordion>
  <yduqs-accordion outline="${outline}">
    <yduqs-accordion-pane>
      <span slot="c-accordion-header"><i>${title02}</i> - ア ウェブア</span>
      <div slot="c-accordion-content">
      <h4>Mussum Ipsum, cacilds vidis litro abertis.</h4>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
      </div>
    </yduqs-accordion-pane>
  </yduqs-accordion>
  <yduqs-accordion outline="${outline}">
    <yduqs-accordion-pane>
      <span slot="c-accordion-header"><strong>${title03}</strong></span>
      <div slot="c-accordion-content">
        <h4>Mussum Ipsum, cacilds vidis litro abertis.</h4>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
        <p class="c-paragraph">Mussum Ipsum, cacilds vidis litro abertis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si num tem leite então bota uma pinga aí cumpadi! In elementis mé pra quem é amistosis quis leo.</p>
      </div>
    </yduqs-accordion-pane>
  </yduqs-accordion>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  outline: false,
  title01: 'Aba com um título muito muito muito muito muito muito muito muito muito muito grande mesmo. Talvez para ficar maior ainda precise dessa frase.',
  title02: 'Título em itálico',
  title03: 'Título com tag <strong>'
};
