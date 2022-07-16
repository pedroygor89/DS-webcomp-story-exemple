// Inicializa o menu a partir do html
 
window.addEventListener('DOMContentLoaded', function () {

    // Questões do Módulo 01
    var question1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Questão 1</h3>
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
                    
                    <div class="legenda">
                        <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div> 

                    <div class="box-legenda">
                        <yduqs-image
                            src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                            alt="Fuji-san" width="100%" height="415">
                        </yduqs-image>
                    </div>

                    <div class="box-legenda">
                        <div class='row'>                   
                            <div class='col-12 col-md-12 col-lg-6'>
                            
                                <p class='c-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>

                            </div>

                            <div class='col-12 col-md-12 col-lg-6 mt-3' aria-hidden='true'>
                            
                            <yduqs-image
                                src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                                alt="Fuji-san" width="100%" height="auto">
                            </yduqs-image>
                            
                            <p class='text-legenda'>Lorem ipsum dolor sit amet</p>
                            
                            <hr class="linha-legenda-feedback">
                            
                            </div>
                        </div>
                    </div>    

                    <div class="box-legenda full">
                        <yduqs-audio-player dark="false" audio_id="3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3"></yduqs-audio-player>
                    </div>

                    <div class="box-legenda full">
                        <yduqs-video-player 
                        src="https://atreus.uoledtech.com.br/estacio/video/193763" 
                        videoId="video_1"
                        width="auto"
                        height="auto"
                        covered="false">
                        </yduqs-video-player>
                    </div>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
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

    const activity1 = document.querySelector('yduqs-questions[question_id="1"]');
    activity1.settings = question1;

    // Questões do Módulo 02
     var question2 = {
         "questions": [
             {
                 "question_title": `
                    <h3 class="c-heading">Questão 1</strong></h3>
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
                    <div class="legenda">
                        <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div> 

                    <div class="box-legenda">
                        <yduqs-image
                            src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                            alt="Fuji-san" width="100%" height="415">
                        </yduqs-image>
                    </div>
                 `,
                 "negative_feedback_topic": "<span>Tópico 1</span>",
                 "negative_feedback_link": "#topic-01"
             },
             {
                "question_title": `
                <h3 class="c-heading">Questão 2</h3>
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


    const activity2 = document.querySelector('yduqs-questions[question_id="2"]');
     activity2.settings = question2;

    // Questões do Módulo 03
    // var question3 = {
    //     "questions": [
    //         {
    //             "question_title": `
    //             <h3 class="c-heading"><strong>Questão 1</strong></h3>
    //               <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    //             `,
    //             "options": [
    //                 `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
    //                 `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
    //                 `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
    //                 `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
    //                 `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
    //             ],
    //             "correct_anwser": 3,
    //             "positive_feedback": `
    //               <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    //             `,
    //             "negative_feedback_topic": "<span>Tópico 1</span>",
    //             "negative_feedback_link": "#topic-01"
    //         },
    //         {
    //             "question_title": `
    //             <h3 class="c-heading"><strong>Questão 2</strong></h3>
    //               <p class="c-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    //             `,
    //             "options": [
    //                 `<p class='c-paragraph'>Primeira resposta da pergunta.</p>`,
    //                 `<p class='c-paragraph'>Segunda resposta da pergunta.</p>`,
    //                 `<p class='c-paragraph'>Terceira resposta da pergunta.</p>`,
    //                 `<p class='c-paragraph'>Quarta resposta da pergunta.</p>`,
    //                 `<p class='c-paragraph'>Quinta resposta da pergunta.</p>`
    //             ],
    //             "correct_anwser": 3,
    //             "positive_feedback": `
    //               <p class='c-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    //             `,
    //             "negative_feedback_topic": "<span>Tópico 1</span>",
    //             "negative_feedback_link": "#topic-01"
    //         }
    //     ]
    // }

    // const activity3 = document.querySelector('yduqs-questions[question_id="3"]');
    // activity3.settings = question3;


    // MÃ£o na massa
    var exercises1 = {
        "questions": [
            {
                "question_title": `
                    <h3 class="c-heading">Mão na massa 1</h3>
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
                <p class="c-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            <yduqs-section>
                <yduqs-image src="img/imagem.jpg" alt="Descrição da imagem" title="Foto: Shutterstock.com"
                    covered="false">
                </yduqs-image>
            </yduqs-section>
            <p class="c-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <yduqs-section>
                <yduqs-image src="img/imagem.jpg" alt="Descrição da imagem" title="Foto: Shutterstock.com"
                    covered="false">
                </yduqs-image>
            </yduqs-section>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                    <h3 class="c-heading">Mão na massa 2</h3>
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
                <p class="c-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <yduqs-section>
                <yduqs-image src="img/imagem.jpg" alt="Descrição da imagem" title="Foto: Shutterstock.com"
                    covered="false">
                </yduqs-image>
            </yduqs-section>
            <p class="c-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <yduqs-section>
                <yduqs-image src="img/imagem.jpg" alt="Descrição da imagem" title="Foto: Shutterstock.com"
                    covered="false">
                </yduqs-image>
            </yduqs-section>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
                "question_title": `
                    <h3 class="c-heading">Mão na massa 3</h3>
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
                <p class="c-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <yduqs-section>
                <yduqs-image src="img/imagem.jpg" alt="Descrição da imagem" title="Foto: Shutterstock.com"
                    covered="false">
                </yduqs-image>
            </yduqs-section>
            <p class="c-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <yduqs-section>
                <yduqs-image src="img/imagem.jpg" alt="Descrição da imagem" title="Foto: Shutterstock.com"
                    covered="false">
                </yduqs-image>
            </yduqs-section>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
            },
            {
              "question_title": `
                  <h3 class="c-heading">Mão na massa 4</h3>
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
              <p class="c-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <yduqs-section>
              <yduqs-image src="img/imagem.jpg" alt="Descrição da imagem" title="Foto: Shutterstock.com"
                  covered="false">
              </yduqs-image>
          </yduqs-section>
          <p class="c-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <yduqs-section>
              <yduqs-image src="img/imagem.jpg" alt="Descrição da imagem" title="Foto: Shutterstock.com"
                  covered="false">
              </yduqs-image>
          </yduqs-section>
                `,
                "negative_feedback_topic": "<span>Tópico 1</span>",
                "negative_feedback_link": "#topic-01"
          }
        ]
    }

    const exercise1 = document.querySelector('yduqs-questions[exercise_id="1"]');
    exercise1.settings = exercises1;


    

});