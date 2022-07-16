import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Dropdown',
  component: 'yduqs-dropdown',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    id: {
      name: 'Insira um id',
      control: 'text'
    },
    tipo: {
      name: 'digite um tipo ( select ou dropdown)',
      control: 'text'
    }
  }
};
const iconTemplate = ({ id, tipo }) => html `
<section class="w-100">
<div class="container">
    <div class="row" id="${id}">
        <div class="col-12 col-lg-4">
            <yduqs-dropdown identificador="${id}" tipo="${tipo}">
                <div slot="optionsgroup">
    
                    <div class="option">
                        <input type="radio" class="radio" id="film" name="category" />
                        <label for="film"><i class="fas fa-chess-queen"></i> Film & Animation</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="science" name="category" />
                        <label for="science"><i class="fas fa-chess-pawn"></i> Science & Technology</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="art" name="category" />
                        <label for="art"> <i class="fas fa-chess-knight"></i> Art</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="music" name="category" />
                        <label for="music"><i class="fas fa-chess-king"></i> Music</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="travel" name="category" />
                        <label for="travel"><i class="fas fa-chess-rook"></i> Travel & Events</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="sports" name="category" />
                        <label for="sports"><i class="fas fa-chess-bishop"></i> Sports</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="news" name="category" />
                        <label for="news"><i class="fas fa-home"></i> News & Politics</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="tutorials" name="category" />
                        <label for="tutorials"><i class="fas fa-chess"></i> Tutorials</label>
                    </div>
                </div>
               
            </yduqs-dropdown> 
        </div>
    </div>
    
</div>
  
</section>
`;
export const iconSelect = iconTemplate.bind({});
iconSelect.storyName = 'Select com icones';
iconSelect.args = {
  id: 'select1',
  tipo: 'select'
};
const simpleTemplate = ({ id, tipo }) => html `
<section class="w-100">
        <div class="container">
            <div class="row" id="${id}">
                <div class="col-12 col-lg-4">
                    <yduqs-dropdown identificador="${id}" tipo="${tipo}">
                        <div slot="optionsgroup">
            
                            <div class="option">
                                <input type="radio" class="radio" id="film" name="category" />
                                <label for="film"> Film & Animation</label>
                            </div>
            
                            <div class="option">
                                <input type="radio" class="radio" id="science" name="category" />
                                <label for="science">Science & Technology</label>
                            </div>
            
                            <div class="option">
                                <input type="radio" class="radio" id="art" name="category" />
                                <label for="art">Art</label>
                            </div>
            
                            <div class="option">
                                <input type="radio" class="radio" id="music" name="category" />
                                <label for="music">Music</label>
                            </div>
            
                            <div class="option">
                                <input type="radio" class="radio" id="travel" name="category" />
                                <label for="travel">Travel & Events</label>
                            </div>
            
                            <div class="option">
                                <input type="radio" class="radio" id="sports" name="category" />
                                <label for="sports">Sports</label>
                            </div>
            
                            <div class="option">
                                <input type="radio" class="radio" id="news" name="category" />
                                <label for="news">News & Politics</label>
                            </div>
            
                            <div class="option">
                                <input type="radio" class="radio" id="tutorials" name="category" />
                                <label for="tutorials">Tutorials</label>
                            </div>
                        </div>
                       
                    </yduqs-dropdown> 
                </div>
            </div>
            
        </div>
          
    </section>

`;
export const simpleSelect = simpleTemplate.bind({});
simpleSelect.storyName = 'Select sem icones';
simpleSelect.args = {
  id: 'select2',
  tipo: 'select'
};
const dropdownTemplate = ({ id, tipo }) => html `
<section class="w-100">
<div class="container">
    <div class="row" id="${id}">
        <div class="col-12 col-lg-4">
            <yduqs-dropdown identificador="${id}" tipo="${tipo}">
                <div slot="optionsgroup">
    
                    <div class="option">
                        <input type="radio" class="radio" id="film" name="category" />
                        <label for="film"> Film & Animation</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="science" name="category" />
                        <label for="science">Science & Technology</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="art" name="category" />
                        <label for="art">Art</label>
                    </div>
    
                    <div class="option">
                        <input type="radio" class="radio" id="music" name="category" />
                        <label for="music">Music</label>
                    </div>
                </div>
               
            </yduqs-dropdown> 
        </div>
    </div>
    
</div>
  
</section>

`;
export const dropdownCheck = dropdownTemplate.bind({});
dropdownCheck.storyName = 'Dropdown com check';
dropdownCheck.args = {
  id: 'drop1',
  tipo: 'dropdown'
};
