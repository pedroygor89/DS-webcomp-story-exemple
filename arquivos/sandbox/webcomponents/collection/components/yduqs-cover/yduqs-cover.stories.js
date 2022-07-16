import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Tema - Cover',
  component: 'yduqs-cover',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    theme_background: {
      name: 'Insira o link da imagem',
      control: 'text'
    },
    theme_title: {
      name: 'Insira o título do tema',
      control: 'text'
    },
    theme_teacher: {
      name: 'Insira o nome do professor',
      control: 'text'
    },
    theme_teacher_avatar: {
      name: 'Insira link do avatar do professor',
      control: 'text'
    },
    theme_title_bg: {
      name: 'Background no título',
      control: 'boolean'
    },
    theme_teacher_bg: {
      name: 'Background no nome do professor',
      control: 'boolean'
    },
    theme_cover_definition: {
      name: 'Insira o texto da definição do tema',
      control: 'text'
    },
    theme_cover_purpose: {
      name: 'Insira o texto do propósito do tema',
      control: 'text'
    },
    theme_cover_preparation: {
      name: 'Tema possui preparação?',
      control: 'boolean'
    },
    theme_cover_preparation_text: {
      name: 'Insira o texto da preparação do tema',
      control: 'text'
    }
  }
};
const coverTema = ({ theme_background, theme_title, theme_title_bg, theme_teacher_bg, theme_teacher, theme_teacher_avatar, theme_cover_definition, theme_cover_purpose, theme_cover_preparation, theme_cover_preparation_text }) => html `

  <yduqs-cover
    theme_background="${theme_background}"
    theme_title="${theme_title}"
    theme_teacher="${theme_teacher}"
    theme_teacher_avatar="${theme_teacher_avatar}"
    theme_title_bg="${theme_title_bg}"
    theme_teacher_bg="${theme_teacher_bg}"
    theme_cover_preparation="${theme_cover_preparation}"
  >
    <div slot="yduqs-cover-definition">
      <p>${theme_cover_definition}</p>
    </div>

    <div slot="yduqs-cover-purpose">
      <p>${theme_cover_purpose}</p>
    </div>

    <div slot="yduqs-cover-preparation-text">
      <p>${theme_cover_preparation_text}</p>
    </div>

  </yduqs-cover>
`;
export const coverTemaDefault = coverTema.bind({});
coverTemaDefault.storyName = 'Default';
coverTemaDefault.args = {
  theme_background: 'http://placeimg.com/1920/1080/tech',
  theme_title: 'Educação na Idade Média',
  theme_teacher: 'Rodrigo Rainha',
  theme_teacher_avatar: 'https://i.pravatar.cc/128',
  theme_title_bg: true,
  theme_teacher_bg: true,
  theme_cover_definition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  theme_cover_purpose: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  theme_cover_preparation: false,
  theme_cover_preparation_text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
};
