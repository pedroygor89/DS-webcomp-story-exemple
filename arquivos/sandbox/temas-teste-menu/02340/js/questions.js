// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function() {

    // Questões do Módulo 01
    var question1 = {
        "questions": [{
                "question_title": `
                    <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">O desenvolvimento da ciência passou por várias etapas até a consolidação do método científico. O conhecimento que advém de determinada pesquisa deve ter passado por etapas bem organizadas, confiáveis e com metodologia específica para a conservação do rigor da informação. Acerca do método científico, marque a alternativa correta.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Seu desenvolvimento seguia preceitos teológicos da Idade Média que foram sendo adaptados pelos copistas para uma correta divulgação das informações.</p>`,
                    `<p class='c-paragraph'>A metodologia científica teve como um de seus expoentes o matemático francês René Descartes, para o qual o método se dividia em quatro etapas distintas: verificar, analisar, sintetizar e enumerar.</p>`,
                    `<p class='c-paragraph'>A Igreja foi a grande incentivadora do método científico, para a qual o universo funcionava de forma perfeita de acordo com a criação de Deus e cujas informações científicas deveriam corroborar essa perfeição.</p>`,
                    `<p class='c-paragraph'>A invenção da prensa de Gutenberg não colaborou para a divulgação de informações, tendo em vista que ela era aplicada apenas para um público restrito e produzia exemplares somente em latim, língua acessível a poucos.</p>`,
                    `<p class='c-paragraph'>De acordo com o método científico, se uma hipótese é bem formulada e condiz com o senso comum, não há necessidade de experimentação para a comprovação do fato em estudo.</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>O método científico surgiu com o racionalismo, isto é, com a explicação de fatos e acontecimentos por meio da razão, em contraponto aos preceitos teológicos. Um dos principais pensadores do racionalismo foi René Descartes, que estabeleceu os princípios do método científico em quatro etapas: verificar, analisar, sintetizar e enumerar.</p>
                `,
                "negative_feedback_topic": "<span>Luzes sobre as trevas: o nascimento e o desenvolvimento da ciência</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">A energia, normalmente definida como capacidade de realizar trabalho, pode ser deslocada de duas formas: como calor ou como trabalho. A respeito do calor, assinale a alternativa correta.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>O calor é uma forma de deslocamento de energia de modo ordenado para a realização de alguma ação, como a elevação de uma massa contra a ação da gravidade.</p>`,
                    `<p class='c-paragraph'>O calor não pode ser convertido em trabalho, pois ambos são formas de energia totalmente distintas.</p>`,
                    `<p class='c-paragraph'>O trabalho, ao ser realizado, não envolve, em nenhuma hipótese, a conversão de parte da energia envolvida em calor.</p>`,
                    `<p class='c-paragraph'>O calor flui apenas através do meio sólido.</p>`,
                    `<p class='c-paragraph'>Na transferência de energia, observa-se que o calor flui da região com a temperatura mais elevada para aquela com a temperatura mais fria.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>O calor é uma forma de transferência de energia que não está associada diretamente com a obtenção de uma ação ordenada. Ao fluir como calor, a energia se desloca de uma região mais quente (ou de um corpo quente) para uma mais fria (ou para um corpo frio).</p>
                `,
                "negative_feedback_topic": "<span>Energia</span>",
                "negative_feedback_link": "#topic-02"
            }
        ]
    }

    const activity1 = document.querySelector('yduqs-questions[question_id="1"]');
    activity1.settings = question1;

    // Questões do Módulo 02
    var question2 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">A matéria se encontra em constante modificação. Essas modificações envolvem a energia – e normalmente na forma de calor. A transformação da matéria pode ter uma natureza física ou química, enquanto, em termos de trocas de energia, ocorrem processos endotérmicos e exotérmicos. A respeito das transformações da matéria e dos fluxos de calor envolvidos, assinale a resposta correta.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>As transformações físicas apresentam somente trocas de calor exotérmicas.</p>`,
                    `<p class='c-paragraph'>As transformações químicas são responsáveis pela alteração do estado físico dos participantes sem que haja o rompimento de ligações químicas no processo.</p>`,
                    `<p class='c-paragraph'>Os processos exotérmicos apresentam uma variação de entalpia negativa no sistema.</p>`,
                    `<p class='c-paragraph'>Nos processos endotérmicos, observa-se um aumento da temperatura das vizinhanças.</p>`,
                    `<p class='c-paragraph'>Nas transformações físicas, há o rompimento e a formação de novas ligações químicas.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>Nas transformações químicas e físicas, há trocas de calor quantificadas como variação de entalpia. Essa troca ocorre em pressão constante, que é a condição da maioria dos processos. Os processos exotérmicos são aqueles em que existe uma liberação de calor pelo sistema. Ao final desse tipo de processo, os produtos obtidos têm um patamar de energia menor que o dos reagentes. O balanço entre as quantidades de energia no sistema para reações exotérmicas, considerando as energias de produtos e reagentes, leva a valores negativos da variação de entalpia.</p>
                `,
                "negative_feedback_topic": "<span>Quantidades de energia envolvidas nas transformações da matéria</span>",
                "negative_feedback_link": "#topic-03"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">As transformações da matéria envolvem a liberação ou a absorção de energia na forma de calor. Para o cálculo da quantidade de calor envolvida em uma reação, pode-se utilizar as entalpias padrão de formação dos compostos envolvidos na reação. Com isso, o cálculo da variação de entalpia pode ser aplicado em qualquer área na qual haja uma transformação química, como a indústria, a combustão de substâncias ou a produção de medicamentos e fertilizantes. </p>

                  <p class="c-paragraph">Tomemos como exemplo uma reação que envolve um anestésico: em condições normais de pressão e temperatura, o óxido nitroso N<sub>2</sub>O é um gás que apresenta efeitos anestésicos. O N<sub>2</sub>O é usado para indução e manutenção de anestesia inalatória em combinação com outros fármacos anestésicos, relaxantes musculares e analgésicos, além de outros elementos. A reação de obtenção do N<sub>2</sub>O pode ser descrita como: </p>

                  <math xmlns="http://www.w3.org/1998/Math/MathML"><mi>NO</mi><mo>(</mo><mi mathvariant="normal">g</mi><mo>)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&#xA0;</mo><msub><mi mathvariant="normal">N</mi><mn>2</mn></msub><mo>(</mo><mo>&#xA0;</mo><mi mathvariant="normal">g</mi><mo>)</mo><mo>&#x2192;</mo><msub><mi mathvariant="normal">N</mi><mn>2</mn></msub><mi mathvariant="normal">O</mi><mo>(</mo><mi mathvariant="normal">g</mi><mo>)</mo></math>
                  <br><br>
                  <p class="c-paragraph">Marque a alternativa com o valor correto para a variação de entalpia da reação. Dados: </p>


                  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x394;H</mi><mi mathvariant="normal">f</mi><mn>0</mn></msubsup><mi>NO</mi><mo>(</mo><mi mathvariant="normal">g</mi><mo>)</mo><mo>=</mo><mo>+</mo><mn>90</mn><mo>,</mo><mn>25</mn><mo>&#xA0;</mo><mi>kJ</mi><mo>.</mo><msup><mi>mol</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup></math>
                  <br><br>
                  <math xmlns="http://www.w3.org/1998/Math/MathML"><msubsup><mi>&#x394;H</mi><mi mathvariant="normal">f</mi><mn>0</mn></msubsup><mo>&#xA0;</mo><msub><mi mathvariant="normal">N</mi><mn>2</mn></msub><mi mathvariant="normal">O</mi><mo>(</mo><mi mathvariant="normal">g</mi><mo>)</mo><mo>=</mo><mo>+</mo><mn>82</mn><mo>,</mo><mn>95</mn><mo>&#xA0;</mo><mi>kJ</mi><mo>.</mo><msup><mi>mol</mi><mrow><mo>-</mo><mn>1</mn></mrow></msup></math>
                  <br><br><br>
                `,
                "options": [
                    `<p class='c-paragraph'>+82,95kJ.mol-1</p>`,
                    `<p class='c-paragraph'>+173,15kJ.mol-1</p>`,
                    `<p class='c-paragraph'>-82,95kJ.mol-1</p>`,
                    `<p class='c-paragraph'>-173,15kJ.mol-1</p>`,
                    `<p class='c-paragraph'>-73,15kJ.mol-1</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `   
                  <p class='c-paragraph c-table'>O cálculo da variação de entalpia de uma reação pode ser feito por meio da utilização de dados termodinâmicos das entalpias padrão de formação das substâncias envolvidas: <br>
                  
                  $$ \\Delta \\mathbf{H}_{\\mathbf{r}}^{0}=\\sum \\mathbf{v} \\Delta \\mathbf{H}_{\\mathrm{f}}^{0} (produtos) - \\sum \\mathbf{v} \\Delta \\mathbf{H}_{\\mathbf{f}}^{0} (reagentes)$$ </p> 
                  <br>
                  <p class='c-paragraph c-table'>Para a reação de produção do óxido nitroso, verificamos que: 
                  
                  $$ \\Delta \\mathrm{H}_{\\mathrm{r}}^{0}=\\Delta \\mathrm{H}_{\\mathrm{f}}^{0} \\mathrm{~N}_{2} \\mathrm{O}(\\mathrm{g})-\\left(\\Delta \\mathrm{H}_{\\mathrm{f}}^{0} \\mathrm{NO}(\\mathrm{g})+\\Delta \\mathrm{H}_{\\mathrm{f}}^{0} \\mathrm{~N}_{2}(\\mathrm{~g})\\right) $$
                  
                  $$ \\triangle\\mathrm H_{\\mathrm r}^0\\;=\\;+82,95\\mathrm{kJ}\\;\\mathrm{mol}^{-1}\\;-\\;(+90,25\\;\\mathrm{kJ}\\;\\cdot\\;\\mathrm{mol}^{-1}\\;+\\;0)\\;=\\;-\\;7,3\\mathrm{kJ}\\cdot\\;\\mathrm{mol}^{-1} $$ </p> 
                `,
                "negative_feedback_topic": "<span>Quantidades de energia envolvidas em uma reação química</span>",
                "negative_feedback_link": "#topic-04"
            }
        ]
    }


    const activity2 = document.querySelector('yduqs-questions[question_id="2"]');
    activity2.settings = question2;

    // Questões do Módulo 03
    var question3 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading"><strong>Questão 1</strong></h3>
                  <p class="c-paragraph">O Princípio de Le Châtelier mostra de que forma um sistema em equilíbrio reage a uma alteração imposta. Esse comportamento do microssistema reacional químico pode ser estendido a sistemas mais amplos. Para uma transformação química em equilíbrio dinâmico na qual sejam retiradas quantidades de produto, marque a alternativa que indica a forma como o sistema reage.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>O sistema, se for endotérmico, deverá se comportar de forma exotérmica para suprir as quantidades retiradas de produto.</p>`,
                    `<p class='c-paragraph'>Se o sistema for endotérmico, haverá uma alteração de seu regime térmico para o exotérmico como forma de compensar o excesso de reagente.</p>`,
                    `<p class='c-paragraph'>Nesse caso, haverá um excesso de reagente, que deverá ser consumido com o objetivo de repor a quantidade de produto retirado para que o sistema retorne a seu equilíbrio antes da perturbação. </p>`,
                    `<p class='c-paragraph'>Ocorrerá uma conversão do restante do produto em reagentes como forma de retornar ao equilíbrio antes da perturbação.</p>`,
                    `<p class='c-paragraph'>Se o sistema for exotérmico, haverá um incremento na liberação de calor, tendo em vista a retirada do produto.</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>De acordo com o Princípio de Le Châtelier, um sistema em equilíbrio dinâmico reage às alterações impostas de modo a anular as modificações e retornar ao ponto de equilíbrio. Havendo a retirada de produto, o excesso de reagente tem de ser consumido, propiciando, assim, uma recuperação das quantidades de produto e a consequente diminuição das quantidades de reagentes.</p>
                `,
                "negative_feedback_topic": "<span>A resposta das transformações químicas às alterações: o Princípio de Le Châtelier</span>",
                "negative_feedback_link": "#topic-05"
            },
            {
                "question_title": `
                <h3 class="c-heading"><strong>Questão 2</strong></h3>
                  <p class="c-paragraph">Alterações de macrossistemas terrestres tornaram-se bastante intensas com o advento da era industrial a partir do início do século XIX. As emissões de gases poluentes sofreram um incremento considerável nesse período, principalmente em virtude da queima de combustíveis fósseis. Até os dias atuais, o gás poluente produzido em maior escala é o CO<sub>2</sub>, que está atingindo níveis elevadíssimos na atmosfera. Aponte a alternativa correta em relação às consequências relacionadas aos níveis elevados de CO<sub>2</sub> na atmosfera.</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Resfriamento elevado das regiões dos polos da Terra em virtude da capacidade desse gás em refletir a radiação do sol.</p>`,
                    `<p class='c-paragraph'>Contaminação do solo, tendo em vista as mineralizações de carbonatos produzidos pela absorção desse gás.</p>`,
                    `<p class='c-paragraph'>Elevação do pH da água marinha, haja vista a intensa absorção do CO<sub>2</sub> pelos oceanos. </p>`,
                    `<p class='c-paragraph'>Elevação da temperatura global, já que esse gás é um dos responsáveis pelo efeito estufa.</p>`,
                    `<p class='c-paragraph'>Diminuição dos níveis das águas dos oceanos por conta da elevação da evaporação das águas como consequência da presença desse gás na atmosfera.</p>`
                ],
                "correct_anwser": 4,
                "positive_feedback": `
                  <p class='c-paragraph'>A presença de CO<sub>2</sub> na atmosfera contribui para o efeito estufa. Esse efeito, de maneira controlada, é benéfico para o planeta, tendo em vista a manutenção de uma média de temperatura amena necessária para a vida da forma como conhecemos. O excesso do CO<sub>2</sub> na atmosfera, além de outros gases poluentes, tem elevado de modo anormal as médias de temperatura global, extrapolando os efeitos benéficos do efeito estufa e causando outros múltiplos problemas ambientais, como, por exemplo, a elevação das águas dos oceanos e sua acidificação. </p>
                `,
                "negative_feedback_topic": "<span>Alterações em macrossistemas</span>",
                "negative_feedback_link": "#topic-06"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3.settings = question3;



});