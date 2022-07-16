// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">O citoplasma é uma região da célula mais complexa do que se imaginava antigamente. Considerando as características do citoplasma, assinale a alternativa correta sobre ele:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>O citoplasma de células eucarióticas apresenta o material genético disperso em sua extensão.</p>`,
                    `<p class='c-paragraph'>A organização do citoplasma é realizada por meio de separações e divisões membranares apenas.</p>`,
                    `<p class='c-paragraph'>Além de organelas, o citoplasma também apresenta substâncias insolúveis suspensas no citosol.</p>`,
                    `<p class='c-paragraph'>O citoplasma funciona exclusivamente como um local para abrigar as organelas citoplasmáticas.</p>`,
                    `<p class='c-paragraph'>As células procarióticas apresentam maior complexidade no citoplasma e nos seus componentes, quando comparadas às células eucarióticas.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>O citoplasma de células eucarióticas possui maior complexidade, tanto em organização como em organelas, apresentando também seu material genético envolto por membrana nuclear, formando o núcleo. Ele possui várias funções além de abrigar organelas como, por exemplo, promover reações metabólicas.</p>
                  <p class='c-paragraph'>A organização citoplasmática não é separada por membranas apenas, os componentes do citoplasma estão dispersos, porém existe um gradiente de concentração que auxilia na organização. Vale destacar que no citoplasma não existem somente organelas, também temos os componentes do citoesqueleto e substâncias insolúveis chamadas de inclusões citoplasmáticas.</p>
                `,
                "negative_feedback_topic": "<span>Caracterização do citoplasma e sua compartimentalização; regiões do citoplasma</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">Considere as afirmações a seguir e assinale a alternativa correta:
                  </p>
                  <ol class="c-paragraph" style="list-style-type: upper-roman">
                    <li>O citoesqueleto funciona como o esqueleto da célula e por isso forma estruturas fortes e estáticas.</li>
                    <li>O citoesqueleto proporciona estrutura para a célula, sendo assim, está localizado exclusivamente na membrana plasmática.</li>
                    <li>Cada família do citoesqueleto possui sua função específica e para um funcionamento organizado, apenas um tipo de citoesqueleto funciona por vez.</li>
                    <li>O citoesqueleto é constituído por três famílias de proteínas de filamentos: filamentos de actina, microtúbulos e filamentos intermediários.</li>
                  </ol>
                `,
                "options": [
                    `<p class='c-paragraph'>As afirmações I e IV estão corretas.</p>`,
                    `<p class='c-paragraph'>As afirmações I, II e IV estão corretas.</p>`,
                    `<p class='c-paragraph'>As afirmações II e III estão corretas.</p>`,
                    `<p class='c-paragraph'>Somente a afirmação I está correta.</p>`,
                    `<p class='c-paragraph'>Somente a afirmação IV está correta.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>O citoesqueleto é um componente dinâmico que está localizado na célula como um todo, ou seja, na membrana plasmática, no citoplasma e no núcleo. Ele é composto por três famílias de filamentos, que são os filamentos de actina, os microtúbulos e os filamentos intermediários. Essas famílias possuem funções específicas, porém, frequentemente, esses tipos de filamentos funcionam em conjunto para executar determinada atividade.</p>
                `,
                "negative_feedback_topic": "<span>Definição, características e funções do citoesqueleto</span>",
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
                  <p class="c-paragraph">Leia as afirmativas a seguir. Considerando V para verdadeiro e F para falso, assinale a alternativa com a sequência correta.
                  </p>
                  <p class="c-paragraph">( ) Os ribossomos são organelas responsáveis pela degradação de proteínas.</p>
                  <p class="c-paragraph">( ) Os polissomos são grupos de ribossomos que podem estar ligados a uma molécula de DNA.</p>
                  <p class="c-paragraph">( ) Os ribossomos são formados por duas subunidades que se encaixam em uma molécula de RNA.</p>
                  <p class="c-paragraph">( ) Um ribossomo é considerado funcional quando suas subunidades estão dissociadas.</p>
                  <p class="c-paragraph">( ) Os ribossomos podem se encontrar livres no citoplasma ou associados a organelas como, por exemplo, o retículo endoplasmático.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>F-F-V-F-V</p>`,
                    `<p class='c-paragraph'>F-F-V-V-V</p>`,
                    `<p class='c-paragraph'>F-V-V-F-V</p>`,
                    `<p class='c-paragraph'>V-F-F-V-F</p>`,
                    `<p class='c-paragraph'>F-V-V-V-V</p>`
                ],
                "correct_anwser": 1,
                "positive_feedback": `
                  <p class='c-paragraph'>Os ribossomos são estruturas responsáveis pela síntese de proteínas e são formados por duas subunidades. Para que o ribossomo seja considerado funcional, as suas subunidades devem estar unidas e encaixadas em uma molécula de RNA. Os ribossomos podem estar livres no citoplasma ou associados ao retículo endoplasmático. Também são encontrados ribossomos associados a mitocôndrias e cloroplastos (em plantas, por exemplo). Quando os ribossomos se encontram agrupados em conjuntos, são denominados polissomos, porém se associam ao RNA e não ao DNA.</p>
                `,
                "negative_feedback_topic": "<span>Ultraestrutura e organização molecular e funcional dos ribossomos e polissomos</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">O retículo endoplasmático é uma organela exclusiva de células eucariontes e, sobre ele, assinale a alternativa correta:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>O retículo endoplasmático rugoso é assim chamado devido a presença das pregas encontradas na superfície da organela.</p>`,
                    `<p class='c-paragraph'>O retículo endoplasmático liso atua na desintoxicação de medicamentos e de bebidas alcoólicas.</p>`,
                    `<p class='c-paragraph'>O retículo endoplasmático rugoso é especializado na síntese de lipídeos e hormônios esteroides.</p>`,
                    `<p class='c-paragraph'>Apesar dos retículos endoplasmáticos liso e rugoso apresentarem nomes diferentes, possuem morfologias e funções iguais.</p>`,
                    `<p class='c-paragraph'>O retículo endoplasmático é formado por túbulos membranosos e vesículas achatadas que não possuem conexão entre si.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>O retículo endoplasmático é constituído por túbulos membranosos e vesículas achatadas interconectados. Ele é dividido em retículo endoplasmático liso e rugoso, que possuem morfologias e funções diferentes. O liso possui a função de desintoxicação de medicamentos e de bebidas alcoólicas e atua na síntese de lipídeos e hormônios esteróides. O retículo endoplasmático rugoso é assim chamado devido à presença de ribossomos em sua superfície.</p>
                `,
                "negative_feedback_topic": "<span>Aspectos morfológicos, moleculares e funcionais do REL e do RER</span>",
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
                  <p class="c-paragraph">Assinale a alternativa que melhor caracteriza os lisossomos:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Os lisossomos são organelas que não possuem revestimento de membrana.</p>`,
                    `<p class='c-paragraph'>O pH do interior dos lisossomos é extremamente alto.</p>`,
                    `<p class='c-paragraph'>As proteínas marcadas com manose 6-fosfato são aquelas que não devem ser entregues e digeridas nos lisossomos.</p>`,
                    `<p class='c-paragraph'>Os lisossomos possuem importante papel na reciclagem de estruturas envelhecidas no interior da célula.</p>`,
                    `<p class='c-paragraph'>As enzimas digestivas que se encontram no interior dos lisossomos apresentam seu funcionamento ideal em pH neutro.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>Os lisossomos são organelas membranosas que apresentam um papel fundamental na reciclagem de estruturas envelhecidas no interior celular. As enzimas digestivas que se encontram no lúmen lisossomal apresentam sua ação ideal em pH ácido, por isso o interior do lisossomo apresenta pH baixo. As proteínas que recebem marcação com manose 6-fosfato são entregues ao lisossomo para serem digeridas.</p>
                `,
                "negative_feedback_topic": "<span>Ultraestrutura, composição química e aspectos funcionais dos lisossomos</span>",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">Considere as afirmações a seguir e assinale a alternativa correta:</p>
                  <ol class="c-paragraph" style="list-style-type: upper-roman">
                    <li>Os endossomos iniciais estão localizados próximos à membrana plasmática e se fusionam com vesículas endocíticas.</li>
                    <li>As enzimas que constituem os endossomos tardios são inativadas conforme a maturação evolui.</li>
                    <li>Os endossomos iniciais e tardios apresentam as mesmas características morfológicas e de composição.</li>
                    <li>Quanto mais imaturo o endossomo, mais ácido é o seu lúmen.</li>
                    <li>O endossomo inicial possui função de separar o complexo proteína-receptor do ligante.</li>
                  </ol>
                `,
                "options": [
                    `<p class='c-paragraph'>As afirmações I e II estão corretas.</p>`,
                    `<p class='c-paragraph'>As afirmações II e III estão corretas.</p>`,
                    `<p class='c-paragraph'>As afirmações IV e V estão corretas.</p>`,
                    `<p class='c-paragraph'>As afirmações II e IV estão corretas.</p>`,
                    `<p class='c-paragraph'>As afirmações I e V estão corretas.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>Os endossomos iniciais e tardios apresentam morfologia e composição diferentes. Os iniciais estão localizados próximos à membrana plasmática, fusionam-se com vesículas endocíticas e possuem a função de separar o complexo proteína-receptor do ligante que foi endocitado. Conforme os endossomos vão amadurecendo, seus lúmens se tornam mais ácidos e as enzimas vão se ativando.</p>
                `,
                "negative_feedback_topic": "<span>Ultraestrutura, composição química e aspectos funcionais dos endossomos</span>",
                "negative_feedback_link": "#topic-05"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3.settings = question3;

    

});