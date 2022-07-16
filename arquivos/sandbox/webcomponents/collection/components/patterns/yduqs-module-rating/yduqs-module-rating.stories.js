import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Rating do Modulo do Tema',
  component: 'yduqs-module-rating',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    cta: {
      name: 'Insira o texto',
      control: 'text'
    },
    icon: {
      name: 'Insira um ícone do materialize icons',
      control: 'text'
    },
    tamanho: {
      type: "select",
      options: ["xsmall", "small", "medium", "super", "xlarge", "large"]
    },
    module: {
      name: 'Insira o módulo',
      control: 'text'
    },
  },
};
const Template = ({ cta, icon, tamanho, module }) => html `
    <button id="open-rating" class="c-button rating">Open Module Rating</button>
    <p style="font-size:11px;color:red">Componente disponível somente na aba Cavas</p>


    <div class="rating-storybook" style="min-height:300px;">
        <style>.c-rating {display: block;}</style>
        <yduqs-module-rating cta="${cta}" icon="${icon}" tamanho="${tamanho}" module="${module}"></yduqs-module-rating>
        <script src="https://stensineme.blob.core.windows.net/designsystem/test/yduqs_module_rating.js"></script>
    </div>

    <script>
        var module_rating = document.querySelector('.c-module-rating');
        var fechar_rating = document.querySelector('.c-module-rating__icon-box');

        var btnRating = document.getElementById('open-rating');

        btnRating.addEventListener('click', function(){             
            setTimeout(function(){ module_rating.classList.add('open-rating');  }, 1000);          
            module_rating.classList.remove('d-none');
        });

        
        fechar_rating.addEventListener('click', function(){
            module_rating.removeClass('open-rating')
            setTimeout(function(){ module_rating.addClass('d-none'); }, 1000);
        });

  </script>

`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  cta: 'Lorem ipsum',
  icon: 'star',
  tamanho: 'large',
  module: '1'
};
