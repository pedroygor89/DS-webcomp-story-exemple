import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Quote',
  component: 'yduqs-quote',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    quoteSize: {
      control: {
        type: "select",
        options: ["small", "medium", "big"]
      },
      name: "Tamanho",
    },
    colorMode: {
      control: {
        type: "boolean",
      },
      name: "Dark mode",
    },
    path: {
      control: {
        type: "text",
      },
      name: "Imagem",
    },
    content: {
      control: {
        type: "text",
      },
      name: "Conteúdo da citação",
    },
    cite: {
      control: {
        type: "text",
      },
      name: "Citado por:",
    },
  }
};
const Template = ({ colorMode, cite, content, quoteSize }) => html `
<div class="container">

  <yduqs-quote size="${quoteSize}" dark="${colorMode}">
    <yduqs-quote-body>
      <p class="c-paragraph">${content}</p>
      <cite class="c-cite"> ${cite} </cite>
    </yduqs-quote-body>
  </yduqs-quote>

</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Básico';
Default.args = {
  colorMode: false,
  content: 'Images, in general, are a great learning tool. They help online learners associate information with a memorable photo, making it easier to retain and recall that information. However, when using images, you need to be careful as to who your target audience is and how it relates to the information you want to relay. The last thing you need is a controversial image that gets them talking about the picture instead of the topic. How can you tell if an image will stir up controversy and make certain online learners feel uncomfortable? The key is audience research. This way you will know which topics are sensitive and you won’t use any images that may offend or distract them in any way.”',
  cite: 'Christopher Pappas, 2021',
  path: 'N/A',
  quoteSize: 'small'
};
const ImageFullTemplate = ({ colorMode, path, cite, content, quoteSize }) => html `
<div class="container">

  <yduqs-quote size="${quoteSize}" dark="${colorMode}">
      <yduqs-quote-image path="${path}" class="col-sm-12 col-md-4"></yduqs-quote-image>
      <yduqs-quote-body class="col-sm-12 col-md-8">
        <p class="c-paragraph">${content}</p>
        <cite class="c-cite"> ${cite} </cite>
      </yduqs-quote-body>
  </yduqs-quote>

</div>
`;
export const ImageFull = ImageFullTemplate.bind({});
ImageFull.storyName = 'Imagem no cabeçalho';
ImageFull.args = {
  colorMode: false,
  content: 'Habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eros nisl, pharetra ac volutpat in, sagittis non sem. Sed venenatis nulla a gravida hendrerit. Aliquam viverra nisl sit amet tellus consequat, vel consectetur risus molestie. Aenean ipsum ligula, molestie quis pulvinar ut, bibendum nec tellus."',
  cite: 'Christopher Pappas, 2021',
  path: 'https://conteudo.imguol.com.br/c/bol/fotos/8c/2018/01/18/charles-darwin-1516323425688_300x300.jpg.webp',
  quoteSize: 'small'
};
