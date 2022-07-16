import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Componentes/Destaque de Texto',
  component: 'yduqs-destaque-texto',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "big"]
      },
      name: "Tamanho",
    }
  },
};
const Template = ({ size }) => html `
<section>
    <div class="container">
        <yduqs-destaque-texto size="${size}">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Duis efficitur sit amet urna vel vestibulum. Sed scelerisque a enim vitae dictum. 
                Morbi ac porta nulla, sit amet pretium lacus. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Duis efficitur sit amet urna vel vestibulum. 
                Sed scelerisque a enim vitae dictum. Morbi ac porta nulla, sit amet pretium lacus. 
            </p>
        </yduqs-destaque-texto>
    </div>
</section> 
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  size: "medium",
};
