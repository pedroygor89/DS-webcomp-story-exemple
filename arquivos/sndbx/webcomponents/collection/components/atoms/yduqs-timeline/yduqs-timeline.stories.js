import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Timeline',
  component: 'yduqs-timeline',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    icon: {
      type: 'string',
      name: 'Ícone',
    },
    title: {
      type: 'string',
      name: 'Título',
    },
    subtitle: {
      type: 'string',
      name: 'Subtítulo',
    },
    paragraph: {
      type: 'string',
      name: 'Texto',
    },
  }
};
const Template = ({ title, subtitle, paragraph, icon }) => html `

  <yduqs-timeline>

    <yduqs-timeline-item icon="${icon}">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <span class="c-timeline-item__title">${title}</span>
          <span class="c-timeline-item__subtitle">${subtitle}</span>
          <p class="c-timeline-item__paragraph">${paragraph}</p>
        </div>
        <div class="col-sm-12 col-md-6 align-self-center">
          <yduqs-image
            class="c-timeline-item__image"
            src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Fuji-san"
            width="250"
            height="250"
            covered="false">
          </yduqs-image>
        </div>
      </div>
    </yduqs-timeline-item>

    <yduqs-timeline-item icon="${icon}">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <span class="c-timeline-item__title">${title}</span>
          <span class="c-timeline-item__subtitle">${subtitle}</span>
          <p class="c-timeline-item__paragraph">${paragraph}</p>
        </div>
        <div class="col-sm-12 col-md-6 align-self-center">
          <yduqs-image
            class="c-timeline-item__image"
            src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Fuji-san"
            width="250"
            height="250"
            covered="false">
          </yduqs-image>
        </div>
      </div>
    </yduqs-timeline-item>

    <yduqs-timeline-item icon="${icon}">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <span class="c-timeline-item__title">${title}</span>
          <span class="c-timeline-item__subtitle">${subtitle}</span>
          <p class="c-timeline-item__paragraph">${paragraph}</p>
        </div>
        <div class="col-sm-12 col-md-6 align-self-center">
          <yduqs-image
            class="c-timeline-item__image"
            src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Fuji-san"
            width="250"
            height="250"
            covered="false">
          </yduqs-image>
        </div>
      </div>
    </yduqs-timeline-item>

    <yduqs-timeline-item last icon="${icon}">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <span class="c-timeline-item__title">${title}</span>
          <span class="c-timeline-item__subtitle">${subtitle}</span>
          <p class="c-timeline-item__paragraph">${paragraph}</p>
        </div>
        <div class="col-sm-12 col-md-6 align-self-center">
          <yduqs-image
            class="c-timeline-item__image"
            src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt="Fuji-san"
            width="250"
            height="250"
            covered="false">
          </yduqs-image>
        </div>
      </div>
    </yduqs-timeline-item>

  </yduqs-timeline>

`;
export const Default = Template.bind({});
Default.storyName = 'Vertical';
Default.args = {
  icon: 'flag',
  title: 'Título da timeline lorem ipsum',
  subtitle: 'Subtítulo da timeline lorem ipsum',
  paragraph: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum.'
};
const ShortDisplayTemplate = ({ title, paragraph }) => html `

  <yduqs-timeline horizontal="true">

    <yduqs-timeline-item>
        <div class="timeAlign">
            <span class="c-timeline-item__title">${title}</span>
            <p class="c-timeline-item__paragraph">${paragraph}</p>
        </div>
    </yduqs-timeline-item>

    <yduqs-timeline-item>
        <div class="timeAlign">
            <span class="c-timeline-item__title">1950</span>
            <p class="c-timeline-item__paragraph">In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum.</p>
        </div>
    </yduqs-timeline-item>

    <yduqs-timeline-item>

        <div class="timeAlign">
            <span class="c-timeline-item__title">1977</span>
            <p class="c-timeline-item__paragraph">In pulvinar odio nunc, ut commodo lacus feugiat in.</p>
        </div>
    </yduqs-timeline-item>

    <yduqs-timeline-item>

        <div class="timeAlign">
            <span class="c-timeline-item__title">2000</span>
            <p class="c-timeline-item__paragraph">In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum.</p>
        </div>
    </yduqs-timeline-item>

    <yduqs-timeline-item last>

        <div class="timeAlign">
            <span class="c-timeline-item__title">2020</span>
            <p class="c-timeline-item__paragraph">In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices.</p>
        </div>
    </yduqs-timeline-item>

</yduqs-timeline>
`;
export const ShortDisplay = ShortDisplayTemplate.bind({});
ShortDisplay.storyName = 'Hotizontal';
ShortDisplay.args = {
  icon: 'N/A',
  title: '1954',
  subtitle: 'N/A',
  paragraph: 'In pulvinar odio nunc, ut commodo lacus feugiat in. In imperdiet tortor ac risus hendrerit ultrices, suspendisse potenti. Maecenas vitae elit ligula. Sed sed turpis purus, nam in enim metus, pellentesque dictum.'
};
