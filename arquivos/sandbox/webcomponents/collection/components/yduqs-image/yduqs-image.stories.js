import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Image',
  component: 'yduqs-image',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    imgSrc: {
      type: 'string',
      name: 'Caminho da imagem',
    },
    altText: {
      type: 'string',
      name: 'Texto alternativo',
    },
    titleText: {
      type: 'string',
      name: 'Title para fonte de imagens',
    },
    isCovered: {
      type: 'boolean',
      name: 'Habilita toggle de conteúdo sensível'
    },
    width: {
      type: 'string',
      name: "Largura",
    },
    height: {
      type: 'string',
      name: "Altura",
    },
  },
};
const Template = ({ imgSrc, altText, titleText, width, height, backgroundColor, isCovered }) => html `
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <yduqs-image 
          src="${imgSrc}" 
          alt="${altText}"
          title="${titleText}"
          width="${width}"
          height="${height}"
          covered="${isCovered}"
          bgcolor="${backgroundColor}">
      </yduqs-image>
  
    </div>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  imgSrc: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  altText: 'Fuji-san',
  titleText: 'Foto: Shutterstock.com',
  width: '',
  height: '',
  isCovered: false
};
