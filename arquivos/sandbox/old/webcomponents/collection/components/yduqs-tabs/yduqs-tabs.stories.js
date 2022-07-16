import readme from './readme.md';
import { html } from 'lit-html';
const lightBG = '#fff';
const darkBG = '#000';
export default {
  title: 'Componentes/Tabs',
  component: 'yduqs-tabs',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    darkMode: {
      type: 'boolean',
      name: 'Conteúdo escuro',
    },
    tab1: {
      type: 'string',
      name: 'Título da primeira tab',
    },
    contentTab1: {
      type: 'string',
      name: 'Conteúdo da primeira tab',
    },
    tab2: {
      type: 'string',
      name: 'Conteúdo da segunda tab',
    },
    contentTab2: {
      type: 'string',
      name: 'Conteúdo da segunda tab',
    },
    tab3: {
      type: 'string',
      name: 'Conteúdo da terceira tab',
    },
    contentTab3: {
      type: 'string',
      name: 'Conteúdo da terceira tab',
    },
    tab4: {
      type: 'string',
      name: 'Título da quarta tab',
    },
    contentTab4: {
      type: 'string',
      name: 'Conteúdo da quarta tab',
    },
  }
};
const Template = ({ tab1, contentTab1, tab2, contentTab2, tab3, contentTab3, tab4, contentTab4, darkMode }) => html `
  <div class="container" style="${darkMode ? `background-color: ${darkBG};` : `background-color: ${lightBG};`}">
    <yduqs-tabs isdarkmode="${darkMode}" >
      <yduqs-tab header="${tab1}" open>
          <p class="c-tabs__tab-text">${contentTab1}</p>
      </yduqs-tab>
      <yduqs-tab header="${tab2}">
          <p class="c-tabs__tab-text">${contentTab2}</p>
      </yduqs-tab>
      <yduqs-tab header="${tab3}">
          <p class="c-tabs__tab-text">${contentTab3}</p>
      </yduqs-tab>
      <yduqs-tab header="${tab4}">
          <p class="c-tabs__tab-text">${contentTab4}</p>
      </yduqs-tab>
    </yduqs-tabs>
  </div>
`;
export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  tab1: 'Metacolina',
  tab2: 'Betanecol',
  tab3: 'Carbochol',
  tab4: 'Metacolina',
  contentTab1: 'É administrada por inalação para o diagnóstico de hiperatividade das vias aéreas brônquicas em pacientes que não têm asma clinicamente aparente. Enquanto agonistas muscarínicos podem causar broncoconstrição e aumento de secreções traqueobrônquicas em todos os indivíduos, pacientes asmáticos respondem com intensa restrição brônquica e redução da capacidade vital.',
  contentTab2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  contentTab3: 'Enquanto agonistas muscarínicos podem causar broncoconstrição e aumento de secreções traqueobrônquicas em todos os indivíduos, pacientes asmáticos respondem com intensa restrição brônquica e redução da capacidade vital.',
  contentTab4: 'É administrada por inalação para o diagnóstico de hiperatividade das vias aéreas brônquicas em pacientes que não têm asma clinicamente aparente. Enquanto agonistas muscarínicos podem causar broncoconstrição e aumento de secreções traqueobrônquicas em todos os indivíduos, pacientes asmáticos respondem com intensa restrição brônquica e redução da capacidade vital.',
  darkMode: false
};
