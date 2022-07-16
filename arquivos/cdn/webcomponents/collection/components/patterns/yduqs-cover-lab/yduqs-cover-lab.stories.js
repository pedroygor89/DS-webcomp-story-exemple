import readme from './readme.md';
import front_notes from './front-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Laboratório/Cover Laboratório',
  component: 'yduqs-cover-lab',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Utilização': front_notes },
  },
  argTypes: {
    loading: {
      control: {
        type: 'boolean',
      },
      name: 'Loading',
    },
    background_img: {
      control: {
        type: 'text',
      },
      name: 'Background',
    },
    subtitle_cover: {
      control: {
        type: 'text',
      },
      name: 'Subtitulo',
    },
    title_cover: {
      control: {
        type: 'text',
      },
      name: 'Titulo',
    },
    to_page_init_lab: {
      control: {
        type: 'text',
      },
      name: 'Proxima Pagina',
    },
  },
};
const Template = ({ loading, background_img, subtitle_cover, title_cover, to_page_init_lab }) => html `
    <yduqs-cover-lab
        loading=${loading}
        background_img=${background_img}
        subtitle_cover=${subtitle_cover}
        title_cover=${title_cover}
        to_page_init_lab=${to_page_init_lab}
    >
    </yduqs-cover-lab>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  loading: true,
  background_img: 'https://stensineme.blob.core.windows.net/designsystem/test/bg-dark-lab.png',
  subtitle_cover: 'Laboratório virtual',
  title_cover: 'Centro de Materiais <br> e Esterelização',
  to_page_init_lab: 'introducao',
};
