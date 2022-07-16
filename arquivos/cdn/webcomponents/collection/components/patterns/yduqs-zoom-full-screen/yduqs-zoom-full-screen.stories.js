import { html } from 'lit-html';
import readme from './readme.md';
export default {
  title: 'Patterns/Zoom Fullscreen',
  component: 'yduqs-zoom-full-screen',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
        name: 'URL da imagem',
      },
    },
    alt: {
      control: {
        type: 'text',
        name: 'Nome da imagem',
      },
    },
    min: {
      control: {
        type: 'number',
        min: 0,
        max: 10,
      },
      name: 'Mínimo',
    },
    max: {
      control: {
        type: 'number',
        min: 0,
        max: 20,
      },
      name: 'Máximo',
    },
    step: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
      },
      name: 'Passo',
    },
  },
};
const Template = ({ src, alt }) => html `
  <div class="container">
    <div class="row">
      <div class="col-12">
        <yduqs-zoom-full-screen src="${src}" alt="${alt}"></yduqs-zoom-full-screen>
      </div>
    </div>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  src: 'https://picsum.photos/900/600',
  alt: 'Lorem Picsum',
};
