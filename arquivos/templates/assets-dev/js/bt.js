// Função do botão responder:
        answerButton.on("click", function () {
            console.log(`Questao: ${questionNumber} | finalAnswer: ${finalAnswer}`);
            // Marca o bloco da pergunta como respondido
            block = $(this).closest('.question-block');
            blockDone = block.hasClass('answered');

            // Desabilita as alternativas
            optionList = $(this).closest('.question-block').find('yduqs-card-selecionavel');
            optionListOptions = optionList.find('yduqs-card-selecionavel-item');
            optionListOptions.each(function () {
                $(this).attr('disabled', '');
            });

            // Destaca a alternativa escolhida
            optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer).attr('disabled', '');
            optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer).attr('selected', '');

            // Adiciona classe ao botão Responder para virar "tentar novamente"
            btnTryAgain = answerButton.hasClass('retry-button');

            // Se o botão estiver como "responder", executar
            if (btnTryAgain == false) {

                // Se
                if (chosenNumber == question_answers[questionNumber]) {
                    /* console.log('reconhecendo a certa'); */
                    feedbackPositiveLocation.html(positiveFeedbacks[questionNumber]);
                    feedbackPositiveLocation.removeClass('d-none');
                    $(this).closest('.question-button').addClass('d-none');
                    optionListOptions.removeAttr('final-answer');
                    optionList.find('yduqs-card-selecionavel-item .c-card-selecionavel__icon-container').html('');
                    optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' .c-card-selecionavel__icon-container').html('<span class="material-icons c-card-selecionavel__icon">check_circle</span>');
                    $(this).closest('.question-block').addClass('answered');

                } else if (chosenNumber != question_answers[questionNumber]) {
                    /* console.log('reconhecendo a errada'); */
                    optionListOptions.removeAttr('final-answer');
                    $(this).text('Tentar novamente');
                    $(this).toggleClass('retry-button');
                    feedbackNegativeLocation.html(negativeFeedbacks[questionNumber]);
                    feedbackNegativeLocation.removeClass('d-none');
                    optionList.find('yduqs-card-selecionavel-item .c-card-selecionavel__icon-container').html('');
                    optionList.find('yduqs-card-selecionavel-item#card-selecionavel-' + finalAnswer + ' .c-card-selecionavel__icon-container').html('<span class="material-icons c-card-selecionavel__icon">dangerous</span>');
                    $(this).closest('.question-block').addClass('answered');
                }
            }
            // Se o botão estiver como "tentar novamente", executar
            else { 

                /* console.log('clicou em tentar novamente'); */
                optionListOptions.each(function () {
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
                optionListOptions.removeAttr('final-answer');

            }
        });