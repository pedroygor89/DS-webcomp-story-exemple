import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Carousel',
  component: 'yduqs-carousel',
  parameters: {
    layout: 'centered',
    markdown: readme,
    notes: readme,
  },
};
const Template = ({ titulo, paragrafo, legenda }) => html `
<div class="container">
  <div class="row">
    <div class="col">

      <yduqs-carousel>

        <yduqs-carousel-item>
          <div class="row">
            <div class="col-12 c-carousel-item__img-container">
              <img
                src="https://via.placeholder.com/720x300"
                alt="Conjunto de pinguins agrupados durante o inverno"
                width="100%"
              >
              </img>
              <span class="u-caption">${legenda}</span>
            </div>
            <div class="col-12">
              <h3 class="c-heading">${titulo}</h3>
              <p class="u-text u-text--medium">${paragrafo}</p>
            </div>
          </div>
        </yduqs-carousel-item>

        <yduqs-carousel-item>
          <div class="row">
            <div class="col-12 c-carousel-item__img-container">
              <img
                src="https://via.placeholder.com/720x300"
                alt="Conjunto de pinguins agrupados durante o inverno"
                width="100%"
              >
              </img>
              <span class="u-caption">Conjunto de pinguins agrupados durante o inverno</span>
            </div>
            <div class="col-12">
              <h3 class="c-heading">O flautista mágico</h3>
              <p class="u-text u-text--medium"> O pinguim (RO 1971: pingüim) é uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, sendo suas asas adaptadas para promover impulso através da água. Essas aves estão amplamente distribuídas pelas águas mais frias do hemisfério sul, especialmente na Antártida e ilhas dos mares austrais, chegado à Terra do Fogo, Ilhas Malvinas e África do Sul, entre outros. Apesar da maior diversidade de pinguins encontrar-se na Antártida e regiões polares, há também espécies que habitam nos trópicos como por exemplo o pinguim-das-galápagos (Spheniscus mendiculus), nas Ilhas Galápagos.</p>
            </div>
          </div>
        </yduqs-carousel-item>

        <yduqs-carousel-item>
          <div class="row">
            <div class="col-12 c-carousel-item__img-container">
              <img
                src="https://via.placeholder.com/720x300"
                alt="Conjunto de pinguins agrupados durante o inverno"
                width="100%"
              >
              </img>
              <span class="u-caption">Conjunto de pinguins agrupados durante o inverno</span>
            </div>
            <div class="col-12">
              <h3 class="c-heading">Grilo Falante</h3>
              <p class="u-text u-text--medium"> O pinguim (RO 1971: pingüim) é uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, sendo suas asas adaptadas para promover impulso através da água. Essas aves estão amplamente distribuídas pelas águas mais frias do hemisfério sul, especialmente na Antártida e ilhas dos mares austrais, chegado à Terra do Fogo, Ilhas Malvinas e África do Sul, entre outros. Apesar da maior diversidade de pinguins encontrar-se na Antártida e regiões polares, há também espécies que habitam nos trópicos como por exemplo o pinguim-das-galápagos (Spheniscus mendiculus), nas Ilhas Galápagos.</p>
            </div>
          </div>
        </yduqs-carousel-item>
        <yduqs-carousel-item>
          <div class="row">
            <div class="col-12 c-carousel-item__img-container">
              <img
                src="https://via.placeholder.com/720x300"
                alt="Conjunto de pinguins agrupados durante o inverno"
                width="100%"
              >
              </img>
              <span class="u-caption">Conjunto de pinguins agrupados durante o inverno</span>
            </div>
              <div class="col-12">
                <h3 class="c-heading">Tartaruga</h3>
                <p class="u-text u-text--medium"> O pinguim (RO 1971: pingüim) é uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, sendo suas asas adaptadas para promover impulso através da água. Essas aves estão amplamente distribuídas pelas águas mais frias do hemisfério sul, especialmente na Antártida e ilhas dos mares austrais, chegado à Terra do Fogo, Ilhas Malvinas e África do Sul, entre outros. Apesar da maior diversidade de pinguins encontrar-se na Antártida e regiões polares, há também espécies que habitam nos trópicos como por exemplo o pinguim-das-galápagos (Spheniscus mendiculus), nas Ilhas Galápagos.</p>
              </div>
            </div>
        </yduqs-carousel-item>
      </yduqs-carousel>
    </div>
  </div>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Imagem e texto empilhados';
Default.args = {
  titulo: 'Pinguin',
  paragrafo: 'O pinguim (RO 1971: pingüim) é uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, sendo suas asas adaptadas para promover impulso através da água. Essas aves estão amplamente distribuídas pelas águas mais frias do hemisfério sul, especialmente na Antártida e ilhas dos mares austrais, chegado à Terra do Fogo, Ilhas Malvinas e África do Sul, entre outros. Apesar da maior diversidade de pinguins encontrar-se na Antártida e regiões polares, há também espécies que habitam nos trópicos como por exemplo o pinguim-das-galápagos (Spheniscus mendiculus), nas Ilhas Galápagos.',
  legenda: 'Conjunto de pinguins agrupados durante o inverno'
};
const HorizontalTemplate = ({ titulo, paragrafo, legenda }) => html `
<div class="container">
  <div class="row">
    <div class="col">

      <yduqs-carousel>

        <yduqs-carousel-item>
          <div class="row">
            <div class="col-sm-12 col-md-6 c-carousel-item__img-container--vertical">
              <img
                src="https://via.placeholder.com/356x502"
                alt="Conjunto de pinguins agrupados durante o inverno"
                width="100%"
              >
              </img>
              <span class="u-caption">${legenda}</span>
            </div>
            <div class="col-sm-12 col-md-6">
              <h3 class="c-heading">${titulo}</h3>
              <p class="u-text u-text--medium">${paragrafo}</p>
            </div>
          </div>
        </yduqs-carousel-item>

        <yduqs-carousel-item>
          <div class="row">
            <div class="col-sm-12 col-md-6 c-carousel-item__img-container--vertical">
              <img
                src="https://via.placeholder.com/356x502"
                alt="Conjunto de pinguins agrupados durante o inverno"
                width="100%"
              >
              </img>
              <span class="u-caption">Conjunto de pinguins agrupados durante o inverno</span>
            </div>
            <div class="col-sm-12 col-md-6">
              <h3 class="c-heading">O flautista mágico</h3>
              <p class="u-text u-text--medium"> O pinguim (RO 1971: pingüim) é uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, sendo suas asas adaptadas para promover impulso através da água. Essas aves estão amplamente distribuídas pelas águas mais frias do hemisfério sul, especialmente na Antártida e ilhas dos mares austrais, chegado à Terra do Fogo, Ilhas Malvinas e África do Sul, entre outros. Apesar da maior diversidade de pinguins encontrar-se na Antártida e regiões polares, há também espécies que habitam nos trópicos como por exemplo o pinguim-das-galápagos (Spheniscus mendiculus), nas Ilhas Galápagos.</p>
            </div>
          </div>
        </yduqs-carousel-item>

        <yduqs-carousel-item>
          <div class="row">
            <div class="col-sm-12 col-md-6 c-carousel-item__img-container--vertical">
              <img
                src="https://via.placeholder.com/356x502"
                alt="Conjunto de pinguins agrupados durante o inverno"
                width="100%"
              >
              </img>
              <span class="u-caption">Conjunto de pinguins agrupados durante o inverno</span>
            </div>
            <div class="col-sm-12 col-md-6">
              <h3 class="c-heading">Grilo Falante</h3>
              <p class="u-text u-text--medium"> O pinguim (RO 1971: pingüim) é uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, sendo suas asas adaptadas para promover impulso através da água. Essas aves estão amplamente distribuídas pelas águas mais frias do hemisfério sul, especialmente na Antártida e ilhas dos mares austrais, chegado à Terra do Fogo, Ilhas Malvinas e África do Sul, entre outros. Apesar da maior diversidade de pinguins encontrar-se na Antártida e regiões polares, há também espécies que habitam nos trópicos como por exemplo o pinguim-das-galápagos (Spheniscus mendiculus), nas Ilhas Galápagos.</p>
            </div>
          </div>
        </yduqs-carousel-item>
        <yduqs-carousel-item>
          <div class="row">
            <div class="col-sm-12 col-md-6 c-carousel-item__img-container--vertical">
              <img
                src="https://via.placeholder.com/356x502"
                alt="Conjunto de pinguins agrupados durante o inverno"
                width="100%"
              >
              </img>
              <span class="u-caption">Conjunto de pinguins agrupados durante o inverno</span>
            </div>
              <div class="col-sm-12 col-md-6">
                <h3 class="c-heading">Tartaruga</h3>
                <p class="u-text u-text--medium"> O pinguim (RO 1971: pingüim) é uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, sendo suas asas adaptadas para promover impulso através da água. Essas aves estão amplamente distribuídas pelas águas mais frias do hemisfério sul, especialmente na Antártida e ilhas dos mares austrais, chegado à Terra do Fogo, Ilhas Malvinas e África do Sul, entre outros. Apesar da maior diversidade de pinguins encontrar-se na Antártida e regiões polares, há também espécies que habitam nos trópicos como por exemplo o pinguim-das-galápagos (Spheniscus mendiculus), nas Ilhas Galápagos.</p>
              </div>
            </div>
        </yduqs-carousel-item>
      </yduqs-carousel>
    </div>
  </div>
</div>
`;
export const ShortDisplay = HorizontalTemplate.bind({});
ShortDisplay.storyName = 'Horizontal';
ShortDisplay.args = {
  titulo: 'Pinguin',
  paragrafo: 'O pinguim (RO 1971: pingüim) é uma ave da família Spheniscidae, altamente modificadas para a uma vida aquática, sendo suas asas adaptadas para promover impulso através da água. Essas aves estão amplamente distribuídas pelas águas mais frias do hemisfério sul, especialmente na Antártida e ilhas dos mares austrais, chegado à Terra do Fogo, Ilhas Malvinas e África do Sul, entre outros. Apesar da maior diversidade de pinguins encontrar-se na Antártida e regiões polares, há também espécies que habitam nos trópicos como por exemplo o pinguim-das-galápagos (Spheniscus mendiculus), nas Ilhas Galápagos.',
  legenda: 'Conjunto de pinguins agrupados durante o inverno'
};
