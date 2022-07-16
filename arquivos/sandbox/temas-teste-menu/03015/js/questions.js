// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">
                  Biólogos estruturais usam métodos como cristalografia de raios-X, espectroscopia de ressonância magnética nuclear e microscopia crioeletrônica para determinar a localização de cada átomo em relação aos outros na molécula de proteína. Em seguida, eles depositam esses dados brutos em forma de arquivo com as coordenadas dos átomos em um banco de dados biológico. Um banco de dados biológico que armazena a informação descrita no enunciado é classificado como: 
                  </p>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    Curado.
                    </p>`,
                    `<p class='c-paragraph'>
                    Especializado.
                    </p>`,
                    `<p class='c-paragraph'>
                    De acesso restrito.
                    </p>`,
                    `<p class='c-paragraph'>
                    Secundário.
                    </p>`,
                    `<p class='c-paragraph'>
                    Primário.
                    </p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  
                  <div class="legenda">
                    <p class='c-paragraph'>
                    Bancos de dados primários armazenam dados brutos originados de experimentos na bancada, que é a situação descrita no enunciado. Os dados de um banco curado devem passar pelo crivo de especialistas. Bancos especializados tratam de um interesse de pesquisa em particular. Acesso restrito é o caso de bancos que exigem pagamento para acesso. Já o banco secundário é construído a partir de análises dos dados primários.
                    </p>
                  </div> 

                `,
                "negative_feedback_topic": "<span>Banco de dados</span>",
                "negative_feedback_link": "#m1q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                <p class="c-paragraph">
                Para compreender a complexidade de um organismo podemos usar técnicas de biologia molecular aliadas a ferramentas de bioinformática. Sobre essa abordagem, escolha a sequência que representa a ordem correta das etapas que devem ser realizadas do início ao final do processo.
                </p>
              `,
              "options": [
                  `<p class='c-paragraph'>
                  Extração do DNA -> sequenciamento genômico -> predição gênica -> anotação funcional.
                  </p>`,
                  `<p class='c-paragraph'>
                  Sequenciamento genômico -> predição gênica -> anotação funcional -> extração do DNA.
                  </p>`,
                  `<p class='c-paragraph'>
                  Extração do DNA -> predição gênica -> sequenciamento genômico -> anotação funcional.
                  </p>`,
                  `<p class='c-paragraph'>
                  Predição gênica -> extração do DNA -> anotação funcional -> sequenciamento genômico.
                  </p>`,
                  `<p class='c-paragraph'>
                  Extração do DNA -> sequenciamento genômico -> anotação funcional -> predição gênica.
                  </p>`
              ],
              "correct_anwser": 1,
              "positive_feedback": `
                <p class='c-paragraph'>
                Primeiro é necessário extrair e purificar o DNA do restante dos componentes celulares, e só então usá-lo como matéria-prima para o sequenciamento. Determinada a ordem de nucleotídeos pelo sequenciamento, primeiro as regiões de genes são identificadas e depois é atribuída uma função para esse gene.
                </p>
              `,
              "negative_feedback_topic": "<span>Anotação genômica</span>",
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
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">
                  Estudar em larga escala um conjunto de moléculas com o objetivo de entender mecanismos celulares é uma estratégia muito usada atualmente na pesquisa. Nesse contexto, diferencie um estudo genômico de um estudo metabolômico quanto ao tipo de molécula estudada.
                  </p>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    A genômica estudo todo conteúdo de DNA, enquanto a metabolômica abrange o estudo de metabólitos.
                    </p>`,
                    `<p class='c-paragraph'>
                    Estudo genômico é aquele que analisa todos os RNAs, já a metabolômica aborda os metabólitos. 
                    </p>`,
                    `<p class='c-paragraph'>
                    O genoma, ou seja, todo conteúdo de DNA, é o alvo da genômica. Enquanto isso, a metabolômica tem como alvo os RNAs.
                    </p>`,
                    `<p class='c-paragraph'>
                    O conjunto de DNAs é estudado pela genômica, e os conjuntos de proteínas são alvo da metabolômica.
                    </p>`,
                    `<p class='c-paragraph'>
                    Todo conjunto de RNAs e DNAs são o alvo da genômica, por outro lado, metabólitos e proteínas totais são o objeto de estudo da metabolômica.
                    </p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>
                  As ciências ômicas estudam todo o conjunto de determinado tipo de moléculas produzido pelas células. O nome dado a cada uma dessas áreas é atribuído de acordo com o tipo de molécula estudada, por isso: a genômica estuda todo o DNA de uma célula; a transcriptômica, os transcritos (RNAs); a proteômica, as proteínas; e a metabolômica, os metabólitos.
                  </p>
                `,
                "negative_feedback_topic": "<span>Principais conceitos das ciências ômicas</span>",
                "negative_feedback_link": "#m2q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">
                  A transcriptômica é o estudo do conjunto completo de transcrito de um dado organismo, órgão, tecido ou linhagem celular. Podemos saber a sequência de todo conjunto de RNAs extraído de um determinado tecido utilizando qual das técnicas seguintes?
                  </p>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    Eletroforese bidimensional em gel de poliacrilamida.
                    </p>`,
                    `<p class='c-paragraph'>
                    Espectrometria de massas.
                    </p>`,
                    `<p class='c-paragraph'>
                    Ressonância magnética nuclear.
                    </p>`,
                    `<p class='c-paragraph'>
                    Microarranjo.
                    </p>`,
                    `<p class='c-paragraph'>
                    Cristalografia de raio-X.
                    </p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>
                  O microarranjo é a técnica de escolha para saber a sequência de todo conjunto de RNAs extraído de um determinado tecido. As demais técnicas são usadas para o estudo de outras moléculas biológicas: cristalografia de raio-X para estrutura de proteínas, espectrometria de massas e eletroforese bidimensional em gel de poliacrilamida para proteômica, e ressonância magnética nuclear para metabolômica ou estrutura de proteínas. 
                  </p>
                `,
                "negative_feedback_topic": "<span>Técnicas utilizadas</span>",
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