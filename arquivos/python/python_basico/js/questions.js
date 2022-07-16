// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function() {

    // Questões do Módulo 01
    var question1 = {
        "questions": [{
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Analise as afirmativas a seguir: </p>
                  <p class="c-paragraph">I. Python é uma linguagem livre de alto nível, orientada a objetos e de difícil leitura, pois não permite indentação de linhas de código.</p>
                  <p class="c-paragraph">II. Python suporta a maioria das técnicas da programação orientada a objetos.</p>
                  <p class="c-paragraph">III. A linguagem Python e seu interpretador estão disponíveis para as mais diversas plataformas.</p>
                  <p class="c-paragraph">São corretas:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Somente II.</p>`,
                    `<p class='c-paragraph'>Somente III.</p>`,
                    `<p class='c-paragraph'>Somente II e III.</p>`,
                    `<p class='c-paragraph'>Somente I e II.</p>`,
                    `<p class='c-paragraph'>Somente I e III.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  
                  <p class='c-paragraph'>A linguagem Python é considerada uma das mais fáceis de se aprender e é de fácil leitura, inclusive pela indentação. A indentação é um item crucial no Python, porque é através dela que são definidos os blocos de código. Isso torna a afirmativa I falsa. As afirmativas II e III são verdadeiras.</p>
                `,
                "negative_feedback_topic": "<span>Características da linguagem Python</span>",
                "negative_feedback_link": "#m1q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">(IF - MT – Informática - 2018) Sobre a linguagem Python, é incorreto afirmar que:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Suporta os paradigmas: imperativo, orientado a objetos e funcional.</p>`,
                    `<p class='c-paragraph'>Utiliza indentação para delimitar início e fim de blocos.</p>`,
                    `<p class='c-paragraph'>A linguagem Python é distribuída sob licença que proíbe sua incorporação em produtos proprietários.</p>`,
                    `<p class='c-paragraph'>Python é um software de código aberto.</p>`,
                    `<p class='c-paragraph'>A linguagem Python é portável, permitindo que um programa possa ser executado 	em vários ambientes.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>A linguagem Python é desenvolvida sob uma licença de código aberto aprovada pela OSI, tornando-a livremente utilizável e distribuível, mesmo para uso comercial. </p>
                `,
                "negative_feedback_topic": "<span>Características da linguagem Python</span>",
                "negative_feedback_link": "#m1q1"
            }
        ]
    }

    const activity1 = document.querySelector('yduqs-questions[question_id="1"]');
    activity1.settings = question1;

    // Questões do Módulo 02
    var question2 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph pb-5">(IF - CE – Técnico de Laboratório – Informática - 2017) Considere o trecho do programa Python a seguir:</p>
                 <yduqs-code-snipet dark="true" language_code="python" code="def func():
        x = 1
        print(x)
