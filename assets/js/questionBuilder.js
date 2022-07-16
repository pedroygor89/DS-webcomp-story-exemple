let contQuestions

function questionsBuilder(moduleElement, themeRef) {
	let recoveredQuestions = []	

	if (typeof exercises !== 'undefined') {
		for (let index in exercises) {
			let element = moduleElement.querySelector(`#${index}`)

			if (element !== null) {
				let questionsI = element.getAttribute('id')
				let validQuestions = []

				exercises[index].questions.forEach((question, index) => {
					element.appendChild(questionBuilder(question, index, questionsI, moduleElement, configBtnExerciseBuilder, themeRef))
					validQuestions.push(question)
				})

				if (printVersion) {
					buildQuestionPrintVersion(validQuestions, questionsI, element)
				}
			}
		}
	}

	moduleElement.querySelectorAll(`.question`).forEach((el) => {
		let questionsI = el.getAttribute('id')
		let validQuestions = []

		if (questions[questionsI]) {
			prepareUnlockCondition(questionsI)

			questions[questionsI].questions.forEach((question, index) => {
				el.appendChild(questionBuilder(question, index, questionsI, moduleElement, configBtnDefaultBuilder, themeRef, recoveredQuestions))
				validQuestions.push(question)
			})
		} else {
			console.warn('############')
			console.warn(`####### ATENÇÃO: O elemento ${questionsI} não foi encontrado no documento questions.js.`)
			console.warn('############')
		}

		if (printVersion) {
			buildQuestionPrintVersion(validQuestions, questionsI, el)
		}
	})

	moduleElement.querySelectorAll(`.practice-test`).forEach((el) => {
		let questionsI = el.getAttribute('id')
		let validQuestions = []

		if (questions[questionsI]) {
			questions[questionsI].questions.forEach((question, index) => {
				el.appendChild(questionBuilder(question, index, questionsI, moduleElement, configBtnPracticeTestBuilder, themeRef))
				validQuestions.push(question)
			})

			practiceTestButtonBuilder(el, questionsI)
		} else {
			console.warn('############')
			console.warn(`####### ATENÇÃO: O elemento ${questionsI} não foi encontrado no documento questions.js.`)
			console.warn('############')
		}

		if (printVersion) {
			buildQuestionPrintVersion(validQuestions, questionsI, el)
		}
	})
	
	return recoveredQuestions
}

function buildQuestionPrintVersion(validQuestions, indexQuestions, el) {
	let divAllAnswers = document.createElement('div')
	divAllAnswers.classList.add('container-all-answers')

	let spanTitle = document.createElement('span')
	spanTitle.classList.add('span-title-all-answers')

	element = typeof questions[indexQuestions] !== 'undefined' ? questions : typeof exercises[indexQuestions] !== 'undefined' ? exercises : null

	spanTitle.innerHTML = element && typeof element[indexQuestions].printTitle !== 'undefined' ? element[indexQuestions].printTitle : 'Gabarito'


	validQuestions.forEach(question => {
		divAllAnswers.appendChild(createCorrectAnswerStructure(question, defaultQuestionData,
			indexQuestions, element[indexQuestions].questions.findIndex(q => q.title === question.title)))
	})

	el.appendChild(spanTitle)
	el.appendChild(divAllAnswers)
}

//estrutura para impressão
function createCorrectAnswerStructure(question, defaultText, indexQuestions, indexQuestion) {
	let divContainer = document.createElement('div')
	divContainer.classList.add('container-print-answer')

	let divTitle = document.createElement('p')
	divTitle.innerHTML = question.title

	let letters = []

	question.answers.forEach((a, i) => {
		if (a.correct) {
			let input = document.querySelector(`#questions-${indexQuestions}-question-${indexQuestion}-option${i}`)

			letters.push(getLetter(input))
		}
	})

	let text

	if (typeof defaultPrintData !== 'undefined') {
		text = question.positiveFeedback.text.replace(/(\{\{defaultText\}\})/igm, defaultPrintData)
	} else if (typeof defaultText !== 'undefined') {
		text = question.positiveFeedback.text.replace(/(\{\{defaultText\}\})/igm, defaultText.positiveFeedback)
	}

	text = text.replace(/(\{\{correta\}\})/igm, letters)

	let divFeedback = document.createElement('p')
	divFeedback.innerHTML = text

	divContainer.appendChild(divTitle)
	divContainer.appendChild(divFeedback)

	return divContainer
}

