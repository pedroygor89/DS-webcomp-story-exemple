import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Card Horizontal',
  component: 'yduqs-card-horizontal',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    card_image: {
      name: 'Escolha uma imagem',
      control: 'text',
    },
    card_icon: {
      name: 'Escolha um ícone',
      control: 'text',
    },
    card_heading: {
      name: 'Escolha um heading',
      control: 'text',
    },
    card_subheading: {
      name: 'Escolha um subheading',
      control: 'text',
    },
    image_alt: {
      name: 'Escolha um alt para a imagem',
      control: 'text',
    },
    image_title: {
      name: 'Escolha um title para a imagem',
      control: 'text',
    },
    is_question: {
      name: 'Versão imagens Question',
      control: {
        type: "boolean",
      }
    }
  }
};
const Template = ({ card_image, card_icon, card_heading, card_subheading, image_alt, image_title, is_question }) => html `
    <yduqs-card-horizontal card_image="${card_image}" card_icon="${card_icon}" image_alt="${image_alt}" isquestion="${is_question}" image_title="${image_title}">
          <div slot="card-heading">
            ${card_heading}
          </div>
          <div slot="card-subheading">
            ${card_subheading}
          </div>
    </yduqs-card-horizontal>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  card_image: 'https://via.placeholder.com/1920x1080',
  card_icon: 'emoji_events',
  card_heading: 'Lorem Ipsum.',
  card_subheading: 'Ipsum lorem, lorem ipsum?',
  image_alt: 'Texto alternativo',
  image_title: 'Title da imagem',
  is_question: true
};
