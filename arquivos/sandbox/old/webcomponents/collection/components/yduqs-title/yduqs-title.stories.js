import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Title',
  component: 'yduqs-title',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    topic_icon: {
      name: 'Insira o ícone',
      control: 'text'
    },
    topic_title: {
      name: 'Insira o título',
      control: 'text'
    }
  },
};
const Template = ({ topic_icon, topic_title }) => html `
  <yduqs-title topic_icon="${topic_icon}" topic_title="${topic_title}" /></yduqs-title>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  topic_icon: 'emoji_events',
  topic_title: 'Título do tópico'
};