function prepareUnlockCondition(questionsI) {
	if (questions[questionsI].unlockCondition) {
		if (isNaN(questions[questionsI].unlockCondition)) {
			let remove = []

			questions[questionsI].unlockCondition.forEach((unlockQuestion, index) => {
				let found = questions[questionsI].questions.filter(question => {
					return question.questionId === unlockQuestion
				})

				if (found.length === 0) {
					console.warn('############')
					console.warn(`####### ATENÇÃO: A questão de ID ${unlockQuestion} definida como condição de desbloqueio de módulo não foi encontrada no documento questions.js.`)
					console.warn('############')

					remove.push(index)
				}
			})

			remove.forEach(i => {
				questions[questionsI].unlockCondition.splice(i, 1)
			})

			if (questions[questionsI].unlockCondition.length > 0) {
				questions[questionsI].hitQuestions = []
			} else {
				delete questions[questionsI].unlockCondition
			}
		} else {
			if (questions[questionsI].unlockCondition <= questions[questionsI].questions.length) {
				questions[questionsI].hitQuestions = 0
			} else {
				console.warn('############')
				console.warn(`####### ATENÇÃO: O número de acertos necessários para desbloqueio do módulo referentes ao grupo de questões ${questionsI} é maior do que a quantidade de questões informadas no documento questions.js.`)
				console.warn('############')

				delete questions[questionsI].unlockCondition
			}
		}
	}
}

function questionBuilder(question, indexQ, indexQuestions, moduleElement, configButtons, themeRef, recoveredQuestions) {
	let questionDiv = document.createElement('div')
	questionDiv.classList.add('question-main-container')
	questionDiv.setAttribute('id', `questions-${indexQuestions}-question-${indexQ}-main-container`)

	let form = document.createElement('form')
	form.classList.add('form')

	let titleH3 = document.createElement('h3')

	let titleSpan = document.createElement('span')
	titleSpan.innerHTML = question.title

	let alternativesDiv = document.createElement('div')
	alternativesDiv.classList.add('alternatives')

	if (question.answers) {
		alternativesBuilder(question, indexQ, alternativesDiv, indexQuestions)
	}

	if(!question.buttonName){
		question.buttonName = 'Responder'
	}

	let buttonsDiv = document.createElement('div')
	buttonsDiv.classList.add('container-buttons-question-feedback')

	let feedbackBtn = document.createElement('button')
	feedbackBtn.classList.add('btn', 'text-dark', 'mdc-bg-yellow-700', 'question-feedback-btn')
	feedbackBtn.setAttribute('id', `feedback-button-questions-${indexQuestions}-question-${indexQ}`)
	feedbackBtn.setAttribute('type', 'button')
	feedbackBtn.appendChild(document.createTextNode(question.buttonName))

	configButtons(feedbackBtn, questionDiv, question, indexQuestions, indexQ, buttonsDiv, moduleElement, themeRef)

	titleH3.appendChild(titleSpan)
	form.appendChild(titleH3)
	form.appendChild(alternativesDiv)
	buttonsDiv.appendChild(feedbackBtn)
	form.appendChild(buttonsDiv)
	questionDiv.appendChild(form)
	feedbackBuilder(indexQ, questionDiv, indexQuestions, question, feedbackBtn)
	
	if (recoveredQuestions && question.recovered) {
		recoveredQuestions.push(feedbackBtn)		
	}

	return questionDiv
}

