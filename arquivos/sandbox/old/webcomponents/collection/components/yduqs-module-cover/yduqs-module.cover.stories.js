import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Module-Cover',
  component: 'yduqs-module-cover',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    number_module: {
      name: 'Numero do Módulo',
      control: 'text'
    },
    title_module: {
      name: 'Titulo',
      control: 'text'
    },
    objective: {
      name: 'Objetivo',
      control: 'text'
    },
    title_read_time: {
      name: 'Titulo do tempo de leitura',
      control: 'text'
    },
    read_time: {
      name: 'Tempo de leitura',
      control: 'text'
    },
    title_midia_time: {
      name: 'Titulo do tempo de mídia',
      control: 'text'
    },
    midia_time: {
      name: 'Tempo de mídia',
      control: 'text'
    },
    img_cover: {
      name: 'URL da imagem de capa',
      control: 'text'
    }
  }
};
const Template = ({ number_module, title_module, objective, title_read_time, read_time, title_midia_time, midia_time, img_cover }) => html `  
    <yduqs-module-cover id="module1" number_module ="${number_module}" title_module="${title_module}" objective="${objective}" 
    title_read_time="${title_read_time}" read_time="${read_time}" title_midia_time="${title_midia_time}"  midia_time="${midia_time}"
    img_cover="${img_cover}"></yduqs-module-cover>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  number_module: '1',
  title_module: 'Módulo 1',
  objective: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt euismod rhoncus. Fusce sit amet elementum sapien, eu mollis nibh lorem ipsum dolor.',
  title_read_time: 'Tempo de leitura',
  read_time: '45 min.',
  title_midia_time: 'Tempo de mídia',
  midia_time: '22 min.',
  img_cover: 'http://ftp.novatech.net.br/dev.repo.d/imgs/image5.png'
};
