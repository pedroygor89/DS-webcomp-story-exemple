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
    equal_height: {
      control: {
        type: "boolean",
      },
      name: "Alturas iguais",
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
const Template = ({ colorMode, title, content, outlinedMode, equal_height }) => html `
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-4 my-2">
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}" equal_height="${equal_height}">
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
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}" equal_height="${equal_height}">
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
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}" equal_height="${equal_height}">
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
  equal_height: false,
  title: 'Título do card lorem ipsum dolor sit amet consectetur',
  content: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.'
};
const ImageFullTemplate = ({ colorMode, title, content, outlinedMode, equal_height }) => html `

<div class="c-card-images">
    <div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-4 my-2">
        <yduqs-card dark="${colorMode}" outlined="${outlinedMode}" equal_height="${equal_height}">
            <yduqs-image
                src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                alt="Fuji-san" covered="false">
            </yduqs-image>
            <yduqs-card-content>
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
            <yduqs-card-content>
        </yduqs-card>
        </div>
        <div class="col-sm-12 col-md-4 my-2">
        <yduqs-card dark="${colorMode}" outlined="${outlinedMode}" equal_height="${equal_height}">
            <yduqs-image
                src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                alt="Fuji-san" covered="false">
            </yduqs-image>
            <yduqs-card-content>
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
            <yduqs-card-content>
        </yduqs-card>
        </div>
        <div class="col-sm-12 col-md-4 my-2">
        <yduqs-card dark="${colorMode}" outlined="${outlinedMode}" equal_height="${equal_height}">
            <yduqs-image
                src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                alt="Fuji-san" covered="false">
            </yduqs-image>
            <yduqs-card-content>
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
            <yduqs-card-content>
        </yduqs-card>
        </div>
    </div>
    </div>
</div>
`;
export const ImageFull = ImageFullTemplate.bind({});
ImageFull.storyName = 'Imagem no cabeçalho';
ImageFull.args = {
  colorMode: false,
  outlinedMode: false,
  equal_height: false,
  title: 'Título do card lorem ipsum dolor sit amet consectetur',
  content: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.'
};
const IconHeaderTemplate = ({ colorMode, title, content, outlinedMode, equal_height }) => html `
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
      <yduqs-card dark="${colorMode}" outlined="${outlinedMode}" equal_height="${equal_height}">
        <yduqs-card-header>
          <span class="c-card__icon icon-header"></span>
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
    <div class="col-sm-12 col-md-6 my-2">
     <yduqs-card dark="${colorMode}" outlined="${outlinedMode}" equal_height="${equal_height}">
        <yduqs-card-header>
          <span class="c-card__icon icon-header"></span>
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
export const IconHeader = IconHeaderTemplate.bind({});
IconHeader.storyName = 'Icone no cabeçalho';
IconHeader.args = {
  colorMode: false,
  outlinedMode: false,
  equal_height: false,
  title: 'Título do card lorem ipsum dolor sit amet consectetur',
  content: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum, tortor id cursus posuere.'
};
