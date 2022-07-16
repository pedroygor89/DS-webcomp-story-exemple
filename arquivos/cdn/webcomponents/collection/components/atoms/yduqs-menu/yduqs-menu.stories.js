import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Menu',
  component: 'yduqs-menu',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
  /* menuSettings: {
    control: "text",
    name: "JSON de configuração do menu"
  } */
  }
};
const Template = ({}) => html `
  <yduqs-menu id="menu"></yduqs-menu>
<!-- <div class="container">
  <div class="m-5">
    <p style="font-size:11px;color:red">A configuração exposta nos controles do storybook está disponível apenas para fins de desenvolvimento.</p>
    <p style="font-size:11px;color:red">Devido à limitações do Storybook não é possível alterar o conteúdo desse componente dinamicamente.</p>
    <p style="font-size:11px;color:red">Para mais informações sobre o import do componente <strong>verifique a aba Notes na seção Notas de Desenvolvimento.</strong></p>
  </div>
</div> -->
<module id="modulo1" class="py-5">
    <yduqs-module-cover id="module1" number_module="1" title_module="Lorem ipsum dolor sit amet" objective="Aliquam tincidunt euismod rhoncus. Fusce sit amet elementum sapien, eu mollis nibh lorem ipsum dolor." img_cover="https://stensineme.blob.core.windows.net/devrepod/imgs/image5.png"></yduqs-module-cover>

    <div class="container">
        <yduqs-title topic_title="Título do tópico" />
        </yduqs-title>

        <yduqs-video-player src="https://play.yduqs.videolib.live/index.html?token=27efc41292214362beddde52d341a3f6" videoId="1">
        </yduqs-video-player>

        <yduqs-module-video id="1" module_number="1" title_gallery="Vem que eu te explico!" subtitle_gallery="Subtitulo vem que eu te explico.">
        </yduqs-module-video>

        <yduqs-questions exercise_id="1"></yduqs-questions>

        <yduqs-audio-player dark="false" audio_id="1" src="./podcast/678b17fd-439f-45d7-85ff-28baf30dbe71.mp3"></yduqs-audio-player>

        <a href="javascript:CriaPDF()" class="btn btn-apostila"><i class="material-icons">picture_as_pdf</i> Baixar conteúdo</a>
    </div>



</module>

<script>document.addEventListener("DOMContentLoaded", function () { qStorybook(); });</script>

`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
/* menuSettings: '{\"title\":\"Comportamento Animal: origens, mecanismos e relações\",\"itemList\":[{\"id\":0,\"label\":\"Introdução\",\"href\":\"#intro\"},{\"id\":1,\"label\":\"Módulo 1\",\"detail\":\"1. Mecanismos de aprendizagem\",\"href\":\"#modulo-1\"},{\"id\":2,\"label\":\"Módulo 2\",\"detail\":\"2. Origem e finalidade\",\"href\":\"#modulo-2\"},{\"id\":3,\"label\":\"Módulo 3\",\"detail\":\"3. Interespecíficos e anormais\",\"href\":\"#modulo-3\"}]}' */
};
