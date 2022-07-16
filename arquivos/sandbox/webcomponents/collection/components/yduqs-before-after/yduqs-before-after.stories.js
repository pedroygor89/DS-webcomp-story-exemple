import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Antes e depois',
  component: 'yduqs-before-after',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    pathBefore: {
      type: 'string',
      name: 'Imagem da esquerda:',
    },
    altBefore: {
      type: 'string',
      name: 'Alt para imagem da esquerda:',
    },
    titleBefore: {
      type: 'string',
      name: 'Título para imagem da esquerda:',
    },
    pathAfter: {
      type: 'string',
      name: "Imagem da direita:",
    },
    altAfter: {
      type: 'string',
      name: 'Alt para imagem da direita:',
    },
    titleAfter: {
      type: 'string',
      name: 'Título para imagem da direita:',
    },
    caption: {
      type: 'string',
      name: "Legenda:",
    }
  }
};
const Template = ({ pathBefore, altBefore, titleBefore, pathAfter, altAfter, titleAfter, caption }) => html `
<div class="container">

  <yduqs-before-after 
    before_img="${pathBefore}" 
    before_img_alt="${altBefore}" 
    before_img_title="${titleBefore}" 
    after_img="${pathAfter}"
    after_img_alt="${altAfter}" 
    after_img_title="${titleAfter}" 
    caption="${caption}">
  </yduqs-before-after>

</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  pathBefore: 'https://koenromers.com/cocoen/before.jpg',
  altBefore: 'Texto alternativo para imagem da esquerda',
  titleBefore: 'Título  para imagem da esquerda',
  pathAfter: 'https://koenromers.com/cocoen/after.jpg',
  altAfter: 'Texto alternativo para imagem da direita',
  titleAfter: 'Título para imagem da direita',
  caption: 'Legenda do antes e depois.'
};
