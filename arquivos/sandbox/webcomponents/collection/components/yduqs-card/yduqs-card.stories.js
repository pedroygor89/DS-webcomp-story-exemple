import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Card',
  component: 'yduqs-card',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    colorMode: {
      control: {
        type: "boolean",
      },
      name: "Dark mode",
    },
    outlinedMode: {
      control: {
        type: "boolean",
      },
      name: "Outlined",
    },
    title: {
      control: {
        type: "text",
      },
      name: "Título do card",
    },
    content: {
      control: {
        type: "text",
      },
      name: "Conteúdo do card",
    },
  }
};
const Template = ({ colorMode, title, content, outlinedMode }) => html `
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-4 my-2">
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}">
        <yduqs-card-header>
          <h2 class="c-heading u-xlarge">
            ${title}
          </h2>
        </yduqs-card-header>
        <yduqs-card-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-body>
      </yduqs-card>
    </div>
    <div class="col-sm-12 col-md-4 my-2">
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}">
        <yduqs-card-header>
          <h2 class="c-heading u-xlarge">
            ${title}
          </h2>
        </yduqs-card-header>
        <yduqs-card-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-body>
      </yduqs-card>
    </div>
    <div class="col-sm-12 col-md-4 my-2">
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}">
        <yduqs-card-header>
          <h2 class="c-heading u-xlarge">
            ${title}
          </h2>
        </yduqs-card-header>
        <yduqs-card-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-body>
      </yduqs-card>
    </div>
  </div>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Básico';
Default.args = {
  colorMode: false,
  outlinedMode: false,
  title: 'Título do card lorem ipsum dolor sit amet consectetur',
  content: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.'
};
const ImageFullTemplate = ({ colorMode, title, content, outlinedMode }) => html `
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-4 my-2">
      <img
        src="https://via.placeholder.com/64x64"
        alt="Placeholder de imagem"
        class="o-image"
      >
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}">
        <yduqs-card-header>
          <h2 class="c-heading u-xlarge">
            ${title}
          </h2>
        </yduqs-card-header>
        <yduqs-card-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-body>
      </yduqs-card>
    </div>
    <div class="col-sm-12 col-md-4 my-2">
      <img
        src="https://via.placeholder.com/64x64"
        alt="Placeholder de imagem"
        class="o-image"
      >
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}">
        <yduqs-card-header>
          <h2 class="c-heading u-xlarge">
            ${title}
          </h2>
        </yduqs-card-header>
        <yduqs-card-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-body>
      </yduqs-card>
    </div>
    <div class="col-sm-12 col-md-4 my-2">
      <img
        src="https://via.placeholder.com/64x64"
        alt="Placeholder de imagem"
        class="o-image"
      >
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}">
        <yduqs-card-header>
          <h2 class="c-heading u-xlarge">
            ${title}
          </h2>
        </yduqs-card-header>
        <yduqs-card-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-body>
      </yduqs-card>
    </div>
  </div>
</div>
`;
export const ImageFull = ImageFullTemplate.bind({});
ImageFull.storyName = 'Imagem no cabeçalho';
ImageFull.args = {
  colorMode: false,
  outlinedMode: false,
  title: 'Título do card lorem ipsum dolor sit amet consectetur',
  content: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.'
};
const IconHeaderTemplate = ({ colorMode, outlinedMode, altImgText, titleImgText, widthImg, heightImg, isCoveredImg, backgroundColorImg, title, content }) => html `
<style>
  .icon-header {
    background: url('https://via.placeholder.com/64x64');
    display: block;
    width: 64px;
    height: 64px;
  }
</style>
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-6 my-2">
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}">
        <yduqs-card-header>
          <span class="c-card__icon d-block">
            <yduqs-image
                src="https://via.placeholder.com/64x64" 
                alt="${altImgText}"
                title="${titleImgText}"
                width="${widthImg}"
                height="${heightImg}"
                covered="${isCoveredImg}"
                bgcolor="${backgroundColorImg}">
            </yduqs-image>
          </span>
          <h2 class="c-heading u-xlarge">${title}</h2>
        </yduqs-card-header>
        <yduqs-card-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-body>    
      </yduqs-card> 
    </div>
    <div class="col-sm-12 col-md-6 my-2">
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}">
        <yduqs-card-header>
          <span class="c-card__icon d-block">
            <yduqs-image
                src="https://via.placeholder.com/64x64" 
                alt="${altImgText}"
                title="${titleImgText}"
                width="${widthImg}"
                height="${heightImg}"
                covered="${isCoveredImg}"
                bgcolor="${backgroundColorImg}">
            </yduqs-image>
          </span>
          <h2 class="c-heading u-xlarge">${title}</h2>
        </yduqs-card-header>
    </div>
  </div>
</div>
`;
export const IconHeader = IconHeaderTemplate.bind({});
IconHeader.storyName = 'Icone no cabeçalho';
IconHeader.args = {
  colorMode: false,
  outlinedMode: false,
  altImgText: 'alt da imagem',
  titleImgText: 'texto da imagem',
  widthImg: '64px',
  heightImg: '64px',
  isCoveredImg: 'false',
  backgroundColorImg: 'yellow',
  title: 'Título do card lorem ipsum dolor sit amet consectetur',
  content: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.'
};
