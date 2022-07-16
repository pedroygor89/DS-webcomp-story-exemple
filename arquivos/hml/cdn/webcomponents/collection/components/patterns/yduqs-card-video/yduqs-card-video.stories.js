import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Card Video',
  component: 'yduqs-card-video',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    title_video: {
      name: 'titulo do vídeo',
      control: 'text'
    },
    thumb_video: {
      name: 'thumbnail do vídeo',
      control: 'text'
    },
    link_video: {
      name: 'link do vídeo',
      control: 'text'
    },
    paragraph: {
      name: 'texto do vídeo',
      control: 'text'
    },
    time: {
      name: 'tempo de vídeo',
      control: 'text'
    },
    border_bottom: {
      name: 'Borda no bottom do card de video',
      control: 'boolean'
    },
  },
};
const Template = ({ title_video, thumb_video, link_video, paragraph, time, border_bottom }) => html `
<div class="container">
    <h2 class="c-heading">Card de video</h2>
    <div class="o-demo">
        <yduqs-card-video 
            title_video="${title_video}" 
            thumb_video="${thumb_video}"
            link_video="${link_video}"
            paragraph="${paragraph}" 
            time="${time}" 
            border_bottom="${border_bottom}">
        </yduqs-card-video>
    </div>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  title_video: "Título H2 lorem ipsum dolor",
  thumb_video: "https://koenromers.com/cocoen/after.jpg",
  link_video: "http://atreus.uoledtech.com.br/estacio/video/193763",
  paragraph: "Prof. Lorem ipsum dolor.",
  time: "20 min.",
  border_bottom: "true"
};
