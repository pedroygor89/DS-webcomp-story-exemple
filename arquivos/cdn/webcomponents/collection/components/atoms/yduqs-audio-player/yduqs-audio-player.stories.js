import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Audio Player',
  component: 'yduqs-audio-player',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    audio_id: {
      control: "text",
      name: "Id do audio"
    },
    audioSrc: {
      control: "text",
      name: "Path do arquivo de audio"
    },
  }
};
const Template = ({ audio_id, audioSrc }) => html `
  <yduqs-audio-player audio_id="${audio_id}" src="${audioSrc}"></yduqs-audio-player>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  audio_id: '1',
  audioSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3'
};
const ShortDisplayTemplate = ({ audio_id, audioSrc }) => html `
  <yduqs-audio-player audio_id="${audio_id}" src="${audioSrc}"></yduqs-audio-player>
`;
export const ShortDisplay = ShortDisplayTemplate.bind({});
ShortDisplay.storyName = 'Short Display';
ShortDisplay.args = {
  audio_id: '2',
  audioSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3'
};
