import readme from './readme.md';
import notes from './additional-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Playlist video',
  component: 'yduqs-playlist-video',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Desenvolvimento': notes },
    layout: 'centered'
  },
  argTypes: {
    module_number: {
      name: 'Modulo da playlist',
      control: 'text'
    },
  },
};
const Template = ({ module_number }) => html `
<div class="container">
    <h2 class="c-heading">Playlist de video</h2>
    <div class="o-demo">
        <yduqs-playlist-video id="playlist" module_number="${module_number}"></yduqs-playlist-video>
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
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  module_number: "1"
};