function alternativesBuilder(question, indexQ, alternativesDiv, indexQuestions) {
	let recoveredQuestion = null

	if (typeof storage !== 'undefined' && storage.answers !== undefined && storage.answers.length > 0) {
		recoveredQuestion = storage.answers.find(a => {
			return a.questionId === question.uuid
		})		
	}

	let type = question.answers.filter(el => {
		return el.correct
	}).length > 1 ? 'checkbox' : 'radio'

	question.totalCorrectsAnswers = 0
	question.answers.forEach((alternative, indexA) => {
		let alternativeDiv = document.createElement('div')
		alternativeDiv.classList.add('inputGroup')

		let input = document.createElement('input')
		input.setAttribute('type', type)
		input.setAttribute('name', `questions-${indexQuestions}-question-${indexQ}`)
		input.setAttribute('id', `questions-${indexQuestions}-question-${indexQ}-option${indexA}`)
		input.dataset.index = indexA

		if (recoveredQuestion !== null && recoveredQuestion !== undefined) {
			let hasAnswer = recoveredQuestion.answers.includes(alternative.uuid)

			if (hasAnswer) {
				input.checked = true
				question.recovered = true
			}
		}

		let label = document.createElement('label')
		label.setAttribute('for', `questions-${indexQuestions}-question-${indexQ}-option${indexA}`)

		let text = document.createElement('div')
		text.classList.add('alternative-text')
		text.innerHTML = alternative.text

		let checkSpan = document.createElement('span')
		checkSpan.classList.add('questions-checkbox-container')
		let icon = document.createElement('span')
		icon.classList.add('questions-checkbox-icon', 'fas', 'fa-circle')

		label.appendChild(text)
		label.appendChild(checkSpan)
		checkSpan.appendChild(icon)

		alternativeDiv.appendChild(input)
		alternativeDiv.appendChild(label)
		alternativesDiv.appendChild(alternativeDiv)

		if (alternative.correct) {
			question.totalCorrectsAnswers++
		}
	})
}

function feedbackBuilder(indexQ, questionDiv, indexQuestions, question, feedbackBtn) {

	if(!question.titleFeedback){
		question.titleFeedback = 'Comentário'
	}
	let feedbackDiv = document.createElement('div')
	feedbackDiv.classList.add('box-feedback-question')
	feedbackDiv.setAttribute('id', `box-feedback-questions-${indexQuestions}-question-${indexQ}`)

	let titleDiv = document.createElement('div')
	titleDiv.classList.add('feedback-default-title')
	titleDiv.setAttribute('id', `title-feedback-questions-${indexQuestions}-question-${indexQ}`)
	titleDiv.appendChild(document.createTextNode(question.titleFeedback))

	let textDiv = document.createElement('div')
	textDiv.classList.add('feedback-text')
	textDiv.setAttribute('id', `text-feedback-questions-${indexQuestions}-question-${indexQ}`)

	feedbackDiv.appendChild(titleDiv)
	feedbackDiv.appendChild(textDiv)
	questionDiv.appendChild(feedbackDiv)
}

function showFeedback(questionDiv, indexQ, feedbackText, cssClass, indexQuestions, letters, themeRef, moduleElement) {
	feedbackText.text = feedbackText.text.replace(/(\{\{correta\}\})/igm, letters)

	if (feedbackText.title) {
		feedbackText.title = feedbackText.title.replace(/(\{\{correta\}\})/igm, letters)
		questionDiv.querySelector(`#title-feedback-questions-${indexQuestions}-question-${indexQ}`).innerHTML = feedbackText.title
	}

	questionDiv.querySelector(`#text-feedback-questions-${indexQuestions}-question-${indexQ}`).innerHTML = feedbackText.text

	let boxFeedback = questionDiv.querySelector(`#box-feedback-questions-${indexQuestions}-question-${indexQ}`)
	boxFeedback.classList.add('show')
	boxFeedback.classList.add(cssClass)

	$(function () {
        $('[data-toggle="tooltip"]').tooltip()
	})
	
	configHiddenElements(boxFeedback.getAttribute('id'), themeRef.feedback, moduleElement)
}

