import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Podcast',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    darkCard: {
      control: {
        type: "boolean",
      },
      name: "Card Dark",
    },
    outline: {
      control: {
        type: "boolean",
      },
      name: "Outined",
    },
    darkTitle: {
      control: {
        type: "boolean",
      },
      name: "Title Dark",
    },
    darkAudio: {
      control: {
        type: "boolean",
      },
      name: "Audio Dark",
    },
  }
};
const Template = ({ darkCard, outline, darkTitle, darkAudio }) => html `

    <section class="w-100">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 my-2">
                
                    <yduqs-card dark="${darkCard}" outlined="${outline}">
                        <yduqs-card-header>
                            <yduqs-title topic_icon="headset" dark="${darkTitle}" topic_title="Podcast"></yduqs-title>
                        </yduqs-card-header>
                        <yduqs-card-body>
                            <div class="row align-items-center justify-content-center">
                                <div class='col-12 col-md-10 col-lg-8'>    
                                    
                                    <p class="c-paragraph">
                                        Agor, o professor vicente Willians irá nos apresentar alguns destaques do conteúdo aqui estudado:
                                    </p>


                                    <div class="fullPodcast">
                                        <yduqs-audio-player dark="${darkAudio}" audio_id="4" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3">
                                        </yduqs-audio-player>
                                    </div>

                                </div>    
                            </div>    
                        </yduqs-card-body>
                    </yduqs-card>
                </div>
            </div>
        </div>      
    </section>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  darkCard: true,
  outline: false,
  darkTitle: true,
  darkAudio: false
};
