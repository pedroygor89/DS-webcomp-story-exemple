const CONFIG = {
    QT_MULTIPLE: 'QT_MULTIPLE', //questão com múltiplas respostas
    QT_SINGLE: 'QT_SINGLE', //questão com única resposta
    AT_TEXT: 'AT_TEXT', //resposta com texto
    AT_IMAGE: 'AT_IMAGE', //resposta com imagem
    AT_MIX: 'AT_MIX', //resposta com texto e imagem
    RT_PROGRESS_BAR: 'RT_PROGRESS_BAR', //resultado apresentado em barras de progresso
    RT_GRAPHIC: 'RT_GRAPHIC', //resultado apresentado em gráfico
    RT_TEXT: 'RT_TEXT' //resultado apresentado em gráfico
}

function Quiz(module) {
    if (printVersion) {
        this.renderPrintVersion(module)
    } else {
        this.render(module)
    }
}

Quiz.prototype.renderPrintVersion = function (module) {
    let tagsQuiz = module.querySelectorAll(`quiz`)

    if (tagsQuiz) {
        tagsQuiz.forEach(container => {   

            let quiz = quizes.find(q => q.elementId === container.getAttribute('id'))

            for(let cont=0; quizes[0].questions.length > cont; cont++) {      

                let divQuiz = document.createElement('div')
                divQuiz.classList.add('quiz')
                divQuiz.setAttribute('id', `${quiz.elementId}`)

                let divBody = document.createElement('div')
                divBody.classList.add('body')
        

                //--------------- Título da Questão
                let divQuestion = document.createElement('div')
                divQuestion.classList.add('question-quiz')
                divQuestion.setAttribute('data-index', 0)

                let h2Question = document.createElement('h2')

                let spanQuestion = document.createElement('span')
                spanQuestion.classList.add('question-text-quiz')
                //--------------- Fim do Título da Questão

                //--------------- Alternativas
                let divOptions = document.createElement('div')
                divOptions.classList.add('options-container')

                let ulOptions = document.createElement('ul')
                ulOptions.classList.add('options-quiz-print')
                //--------------- Fim das Alternativas

                this.loadQuestionPrintVersion(cont, h2Question, spanQuestion, ulOptions, quiz)

                //Título
                h2Question.appendChild(spanQuestion)
                divQuestion.appendChild(h2Question)
                //Alternativas
                divOptions.appendChild(ulOptions)
                divQuestion.appendChild(divOptions)
                divBody.appendChild(divQuestion)

                divQuiz.appendChild(divBody)
                container.appendChild(divQuiz)

                
                if(quizes[0].questions.length-1 == cont ) {    
                    const feedback = `<div class='col-10'>
                        <h1>Atenção !</h1>
                        <p>O feedback para essa atividade é baseado no conjunto de suas respostas, dessa forma, só pode ser visualizado na versão online.</p>
                    </div>`
                    divQuiz.innerHTML = feedback;
                }
            }
        })
    }

}

Quiz.prototype.loadQuestionPrintVersion = function (index, imgElement, textElement, optionsElement, quiz) {
    this.loadTitle(index, imgElement, textElement, quiz)
    this.loadAlternatives(quiz.questions[index].answers, optionsElement, quiz.questions[index])
}


