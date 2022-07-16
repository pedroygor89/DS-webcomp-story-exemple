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
    audioSrc: {
      control: "text",
      name: "Path do arquivo de audio"
    },
  }
};
const Template = ({ audioSrc }) => html `
  <yduqs-audio-player id="meuPlayer" src="${audioSrc}"></yduqs-audio-player>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  audioSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3'
};
const ShortDisplayTemplate = ({ audioSrc }) => html `
  <yduqs-audio-player src="${audioSrc}" shortdisplay></yduqs-audio-player>
`;
export const ShortDisplay = ShortDisplayTemplate.bind({});
ShortDisplay.storyName = 'Short Display';
ShortDisplay.args = {
  audioSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3'
};
