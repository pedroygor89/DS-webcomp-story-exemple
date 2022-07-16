import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Card Comparativo',
  component: 'yduqs-card-comparativo',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    colorMode: {
      control: {
        type: "boolean",
      },
      name: "Modo cores invertidas",
    },
    outline: {
      control: {
        type: "boolean",
      },
      name: "Estilo outline",
    },
    title01: {
      control: {
        type: "text",
      },
      name: "Título do card 1",
    },
    content01: {
      control: {
        type: "text",
      },
      name: "Conteúdo do card 1",
    },
    title02: {
      control: {
        type: "text",
      },
      name: "Título do card 2",
    },
    content02: {
      control: {
        type: "text",
      },
      name: "Conteúdo do card 02",
    },
  }
};
const Template = ({ colorMode, outline, title01, content01, title02, content02 }) => html `
<div class="container">
  <div class="row">
    <div class="col-12 my-2">
      <yduqs-card-comparativo dark="${colorMode}" outline="${outline}">
        <yduqs-card-comparativo-item slot="item-a">
          <yduqs-card-comparativo-header>
            <h2 class="c-heading">
              ${title01}
            </h2>
          </yduqs-card-comparativo-header>
          <yduqs-card-comparativo-body>
            <p class="c-paragraph">
              ${content01}
            </p>
          </yduqs-card-comparativo-body>
        </yduqs-card-comparativo-item>
        <yduqs-card-comparativo-item slot="item-b">
          <yduqs-card-comparativo-header>
            <h2 class="c-heading">
              ${title02}
            </h2>
          </yduqs-card-comparativo-header>
          <yduqs-card-comparativo-body>
            <p class="c-paragraph">
              ${content02}
            </p>
          </yduqs-card-comparativo-body>
        </yduqs-card-comparativo-item>
      </yduqs-card-comparativo>
    </div>
  </div>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Básico';
Default.args = {
  colorMode: false,
  outline: false,
  title01: 'Título do card lorem ipsum dolor sit amet consectetur',
  content01: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.',
  title02: 'Título do card lorem ipsum dolor sit amet consectetur',
  content02: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.'
};
const ImageComparisonTemplate = ({ colorMode, outline, title01, content01, title02, content02 }) => html `
<div class="container">
  <div class="row">
    <div class="col-12 my-2">
      <yduqs-card-comparativo dark="${colorMode}" outline="${outline}">
        <yduqs-card-comparativo-item slot="item-a">
          <yduqs-card-comparativo-header>
            <img
              src="https://via.placeholder.com/280x157"
              alt="Placeholder de imagem"
              class="o-image"
            >
            <h2 class="c-heading">
              ${title01}
            </h2>
          </yduqs-card-comparativo-header>
          <yduqs-card-comparativo-body>
            <p class="c-paragraph">
              ${content01}
            </p>
          </yduqs-card-comparativo-body>
        </yduqs-card-comparativo-item>
        <yduqs-card-comparativo-item slot="item-b">
          <yduqs-card-comparativo-header>
            <img
              src="https://via.placeholder.com/280x157"
              alt="Placeholder de imagem"
              class="o-image"
            >
            <h2 class="c-heading">
              ${title02}
            </h2>
          </yduqs-card-comparativo-header>
          <yduqs-card-comparativo-body>
            <p class="c-paragraph">
              ${content02}
            </p>
          </yduqs-card-comparativo-body>
        </yduqs-card-comparativo-item>
      </yduqs-card-comparativo>
    </div>
  </div>
</div>
`;
export const ImageComparison = ImageComparisonTemplate.bind({});
ImageComparison.storyName = 'Entre imagens';
ImageComparison.args = {
  colorMode: false,
  outline: false,
  title01: 'Título do card lorem ipsum dolor sit amet consectetur',
  content01: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.',
  title02: 'Título do card lorem ipsum dolor sit amet consectetur',
  content02: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.'
};
const IconHeaderTemplate = ({ colorMode, outline, title01, content01, title02, content02 }) => html `
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
    <div class="col-12 my-2">
      <yduqs-card-comparativo dark="${colorMode}" outline="${outline}">
        <yduqs-card-comparativo-item slot="item-a">
          <yduqs-card-comparativo-header>
            <span class="c-card-comparativo__icon icon-header"></span>
            <h2 class="c-heading">
              ${title01}
            </h2>
          </yduqs-card-comparativo-header>
          <yduqs-card-comparativo-body>
            <p class="c-paragraph">
              ${content01}
            </p>
          </yduqs-card-comparativo-body>
        </yduqs-card-comparativo-item>
        <yduqs-card-comparativo-item slot="item-b">
          <yduqs-card-comparativo-header>
            <span class="c-card-comparativo__icon icon-header"></span>
            <h2 class="c-heading">
              ${title02}
            </h2>
          </yduqs-card-comparativo-header>
          <yduqs-card-comparativo-body>
            <p class="c-paragraph">
              ${content02}
            </p>
          </yduqs-card-comparativo-body>
        </yduqs-card-comparativo-item>
      </yduqs-card-comparativo>
    </div>
  </div>
</div>
`;
export const IconHeader = IconHeaderTemplate.bind({});
IconHeader.storyName = 'Icone no cabeçalho';
IconHeader.args = {
  colorMode: false,
  outline: false,
  title01: 'Título do card lorem ipsum dolor sit amet consectetur',
  content01: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.',
  title02: 'Título do card lorem ipsum dolor sit amet consectetur',
  content02: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.'
};
