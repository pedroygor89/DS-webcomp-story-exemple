import readme from './readme.md';
import notes from './additional-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Paginação',
  component: 'yduqs-pager',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Desenvolvimento': notes },
    layout: 'centered'
  },
  argTypes: {},
};
const Template = () => html `
<section>
    <div data-page="1" data-module="apresentacao" style="width: calc(100vw - 50px); height: calc(100vh - 121px);">  
        <h1>Apresentação</h1> 
    </div>
    <div data-page="2" data-module="1" style="width: calc(100vw - 50px); height: calc(100vh - 121px);">
        <h1>Módulo 1</h1> 
    </div>
    <div data-page="3" data-module="2" style="width: calc(100vw - 50px); height: calc(100vh - 121px);">
        <h1>Módulo 2</h1>
    </div>
    <yduqs-pager id="pager"></yduqs-pager>
</section>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {};