x = 10
func()
print(x)">
            </yduqs-code-snipet>
                  <p class="c-paragraph pt-5">Os valores impressos ao se executar o programa são, respectivamente:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>1 e 1.</p>`,
                    `<p class='c-paragraph'>10.</p>`,
                    `<p class='c-paragraph'>1 e 10.</p>`,
                    `<p class='c-paragraph'>10 e 1.</p>`,
                    `<p class='c-paragraph'>10 e 10.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>A variável <strong>x</strong> da linha 2 é local da função <strong>func()</strong>, sendo visível para a chamada <strong>print()</strong> da linha 3. Por sua vez, a variável <strong>x</strong> da linha 5 é global, sendo visível para a chamada <strong>print()</strong> da linha 7. </p>
                `,
                "negative_feedback_topic": "<span>Escopo de visibilidade</span>",
                "negative_feedback_link": "#m2q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">(MS CONCURSOS –– Creci – 1° Região (RJ) – Analista de TI - 2016) Qual alternativa representa a declaração de uma variável na linguagem de programação Python?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>var valor = 3</p>`,
                    `<p class='c-paragraph'>boolean inicio = falso</p>`,
                    `<p class='c-paragraph'>texto = “texto de exemplo”</p>`,
                    `<p class='c-paragraph'>int i = 1</p>`,
                    `<p class='c-paragraph'>var int = 1</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Lembre-se de que, em Python, as variáveis não são declaradas com o tipo vinculado. Assim, basta atribuir um valor inicial à variável para que ela possa ser usada. Isso ocorre com a variável texto, que recebe o valor inicial “texto de exemplo”.</p>
                `,
                "negative_feedback_topic": "<span>Variáveis</span>",
                "negative_feedback_link": "#m2q2"
            }
        ]
    }

    const activity2 = document.querySelector('yduqs-questions[question_id="2"]');
    activity2.settings = question2;

    // Questões do Módulo 03
    var question3 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Considere a expressão a seguir: 2 + 3 – 4 ** 2 + 5 / 2 – 5 // 2</p>
                  <p class="c-paragraph">Assinale a opção com o valor correto dessa expressão em Python.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>-10.5</p>`,
                    `<p class='c-paragraph'>-1</p>`,
                    `<p class='c-paragraph'>1.5</p>`,
                    `<p class='c-paragraph'>2</p>`,
                    `<p class='c-paragraph'>1</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>Lembre-se de que o operador ** tem precedência maior que os operadores / e //, os quais, por sua vez, têm precedência sobre + e -. Ou seja, primeiro será efetuada a exponenciação (4**2) e depois as divisões comum (5/2) e inteira (5//2), para posteriormente serem efetuadas as somas e subtrações. </p>
                `,
                "negative_feedback_topic": "<span>Precedência de operadores</span>",
                "negative_feedback_link": "#m3q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph pb-5">(Adaptada de COMPERVE - UFRN – Engenharia da Computação - 2019) Python é uma linguagem interpretada largamente utilizada na atualidade. Não requer tipagem de variáveis e sua sintaxe indentada favorece a organização do código. Uma das suas funcionalidades mais poderosas são as listas. Considere o código em Python a seguir:</p>
                 <yduqs-code-snipet dark="true" language_code="python" code="a = ['UF'] + ['RN']

len(a)
b = ['4']*4
len(b) 
">
            </yduqs-code-snipet>
                  <p class="c-paragraph pt-5">A saída correta correspondente às linhas 2 e 4 do código é:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>2 e 2.</p>`,
                    `<p class='c-paragraph'>4 e 16.</p>`,
                    `<p class='c-paragraph'>2 e 16.</p>`,
                    `<p class='c-paragraph'>4 e 4.</p>`,
                    `<p class='c-paragraph'>2 e 4.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>O operador + realiza operações de soma para tipos numéricos e concatenação para tipos sequenciais. Assim, a variável a na linha 1 passa a ser composta dos itens 'UF' e 'RN'. Dessa forma, a chamada len(a) retorna o tamanho 2, número de elementos de a. De forma semelhante, o operador * realiza operações de multiplicação para tipos numéricos e concatenação de cópias para tipos sequenciais. Assim, a variável b na linha 3 passa a ser a lista ['4', '4', '4', '4']. E a chamada len(b) retorna o tamanho 4, número de elementos de b. </p>
                `,
                "negative_feedback_topic": "<span>Operadores sequenciais comuns</span>",
                "negative_feedback_link": "#m3q2"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3.settings = question3;

    // Questões do Módulo 04
    var question4 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                <p class="c-paragraph">(PGE - RO – Técnico da Procuradoria – Tecnologia da Informação - 2015) Na linguagem Python, um comando como <strong>a=input("XXX")</strong> provoca:</p>
              `,
                "options": [
                    `<p class='c-paragraph'>Associação à variável “a” de uma função denominada “XXX” que pertence à biblioteca “input”.</p>`,
                    `<p class='c-paragraph'>A criação de uma lista de valores denominada “a”, cujo elemento inicial é a string “XXX”.</p>`,
                    `<p class='c-paragraph'>A leitura de um valor do arquivo de entrada constantemente designado de acordo com um formato expresso pela string “XXX”.</p>`,
                    `<p class='c-paragraph'>Um prompt no dispositivo de saída e a leitura de um valor que é armazenado na variável “a”.</p>`,
                    `<p class='c-paragraph'>A associação à variável “a” de uma função denominada “XXX”, que pertence à biblioteca “input”.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                <p class='c-paragraph'>A função input() tanto exibe na tela a string “XXX” quanto permite que o valor informado pelo usuário seja armazenado na variável “a”. </p>
              `,
                "negative_feedback_topic": "<span>Entrada de dados com a função input() </span>",
                "negative_feedback_link": "#m4q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                <p class="c-paragraph pb-5">(TJ - BA – Analista Judiciário – Tecnologia da Informação – Reaplicação - 2015) Analise o trecho de programa Python apresentado a seguir:
</p>
                 <yduqs-code-snipet dark="true" language_code="python" code="
L = [1,2,3,4,5,6,7,8]
print L[::-1]
">
            </yduqs-code-snipet>
                  <p class="c-paragraph pt-5">Ao ser executado, o resultado exibido é:</p>
              `,
                "options": [
                    `<p class='c-paragraph'>[1, 2, 3, 4, 5, 6, 7, 8]</p>`,
                    `<p class='c-paragraph'>[8, 7, 6, 5, 4, 3, 2, 1]</p>`,
                    `<p class='c-paragraph'>[ ]</p>`,
                    `<p class='c-paragraph'>[8]</p>`,
                    `<p class='c-paragraph'>[1]</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                <p class='c-paragraph'>A impressão da sequência L com a chamada L[::-1] é feita percorrendo toda a sequência L, em sentido inverso. </p>
              `,
                "negative_feedback_topic": "<span>Impressão de sequências</span>",
                "negative_feedback_link": "#m4q2"
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
                  <p class="c-paragraph">XXX</p>
                `,
            "options": [
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>XXX</p>
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
                  <p class="c-paragraph">XXX</p>
                `,
            "options": [
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>XXX</p>
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
                  <p class="c-paragraph">XXX</p>
                `,
            "options": [
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>XXX</p>
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
                  <p class="c-paragraph">XXX</p>
                `,
            "options": [
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`,
                `<p class='c-paragraph'>XXX</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>XXX</p>
                `
        }
        ]
    }

    const exercise4 = document.querySelector('yduqs-questions[exercise_id="4"]');
    exercise4.settings = exercises4; */

});