Quiz.prototype.render = function (module) {
    let tagsQuiz = module.querySelectorAll(`quiz`)

    if (tagsQuiz) {
        tagsQuiz.forEach(container => {
            let quiz = quizes.find(q => q.elementId === container.getAttribute('id'))

            let divQuiz = document.createElement('div')
            divQuiz.classList.add('quiz')
            divQuiz.setAttribute('id', `${quiz.elementId}`)

            let divBody = document.createElement('div')
            divBody.classList.add('body')

            //--------------- Barra de progresso
            let divProgress = document.createElement('div')
            divProgress.classList.add('progress-quiz')

            let divProgressFill = document.createElement('div')
            divProgressFill.classList.add('progress-fill-quiz')

            let spanProgress = document.createElement('span')
            spanProgress.classList.add('progress-text-quiz')

            let spanCurrentProgress = document.createElement('span')
            spanCurrentProgress.classList.add('current-progress-quiz')

            let spanTotalProgress = document.createElement('span')
            spanTotalProgress.classList.add('total-progress-quiz')
            //--------------- Fim da Barra de progresso

            //--------------- Título da Questão
            let divQuestion = document.createElement('div')
            divQuestion.classList.add('question-quiz')
            divQuestion.setAttribute('data-index', 0)

            let h2Question = document.createElement('h2')

            let spanQuestion = document.createElement('span')
            spanQuestion.classList.add('question-text-quiz')
            //--------------- Fim do Título da Questão

            //--------------- Alternativas
            let divOptions = document.createElement('div')
            divOptions.classList.add('options-container')

            let ulOptions = document.createElement('ul')
            ulOptions.classList.add('options-quiz')
            //--------------- Fim das Alternativas

            //--------------- Botão
            let divButton = document.createElement('div')
            divButton.classList.add('actions-quiz')

            let button = document.createElement('button')
            button.classList.add('button-quiz')

            if (htmlLanguage == 'en-us') {
                button.append('Next')
            } else {
                button.append('Próxima')
            }
            

            button.addEventListener('click', evt => {
                if (ulOptions.querySelector('label.checked')) {
                    let currentIndex = parseInt(divQuestion.getAttribute('data-index'))
                    let nextIndex = currentIndex + 1

                    quiz.questions[currentIndex].userAnswers = this.getAnswers(ulOptions)

                    if (nextIndex === quiz.questions.length) {
                        this.loadResults(this.finishQuiz(quiz), divBody, quiz)

                        window.scroll(0, divQuiz.offset().top)
                    } else {
                        this.loadQuestion(nextIndex, h2Question, spanQuestion, spanProgress, ulOptions, quiz, button)
                        divQuestion.setAttribute('data-index', nextIndex)

                        window.scroll(0, h2Question.offset().top)
                    }
                } else {
                    alert('Atenção, pelo menos uma opção deve ser marcada!')
                }
            })
            //--------------- Fim do Botão

            this.loadQuestion(0, h2Question, spanQuestion, spanProgress, ulOptions, quiz)

            //Progresso
            divProgressFill.appendChild(spanProgress)
            divProgress.appendChild(divProgressFill)
            divBody.appendChild(divProgress)
            //Título
            h2Question.appendChild(spanQuestion)
            divQuestion.appendChild(h2Question)
            //Alternativas
            divOptions.appendChild(ulOptions)
            divQuestion.appendChild(divOptions)
            divBody.appendChild(divQuestion)
            //Botão
            divButton.appendChild(button)
            divQuestion.appendChild(divButton)

            divQuiz.appendChild(divBody)
            container.replaceWith(divQuiz)
        })
    }
}

Quiz.prototype.loadQuestion = function (index, imgElement, textElement, progressElement, optionsElement, quiz, button) {
    this.loadProgress(index, progressElement, quiz)
    this.loadTitle(index, imgElement, textElement, quiz)
    this.loadAlternatives(quiz.questions[index].answers, optionsElement, quiz.questions[index])

    if (index === quiz.questions.length - 1) {
        button.innerHTML = 'Finalizar'
    }
}

Quiz.prototype.loadProgress = function (index, progressElement, quiz) {
    let current = index + 1
    progressElement.innerHTML = (`${current} de ${quiz.questions.length}`)

    let root = document.documentElement
    root.style.setProperty('--progress-percentage', percent((index + 1), quiz.questions.length) + '%')
}

Quiz.prototype.loadTitle = function (index, imgElement, textElement, quiz) {
    if (quiz.questions[index].imgTitle) {
        imgElement.style.backgroundImage = `url('${quiz.questions[index].imgTitle}')`
    }

    textElement.innerHTML = quiz.questions[index].title
}

