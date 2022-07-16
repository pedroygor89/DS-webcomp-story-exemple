// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function() {

    // Questões do Módulo 01
    var question1 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading">Cuestión 1</h3>
                  <p class="c-paragraph">Según la gramática normativa, la conjugación de verbos terminados en “-ar” en segunda persona del singular, en pretérito perfecto simple, es “-aste”, como en “entregaste”, “informaste” y “escuchaste”. Sin embargo, hay hablantes con menor grado de instrucción escolar que suelen conjugarlos con la inserción de la “-s” al final, como “entregastes”, “informastes” y “escuchastes”. En este caso, se observa un ejemplo de variación en nivel:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>diatópico</p>`,
                    `<p class='c-paragraph'>diastrático</p>`,
                    `<p class='c-paragraph'>diafásico</p>`,
                    `<p class='c-paragraph'>diacrónico</p>`,
                    `<p class='c-paragraph'>sincrónico</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>El ejemplo de variación ilustrado en la cuestión se relaciona con el nivel diastrático, puesto que la realización lingüística de los hablantes está motivada por factores del grupo social al que pertenecen.</p>
                `,
                "negative_feedback_topic": "<span>Tipos de variación</span>",
                "negative_feedback_link": "#m1q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Cuestión 2</h3>
                  <p class="c-paragraph">Hay distintas maneras de localizar el español de forma espacial. Señala la alternativa en la que se presenta una distribución en términos de regiones:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>Español europeo, americano y africano.</p>`,
                    `<p class='c-paragraph'>Español de España, Argentina, Chile y México.</p>`,
                    `<p class='c-paragraph'>Español rioplatense, castellano septentrional, andino y caribeño. </p>`,
                    `<p class='c-paragraph'>Español de Bogotá, de Buenos Aires, de Madrid y de Barcelona.</p>`,
                    `<p class='c-paragraph'><em>Pidgins</em>, lenguas criollas, lenguas de contacto y lengua global. </p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>En la alternativa C, se observa una división de las variedades por regiones dialectales; en la alternativa A, una división por continentes; en la B, por países; en la D, por ciudades; y en la E, por internacionalización y globalización. </p>
                `,
                "negative_feedback_topic": "<span>Formas de localización del español</span>",
                "negative_feedback_link": "#m1q2"
            }
        ]
    }
    const activity1 = document.querySelector('yduqs-questions[question_id="1"]');
    activity1 && (activity1.settings = question1);

    // Questões do Módulo 02
    var question2 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading">Cuestión 1</h3>
                  <p class="c-paragraph">En la dimensión individual o la dimensión colectiva, debemos actuar lingüísticamente a partir de un modelo de ejemplaridad. La elección de este modelo se relaciona con el concepto de: </p>
                `,
                "options": [
                    `<p class='c-paragraph'>prescripción</p>`,
                    `<p class='c-paragraph'>norma</p>`,
                    `<p class='c-paragraph'>contacto lingüístico</p>`,
                    `<p class='c-paragraph'>lengua criolla</p>`,
                    `<p class='c-paragraph'>uso</p>`
                ],
                "correct_anwser": 2,
                "positive_feedback": `
                  <p class='c-paragraph'>La elección de un modelo de ejemplaridad de una lengua se relaciona con el concepto de norma, que hace referencia al establecimiento de un sistema lingüístico considerado ideal y realizable por los hablantes. Así, el modelo de ejemplaridad es basado en la corrección.</p>
                `,
                "negative_feedback_topic": "<span>Prescripción, norma y uso</span>",
                "negative_feedback_link": "#m2q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Cuestión 2</h3>
                  <p class="c-paragraph">Algunos sistemas lingüísticos pueden surgir a partir del contacto lingüístico, como el <em>pidgin</em> y la lengua criolla. Sobre esos dos sistemas, señala la alternativa correcta:</p>
                `,
                "options": [
                    `<p class='c-paragraph'>El <em>pidgin</em> es una lengua natural, mientras que las lenguas criollas no.</p>`,
                    `<p class='c-paragraph'>Tanto el <em>pidgin</em> como las lenguas criollas no son lenguas naturales.</p>`,
                    `<p class='c-paragraph'>Tanto el <em>pidgin</em> como las lenguas criollas son lenguas naturales.</p>`,
                    `<p class='c-paragraph'>Hay hablantes nativos de los <em>pidgins</em>, pero no de las lenguas criollas.</p>`,
                    `<p class='c-paragraph'>Hay hablantes nativos de las lenguas criollas, pero no de los <em>pidgins</em>.</p>`
                ],
                "correct_anwser": 5,
                "positive_feedback": `
                  <p class='c-paragraph'>Una lengua natural es aquella en la que hay hablantes nativos. Solo hay hablantes nativos de lenguas criollas. Luego, solamente esta puede considerarse una lengua natural. </p>
                `,
                "negative_feedback_topic": "<span>Contacto lingüístico y formación de otras lenguas</span>",
                "negative_feedback_link": "#m2q2"
            }
        ]
    }

    const activity2 = document.querySelector('yduqs-questions[question_id="2"]');
    activity2 && (activity2.settings = question2);

});