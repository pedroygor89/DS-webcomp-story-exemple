// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function () {
  // Questões do Módulo 01
  var question1 = {
    questions: [
      {
        question_title: `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">A farinha de penas é utilizada na formulação das rações de animais de produção e de companhia. Sobre esse assunto, assinale a alternativa correta:</p>
                `,
        options: [
          `<p class='c-paragraph'>A presença da proteína queratina na composição da farinha de penas é responsável pela sua alta digestibilidade. </p>`,
          `<p class='c-paragraph'>O tratamento térmico excessivo das penas determina desnaturação das proteínas, o que aumenta seu valor nutricional. </p>`,
          `<p class='c-paragraph'>Para garantir a digestibilidade da farinha de penas é necessária a hidrólise da queratina por ação de calor e pressão. </p>`,
          `<p class='c-paragraph'>A legislação permite o uso da farinha de penas em quantidades mínimas na formulação para animais ruminantes.</p>`,
          `<p class='c-paragraph'>Para garantir a qualidade e a segurança da farinha de penas, esta deve ser armazenada em locais úmidos com o objetivo de aumentar o teor de umidade do produto.</p>`
        ],
        correct_anwser: 3,
        positive_feedback: `
                  
                  <div class="legenda">
                    <p class='c-paragraph'>Embora as penas das aves possuam alto teor de proteína bruta (mínimo de 80%), sabe-se que 85 a 90% dessa proteína é a queratina, que se caracteriza por apresentar baixa solubilidade e alta resistência à ação de enzimas proteolíticas do estômago e intestino dos animais. Portanto, é necessária a hidrólise da queratina para garantir a digestibilidade da farinha de penas.</p>
                  </div>        
                `,
        negative_feedback_topic:
          '<span>Características da farinha de penas</span>',
        negative_feedback_link: '#topic-01'
      },
      {
        question_title: `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">O processamento dos resíduos oriundos do abate é uma operação que gera uma série de benefícios ambientais e econômicos. Durante o processamento da farinha de penas,</p>
                `,
        options: [
          `<p class='c-paragraph'>a matéria-prima utilizada para sua produção pode ser composta por penas não decompostas, obtidas no abate de aves, sendo permitida a inclusão de animais mortos recolhidos em propriedades com o objetivo de aumentar o valor nutricional do produto.</p>`,
          `<p class='c-paragraph'>a matéria-prima (penas) pode ficar armazenada em temperatura ambiente por até 48 horas antes do seu processamento em farinha.</p>`,
          `<p class='c-paragraph'>a hidrólise da queratina ocorre no equipamento denominado digestor, em cujo interior circula vapor úmido que entra em contato direto com o produto a ser digerido.</p>`,
          `<p class='c-paragraph'>ocorre a passagem das penas no percolador, que possui um sistema de dupla camisa, por onde circula água gelada, o que facilita a separação da gordura.</p>`,
          `<p class='c-paragraph'>a redução do teor de umidade vai ocorrer inicialmente no digestor e posteriormente será complementada na passagem pelo secador.</p>`
        ],
        correct_anwser: 5,
        positive_feedback: `
                  <p class='c-paragraph'>A redução do teor de umidade ocorre nos equipamentos que utilizam calor seco, como o digestor e o secador. Essa redução do teor de umidade permite a conservação das farinhas em temperatura ambiente, assim como reduz as alterações nas gorduras e o crescimento microbiano, contribuindo para um aumento da vida útil do produto. </p>
                `,
        negative_feedback_topic:
          '<span>Processamento da farinha de penas de aves</span>',
        negative_feedback_link: '#topic-02'
      }
    ]
  }

  const activity1 = document.querySelector('yduqs-questions[question_id="1"]')
  activity1.settings = question1

  // Questões do Módulo 02
  var question2 = {
    questions: [
      {
        question_title: `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">A farinha de vísceras pode ser processada por batelada ou por meio de processo contínuo. O processo contínuo apresenta como vantagem</p>
                `,
        options: [
          `<p class='c-paragraph'>maior exposição da matéria-prima ao calor, o que vai contribuir para um melhor valor nutricional da farinha.</p>`,
          `<p class='c-paragraph'>um equipamento que ocupa menos espaço, mas o consumo de energia é maior.</p>`,
          `<p class='c-paragraph'>uma farinha com maior valor nutricional, pois o tempo de exposição da matéria-prima ao calor é menor.</p>`,
          `<p class='c-paragraph'>maior qualidade microbiológica, pois o tratamento térmico é mais drástico.</p>`,
          `<p class='c-paragraph'>maior teor de umidade da farinha, o que vai contribuir para um melhor rendimento da matéria-prima.</p>`
        ],
        correct_anwser: 3,
        positive_feedback: `
                  <p class='c-paragraph'>Quanto mais severo for o tratamento térmico utilizado, maior é a perda de proteínas e minerais. No processo contínuo, a etapa de cozimento no digestor é mais rápida, o que contribui para uma melhor qualidade nutricional da farinha produzida.</p>
                `,
        negative_feedback_topic:
          '<span>Processamento da farinha de vísceras de aves</span>',
        negative_feedback_link: '#topic-03'
      },
      {
        question_title: `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">As vísceras não comestíveis de aves utilizadas na produção de farinhas podem estar contaminadas por microrganismos patogênicos, sendo o principal deles</p>
                `,
        options: [
          `<p class='c-paragraph'><i>Clostridium</i> sp.</p>`,
          `<p class='c-paragraph'><i>Escherichia coli</i>.</p>`,
          `<p class='c-paragraph'><i>Bacillus</i> sp.</p>`,
          `<p class='c-paragraph'><i>Vibrio</i> sp.</p>`,
          `<p class='c-paragraph'><i>Salmonella</i> spp.</p>`
        ],
        correct_anwser: 5,
        positive_feedback: `
                  <p class='c-paragraph'>As aves são os principais reservatórios das espécies <i>Salmonella</i>. Nelas, esse microrganismo encontra-se localizado não somente no trato intestinal, mas também no oviduto. A falta de cuidados higiênico-sanitários antes, durante e após o preparo da carcaça pode contribuir para o maior risco da presença das espécies <i>Salmonella</i> nos resíduos oriundos do abate das aves.</p>
                `,
        negative_feedback_topic: '<span>Contaminação microbiana</span>',
        negative_feedback_link: '#topic-04'
      }
    ]
  }

  const activity2 = document.querySelector('yduqs-questions[question_id="2"]')
  activity2.settings = question2

  // Questões do Módulo 03
  var question3 = {
    questions: [
      {
        question_title: `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Os resíduos oriundos de incubatório de aves apresentam características que limitam seu uso em rações para animais. Entre elas, podemos citar</p>
                `,
        options: [
          `<p class='c-paragraph'>o elevado teor de proteína bruta.</p>`,
          `<p class='c-paragraph'>o baixo teor de matéria mineral.</p>`,
          `<p class='c-paragraph'>o elevado teor de cálcio.</p>`,
          `<p class='c-paragraph'>o elevado teor de aminoácidos.</p>`,
          `<p class='c-paragraph'>maior valor de energia metabolizável.</p>`
        ],
        correct_anwser: 3,
        positive_feedback: `
                  <p class='c-paragraph'>Devido à presença da casca de ovo, rica em carbonato de cálcio, a farinha oriunda de resíduos de incubatório apresenta na sua composição elevado teor de cálcio.</p>
                `,
        negative_feedback_topic:
          '<span>Utilização da farinha de resíduos de incubatório na alimentação animal</span>',
        negative_feedback_link: '#topic-05'
      },
      {
        question_title: `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Qual o fator que mais altera a composição bromatológica da farinha de resíduos de incubatório?</p>
                `,
        options: [
          `<p class='c-paragraph'>A presença ou ausência da casca de ovo.</p>`,
          `<p class='c-paragraph'>O teor de umidade do resíduo do incubatório.</p>`,
          `<p class='c-paragraph'>O tempo entre a obtenção do resíduo e seu processamento.</p>`,
          `<p class='c-paragraph'>O tipo de embalagem utilizado para o envase da farinha.</p>`,
          `<p class='c-paragraph'>A contaminação microbiana inicial presente nos resíduos oriundos do incubatório.</p>`
        ],
        correct_anwser: 1,
        positive_feedback: `
                  <p class='c-paragraph'>A composição bromatológica será influenciada pela presença ou ausência da casca de ovo. Quanto maior a quantidade de casca de ovo, maior será o teor de cálcio e menor o teor de proteína da farinha produzida. Os demais fatores influenciarão na qualidade e na segurança da farinha, mas irão interferir de maneira não significativa na sua composição.</p>
                `,
        negative_feedback_topic:
          '<span>Utilização da farinha de resíduos de incubatório na alimentação animal </span>',
        negative_feedback_link: '#topic-05'
      }
    ]
  }

  const activity3 = document.querySelector('yduqs-questions[question_id="3"]')
  activity3.settings = question3

  // Questões do Módulo 04
  var question4 = {
    questions: [
      {
        question_title: `
              <h3 class="c-heading">Questão 1</h3>
                <p class="c-paragraph">A rancificação oxidativa é uma das alterações mais preocupantes em óleos e gorduras. Sobre o assunto, pode-se afirmar que</p>
              `,
        options: [
          `<p class='c-paragraph'>o grau de insaturação de um óleo não influencia na ocorrência do ranço oxidativo, que só depende da exposição ao oxigênio.</p>`,
          `<p class='c-paragraph'>o óleo de aves apresenta maior risco da ocorrência do ranço oxidativo devido à sua composição rica em ácidos graxos insaturados.</p>`,
          `<p class='c-paragraph'>a presença de luz, de metais e a temperatura ambiente elevada são fatores que não interferem na ocorrência do ranço oxidativo.</p>`,
          `<p class='c-paragraph'>os óleos de aves destinados à produção de ração para animais monogástricos são submetidos ao processo de rancificação oxidativa para aumentar sua palatabilidade.</p>`,
          `<p class='c-paragraph'>o ranço oxidativo altera as características sensoriais do óleo de aves, causando mudanças de cor e odor, mas não altera seu valor nutricional.</p>`
        ],
        correct_anwser: 2,
        positive_feedback: `
                <p class='c-paragraph'>O ranço oxidativo é uma alteração que ocorre somente em óleos e gorduras que apresentam na sua composição ácidos graxos insaturados, pois o radical livre se forma no carbono adjacente à dupla ligação. Quanto maior o grau de insaturação (duplas ligações), mais longa será a etapa de propagação da rancidez oxidativa e mais compostos de degradação serão formados.</p>
              `,
        negative_feedback_topic: '<span>Rancificação</span>',
        negative_feedback_link: '#topic-06'
      },
      {
        question_title: `
              <h3 class="c-heading">Questão 2</h3>
                <p class="c-paragraph">A qualidade do resíduo utilizado no processamento do óleo de aves e a sua conservação têm influência na alteração da rancificação. Para evitar ou retardar o ranço hidrolítico, é necessário</p>
              `,
        options: [
          `<p class='c-paragraph'>o uso de aditivos antioxidantes após o processamento do óleo de aves.</p>`,
          `<p class='c-paragraph'>a conservação do óleo de aves em embalagens herméticas para evitar o contato do produto com o oxigênio. </p>`,
          `<p class='c-paragraph'>a conservação do óleo de aves em embalagens opacas para evitar a ação da luz sobre a gordura.</p>`,
          `<p class='c-paragraph'>respeitar o tempo limite de 24h entre o abate e o processamento do resíduo para reduzir/evitar o crescimento microbiano.</p>`,
          `<p class='c-paragraph'>adicionar água durante a fase de decantação para aumentar o teor de umidade do produto.</p>`
        ],
        correct_anwser: 4,
        positive_feedback: `
                <p class='c-paragraph'>A principal causa do ranço hidrolítico é a ação de enzimas de origem microbiana. Quanto menor for o tempo entre o abate da ave e o processamento térmico do resíduo gerado, menor será o crescimento de microrganismos contaminantes e consequentemente menor será o risco de rancificação por ação das enzimas produzidas por eles.</p>
              `,
        negative_feedback_topic: '<span>Rancificação</span>',
        negative_feedback_link: '#topic-06'
      }
    ]
  }

  const activity4 = document.querySelector('yduqs-questions[question_id="4"]')
  activity4.settings = question4

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
})
