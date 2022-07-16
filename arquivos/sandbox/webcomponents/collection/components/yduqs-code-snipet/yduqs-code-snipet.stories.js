import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Code-Snipet',
  component: 'yduqs-code-snipet',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    dark: {
      control: 'boolean',
      name: "Dark",
    },
    disable: {
      control: 'boolean',
      name: "Ativa/Desativa o Toggle.",
    },
  },
};
const Template = ({ dark, disable }) => html `
    <yduqs-code-snipet dark="${dark}" disable="${disable}">
    <code class="ident-0 language-css">body {</code><br />
    <code class="ident-1 language-css">color: yellow;</code><br />
    <code class="ident-2">color: yellow;</code><br />
    <code class="ident-3">color: yellow;</code><br />
    <code class="ident-4">color: yellow;</code><br />
    <code class="ident-5">color: yellow;</code><br />
    <code class="ident-6">color: yellow;</code><br />
    <code class="ident-7">color: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.;</code><br />
    <code class="ident-8">color: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.;</code><br />
    <code class="ident-9">color: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.;</code><br />
    <code class="ident-10">color: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.;</code><br />
    <code class="ident-11">color: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.;</code><br />
    <code class="ident-12">color: Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.;</code><br />
    <code class="ident-0">}</code>
    </yduqs-code-snipet>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  dark: true,
  disable: false,
};
