// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Um pesquisador, ao analisar cortes transversais do cilindro vascular de uma estrutura primária de raiz, realizou um conjunto de afirmativas.</p>
                  <ul class="c-paragraph" style="list-style-type: upper-roman">
                  <li>A raiz é poliarca, com uma medula parenquimática no centro do cilindro vascular.</li>
                  <li>O periciclo está originando uma raiz lateral.</li>
                  <li>O centro do cilindro vascular é ocupado por metaxilema.</li>
                  </ul>
                  <p class="c-paragraph">Assinale a opção que identifica o grupo taxonômico e justifica corretamente.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>A raiz é de monocotiledônea, pelo que se afirma apenas em II.</p>`,
                    `<p class='c-paragraph'>A raiz é de monocotiledônea, pelo que se afirma apenas em I e II.</p>`,
                    `<p class='c-paragraph'>A raiz é de monocotiledônea, pelo que se afirma apenas em II e III.</p>`,
                    `<p class='c-paragraph'>A raiz é de eudicotiledônea, pelo que se afirma apenas em I.</p>`,
                    `<p class='c-paragraph'>A raiz é de eudicotiledônea, pelo que se afirma apenas em III.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>As raízes de monocotiledônea se caracterizam por serem poliarcas e apresentarem uma medula parenquimática no centro do cilindro vascular. A formação de raízes laterais pelo periciclo acontece tanto em monocotiledônea, quanto em eudicotiledônea.</p>
                `,
                "negative_feedback_topic": "<span>Estrutura primária da raiz</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">As palmeiras são monocotiledôneas arborescentes, que possuem espessamento do seu caule, para suportar o crescimento em altura, que pode alcançar mais de 8 metros, como as palmeiras imperiais. As eudicotiledôneas também possuem muitas espécies arborescentes com troncos espessos que suportam o peso e a amplitude de suas copas enormes, como das mangueiras. Embora tenham caules espessos, árvores de monocotiledônea e de eudicotiledônea possuem processos diferentes na formação dos troncos. Entre as opções a seguir, marque a opção que indica o tecido responsável pelo espessamento dos troncos das palmeiras. </p>
                `,
                "options": [
                    `<p class='c-paragraph'>Câmbio vascular.</p>`,
                    `<p class='c-paragraph'>Câmbio da casca.</p>`,
                    `<p class='c-paragraph'>Meristema de espessamento secundário.</p>`,
                    `<p class='c-paragraph'>Meristema de tração.</p>`,
                    `<p class='c-paragraph'>Meristema de reação. </p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>As monocotiledôneas arbóreas possuem um tipo especial de espessamento sem a formação de câmbio vascular. Para que comecem a espessar, células parenquimáticas se diferenciam em meristema de espessamento secundário para produção de novas células parenquimáticas e de feixes vasculares.</p>
                `,
                "negative_feedback_topic": "<span>Crescimento secundário nos caules</span>",
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
                  <p class="c-paragraph">As podas são um processo realizado com frequência em ruas arborizadas, para evitar que os galhos prejudiquem a rede elétrica ou para evitar que machuquem as pessoas que passarem nas calçadas. Ao podar os ápices caulinares, os ramos laterais passam a se desenvolver em decorrência da quebra da dominância apical. Isso significa que</p>
                `,
                "options": [
                    `<p class='c-paragraph'>a concentração de giberelina aumentou e passou a promover o desenvolvimento das gemas axilares.</p>`,
                    `<p class='c-paragraph'>a concentração de citocinina aumentou e passou a promover o desenvolvimento das gemas axilares.</p>`,
                    `<p class='c-paragraph'>a concentração de auxina aumentou e passou a promover o desenvolvimento das gemas axilares.</p>`,
                    `<p class='c-paragraph'>a concentração de citocinina baixou e passou a promover o desenvolvimento das gemas axilares.</p>`,
                    `<p class='c-paragraph'>a concentração de giberelina baixou e passou a promover o desenvolvimento das gemas axilares.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>A região apical dos caules tem alta concentração de auxina e baixa concentração de citocinina, o que inibe o desenvolvimento das gemas axilares logo abaixo. Quando o ápice é cortado pela poda, cai a concentração de auxina nas gemas próximas da poda e aumenta a concentração de citocinina, promovendo o desenvolvimento das gemas.</p>
                `,
                "negative_feedback_topic": "<span>Dominância apical do caule sob influência da auxina</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Embora sejam seres sésseis, os vegetais possuem certos movimentos. Algumas plantas têm a capacidade de curvar os caules e realizar seu crescimento em direção à luz. Já as raízes, de maneira geral, crescem em direção ao interior do solo. Marque a alternativa abaixo que cita corretamente o nome do movimento do caule e das raízes, citados neste texto:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Tigmotropismo (caule) e fototropismo (raízes).</p>`,
                    `<p class='c-paragraph'>Fototropismo (caule) e gravitropismo (raízes).</p>`,
                    `<p class='c-paragraph'>Gravitropismo (caule) e tigmotropismo (raízes).</p>`,
                    `<p class='c-paragraph'>Gravitropismo (caule) e geotropismo (raízes).</p>`,
                    `<p class='c-paragraph'>Fototropismo (caule) e tigmotropismo (raízes).</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>O crescimento orientado no sentido da luz se chama fototropismo; e o geotropismo, também conhecido como gravitropismo, é o crescimento da planta em função do estímulo da gravidade.</p>
                `,
                "negative_feedback_topic": "<span>Movimentos vegetais</span>",
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
                  <p class="c-paragraph">No reino vegetal, grande parte das plantas formam associações simbióticas com fungos que não são patogênicos. Essa associação é extremamente benéfica para os vegetais, pois o fungo melhora a capacidade das raízes em absorver água e minerais do solo. Marque a alternativa abaixo que cita corretamente o nome dessa associação.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Clorose.</p>`,
                    `<p class='c-paragraph'>Fertilização química.</p>`,
                    `<p class='c-paragraph'>Zona adequada.</p>`,
                    `<p class='c-paragraph'>Micorriza.</p>`,
                    `<p class='c-paragraph'>Adubação foliar.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>As micorrizas são associações entre fungos e células das raízes das plantas, por meio da qual ambas as partes são beneficiadas: o fungo adquire nutriente e a planta aumenta sua capacidade de absorção. As outras alternativas estão incorretas, pois clorose é um sintoma de deficiência mineral, a fertilização química e adubação foliar representam tecnologias de adição de nutrientes no solo e a zona adequada está relacionada à exigência mineral do vegetal e seu atendimento nutricional.</p>
                `,
                "negative_feedback_topic": "<span>Absorção de minerais</span>",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Os vegetais necessitam de elementos minerais que são essenciais para o seu desenvolvimento. Esses elementos são classificados como macronutrientes e micronutrientes, de acordo com a exigência do vegetal. Com base nesse contexto, marque a alternativa que cita corretamente elementos minerais essenciais para os vegetais.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Lisina e água.</p>`,
                    `<p class='c-paragraph'>Nitrogênio e fósforo.</p>`,
                    `<p class='c-paragraph'>Ácido graxo e glicerol.</p>`,
                    `<p class='c-paragraph'>Glicose e vitamina K.</p>`,
                    `<p class='c-paragraph'>Metionina e treonina.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>Apenas a alternativa B cita minerais (nitrogênio e fósforo), portanto, essa é a única possibilidade correta. As outras alternativas citam elementos como aminoácidos (lisina, metionina e treonina), carboidratos (glicose), vitaminas (K), água e lipídeos (ácido graxo e glicerol)</p>
                `,
                "negative_feedback_topic": "<span>Elementos minerais essenciais</span>",
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