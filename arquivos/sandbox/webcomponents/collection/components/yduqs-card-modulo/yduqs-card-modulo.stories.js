import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Card Módulo',
  component: 'yduqs-card-modulo',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    module: {
      control: {
        type: "text",
      },
      name: "Nome do módulo",
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
    progress: {
      control: {
        type: "number",
      },
      name: "Progresso no módulo",
    },
  }
};
const Template = ({ module, title, content, progress }) => html `
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-4 my-2">
      <yduqs-card-modulo progress="${progress}">
        <yduqs-card-modulo-header>
          <span class="c-info">${module}</span>
          <h2 class="c-heading u-xlarge">
            ${title}
          </h2>
        </yduqs-card-modulo-header>
        <yduqs-card-modulo-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-modulo-body>
        <yduqs-card-modulo-footer>
          <button class="c-button c-button--ghost u-text--small">Acessar módulo</button>
        </yduqs-card-modulo-footer>
      </yduqs-card-modulo>
    </div>
    <div class="col-sm-12 col-md-4 my-2">
      <yduqs-card-modulo progress="${progress}">
        <yduqs-card-modulo-header>
          <span class="c-info">${module}</span>
          <h2 class="c-heading u-xlarge">
            ${title}
          </h2>
        </yduqs-card-modulo-header>
        <yduqs-card-modulo-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-modulo-body>
        <yduqs-card-modulo-footer>
          <button class="c-button c-button--primary u-text--small">Acessar módulo</button>
        </yduqs-card-modulo-footer>
      </yduqs-card-modulo>
    </div>
    <div class="col-sm-12 col-md-4 my-2">
      <yduqs-card-modulo>
        <yduqs-card-modulo-header>
          <span class="c-info">${module}</span>
          <h2 class="c-heading u-xlarge">
            ${title}
          </h2>
        </yduqs-card-modulo-header>
        <yduqs-card-modulo-body>
          <p class="c-paragraph">
            ${content}
          </p>
        </yduqs-card-modulo-body>
        <yduqs-card-modulo-footer>
          <button class="c-button c-button--primary u-text--small">Acessar módulo</button>
        </yduqs-card-modulo-footer>
      </yduqs-card-modulo>
    </div>
  </div>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Básico';
Default.args = {
  module: 'Módulo 1',
  title: 'Título do módulo opcional',
  content: 'Texto do módulo lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a erat tellus. Nullam commodo, purus sit amet convallis elementum, nisl erat pretium mauris, vel sodales est orci et massa.',
  progress: 50
};
