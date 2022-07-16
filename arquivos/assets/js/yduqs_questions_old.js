// Cria o array dos feedbacks e respostas
var positiveFeedbacks = [];
var negativeFeedbacks = [];
var question_answers = [];

// Encontra cada bloco de perguntas e executa:
$('body').append('<yduqs-notification id="question-warning" dismissible type="warning">Escolha uma alternativa</yduqs-notification>');

$('div.question-block').each(function () {
    var question = $(this);

    // Armazena os feedbacks em variáveis e os manda para os arrays (positiveFeedbacks, negativeFeedbacks)
    var feedbackPositive = question.find('.question-positive-feedback');
    var feedbackNegative = question.find('.question-negative-feedback');
    var feedbackPositiveText = feedbackPositive.html();
    positiveFeedbacks.push(feedbackPositiveText);

    if(!printVersion){
        var feedbackNegativeText = feedbackNegative.html();
        negativeFeedbacks.push(feedbackNegativeText);
        feedbackPositive.html('<p>Aguardando a resposta do aluno...</p>');
        feedbackNegative.html('<p>Aguardando a resposta do aluno...</p>');
    }

    chosenLetterLocation = question.closest('yduqs-card-selecionavel-item').attr('id');
    $(this).removeClass('question-loading');
});

var finalAnswer = 'unanswered';

// Encontra cada botão de responder e executa:
var findButtons = $('.question-block').find('button[type="button"]');
findButtons.each(function (questionNumber) {
    $(this).attr('question-reference', questionNumber);

    $(this).on("click", function () {
        getBlock = $('.question-block[question-reference="' + questionNumber + '"]');

        getQuestion = $('.question-block[question-reference="' + questionNumber + '"]').find('yduqs-card-selecionavel');
        hasFinalAnswer = getQuestion.attr('final-answer');

        if (hasFinalAnswer == undefined) {
            var objNotification = document.querySelector('#question-warning');
            objNotification.show();
        } else {
            // Converte a resposta de letra pra número
            var chosenNumber = finalAnswer.charCodeAt(0) - 97 + 1;

            // Obtêm os feedbacks correspondentes a pergunta
            feedbackPositiveLocation = findButtons.closest('.question-block[question-reference="' + questionNumber + '"]').find('.question-positive-feedback');
            feedbackNegativeLocation = findButtons.closest('.question-block[question-reference="' + questionNumber + '"]').find('.question-negative-feedback');

            // Marca o bloco da pergunta como respondido
            block = $(this).closest('.question-block');
            blockDone = block.hasClass('answered');

            // Desabilita as alternativas
            optionList = $(this).closest('.question-block').find('yduqs-card-selecionavel');
            optionListOptions = optionList.find('yduqs-card-selecionavel-item');
            optionListOptions.each(function () {
                $(this).attr('disabled', '');
                $(this).addClass('unchecked-answer');
            });

            // Destaca a alternativa escolhida
            optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer).removeClass('unchecked-answer');
            optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer).attr('disabled', '');
            optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer).attr('selected', '');

            // Adiciona classe ao botão Responder para virar "tentar novamente"
            btnTryAgain = $(this).hasClass('retry-button');


            // Se o botão estiver como "responder", executar
            if (btnTryAgain == false) {

                // Se acertar
                if (chosenNumber == question_answers[questionNumber]) {
                    feedbackPositiveLocation.html(`
                                         <yduqs-card-destaque grade="2" outline="false" icon="check_circle">
                                            <yduqs-card-destaque-header>
                                                <h2 class="c-heading u-large">Parabéns! A alternativa <span class="text-uppercase">${finalAnswer}</span> está correta.</h2>
                                            </yduqs-card-destaque-header>
                                            <yduqs-card-destaque-body>
                                                <p class="c-paragraph">${positiveFeedbacks[questionNumber]}</p>
                                            </yduqs-card-destaque-body>
                                        </yduqs-card-destaque>
                                        `);
                    feedbackPositiveLocation.toggleClass('d-none');
                    $(this).closest('.question-button').addClass('d-none');
                    optionListOptions.removeAttr('final-answer');
                    optionList.find('yduqs-card-selecionavel-item .c-card-selecionavel__icon-container').html('');
                    optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' .c-card-selecionavel__icon-container').html('<span class="material-icons c-card-selecionavel__icon">check_circle</span>');
                    optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' button').addClass('correct-answer');
                    $(this).closest('.question-block').addClass('answered');
                    $(".c-module-rating").addClass('d-none');
                    ratingModule = $(this).closest('module').find('.c-module-rating');  

                    var verificaAvaliado = $(this).closest('module').find('.c-rating');
                    
                    if(!verificaAvaliado.hasClass('avaliado')){                                      
                        ratingModule.removeClass('d-none');
                        setTimeout(function(){ ratingModule.addClass('open-rating'); }, 100);
                    }

                } else {
                    // Se errar
                    optionListOptions.removeAttr('final-answer');
                    $(this).text('Tentar novamente');
                    $(this).toggleClass('retry-button');
                    feedbackNegativeLocation.html(`
                                         <yduqs-card-destaque grade="2" outline="false" icon="dangerous">
                                            <yduqs-card-destaque-header>
                                                <h2 class="c-heading u-large">Opa! Algo não deu certo.</h2>
                                            </yduqs-card-destaque-header>
                                            <yduqs-card-destaque-body>
                                                <p class="c-paragraph">${negativeFeedbacks[questionNumber]}</p>
                                            </yduqs-card-destaque-body>
                                        </yduqs-card-destaque>
                                        `);
                    feedbackNegativeLocation.toggleClass('d-none');
                    optionList.find('yduqs-card-selecionavel-item .c-card-selecionavel__icon-container').html('');
                    optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' .c-card-selecionavel__icon-container').html('<span class="material-icons c-card-selecionavel__icon">dangerous</span>');
                    optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' button').addClass('wrong-answer');
                    $(this).closest('.question-block').addClass('answered');
                }
            }
            // Se o botão estiver como "tentar novamente", executar
            else {

                optionListOptions.each(function () {
                    $(this).removeClass('unchecked-answer');
                    $(this).removeAttr('disabled');
                    $(this).removeAttr('selected');
                    $(this).find('.c-card-selecionavel__icon-container').html('');
                    $(this).closest('.question-block').removeClass('answered');
                    removeActive = $(this).closest('yduqs-card-selecionavel').find('.c-card-selecionavel__control--active');
                    removeActive.removeClass('c-card-selecionavel__control--active');
                    removeActive.removeClass('chosen-alternative');
                });

                $(this).text('Responder');
                $(this).toggleClass('retry-button');
                feedbackNegativeLocation.html('<p>Aguardando a resposta do aluno...</p>');
                feedbackNegativeLocation.addClass('d-none');
                btnTryAgain == false;
                optionList.removeAttr('final-answer');
                optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' button').removeClass('wrong-answer');
                optionList.find('button').removeClass('chosen-alternative');

            }

        }
    });
});