Quiz.prototype.loadAlternatives = function (answers, optionsElement, question) {
    if (optionsElement.querySelector('li')) {
        optionsElement.querySelectorAll('li').forEach(el => {
            el.remove()
        })
    }
    answers.forEach((answer, index) => {
        let liOption = document.createElement('li')
        liOption.classList.add('option-quiz')

        let labelOption = document.createElement('label')
        labelOption.classList.add('option-quiz')
        labelOption.setAttribute('data-index', index)

        let optionElement = document.createElement('input')
        optionElement.setAttribute('name', 'answer')

        if (question.questionType === CONFIG.QT_MULTIPLE) {
            optionElement.setAttribute('type', 'checkbox')

            optionElement.addEventListener('click', evt => {
                if (optionElement.checked) {
                    labelOption.classList.add('checked')
                } else {
                    labelOption.classList.remove('checked')
                }
            })
        } else {
            optionElement.setAttribute('type', 'radio')
            optionElement.addEventListener('click', evt => {
                labelOption.closest('.options-quiz').querySelectorAll('.option-quiz label').forEach(el => {
                    el.classList.remove('checked')
                })

                labelOption.classList.add('checked')
            })
        }

        labelOption.appendChild(optionElement)
        labelOption.appendChild(document.createTextNode(` ${answer.text}`))
        liOption.appendChild(labelOption)
        optionsElement.append(liOption)
    })
}

Quiz.prototype.getAnswers = function (optionsElement) {
    let answers = []

    optionsElement.querySelectorAll('label.checked').forEach((el) => {
        answers.push($(el).attr('data-index'))
    })

    return answers
}

Quiz.prototype.finishQuiz = function (quiz) {
    let total = 0
    quiz.questions.forEach(question => {
        question.userAnswers.forEach(answerIndex => {
            answer = question.answers[answerIndex]

            if (answer.type.cont) {
                answer.type.cont++
            } else {
                answer.type.cont = 1
            }

            total++
        })
    })

    let options = quiz.questions[0].answers
    let results = []

    options.forEach(option => {
        if (option.type.cont) {
            option.type.percent = percent(option.type.cont, total).toFixed(0)
            results.push(option.type)
        }
    })

    return results
}

Quiz.prototype.loadResults = function (results, fatherElement, quiz) {
    let divResult = document.createElement('div')
    divResult.classList.add('quiz-results')

    if (quiz.resultTitle) {
        let title = document.createElement('h2')
        title.classList.add('title-result-quiz')
        title.innerHTML = quiz.resultTitle

        divResult.appendChild(title)
    }

    switch (quiz.resultType) {
        case CONFIG.RT_PROGRESS_BAR:
            this.progressBarResultBuilder(results, divResult)
            break
        case CONFIG.RT_GRAPHIC:
            this.graphicResultBuilder(results, divResult, quiz)
            break
        case CONFIG.RT_TEXT:
            this.textResultBuilder(results, divResult)
            break;
    }

    fatherElement.replaceWith(divResult)
}

Quiz.prototype.graphicResultBuilder = function (results, divResult, quiz) {
    let config = {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
                hoverBorderColor: '#FFF'
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'bottom',
                labels: {
                    padding: 30
                },
                onClick: function (event, elem) {
                    abrirModal(`${results[elem.index].legend}`)
                }
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        return results[tooltipItem.index].legend + ": " + dataset.data[tooltipItem.index] + "%";
                    }
                }
            }
        }
    }

    results.forEach(result => {
        config.data.datasets[0].data.push(result.percent)
        config.data.datasets[0].backgroundColor.push(result.color)
        config.data.datasets[0].borderColor.push(result.borderColor)
    })

    let canvas = document.createElement('canvas')
    canvas.setAttribute('id', `result-${quiz.elementId}`)
    canvas.classList.add('quiz-graphic-result')

    let divCanvas = document.createElement('div')
    divCanvas.classList.add('div-graphic-result')

    divCanvas.appendChild(canvas)
    divResult.appendChild(divCanvas)

    let myChart = new Chart(canvas, config);

    divResult.appendChild(this.legendsBuilder(results, divResult))
}

