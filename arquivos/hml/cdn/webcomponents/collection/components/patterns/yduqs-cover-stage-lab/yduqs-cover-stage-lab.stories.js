import readme from './readme.md';
import front_notes from './front-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Laboratório/Cover de Fase Laboratório',
  component: 'yduqs-cover-stage-lab',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Utilização': front_notes },
  },
  argTypes: {
    phase_number: {
      control: {
        type: 'text',
      },
      name: 'Fase',
    },
    title: {
      control: {
        type: 'text',
      },
      name: 'Titulo',
    },
    description: {
      control: {
        type: 'text',
      },
      name: 'Descrição',
    },
    actions: {
      control: {
        type: 'text',
      },
      name: 'Ação dos botões.',
    },
  },
};
const Template = ({ phase_number, title, description, actions }) => html `
<div class="storybook" style="background-image: url('https://stensineme.blob.core.windows.net/designsystem/test/bg-dark-lab.png'); background-repeat: no-repeat; background-size: cover; height: 100%;">
  <yduqs-lab-phase phase="1" next="fase-2">
    <div slot="cover">
        <yduqs-cover-stage-lab
            phase-number=${phase_number}
            title=${title}
            description=${description}
            actions=${actions}
        ></yduqs-cover-stage-lab>
    </div>

    <div slot="trainning">
        <yduqs-ordered-dnd-trainning id="trainning" config="http://stensineme.blob.core.windows.net/hmlgrepoh/hml_repo/web-components/assets/completar-lacunas/trainning.json?_v=1.0.6"></yduqs-ordered-dnd-trainning>
    </div>

    <div slot="challenge">
        <yduqs-ordered-dnd-challenge id="challenge" config="http://stensineme.blob.core.windows.net/hmlgrepoh/hml_repo/web-components/assets/completar-lacunas/challenge.json?_v=1.0.6"></yduqs-ordered-dnd-challenge>
    </div>

    <div slot="map">
        <yduqs-virtual-map id="virtual-map" selected="1" config="http://stensineme.blob.core.windows.net/hmlgrepoh/hml_repo/web-components/assets/virtual-map/config.json?_v=1.0.6"></yduqs-virtual-map>
    </div>

    <div slot="theory">
        <div class="content">
            <div class="box-title">
                <h1>Segurança e higiene</h1>                       
            </div>
            <div class="box-body d-flex flex-column">
                <p>Que o uso dos EPIs é fundamental nas mais diversas áreas profissionais, muita gente sabe. Para que sejam de fato eficientes, é necessário atentar-se para algumas regras básicas e simples quanto à sua utilização.</p>
                <p>Dentro da CME, que é um espaço restrito, o uso do EPI configura a barreira técnica no que se refere aos cuidados de Biossegurança.</p>         
                <p>Que o uso dos EPIs é fundamental nas mais diversas áreas profissionais, muita gente sabe. Para que sejam de fato eficientes, é necessário atentar-se para algumas regras básicas e simples quanto à sua utilização.</p>
                <p>Dentro da CME, que é um espaço restrito, o uso do EPI configura a barreira técnica no que se refere aos cuidados de Biossegurança.</p>   
            </div>
        </div>
    </div>

    <script>
      setTimeout(function (){
          document.querySelectorAll('body, #root, #root-inner').forEach( el =>{
          el.style.height = "100%";
      })

        var cover = document.querySelector('.c-lab-phase-cover');
        cover.classList.remove('hide');
      }, 1000);
    </script>

  </yduqs-lab-phase>
</div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  phase_number: '1',
  title: 'Segurança e higiene',
  description: 'Antes de entrar na área mais contaminada do hospital, é preciso executar algumas medidas de segurança e higiene.',
  actions: 'theory:Teoria;trainning:Treinamento;challenge:Desafio',
};
