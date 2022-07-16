import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Contador',
  component: 'yduqs-countdown',
  parameters: {
    markdown: readme,
    notes: readme
  },
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
      name: 'Identificador (id)',
    },
    time: {
      control: { type: 'number' },
      name: 'Tempo',
    },
    warningMarker: {
      control: { type: 'number' },
      name: 'Marcado de alerta (%)',
    },
  },
};
const Template = ({ id, time, warningMarker }) => html `
  <div style="margin: 50px">
    <yduqs-countdown id="${id}" time="${time}" warningMarker="${warningMarker}"></yduqs-countdown>
    <button onclick='start()'>Iniciar</button> - 
    <button onclick='pause()'>Pausar</button> - 
    <button onclick='stop()'>Parar</button> - 
    <button onclick='restart()'>Re iniciar</button>
  </div>
  <script>
  var elem = document.querySelector('yduqs-countdown#${id}');
  
  function start () {
    elem.start();
  }
  
  function pause () {
    elem.pause();
  }
  
  function stop () {
    elem.stop();
  }

  function restart () {
    elem.restart();
  }

</script>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  id: 'countdown',
  time: 120,
  warningMarker: 20,
};