function correctAnswersAction(indexQuestions, moduleElement, question, themeRef) {
	if (questions[indexQuestions].unlockCondition) {
		if (!isNaN(questions[indexQuestions].unlockCondition)) {
			questions[indexQuestions].hitQuestions++

			if (questions[indexQuestions].unlockCondition === questions[indexQuestions].hitQuestions) {
				themeRef.unlockModule(moduleElement, question.recovered)
			}
		} else {
			if (question.questionId) {
				questions[indexQuestions].unlockCondition.filter(unlockQuestion => {
					if (question.questionId === unlockQuestion) {
						questions[indexQuestions].hitQuestions.push(question.questionId)
					}
				})

				if (questions[indexQuestions].unlockCondition.length === questions[indexQuestions].hitQuestions.length) {
					themeRef.unlockModule(moduleElement, question.recovered)
				}
			}
		}
	}
}

function tryAgainButtonAction(indexQ, questionDiv, feedbackBtn, evt, indexQuestions) {
	questionDiv.querySelectorAll('input').forEach((el) => {
		el.removeAttribute('disabled')
		el.checked = false
		el.classList.remove('correct', 'incorrect')
	})

	feedbackBtn.classList.remove('hidden')
	evt.target.classList.add('hidden')
	document.querySelector(`#box-feedback-questions-${indexQuestions}-question-${indexQ}`).classList.remove('show')
}

function getLetter(input) {
	let letter = window.getComputedStyle(input.parentElement.querySelector('.questions-checkbox-container'), '::before').getPropertyValue('content')
	if (!letter || letter.toUpperCase() == 'NONE') {
		letter = window.getComputedStyle(input.parentElement.querySelector('p'), '::before').getPropertyValue('content')
	}

	return letter.replace(')', '').toUpperCase()
}

function answerButtonActionQuestion(evt, questionDiv, question, indexQuestions, indexQ, getResponse, defaultaData, themeRef, moduleElement) {
	if (question.answers) {		
		if (questionDiv.querySelector('input:checked')) {
			questionDiv.querySelectorAll('input').forEach((el) => {
				el.setAttribute('disabled', true)
			})

			let response = getResponse(question, questionDiv, indexQuestions, indexQ)
			let totalCorrects = response[1]
			let letters = response[0]
			let selection = response[2]

			evt.target.classList.add('hidden')

			if (question.totalCorrectsAnswers === totalCorrects && selection.length === totalCorrects) {				
				if (typeof defaultaData !== 'undefined') {
					question.positiveFeedback.text = question.positiveFeedback.text.replace(/(\{\{defaultText\}\})/igm, defaultaData.positiveFeedback)
				}
				showFeedback(questionDiv, indexQ, question.positiveFeedback, 'positiveFeedback', indexQuestions, letters, themeRef, moduleElement)
				
				return 1
			} else {
				if (typeof defaultaData !== 'undefined') {
					question.negativeFeedback.text = question.negativeFeedback.text.replace(/(\{\{defaultText\}\})/igm, defaultaData.negativeFeedback)
				}

				if (question.negativeFeedback.link) {
					question.negativeFeedback.text = question.negativeFeedback.text.replace(/(\{\{link\}\})/igm, question.negativeFeedback.link)
				}

				showFeedback(questionDiv, indexQ, question.negativeFeedback, 'negativeFeedback', indexQuestions, letters, themeRef, moduleElement)

				return 0
			}
		} else {

			if(!question.textAlertNoOption){
				question.textAlertNoOption = 'Atenção, pelo menos uma opção deve ser marcada!'
			}

			alert(question.textAlertNoOption)

			evt.stopImmediatePropagation()
		}
	} else {
		evt.target.classList.add('hidden')

		if (typeof defaultaData !== 'undefined') {
			question.positiveFeedback.text = question.positiveFeedback.text.replace(/(\{\{defaultText\}\})/igm, defaultaData.positiveFeedback)
		}

		showFeedback(questionDiv, indexQ, question.positiveFeedback, 'positiveFeedback', indexQuestions)

		return 1
	}
}

