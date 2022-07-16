import readme from './readme.md';
import dev_notes from './dev-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Audiocard',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Desenvolvimento': dev_notes },
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
      name: "URL do Audio",
    },
    dark: {
      control: {
        type: "boolean",
      },
      name: "Dark mode",
    },
    outlined: {
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
    title_audio_card: {
      control: {
        type: "text",
      },
      name: "Título do audio card",
    },
    subtitle_audio_card: {
      control: {
        type: "text",
      },
      name: "subtítulo do audio card",
    },
    group: {
      control: {
        type: "boolean",
      },
      name: "Audiocard agrupado",
    },
  }
};
const Template = ({ src, dark, outlined, equal_height, title_audio_card, subtitle_audio_card, group }) => html `
    <section>
        <div class="container-sm my-5 px-0">
            <yduqs-audio-card 
                src="${src}"
                dark="${dark}" 
                outlined="${outlined}" 
                title_audio_card="${title_audio_card}" 
                subtitle_audio_card="${subtitle_audio_card}"
                equal_height="${equal_height}"
                group="${group}"
            >
            </yduqs-audio-card>
        </div>
    </section>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3",
  dark: false,
  outlined: false,
  equal_height: true,
  title_audio_card: "Título do audiocard",
  subtitle_audio_card: "The book is on the table",
  group: false
};
const ImagemAudiocard = ({ src, dark, outlined, equal_height, title_audio_card, subtitle_audio_card, group }) => html `
    <section>
        <div class="container-sm my-5 px-0">
            <yduqs-audio-card 
                src="${src}"
                dark="${dark}" 
                outlined="${outlined}" 
                title_audio_card="${title_audio_card}" 
                subtitle_audio_card="${subtitle_audio_card}"
                equal_height="${equal_height}"
                group="${group}"
            >
                <yduqs-image src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" title="" covered=false></yduqs-image>
            </yduqs-audio-card>
        </div>
    </section>
`;
export const AudiocardImage = ImagemAudiocard.bind({});
AudiocardImage.storyName = 'Audiocard com Imagem';
AudiocardImage.args = {
  src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3",
  dark: false,
  outlined: false,
  equal_height: true,
  title_audio_card: "Título do audiocard",
  subtitle_audio_card: "The book is on the table",
  group: false
};
const GroupAudiocard = ({ src, dark, outlined, equal_height, title_audio_card, subtitle_audio_card, group }) => html `
    <section>
        <div class="container my-5">
            <div class="row">    
                <div class="col-sm-12 col-md-4 my-2">
                    <yduqs-audio-card
                    src="${src}"
                    dark="${dark}" 
                    outlined="${outlined}" 
                    title_audio_card="${title_audio_card}" 
                    subtitle_audio_card="${subtitle_audio_card}"
                    equal_height="${equal_height}"
                    group="${group}">                    
                    </yduqs-audio-card>
                </div>
                <div class="col-sm-12 col-md-4 my-2">
                    <yduqs-audio-card
                    src="${src}"
                    dark="${dark}" 
                    outlined="${outlined}" 
                    title_audio_card="${title_audio_card}" 
                    subtitle_audio_card="${subtitle_audio_card}"
                    equal_height="${equal_height}"
                    group="${group}"> 
                    </yduqs-audio-card>
                </div>
                <div class="col-sm-12 col-md-4 my-2">
                    <yduqs-audio-card
                    src="${src}"
                    dark="${dark}" 
                    outlined="${outlined}" 
                    title_audio_card="${title_audio_card}" 
                    subtitle_audio_card="${subtitle_audio_card}"
                    equal_height="${equal_height}"
                    group="${group}">
                    </yduqs-audio-card>
                </div>
            </div>
        </div>
    </section>
`;
export const Group = GroupAudiocard.bind({});
Group.storyName = 'Audiocard Agrupado';
Group.args = {
  src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3",
  dark: false,
  outlined: false,
  equal_height: true,
  title_audio_card: "Título do audiocard",
  subtitle_audio_card: "The book is on the table",
  group: true
};
