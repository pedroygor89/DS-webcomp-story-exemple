import readme from './readme.md';
import { html } from 'lit-html';
export default {
  title: 'Patterns/Questions',
  component: 'yduqs-questions',
  parameters: {
    markdown: readme,
    notes: readme,
  },
  argTypes: {
    activity_id: {
      name: 'Insira o id da atividade',
      control: 'text'
    }
  }
};
const activity = ({ activity_id }) => html `
    <yduqs-activity activity_id="${activity_id}"></yduqs-activity>
    <script>
        // Inicializa o menu a partir do html
        window.addEventListener('DOMContentLoaded', function () {
          fetch('https://mocki.io/v1/2a673fe0-d46a-4777-8aec-22c5f6692bed')
            .then(response => response.json())
            .then(json => {
              const activity = document.querySelector('yduqs-activity[activity_id="1"]');
              activity.initialize(json);
            })

        });
      </script>
`;
export const activityDefault = activity.bind({});
activityDefault.storyName = 'Default';
activityDefault.args = {
  activity_id: '1'
};