// normal questions part 
function configBtnDefaultBuilder(feedbackBtn, questionDiv, question, indexQuestions, indexQ, buttonsDiv, moduleElement, themeRef) {
	feedbackBtn.addEventListener('click', evt => {
		history.replaceState(null, null, ' ');
		
		let result = answerButtonActionQuestion(evt, questionDiv, question, indexQuestions, indexQ, getResponseDefault, defaultQuestionData, themeRef, moduleElement)

		if (result === 1) {
			correctAnswersAction(indexQuestions, moduleElement, question, themeRef)
		} else if (result === 0) {
			document.querySelector(`#try-again-button-questions-${indexQuestions}-question-${indexQ}`).classList.remove('hidden')
		}

		let boxFeedback = questionDiv.querySelector(`#box-feedback-questions-${indexQuestions}-question-${indexQ}`)
		window.scrollTo(0, boxFeedback.offset().top - (getMenuSize() + 30))
	})

	if(!question.buttonFeedbackTryAgain){
		question.buttonFeedbackTryAgain = 'Tentar novamente'
	}

	let tryAgainBtn = document.createElement('button')
	tryAgainBtn.classList.add('btn', 'text-white', 'mdc-bg-green-900', 'try-again', 'hidden')
	tryAgainBtn.setAttribute('id', `try-again-button-questions-${indexQuestions}-question-${indexQ}`)
	tryAgainBtn.setAttribute('type', 'button')
	tryAgainBtn.appendChild(document.createTextNode(question.buttonFeedbackTryAgain))
	tryAgainBtn.addEventListener('click', evt => {
		question.recovered = undefined
		tryAgainButtonAction(indexQ, questionDiv, feedbackBtn, evt, indexQuestions)
	})

	buttonsDiv.appendChild(tryAgainBtn)
}
 
function configBtnExerciseBuilder(feedbackBtn, questionDiv, question, indexQuestions, indexQ, buttonsDiv, moduleElement, themeRef) {
	feedbackBtn.addEventListener('click', evt => {
		history.replaceState(null, null, ' ');

		let result = answerButtonActionQuestion(evt, questionDiv, question, indexQuestions, indexQ, getResponsePracticeTest, defaultExerciseData, themeRef, moduleElement)

		if (result === 0 && !(exercises[indexQuestions].btnTryAgain != undefined && !question.btnTryAgain)) {
			document.querySelector(`#try-again-button-questions-${indexQuestions}-question-${indexQ}`).classList.remove('hidden')
		}

		let boxFeedback = document.querySelector(`#box-feedback-questions-${indexQuestions}-question-${indexQ}`)
		window.scrollTo(0, boxFeedback.offset().top - (getMenuSize() + 30))
	})

	if (!(exercises[indexQuestions].btnTryAgain != undefined && !question.btnTryAgain)) {
		let tryAgainBtn = document.createElement('button')
		tryAgainBtn.classList.add('btn', 'text-white', 'mdc-bg-green-900', 'try-again', 'hidden')
		tryAgainBtn.setAttribute('id', `try-again-button-questions-${indexQuestions}-question-${indexQ}`)
		tryAgainBtn.setAttribute('type', 'button')
		tryAgainBtn.appendChild(document.createTextNode('Tentar novamente'))
		tryAgainBtn.addEventListener('click', evt => {
			tryAgainButtonAction(indexQ, questionDiv, feedbackBtn, evt, indexQuestions)
		})

		buttonsDiv.appendChild(tryAgainBtn)
	}
}

function getResponseDefault(question, questionDiv) {
	let selectedIds = []
	let totalCorrects = 0
	let letters = []
	let selection = questionDiv.querySelectorAll('input:checked')

	selection.forEach((input) => {
		if (typeof storage !== 'undefined' && question.answers[input.dataset.index].uuid) {
			selectedIds.push(question.answers[input.dataset.index].uuid)
		}

		if (question.answers[input.dataset.index].correct) {
			input.classList.add('correct')
			totalCorrects++
			letters.push(getLetter(input))
		} else {
			input.classList.add('incorrect')
		}
	})
	
	if (typeof storage !== 'undefined' && question.uuid && typeof question.recovered === 'undefined') {
		storage.sendAnswers(question.uuid, selectedIds)
	}

	return [letters, totalCorrects, selection]
}

