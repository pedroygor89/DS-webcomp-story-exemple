import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Antes e depois',
  component: 'yduqs-before-after',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    pathBefore: {
      type: 'string',
      name: 'Imagem da esquerda:',
    },
    altBefore: {
      type: 'string',
      name: 'Texto alternativo para imagem da esquerda:',
    },
    titleBefore: {
      type: 'string',
      name: 'Título  para imagem da esquerda:',
    },
    pathAfter: {
      type: 'string',
      name: "Imagem da direita:",
    },
    altAfter: {
      type: 'string',
      name: "Texto alternativo para imagem da direita:",
    },
    titleAfter: {
      type: 'string',
      name: "Título para imagem da direita:",
    },
    caption: {
      type: 'string',
      name: "Legenda:",
    },
  }
};
const Template = ({ pathBefore, altBefore, titleBefore, pathAfter, altAfter, titleAfter, caption }) => html `
  <div class="container">
    <yduqs-before-after 
      before_img="${pathBefore}" 
      before_img_alt="${altBefore}"
      before_img_title="${titleBefore}" 
      after_img="${pathAfter}"
      after_img_alt="${altAfter}" 
      after_img_title="${titleAfter}"
      caption="${caption}">
    </yduqs-before-after>

    <script>
        window.addEventListener('DOMContentLoaded', function () {           

            document.querySelectorAll('yduqs-before-after').forEach((element, index) => {
                element.setAttribute('id', 'before-after-'+index);

                setTimeout(function(){ 
                    var sliderBeforeAfter = element.querySelector('.slider input');
                    var widthBeforeAfter = element.querySelector('.images .img2');   
                    var dragLineBeforeAfter = element.querySelector('.slider .drag-line');

                    var sliderval = sliderBeforeAfter.value;
                    dragLineBeforeAfter.style.left = sliderval + '%';
                    calc_width = (widthBeforeAfter.width * sliderval)/100 + 'px';                    
                    widthBeforeAfter.style.clip = 'rect(0px '+calc_width+' auto 0px)'; 

                    sliderBeforeAfter.addEventListener('input', () => {         
                        sliderval = sliderBeforeAfter.value;
                        dragLineBeforeAfter.style.left = sliderval + '%';
                        calc_width = (widthBeforeAfter.width * sliderval)/100 + 'px';                        
                        widthBeforeAfter.style.clip = 'rect(0px '+calc_width+' auto 0px)';
                    })

                }, 1000);
            })    
            
            window.onresize = function() {
                document.querySelectorAll('yduqs-before-after').forEach((element, index) => {
                    element.setAttribute('id', 'before-after-'+index);

                        var sliderBeforeAfter = element.querySelector('.slider input');
                        var widthBeforeAfter = element.querySelector('.images .img2');   
                        var dragLineBeforeAfter = element.querySelector('.slider .drag-line');

                        var sliderval = sliderBeforeAfter.value;
                        dragLineBeforeAfter.style.left = sliderval + '%';
                        calc_width = (widthBeforeAfter.width * sliderval)/100 + 'px';                    
                        widthBeforeAfter.style.clip = 'rect(0px '+calc_width+' auto 0px)'; 

                        sliderBeforeAfter.addEventListener('input', () => {         
                            sliderval = sliderBeforeAfter.value;
                            dragLineBeforeAfter.style.left = sliderval + '%';
                            calc_width = (widthBeforeAfter.width * sliderval)/100 + 'px';                        
                            widthBeforeAfter.style.clip = 'rect(0px '+calc_width+' auto 0px)';
                        })
                })        
            }   
        });        
    </script>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  pathBefore: "https://koenromers.com/cocoen/before.jpg",
  altBefore: "Texto alternativo para imagem da esquerda",
  titleBefore: "Título para imagem da esquerda",
  pathAfter: "https://koenromers.com/cocoen/after.jpg",
  altAfter: "Texto alternativo para imagem da direita",
  titleAfter: "Título para imagem da direita",
  caption: "Legenda do antes e depois"
};
