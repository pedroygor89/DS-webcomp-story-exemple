//criar o objeto tema e inserir os módulos e o achievement
function Theme() {
	this.modules = []

	printVersion ? this.renderPrintVersion() : this.render()
}

Theme.prototype.render = function () {
	// this.validateIds()

	if (typeof scripts !== 'undefined' && scripts.feedback) {
		this.feedback = new FeedbackBuilder()
	}

	document.querySelectorAll('module').forEach((el, i) => {
		this.modules.push(new Module(el, i, this.feedback, this))
	})

	if (typeof scripts !== 'undefined') {
		if (scripts.menu) {
			this.menu = new Menu(this.modules)
		}

		if (scripts.achievements) {
			this.achievements = new Achievements(this.modules)
		}

		if (scripts.themeDefaultBar) {
			this.themeDefaultBar = new ThemeDefaultBar(this.modules.filter(m => {
				return m.step !== 'false'
			}))
		} else if (scripts.themeProgressBar) {
			this.themeProgressBar = new ThemeProgressBar(this.modules.filter(m => {
				return m.step !== 'false'
			}))
		}
	}

	this.modules.forEach(m => {
		if (m.recoveredQuestions) {
			m.recoveredQuestions.forEach(el => {
				el.click()
			})
		}
	})

	window.addEventListener('hashchange', function (e) {
		let target = document.querySelector(`${location.hash}`)

		if (target) {
			let targetPosition = target.getBoundingClientRect().top + window.pageYOffset
			targetPosition -= getMenuSize()
			targetPosition -= 50

			window.scroll(0, targetPosition)
		}
	});

	return this
}

Theme.prototype.unlockModule = function (moduleElement, recovered) {
	let i = parseInt(moduleElement.dataset.referentialIndex)
	let iNext = i + 1

	if (this.modules[iNext] && this.modules[iNext].locked) {
		this.modules[iNext].unlock(this)

		if (this.modules[i].element.querySelector('.unlock-hide')) {
			this.modules[i].element.querySelectorAll('.unlock-hide').forEach(el => {
				el.classList.add('hidden')
			})
		}

		if (this.modules[i].element.querySelector('.unlock-show')) {
			this.modules[i].element.querySelectorAll('.unlock-show').forEach(el => {
				el.classList.remove('hidden')
			})
		}
	}

	if (typeof recovered === 'undefined' && this.modules[i].achievement) {
		this.achievements.startAnimation(this.modules[i].achievement, (this.modules[iNext].title + ' Desbloqueado'))
	}

	if (this.themeDefaultBar) {
		this.themeDefaultBar.activateAnimation(i, this.modules.filter(m => {
			return m.step !== 'false'
		}))
	}
}

Theme.prototype.renderPrintVersion = function () {
	document.querySelectorAll('[style]').forEach(el => {
		el.removeAttribute('style')
	})

	document.querySelectorAll('.no-print-get-title').forEach(el => {
		let title = el.getAttribute('title')

		if (title) {
			let pTitle = document.createElement('p')
			pTitle.classList.add('title-from-img')
			pTitle.innerHTML = title

			el.parentElement.replaceChild(pTitle, el)
		}
	})

	document.querySelectorAll('module').forEach((module, i) => {
		if (module.dataset.locked === 'true') {
			module.dataset.locked === 'false'
		}

		this.modules.push(new Module(module, i))
	})
}

Theme.prototype.validateIds = function () {
	if (!prodEnv) {
		this.validateQuestions()
		this.validateVideos()
	}
}

Theme.prototype.validateQuestions = function () {
	let errors = {
		question: '\n------Questões:',
		answer: '\n------Alternativas:',
		ids: '\n------Elementos com id repetido (DEVEM SER ALTERADOS!!):'
	}

	let ids = []
	let showAlert = false

	this.contMissingIds = 0

	for (q in questions) {
		let container = questions[q]

		container.questions.forEach((question, index) => {
			if (!question.uuid || !isUUID(question.uuid)) {
				showAlert = true
				errors.question += `\n${(index+1)}ª questão em ${q}`
				this.contMissingIds++
			} else {
				if (ids.includes(question.uuid)) {
					showAlert = true
					errors.ids += `\n${(index+1)}ª questão em ${q}`
					this.contMissingIds++
				} else {
					ids.push(question.uuid)
				}
			}

			question.answers.forEach((answer, i) => {
				if (!answer.uuid || !isUUID(answer.uuid)) {
					showAlert = true
					errors.answer += `\n${(i+1)}ª alternativa da ${(index+1)}ª questão em ${q}`
					this.contMissingIds++
				} else {
					if (ids.includes(answer.uuid)) {
						showAlert = true
						errors.ids += `\n${(i+1)}ª alternativa da ${(index+1)}ª questão em ${q}`
						this.contMissingIds++
					} else {
						ids.push(answer.uuid)
					}
				}
			})
		})
	}

	if (showAlert) {
		alert(`Problemas de id em:${errors.question}${errors.answer}${errors.ids}`)
	}
}

Theme.prototype.validateVideos = function () {
	let videos = ''

	document.querySelectorAll('iframe').forEach(iframe => {
		if (iframe.getAttribute('id')) {
			if (document.querySelectorAll(`#${iframe.getAttribute('id')}`).length > 1) {
				videos += `${iframe.getAttribute('id')}\n`
			}
		}
	})

	if (videos !== '') {
		alert(`ATENÇÃO! Os seguintes ids de iframe estão sendo repetidos:\n${videos}`)
	}
}

Theme.prototype.updateProgress = function () {
	if (typeof storage !== 'undefined' && typeof storage.progress !== 'undefined' && storage.progress !== null && document.querySelector(`#${storage.progress}`) !== null) {
		window.scroll(0, document.querySelector(`#${storage.progress}`).offset().top - (getMenuSize() + 30))
	}
}

const theme = new Theme()