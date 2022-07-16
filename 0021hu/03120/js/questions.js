// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Paralelamente ao surgimento da ideia do que será, posteriormente, identificado como instalação, temos no final da década de 1950 o surgimento de novas propostas e práticas artísticas, questionando as certezas modernistas. Quais são essas propostas?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Surrealismo, Funk art, Performance, <em>Happening</em>.</p>`,
                    `<p class='c-paragraph'><em>Happening</em>, Combine, <em>Assemblage</em>, Funk art.</p>`,
                    `<p class='c-paragraph'>Arte conceitual, Performance, <em>Happening</em>, Minimalismo.</p>`,
                    `<p class='c-paragraph'>Novo realismo, Arte Pop, Fluxus, <em>Happening</em>.</p>`,
                    `<p class='c-paragraph'><em>Happening</em>, Combine, Situacionismo, Funk art.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>As quatro propostas estão vinculadas a trabalhos nos quais as relações do corpo em ação no espaço demandam uma abordagem distinta desse, com tratamentos e materiais não reconhecidos, como da alta cultura, além de vinculados aos artistas que propuseram essas novas experiências, como: Rauschenberg, Kaprow, Jim Dine, George Segal, Claes Oldenburg e Ed Kienholz.</p>
                `,
                "negative_feedback_topic": "<span>Os sentidos do termo</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Qual desses conjuntos de características pode ser atribuído sem restrições a uma possível definição de instalação artística?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Caráter efêmero, processual, uso dos meios de comunicação de massa.</p>`,
                    `<p class='c-paragraph'>Especificidade do lugar, caráter efêmero, ocupação espacial, dimensão imersiva.</p>`,
                    `<p class='c-paragraph'>Caráter efêmero, processual, mobilidade, interdisciplinaridade.</p>`,
                    `<p class='c-paragraph'>Dimensão imersiva, especificidade do lugar, mobilidade, produção em massa.</p>`,
                    `<p class='c-paragraph'>Dimensão imersiva, movimento, renovação das formas, mobilidade.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>Podemos identificar um conjunto de características e elementos que, articulados, podem oferecer uma ideia das principais propostas do que entendemos por instalação artística, como: especificidade do lugar, caráter efêmero, dimensão, ocupação espacial, diversidade de materiais, diversidade de linguagens, experiência corporal, inserção no trabalho, dimensão imersiva, experiência sensível e sensorial.</p>
                `,
                "negative_feedback_topic": "<span>Os sentidos do termo</span>",
                "negative_feedback_link": "#topic-01"
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
                  <p class="c-paragraph">Por que é possível afirmar que tempo e espaço podem ser pensados como ideias variáveis, e não como conceitos definitivos?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Porque não há uma concepção única de tempo.</p>`,
                    `<p class='c-paragraph'>Porque o tempo não para.</p>`,
                    `<p class='c-paragraph'>Porque o espaço é infinito.</p>`,
                    `<p class='c-paragraph'>Porque existem diferentes maneiras de se medir o tempo.</p>`,
                    `<p class='c-paragraph'>Apesar de existirem para além daquilo com que se relacionam, são variáveis de cultura para cultura.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>Além de ser a única alternativa que contempla os dois termos, ambos podem ser entendidos como construção cultural e social.</p>
                `,
                "negative_feedback_topic": "<span>Tempo-espaço: artistas e o “vazio”</span>",
                "negative_feedback_link": "#topic-02"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Dentro das muitas possibilidades de identificar pontos comuns entre a produção de artistas que atuam no campo da instalação, ligth and space foi um termo criado para referir-se a um grupo que tem características como:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Criar a especificidade do lugar como uma resposta pela desmaterialização, privilegiando a noção de percepção do espaço a partir do elemento do qual se valem para acentuar o olhar.</p>`,
                    `<p class='c-paragraph'>Criar a especificidade do lugar como uma resposta pela materialização, privilegiando a noção de percepção do espaço. </p>`,
                    `<p class='c-paragraph'>Criar a especificidade do lugar como uma resposta pela desmaterialização, privilegiando o espaço.</p>`,
                    `<p class='c-paragraph'>Uma resposta para a desmaterialização da arte, privilegiando a noção de tempo e espaço.</p>`,
                    `<p class='c-paragraph'>Criar a especificidade do lugar privilegiando a noção do espaço.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>A expressão refere-se à especificidade de criar uma condição de percepção do espaço/lugar a partir de elementos específicos, como a luz, para acentuar a percepção do lugar pelo olhar do visitante/observador.</p>
                `,
                "negative_feedback_topic": "<span>Tempo-espaço: artistas e o “vazio”</span>",
                "negative_feedback_link": "#topic-02"
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
                  <p class="c-paragraph">Dentre autores que pesquisam e estudam o assunto da instalação, temos Claire Bishop e Nicolas de Oliveira. Para este último teórico, mesmo que inclassificáveis, é possível encontrar pontos comuns que ordenam e organizam, articulando formas de compreender essa produção artística. Quais seriam eles?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Espaço, tempo, meio e arquitetura.</p>`,
                    `<p class='c-paragraph'>Tempo, tecnologia, corpo e ideologia.</p>`,
                    `<p class='c-paragraph'>Site, conceito, espaço e tempo.</p>`,
                    `<p class='c-paragraph'>Site, meio, museu e arquitetura.</p>`,
                    `<p class='c-paragraph'>Espaço, meio, tempo e corpo.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>Eles são meios, elementos e interesses comuns, em torno dos quais a produção pode ser articulada, abandonando uma possível relação cronológica de produção, ou até mesmo a vinculação de seus realizadores a movimentos artísticos, ou grupos.</p>
                `,
                "negative_feedback_topic": "<span>A instalação como espaço heterotópico</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Por que a instalação artística é popular?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Durante as décadas de 1920 e 1930, muitos artistas viam a instalação artística como uma estratégia de criar arte não colecionável. </p>`,
                    `<p class='c-paragraph'>Porque ela não é um objeto de arte.</p>`,
                    `<p class='c-paragraph'>Porque ela não precisa ser entendida.</p>`,
                    `<p class='c-paragraph'>Durante as décadas de 1930 e 1940, muitos artistas viam a instalação artística como uma estratégia de criar arte colecionável.</p>`,
                    `<p class='c-paragraph'>Durante as décadas de 1960 e 1970, muitos artistas viam a instalação artística como uma estratégia de criar arte não colecionável.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>Diretamente relacionada com os processos de ruptura conceitual, artistas pretendiam com as instalações criar uma experiência sensível, por substituição àquelas econômicas determinadas pelo mercado de arte.</p>
                `,
                "negative_feedback_topic": "<span>Para uma possível tentativa de se articular distintas propostas artísticas com a ideia de intervenção</span>",
                "negative_feedback_link": "#topic-04"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3.settings = question3;

});