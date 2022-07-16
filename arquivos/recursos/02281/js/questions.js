// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading pt-5">Questão 1</h3>
                  <p class="c-paragraph">Deve-se reconhecer que as manifestações da arte na Antiguidade Clássica</p>
                `,
                "options": [
                    `<p class='c-paragraph'>eram diversas e incluíam desde a música, a literatura, o teatro e a escultura até as ornamentações em objetos utilitários.</p>`,
                    `<p class='c-paragraph'>eram expressões da linguagem que se circunscreveram à literatura e ao teatro.</p>`,
                    `<p class='c-paragraph'>representavam a expressão do talento individual restrito a determinado conjunto de objetos.</p>`,
                    `<p class='c-paragraph'>evidenciavam a habilidade dos artistas expressada nos objetos e nas práticas apenas populares. </p>`,
                    `<p class='c-paragraph'>limitavam-se à arte do teatro, prática artística influenciada pela mitologia.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  
                <p class='c-paragraph'>As expressões artísticas greco-latinas se deram em diversos suportes materiais e por meio de diferentes linguagens, sendo marcadas pela diversidade. Até as peças utilitárias poderiam contar manifestações artísticas em suas ornamentações ou seus adereços. </p>
                `,
                "negative_feedback_topic": "<span>A diversidade de manifestações artísticas</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Como expressões de arte antiga, as cerâmicas</p>
                `,
                "options": [
                    `<p class='c-paragraph'>têm nas pinturas negras e vermelhas os estilos mais conhecidos.</p>`,
                    `<p class='c-paragraph'>em seu estilo arcaico, retratam cenas do cotidiano apenas.</p>`,
                    `<p class='c-paragraph'>em todos os estilos, trabalham com formas geométricas e definidas.</p>`,
                    `<p class='c-paragraph'>destacam-se pelo estilo abstrato e pela ausência de motivos eróticos.</p>`,
                    `<p class='c-paragraph'>destacam-se pelas narrativas bíblicas em forma de pinturas.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>Há uma diversidade de estilos nas cerâmicas (alguns mais abstratos e outros mais figurativos), destacando-se as pinturas negras e vermelhas. Os temas ou motivos também são diversos, incluindo cenas cotidianas, narrativas míticas e até cenas eróticas.</p>
                `,
                "negative_feedback_topic": "<span>A pintura e a cerâmica</span>",
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
                  <p class="c-paragraph">Assinale a alternativa que permite identificar um aspecto cultural comum à <em>Ilíada</em> e à <em>Odisseia</em>.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>São tragédias que eternizavam ações heroicas e dissociavam elementos históricos dos aspectos míticos ou lendários.</p>`,
                    `<p class='c-paragraph'>Destoavam da tradição dos <em>aedos</em> e do resgate de acontecimentos passados por meio elementos míticos.</p>`,
                    `<p class='c-paragraph'>São cantos épicos que celebravam feitos heroicos e possuíam função religiosa e pedagógica.</p>`,
                    `<p class='c-paragraph'>Eram fonte de educação para os latinos e de exaltação de crenças e valores da mitologia romana.</p>`,
                    `<p class='c-paragraph'>Possuíam valor estritamente literário, sem implicações na preservação de crenças e valores gregos.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>As obras atribuídas a Homero dentro da tradição lírica e épica dos aedos exaltavam os feitos heroicos e possuíam um caráter pedagógico e religioso, contribuindo para a preservação dos valores da cultura grega.</p>
                `,
                "negative_feedback_topic": "<span>A <em>Ilíada</em> e a <em>Odisseia</em> no contexto da Antiguidade Clássica</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Sobressaem na <em>Ilíada</em></p>
                `,
                "options": [
                    `<p class='c-paragraph'>a cólera de Aquiles e a chegada de Ulisses a Ítaca.</p>`,
                    `<p class='c-paragraph'>a cólera de Aquiles e a Guerra de Troia.</p>`,
                    `<p class='c-paragraph'>a morte de Aquiles e o retorno de Ulisses.</p>`,
                    `<p class='c-paragraph'>a paz e a aliança entre gregos e troianos.</p>`,
                    `<p class='c-paragraph'>a Guerra de Troia e a viagem de Ulisses.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>A Guerra de Troia, em seu nono ano, marca o início da narrativa do poema épico Ilíada. Aquiles é o herói que retorna à guerra depois de a ter abandonado por um tempo movido pela ira diante da morte de seu amigo Pátroclo – a tal ponto que consegue matar Heitor, o comandante dos troianos.</p>
                `,
                "negative_feedback_topic": "<span>A <em>Ilíada</em></span>",
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
                  <p class="c-paragraph"><em>Eneida</em> pode ser considerada uma epopeia para Roma, porque</p>
                `,
                "options": [
                    `<p class='c-paragraph'>reflete os valores da cultura grega no contexto latino a partir da exaltação da democracia e da rejeição ao imperador.</p>`,
                    `<p class='c-paragraph'>foi escrita em latim por poetas romanos contratados pelo imperador com a finalidade de rejeitar a mitologia grega.</p>`,
                    `<p class='c-paragraph'>apresenta temáticas relacionadas com acontecimentos históricos ocorridos exclusivamente na cidade.</p>`,
                    `<p class='c-paragraph'>foi concebida e escrita por Remo e Rômulo, fundadores da cidade de Roma.</p>`,
                    `<p class='c-paragraph'>espelha, por meio de recursos literários e de figuras míticas, a cidade romana e seu imperador Otávio Augusto.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'><em>Eneida</em>, seguindo o modelo homérico de epopeia, representa mitologicamente a cidade romana e seu imperador. A obra foi escrita pelo poeta latino Virgílio para contar a saga de Eneias.</p>
                `,
                "negative_feedback_topic": "<em>Eneida</em> – uma epopeia para Roma",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">A obra <em>Metamorfoses</em> pode ter seu título justificado, pois</p>
                `,
                "options": [
                    `<p class='c-paragraph'>narra poeticamente as transformações pelas quais passa seu autor, Ovídio.</p>`,
                    `<p class='c-paragraph'>conta poeticamente as transformações dos seres, mudança atribuída aos deuses.</p>`,
                    `<p class='c-paragraph'>conta poeticamente as mudanças dos deuses da mitologia romana em divindades da mitologia grega.</p>`,
                    `<p class='c-paragraph'>desenvolve um poema em que o lírico, épico, o trágico e o cômico se mantêm inalterados e não se misturam.</p>`,
                    `<p class='c-paragraph'>narra, de forma histórica e documental, as transformações por que passaram os romanos.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>Ovídio conta, por intermédio de mitos e linguagem poética, além de misturar diferentes gêneros literários, o modo como os serem passam por mudanças e assumem novas formas. Essas metamorfoses são atribuídas às divindades da mitologia romana.</p>
                `,
                "negative_feedback_topic": "<em>Metamorfoses</em> de Ovídio",
                "negative_feedback_link": "#topic-06"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3.settings = question3;

  

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