// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Algumas raízes se originam a partir de outros órgãos como caule ou folhas, ou seja, não possuem desenvolvimento a partir da radícula ou da raiz principal do vegetal. Essas raízes são chamadas de</p>
                `,
                "options": [
                    `<p class='c-paragraph'>pivotantes.</p>`,
                    `<p class='c-paragraph'>adventícias.</p>`,
                    `<p class='c-paragraph'>axiais.</p>`,
                    `<p class='c-paragraph'>principais.</p>`,
                    `<p class='c-paragraph'>ramificadas.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  
                  <div class="legenda">
                    <p class='c-paragraph'>As raízes adventícias são aquelas que se originam de outros órgãos e não da radícula ou da raiz principal. Nas raízes subterrâneas pivotantes, as raízes principais são robustas e não apresentam ramificações. Já as raízes ramificadas, como o próprio nome afirma, possuem diversas ramificações, e as raízes secundárias são robustas.</p>
                  </div>                   
                `,
                "negative_feedback_topic": "<span>Características gerais das raízes</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">A região pilífera é responsável pela maior parte da absorção de água e sais minerais no vegetal. Nessa região, há estruturas celulares especializadas que aumentam a área de contato, favorecendo a eficiência da absorção. Qual o nome dado a estes tipos celulares?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Exoderme.</p>`,
                    `<p class='c-paragraph'>Estrias de Caspary.</p>`,
                    `<p class='c-paragraph'>Tricoblastos.</p>`,
                    `<p class='c-paragraph'>Periciclo.</p>`,
                    `<p class='c-paragraph'>Endoderme.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Os tricoblastos são células especializadas presentes na região pilífera da raiz. Elas apresentam projeções de suas paredes celulares, aumentando a superfície de absorção de água e sais minerais. A exoderme é o conjunto de células mais externa do córtex radicular, enquanto a endoderme é a camada de células mais interna do córtex radicular. Na endoderme, há células que possuem depósito de suberina em fita conhecida como estrias de Caspary. A camada de células adjacentes à endoderme que possui função meristemática chama-se periciclo.</p>
                `,
                "negative_feedback_topic": "<span>Morfologia interna da raiz</span>",
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
                  <p class="c-paragraph">Dentre os tipos de caule ereto das raízes aéreas, há caules herbáceos, lenhosos e que apresentam marcas evidentes. Os caules silicosos flexíveis com nós e entrenós evidentes são chamados de</p>
                `,
                "options": [
                    `<p class='c-paragraph'>tronco.</p>`,
                    `<p class='c-paragraph'>escapo.</p>`,
                    `<p class='c-paragraph'>estipe.</p>`,
                    `<p class='c-paragraph'>colmo.</p>`,
                    `<p class='c-paragraph'>haste.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>Os colmos ocos e cheios são caules aéreos e eretos do tipo silicosos, com nós e entrenós evidenciados. O tronco e o estipe são caules lenhosos, já a haste e o escapo, caules herbáceos.</p>
                `,
                "negative_feedback_topic": "<span>Caules aéreos</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Dentre os caules subterrâneos, há um com maior especialização para reservar nutrientes em seu interior. Esses caules intumescidos e com estruturas conhecidas como “olhos” são conhecidos como</p>
                `,
                "options": [
                    `<p class='c-paragraph'>tubérculos.</p>`,
                    `<p class='c-paragraph'>bulbilhos.</p>`,
                    `<p class='c-paragraph'>cormos.</p>`,
                    `<p class='c-paragraph'>rizomas.</p>`,
                    `<p class='c-paragraph'>bulbos tunicados.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>Os tubérculos são caules subterrâneos intumescidos com “olhos” nas regiões dos nós e especializados na reserva de nutriente. Bulbilhos, cormos e bulbos tunicados são tipos de caules subterrâneos cônicos conhecidos como bulbo e são compostos por um prato, onde estarão inseridos os catafilos. O rizoma é um caule subterrâneos espesso com nós e entrenós bastante marcados.</p>
                `,
                "negative_feedback_topic": "<span>Caules subterrâneos</span>",
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
                  <p class="c-paragraph">As folhas podem ser classificadas de acordo com o tamanho, o formato, a textura e o recorte do limbo. Quando classificados quanto à consistência, os limbos com aspecto quebradiço são chamados de</p>
                `,
                "options": [
                    `<p class='c-paragraph'>coriáceos.</p>`,
                    `<p class='c-paragraph'>membranáceos.</p>`,
                    `<p class='c-paragraph'>suculentos.</p>`,
                    `<p class='c-paragraph'>herbáceos.</p>`,
                    `<p class='c-paragraph'>cartáceos.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>Os limbos de consistência quebradiça são conhecidos como cartáceos. Herbácea, membranácea, coriácea e suculenta, apesar de serem classificações de consistência, são limbos mais flexíveis.</p>
                `,
                "negative_feedback_topic": "<span>Morfologia externa e as classificações da folha</span>",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">O sistema vascular é responsável pelo transporte de água, sais minerais e nutrientes no interior da planta. Os tecidos vasculares no limbo foliar estão organizados em</p>
                `,
                "options": [
                    `<p class='c-paragraph'>cilindros.</p>`,
                    `<p class='c-paragraph'>feixes.</p>`,
                    `<p class='c-paragraph'>arcos.</p>`,
                    `<p class='c-paragraph'>meia-lua.</p>`,
                    `<p class='c-paragraph'>cordões.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>No limbo foliar, os tecidos vasculares estão organizados em feixes colaterais ou bicolaterais. A organização em meia-lua é vista junto aos feixes acessórios no pecíolo. O cilindro vascular é visto nas raízes, onde o xilema pode estar organizado em arcos e o floema em cordões.</p>
                `,
                "negative_feedback_topic": "<span>Morfologia interna das folhas</span>",
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
                <p class="c-paragraph">O órgão flor é constituído por pedúnculo, receptáculo e verticilos florais. Os verticilos florais externos e internos podem estar organizados de forma que as peças florais estejam em diferentes simetrias. Quando as peças florais não apresentam planos de simetria, podem ser chamadas de</p>
              `,
                "options": [
                    `<p class='c-paragraph'>zigomorfas.</p>`,
                    `<p class='c-paragraph'>radiais.</p>`,
                    `<p class='c-paragraph'>actinomorfas.</p>`,
                    `<p class='c-paragraph'>assimétricas.</p>`,
                    `<p class='c-paragraph'>bilaterais.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                <p class='c-paragraph'>As flores assimétricas não apresentam planos de simetria, já as zigomorfas apresentam um plano de simetria e as actinomorfas, diversos planos de simetria.</p>
              `,
                "negative_feedback_topic": "<span>Flor</span>",
                "negative_feedback_link": "#topic-07"
            },
            {
                "question_title": `
              <h3 class="c-heading">Questão 2</h3>
                <p class="c-paragraph">Os frutos podem ser classificados de acordo com o número de sementes que possuem. Dessa forma, qual o nome dado para os frutos que não possuem sementes?</p>
              `,
                "options": [
                    `<p class='c-paragraph'>Monospérmicos </p>`,
                    `<p class='c-paragraph'>Polispérmicos</p>`,
                    `<p class='c-paragraph'>Partenocárpicos</p>`,
                    `<p class='c-paragraph'>Trispérmicos</p>`,
                    `<p class='c-paragraph'>Dispérmicos</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                <p class='c-paragraph'>Os frutos formados quando não há fecundação são chamados de partenocárpicos. Por isso não possuem sementes. Os frutos com designações terminadas em -spérmicos possuem sementes e recebem prefixo de acordo com a quantidade.</p>
              `,
                "negative_feedback_topic": "<span>Fruto</span>",
                "negative_feedback_link": "#topic-08"
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