// practice test part
function configBtnPracticeTestBuilder(feedbackBtn, questionDiv, question, indexQuestions, indexQ, buttonsDiv, moduleElement, themeRef) {
	buttonsDiv.classList.add('hidden')

	feedbackBtn.addEventListener('click', evt => {
		let result = answerButtonActionQuestion(evt, questionDiv, question, indexQuestions, indexQ, getResponsePracticeTest, defaultPracticeTestData, themeRef, moduleElement)

		if (result === 1 || result === 0) {
			contQuestions--

			if (contQuestions === 0) {
				setTimeout(function () {
					removeLoadingElement()
				}, 3000)
			}
		}
	})
}

function getResponsePracticeTest(question, questionDiv, indexQuestions, indexQ) {
	let totalCorrects = 0

	let selection = questionDiv.querySelectorAll('input:checked')
	selection.forEach((input) => {
		if (question.answers[input.dataset.index].correct) {
			totalCorrects++
		} else {
			input.classList.add('incorrect')
		}
	})

	let letters = []
	question.answers.forEach((answer, index) => {
		if (answer.correct) {
			let el = questionDiv.querySelector(`#questions-${indexQuestions}-question-${indexQ}-option${index}`)
			el.classList.add('correct')
			letters.push(getLetter(el))
		}
	})

	return [letters, totalCorrects, selection]
}

function practiceTestButtonBuilder(container, indexQuestions) {
	let practiceTest = questions[indexQuestions]
	let buttonDiv = document.createElement('div')
	buttonDiv.classList.add('container-buttons-practice-test')

	let feedbackBtn = document.createElement('button')
	feedbackBtn.classList.add('btn', 'text-dark', 'mdc-bg-yellow-700', 'question-feedback-btn')
	feedbackBtn.setAttribute('id', `feedback-button-practice-test-${container.getAttribute('id')}`)
	feedbackBtn.setAttribute('type', 'button')
	feedbackBtn.appendChild(document.createTextNode(practiceTest.textButton ? practiceTest.textButton : 'Finalizar'))
	feedbackBtn.addEventListener('click', evt => {
		finishPracticeTest(container, evt, practiceTest, indexQuestions)
	})

	buttonDiv.appendChild(feedbackBtn)
	container.appendChild(buttonDiv)
}

function finishPracticeTest(container, evt, practiceTest, indexQuestions) {
	let containerQuestions = []

	for (div of container.querySelectorAll('.question-main-container')) {
		if (div.querySelector('input:checked')) {
			containerQuestions.push(div)
		} else if (div.querySelector('input')) {
			alert('Atenção, todas as perguntas devem ser respondidas!')
			evt.stopImmediatePropagation()
			return
		} else {
			containerQuestions.push(div)
		}
	}

	if (practiceTest.finishingLoader !== false) {
		createLoadingElement('Aguarde enquanto preparamos tudo por aqui.', 'Isso pode levar alguns instantes.')
	}

	contQuestions = containerQuestions.length

	containerQuestions.forEach(div => {
		div.querySelector('.question-feedback-btn').click()
	})

	window.scroll(0, container.querySelector(`#questions-${indexQuestions}-question-0-main-container`).offset().top - getMenuSize())

	if (!practiceTest.hiddeBtnByEnd) {
		let toTopBtn = document.createElement('button')
		toTopBtn.classList.add('btn', 'text-dark', 'mdc-bg-yellow-700', 'question-feedback-btn')
		toTopBtn.setAttribute('type', 'button')
		toTopBtn.appendChild(document.createTextNode('Voltar para o topo'))
		toTopBtn.addEventListener('click', evt => {
			window.scroll(0, container.querySelector(`#questions-${indexQuestions}-question-0-main-container`).offset().top)
		})

		container.querySelector('.container-buttons-practice-test').replaceChild(toTopBtn,
			container.querySelector(`#feedback-button-practice-test-${container.getAttribute('id')}`))
	} else {
		container.querySelector(`#feedback-button-practice-test-${container.getAttribute('id')}`).classList.add('hidden')
	}
}