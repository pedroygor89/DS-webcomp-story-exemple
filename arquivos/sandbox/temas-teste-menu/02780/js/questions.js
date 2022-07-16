// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">As áreas degradadas são definidas como</p>
                `,
                "options": [
                    `<p class='c-paragraph'>aquelas que sofrem com os efeitos negativos das atividades ou intervenções humanas e são incapazes de retornar ao seu estado original.</p>`,
                    `<p class='c-paragraph'>aquelas que não sofreram perturbações em sua integridade física, química ou biológica.</p>`,
                    `<p class='c-paragraph'>aquelas que sofrem com os efeitos negativos de fenômenos naturais ou das atividades/ intervenções humanas.</p>`,
                    `<p class='c-paragraph'>aquelas que sofrem com os efeitos negativos das atividades ou intervenções humanas e são capazes de retornar ao seu estado original.</p>`,
                    `<p class='c-paragraph'>aquelas que não sofreram perturbações em sua integridade física, química ou biológica e são incapazes de retornar ao seu estado original.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>Uma área degradada é aquela que sofre com os efeitos negativos das atividades ou intervenções humanas. Uma área degradada difere da perturbada ou alterada quanto à sua capacidade de regeneração: enquanto a área degradada não é capaz de retornar ao seu estado original, isto é, de se regenerar naturalmente, as áreas perturbadas ainda possuem capacidade de se regenerar naturalmente.</p>
                `,
                "negative_feedback_topic": "<span>O que são áreas degradadas?</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">A Lei Federal nº 12.651/2012, conhecida como novo Código Florestal, institui três formas de recomposição da mata nativa. Qual(is) seria(m) a(s) forma(s) mais adequada(s) à recomposição de uma área totalmente degradada?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Regeneração natural das espécies nativas.</p>`,
                    `<p class='c-paragraph'>Plantio de espécies nativas.</p>`,
                    `<p class='c-paragraph'>Plantio de espécies exóticas simultâneo à condução da regeneração natural de espécies nativas.</p>`,
                    `<p class='c-paragraph'>Plantio de espécies nativas e exóticas.</p>`,
                    `<p class='c-paragraph'>Plantio de espécies nativas simultâneo à condução da regeneração natural de espécies nativas.</p>`
                ],  
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>As três formas de recomposição da mata nativa instituídas pelo novo Código Florestal são a regeneração natural das espécies nativas; o plantio de espécies nativas; e o plantio de espécies nativas simultâneo à condução da regeneração natural de espécies nativas. Contudo, pela definição de áreas degradadas, sabe-se que estas têm suas capacidades de se regenerarem naturalmente comprometidas (em maior ou menor grau). Portanto, a regeneração natural pode não ser uma alternativa aplicável às áreas altamente degradadas — a menos que alguns fatores de degradação ambiental sejam eliminados ou minimizados. Além disso, como o objetivo é a recomposição de mata nativa, o plantio de espécies exóticas não constitui uma alternativa.</p>
                `,
                "negative_feedback_topic": "<span>O Novo Código Florestal - Lei Federal nº 12.651, de 25 de maio de 2012</span>",
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
                  <p class="c-paragraph">A primeira etapa para a recuperação de áreas degradadas se chama</p>
                `,
                "options": [
                    `<p class='c-paragraph'>planejamento.</p>`,
                    `<p class='c-paragraph'>diagnóstico.</p>`,
                    `<p class='c-paragraph'>PRAD.</p>`,
                    `<p class='c-paragraph'>monitoramento.</p>`,
                    `<p class='c-paragraph'>aplicação de metodologias.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>A etapa do diagnóstico compreende o conhecimento do histórico das perturbações sofridas pela área degradada a ser estudada bem como o seu atual estado de degradação, a fim de ajudar no delineamento das estratégias que serão utilizadas para recuperá-la — e, por isso, deve ser a primeira etapa da recuperação de áreas degradadas.</p>
                `,
                "negative_feedback_topic": "<span>Diagnóstico para a recuperação de áreas degradadas</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Muitas das metodologias relacionadas à recuperação florestal das áreas degradadas se baseiam em um processo ecológico chamado</p>
                `,
                "options": [
                    `<p class='c-paragraph'>introdução de espécies exóticas.</p>`,
                    `<p class='c-paragraph'>desmatamento.</p>`,
                    `<p class='c-paragraph'>extinção de espécies.</p>`,
                    `<p class='c-paragraph'>invasão biológica.</p>`,
                    `<p class='c-paragraph'>sucessão ecológica.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>A sucessão ecológica é a mudança da estrutura das comunidades ao longo do passar do tempo, que ocorre de forma direcional e previsível. No geral, a sucessão ecológica inicia-se com as plantas pioneiras, que têm taxa de crescimento rápido e são capazes de ocupar solos pobres em nutrientes e de tolerar grande incidência solar. À medida que as pioneiras morrem, sua matéria orgânica passa a se acumular no solo, enriquecendo o solo de nutrientes e aumentando sua capacidade de retenção de umidade. Assim, as espécies pioneiras preparam o ambiente para que as próximas espécies possam se estabelecer, espécies que são mais exigentes em termos de características ambientais, chamadas espécies tardias e espécies clímax. Dentre as metodologias relacionadas à recuperação florestal das áreas degradadas que estudamos, várias delas se baseiam nesse processo ecológico, tais como a regeneração natural, os plantios de plantas pioneiras e de mudas e posterior semeio.</p>
                `,
                "negative_feedback_topic": "<span>Metodologias de recuperação de áreas degradadas</span>",
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
                  <p class="c-paragraph">O planejamento ambiental se desenvolve no Brasil em função da(o)</p>
                `,
                "options": [
                    `<p class='c-paragraph'>implantação de uma política baseada no desenvolvimento sustentável.</p>`,
                    `<p class='c-paragraph'>exploração consciente dos recursos naturais.</p>`,
                    `<p class='c-paragraph'>preservação dos recursos naturais e da biodiversidade.</p>`,
                    `<p class='c-paragraph'>exploração dos recursos naturais e ameaças à biodiversidade.</p>`,
                    `<p class='c-paragraph'>desenvolvimento econômico centrado na preservação ambiental.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>O final do século XX foi marcado pela crescente competição por terras; exploração desenfreada dos recursos naturais; e ameaças severas à biodiversidade. Com base nesse cenário, fez-se necessário um planejamento ambiental consolidado e integrado, abrangendo os diferentes impactos destrutivos consequentes das ações humanas sobre os diversos componentes do meio ambiente. </p>
                `,
                "negative_feedback_topic": "<span>Breve histórico do planejamento ambiental no Brasil</span>",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Podemos considerar como principal característica do processo do planejamento ambiental a seguinte alternativa:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Replicável</p>`,
                    `<p class='c-paragraph'>Contínuo</p>`,
                    `<p class='c-paragraph'>Imutável</p>`,
                    `<p class='c-paragraph'>Temporário</p>`,
                    `<p class='c-paragraph'>Predeterminado</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>Os ambientes naturais estão em constante mudança. As diferentes formas de utilização dos recursos naturais, pela sociedade ou pelos empreendimentos, as relações sociais, o desenvolvimento humano e outras características e componentes do ambiente são passíveis de mudanças ao longo tempo. Daí a necessidade de o planejamento ambiental ser feito a partir de uma perspectiva dinâmica, e não estática, do ambiente. Portanto, o planejamento ambiental deve ser um processo contínuo e constantemente reavaliado.  O profissional responsável por um planejamento ambiental deve considerar as mudanças e alternativas pelas quais os objetivos dos planos costumam passar. </p>
                `,
                "negative_feedback_topic": "<span>Decisões e diretrizes</span>",
                "negative_feedback_link": "#topic-06"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3.settings = question3;

    // Mão na massa
    /* var exercises1 = {
        "questions": [
            {
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

});