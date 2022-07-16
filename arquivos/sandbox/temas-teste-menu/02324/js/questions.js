// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">O surgimento da OIE (Office Internacional des Epizooties) teve como princípio evitar a disseminação de doenças nos animais de criação. Dentre seus objetivos, está a transparência entre os países signatários, um compromisso assumido pelos membros de relatar à OIE doenças detectadas em seu território. A OIE por sua vez divulga tais informações para outros países. Essas informações, enviadas imediatamente, possibilitam que sejam tomadas medidas preventivas contra a introdução de doenças. <br><br>
                  Além da transparência, quais são os objetivos da OIE?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Solidariedade internacional, segurança particular, alimentar e bem-estar animal</p>`,
                    `<p class='c-paragraph'>Solidariedade internacional, segurança sanitária e disseminação de doenças</p>`,
                    `<p class='c-paragraph'>Solidariedade internacional, patrocínio aos produtores e difusão de informações científicas</p>`,
                    `<p class='c-paragraph'>Solidariedade internacional, estruturações do serviço veterinário e a segurança sanitária</p>`,
                    `<p class='c-paragraph'>Solidariedade internacional, incentivo fiscal para clínicas veterinárias e segurança particular</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>A transparência entre os países e produtores, a estruturação dos serviços veterinários, a difusão das informações científicas relativas ao surgimento de doenças, o estímulo da solidariedade internacional entre países estruturados e não estruturados, a garantia da segurança sanitária, alimentar e o bem-estar animal são os objetivos da OIE. Não é objetivo da OIE oferecer segurança particular ou patrocinar produtores ou clínicas veterinárias. Combater a disseminação de doenças é um dos pilares da criação da OIE.</p>
                `,
                "negative_feedback_topic": "<span>Defesa sanitária animal - uma cooperação internacional</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">“Durante a pandemia, o número de pets shops no país teve um aumento significativo, segundo levantamento do Instituto Pet Brasil. A estimativa da entidade é que 2020 tenha chegado ao fim com 40 mil lojas, uma alta de 22% em relação ao ano anterior. O home office também foi uma contribuição importante para a expansão do segmento. Muitas pessoas passaram a investir mais nos cuidados com os pets e outras, que não tinham um bichinho, decidiram adotar ou comprar um” (reportagem: Pet shop, serviço essencial na pandemia, é opção de negócio que não fecha, em Folha de São Paulo, 2021). <br><br>
                  Os pets shops são estabelecimentos comerciais onde existem sistemas aquícolas de criação com animais aquáticos destinados à ornamentação; esses estabelecimentos estão sujeitos ao controle sanitário estabelecido no PNSAAC. Além dos pets shops, quais outros sistemas aquícolas de criação estão sujeitos a esse controle sanitário?
                  </p>
                `,
                "options": [
                    `<p class='c-paragraph'>Pisciculturas, mariculturas e aquários domésticos</p>`,
                    `<p class='c-paragraph'>Psiculturas, raniculturas e aquários domésticos</p>`,
                    `<p class='c-paragraph'>Carcinicultura, ranicultura e aquários privados</p>`,
                    `<p class='c-paragraph'>Aquários públicos, privados e domésticos</p>`,
                    `<p class='c-paragraph'>Cooperativas de pescadores, barcos de pesca e peixarias</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Os sistemas aquícolas de criação regulamentados pelo PNSAAC são criadouros comerciais, aquários públicos e privados (excetuando-se os aquários domésticos) e lojas comercializadoras de animais e produtos (pets shops, aquariofilia e outros). Não faz parte do programa a atividade pesqueira de animais selvagens em vida livre ou que não foram manejados para atividades comerciais.</p>
                `,
                "negative_feedback_topic": "<span>Aquicultura com sanidade</span>",
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
                <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">A ficha de registro sanitário é um importante documento no monitoramento de sistemas aquícolas. Neste documento, constam informações úteis para investigações epidemiológicas, o que torna possível localizar a origem do surto de doenças. O manual <i>Aquicultura com sanidade</i> (BRASIL, 2020), fornece uma lista de doenças com importância internacional. E se a infecção for suspeita ou confirmada, a notificação ao órgão governamental responsável deve ser obrigatória e imediata. Neste caso, qual é órgão governamental que obrigatoriamente deve ser avisado?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Cooperativas de criadores</p>`,
                    `<p class='c-paragraph'>Associação Brasileira de Pesca Artesanal</p>`,
                    `<p class='c-paragraph'>Secretaria de Promoção e Defesa Animal do Rio de Janeiro</p>`,
                    `<p class='c-paragraph'>Serviço Veterinário Oficial</p>`,
                    `<p class='c-paragraph'>Polícia Ambiental</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>Existem doenças com importância internacional que obrigatoriamente devem ser notificadas ao Serviço Veterinário Oficial, para que haja agilidade na aplicação de medidas sanitárias contra a propagação. Outras entidades relacionadas com a aquicultura também podem ser avisadas, porém o PNSAAC estabelece obrigatoriedade de notificação apenas para o Serviço Veterinário Oficial da região em que se encontra o criadouro. Não há obrigatoriedade de aviso às Cooperativas de criadores, Associação Brasileira de Pesca Artesanal, Secretaria de Promoção e Defesa Animal do Rio de Janeiro ou à Polícia Ambiental.</p>
                `,
                "negative_feedback_topic": "<span>Diagnósticos de doenças</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">A desinfecção de criadouros, tanques de transporte e equipamentos utilizados na despesca é um procedimento útil na eliminação de possíveis agentes etiológicos; outro procedimento realizado após a despesca é o vazio sanitário. Sobre este procedimento, é correto afirmar que:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Consiste na retirada da alimentação para esvaziamento do trato digestivo dos animais.</p>`,
                    `<p class='c-paragraph'>Consiste na movimentação de animais para recipientes desinfectados.</p>`,
                    `<p class='c-paragraph'>Consiste em submeter o criadouro a um período sem animais para eliminar possíveis agentes etiológicos.</p>`,
                    `<p class='c-paragraph'>Consiste no esvaziamento do criadouro para expor os animais a níveis reduzidos de oxigênio.</p>`,
                    `<p class='c-paragraph'>Consiste em restringir a movimentação de pessoal na margem do criadouro para reduzir o estresse dos animais.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Após a despesca, o criadouro deve passar por um período sem animais para que seja possibilitado o interrompimento do ciclo de vida de agentes etiológicos. Esse procedimento é denominado vazio sanitário. Restringir a movimentação de pessoal na margem do criadouro para reduzir o estresse dos animais é um procedimento anterior à despesca. Já a movimentação de animais para recipientes desinfectados é um procedimento realizado durante a despesca, assim como o esvaziamento do criadouro.</p>
                `,
                "negative_feedback_topic": "<span>Boas práticas de manejo em aquicultura</span>",
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
                <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">A construção de criadouros no modelo de tanque escavado demanda a retirada da vegetação, que é um dos impactos ambientais negativos mais comuns gerados pela implantação de aquiculturas. Marque a alternativa que apresenta uma forma de minimizar os impactos causados na vegetação.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Escolher áreas anteriormente utilizadas pela agropecuária.	</p>`,
                    `<p class='c-paragraph'>Plantar árvores em locais de erodidos.</p>`,
                    `<p class='c-paragraph'>Plantar hortaliças em sistemas de hidroponia.</p>`,
                    `<p class='c-paragraph'>Construir o viveiro em época com menor probabilidade de chuva.</p>`,
                    `<p class='c-paragraph'>Construir barragens em rios e córregos naturais.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>A escolha de áreas previamente utilizadas para agricultura ou pecuária pode evitar o desmatamento da vegetação nativa e ainda promover a utilização de áreas degradadas e inutilizáveis para outros modelos de cultivo. O plantio de árvores em locais erodidos e a escolha de construir o viveiro em épocas com menos chuva reduzirão o impacto no solo. Já o cultivo de hortaliças em sistema de hidroponia pode amenizar o impacto dos efluentes oriundos da aquicultura. É expressamente desaconselhada a construção de barragem em rios e córregos.</p>
                `,
                "negative_feedback_topic": "<span>Impactos na vegetação</span>",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">De acordo com a Lei Federal nº 9.433 de 1997 (Lei das águas), que regulamenta o uso da água no Brasil, os recursos hídricos são bens naturais de todos e devem ter uso múltiplo pela população. Sobre essa regulamentação, é correto afirmar que:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>A água utilizada em uma aquicultura deve ser armazenada e reutilizada.</p>`,
                    `<p class='c-paragraph'>A água utilizada em uma aquicultura deve ser tratada antes de ser adicionada ao cultivo.</p>`,
                    `<p class='c-paragraph'>A água, após ser utilizada em uma aquicultura, não pode ter sua utilização inviabilizada por outros usuários.</p>`,
                    `<p class='c-paragraph'>A água utilizada em uma aquicultura deve ser oriunda da rede de abastecimento privado.</p>`,
                    `<p class='c-paragraph'>A água utilizada em uma aquicultura pode ser lançada sem tratamento em rios e córregos.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>De acordo com a Lei Federal nº 9.433 de 1997, os recursos hídricos devem ter aproveitamentos múltiplos. Sendo assim, os recursos hídricos devem se manter aproveitáveis para outros usuários. Dentre os múltiplos usos, estão a navegação, o abastecimento, a geração de energia, a pesca, entre outros. Dessa forma, a água após passar pelo sistema de cultivo deve ser tratada para retirada de resíduos da aquicultura antes de ser direcionada aos rios e córregos, evitando a poluição e inviabilidade dos recursos hídricos locais. O tratamento da água antes de ser adicionada ao cultivo tem o objetivo de assegurar a sanidade dos animais cultivados, não sendo esta opção correlacionada com a Lei das águas (Lei Federal nº 9.433).</p>
                `,
                "negative_feedback_topic": "<span>Impactos nos recursos hídricos</span>",
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
              <h3 class="c-heading"><strong>Questão 1</strong></h3>
                <p class="c-paragraph">Utilizar lagoas de decantação é uma das formas de tratar os efluentes oriundos do cultivo de organismos aquáticos. Assinale a alternativa que descreve como é realizado o tratamento da água utilizando o método das lagoas de decantação.</p>
              `,
              "options": [
                  `<p class='c-paragraph'>Remover a água utilizada no cultivo para tanques contendo materiais porosos com colônias de bactérias.</p>`,
                  `<p class='c-paragraph'>Transferir a água utilizada no cultivo para locais sem circulação para que as partículas dispersas na água se depositem no fundo.</p>`,
                  `<p class='c-paragraph'>Adicionar plantas aquáticas flutuantes aos criadouros para que os resíduos presentes na água sejam absorvidos.</p>`,
                  `<p class='c-paragraph'>Destinar a água utilizada no cultivo para a produção de hortaliças.</p>`,
                  `<p class='c-paragraph'>Transferir a água utilizada no cultivo para locais com constante circulação, promovendo a oxigenação.</p>`
              ],
              "correct_anwser": 2,
              "positive_feedback": `
                <p class='c-paragraph'>Transferir a água utilizada no cultivo para lagoas sem circulação faz com que as partículas dispersas na água se depositem no fundo e, após alguns dias, essa água pode ser retirada com menos carga de resíduos. Remover a água do criadouro para tanques contendo materiais porosos com colônias de bactérias é um método de filtragem biológica. Adicionar plantas aquáticas flutuantes aos criadouros é um método de filtragem natural. Destinar a água utilizada para o cultivo de hortaliças é uma forma de filtragem natural, consorciando a aquicultura com a agricultura. Se houver a constante circulação da água, os resíduos dispersos não serão depositados no fundo e a água continuará a conter os resíduos dispersos.</p>
              `,
              "negative_feedback_topic": "<span>Tratamento de resíduos da aquicultura</span>",
              "negative_feedback_link": "#topic-07"
          },
          {
              "question_title": `
              <h3 class="c-heading"><strong>Questão 2</strong></h3>
                <p class="c-paragraph">Efluentes consistem na água que sai do sistema de cultivo contendo poluentes. Os poluentes mais comuns nos sistemas de cultivo são substâncias orgânicas e inorgânicas que podem estar dispersas na água ou depositadas no fundo do criadouro. Além desses resíduos, o que mais pode ser encontrado nos efluentes?</p>
              `,
              "options": [
                  `<p class='c-paragraph'>Esgoto doméstico.</p>`,
                  `<p class='c-paragraph'>Argila expandida com colônias de bactérias.</p>`,
                  `<p class='c-paragraph'>Equipamentos e utensílios utilizados na despesca.</p>`,
                  `<p class='c-paragraph'>Organismos vivos como algas e ovos dos organismos cultivados.</p>`,
                  `<p class='c-paragraph'>Embalagens plásticas de produtos veterinários.</p>`
              ],
              "correct_anwser": 4,
              "positive_feedback": `
                <p class='c-paragraph'>Além de substâncias orgânicas e inorgânicas, também é possível que organismos vivos, como caramujos, algas, ovos e juvenis dos animais cultivados, estejam presentes nos efluentes. O esgoto doméstico não faz parte dos efluentes gerados na aquicultura. Equipamentos e utensílios utilizados na despesca não são resíduos encontrados nos efluentes. Embalagens plásticas veterinárias devem ser descartadas adequadamente obedecendo à legislação vigente e não são usualmente encontradas nos efluentes.</p>
              `,
              "negative_feedback_topic": "<span>O que são resíduos em aquicultura?</span>",
              "negative_feedback_link": "#topic-08"
          }
      ]
  }

  const activity4 = document.querySelector('yduqs-questions[question_id="4"]');
  activity4.settings = question4;

    

});