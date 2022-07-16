// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">Durante muitos anos, os anelídeos eram considerados parentes próximos dos artrópodes. Porém, no fim do século passado, com o uso de dados moleculares, a árvore da vida dos metazoários sofreu uma profunda mudança, e outros grupos de metazoários, como os nematódeos, passaram a ser posicionados como grupo-irmão dos panartrópodes, formando o clado Ecdysozoa. Nesse contexto, as principais sinapomorfias que corroboram esse relacionamento são</p>
                `,
                "options": [
                    `<p class='c-paragraph'>segmentação corporal teloblástica e sistema nervoso com gânglio cerebral dotado de corpos cogumelares e cordão nervoso ventral ganglionar e segmentado.</p>`,
                    `<p class='c-paragraph'>muda cuticular mediada por hormônios ecdisteroides e cutícula com três camadas sem cílios locomotores.</p>`,
                    `<p class='c-paragraph'>cérebro circum-oral situado ao redor da faringe e anatomia radial da boca e da faringe.</p>`,
                    `<p class='c-paragraph'>presença de larva primária trocófora e pseudoceloma desenvolvido.</p>`,
                    `<p class='c-paragraph'>cutícula colagenosa trilaminada e epiderme formando cordões longitudinais que abrigam os cordões nervosos.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>O clado Ecdysozoa é formado por oito filos de morfologia bastante distinta, como Arthropoda e Nematoda. Entretanto, todos eles são reunidos por caracteres compartilhados exclusivamente por esses animais, como a capacidade de realizar a muda da cutícula em pelo menos algum estágio do ciclo de vida, sendo esse processo mediado por hormônios, caso da ecdisona, e certas características da própria cutícula, como a presença de quitina e o arranjo em três camadas. Devido à rigidez de sua cutícula, ela também não apresenta cílios locomotores, como no caso dos anelídeos. As alternativas A, C e E referem-se, respectivamente, às sinapomorfias para os clados Articulata, Cycloneuralia e Nematoida. Já a alternativa D não faz alusão a nenhum grupo, sendo a larva trocófora uma característica ancestral de Protostomia e o pseudoceloma uma condição adquirida de forma independente por vários filos de protostomados.</p>
                `,
                "negative_feedback_topic": "<span>Origem e características dos ecdisozoários</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">Animais de aspecto vermiforme que fazem ecdise da cutícula, com cérebros circum-orais e com introverte protraível utilizada tanto para a alimentação como para deslocamento são característicos do clado</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Panarthropoda..</p>`,
                    `<p class='c-paragraph'>Ecdysozoa.</p>`,
                    `<p class='c-paragraph'>Articulata..</p>`,
                    `<p class='c-paragraph'>Aschelminthes.</p>`,
                    `<p class='c-paragraph'>Cycloneuralia.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>Cycloneuralia é grupo-irmão de Panarthropoda, formando o clado Ecdysozoa. Os cicloneurálios incluem cinco filos de animais vermiformes caracterizados pelo cérebro circum-oral, cuja neurópila em forma de um anel grosso circunda a porção anterior do trato digestivo, daí o nome do grupo. Em contraste, o cérebro dos panartrópodes é formado por uma concentração ganglionar suprafaríngea. No mais, os cicloneurálios também possuem introverte, uma espécie de probóscide retrátil, muitas vezes dotada de espinhos ou ganchos, e com a qual eles se prendem no substrato para puxar o corpo e captam alimento.</p>
                `,
                "negative_feedback_topic": "<span>Classificação de Ecdysozoa e introdução aos Cycloneuralia</span>",
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
                  <p class="c-paragraph">Nematódeos ocuparam com sucesso praticamente todos os ambientes da Terra, alguns bastante extremos como as fontes termais, os desertos e o gelo polar. Foram levantadas três possíveis características desses animais que permitiram essa grande radiação adaptativa:</p>
                  <ul class="c-paragraph" style="list-style-type: upper-roman">
                  <li>A cutícula rígida aliada à alta pressão hidrostática interna.</li>
                  <li>A cavidade interna formada por um pseudoceloma.</li>
                  <li>O elevado potencial reprodutivo.</li>
                  </ul>
                  <p class="c-paragraph">Está correto o que se afirma em</p>
                `,
                "options": [
                    `<p class='c-paragraph'>I e II.</p>`,
                    `<p class='c-paragraph'>II apenas.</p>`,
                    `<p class='c-paragraph'>I apenas.</p>`,
                    `<p class='c-paragraph'>II e III.</p>`,
                    `<p class='c-paragraph'>I e III.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>A cutícula rígida à base de colágeno conferiu enorme proteção aos nematódeos, permitindo a ocupação de ambientes extremos e o desenvolvimento de hábitos parasitas, pois promove a defesa contra ataques químicos dos hospedeiros. Ela também mantém a turgidez corporal resultante da alta pressão interna, primordial para o funcionamento dos órgãos e dos sistemas desses animais. O ciclo de vida rápido, com pequeno tempo geracional, e a elevada capacidade reprodutiva, com algumas espécies colocando até 200 mil ovos diariamente, também contribuíram para isso. A cavidade pseudocelomática, por sua vez, ocorre em muitos outros filos de animais vermiformes, mas nenhum deles chega perto da diversidade e diversificação de habitats alcançada pelos nematódeos.</p>
                `,
                "negative_feedback_topic": "<span>Filo Nematoda</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">São características únicas (sinapomorfias) dos nematódeos que os distinguem dos demais cicloneurálios</p>
                `,
                "options": [
                    `<p class='c-paragraph'>sistema secretor-excretor e anfídeos.</p>`,
                    `<p class='c-paragraph'>cutícula colagenosa e cordões epidérmicos.</p>`,
                    `<p class='c-paragraph'>cérebro circum-oral e faringe cilíndrica trirradial.</p>`,
                    `<p class='c-paragraph'>capacidade de realizar muda e cutícula com três camadas.</p>`,
                    `<p class='c-paragraph'>introverte com escálides e cutícula com quitina.</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>As sinapomorfias que definem o filo Nematoda são o sistema excretor-secretor, modificado em um sistema de túbulos oriundo das células glandulares em alguns grupos, e os anfídeos, órgãos quimiossensoriais em forma de fenda posicionados lateralmente na cabeça. As outras alternativas apresentam características compartilhadas pelos nematódeos com outros filos, como Nematomorpha, Cycloneuralia e Ecdisozoa, ou características do clado Scalidophora e, portanto, não compartilhada pelos nematódeos.</p>
                `,
                "negative_feedback_topic": "<span>Evolução e classificação</span>",
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
                  <p class="c-paragraph">Assinale a alternativa que apresenta alguma(s) das principais características que distinguem o filo Kinorhyncha dos demais ecdisozoários.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>A introverte protrátil e com escálides.</p>`,
                    `<p class='c-paragraph'>A segmentação corporal do tronco e de parte da musculatura interna.</p>`,
                    `<p class='c-paragraph'>A capacidade de ecdise e a cutícula quitinosa.</p>`,
                    `<p class='c-paragraph'>O cérebro circum-oral e a boca terminal.</p>`,
                    `<p class='c-paragraph'>O cone bucal não eversível e com estiletes orais externos.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>Uma das características mais peculiares dos quinorrincos é o tronco dividido em 11 segmentos, com a musculatura interna dessa região (músculos diagonais, dorsoventrais e longitudinais) acompanhando essa segmentação. Todas as outras opções trazem características presentes em Kinorhyncha, porém nenhuma delas é exclusiva do filo, sendo sempre compartilhada com outros filos como Scalidophora, Ecdysozoa, exceto pela cutícula quitinosa que em Nematoida é colagenosa, Cycloneuralia e Loricifera.</p>
                `,
                "negative_feedback_topic": "<span>Como reconhecer um quinorrinco e a curiosa segmentação corporal</span>",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">As escálides dos quinorrincos têm como principais funções</p>
                `,
                "options": [
                    `<p class='c-paragraph'>proteção contra predadores e natação..</p>`,
                    `<p class='c-paragraph'>captura de alimento e escavação no substrato.</p>`,
                    `<p class='c-paragraph'>suporte esquelético e proteção contra predadores.</p>`,
                    `<p class='c-paragraph'>escavação no substrato e função sensorial.</p>`,
                    `<p class='c-paragraph'>natação e captura de alimentos.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>As escálides na introverte dos quinorrincos são inervadas e estão associadas a manchas com função sensorial. Além disso, elas são responsáveis pelo ancoramento do animal no substrato durante o movimento de escavação em areia ou lodo marinho — quinorrincos não são capazes de nadar, sendo exclusivamente intersticiais. A captura de alimento é realizada pela introverte e pela faringe sugadora. A proteção e a sustentação do corpo são conferidas pela cutícula quitinosa rígida.</p>
                `,
                "negative_feedback_topic": "<span>Sistema nervoso e órgãos do sentido</span>",
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