// Armazena a resposta correta e a manda para o array (question_answers)
$('.c-questions yduqs-card-selecionavel').each(function (questionNumber) {
    question_answer = $(this).attr('correct-answer');
    nameBlock = $(this).closest('.question-block');
    nameBlock.attr('question-reference', questionNumber);

    if(!printVersion){
        $(this).removeAttr('correct-answer');
    }

    question_answers.push(question_answer);
    $(this).find('div.question-label h2').html('Questão 0' + questionNumber);
});

// Encontra cada opção de resposta e executa: 
var questionOption = $('.question-block yduqs-card-selecionavel-item');
questionOption.each(function () {

    // Cria um array para converter a resposta de numeral para letra
    optionLetters = ['a', 'b', 'c', 'd', 'e'];


    // Ao clicar nas alternativas, executar:
    $(this).on("click", function () {

        // Teste para bloquear re-click após enviar a resposta
        blockDone = $(this).closest('.question-block').hasClass('answered');

        // Se ainda não respondeu a pergunta, executar:
        if (!blockDone) {

            // Identifica e filtra a letra da alternativa escolhida
            chosenLetterLocation = $(this).closest('yduqs-card-selecionavel-item').attr('id');
            var chosenLetter = chosenLetterLocation.substr(chosenLetterLocation.length - 1);

            // Identifica o atributo final-answer 
            finalAnswerAttr = $(this).closest('yduqs-card-selecionavel').attr('final-answer');

            // Encontra o grupo de respostas relativo a alternativa
            optionList = $(this).closest('yduqs-card-selecionavel');

            // Encontra a alternativa relativa ao grupo
            optionListOptions = optionList.find('yduqs-card-selecionavel-item');

            if (finalAnswerAttr != chosenLetter) {

                // Joga na tag principal a alternativa selecionada
                $(this).closest('yduqs-card-selecionavel').attr('final-answer', chosenLetter);

                // Armazena a resposta em uma variável
                finalAnswer = optionList.attr('final-answer');

                // Altera o ícone ao selecionar uma alternativa
                optionListOptions.each(function () {
                    $(this).removeClass('chosen-answer');
                    $(this).removeAttr('disabled');
                    $(this).find('.c-card-selecionavel__icon-container').html('');
                    $(this).find('button').removeClass('c-card-selecionavel__control--active');
                    $(this).find('button').removeClass('chosen-alternative');
                });
                optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' .c-card-selecionavel__icon-container').html('<span class="material-icons c-card-selecionavel__icon">done</span>');
                optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' button').addClass('chosen-alternative');


            } else {
                // Se desmarcar a alternativa
                optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' .c-card-selecionavel__icon-container').html('');
                $(this).closest('yduqs-card-selecionavel').removeAttr('final-answer');
                optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' button').removeClass('chosen-alternative');
                finalAnswer = null;
            }
        }
    })
})