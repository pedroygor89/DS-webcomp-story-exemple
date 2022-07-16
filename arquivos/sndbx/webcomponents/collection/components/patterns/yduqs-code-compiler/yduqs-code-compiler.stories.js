import readme from './readme.md';
import dev_notes from './dev-notes.md';
import front_notes from './front-notes.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Compilador de Código',
  component: 'yduqs-code-compiler',
  parameters: {
    markdown: readme,
    notes: { 'Propriedades': readme, 'Notas de Desenvolvimento': dev_notes, 'Notas de Utilização': front_notes },
  },
  argTypes: {
    dark: {
      control: 'boolean',
      name: "Dark",
    },
    language_code: {
      control: 'text',
      name: "Linguagem de Programação",
    },
    code: {
      control: 'text',
      name: "Código de programação",
    },
    input_keyboard: {
      control: 'text',
      name: "Entrada de dados",
    },
    exercise_title: {
      control: 'text',
      name: "Titulo do Componente",
    },
  },
};
const Template = ({ dark, language_code, code, input_keyboard, exercise_title }) => html `
  <section>
        <div class="container my-5">
            <yduqs-code-compiler exercise_title="${exercise_title}" 
            language_code="${language_code}" 
            input_keyboard="${input_keyboard}"
            code="${code}"
            dark="${dark}" >
        </yduqs-code-compiler>
        </div>
    </section>
    <script src="https://unpkg.com/brace@0.11.1/mode/javascript.js"></script>
    <script src="https://unpkg.com/brace@0.11.1/theme/chrome.js"></script>

`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  dark: false,
  language_code: 'javascript',
  code: "let%20x%20%3D%2050%3B%0Alet%20y%20%3D%2050%0Aconsole.log('Resultado%20da%20soma%3A%20'%20%2B%20(x%20%2B%20y))%3B",
  input_keyboard: "",
  exercise_title: "Exercício 1"
};
