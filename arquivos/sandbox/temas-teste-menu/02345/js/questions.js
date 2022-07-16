// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">A ética é estudada pela Filosofia como um campo amplo e abrangente. Relacionada aos princípios que governam as ações e os comportamentos humanos, a ética como objeto de estudo floresceu na Grécia Antiga e tem continuamente evoluído junto com as culturas e sociedades. A respeito da ética, é correto afirmar que</p>
                `,
                "options": [
                    `<p class='c-paragraph'>está relacionada com o conceito de moral, avaliando ações como boas ou ruins de acordo com o costume social e cultural.</p>`,
                    `<p class='c-paragraph'>visa à punição do infrator, do antiético, mantendo assim a sociedade sob controle.</p>`,
                    `<p class='c-paragraph'>é derivada do sistema legal, de forma que algo só pode ser ético se for amparado por leis.</p>`,
                    `<p class='c-paragraph'>é a principal motivação das ações ilícitas, pois seguir a ética leva necessariamente à legalidade.</p>`,
                    `<p class='c-paragraph'>deve sempre ser considerada de forma absoluta, inflexível e inegociável, uma vez que o certo é certo em qualquer situação.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  
                  <div class="legenda">
                    <p class='c-paragraph'>Tanto a ética como a moral estudam matérias semelhantes: os costumes sociais e os juízos de valores, e nos levam a classificá-los como “certos” ou “errados”, bons ou ruins.</p>
                  </div>                  
                `,
                "negative_feedback_topic": "<span>Os conceitos de ética e de moral</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">O Código de Ética do Profissional Biomédico versa sobre as áreas de atuação, direitos, deveres e punições cabíveis em caso de ocorrência de atos infracionais. Com relação à conduta biomédica, é correto afirmar que</p>
                `,
                "options": [
                    `<p class='c-paragraph'>a Biomedicina deve ser praticada com o bem maior próprio em vista, de forma que seja enaltecida sobre outras profissões.</p>`,
                    `<p class='c-paragraph'>é dever do biomédico fiscalizar a forma de atuação de colegas biomédicos ou não, prezando pelo exercício profissional de excelência.</p>`,
                    `<p class='c-paragraph'>o biomédico deve prezar pela saúde pública, pelo meio ambiente e pela saúde individual dos usuários de seus serviços.</p>`,
                    `<p class='c-paragraph'>o biomédico deve manter o sigilo profissional frente a conduta inadequada ou ilícita de colegas, não devendo reportar o ocorrido a nenhuma autoridade.</p>`,
                    `<p class='c-paragraph'>é permitido ao biomédico negar-se a servir, com sua profissão, a indivíduos ou coletividades, baseado em seu sistema de crenças.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Como profissional de múltiplas áreas de atuação possível, é obrigação do biomédico estar atento para a proteção da coletividade, preservação do meio ambiente e aplicação das práticas científicas comprovadas e apropriadas nos serviços biomédicos oferecidos, zelando assim pela saúde pública, pelo meio ambiente e pela saúde individual dos usuários de seus serviços.</p>
                `,
                "negative_feedback_topic": "<span>Capítulo III: Do Exercício Profissional</span>",
                "negative_feedback_link": "#topic-02"
            }
        ]
    }

    const activity1 = document.querySelector('yduqs-questions[question_id="1"]');
    activity1.settings = question1;

    // Questões do Módulo 02
    var question2 = {
        "questions": [
            {
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">A Biomedicina é uma carreira honrosa e prestigiada na sociedade. Como profissionais, devemos sempre zelar para que assim continue. Uma das áreas que devemos prestar especial atenção é a publicidade de serviços biomédicos. Com relação à ética em serviços biomédicos, é correto afirmar que</p>
                `,
                "options": [
                    `<p class='c-paragraph'>é antiético apresentar fotos de procedimentos em quaisquer mídias eletrônicas, ainda que tenha sido autorizado pelo usuário.</p>`,
                    `<p class='c-paragraph'>é ética a divulgação de dados e informações dos usuários de serviços e de outros profissionais.</p>`,
                    `<p class='c-paragraph'>o biomédico pode divulgar suas informações profissionais, títulos e cursos em qualquer evento de autopromoção que possua.</p>`,
                    `<p class='c-paragraph'>é antiética a veiculação de informações científicas com intuito educacional, de treinamento ou em curso.</p>`,
                    `<p class='c-paragraph'>é antiética a publicação de material científico com dados que tenham sido manuseados de forma a se obter melhores resultados.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>O biomédico, como profissional acadêmico e docente, deve sempre prezar pela veracidade e autenticidade das informações, dados e resultados que publique, sendo prática antiética a manipulação dos resultados.</p>
                `,
                "negative_feedback_topic": "<span> Capítulo V: Dos Limites para Propaganda, Publicidade e Anúncio da Atividade Biomédica</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Na carreira biomédica, sempre nos relacionamos com diversos outros profissionais, biomédicos ou não, não importa em qual campo de atuação estejamos inseridos. Sobre as relações que devem prezar em construir e manter, analise a situação retratada a seguir. </p>
                  <p class="c-paragraph">Um biomédico responsável técnico do setor de análises clínicas de um laboratório, durante a discussão de casos de um paciente internado no setor de terapia intensiva do hospital, fez duras críticas sobre a equipe de enfermagem e os fisioterapeutas, ensinando a eles como realizar a aspiração traqueal e como devem coletar essa amostra para exames laboratoriais.</p>
                  <p class="c-paragraph">De acordo com o capítulo VI: Das Relações com os Colegas do Código de Ética do Profissional Biomédico, como avaliamos a conduta do biomédico?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Correta, pois o biomédico prezou por relacionamentos civilizados e solidários, necessário para o exercício profissional em equipes multidisciplinar.</p>`,
                    `<p class='c-paragraph'>Incorreta, pois os biomédicos não devem estabelecer relações de poder e ensinar outros profissionais a como proceder em suas carreiras.</p>`,
                    `<p class='c-paragraph'>Incorreta, pois o biomédico deveria ter agendado um treinamento com toda a equipe para orientação. </p>`,
                    `<p class='c-paragraph'>Correta, pois os biomédicos são aptos a dar orientações sobre como outros profissionais que atuem na mesma equipe devem trabalhar. </p>`,
                    `<p class='c-paragraph'>Correta, pois os biomédicos devem orientar a toda a equipe como proceder a coleta de material biológico destinado a exames laboratoriais, mesmo que esse procedimento seja da competência de outro profissional. </p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>A Biomedicina está relacionada intimamente ao ensino. Porém, no ambiente profissional e na relação com outros trabalhadores, devemos sempre prezar pelo respeito e bom relacionamento com outras profissões.</p>
                `,
                "negative_feedback_topic": "<span>Capítulo VI: Das Relações com os Colegas</span>",
                "negative_feedback_link": "#topic-04"
            }
        ]
    }

    const activity2 = document.querySelector('yduqs-questions[question_id="2"]');
    activity2.settings = question2;

    // Questões do Módulo 03
    var question3 = {
        "questions": [
            {
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Conforme disposto no Código de Ética, o respeito e a observância dos regulamentos e demais normativas é responsabilidade do biomédico. Por vezes, a regulamentação profissional está alinhada com outras leis, o que configura que certas infrações também sejam consideradas crimes ou ilícitos. Nesse sentido, é correto afirmar que</p>
                `,
                "options": [
                    `<p class='c-paragraph'>o biomédico pode praticar qualquer área da Biomedicina, contanto que tenha diploma de graduação.</p>`,
                    `<p class='c-paragraph'>é considerada infração a desobediência ao supervisor ou à autoridade direta quando há provimento de condições dignas de trabalho.</p>`,
                    `<p class='c-paragraph'>o biomédico, por seu caráter de profissional da saúde, é vedado de lutar por seus direitos trabalhistas, sendo infração a prática de greves.</p>`,
                    `<p class='c-paragraph'>a prática ilegal ou irregular da profissão não é uma infração, uma vez que o profissional sequer faz parte do corpo laboral da Biomedicina.</p>`,
                    `<p class='c-paragraph'>além da própria natureza dos atos infracionais, situações que agravem ou atenuem a transgressão são consideradas para aplicação de sanções.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>Uma série de fatores pode ser levada em consideração no momento do julgamento e da determinação da penalidade como, por exemplo, a natureza do ato infracional e as circunstâncias atenuantes, caso aliviem a severidade do ato infracional, ou agravantes, caso aumentem a severidade. </p>
                `,
                "negative_feedback_topic": "<span>Classificação das infrações e das circunstâncias atenuantes e agravantes</span>",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Cada infração ao Código de Ética deve acarretar uma consequência ou punição ético-disciplinar. Considerando as várias formas de penalizações, analise as afirmativas a seguir:</p>
                  <p class="c-paragraph">I. As repreensões são formas públicas de penalidades, informando o infrator por escrito e a sociedade a respeito dos atos cometidos, e pode ser aplicada quando o profissional se deixa ser explorado para fins políticos.</p>
                  <p class="c-paragraph">II. Infrações mais graves podem envolver a penalidade máxima, com cancelamento do registro profissional e pagamento de multa, como acontece com o biomédico que mantém suas atividades relativas à Biomedicina durante período de suspensão disciplinar.</p>
                  <p class="c-paragraph">III. As advertências são formas públicas de penalidades, informando ao infrator por escrito e à sociedade a respeito dos atos cometidos como, por exemplo, a prática de concorrência desleal.</p>
                  <p class="c-paragraph">É correto apenas o que se afirma em</p>
                `,
                "options": [
                    `<p class='c-paragraph'>I.</p>`,
                    `<p class='c-paragraph'>II.</p>`,
                    `<p class='c-paragraph'>I e II.</p>`,
                    `<p class='c-paragraph'>I e III.</p>`,
                    `<p class='c-paragraph'>II e III.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>As advertências são as punições menos severas, aplicadas em infrações leves ou com atenuantes que as tornem leves, que são feitas de forma confidencial, não havendo divulgação para a sociedade. Infrações mais graves podem envolver a penalidade máxima, com cancelamento do registro profissional e pagamento de multa. As repreensões são formas públicas de penalidades, informando o infrator por escrito e a sociedade a respeito dos atos cometido. </p>
                `,
                "negative_feedback_topic": "<span>Tipos de penalidades</span>",
                "negative_feedback_link": "#topic-06"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3.settings = question3;

    // Questões do Módulo 04
    var question4 = {
        "questions": [
            {
                "question_title": `
              <h3 class="c-heading">Questão 1</h3>
                <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              `,
                "options": [
                    `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
              <h3 class="c-heading">Questão 2</h3>
                <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              `,
                "options": [
                    `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                    `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            }
        ]
    }

    const activity4 = document.querySelector('yduqs-questions[question_id="4"]');
    activity4.settings = question4;

    // Mão na massa 01
    /* var exercises1 = {
        "questions": [{
            "question_title": `
                    <h3 class="c-heading"><strong>Mão na massa 1</strong></h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
            "options": [
                `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `
        }
        ]
    }

    const exercise1 = document.querySelector('yduqs-questions[exercise_id="1"]');
    exercise1.settings = exercises1; */

    // Mão na massa 02
    /* var exercises2 = {
        "questions": [{
            "question_title": `
                    <h3 class="c-heading"><strong>Mão na massa 1</strong></h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
            "options": [
                `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `
        }
        ]
    }

    const exercise2 = document.querySelector('yduqs-questions[exercise_id="2"]');
    exercise2.settings = exercises2; */

    // Mão na massa 03
    /* var exercises3 = {
        "questions": [{
            "question_title": `
                    <h3 class="c-heading"><strong>Mão na massa 1</strong></h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
            "options": [
                `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `
        }
        ]
    }

    const exercise3 = document.querySelector('yduqs-questions[exercise_id="3"]');
    exercise3.settings = exercises3; */

    // Mão na massa 04
    /* var exercises4 = {
        "questions": [{
            "question_title": `
                    <h3 class="c-heading"><strong>Mão na massa 1</strong></h3>
                  <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `,
            "options": [
                `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
                `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                `
        }
        ]
    }

    const exercise4 = document.querySelector('yduqs-questions[exercise_id="4"]');
    exercise4.settings = exercises4; */

});