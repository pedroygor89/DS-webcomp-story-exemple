// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">O desenvolvimento da Política Nacional do Meio Ambiente foi, principalmente, fomentado pelo(s) seguinte(s) fator(es):</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Demanda espontânea do Governo Federal.</p>`,
                    `<p class='c-paragraph'>Pressão popular e dos setores industriais.</p>`,
                    `<p class='c-paragraph'>Ascensão do pensamento ecológico e demanda espontânea do Governo Federal.</p>`,
                    `<p class='c-paragraph'>Escassez de recursos naturais.</p>`,
                    `<p class='c-paragraph'>Demanda econômica pelos recursos naturais e ascensão do pensamento ecológico.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>
                    Dentre os fatores que estimularam o desenvolvimento da Política Nacional do Meio Ambiente, pode - se citar a descoberta das limitações do meio ambiente, as consequências ecológicas do   crescimento econômico, a crescente preocupação mundial com o meio ambiente e a importância da valorização dos recursos ambientais para o setor produtivo.Sendo assim, a única opção que   contempla, de forma adequada, esses fatores é a letra E.
                  </p>
                `,
                "negative_feedback_topic": "<span>Um breve resumo da Política Nacional do Meio Ambiente</span>",
                "negative_feedback_link": "#m1q1"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">O estudo de impacto ambiental (EIA) e o relatório de impacto ambiental (RIMA) diferem principalmente quanto:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>às etapas do licenciamento ambiental em que devem ser apresentados.</p>`,
                    `<p class='c-paragraph'>à linguagem em que o conteúdo é apresentado.</p>`,
                    `<p class='c-paragraph'>ao número de páginas presentes em cada um dos documentos.</p>`,
                    `<p class='c-paragraph'>aos componentes do meio ambiente abordados nos documentos.</p>`,
                    `<p class='c-paragraph'>aos métodos utilizados para diagnosticar cada impacto.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>
                    A principal diferença entre o estudo de impacto ambiental (EIA) e o relatório de impacto ambiental (RIMA) está na linguagem em que o conteúdo é apresentado. O EIA é um relatório técnico, confeccionado por uma equipe multidisciplinar e capacitada e, devido a essas características, pode não ser facilmente interpretável pela população em geral. Para suprir essa potencial falta de acesso da população às informações presentes em um EIA, tem-se o RIMA. O RIMA se apresenta com uma linguagem mais clara, objetiva e didática, utilizando-se até mesmo de técnicas de comunicação visual.
                  </p>
                `,
                "negative_feedback_topic": "<span>Estudo de impacto ambiental</span>",
                "negative_feedback_link": "#m1q2"
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
                <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">Dentre as ações abaixo, marque a alternativa que inclui aquela que controla a poluição do ar.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>O biomonitoramento.</p>`,
                    `<p class='c-paragraph'>A queima de combustíveis fósseis.</p>`,
                    `<p class='c-paragraph'>O desmatamento.</p>`,
                    `<p class='c-paragraph'>Os incêndios florestais.</p>`,
                    `<p class='c-paragraph'>A criação de gado.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>
                    O biomonitoramento ajuda a controlar e prevenir a poluição do ar. Já as ações como a queima de combustíveis fósseis, o desmatamento, os incêndios florestais e a criação de gado contribuem para a poluição do ar.
                  </p>
                `,
                "negative_feedback_topic": "<span>Monitoramento do ar</span>",
                "negative_feedback_link": "#m2q1"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">Considerando um estudo hipotético que pretende avaliar os efeitos do derramamento de combustível sobre a comunidade de peixes de uma lagoa, esse estudo deveria ser considerado:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    um biomonitoramento.
                    </p>`,
                    `<p class='c-paragraph'>
                    um levantamento de flora.
                    </p>`,
                    `<p class='c-paragraph'>
                    um relatório de impacto ambiental.
                    </p>`,
                    `<p class='c-paragraph'>
                    um levantamento de fauna.
                    </p>`,
                    `<p class='c-paragraph'>
                    um monitoramento não biológico.
                    </p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>
                    Quando se pretende conduzir um estudo que estabeleça uma possível relação de causa e efeito entre a ocorrência de um impacto ambiental e mudanças nas características de certa comunidade biológica, este será um estudo de biomonitoramento. Em contrapartida, um levantamento de flora ou fauna não pretende estabelecer essa causalidade, e sim identificar as espécies e seus respectivos estados de conservação. Já o relatório de impacto ambiental, é somente um documento técnico, e não um estudo.
                  </p>
                `,
                "negative_feedback_topic": "<span>O que é biomonitoramento?</span>",
                "negative_feedback_link": "#m2q2"
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
                <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">Imagine um estudo de impacto ambiental realizado em uma área florestal extensa, de vegetação uniforme. O objetivo é fazer uma amostragem rápida, em curto período, e geral das espécies vegetais que ocorrem ali, sem focar em nenhum grupo, altitude, ou fator ecológico específicos. Esse estudo deveria se basear em que tipo de amostragem?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    Amostragem estratificada.
                    </p>`,
                    `<p class='c-paragraph'>
                    Amostragem aleatória.
                    </p>`,
                    `<p class='c-paragraph'>
                    Amostragem sistemática.
                    </p>`,
                    `<p class='c-paragraph'>
                    Amostragem independente do grupo taxonômico.
                    </p>`,
                    `<p class='c-paragraph'>
                    Qualquer tipo de amostragem seria adequado, a depender da vontade do pesquisador.
                    </p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>
                    A amostragem aleatória seria a ideal, considerando o curto período, a grande extensão da área e o fato de a área ser homogênea. Nesse caso, para que a aleatoriedade seja realmente incorporada ao processo de amostragem, nenhum grupo taxonômico deve ser priorizado durante a amostragem, assim como nenhum microambiente em específico, ou nenhum fator ecológico. A aleatoriedade será imprescindível, inclusive, para não ferir as premissas das análises estatísticas utilizadas no tratamento dos dados coletados durante esta amostragem. Os demais tipos de amostragem não são baseados na premissa da aleatoriedade e são utilizados em diferentes tipos de estudos. Uma amostragem independente do grupo taxonômico é restrita a casos pontuais e específicos de amostragem de fatores estritamente ambientais, não bióticos.
                  </p>
                `,
                "negative_feedback_topic": "<span>Amostragem aleatória</span>",
                "negative_feedback_link": "#m3q1"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">
                  É considerado um fator crucial para a escolha do tipo de amostragem em um estudo de impacto ambiental:
                  </p>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    A definição do grupo taxonômico de interesse.
                    </p>`,
                    `<p class='c-paragraph'>
                    O conhecimento de toda a flora da região.
                    </p>`,
                    `<p class='c-paragraph'>
                    O conhecimento de toda a fauna da região.
                    </p>`,
                    `<p class='c-paragraph'>
                    A definição do nível de poluição do ar da região.
                    </p>`,
                    `<p class='c-paragraph'>
                    A definição do nível de poluição dos corpos d’água da região.
                    </p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>
                  O tipo de amostragem ou a técnica de amostragem utilizada em estudos de impacto ambiental é necessariamente táxon-dependente, ou seja, é crucial que haja a definição do grupo taxonômico de interesse antes que seja escolhido o tipo de amostragem. Isso porque as metodologias de amostragem variam de acordo com o grupo taxonômico, como por exemplo, plantas, peixes, insetos e pequenos mamíferos. Já o conhecimento de toda a fauna e flora é o resultado de um trabalho extenso de levantamento em determinada região, ou seja, um resultado posterior à escolha de métodos de amostragem. E a definição dos níveis de poluição de ar e água constituem parâmetros ambientais importantes em certos estudos de impacto ambiental, que podem ser medidos ou não, a depender do foco do estudo e do tipo de impacto que aquela região sofre.
                  </p>
                `,
                "negative_feedback_topic": "<span>A técnica de amostragem é táxon-dependente</span>",
                "negative_feedback_link": "#m3q2"
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
                <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">
                  Um <i>quadrat</i> pode ser utilizado para determinar a composição de espécies de: 
                  </p>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    vegetais de médio e grande porte e animais sésseis de pequeno porte.
                    </p>`,
                    `<p class='c-paragraph'>
                    vegetais de qualquer porte.
                    </p>`,
                    `<p class='c-paragraph'>
                    vegetais e animais de qualquer porte. 
                    </p>`,
                    `<p class='c-paragraph'>
                    vegetais e animais sésseis de pequeno porte.
                    </p>`,
                    `<p class='c-paragraph'>
                    qualquer animal de pequeno porte.
                    </p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>
                  Quando o método da parcela fixa se baseia em uma área, os indivíduos são contados e identificados diretamente na parcela e, para que isso seja possível, é necessário que eles não se movam. Sendo assim, as plantas e os animais sésseis (que não se movem) são passíveis de serem amostrados com o método da parcela fixa. Além disso, por definição, o <i>quadrat</i> é uma parcela de porte reduzido e, por sua vez, todos os indivíduos por ele amostrados são de pequeno porte. Portanto, a única opção que contempla as informações previamente explicitadas é a letra D.
                  </p>
                `,
                "negative_feedback_topic": "<span>Qual o tamanho da parcela?</span>",
                "negative_feedback_link": "#m4q1"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">
                  Por que motivo a amostragem de plantas pode ser realizada mais facilmente do que a de animais?
                  </p>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    As plantas são seres fotossintetizantes, os animais não.
                    </p>`,
                    `<p class='c-paragraph'>
                    As plantas geralmente têm maior tamanho, são mais vistosas do que os animais.
                    </p>`,
                    `<p class='c-paragraph'>
                    As plantas geralmente são de cor verde, são mais uniformes e podem ser localizadas mais facilmente do que os animais. 
                    </p>`,
                    `<p class='c-paragraph'>
                    As plantas são sésseis, já a maior parte dos animais se move.
                    </p>`,
                    `<p class='c-paragraph'>
                    As plantas geralmente são amostradas por meio da coleta de parte do indivíduo, sem comprometer sua vida como um todo. Nos animais, geralmente a vida do indivíduo é comprometida.
                    </p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>
                  A amostragem de plantas pode ser realizada com maior facilidade do que a de animais, no geral. Isso se deve basicamente ao fato de que as plantas são organismos sésseis, ou seja, não se movem, diferentemente da maioria dos animais. As demais características das plantas, como o fato de serem fotossintetizantes, poderem atingir grande porte, possuírem cor verde devido à produção de clorofila e serem passíveis de coleta de seus ramos, flores e frutos sem que a vida do indivíduo seja comprometida (em muitos casos); são fatores outros que não influenciam a amostragem das plantas como um todo.
                  </p>
                `,
                "negative_feedback_topic": "<span>Amostragem da flora terrestre e aquática</span>",
                "negative_feedback_link": "#m4q2"
            }
        ]
    }

    const activity4 = document.querySelector('yduqs-questions[question_id="4"]');
    activity4.settings = question4;


});