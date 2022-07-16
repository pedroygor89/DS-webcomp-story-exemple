// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">Uma apomorfia importante para o sucesso evolutivo das plantas foi um tipo de estrutura reprodutiva que garante, por exemplo, a proteção do embrião. Que estrutura é essa e em que grupo ela surgiu primeiro?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Esporos em algas.</p>`,
                    `<p class='c-paragraph'>Embriões em briófitas.</p>`,
                    `<p class='c-paragraph'>Sementes em pteridófitas.</p>`,
                    `<p class='c-paragraph'>Sementes em Gimnospermas.</p>`,
                    `<p class='c-paragraph'>Grão de pólen em Angiospermas.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>A novidade evolutiva, ou apomorfia das sementes, surgiu primeiramente no grupo das Gimnospermas. Essa estrutura, entre outros benefícios, proporcionou a proteção mecânica ao embrião da planta.</p>
                `,
                "negative_feedback_topic": "<span>Estrutura da semente</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">Suponha que você esteja tentando germinar uma semente de uma espécie de planta que conhecidamente só germina após passar pelo sistema digestivo de uma espécie de ave. Quais devem ser os procedimentos para que essa espécie germine, fora do seu habitat natural, e sem ser ingerida pelo animal?</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Apenas enterrar a semente e regá-la será o suficiente para a sua germinação.</p>`,
                    `<p class='c-paragraph'>A semente deverá passar por um banho de água quente para imitar a temperatura corporal da ave, antes de ser plantada.</p>`,
                    `<p class='c-paragraph'>A semente deverá passar por processos como o de embebição e posterior exposição a substâncias ácidas, antes de ser plantada.</p>`,
                    `<p class='c-paragraph'>A semente deverá ser cortada em alguns pedaços, antes de ser plantada.</p>`,
                    `<p class='c-paragraph'>A semente deverá passar por períodos alternados de temperatura, para mimetizar o ambiente em que ela se desenvolve naturalmente.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Algumas estratégias artificiais são utilizadas por produtores agrícolas para mimetizar os processos naturais necessários para haver a quebra da dormência de sementes. Como o sistema digestivo dos animais apresenta substâncias ácidas, essa semente deverá ser submetida à exposição em solução ácida para que possa germinar.</p>
                `,
                "negative_feedback_topic": "<span>Processos de quebra de dormência</span>",
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
                  <p class="c-paragraph">Considere o texto a seguir.</p>
                  <p class="c-paragraph">Sementes enterradas em camadas profundas de solo (I) germinar, pois (II) as sementes necessitam de (III) para se desenvolverem. Caso essas sementes germinem, irão produzir plantas com característica de (IV), que crescem rapidamente em direção à superfície, com coloração (V). Atingindo a luz, as plantas passam a ter desenvolvimento (VI).</p>                  
                  <p class="c-paragraph">Complete e assinale a alternativa que torna o texto correto.</p>
                  
                `,
                "options": [
                    `<p class='c-paragraph'>(I) podem; (II) nem todas; (III) luminosidade; (IV) estiolamento; (V) pálida; (VI) normal.</p>`,
                    `<p class='c-paragraph'>(I) não podem; (II) todas; (III) luminosidade; (IV) estiolamento; (V) pálida; (VI) normal.</p>`,
                    `<p class='c-paragraph'>(I) podem; (II) todas; (III) luminosidade; (IV) plantas saudáveis; (V) pálida; (VI) normal.</p>`,
                    `<p class='c-paragraph'>(I) não podem; (II) nem todas; (III) luminosidade; (IV) estiolamento; (V) pálida; (VI) normal.</p>`,
                    `<p class='c-paragraph'>(I) podem; (II) nem todas; (III) luminosidade; (IV) estiolamento; (V) escurecida; (VI) insuficiente.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>Nem todas as sementes necessitam de estímulos luminosos para sua germinação, isso dependerá de como a semente é classificada quanto ao seu fotoblastismo.</p>
                  <p class='c-paragraph'>O estiolamento é um fenômeno que acontece com plantas que se desenvolvem em carência de luz e pode acontecer também com sementes recém-germinadas, que embora se desenvolvam, apresentarão uma morfologia diferente das plantas normais, com indução de alongamento do caule e falta de pigmentação, fazendo com que a planta apresente coloração pálida. Caso a planta volte a ter contato com a luz, poderá se desenvolver normalmente.</p>                   
                `,
                "negative_feedback_topic": "<span>Luz</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">O endocarpo é a região mais interna do fruto, muitas vezes lenhoso ou de consistência óssea, que pode aderir às sementes, dando reforço na proteção. Ex.: nozes, pêssego, coco. Com base nesse conceito, leia atentamente o fragmento retirado de um estudo de germinação, em que o endocarpo foi removido antes de as sementes serem colocadas para germinar:</p>
                  <p class="c-paragraph">“(...) o período de germinação das sementes de tucumã, com endocarpo, pode se estender por dois a três anos. No presente trabalho, o tempo médio de germinação foi de 104 dias, sugerindo que a retirada do endocarpo favoreceu a redução desse período. Contudo, a germinação desuniforme e a porcentagem de sementes dormentes indicaram que outros fatores também limitam a capacidade germinativa dessas sementes. Ademais, a distribuição da germinação no período de quatro meses, entre a primeira (41 dias, em média) e a última (164 dias, em média) contagem das sementes germinadas, independentemente do período de embebição, evidenciou a existência de uma graduação na intensidade de dormência. Nas sementes não embebidas, além da porcentagem de germinação ter sido inferior, o processo germinativo foi mais lento, o que é confirmado pelo menor índice de velocidade de germinação e maior tempo médio de germinação. A embebição, antes da semeadura, pode favorecer a velocidade de germinação de sementes, visto que a absorção de água representa o passo inicial do processo germinativo. Em tucumã, este efeito benéfico foi mais pronunciado nas sementes submetidas à embebição por nove dias, sendo por isso recomendado como tratamento pré-germinativo das sementes dessa espécie.”</p>
                  <p class="c-paragraph">FERREIRA, Sidney Alberto do Nascimento; GENTIL, Daniel Felipe de Oliveira. <b>Extração, embebição e germinação de sementes de tucumã (Astrocaryum aculeatum)</b>. Acta Amazonica, v. 36, n. 2, p. 141-145, 2006.</p>
                  <p class="c-paragraph">A partir da leitura do texto e dos conhecimentos adquiridos, marque a opção correta:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>A embebição é um fator extremamente importante para que uma semente possa germinar; sem água, o embrião continuaria com o metabolismo paralisado e as membranas em estado de dessecação. Uma das formas de possibilitar a reidratação e desencadear o processo de embebição é induzir a ruptura da camada impermeável da semente.</p>`,
                    `<p class='c-paragraph'>A embebição é o processo de retirada do tegumento da semente para que a água possa exercer o seu papel na germinação da semente. Logo, o que o autor propõe é realizar o processo de retirada de todo o tecido da semente para que a água não precise de tanto tempo para retirá-lo.</p>`,
                    `<p class='c-paragraph'>Algumas sementes têm a capacidade de germinar, mesmo na ausência total de água. Com isso, elas utilizam outras substâncias no processo de embebição e posteriormente realizam a germinação. Entretanto esse processo poderá ser mais demorado.</p>`,
                    `<p class='c-paragraph'>O autor sugere que o processo de embebição atrasa o desenvolvimento das sementes e, por isso, realiza a retirada de um tecido conhecido como endocarpo, para que a água não entre em contato com o embrião.</p>`,
                    `<p class='c-paragraph'>A embebição é caracterizada pelo processo de surgimento da raiz para o ambiente externo da semente. Ela marca o final do processo de germinação e o início do desenvolvimento de uma planta adulta.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>Todas as sementes necessitam de água para germinar e posteriormente se desenvolver, esse é o primeiro processo que deve acontecer para que uma semente reative o seu metabolismo. Entretanto, dependendo do tipo de semente, ela poderá ter mais de uma camada de tecido de proteção, que normalmente, além de proteger, também configura um grau de impermeabilidade.</p>
                  <p class='c-paragraph'>Esse tecido pode retardar a germinação por anos, como foi visto no artigo do texto. A excisão da camada que confere impermeabilidade poderá acelerar e permitir que a semente germine.</p>
                `,
                "negative_feedback_topic": "<span>Processo germinativo</span>",
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
                  <p class="c-paragraph">Leia o trecho traduzido do artigo <i>Improvement of protein and amino acid contents in seeds of food legumes. A case study in Phaseolus</i> e responda:</p>
                  <p class="c-paragraph">“Sementes de leguminosas de grãos têm grandes teores de proteínas, variando de 20% a até 40% de sua matéria seca, de acordo com as espécies, genótipos dentro das espécies e ambientes. Proteínas de armazenamento em sementes de leguminosas estão localizadas principalmente nos tecidos cotiledonares. Eixo embrionário e testas pouco contribuem para o teor de proteína total da semente, principalmente porque esses componentes representam pequenas proporções da massa da semente.”</p>
                  <p class="c-paragraph">BAUDOIN, J. P.; MAQUET, <b>A. Improvement of protein and amino acid contents in seeds of food legumes. A case study in Phaseolus</b>. Biotechnologie, Agronomie, Société et Environnement, v. 3, n. 4, p. 220-224, 1999.</p>
                  <p class="c-paragraph">De acordo com o que você aprendeu no módulo, complementado com o texto acima, podemos dizer que</p>
                `,
                "options": [
                    `<p class='c-paragraph'>o cotilédone de Monocotiledôneas e Eudicotiledôneas é o único tecido que oferece reservas nutricionais para as sementes. Enquanto a maior parte das Eudicotiledôneas transfere os nutrientes do endosperma para os cotilédones como reserva energética para a germinação, as Monodotiledôneas normalmente utilizam os nutrientes do seu tegumento durante a germinação.</p>`,
                    `<p class='c-paragraph'>os cotilédones e endospermas de Monocotiledôneas e Eudicotiledôneas são os tecidos que oferecem reservas nutricionais para as sementes. Entretanto, a maior parte das Eudicotiledôneas absorvem os nutrientes do cotilédone para reserva energética durante a germinação, e as Monodotiledôneas normalmente utilizam os nutrientes do seu endosperma durante a germinação.</p>`,
                    `<p class='c-paragraph'>tanto em Monocotiledôneas quanto em Eudicotiledôneas, o principal tecido de reserva do embrião para a sua germinação é o endosperma. Todas as sementes que conhecemos na atualidade desenvolvem esse tecido e utilizam os nutrientes dele para todas as etapas de desenvolvimento da semente, desde a sua maturação até a sua germinação.</p>`,
                    `<p class='c-paragraph'>sementes de Eudicotiledôneas têm seus dois cotilédones reduzidos para que o endosperma possa ocupar a maior área possível da semente, enquanto em sementes de Monocotiledôneas o seu único cotilédone é extremamente desenvolvido, ocupando muitas vezes o lugar do endosperma, que será substituído pelo cotilédone.</p>`,
                    `<p class='c-paragraph'>Os cotilédones e endospermas de Monocotiledôneas e Eudicotiledôneas são os tecidos que oferecem reservas nutricionais para as sementes. Entretanto, enquanto a maior parte das Eudicotiledôneas absorve os nutrientes do endosperma para reserva energética durante a germinação, as Monodotiledôneas normalmente utilizam os nutrientes do seu cotilédone durante a germinação.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>As sementes de Eudicotiledôneas, na maioria dos casos, transferem os nutrientes do endosperma para seus cotilédones a fim de dar suporte nutricional para que a semente possa germinar e desenvolver posteriormente um novo indivíduo. Enquanto isso, nas Monocotiledôneas, a maioria dos indivíduos apresenta cotilédone reduzido e grande parte da semente é ocupada pelo tecido de reserva energética, denominado endosperma, que dá suporte nutricional para que a semente possa germinar e desenvolver posteriormente um novo indivíduo.</p>
                `,
                "negative_feedback_topic": "<span>Diferenças anatômicas encontradas entre Monocotiledôneas e Eudicotiledôneas</span>",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">Observe a figura adaptada do livro <i>In vitro embryogenesis in plants</i> e responda à pergunta abaixo.</p>
                  <yduqs-section>
                  <yduqs-image src="img/mod03 - img09.jpg" alt="" title="Imagem: Merkle; Parrott; Flinn, 1995, págs. 155-203." loading="lazy">
                  </yduqs-image>                  
                  </yduqs-section>
                  <p class="c-paragraph">De acordo com os seus conhecimentos a respeito de organogênese direta e indireta, avalie que tipo de organogênese está ocorrendo em “A” “B” e “C”.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>A- Organogênese direta, B- Organogênese indireta, C- Organogênese indireta.</p>`,
                    `<p class='c-paragraph'>A- Organogênese indireta, B- Organogênese indireta, C- Organogênese indireta.</p>`,
                    `<p class='c-paragraph'>A- Organogênese indireta, B e C- Organogênese direta.</p>`,
                    `<p class='c-paragraph'>A- Organogênese direta, B- Organogênese direta, C- Organogênese indireta.</p>`,
                    `<p class='c-paragraph'>A- Organogênese indireta, B- Organogênese indireta, C- Organogênese direta.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>No sentido das seções “A” e “B”, temos a organogênese direta, porque o desenvolvimento dos embriões cordiformes está sendo diretamente em um tecido diferenciado, ou seja, na superfície do próprio explante de embrião ou de cotilédone já diferenciado. Para ser indireta, ele necessitaria passar por uma forma intermediária que chamamos de calos, como podemos ver no sentido da seção “C”, onde o fragmento de plântula desenvolve primeiramente um aglomerado celular indiferenciado (calos) e nele é desenvolvido o embrião somático; por isso, essa organogênese é considerada organogênese indireta.</p>
                `,
                "negative_feedback_topic": "<span>Embriogênese somática</span>",
                "negative_feedback_link": "#topic-06"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3.settings = question3;

    

});