Quiz.prototype.legendsBuilder = function (results, divResult) {
    let ul = document.createElement('ul')
    ul.classList.add('legends-result-quiz')

    results.forEach((result, index) => {
        let li = document.createElement('li')
        li.classList.add('container-legend-result-quiz')

        let divColor = document.createElement('div')
        divColor.classList.add('color-legend-quiz')
        divColor.style.backgroundColor = result.color

        let spanText = document.createElement('span')
        spanText.classList.add('text-legend-quiz')
        spanText.appendChild(document.createTextNode(result.legend))

        li.addEventListener('click', evt => {
            abrirModal(`${result.legend}`)
        })

        this.feedbackModalBuilder(result, divResult)

        li.appendChild(divColor)
        li.appendChild(spanText)
        ul.appendChild(li)
    })

    return ul
}

Quiz.prototype.feedbackModalBuilder = function (result, divResult) {
    let resultModal = document.createElement('em-modal')
    resultModal.setAttribute('name', result.legend)

    let resultDivModal = document.createElement('div')
    resultDivModal.classList.add('container')

    let resultDivRowModal = document.createElement('div')
    resultDivRowModal.classList.add('row', 'align-items-center', 'justify-content-centerv')

    let resultDivContent = document.createElement('div')
    resultDivContent.classList.add('col-12', 'col-md-12', 'col-lg-12')

    let divTitle = document.createElement('div')
    divTitle.classList.add('modal-title-result')
    divTitle.innerHTML = result.title

    let divContent = document.createElement('div')
    divContent.classList.add('modal-content-result')

    let pContent = document.createElement('p')
    pContent.innerHTML = result.feedback

    resultDivContent.appendChild(divTitle)
    divContent.appendChild(pContent)
    resultDivContent.appendChild(divContent)
    resultDivRowModal.appendChild(resultDivContent)
    resultDivModal.appendChild(resultDivRowModal)
    resultModal.appendChild(resultDivModal)
    divResult.appendChild(resultModal)

    modalList[result.legend] = new Modal(resultModal, divResult)
}

Quiz.prototype.progressBarResultBuilder = function (results, divResult) {
    results.forEach((result, index) => {
        let divPContainer = document.createElement('div')
        divPContainer.classList.add('percent-container')
        divPContainer.setAttribute('data-index', index)

        let spanTitle = document.createElement('span')
        spanTitle.classList.add('percent-title')
        spanTitle.innerHTML = result.legend

        let divPercent = document.createElement('div')
        divPercent.classList.add('percent')

        let divPercentFill = document.createElement('div')
        divPercentFill.classList.add('percent-fill')
        divPercentFill.style.width = result.percent + '%'

        let spanPercent = document.createElement('span')
        spanPercent.classList.add('percent-value')
        spanPercent.innerHTML = result.percent + '%'

        let iInfo = document.createElement('i')
        iInfo.classList.add('fas', 'fa-info-circle', 'info-icon-percent')
        iInfo.addEventListener('click', evt => {
            abrirModal(`${result.legend}`)
        })

        this.feedbackModalBuilder(result, divResult)

        divPContainer.appendChild(spanTitle)
        divPercent.appendChild(divPercentFill)
        divPercent.appendChild(spanPercent)
        divPContainer.appendChild(divPercent)
        divPContainer.appendChild(iInfo)

        divResult.appendChild(divPContainer)
    })
}

Quiz.prototype.textResultBuilder = function (results, divResult) {
    let majorResult

    results.forEach(r => {
        if (!majorResult) {
            majorResult = r
        } else if (r.cont > majorResult.cont) {
            majorResult = r
        }
    })

    let divContainer = document.createElement('div')
    divContainer.classList.add('quiz-text-result', 'p-5', majorResult.color ? majorResult.color : '')

    let divRow = document.createElement('div')
    divRow.classList.add('row', 'justify-content-center')

    divRow.innerHTML = majorResult.title
    divRow.innerHTML += majorResult.feedback

    divContainer.appendChild(divRow)
    divResult.appendChild(divContainer)
}

Quiz.prototype.removeModal = function (el) {
    el.closest('.modal-fade-result').remove()
    document.querySelector('body').classList.toggle('modal-showing')
}