import readme from './readme.md';
import notes from './additional-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Menu',
  component: 'yduqs-menu',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Desenvolvimento': notes },
    layout: 'centered'
  },
  argTypes: {
    menuSettings: {
      control: "text",
      name: "JSON de configuração do menu"
    }
  }
};
const Template = ({}) => html `
<div class="container">
  <yduqs-menu id="menu"></yduqs-menu>
  <div class="m-5">
    <p style="font-size:11px;color:red">A configuração exposta nos controles do storybook está disponível apenas para fins de desenvolvimento.</p>
    <p style="font-size:11px;color:red">Devido à limitações do Storybook não é possível alterar o conteúdo desse componente dinamicamente.</p>
  </div>
</div>
<script>
  var menu = document.querySelector('#menu');

  menu.initialize({
    "title": "Comportamento Animal: origens, mecanismos e relações",
    "itemList": [{
        "id": 0,
        "label": "Introdução lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        "href": "javascript:void(0);"
      },
      {
        "id": 1,
        "label": "Módulo 1",
        "detail": "1. Mecanismos de aprendizagem",
        "href": "javascript:void(0);"
      },
      {
        "id": 2,
        "label": "Módulo 2",
        "detail": "2. Origem e finalidade",
        "href": "javascript:void(0);"
      },
      {
        "id": 3,
        "label": "Módulo 3",
        "detail": "3. Interespecíficos e anormais",
        "href": "javascript:void(0);"
      }
    ]
  });
</script>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  menuSettings: '{\"title\":\"Comportamento Animal: origens, mecanismos e relações\",\"itemList\":[{\"id\":0,\"label\":\"Introdução\",\"href\":\"#intro\"},{\"id\":1,\"label\":\"Módulo 1\",\"detail\":\"1. Mecanismos de aprendizagem\",\"href\":\"#modulo-1\"},{\"id\":2,\"label\":\"Módulo 2\",\"detail\":\"2. Origem e finalidade\",\"href\":\"#modulo-2\"},{\"id\":3,\"label\":\"Módulo 3\",\"detail\":\"3. Interespecíficos e anormais\",\"href\":\"#modulo-3\"}]}'
};
