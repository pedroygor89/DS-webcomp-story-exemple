import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Video Player',
  component: 'yduqs-video-player',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    videoSrc: {
      control: "text",
      name: "Path do caminho do arquivo de video"
    },
    videoId: {
      control: "text",
      name: "Id do video"
    },
    isCovered: {
      type: 'boolean',
      name: 'Imagem com conteúdo sensível?'
    },
    width: {
      type: 'string',
      name: "Largura"
    },
    height: {
      type: 'string',
      name: "Altura"
    },
  }
};
const Template = ({ videoSrc, videoId, isCovered, width, height }) => html `

<div class="row">
  <div class="col-sm-12 col-md-6">

    <yduqs-video-player 
      src="${videoSrc}" 
      videoId="${videoId}"
      width="${width}"
      height="${height}"
      covered="${isCovered}">
    </yduqs-video-player>

  </div>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  videoSrc: 'http://atreus.uoledtech.com.br/estacio/video/193763',
  videoId: 'ID_DO_VIDEO',
  width: '',
  height: '',
  isCovered: true
};
