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
    },
    imageDevice: {
      name: 'Imagem Default',
      control: {
        type: "select",
        options: ["desktop.jpg", "mobile.jpg",]
      },
    },
  }
};
const Template = ({ card_image, card_icon, card_heading, card_subheading, image_alt, image_title, is_question, imageDevice }) => html `
    <yduqs-card-horizontal card_image="${card_image ? card_image : imageDevice}" card_icon="${card_icon}" image_alt="${image_alt}" isquestion="${is_question}" image_title="${image_title}">
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
  imageDevice: 'desktop.jpg',
  card_image: '',
  card_icon: 'emoji_events',
  card_heading: 'Lorem Ipsum.',
  card_subheading: 'Ipsum lorem, lorem ipsum?',
  image_alt: 'Texto alternativo',
  image_title: 'Title da imagem',
  is_question: true
};
