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
    background_img: {
      name: 'Insira o link da imagem',
      control: 'text'
    },
    background_img_title: {
      name: 'Insira o título da imagem de fundo do tema',
      control: 'text'
    },
    title_cover: {
      name: 'Insira o título do tema',
      control: 'text'
    },
    teacher: {
      name: 'Insira o nome do professor',
      control: 'text'
    },
    teacher_avatar: {
      name: 'Insira link do avatar do professor',
      control: 'text'
    },
    teacher_link: {
      name: 'Insira o link do site do professor',
      control: 'text'
    },
    contributors: {
      name: 'Insira os professores colaboradores',
      control: 'text'
    },
    background_text: {
      name: 'Insira o tipo de proteção para o h1',
      type: "select",
      options: ["primary-90", "neutral-0", "false", "true"]
    },
    background_text_mobile: {
      name: "Mudar o background da proteção no mobile para preto com 30% ou 60% de opacidade?",
      type: "select",
      options: ["false", "30", "60"]
    },
    collaboration_text: {
      name: 'Insira o título para os colaboradores (Padrão: Colaboração)',
      control: 'text'
    },
    cover_preparation: {
      name: 'Tema possui preparação?',
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
    theme_cover_preparation_text: {
      name: 'Insira o texto da preparação do tema',
      control: 'text'
    }
  }
};
const coverTema = ({ background_img, background_img_title, title_cover, teacher, teacher_avatar, teacher_link, theme_cover_definition, theme_cover_purpose, contributors, background_text, background_text_mobile, collaboration_text, cover_preparation, theme_cover_preparation_text }) => html `

  <yduqs-cover
    background_img="${background_img}"
    background_img_title="${background_img_title}"
    title_cover="${title_cover}"
    teacher="${teacher}"
    teacher_avatar="${teacher_avatar}"
    teacher_link="${teacher_link}"
    contributors="${contributors}"
    background_text="${background_text}"
    background_text_mobile="${background_text_mobile}"
    cover_preparation="${cover_preparation}"
    collaboration_text="${collaboration_text}" >
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
  background_img: "https://via.placeholder.com/1920x1080",
  background_img_title: "Foto: Shutterstock.com",
  title_cover: "Nome do Tema",
  teacher: "Prof.ª Nome do Professor",
  teacher_avatar: "https://via.placeholder.com/128x128",
  teacher_link: "false",
  contributors: "Prof.ª  Nome do Professor Colaborador, Prof.ª Nome do Professor Colaborador",
  background_text: "primary-90",
  background_text_mobile: "false",
  collaboration_text: "Colaboração",
  cover_preparation: "true",
  theme_cover_definition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  theme_cover_purpose: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  theme_cover_preparation_text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
};
