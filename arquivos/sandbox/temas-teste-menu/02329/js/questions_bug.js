// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">
                  Os organismos pioneiros na transição para o ambiente terrestre encontraram dificuldades nesse novo ambiente.Sucessivas gerações falharam nesse processo, porém outras obtiveram êxito, pois as características que surgiram nesses organismos ao acaso permitiram a adaptação deles ao ambiente terrestre.Marque a opção correta que correlaciona os desafios que foram enfrentados com suas respectivas adaptações.
                  </p>
                  <yduqs-section>
                    <div class="container">
                        <div class='row align-items-center justify-content-center'>
                            <div class='col-12 col-md-10 col-lg-10'>
                                <div class="pt-4 d-flex justify-content-around">
                                    <table class="c-table c-table c-table--half c-table--border">
                                        <thead class="c-table__thead">
                                            <tr class="c-table__trow">
                                                <th class="c-table__theader">Desafios na vida terrestre</th>
                                                <th class="c-table__theader">Fórmula</th>
                                            </tr>
                                        </thead>
                                        <tbody class="c-table__tbody">
                                            <tr class="c-table__trow">
                                                <td class="c-table__tdata">
                                                    1 - Absorção de água e fixação.
                                                </td>
                                                <td class="c-table__tdata">
                                                    (  ) Estômatos
                                                </td>
                                            </tr>
                                            <tr class="c-table__trow">
                                                <td class="c-table__tdata">
                                                    2 - Retenção de água e proteção contra raios UV.
                                                </td>
                                                <td class="c-table__tdata">
                                                    (  ) Esporopolenina
                                                </td>
                                            </tr>
                                            <tr class="c-table__trow">
                                                <td class="c-table__tdata">
                                                    3 - Manutenção da hidratação nos esporos.
                                                </td>
                                                <td class="c-table__tdata">
                                                    (  ) Rizoides
                                                </td>
                                            </tr>
                                            <tr class="c-table__trow">
                                                <td class="c-table__tdata">
                                                    4 - Ciclo de vida com menor dependência da água.
                                                </td>
                                                <td class="c-table__tdata">
                                                    (  ) Cutícula
                                                </td>
                                            </tr>
                                            <tr class="c-table__trow">
                                                <td class="c-table__tdata">
                                                    5 - Troca gasosa 
                                                </td>
                                                <td class="c-table__tdata">
                                                    (  ) Dispersão dos esporos pelo vento
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </yduqs-section>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    5, 2, 1, 4, 3
                    </p>`,
                    `<p class='c-paragraph'>
                    5, 3, 1, 4, 2
                    </p>`,
                    `<p class='c-paragraph'>
                    2, 3, 4, 1, 5
                    </p>`,
                    `<p class='c-paragraph'>
                    2, 3, 1, 5, 4
                    </p>`,
                    `<p class='c-paragraph'>
                    5, 3, 1, 2, 4
                    </p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>
                  A maioria das adaptações que possibilitaram a migração para o ambiente terrestre está relacionada com a redução da dependência da água para a reprodução, manutenção da hidratação em suas células, além de ser necessária estrutura que permita a troca gasosa nos processos da fotossíntese e respiração. Esses organismos fora da água também ficam sujeitos à radiação ultravioleta. Por isso foram selecionadas as seguintes características vinculadas a essas questões:
                  </p>
                  <p class='c-paragraph'>
                  Estômatos para a realização de trocas gasosas; a substância esporopolenina que dentre outras funções mantém a hidratação dos esporos; rizoides que absorvem a água do substrato e promovem sua fixação nele; cutícula, uma camada protetora contendo lipídios que dificultam a perda de água e filtram parte da radiação UV; no ciclo de vida apenas os gametas masculinos dependem da água para se deslocarem, pois os esporos são dispersos pelo vento.
                  </p>
                `,
                "negative_feedback_topic": "<span>A transição para a terra</span>",
                "negative_feedback_link": "#m1q1"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">
                  A Classe Charophyceae possui relação filogenética com as plantas terrestres, o que foi confirmado com base em algumas características encontradas nos gêneros Coleochaete e evidenciadas em Embryophyta. Marque a opção correta que indica essas características.
                  </p>
                  <ol type="I">
                  <li class="c-paragraph u-text--medium py-3">
                  Cloroplastos envoltos por duas membranas contendo membranas tilacoides empilhadas em grana e portando os pigmentos clorofila a e b, carotenoides e xantofilas. 
                  </li>
                  <li class="c-paragraph u-text--medium pb-3">
                  Após a fecundação do gameta feminino pelo masculino ocorre a formação do zigoto, que é retido no gametângio feminino.
                  </li>
                  <li class="c-paragraph u-text--medium pb-3">
                  Os embriões, abrigados na planta feminina, multiplicam-se por mitose originando novos organismos adultos. 
                  </li>
                  <li class="c-paragraph u-text--medium pb-3">
                  A reprodução é isogâmica na qual os gametas masculinos e femininos são flagelados e contém o ancoramento das raízes flagelares com bandas de microtúbulos em multicamadas.
                  </li>
                  <li class="c-paragraph u-text--medium pb-3">
                  A presença da substância esporopolenina que busca impedir a dessecação das células ou estruturas que a contém.
                  </li>
                  </ol>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    I, II, III
                    </p>`,
                    `<p class='c-paragraph'>
                    II, IV, V
                    </p>`,
                    `<p class='c-paragraph'>
                    I, III, V
                    </p>`,
                    `<p class='c-paragraph'>
                    I, II, V
                    </p>`,
                    `<p class='c-paragraph'>
                    I, III, IV
                    </p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>
                  <i> Coleochaete </i> e Embryophyta compartilham diversas características como as relacionadas à aquisição de um cloroplasto por endossimbiose primária que derivou na linhagem das clorófitas. Portanto, esses cloroplastos são envolvidos por duas membranas. Membranas tilacoides são empilhadas em grana e contêm como pigmentos clorofila a e b, carotenoides e xantofilas. Também ocorre a retenção do zigoto no gametângio feminino após a sua formação. Em <i>Coleochaete</i > , esse zigoto é posteriormente liberado no ambiente externo para que ocorram as mitoses que formarão um novo organismo.Entretanto, somente em Embryophyta as mitoses ocorrem no zigoto formando um embrião que continua retido no gametângio feminino.
                  </p>
                  <p class='c-paragraph'>
                  A substância esporopolenina está presente no zigoto de <i> Coleochaete </i> e nos esporos de Embryophyta, reduzindo os efeitos da dessecação desses elementos de reprodução. A reprodução desses organismos é oogâmica, portanto somente o gameta masculino possui flagelos cujas raízes são ancoradas com bandas de microtúbulos em multicamadas.
                  </p>
                `,
                "negative_feedback_topic": "<span>Similaridades entre os atuais <i>Coleochaete</i> e plantas terrestres (Embryophyta)</span>",
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
                  <p class="c-paragraph">
                  Existem relatos de relação simbiótica entre espécies de Anthocerotophyta e cianobactérias, bem como registros de simbiose com fungos micorrízicos. Sobre essas relações, podemos afirmar que:
                  </p>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    É uma relação de predação, pois as cianobactérias e os fungos lançam enzimas que digerem os talos de Anthocerotophyta e absorvem as substâncias resultantes.
                    </p>`,
                    `<p class='c-paragraph'>
                    É uma relação de comensalismo, pois as cianobactérias e os fungos se abrigam em cavidades dos talos de Anthocerotophyta sem ocorrer nenhum prejuízo ou vantagem.
                    </p>`,
                    `<p class='c-paragraph'>
                    É uma relação de mutualismo, pois as cianobactérias disponibilizam compostos nitrogenados e os fungos facilitam absorção de nutrientes e água pelos talos de Anthocerotophyta. Enquanto os talos disponibilizam açúcares e abrigam cianobactérias e fungos.
                    </p>`,
                    `<p class='c-paragraph'>
                    São duas relações distintas. As cianobactérias se abrigam em cavidades dos talos de Anthocerotophyta sem ocorrer nenhum prejuízo ou vantagem. Enquanto os fungos parasitam os talos de Anthocerotophyta, lançam projeções nas células e absorvem seus açúcares.
                    </p>`,
                    `<p class='c-paragraph'>
                    Uma relação de parasitismo, pois as cianobactérias e os fungos lançam projeções nas células fotossintetizantes dos talos de Anthocerotophyta absorvendo seus açúcares.
                    </p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>
                  As relações simbióticas estabelecidas entre cianobactérias e Anthocerotophyta, e fungos e Anthocerotophyta são mutualísticas. As cianobactérias têm a capacidade de fixar nitrogênio atmosférico em compostos químicos que são assimiláveis por outros organismos. Já os fungos micorrízicos aumentam a área de contato entre o os talos de Anthocerotophyta e o solo, assim facilitam e aumentam a capacidade de absorção de nutrientes e água. Os talos fornecem açúcares e abrigam cianobactérias e fungos propiciando um ambiente mais equilibrado e protegido.
                  </p>
                `,
                "negative_feedback_topic": "<span>Morfologia vegetativa</span>",
                "negative_feedback_link": "#m2q1"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">
                  As plantas avasculares foram as primeiras a efetivamente colonizar o ambiente terrestre, e o filo Anthocerotophyta é um dos que compõe esse grupo. Marque a opção que contém características que são encontradas em seus talos.
                  </p>
                  <ol type="I">
                    <li class="c-paragraph u-text--medium pb-3">
                    Possui cloroplastos com pirenoides.
                    </li>
                    <li class="c-paragraph u-text--medium pb-3">
                    Os filoides aparecem em duas a três fileiras e podem ser bilobados.
                    </li>
                    <li class="c-paragraph u-text--medium pb-3">
                    Seus gametângios estão sempre no ápice dos gametófitos.
                    </li>
                    <li class="c-paragraph u-text--medium pb-3">
                    Possui uma columela central e se abre em duas fendas longitudinais para a liberação dos esporos.
                    </li>
                    <li class="c-paragraph u-text--medium pb-3">
                    A região que liga o pé à columela possui um meristema basal que faz o esporófito continuar a crescer mesmo após o início da liberação dos esporos.
                    </li>
                  </ol>
                `,
                "options": [
                    `<p class='c-paragraph'>
                    I, II, III
                    </p>`,
                    `<p class='c-paragraph'>
                    I, IV, V 
                    </p>`,
                    `<p class='c-paragraph'>
                    II, III, V
                    </p>`,
                    `<p class='c-paragraph'>
                    II, IV, V
                    </p>`,
                    `<p class='c-paragraph'>
                    I, III, V
                    </p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>
                    As espécies de Anthocerotophyta são as únicas plantas avasculares que possuem cloroplastos com pirenoides e que
                    apresentam um meristema basal no esporófito. O esporófito é alongado e possui uma columela central que dentre outras
                    funções também auxilia na sustentação. O modo com que o esporófito se abre forma duas fendas longitudinais. As outras
                    características mencionadas não são encontradas em Anthocerotophyta, já que eles não possuem filoides, apenas um talo em
                    forma de roseta.
                  </p>
                `,
                "negative_feedback_topic": "<span>Reprodução sexuada e assexuada</span>",
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
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
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
                <h3 class="c-heading"><strong>Questão 1</strong></h3>
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
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
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

    const activity3 = document.querySelector('yduqs-questions[question_id="4"]');
    activity3.settings = question4;

    

});