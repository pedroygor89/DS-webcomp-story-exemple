// Inicializa o menu a partir do html

window.addEventListener('DOMContentLoaded', function() {

    // Questões do Módulo 01
    var question1 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
                "options": [
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `,
                "negative_feedback_topic": "<span>LOREM_IPSUM</span>",
                "negative_feedback_link": "#m1q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
                "options": [
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `,
                "negative_feedback_topic": "<span>LOREM_IPSUM</span>",
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
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
                "options": [
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `,
                "negative_feedback_topic": "<span>LOREM_IPSUM</span>",
                "negative_feedback_link": "#m2q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
                "options": [
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `,
                "negative_feedback_topic": "<span>LOREM_IPSUM</span>",
                "negative_feedback_link": "#m2q2"
            }
        ]
    }

    const activity2 = document.querySelector('yduqs-questions[question_id="2"]');
    activity2 && (activity2.settings = question2);

    // Questões do Módulo 03
    var question3 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
                "options": [
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `,
                "negative_feedback_topic": "<span>LOREM_IPSUM</span>",
                "negative_feedback_link": "#m3q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
                "options": [
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `,
                "negative_feedback_topic": "<span>LOREM_IPSUM</span>",
                "negative_feedback_link": "#m3q2"
            }
        ]
    }

    const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    activity3 && (activity3.settings = question3);

    // Questões do Módulo 04
    var question4 = {
        "questions": [{
                "question_title": `
                <h3 class="c-heading">Questão 1</h3>
                <p class="c-paragraph">LOREM_IPSUM</p>
              `,
                "options": [
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                <p class='c-paragraph'>LOREM_IPSUM</p>
              `,
                "negative_feedback_topic": "<span>LOREM_IPSUM</span>",
                "negative_feedback_link": "#m4q1"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
                <p class="c-paragraph">LOREM_IPSUM</p>
              `,
                "options": [
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                    `<p class='c-paragraph'>LOREM_IPSUM</p>`
                ],
                "correct_anwser": 3,
                "positive_feedback": `
                <p class='c-paragraph'>LOREM_IPSUM</p>
              `,
                "negative_feedback_topic": "<span>LOREM_IPSUM</span>",
                "negative_feedback_link": "#m4q2"
            }
        ]
    }

    const activity4 = document.querySelector('yduqs-questions[question_id="4"]');
    activity4 && (activity4.settings = question4);

    // Mão na massa 01
    /* var exercises1 = {
        "questions": [{
            "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 3</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 4</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 5</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 6</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        }
        ]
    }

    const exercise1 = document.querySelector('yduqs-questions[exercise_id="1"]');
    exercise1 && (exercise1.settings = exercises1); */

    // Mão na massa 02
    /* var exercises2 = {
        "questions": [{
            "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 3</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 4</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 5</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 6</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        }
        ]
    }

    const exercise2 = document.querySelector('yduqs-questions[exercise_id="2"]');
    exercise2 && (exercise2.settings = exercises2); */

    // Mão na massa 03
    /* var exercises3 = {
        "questions": [{
            "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 3</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 4</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 5</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 6</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        }
        ]
    }

    const exercise3 = document.querySelector('yduqs-questions[exercise_id="3"]');
    exercise3 && (exercise3.settings = exercises3); */

    // Mão na massa 04
    /* var exercises4 = {
        "questions": [{
            "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 2</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 3</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 4</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 5</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        },
        {
            "question_title": `
                    <h3 class="c-heading">Questão 6</h3>
                  <p class="c-paragraph">LOREM_IPSUM</p>
                `,
            "options": [
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`,
                `<p class='c-paragraph'>LOREM_IPSUM</p>`
            ],
            "correct_anwser": 3,
            "positive_feedback": `
                  <p class='c-paragraph'>LOREM_IPSUM</p>
                `
        }
        ]
    }

    const exercise4 = document.querySelector('yduqs-questions[exercise_id="4"]');
    exercise4 && (exercise4.settings = exercises4); */

});