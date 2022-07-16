import readme from './readme.md';
import notes from './additional-notes.md';
import falamestre from './falamestre.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Gallery video',
  component: 'yduqs-Gallery-video',
  parameters: {
    markdown: readme,
    notes: { 'Notas de Desenvolvimento': notes, 'Fala, Mestre!': falamestre, 'Propriedades': readme },
    layout: 'centered',
  },
  argTypes: {
    module_number: {
      name: 'Modulo da galeria',
      control: 'text',
    },
    title_gallery: {
      name: 'Titulo da galeria',
      control: 'text',
    },
    subtitle_gallery: {
      name: 'Subtitulo da galeria',
      control: 'text',
    },
    title_video: {
      name: 'Titulo do Video',
      control: 'text',
    },
    paragraph_video: {
      name: 'Subtitulo da video',
      control: 'text',
    },
  },
};
const Template = ({ module_number, title_gallery, subtitle_gallery, title_video, paragraph_video }) => html `
<section>
    <div class="container" style="width:1500px;">
        <div class="o-demo">
            <yduqs-gallery-video 
                id="gallery"
                module_number="${module_number}"
                title_gallery="${title_gallery}"    
                subtitle_gallery="${subtitle_gallery}"  
                title_video="${title_video}"                 
                paragraph_video="${paragraph_video}" "            
            >
            </yduqs-gallery-video>
        </div>

        <div class="m-5">
            <p style="font-size:11px;color:red">A configuração exposta nos controles do storybook está disponível apenas para fins de desenvolvimento.</p>
            <p style="font-size:11px;color:red">Devido à limitações do Storybook não é possível alterar o conteúdo desse componente dinamicamente.</p>
            <p style="font-size:11px;color:red">Para mais informações sobre o import do componente <strong>verifique a aba Notes na seção Notas de Desenvolvimento.</strong></p>
        </div>

        <script>
            window.addEventListener('DOMContentLoaded', function () {
                fetch('https://stensineme.blob.core.windows.net/designsystem/test/playlist_teste.json')
                    .then(response => response.json())
                    .then(json => {
                        const playlist = document.querySelector('#playlist');
                        playlist.initialize(json);
                    })
            });
        </script>
    </div>    
</section>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  module_number: '1',
  title_gallery: 'Vem que eu te explico !',
  subtitle_gallery: 'Os vídeos a seguir abordam os assuntos mais relevantes do conteúdo que você acabou de estudar.',
  title_video: 'Título H2 lorem ipsum dolor',
  paragraph_video: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet nisl felis, sed finibus orci aliquam ut.',
};
