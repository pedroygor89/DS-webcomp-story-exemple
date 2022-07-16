import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Section - Cover',
  component: 'yduqs-section-cover',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    section_image: {
      name: 'Escolha uma imagem',
      control: 'text',
    },
    section_icon: {
      name: 'Escolha um ícone',
      control: 'text',
    },
    section_heading: {
      name: 'Escolha um heading',
      control: 'text',
    },
    section_subheading: {
      name: 'Escolha um subheading',
      control: 'text',
    }
  }
};
const Template = ({ section_image, section_icon, section_heading, section_subheading }) => html `
    <yduqs-section-cover section_image="${section_image}" section_icon="${section_icon}">
          <div slot="section-heading">
            ${section_heading}
          </div>
          <div slot="section-subheading">
            ${section_subheading}
          </div>
    </yduqs-section-cover>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  section_image: 'http://placeimg.com/1920/1080/tech',
  section_icon: 'emoji_events',
  section_heading: 'Lorem Ipsum.',
  section_subheading: 'Ipsum lorem, lorem ipsum?',
};
