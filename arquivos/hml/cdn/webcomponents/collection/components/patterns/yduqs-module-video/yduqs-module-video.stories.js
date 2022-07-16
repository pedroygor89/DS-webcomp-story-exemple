import readme from './readme.md';
import notes from './additional-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Modulo de Video',
  component: 'yduqs-module-video',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Desenvolvimento': notes },
    layout: 'centered'
  },
  argTypes: {
    module_number: {
      name: 'Modulo da galeria',
      control: 'text'
    },
    title_gallery: {
      name: 'Titulo da galeria',
      control: 'text'
    },
    subtitle_gallery: {
      name: 'Subtitulo da galeria',
      control: 'text'
    },
  },
};
const Template = ({ module_number, title_gallery, subtitle_gallery }) => html `
<section>
    <div class="container" style="width:1500px;">
        <div class="o-demo">
            <yduqs-module-video
                id="gallery"
                module_number="${module_number}"
                title_gallery="${title_gallery}"
                subtitle_gallery="${subtitle_gallery}">
            </yduqs-module-video>
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
  module_number: "1",
  title_gallery: "Vem que eu te explico !",
  subtitle_gallery: "Os vídeos a seguir abordam os assuntos mais relevantes do conteúdo que você acabou de estudar."
};
